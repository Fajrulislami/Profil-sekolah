export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB

export async function validateImageUrl(url: string): Promise<string | null> {
  if (!url) return null;
  
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'URL gambar harus diawali dengan http:// atau https://';
  }

  try {
    const response = await fetch(url, { method: 'HEAD' });
    
    if (!response.ok) {
      console.warn(`Peringatan: URL gambar merespon dengan status ${response.status}, dilewati.`);
      return null;
    }

    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (!contentType.startsWith('image/')) {
        return 'URL yang diberikan bukan gambar yang valid';
      }
      
      if (contentType === 'image/svg+xml') {
        return 'Tipe gambar SVG tidak diperbolehkan';
      }
    }

    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > MAX_IMAGE_SIZE) {
      return 'Ukuran gambar maksimal adalah 10MB';
    }

    return null; // Valid
  } catch (error) {
    // Some image hosts block HEAD requests or fetch from bots.
    // Instead of completely blocking the user, we log the error and allow it.
    console.warn("Peringatan: Gagal melakukan validasi fetch URL gambar, dilewati.", error);
    return null; 
  }
}
