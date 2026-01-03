import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { PLACEHOLDER_IMAGE, resolveImage } from '../lib/images';

type SmartImageProps = {
  alt: string;
  localSrc?: string;
  cloudPublicId?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function SmartImage({
  alt,
  localSrc,
  cloudPublicId,
  width,
  height,
  className,
  priority = false,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  const resolvedSrc = useMemo(
    () => resolveImage({ localSrc, cloudPublicId, width, height }),
    [localSrc, cloudPublicId, width, height],
  );

  return (
    <img
      src={hasError ? PLACEHOLDER_IMAGE : resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      className={clsx('object-cover', className)}
      onError={() => setHasError(true)}
    />
  );
}
