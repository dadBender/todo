import type { NavigationItem } from '../Navigation.type';

export interface NavigationItemProps {
    item: NavigationItem;
    isActive: boolean;
    onClick: () => void;
    className?: string;
}