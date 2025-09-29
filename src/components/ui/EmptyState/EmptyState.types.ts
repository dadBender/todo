export interface EmptyStateProps {
    icon?: string | React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outlined' | 'dashed';
    className?: string;
}