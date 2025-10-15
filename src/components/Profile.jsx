import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Feed from './Feed'

export default function Profile({ posts, setPosts }) {
  const { handle } = useParams()
  const userPosts = posts.filter(p => p.author === handle)

  return (
    <section>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h2>@{handle}</h2>
        <Link to="/">← Home</Link>
      </header>

      {userPosts.length
        ? <Feed posts={userPosts} setPosts={setPosts} />
        : <p style={{ opacity: 0.6 }}>No posts yet for @{handle}.</p>}
    </section>
  )
}
