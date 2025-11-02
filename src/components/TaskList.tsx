import TaskItem from './TaskItem';
import styles from '../styles/TaskList.module.css';

type Priority = 'high' | 'medium' | 'low';

type Task = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
};

type TaskListProps = {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
};

/**
 * TaskListコンポーネント
 * タスク一覧を表示
 */
function TaskList({ tasks, onToggleComplete }: TaskListProps) {
  return (
    <div className={styles.taskList}>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>タスクがありません</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))
      )}
    </div>
  );
}

export default TaskList;
