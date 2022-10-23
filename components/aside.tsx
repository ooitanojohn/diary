import styles from './aside.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bgImg from '../public/images/bg-green.jpg'

// 記事のレイアウト
function Aside() {
  return (
    <aside className={styles.container} >
        <div className={styles.d_flex}> 
        <h3 className="visiually-hidden">引用させて頂いた作品、文献集</h3> 
          <blockquote cite="https://unsplash.com/ja/s/%E5%86%99%E7%9C%9F/design">
          <p><Image src={bgImg} alt="bgImg" layout="responsive"sizes="100vh" ></Image></p>
          <cite><p>引用させて頂いた画像</p><a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/70l1tDAI6rM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">unsplash.userName.Chris Lee</a></cite>
          </blockquote>
        </div> 
    </aside>
  )
}

export default Aside
