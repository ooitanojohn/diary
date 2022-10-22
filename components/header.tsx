import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'

// 記事のレイアウト
function Header() {
  return (
    <header className={styles.container} >
      <nav>
        <ul className={styles.d_flex}>
          <li><Link href="/"><a>home</a></Link></li>
          <li><Link href="/readme"><a>readme</a></Link></li>
          <li><Link href="/repos/1"><a>repos</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
