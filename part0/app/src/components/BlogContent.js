import React from 'react'

function BlogContent({ article, isPublished, minutesToRead }) {
  console.log(props)
  return (
    <div>
      <h4>{article}</h4>
      <p>Published: {isPublished}</p>
      <p>Minuted to read: {minutesToRead}</p>
    </div>
  )
}

export default BlogContent
