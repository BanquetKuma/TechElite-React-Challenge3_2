import styles from '../styles/Header.module.css';

/**
 * Headerコンポーネント
 * タスク管理アプリのヘッダー部分を表示
 */
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>タスク管理</h1>
    </header>
  );
}

export default Header;
