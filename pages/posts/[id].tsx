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
      <Header></Header>
      <main>
        <PostLayout>
          <p>{postData.title}</p>
          <p>{postData.date}</p>
          <p>{postData.description}</p>
          <p>{postData.tag}</p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </PostLayout>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Post
