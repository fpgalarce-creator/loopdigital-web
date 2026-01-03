import { useMemo, useState } from 'react';
import clsx from 'clsx';

type SmartImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  rounded?: boolean;
  fallbackSrc?: string;
};

const PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Imagen de respaldo"><rect width="400" height="240" rx="24" fill="%23e2e8f0"/><path d="M120 160l44-54a8 8 0 0112 0l44 54" stroke="%2394a3b8" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="134" cy="116" r="14" fill="%2394a3b8"/></svg>';

const normalizeSrc = (value?: string | null) => {
  if (!value) return null;
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  const cleaned = value.startsWith('/') ? value : `/${value}`;
  return cleaned;
};

export function SmartImage({
  src,
  alt,
  className,
  width,
  height,
  rounded = true,
  fallbackSrc,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  const resolvedSrc = useMemo(() => normalizeSrc(src) ?? fallbackSrc ?? PLACEHOLDER, [src, fallbackSrc]);

  return (
    <img
      src={hasError ? fallbackSrc ?? PLACEHOLDER : resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={clsx('object-cover', rounded && 'rounded-2xl', className)}
      onError={() => setHasError(true)}
    />
  );
}

export default SmartImage;
