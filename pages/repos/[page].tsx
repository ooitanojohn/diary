import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from "../../components/footer"
import { GetStaticProps,GetStaticPaths,NextPage } from 'next'
import { getAllGitRepoData,getPageGitRepoData } from '../../lib/git'
import { Pagination } from '../../components/pagination'
import { Octokit } from '@octokit/rest'

type PathParams = { // pathの型情報
  page: string
}
  // totalPage:string
type PageProps = { // PagePropsの型情報
    repositories: {
    name: string
    description: string
    html_url: string
    created_at: string
    updated_at: string
  }[],
    totalCount: number
}

const PER_PAGE = 10;
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const all = await getAllGitRepoData() // 全件数を取る
  const totalPage:number = Object.keys(all.data).length
  const pages = Math.ceil(totalPage / PER_PAGE)
  let paths = [ // staticPathの構造
  ]
  for (let i = 1; pages >= i; i++) {
    paths.push({ params: {page:`${i}`} })
  }
  // console.log(paths)
  return { paths,fallback: false };
};

export const getStaticProps: GetStaticProps  = async (context) => {
  const { page } = context.params as PathParams
  const repositories = await getPageGitRepoData(page) // pageの内容
  const all = await getAllGitRepoData() // 全件取得
  const totalCount = Object.keys(all.data).length
  return {
    props: {
      repositories: repositories.data,
      totalCount:totalCount
    }
  }
}


const Works: NextPage<PageProps> = ({ repositories,totalCount }) => {
  return (
    <>
      {/* {console.log(repositories)} */}
      <Head>
        <title>create</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>create</h1>
        <ul>
            {repositories.map(({name,description, html_url,created_at,updated_at}) => (
            <li key={html_url}>
              <Link href={`${html_url}`}><a>
                製作開始: {created_at} 最終更新日: {updated_at}
                  <span> [{name}] { description } </span>
              </a></Link>
            </li>
          ))}
        </ul>
        <Pagination totalCount={totalCount} DIR='/repos/'/>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Works
