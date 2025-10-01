import React, { useState } from 'react';
import type { HeaderProps, PageType, PageConfig } from './Header.type';
import { Navigation } from '../../../components/ui/Navigation';
import styles from './Header.module.css';

const PAGE_CONFIGS: PageConfig[] = [
    { id: 'home', title: '🏠 Главная страница', icon: '🏠', label: 'Home' },
    { id: 'focus', title: '🎯 Режим фокуса', icon: '🎯', label: 'Focus' }
];

export const Header: React.FC<HeaderProps> = ({ className }) => {
    // Локальное состояние до подключения Redux
    const [activePage, setActivePage] = useState<PageType>('home');

    const getCurrentPageTitle = (): string => {
        const currentPage = PAGE_CONFIGS.find(page => page.id === activePage);
        return currentPage?.title || 'Мое приложение';
    };

    const handleNavigationClick = (itemId: string) => {
        setActivePage(itemId as PageType);
    };

    return (
        <header className={`${styles.headerContainer} ${className || ''}`}>
            <div className={styles.headerContent}>
                <h1 className={styles.pageTitle}>{getCurrentPageTitle()}</h1>
                <Navigation
                    items={PAGE_CONFIGS}
                    activeItemId={activePage}
                    onItemClick={handleNavigationClick}
                />
            </div>
        </header>
    );
};