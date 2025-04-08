// Skeleton.tsx
import React from 'react';
import clsx from 'clsx';
import './Skeleton.css'

/**
 * Пропсы для компонента Skeleton
 */
export interface SkeletonProps {
  /** Тип скелетона */
  variant?: 'text' | 'rect' | 'circle' | 'card' | 'list-item';
  /** Ширина скелетона */
  width?: number | string;
  /** Высота скелетона */
  height?: number | string;
  /** Количество повторений (для списка) */
  count?: number;
  /** Закругленные углы */
  rounded?: boolean;
  /** Дополнительные классы */
  className?: string;
  /** Анимация (по умолчанию true) */
  animated?: boolean;
}

/**
 * Компонент для отображения плейсхолдера контента во время загрузки
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rect',
  width,
  height,
  count = 1,
  rounded = true,
  className,
  animated = true,
}) => {
  // Генерация элементов по count
  const elements = Array.from({ length: count }).map((_, index) => (
    <span
      key={index}
      className={clsx(
        'skeleton',
        `skeleton--${variant}`,
        {
          'skeleton--rounded': rounded,
          'skeleton--animated': animated,
        },
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    />
  ));

  if (count > 1) {
    return <div className="skeleton-container">{elements}</div>;
  }

  return elements[0];
};

Skeleton.displayName = 'Skeleton';
