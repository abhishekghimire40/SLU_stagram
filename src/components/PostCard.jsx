import React from 'react'
import { Link } from 'react-router-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default function PostCard({ post, setPosts }) {
  const toggleLike = () => {
    setPosts(prev => prev.map(p =>
      p.id === post.id
        ? { ...p, likedByMe: !p.likedByMe, likeCount: p.likedByMe ? p.likeCount - 1 : p.likeCount + 1 }
        : p
    ))
  }

  return (
    <article style={{ background: 'white', border: '1px solid #ddd', borderRadius: 8, margin: '12px 0' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8 }}>
        <img src={post.avatar} alt={`${post.author} avatar`} width="36" height="36" style={{ borderRadius: '50%' }} />
        <Link to={`/u/${post.author}`}>@{post.author}</Link>
      </header>

      <img src={post.imageUrl} alt={post.caption} style={{ width: '100%' }} />

      <div style={{ padding: 8 }}>
        <button onClick={toggleLike} aria-pressed={post.likedByMe}>
          {post.likedByMe ? '♥' : '♡'} Like
        </button>
        <span style={{ marginLeft: 8 }}>{post.likeCount} likes</span>

        {post.caption && <p><strong>@{post.author}</strong> {post.caption}</p>}

        <CommentList comments={post.comments} />
        <CommentForm postId={post.id} setPosts={setPosts} />
      </div>
    </article>
  )
}
