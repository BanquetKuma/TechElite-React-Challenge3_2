/**
 * タスク管理アプリの型定義
 * README.1理論.md 第6.2節「型安全なコードへの配慮」に基づく
 */

// 優先度の型定義（リテラル型による厳密な制約）
export type Priority = 'high' | 'medium' | 'low';

// フィルタータイプの型定義
export type FilterType = 'all' | 'incomplete' | 'completed';

// ソートタイプの型定義
export type SortType = 'createdAt' | 'priority' | 'title';

// タスクの型定義
export type Task = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
};

// TaskInputコンポーネントのProps型
export type TaskInputProps = {
  onAddTask: (title: string, priority: Priority) => void;
};

// FilterTabsコンポーネントのProps型
export type FilterTabsProps = {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

// SortDropdownコンポーネントのProps型
export type SortDropdownProps = {
  currentSort: SortType;
  onSortChange: (sort: SortType) => void;
};

// TaskItemコンポーネントのProps型
export type TaskItemProps = {
  task: Task;
  onToggleComplete: (id: number) => void;
};

// TaskListコンポーネントのProps型
export type TaskListProps = {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
};
