import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Composer from './components/Composer'
import Feed from './components/Feed'
import Profile from './components/Profile'
import { seedPosts } from './data/posts'

const STORAGE_KEY = 'mini-insta-posts'

export default function App() {
  const [posts, setPosts] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : seedPosts
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={
            <>
              <Composer setPosts={setPosts} />
              <Feed posts={posts} setPosts={setPosts} />
            </>
          } />
          <Route path="/u/:handle" element={<Profile posts={posts} setPosts={setPosts} />} />
        </Routes>
      </main>
    </>
  )
}
