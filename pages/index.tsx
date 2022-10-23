import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/index.module.css'
import Header from '../components/header'
import Aside from '../components/aside'
import Footer from "../components/footer"
import { getSortedPostsData } from '../lib/md' // md解析
import { GetStaticProps } from 'next'

export default function Index({ allPostsData }:{
  allPostsData: {
    id: string
    date: string
    title: string
    description: string
    tag: string
    author: string
  }[]
}) {
  return (
    <>
      {/* {console.log(allPostsData)} */}
      <Head>
        <title>ooitanojohn</title> 
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <div className="display">
      <div style={{ display:"flex" }}> 
       <div id="main">
        <Header></Header>
        <main>
         <article>
          <h2 className="visiually-hidden">記事一覧</h2>
         <form method="post">
          <input type="text" placeholder="検索予定404 " ></input> 
         </form>
         <ul>
           {allPostsData.map(({ id, date, title, description, tag, author }) => (
           <li key={id}>
            <Link href={`/posts/${id}`}><a>
              <span className={styles.block}>
                <span className={styles.title}>{title}</span>
              </span>
             <div className={styles.tag}>
              <span className={styles.genre}>{tag}</span> <span className={styles.date}>{date}</span>
              </div>
             <span className={styles.block}>{description}</span>
             </a></Link>
           </li>
          ))}
          </ul>
         </article>
        </main>
       </div>
      </div>
      <Footer></Footer>
      </div>
    </>
  )
}

{/* 繰り返す 記事一覧コンポーネント */ }
export const getStaticProps: GetStaticProps = async () => { // ファイルからmd取得
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
