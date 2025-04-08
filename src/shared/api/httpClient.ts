// src/shared/api/httpClient.ts
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const httpClient = {
  get: async <T>(path: string): Promise<T> => {
    // Используем существующий эндпоинт /todos вместо /items
    const response = await fetch(`${BASE_URL}${path === '/items' ? '/todos' : path}`);
    
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}`);
    }
    
    return response.json();
  }
};