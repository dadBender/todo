import React from 'react';
import type { NavigationItemProps } from './NavigationItem.type';
import styles from './NavigationItem.module.css';

export const NavigationItem: React.FC<NavigationItemProps> = ({
                                                                  item,
                                                                  isActive,
                                                                  onClick,
                                                                  className
                                                              }) => {
    const itemClass = [
        styles.listItem,
        isActive ? styles.active : '',
        className || ''
    ].filter(Boolean).join(' ');

    return (
        <li className={itemClass} onClick={onClick}>
            <span>{item.icon}</span>
            {item.label}
        </li>
    );
};