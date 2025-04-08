import React, { memo } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

/**
 * Переиспользуемый компонент кнопки
 */
export const Button = memo(({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'button',
        `button--${variant}`,
        `button--${size}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';