import { useState } from 'react';
import styles from '../styles/TaskInput.module.css';

type Priority = 'high' | 'medium' | 'low';

type TaskInputProps = {
  onAddTask: (title: string, priority: Priority) => void;
};

/**
 * TaskInputコンポーネント
 * 新しいタスクを入力するエリア（優先度選択付き）
 */
function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);

  const priorityOptions: { value: Priority; label: string }[] = [
    { value: 'high', label: '高優先度' },
    { value: 'medium', label: '中優先度' },
    { value: 'low', label: '低優先度' },
  ];

  const currentPriorityLabel =
    priorityOptions.find((opt) => opt.value === priority)?.label || '中優先度';

  const handleSubmit = () => {
    if (title.trim()) {
      onAddTask(title, priority);
      setTitle('');
      setPriority('medium');
    }
  };

  const handleSelectPriority = (value: Priority) => {
    setPriority(value);
    setIsPriorityOpen(false);
  };

  return (
    <div className={styles.taskInput}>
      <input
        type="text"
        className={styles.input}
        placeholder="新しいタスクを入力..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />

      <div className={styles.priorityDropdown}>
        <button
          className={styles.priorityButton}
          onClick={() => setIsPriorityOpen(!isPriorityOpen)}
        >
          {currentPriorityLabel}
          <span className={styles.arrow}>▼</span>
        </button>
        {isPriorityOpen && (
          <ul className={styles.priorityMenu}>
            {priorityOptions.map((option) => (
              <li
                key={option.value}
                className={`${styles.priorityItem} ${
                  priority === option.value ? styles.selected : ''
                }`}
                onClick={() => handleSelectPriority(option.value)}
              >
                {priority === option.value && <span className={styles.checkmark}>✓</span>}
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className={styles.addButton} onClick={handleSubmit}>
        追加
      </button>
    </div>
  );
}

export default TaskInput;
