import React, { useState } from 'react'

export default function CommentForm({ postId, setPosts }) {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setPosts(prev => prev.map(p => {
      if (p.id !== postId) return p
      return { ...p, comments: [...p.comments, { id: crypto.randomUUID(), author: 'you', text: trimmed }] }
    }))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginTop: 8 }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a comment..."
        style={{ flex: 1 }}
      />
      <button type="submit">Post</button>
    </form>
  )
}
