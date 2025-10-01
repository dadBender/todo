export interface HeaderProps {
    className?: string;
}

export type PageType = 'home' | 'focus';

export interface PageConfig {
    id: PageType;
    title: string;
    icon: string;
    label: string;
}