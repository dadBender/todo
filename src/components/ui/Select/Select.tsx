import React from 'react';
import styles from './Select.module.css';
import type { SelectProps } from './Select.types';

export const Select: React.FC<SelectProps> = ({
                                                  value,
                                                  onChange,
                                                  options,
                                                  disabled = false,
                                                  placeholder,
                                                  label,
                                                  error,
                                                  required = false,
                                                  size = 'md',
                                                  className = '',
                                              }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    const selectClass = `
    ${styles.select}
    ${styles[`select--${size}`]}
    ${error ? styles['select--error'] : ''}
    ${disabled ? styles['select--disabled'] : ''}
    ${className}
  `.trim();

    const labelClass = `
    ${styles.label}
    ${required ? styles['label--required'] : ''}
  `.trim();

    return (
        <div className={styles.selectWrapper}>
            {label && (
                <label className={labelClass}>
                    {label}
                </label>
            )}

            <div className={styles.selectContainer}>
                <select
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    className={selectClass}
                >
                    {placeholder && (
                        <option value="" disabled={required}>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <div className={styles.selectArrow}>
                    ▼
                </div>
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