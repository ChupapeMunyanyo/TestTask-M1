
import { Button } from '../../../shared/ui/Button/Button';

interface ItemListFiltersProps {
  sortOrder: 'ASC' | 'DESC';
  searchQuery: string;
  activeItemId?: number;
  onSortClick: () => void;
  onSearchChange: (query: string) => void;
}

export const ItemListFilters = ({ 
  sortOrder, 
  searchQuery, 
  activeItemId,
  onSortClick, 
  onSearchChange 
}: ItemListFiltersProps) => {
  return (
    <div className="item-list-filters">
      <h1 className="item-list-filters__title">Items List</h1>
      
      <div className="item-list-filters__subtitle">
        Active Item ID: {activeItemId ?? 'None'}
      </div>
      
      <div className="item-list-filters__controls">
        <Button 
          onClick={onSortClick}
          variant="secondary"
        >
          Sort ({sortOrder})
        </Button>
        
        <input
          type="text"
          placeholder="Filter by name or description"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="item-list-filters__search"
        />
      </div>
    </div>
  );
};