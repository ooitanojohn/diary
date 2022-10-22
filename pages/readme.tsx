import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { GetStaticProps } from 'next'
import { getGitProfileData } from '../lib/git'

export default function Readme({ profile }: {
  profile: {
    login: string
    bio: string
    avatar_url: string
    created_at: string
    updated_at: string
  }
}) {
  return (
    <>
      <Head>
        <title>profile</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>Profile</h1>
           <ul>
            <li>GitHub {profile.created_at} ~ {profile.updated_at}</li>
            <li>my name is {profile.login}</li>
            <li>{profile.bio}</li>
            <li><p><Image src={profile.avatar_url} alt="github_avater" height={100} width={100}></Image></p></li>
          </ul>
      </main>
      <Footer></Footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => { // build時に実行
  const profile = await getGitProfileData();
  // console.log(profile.data)
  return {
    props: {
      profile:profile.data
    }
  }
}