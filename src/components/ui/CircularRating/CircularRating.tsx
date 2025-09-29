import React from 'react';
import styles from './CircularRating.module.css';
import type { CircularRatingProps, RatingColor } from './CircularRating.types';

export const CircularRating: React.FC<CircularRatingProps> = ({
                                                                  value,
                                                                  maxValue = 100,
                                                                  size = 120,
                                                                  strokeWidth = 8,
                                                                  showValue = true,
                                                                  showText = true,
                                                                  className = '',
                                                              }) => {
    const normalizedValue = Math.min(Math.max(value, 0), maxValue);
    const percentage = (normalizedValue / maxValue) * 100;

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const getRatingColor = (): RatingColor => {
        if (percentage >= 80) return 'excellent';
        if (percentage >= 60) return 'good';
        if (percentage >= 40) return 'average';
        if (percentage >= 20) return 'poor';
        return 'critical';
    };

    const getRatingText = (): string => {
        if (percentage >= 90) return 'Отлично!';
        if (percentage >= 70) return 'Хорошо';
        if (percentage >= 50) return 'Нормально';
        if (percentage >= 30) return 'Плохо';
        if (percentage >= 10) return 'Очень плохо';
        return 'Критично';
    };

    const ratingColor = getRatingColor();
    const ratingText = getRatingText();

    return (
        <div className={`${styles.container} ${className}`}>
            <div
                className={styles.circularProgress}
                style={{ width: size, height: size }}
            >
                <svg className={styles.svg} width={size} height={size}>
                    <circle
                        className={styles.backgroundCircle}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        className={`${styles.progressCircle} ${styles[ratingColor]}`}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                </svg>

                {showValue && (
                    <div className={styles.textContainer}>
            <span className={styles.value}>
              {normalizedValue}
            </span>
                        {maxValue !== 100 && (
                            <span className={styles.maxValue}>/{maxValue}</span>
                        )}
                    </div>
                )}
            </div>

            {showText && (
                <div className={`${styles.ratingText} ${styles[ratingColor]}`}>
                    {ratingText}
                </div>
            )}
        </div>
    );
};