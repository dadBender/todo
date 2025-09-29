import React from 'react';
import styles from './EmptyState.module.css';
import type { EmptyStateProps } from './EmptyState.types';

export const EmptyState: React.FC<EmptyStateProps> = ({
                                                          icon = "📄",
                                                          title,
                                                          description,
                                                          action,
                                                          size = 'md',
                                                          variant = 'dashed',
                                                          className = '',
                                                      }) => {
    const emptyStateClass = `
    ${styles.emptyState}
    ${styles[`emptyState--${size}`]}
    ${styles[`emptyState--${variant}`]}
    ${className}
  `.trim();

    return (
        <div className={emptyStateClass}>
            <div className={styles.emptyStateIcon}>
                {icon}
            </div>

            <h3 className={styles.emptyStateTitle}>
                {title}
            </h3>

            {description && (
                <p className={styles.emptyStateDescription}>
                    {description}
                </p>
            )}

            {action && (
                <div className={styles.emptyStateAction}>
                    {action}
                </div>
            )}
        </div>
    );
};