export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'danger'
    | 'success';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}