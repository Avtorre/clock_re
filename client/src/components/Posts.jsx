import React, { useEffect, useRef, useState } from 'react'
import './compStyles/Posts.css'
import { useFetch } from '../hooks/useFetch'
import PostItem from './PostItem'
import { useObserver } from '../hooks/useObserver'

const Posts = () => {
 const [posts, setPosts] = useState([])
 const [page, setPage] = useState(1)
 const [firstLoad, setFirstLoad] = useState(true)
 let curPage = page
 let totalPages = 9
 let [resp, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/posts', page, page)
 if(error) {console.log(error)}
 useEffect(() => {
  if (resp) {
    console.log('resp', resp)
    setPosts([...posts, ...resp.data])
    setFirstLoad(false)
  }
  console.log('posts', posts)
  // eslint-disable-next-line
 }, [resp])

 const lastElement = useRef()

 useObserver(lastElement, page < totalPages, isLoading, () => {
  curPage += 1
  setPage(curPage);
  console.log(isLoading)
  console.log(page);
 })

  return (
    <div className='posts'>
      {posts
        ?posts.map(post =>
          <PostItem key={post.id} id={post.id} title={post.title} body={post.body}/>
        )
        :<h3>No posts</h3>
      }
      <div ref={lastElement} hidden={firstLoad} style={{height: 20}}></div>
    </div>
  )
}

export default Posts
