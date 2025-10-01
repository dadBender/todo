import styles from './Stats.module.css'
import type {StatsProps} from './Stats.type'

export const Stats: React.FC<StatsProps> = ({
    totalCategories,
    totalTasks,
    completedTasks,
    className
}) => {
    if (totalCategories === 0) return null;
    return (
        <div className={`${styles.statsContainer} ${className || ''}`}>
            <div className={styles.statItem}>
                <span className={styles.statValue}>{totalCategories}</span>
                <span className={styles.statLabel}>Категории</span>
            </div>
            <div className={styles.divider}/>
            <div className={styles.statItem}>
                <span className={styles.statValue}>{totalTasks}</span>
                <span className={styles.statLabel}>Всего задач</span>
            </div>
            <div className={styles.divider}/>
            <div className={styles.statItem}>
                <span className={styles.statValue}>{completedTasks}</span>
                <span className={styles.statLabel}>Выполнено</span>
            </div>
        </div>
    )
}