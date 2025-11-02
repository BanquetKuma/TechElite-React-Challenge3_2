import styles from '../styles/FilterTabs.module.css';

type FilterType = 'all' | 'incomplete' | 'completed';

type FilterTabsProps = {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

/**
 * FilterTabsコンポーネント
 * タスクのフィルタータブ（すべて/未完了/完了済み）を表示
 */
function FilterTabs({ currentFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className={styles.filterTabs}>
      <button
        className={`${styles.tab} ${currentFilter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        すべて
      </button>
      <button
        className={`${styles.tab} ${currentFilter === 'incomplete' ? styles.active : ''}`}
        onClick={() => onFilterChange('incomplete')}
      >
        未完了
      </button>
      <button
        className={`${styles.tab} ${currentFilter === 'completed' ? styles.active : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        完了済み
      </button>
    </div>
  );
}

export default FilterTabs;
