import React from 'react';
import styles from './Card.module.css';
import type { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
                                              children,
                                              padding = 'md',
                                              shadow = 'sm',
                                              variant = 'default',
                                              className = '',
                                              onClick,
                                              hoverable = false,
                                          }) => {
    const cardClass = `
    ${styles.card}
    ${styles[`card--${variant}`]}
    ${styles[`card--shadow-${shadow}`]}
    ${styles[`card--padding-${padding}`]}
    ${onClick || hoverable ? styles['card--hoverable'] : ''}
    ${onClick ? styles['card--clickable'] : ''}
    ${className}
  `.trim();

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    if (onClick) {
        return (
            <div
                className={cardClass}
                onClick={handleClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleClick();
                    }
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <div className={cardClass}>
            {children}
        </div>
    );
};