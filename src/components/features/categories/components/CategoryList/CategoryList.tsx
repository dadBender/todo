import React, { useState } from 'react';
import type { CategoryListProps } from './CategoryList.type';
import { CategoryItem } from '../CategoryItem';
import { Stats } from '../Stats';
import styles from './CategoryList.module.css';

export const CategoryList: React.FC<CategoryListProps> = ({
                                                              categories,
                                                              todos,
                                                              onAddCategory,
                                                              onDeleteCategory,
                                                              onStartCategory,
                                                              onUpdateCategoryTime, // ← новый колбэк для обновления времени
                                                              isAdding = false,
                                                              className
                                                          }) => {
    const [name, setName] = useState("");
    const [localIsAdding, setLocalIsAdding] = useState(false);

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        setLocalIsAdding(true);
        try {
            await onAddCategory({ name: name.trim() });
            setName("");
        } catch (error) {
            console.error('Failed to add category:', error);
        } finally {
            setLocalIsAdding(false);
        }
    };

    // Функции для вычислений (замените на ваши селекторы)
    const getCategoryProgress = (categoryId: string): number => {
        const categoryTodos = Object.values(todos.byId).filter(
            todo => todo.categoryId === categoryId
        );
        if (categoryTodos.length === 0) return 0;

        const completed = categoryTodos.filter(todo => todo.completed).length;
        return Math.round((completed / categoryTodos.length) * 100);
    };

    const getCategoryStats = (categoryId: string) => {
        const categoryTodos = Object.values(todos.byId).filter(
            todo => todo.categoryId === categoryId
        );

        const totalTasks = categoryTodos.length;
        const completedTasks = categoryTodos.filter(todo => todo.completed).length;
        const progress = getCategoryProgress(categoryId);

        // Предположим, что время хранится в категории или вычисляется из todos
        const totalTimeInSeconds = categories.byId[categoryId]?.totalTime || 0;

        return {
            totalTimeInSeconds,
            progress,
            totalTasks,
            completedTasks
        };
    };

    const handleTimeUpdate = (categoryId: string, newTimeInSeconds: number) => {
        onUpdateCategoryTime?.(categoryId, newTimeInSeconds);
    };

    // Статистика для хедера
    const totalCategories = categories.allIds.length;
    const totalTasks = todos.allIds.length;
    const completedTasks = Object.values(todos.byId).filter(todo => todo.completed).length;
    const isLoading = isAdding || localIsAdding;

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <header className={styles.header}>
                <h1 className={styles.title}>Менеджер задач</h1>
                <p className={styles.subtitle}>Организуйте свои задачи по категориям</p>
            </header>

            <Stats
                totalCategories={totalCategories}
                totalTasks={totalTasks}
                completedTasks={completedTasks}
            />

            <form onSubmit={handleAddCategory} className={styles.addForm}>
                <input
                    type="text"
                    placeholder="Введите название новой категории..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    className={styles.input}
                />
                <button
                    type="submit"
                    disabled={isLoading || !name.trim()}
                    className={styles.button}
                >
                    {isLoading ? 'Добавление...' : 'Добавить'}
                </button>
            </form>

            <ul className={styles.categoryList}>
                {categories.allIds.map((id) => {
                    const category = categories.byId[id];
                    const stats = getCategoryStats(id);

                    return (
                        <CategoryItem
                            key={id}
                            categoryId={id}
                            title={category.name}
                            totalTimeInSeconds={stats.totalTimeInSeconds}
                            progress={stats.progress}
                            totalTasks={stats.totalTasks}
                            completedTasks={stats.completedTasks}
                            onDelete={() => onDeleteCategory(id)}
                            onStart={onStartCategory ? () => onStartCategory(id) : undefined}
                            onTimeUpdate={handleTimeUpdate}
                        />
                    );
                })}
            </ul>

            {totalCategories === 0 && (
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>📁</div>
                    <p className={styles.emptyText}>Пока нет категорий</p>
                    <p className={styles.emptySubtext}>
                        Создайте первую категорию, чтобы начать организовывать задачи
                    </p>
                </div>
            )}
        </div>
    );
};