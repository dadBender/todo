import React, { useState, useEffect } from 'react';
import type { CategoryItemProps } from './CategoryItem.type';
import { TimerDisplay } from '../../../../ui/TimerDisplay';
import { Button } from '../../../../ui/Button';
import styles from './CategoryItem.module.css';

export const CategoryItem: React.FC<CategoryItemProps> = ({
                                                              categoryId,
                                                              title,
                                                              totalTimeInSeconds,
                                                              progress,
                                                              totalTasks,
                                                              completedTasks,
                                                              onDelete,
                                                              onStart,
                                                              onTimeUpdate,
                                                              className
                                                          }) => {
    // Локальное состояние для таймера (если нужно)
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    // Форматирование времени внутри компонента
    // const formatTime = (seconds: number): string => {
    //     const minutes = Math.floor(seconds / 60);
    //     const remainingSeconds = seconds % 60;
    //     return `${minutes} мин. ${remainingSeconds} сек.`;
    // };

    // Таймер (если категория активна)
    useEffect(() => {
        let interval: number; // ← меняем на number

        if (isTimerRunning) {
            interval = window.setInterval(() => { // ← используем window.setInterval
                setElapsedTime(prev => {
                    const newTime = prev + 1;
                    return newTime;
                });
            }, 1000);
        }

        return () => clearInterval(interval); // ← clearInterval работает с number
    }, [isTimerRunning, categoryId, totalTimeInSeconds, onTimeUpdate]);

    const handleStart = () => {
        setIsTimerRunning(true);
        onStart?.();
    };

    const handleStop = () => {
        if (elapsedTime > 0 && onTimeUpdate) {
            onTimeUpdate(categoryId, totalTimeInSeconds + elapsedTime);
        }
        setIsTimerRunning(false);
        setElapsedTime(0);
    };

    return (
        <li className={`${styles.category} ${className || ''}`}>
            <div className={styles.categoryHeader}>
                <div className={styles.categoryInfo}>
                    <h3 className={styles.categoryTitle}>{title}</h3>
                    <div className={styles.timeSection}>
                        <TimerDisplay
                            seconds={totalTimeInSeconds}
                            format="mm:ss"
                            size="sm"
                            showLabels={true}
                            label="Общее время"
                            className={styles.categoryTime}
                        />
                        {isTimerRunning && (
                            <span className={styles.timerActive}>⏰ Таймер активен</span>
                        )}
                    </div>
                </div>

                <div className={styles.categoryActions}>
                    {onStart && (
                        <div className={styles.timerControls}>
                            {!isTimerRunning ? (
                                <Button
                                    onClick={handleStart}
                                    variant="success"
                                    size="md"
                                >
                                    Старт
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleStop}
                                    variant="success"
                                    size="md"
                                >
                                    Стоп
                                </Button>
                            )}
                        </div>
                    )}
                    <Button
                        onClick={onDelete}
                        variant="danger" // или "secondary", смотря какие варианты есть
                        size="sm"
                        // @ts-ignore
                        title="Удалить категорию"
                    >
                        🗑️
                    </Button>
                </div>
            </div>

            {totalTasks > 0 && (
                <div className={styles.categoryProgress}>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className={styles.progressStats}>
                        <span>Прогресс: {progress}%</span>
                        <span>{completedTasks} из {totalTasks} задач</span>
                    </div>
                </div>
            )}
        </li>
    );
};