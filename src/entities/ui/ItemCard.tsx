import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/ui/Button/Button';
import { ItemCardProps } from '../types/itemTypes';
import clsx from 'clsx';

/**
 * Карточка элемента списка
 */
export const ItemCard = memo(({ item, isActive = false, onClick }: ItemCardProps) => {
  const handleClick = () => {
    if (onClick) onClick(item.id);
  };

  return (
    <li className={clsx('item-card', { 'item-card--active': isActive })}>
      <Link to={`/${item.id}`} className="item-card__link">
        <div className="item-card__header">
          <div className="item-card__id">ID: <strong>{item.id}</strong></div>
          {onClick && (
            <Button 
              onClick={handleClick} 
              disabled={isActive}
              variant="secondary"
              size="small"
            >
              {isActive ? 'Active' : 'Set Active'}
            </Button>
          )}
        </div>
        <div className="item-card__name">{item.name}</div>
        <div className="item-card__description">{item.description}</div>
      </Link>
    </li>
  );
});

ItemCard.displayName = 'ItemCard';