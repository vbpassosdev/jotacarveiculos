import { supabase } from '../supabaseClient';

export const FALLBACK_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%22360%22 viewBox=%220 0 640 360%22%3E%3Crect width=%22640%22 height=%22360%22 fill=%22%23ececec%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23666%22 font-family=%22Arial%22 font-size=%2228%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ESem imagem%3C/text%3E%3C/svg%3E';

export function preloadImage(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(url);
    image.onerror = () => reject(new Error('Falha ao carregar imagem'));
    image.src = url;
  });
}

function normalizeStoragePath(pathOrUrl: string, bucketName: string): string {
  const sanitized = (pathOrUrl || '').trim();
  if (!sanitized) return '';

  try {
    const parsed = new URL(sanitized);
    const marker = `/storage/v1/object/public/${bucketName}/`;
    const markerIndex = parsed.pathname.indexOf(marker);

    if (markerIndex >= 0) {
      return decodeURIComponent(parsed.pathname.slice(markerIndex + marker.length));
    }
  } catch {
    // Not a URL, continue with plain path normalization.
  }

  const noLeadingSlash = sanitized.replace(/^\/+/, '');
  const bucketPrefix = `${bucketName}/`;

  if (noLeadingSlash.startsWith(bucketPrefix)) {
    return noLeadingSlash.slice(bucketPrefix.length);
  }

  return noLeadingSlash;
}

export function getPublicImageUrl(pathOrUrl: string, bucketName = 'imagens'): string {
  if (!pathOrUrl) return FALLBACK_IMAGE;

  if (
    pathOrUrl.startsWith('http://') ||
    pathOrUrl.startsWith('https://') ||
    pathOrUrl.startsWith('data:image/')
  ) {
    if (!pathOrUrl.includes('/storage/v1/object/public/')) {
      return pathOrUrl;
    }
  }

  const normalizedPath = normalizeStoragePath(pathOrUrl, bucketName);
  if (!normalizedPath) return FALLBACK_IMAGE;

  const { data } = supabase.storage.from(bucketName).getPublicUrl(normalizedPath);
  return data.publicUrl || FALLBACK_IMAGE;
}