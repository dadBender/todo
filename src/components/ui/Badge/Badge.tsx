import React from 'react';
import styles from './Badge.module.css';
import type { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
                                                children,
                                                variant = 'default',
                                                size = 'md',
                                                className = '',
                                                icon,
                                            }) => {
    const badgeClass = `
    ${styles.badge}
    ${styles[`badge--${variant}`]}
    ${styles[`badge--${size}`]}
    ${className}
  `.trim();

    return (
        <span className={badgeClass}>
      {icon && <span className={styles.badgeIcon}>{icon}</span>}
            {children}
    </span>
    );
};