import React from 'react';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant = 'primary',
                                                  size = 'md',
                                                  disabled = false,
                                                  loading = false,
                                                  onClick,
                                                  type = 'button',
                                                  className = '',
                                              }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled && !loading && onClick) {
            onClick(e);
        }
    };

    const buttonClass = `
    ${styles.button}
    ${styles[`button--${variant}`]}
    ${styles[`button--${size}`]}
    ${disabled || loading ? styles['button--disabled'] : ''}
    ${loading ? styles['button--loading'] : ''}
    ${className}
  `.trim();

    return (
        <button
            type={type}
            className={buttonClass}
            disabled={disabled || loading}
            onClick={handleClick}
        >
      <span className={styles.buttonContent}>
        {children}
      </span>
            {loading && (
                <div className={styles.loadingSpinner} />
            )}
        </button>
    );
};