# タスク管理アプリ - Challenge 2: UI実装

React学習プロジェクトにおけるタスク管理アプリケーションのChallenge 2実装です。このChallengeでは、TypeScriptとCSS Modulesを使用したコンポーネントベースのUI構造を構築しました。

## 📋 プロジェクト概要

**課題**: Challenge 2 - タスク管理アプリのUI実装
**技術スタック**: Vite + React 18 + TypeScript + CSS Modules
**学習目標**: Reactコンポーネント設計、TypeScript型定義、CSS Modulesによるスタイリング
**実装完了日**: 2025年11月2日

## 🎯 実装完了内容

### Challenge 2で実装した機能

#### ✅ 完成した機能
- 7つのReactコンポーネントによる構造化設計
- TypeScriptによる型安全な実装
- CSS Modulesによるスコープ化されたスタイリング
- サンプルタスクデータの表示（3件）
- フィルタリングUIの実装（すべて/未完了/完了済み）
- ソート機能UIの実装（作成日時/優先度/タイトル）
- 優先度別カラーバーの視覚的表現（赤/黄/緑）
- 完了状態の視覚的フィードバック

#### 🔧 技術的成果
- **コンポーネント分割**: 単一責任の原則に基づいた7つのコンポーネント設計
- **型定義**: Union Types、Props型を使用した型安全性の確保
- **状態管理**: useStateによる基本的な状態管理の実装
- **データフロー**: 親子コンポーネント間のProps渡しとコールバック実装
- **スタイリング**: CSS Modulesによるスコープ化とdata属性の活用

## 📁 コンポーネント詳細

### 1. TaskManager.tsx（メインコンテナ）
**役割**: アプリケーション全体の状態管理と子コンポーネントの統合

**管理する状態**:
- `tasks`: タスクデータ配列（3件のサンプルデータ）
- `currentFilter`: 現在のフィルター状態（'all' | 'incomplete' | 'completed'）
- `currentSort`: 現在のソート状態（'createdAt' | 'priority' | 'title'）

**主要機能**:
- フィルタリングロジック: タスク完了状態による絞り込み
- ソートロジック: 優先度/作成日時/タイトル順の並び替え
- 子コンポーネントへのPropsとコールバック提供

**実装ファイル**: `src/components/TaskManager.tsx`

---

### 2. Header.tsx（ヘッダー）
**役割**: アプリケーションタイトルの表示

**表示内容**:
- アプリケーション名「タスク管理アプリ」

**技術特徴**:
- CSS Modulesによるセンタリングレイアウト
- シンプルなプレゼンテーショナルコンポーネント

**実装ファイル**: `src/components/Header.tsx`

---

### 3. FilterTabs.tsx（フィルタータブ）
**役割**: タスクフィルタリングのタブUI提供

**Props**:
- `currentFilter`: 現在選択中のフィルター
- `onFilterChange`: フィルター変更時のコールバック関数

**機能**:
- 3つのフィルターボタン（すべて/未完了/完了済み）
- アクティブ状態の視覚的フィードバック
- 条件付きクラス名による動的スタイリング

**実装ファイル**: `src/components/FilterTabs.tsx`

---

### 4. SortDropdown.tsx（ソートドロップダウン）
**役割**: タスクソート機能のドロップダウンUI提供

**Props**:
- `currentSort`: 現在選択中のソートタイプ
- `onSortChange`: ソート変更時のコールバック関数

**内部状態**:
- `isOpen`: ドロップダウンの開閉状態（useState管理）

**機能**:
- ドロップダウンメニューの開閉制御
- 3つのソートオプション（作成日時/優先度/タイトル）
- 選択中のオプション表示

**実装ファイル**: `src/components/SortDropdown.tsx`

---

### 5. TaskInput.tsx（タスク入力）
**役割**: 新規タスク入力フォーム（UIのみ実装）

**機能**:
- タスクタイトル入力フィールド
- 優先度選択ドロップダウン（高/中/低）
- 追加ボタン

**実装状態**:
- ✅ UIレイアウトの実装完了
- ❌ 実際の追加機能（Challenge 3で実装予定）

**実装ファイル**: `src/components/TaskInput.tsx`

---

### 6. TaskList.tsx（タスクリスト）
**役割**: タスク配列のレンダリング

**Props**:
- `tasks`: 表示するタスク配列
- `onToggleComplete`: タスク完了切り替えのコールバック

**機能**:
- タスク配列のマッピングとレンダリング
- 空状態時のメッセージ表示（「タスクがありません」）

**技術特徴**:
- map関数による動的リストレンダリング
- 条件付きレンダリング（空配列チェック）

**実装ファイル**: `src/components/TaskList.tsx`

---

### 7. TaskItem.tsx（個別タスク項目）
**役割**: 個別タスクの表示コンポーネント

**Props**:
- `task`: タスクオブジェクト（title, priority, completed, createdAt）
- `onToggleComplete`: タスク完了切り替えのコールバック

**機能**:
- 優先度別カラーバー（赤=高、黄=中、緑=低）
- チェックボックス（UIのみ、機能は未実装）
- タスクタイトル表示
- 完了状態の視覚的表現（取り消し線、透明度）

**技術特徴**:
- data属性による動的スタイリング（`data-priority`）
- 条件付きクラス名による完了状態表現

**実装ファイル**: `src/components/TaskItem.tsx`

---

## 🔧 技術実装の詳細

### TypeScript型定義

#### Union Types（共用体型）
```typescript
// 優先度の型定義
type Priority = 'high' | 'medium' | 'low';

// フィルタータイプの型定義
type FilterType = 'all' | 'incomplete' | 'completed';

// ソートタイプの型定義
type SortType = 'createdAt' | 'priority' | 'title';
```

#### タスク型
```typescript
type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
};
```

#### Props型定義例
```typescript
type FilterTabsProps = {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

type TaskItemProps = {
  task: Task;
  onToggleComplete: (id: number) => void;
};
```

**学習価値**:
- Union Typesによる限定的な値の型定義
- Propsの型安全性確保
- コンパイル時のエラー検出

---

### 状態管理（useState）

#### TaskManager内の状態
```typescript
const [tasks] = useState<Task[]>([
  {
    id: 1,
    title: '上司にメール',
    completed: false,
    priority: 'high',
    createdAt: new Date('2025-01-01'),
  },
  {
    id: 2,
    title: '先輩のメール確認',
    completed: false,
    priority: 'medium',
    createdAt: new Date('2025-01-02'),
  },
  {
    id: 3,
    title: '家の掃除',
    completed: false,
    priority: 'low',
    createdAt: new Date('2025-01-03'),
  },
]);

const [currentFilter, setCurrentFilter] = useState<FilterType>('all');
const [currentSort, setCurrentSort] = useState<SortType>('priority');
```

#### SortDropdown内のローカル状態
```typescript
const [isOpen, setIsOpen] = useState(false);
```

**状態配置の判断基準**:
- **共有状態（親コンポーネント）**: 複数の子コンポーネントが必要とするデータ
- **ローカル状態（子コンポーネント）**: そのコンポーネント内でのみ使用するデータ

**学習価値**:
- 適切な状態配置の判断力
- useStateの基本的な使用方法
- ジェネリクスによる型付き状態管理

---

### データ処理ロジック

#### フィルタリング処理
```typescript
const filteredTasks = tasks.filter((task) => {
  if (currentFilter === 'all') return true;
  if (currentFilter === 'completed') return task.completed;
  if (currentFilter === 'incomplete') return !task.completed;
  return true;
});
```

**実装のポイント**:
- `filter`メソッドによる条件抽出
- 早期returnによる読みやすいコード
- 条件分岐による複数フィルターの実装

---

#### ソート処理
```typescript
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
```

**実装のポイント**:
- スプレッド構文によるイミュータブルな配列処理
- オブジェクトマッピングによる優先度ソート
- `localeCompare`による日本語対応の文字列ソート
- `getTime()`による日時比較

**学習価値**:
- 元の配列を変更しない安全なソート
- 複数のソートロジックの条件分岐
- JavaScriptの配列メソッドの実践

---

### CSS Modulesによるスタイリング

#### 基本的な使用方法
```typescript
import styles from '../styles/TaskItem.module.css';

<div className={styles.taskItem}>
  {/* コンポーネントの内容 */}
</div>
```

**利点**:
- クラス名の自動スコープ化（他コンポーネントとの衝突回避）
- TypeScriptによる型チェック（存在しないクラス名の検出）
- ビルド時の最適化

---

#### 条件付きクラス名
```typescript
<span className={`${styles.title} ${task.completed ? styles.completed : ''}`}>
  {task.title}
</span>
```

**実装パターン**:
- テンプレートリテラルによる複数クラスの結合
- 三項演算子による条件付きクラス追加

---

#### data属性による動的スタイリング
```typescript
<div className={styles.colorBar} data-priority={task.priority}></div>
```

```css
/* TaskItem.module.css */
.colorBar[data-priority='high'] {
  background-color: #ef4444; /* 赤 */
}

.colorBar[data-priority='medium'] {
  background-color: #f59e0b; /* 黄 */
}

.colorBar[data-priority='low'] {
  background-color: #10b981; /* 緑 */
}
```

**学習価値**:
- data属性を使った動的スタイリング
- 属性セレクタの活用
- カラーコードによる視覚的表現

---

## 📈 実装成果の定量評価

### コンポーネント設計
- **総コンポーネント数**: 7個
- **コンテナコンポーネント**: 1個（TaskManager）
- **プレゼンテーショナルコンポーネント**: 6個
- **平均コンポーネントサイズ**: 約50行（適切な粒度）

### TypeScript型定義
- **Union Types定義数**: 3個（Priority, FilterType, SortType）
- **型定義数**: 1個（Task）
- **Props型定義数**: 6個（各コンポーネントに対応）

### スタイリング
- **CSS Modulesファイル数**: 8個
- **スコープ化されたクラス数**: 約30個
- **動的スタイリング実装**: data属性による3段階優先度カラー

### サンプルデータ
- **初期タスク数**: 3件
- **優先度分布**: 高1件、中1件、低1件
- **完了状態**: 未完了3件

---

## 🎓 学習成果

### Challenge 2で習得した技術スキル

#### 1. Reactコンポーネント設計
- **単一責任の原則**: 各コンポーネントが1つの明確な役割を持つ設計
- **コンテナ/プレゼンテーショナルパターン**: データ管理と表示の分離
- **コンポーネントの粒度**: 適切なサイズと責任範囲の判断

**実践例**:
- TaskManager: 状態管理とロジック（コンテナ）
- TaskItem: 表示のみ（プレゼンテーショナル）

---

#### 2. TypeScriptによる型安全性
- **Union Types**: 限定的な値の集合を型として定義
- **型定義**: オブジェクトの構造を定義
- **ジェネリクス**: useState<T>による型付き状態管理

**実践例**:
```typescript
type Priority = 'high' | 'medium' | 'low'; // Union Type
const [tasks] = useState<Task[]>([]); // ジェネリクス
```

---

#### 3. データフローの理解
- **Props（親→子）**: データの下方向への流れ
- **コールバック（子→親）**: イベントの上方向への伝達
- **単方向データフロー**: Reactの基本原則

**実践例**:
```typescript
// 親コンポーネント（TaskManager）
<FilterTabs
  currentFilter={currentFilter} // Props
  onFilterChange={setCurrentFilter} // コールバック
/>
```

---

#### 4. CSS Modulesの活用
- **スコープ化**: クラス名の自動変換による衝突回避
- **条件付きスタイリング**: 動的なクラス名の適用
- **data属性**: 属性セレクタによる動的スタイリング

**実践例**:
```typescript
// 条件付きクラス名
className={`${styles.tab} ${currentFilter === 'all' ? styles.active : ''}`}

// data属性
data-priority={task.priority}
```

---

#### 5. 状態管理の基礎
- **useState**: コンポーネント内の状態管理
- **状態の配置**: どこに状態を持つべきかの判断
- **状態の更新**: setStateによる更新とイミュータビリティ

**実践例**:
```typescript
// 共有状態は親に
const [tasks] = useState<Task[]>([...]);

// ローカル状態は子に
const [isOpen, setIsOpen] = useState(false);
```

---

### トラブルシューティング経験

#### 問題1: 画面が真っ白（ホワイトアウト）になった
**エラー**: ブラウザに何も表示されず、真っ白な画面のみ

**原因**: Path alias（`@components/`等）がViteで正しく解決されなかった

**解決策**: 相対パスへの変更
```typescript
// 修正前
import TaskManager from '@components/TaskManager';

// 修正後
import TaskManager from './components/TaskManager';
```

**学んだこと**:
- ビルドツールの設定理解の重要性
- シンプルな解決策の選択（相対パス）

---

#### 問題2: モジュールエクスポートエラー
**エラー**: `The requested module does not provide an export named 'FilterTabsProps'`

**原因**: 外部型定義ファイル（`src/types/task.ts`）のimportがブラウザで解決できなかった

**解決策**: 各コンポーネント内でインライン型定義
```typescript
// 各コンポーネント内で型定義
type Priority = 'high' | 'medium' | 'low';
```

**学んだこと**:
- TypeScriptのモジュールシステム理解
- 教育目的ではインライン定義が理解しやすい

---

#### 問題3: 重複インポートエラー
**エラー**: `Identifier 'styles' has already been declared`

**原因**: 同じファイル内で`import styles`が2回宣言されていた

**解決策**:
1. 重複行の削除
2. Viteキャッシュのクリア
```bash
rm -rf node_modules/.vite
npm run dev
```

**学んだこと**:
- ファイル修正後もエラーが継続する場合、キャッシュクリアが有効
- 開発サーバーの完全再起動の重要性

---

## 🛠️ 開発環境

### 必須ツール
- **Node.js**: v18以上推奨
- **npm**: v9以上推奨
- **Vite**: 5.4.10（ビルドツール）

### 技術スタック
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "~5.6.2",
    "vite": "^5.4.10"
  }
}
```

---

## 📦 利用可能なコマンド

### 開発サーバー起動
```bash
npm run dev
```
- 開発サーバーを起動（通常 http://localhost:5173）
- ホットリロード有効

### プロダクションビルド
```bash
npm run build
```
- TypeScriptのコンパイル実行
- 最適化されたビルドを `dist/` に生成

### ビルドプレビュー
```bash
npm run preview
```
- プロダクションビルドをローカルでプレビュー

---

## 📁 プロジェクト構造

```
3_issue_2/
├── src/
│   ├── components/           # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── FilterTabs.tsx
│   │   ├── SortDropdown.tsx
│   │   ├── TaskInput.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskManager.tsx
│   ├── styles/               # CSS Modules
│   │   ├── Header.module.css
│   │   ├── FilterTabs.module.css
│   │   ├── SortDropdown.module.css
│   │   ├── TaskInput.module.css
│   │   ├── TaskList.module.css
│   │   ├── TaskItem.module.css
│   │   ├── TaskManager.module.css
│   │   └── index.css
│   ├── App.tsx               # アプリケーションルート
│   ├── App.css
│   ├── main.tsx              # エントリーポイント
│   └── index.css
├── public/                   # 静的ファイル
├── index.html                # HTMLテンプレート
├── package.json              # パッケージ設定
├── tsconfig.json             # TypeScript設定
├── vite.config.ts            # Vite設定
└── README.md                 # このファイル
```

---

## 🚀 次のステップ - Challenge 3

### 実装予定の機能

#### 1. タスク追加機能
- TaskInput内の入力フォームに実際の機能を追加
- useState による入力値管理
- バリデーション処理の実装
- TaskManagerへのコールバック実装

#### 2. タスク完了切り替え機能
- チェックボックスのクリックイベント処理
- completed状態の更新ロジック
- イミュータブルな配列更新パターン

#### 3. 状態の永続化
- localStorage APIの使用
- useEffect による自動保存
- アプリケーション起動時のデータ復元

#### 4. 追加機能（オプション）
- タスク削除機能
- タスク編集機能
- タスクの並び替え

### 学習目標
- React Hooksの実践的活用（useState, useEffect）
- イベントハンドリングの理解
- ブラウザAPIとの連携
- 状態更新のベストプラクティス

---

## 📚 学習リソース

### 公式ドキュメント
- [React 公式ドキュメント](https://ja.react.dev/)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/ja/)
- [Vite 公式ドキュメント](https://ja.vitejs.dev/)

### プロジェクト内参考資料
- 課題仕様: `/React_3_issue/課題/README.2.md`
- 実装解説: `/React_3_issue/解説/課題2/README.2実装解説.md`
- 理論学習: `/React_3_issue/課題/README.1理論.md`

---

## 💡 実装のポイント

### コンポーネント分割の考え方
- **再利用性**: 同じ機能を複数箇所で使うか
- **複雑性**: コンポーネントが複雑すぎないか
- **責任**: 1つの明確な役割を持っているか

### TypeScript活用のベストプラクティス
- **Union Types**: 限定的な値の集合を型で表現
- **明示的な型定義**: Props、State、関数の戻り値に型を指定
- **型推論の活用**: 自明な場合は型推論に任せる

### CSS Modulesの効果的な使用
- **命名規則**: キャメルケースの一貫性
- **スコープ化**: グローバルスタイルとの使い分け
- **動的スタイリング**: data属性や条件付きクラスの活用

---

## 🎯 まとめ

Challenge 2では、Reactコンポーネントの基本構造とTypeScriptによる型安全な実装、CSS Modulesによるスタイリングを学習しました。7つのコンポーネントに適切に分割し、単一責任の原則に基づいた設計を実践しました。

次のChallenge 3では、これらのコンポーネントに実際の機能を追加し、React Hooksを使った状態管理とブラウザAPIとの連携を学習します。

---

**学習プロジェクト**: React実践学習 - タスク管理アプリ
**実装日**: 2025年11月2日
**最終更新**: 2025年11月2日
