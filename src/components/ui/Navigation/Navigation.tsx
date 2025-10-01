import React from 'react';
import type { NavigationProps } from './Navigation.type';
import { NavigationItem } from './NavigationItem';
import styles from './Navigation.module.css';

export const Navigation: React.FC<NavigationProps> = ({
                                                          items,
                                                          activeItemId,
                                                          onItemClick,
                                                          className
                                                      }) => {
    const activeIndex = items.findIndex(item => item.id === activeItemId);

    return (
        <nav className={`${styles.nav} ${className || ''}`}>
            <div
                className={`${styles.slider} ${styles[`sliderPosition${activeIndex}`]}`}
            />
            <ul className={styles.navList}>
                {items.map((item) => (
                    <NavigationItem
                        key={item.id}
                        item={item}
                        isActive={item.id === activeItemId}
                        onClick={() => onItemClick(item.id)}
                    />
                ))}
            </ul>
        </nav>
    );
};