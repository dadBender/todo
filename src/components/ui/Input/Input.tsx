import React from 'react';
import styles from './Input.module.css';
import type { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
                                                type = 'text',
                                                value,
                                                onChange,
                                                placeholder,
                                                disabled = false,
                                                error,
                                                label,
                                                required = false,
                                                size = 'md',
                                                className = '',
                                                autoFocus = false,
                                            }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value, e);
    };

    const inputClass = `
    ${styles.input}
    ${styles[`input--${size}`]}
    ${error ? styles['input--error'] : ''}
    ${disabled ? styles['input--disabled'] : ''}
    ${className}
  `.trim();

    const labelClass = `
    ${styles.label}
    ${required ? styles['label--required'] : ''}
  `.trim();

    return (
        <div className={styles.inputWrapper}>
            {label && (
                <label className={labelClass}>
                    {label}
                </label>
            )}

            <div className={styles.inputContainer}>
                {type === 'search' && (
                    <span className={styles.searchIcon}>🔍</span>
                )}

                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={inputClass}
                    autoFocus={autoFocus}
                />
            </div>

            {error && (
                <div className={styles.errorMessage}>
                    <span>⚠️</span>
                    {error}
                </div>
            )}
        </div>
    );
};