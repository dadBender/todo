import React from 'react';
import styles from './TimerDisplay.module.css';
import type { TimerDisplayProps } from './TimerDisplay.types';

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
                                                              seconds,
                                                              format = 'mm:ss',
                                                              size = 'md',
                                                              showLabels = true,
                                                              label,
                                                              className = '',
                                                          }) => {
    const formatTime = (totalSeconds: number): string => {
        const absSeconds = Math.abs(totalSeconds);

        if (format === 'hh:mm:ss') {
            const hours = Math.floor(absSeconds / 3600);
            const minutes = Math.floor((absSeconds % 3600) / 60);
            const secs = absSeconds % 60;

            if (hours > 0) {
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }
            return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        // mm:ss format
        const minutes = Math.floor(absSeconds / 60);
        const secs = absSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getTimerVariant = (): string => {
        if (seconds <= 0) return styles['timerValue--completed'];
        if (seconds <= 30) return styles['timerValue--critical'];
        if (seconds <= 60) return styles['timerValue--warning'];
        return '';
    };

    const getDefaultIcon = (): string => {
        if (seconds <= 0) return '✅';
        if (seconds <= 30) return '⏰';
        if (seconds <= 60) return '⚠️';
        return '⏱️';
    };

    const getDefaultLabel = (): string => {
        if (label) return label;
        if (seconds <= 0) return 'Завершено';
        return 'Оставшееся время';
    };

    const timerClass = `
    ${styles.timerValue}
    ${styles[`timerValue--${size}`]}
    ${getTimerVariant()}
  `.trim();

    const labelClass = `
    ${styles.timerLabel}
    ${styles[`timerLabel--${size}`]}
  `.trim();

    const iconClass = `
    ${styles.timerIcon}
    ${styles[`timerIcon--${size}`]}
  `.trim();

    return (
        <div className={`${styles.timerDisplay} ${className}`}>
            {showLabels && (
                <div className={styles.timerContainer}>
                    <span className={iconClass}>{getDefaultIcon()}</span>
                    <span className={labelClass}>{getDefaultLabel()}</span>
                </div>
            )}
            <div className={timerClass}>
                {formatTime(seconds)}
            </div>
        </div>
    );
};