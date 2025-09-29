export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    disabled?: boolean;
    placeholder?: string;
    label?: string;
    error?: string;
    required?: boolean;
    size?: SelectSize;
    className?: string;
}