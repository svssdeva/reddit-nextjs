import type { NextPage } from 'next'
import Header from '../components/header'
import Banner from '../components/community/Banner'
import CreatePost from '../components/feed/CreatePost'
import About from '../components/community/About'
import Feed from "../components/feed"
import useSwr from 'swr'
import {useState} from "react"

const style = {
  wrapper: `flex min-h-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
}

const Home: NextPage = () => {
    const [myPosts, setMyPosts] = useState([]);
    // @ts-ignore
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSwr('/api/get-posts', fetcher);
    console.log(data, 'hello');
  return (
    <div className={style.wrapper}>
      <Header />
      <Banner />
      <main className={style.main}>
        <div className={style.content}>
          <CreatePost />
            <Feed/>
        </div>
        <div className={style.infoContainer}>
          <About />
        </div>
      </main>
    </div>
  )
}

export default Home
