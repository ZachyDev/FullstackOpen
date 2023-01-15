import React from 'react'
import BlogContent from './BlogContent'

function BlogPost() {
  return (
    <div>
      <BlogContent
        article="Welcome to ReactJS Developer Blog 2023"
        isPublished={true}
        minutesToRead={2}
      />
    </div>
  )
}

export default BlogPost
