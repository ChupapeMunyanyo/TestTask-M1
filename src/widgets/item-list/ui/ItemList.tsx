import { ItemListProps } from "../../../entities/types/itemTypes";
import { ItemCard } from "../../../entities/ui/ItemCard";
import { Skeleton } from "../../../shared/ui/Skeleton/Skeleton";
export const ItemList = ({ 
    items, 
    loading = false, 
    activeItemId, 
    onItemClick 
  }: ItemListProps) => {
    if (loading) {
      return (
        <div className="item-list">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={`skeleton-${index}`} />
          ))}
        </div>
      );
    }
  
    if (!items.length) {
      return <div className="item-list__empty">No items found</div>;
    }
  
    return (
      <ul className="item-list">
        {items.map(item => (
          <ItemCard
            key={`item-${item.id}`} // Уникальный ключ на основе id
            item={item}
            isActive={activeItemId === item.id}
            onClick={onItemClick}
          />
        ))}
      </ul>
    );
  };