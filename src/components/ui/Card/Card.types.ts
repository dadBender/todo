export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardShadow = 'none' | 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'outlined' | 'filled';

export interface CardProps {
    children: React.ReactNode;
    padding?: CardPadding;
    shadow?: CardShadow;
    variant?: CardVariant;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}