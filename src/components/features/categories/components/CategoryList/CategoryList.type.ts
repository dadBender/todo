export interface CategoryListProps {
    categories: {
        allIds: string[];
        byId: Record<string, {
            id: string;
            name: string;
            createdAt: string;
            totalTime?: number; // ← добавили время
        }>;
    };
    todos: {
        allIds: string[];
        byId: Record<string, any>;
    };

    // Actions
    onAddCategory: (category: { name: string }) => Promise<void> | void;
    onDeleteCategory: (categoryId: string) => void;
    onStartCategory?: (categoryId: string) => void;
    onUpdateCategoryTime?: (categoryId: string, timeInSeconds: number) => void; // ← новое

    isAdding?: boolean;
    className?: string;
}