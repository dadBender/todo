import React from 'react';

export type InputType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'time'
    | 'search';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
    type?: InputType;
    value: string;
    onChange: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    label?: string;
    required?: boolean;
    size?: InputSize;
    className?: string;
    autoFocus?: boolean;
}