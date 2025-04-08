import { useEffect, useState } from 'react';
import { itemApi } from '../../../entities/api/itemApi';
import { Item } from '../../../entities/types/itemTypes';
/**
 * Хук для бизнес-логики страницы элемента
 */
export const useSinglePage = (id?: string) => {
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setError('Invalid item ID');
      setLoading(false);
      return;
    }

    const fetchItem = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await itemApi.getItem(Number(id));
        setItem(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch item');
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  return {
    item,
    loading,
    error
  };
};