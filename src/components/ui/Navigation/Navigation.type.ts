export interface NavigationItem {
    id: string;
    label: string;
    icon: string;
}

export interface NavigationProps {
    items: NavigationItem[];
    activeItemId: string;
    onItemClick: (itemId: string) => void;
    className?: string;
}