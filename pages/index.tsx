import Head from 'next/head'
import Link from 'next/link'
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
        <title>ooitanojohn</title> {/*title*/}
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <div className="display">
      <div style={{ display:"flex" }}> 
       <div id="main">
        <Header></Header>
        <main>
         <article>
          <h2 className="visiually-hidden">記事一覧</h2>
          <ul>
           {allPostsData.map(({ id, date, title, description, tag, author }) => (
           <li key={id}>
            <Link href={`/posts/${id}`}><a>
                {id} - {date} / {tag}
                <span> [{title}]  {description}</span>
            </a></Link>
           </li>
          ))}
          </ul>
         </article>
        </main>
       </div>
       <Aside></Aside>
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
