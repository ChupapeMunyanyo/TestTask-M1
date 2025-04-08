// src/entities/api/itemApi.ts
import { httpClient } from '../../shared/api/httpClient';
import { Item } from '../types/itemTypes';

// Адаптируем данные из API к нашей структуре Item
const adaptTodoToItem = (todo: any): Item => ({
  id: todo.id,
  name: todo.title,
  description: `User ID: ${todo.userId}, Completed: ${todo.completed}`
});

export const itemApi = {
  getItems: async (): Promise<Item[]> => {
    const todos = await httpClient.get<any[]>('/todos');
    return todos.slice(0, 10).map(adaptTodoToItem); // Берем только первые 10 элементов
  },
  getItem: async (id: number): Promise<Item> => {
    const todo = await httpClient.get<any>(`/todos/${id}`);
    return adaptTodoToItem(todo);
  }
};