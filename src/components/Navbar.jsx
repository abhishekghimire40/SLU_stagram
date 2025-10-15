import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header style={{ background: 'white', padding: '10px 16px', borderBottom: '1px solid #eee' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <strong>SLU-Stagram</strong>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}
