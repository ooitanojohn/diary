import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { GetStaticProps } from 'next'
import { getGitProfileData } from '../lib/git'
import handImg from '../public/images/womanraisinghand.png'

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
      <div className="display">
      <Header></Header>
      <main>
        <article>
        <h2>Profile</h2>
           <ul>
            <li><span className="tag">Hi!♡</span><Image src={handImg} alt="hande_icon" height={32} width={32}></Image>
my name is {profile.login}</li>
            <li>I&apos;m Learning started {profile.created_at} ~ {profile.updated_at}</li>

            <li>{profile.bio}</li>
            <li><p><Image src={profile.avatar_url} alt="github_avater" height={100} width={100}></Image></p></li>
            <li><span className="tag">tech:</span>Valila.developer</li>
            <li><span className="tag">techlike:</span>PHP,next.js,bash</li>
            <li><span className="tag">hobby:</span>cute,music(keyboard),art</li>
          </ul>
       </article>
      </main>
      <Footer></Footer>
      </div>
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
