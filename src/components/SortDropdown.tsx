import { useState } from 'react';
import styles from '../styles/SortDropdown.module.css';

type SortType = 'createdAt' | 'priority' | 'title';

type SortDropdownProps = {
  currentSort: SortType;
  onSortChange: (sort: SortType) => void;
};

/**
 * SortDropdownコンポーネント
 * ソート機能のドロップダウンメニュー（作成日時/優先度/タイトル）
 */
function SortDropdown({ currentSort, onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'createdAt' as const, label: '作成日時' },
    { value: 'priority' as const, label: '優先度' },
    { value: 'title' as const, label: 'タイトル' },
  ];

  const currentLabel = sortOptions.find((opt) => opt.value === currentSort)?.label || '優先度';

  const handleSelectSort = (value: typeof currentSort) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
        {currentLabel}
        <span className={styles.arrow}>▼</span>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {sortOptions.map((option) => (
            <li
              key={option.value}
              className={`${styles.dropdownItem} ${
                currentSort === option.value ? styles.selected : ''
              }`}
              onClick={() => handleSelectSort(option.value)}
            >
              {currentSort === option.value && <span className={styles.checkmark}>✓</span>}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
