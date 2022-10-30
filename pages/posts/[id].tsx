import Head from 'next/head'
import Header from '../../components/header'
import PostLayout from '../../components/postLayout'
import Footer from "../../components/footer"
import { getAllPostIds, getPostData } from '../../lib/md'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

type PathParams = { //PathParamの型情報
  id:string
}
type PageProps =  { // Propsの型情報
    postData: {
    title: string
    date: string
    description: string
    tag: string
    contentHtml: string
    }
}
export const getStaticPaths: GetStaticPaths<PathParams> = async () => { // mdから読み取った idとしてとりうる値のリストを返す
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps:GetStaticProps<PageProps> = async context  => {

  const {id} = context.params as PathParams // StaticPropsの返り値 context.param.idを取得
  const postData = await getPostData(id) // params.id を使用して、ブログの投稿に必要なデータを取得
  return {
    props: { postData }
  }
}

const Post: NextPage<PageProps> = ({ // 記事用レイアウト
  postData
}) => {
  return (
    <>
      {/* {console.log(postData)} */}
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <div className="display">
      <Header></Header>
      <main>
        <PostLayout>
        <article>
          <section>
          <h3 className="visiually-hidden">記事タイトル</h3>
            <div className="title-rayout">
              <h2>{postData.title} : </h2>
              <p>{postData.description}</p>
            </div>
            <div className="title-rayout" >
              <p>date:{postData.date}</p>
              <p>tag:{postData.tag}</p>
            </div>
          </section>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <style jsx>{`
            .title-rayout{
              display:flex;
              justify-content:space-between;
            }
            section{
              padding-bottom:50px;
          `}</style>
        </article>
        </PostLayout>
      </main>
      <Footer></Footer>
      </div>
    </>
  )
}

export default Post
