import styles from '../styles/TaskItem.module.css';

type Priority = 'high' | 'medium' | 'low';

type Task = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
};

type TaskItemProps = {
  task: Task;
  onToggleComplete: (id: number) => void;
};

/**
 * TaskItemコンポーネント
 * 個別のタスク項目を表示（優先度別カラーバー付き）
 */
function TaskItem({ task, onToggleComplete }: TaskItemProps) {
  return (
    <div className={styles.taskItem} data-priority={task.priority}>
      <div className={styles.colorBar} data-priority={task.priority}></div>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span className={`${styles.title} ${task.completed ? styles.completed : ''}`}>
        {task.title}
      </span>
    </div>
  );
}

export default TaskItem;
