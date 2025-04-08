// src/pages/list-page/model/useListPage.ts
import { useEffect, useState } from 'react';
import { itemApi } from '../../../entities/api/itemApi';
import { Item } from '../../../entities/types/itemTypes';
export const useListPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itemApi.getItems();
      setItems(data);
    } catch (err) {
      setError('Не удалось загрузить данные');
      console.error('Ошибка:', err);
      // Заглушка для демонстрации
      setItems([
        { id: 1, name: 'Пример 1', description: 'Данные не загрузились' },
        { id: 2, name: 'Пример 2', description: 'Проверьте подключение' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, loading, error, fetchItems };
};