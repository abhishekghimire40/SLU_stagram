import React from 'react'

export default function CommentList({ comments = [] }) {
  if (!comments.length) return <p style={{ opacity: 0.6 }}>No comments yet.</p>
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {comments.map(c => (
        <li key={c.id}><strong>@{c.author}</strong> {c.text}</li>
      ))}
    </ul>
  )
}
