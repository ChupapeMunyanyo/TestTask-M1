import { useState, useMemo } from 'react';
import { Item } from '../../../entities/types/itemTypes';

type SortOrder = 'ASC' | 'DESC';

/**
 * Хук для сортировки элементов
 */
export const useSortItems = (items: Item[]) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('ASC');

  const sortedItems = useMemo(() => {
    const itemsCopy = [...items];
    
    if (sortOrder === 'ASC') {
      return itemsCopy.sort((a, b) => a.id - b.id);
    } else {
      return itemsCopy.sort((a, b) => b.id - a.id);
    }
  }, [items, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'ASC' ? 'DESC' : 'ASC');
  };

  return {
    sortedItems,
    sortOrder,
    toggleSortOrder
  };
};