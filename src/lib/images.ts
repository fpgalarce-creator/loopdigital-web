export type CloudinaryOptions = {
  width?: number;
  height?: number;
  format?: string;
  quality?: number | 'auto';
};

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const baseFolder = import.meta.env.VITE_CLOUDINARY_BASE_FOLDER;

export const buildCloudinaryUrl = (path: string, opts: CloudinaryOptions = {}): string | null => {
  if (!cloudName || !baseFolder) return null;
  const segments: string[] = [];

  if (opts.width) segments.push(`w_${opts.width}`);
  if (opts.height) segments.push(`h_${opts.height}`);
  if (opts.quality) segments.push(`q_${opts.quality}`);
  if (opts.format) segments.push(`f_${opts.format}`);

  const transformation = segments.length ? `${segments.join(',')}/` : '';
  const normalizedPath = path.replace(/^\/+/, '');
  const fullPath = [baseFolder.replace(/\/+$/, ''), normalizedPath].filter(Boolean).join('/');

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}${fullPath}`;
};

export const getLocalImage = (relativePath: string) => `/images/${relativePath.replace(/^\/+/, '')}`;
export const getMockupImage = (relativePath: string) => `/mockups/${relativePath.replace(/^\/+/, '')}`;
