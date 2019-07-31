import React from 'react';

const PostsList = props => {
  return (
    <>
        {props.posts && props.posts.map(post => (
      <div className="postdetails">
          <p>UserId: {post.userId}</p>
          <p>Title: {post.title}</p>
          <p>{post.body}</p>

      </div>
        ))}
    </>
  )
}

export default PostsList;