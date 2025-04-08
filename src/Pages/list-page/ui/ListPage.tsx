import { ItemList } from '../../../widgets/item-list/ui/ItemList';
import { ItemListFilters } from '../../../widgets/item-list/ui/ItemListFilters';
import { useListPage } from '../../../Pages/list-page/model/useListPage';
import { useState } from 'react';

export const ListPage = () => {
  const {
    items,
    loading,
    error
  } = useListPage();
  
  // Локальное состояние для фильтрации и сортировки
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
  const [activeItemId, setActiveItemId] = useState<number | undefined>();

  // Фильтрация и сортировка
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    return sortOrder === 'ASC' ? a.id - b.id : b.id - a.id;
  });

  const handleSortClick = () => {
    setSortOrder(prev => prev === 'ASC' ? 'DESC' : 'ASC');
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div className="list-page">
      {error && <div className="error-message">{error}</div>}
      
      <ItemListFilters
        sortOrder={sortOrder}
        searchQuery={searchQuery}
        activeItemId={activeItemId}
        onSortClick={handleSortClick}
        onSearchChange={handleSearchChange}
      />
      
      <ItemList
        items={filteredItems}
        loading={loading}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
      />
    </div>
  );
};