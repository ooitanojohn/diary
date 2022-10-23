import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import profileImg from '../public/images/profile.jpg'
import turtleImg from '../public/images/turtle.png'

// 記事のレイアウト
function Header() {
  return (
    <header className={styles.container} >
        <div className={styles.d_flex}> 
          <h1 className='display-none'>ooitanojohn is blog</h1> 
          <li><Image src={profileImg} alt="turtle_icon" height={64} width={64}></Image></li>
          <li>BIG LOVE...♡</li>
        </div>
        <ul className={styles.d_flex}>
          <li><Link href="/"><a>home</a></Link></li>
          <li><Link href="/readme"><a>readme</a></Link></li>
          <li><Link href="/repos/1"><a>repos</a></Link></li>
          <li><Image src={turtleImg} alt="turtle_icon" height={32} width={32}></Image></li>
          <li>click to nav..</li>
        </ul>
    </header>
  )
}

export default Header
