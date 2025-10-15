import React from 'react'
import PostCard from './PostCard'

export default function Feed({ posts, setPosts }) {
  return (
    <section>
      {posts.map(post => (
        <PostCard key={post.id} post={post} setPosts={setPosts} />
      ))}
    </section>
  )
}
