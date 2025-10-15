import React, { useState } from 'react'

export default function Composer({ setPosts }) {
  const [imageUrl, setImageUrl] = useState('')
  const [caption, setCaption] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!imageUrl.trim()) return

    const newPost = {
      id: crypto.randomUUID(),
      author: 'you',
      avatar: 'https://i.pravatar.cc/100?u=you',
      imageUrl,
      caption,
      likedByMe: false,
      likeCount: 0,
      comments: []
    }

    setPosts(prev => [newPost, ...prev])
    setImageUrl('')
    setCaption('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 8, margin: '12px 0' }}>
      <h3>Create Post</h3>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        style={{ width: '100%', marginBottom: 6 }}
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={e => setCaption(e.target.value)}
        style={{ width: '100%' }}
      />
      <button type="submit" disabled={!imageUrl.trim()}>Share</button>
    </form>
  )
}
