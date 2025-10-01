export interface CategoryItemProps {
    // Основные данные
    categoryId: string;
    title: string;

    // Числовые данные для вычислений
    totalTimeInSeconds: number; // ← время в секундах для форматирования
    progress: number;          // ← прогресс 0-100
    totalTasks: number;
    completedTasks: number;

    // Колбэки для взаимодействия
    onDelete: () => void;
    onStart?: () => void;
    onTimeUpdate?: (categoryId: string, newTimeInSeconds: number) => void; // ← для обновления времени

    className?: string;
}