export type CloudinaryOptions = {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit';
};

const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Imagen de respaldo"><rect width="400" height="240" rx="24" fill="%23e2e8f0"/><path d="M120 160l44-54a8 8 0 0112 0l44 54" stroke="%2394a3b8" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="134" cy="116" r="14" fill="%2394a3b8"/></svg>';

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const baseFolder = import.meta.env.VITE_CLOUDINARY_BASE_FOLDER;

const normalizePath = (relativePath?: string) => (relativePath ? relativePath.replace(/^\/+/, '') : '');
const withLeadingSlash = (relativePath?: string) => (relativePath ? `/${normalizePath(relativePath)}` : '');

export const cloudinaryEnabled = () => Boolean(cloudName);

const normalizeBaseFolder = () => normalizePath(baseFolder);

export const buildCloudinaryUrl = (publicId: string, opts: CloudinaryOptions = {}): string => {
  if (!cloudinaryEnabled()) return PLACEHOLDER_IMAGE;

  const transformations = ['f_auto', 'q_auto', 'dpr_auto'];
  if (opts.width) transformations.push(`w_${opts.width}`);
  if (opts.height) transformations.push(`h_${opts.height}`);
  if (opts.crop) transformations.push(`c_${opts.crop}`);

  const normalizedPublicId = normalizePath(publicId);
  const normalizedBaseFolder = normalizeBaseFolder();
  const fullPath = normalizedBaseFolder ? `${normalizedBaseFolder}/${normalizedPublicId}` : normalizedPublicId;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations.join(',')}/${fullPath}`;
};

export const resolveImage = (params: { localSrc?: string; cloudPublicId?: string; width?: number; height?: number }) => {
  const { localSrc, cloudPublicId, width, height } = params;

  if (cloudPublicId && cloudinaryEnabled()) {
    return buildCloudinaryUrl(cloudPublicId, { width, height });
  }

  const normalizedLocal = withLeadingSlash(localSrc);
  if (normalizedLocal) return normalizedLocal;

  return PLACEHOLDER_IMAGE;
};

export const getLocalImage = (relativePath: string) => `/images/${normalizePath(relativePath)}`;
export const getMockupImage = (relativePath: string) => `/mockups/${normalizePath(relativePath)}`;
export { PLACEHOLDER_IMAGE };
