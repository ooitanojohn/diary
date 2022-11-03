import styles from './postLayout.module.css';

// 記事のレイアウト
function PostLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

export default PostLayout;
