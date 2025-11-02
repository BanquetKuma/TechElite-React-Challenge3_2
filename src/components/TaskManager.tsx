import { useState } from 'react';
import Header from './Header';
import FilterTabs from './FilterTabs';
import SortDropdown from './SortDropdown';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import styles from '../styles/TaskManager.module.css';

type Priority = 'high' | 'medium' | 'low';
type FilterType = 'all' | 'incomplete' | 'completed';
type SortType = 'createdAt' | 'priority' | 'title';

type Task = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
};

/**
 * TaskManagerコンポーネント
 * タスク管理アプリ全体を統合するコンテナコンポーネント
 */
function TaskManager() {
  // サンプルタスクデータ（課題2ではUIのみのため、静的データを使用）
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: '上司にメール',
      priority: 'high',
      completed: false,
      createdAt: new Date('2025-01-01'),
    },
    {
      id: 2,
      title: '先輩のメール確認',
      priority: 'medium',
      completed: false,
      createdAt: new Date('2025-01-02'),
    },
    {
      id: 3,
      title: '家の掃除',
      priority: 'low',
      completed: false,
      createdAt: new Date('2025-01-03'),
    },
  ]);

  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');
  const [currentSort, setCurrentSort] = useState<SortType>('priority');

  // フィルター処理
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return task.completed;
    if (currentFilter === 'incomplete') return !task.completed;
    return true;
  });

  // ソート処理
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (currentSort === 'createdAt') {
      return a.createdAt.getTime() - b.createdAt.getTime();
    }
    if (currentSort === 'priority') {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    if (currentSort === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // タスク追加（UIのみなので実際の追加機能は後の課題で実装）
  const handleAddTask = (title: string, priority: Priority) => {
    console.log('新しいタスクを追加:', { title, priority });
    // 実際のタスク追加はChallenge 3で実装予定
  };

  // タスク完了切り替え（UIのみなので実際の切り替え機能は後の課題で実装）
  const handleToggleComplete = (id: number) => {
    console.log('タスク完了切り替え:', id);
    // 実際の完了切り替えはChallenge 3で実装予定
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Header />
        <hr className={styles.divider} />

        <div className={styles.controls}>
          <FilterTabs currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
          <SortDropdown currentSort={currentSort} onSortChange={setCurrentSort} />
        </div>

        <TaskInput onAddTask={handleAddTask} />

        <TaskList tasks={sortedTasks} onToggleComplete={handleToggleComplete} />
      </div>
    </div>
  );
}

export default TaskManager;
