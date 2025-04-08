import { useState, useMemo } from 'react';
import { Item } from '../../../entities/types/itemTypes';

/**
 * Хук для фильтрации элементов
 */
export const useFilterItems = (items: Item[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;

    const query = searchQuery.toLowerCase().trim();
    
    return items.filter(item => 
      `${item.id}`.includes(query) ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }, [items, searchQuery]);

  return {
    filteredItems,
    searchQuery,
    setSearchQuery
  };
};