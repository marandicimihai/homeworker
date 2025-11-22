const apiBase: string = 'http://localhost:5173/api';

export async function uploadTextbook(file: File): Promise<{ success: boolean; message: string }> {
    const formData = new FormData();
    formData.append('textbook', file);

    const response = await fetch(`${apiBase}/textbooks/upload`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload textbook');
    }

    const result = await response.json();
    return result;
}