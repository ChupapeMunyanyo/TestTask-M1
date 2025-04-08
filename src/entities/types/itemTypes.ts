/**
 * Основной интерфейс для элемента
 */
export interface Item {
    id: number;
    name: string;
    description: string;
  }
  
  /**
   * Пропсы для компонента ItemCard
   */
  export interface ItemCardProps {
    item: Item;
    isActive?: boolean;
    onClick?: (id: number) => void;
  }
  
  /**
   * Пропсы для списка элементов
   */
  export interface ItemListProps {
    items: Item[];
    loading?: boolean;
    activeItemId?: number;
    onItemClick?: (id: number) => void;
  }
  // src/entities/item/types/itemTypes.ts

export interface ItemListFiltersProps {
    sortOrder: 'ASC' | 'DESC';
    searchQuery: string;
    activeItemId?: number; // Теперь явно указываем optional с undefined
    onSortClick: () => void;
    onSearchChange: (query: string) => void;
  }