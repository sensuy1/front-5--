import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { createPost, deletePost, fetchQuery } from "../store/querySlice"

const ExampleComponent = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.query.items)
  const [newPostTitle, setNewPostTitle] = useState("")

  useEffect(() => {
    dispatch(fetchQuery())
  }, []);

  const handleCreatePost = () => {
    dispatch(createPost({ title: newPostTitle, userId: 1 }))
    setNewPostTitle("")
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId))
  }

  return (
    <div>
      <h2>Posts</h2>
      <input
        type="text"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <button onClick={handleCreatePost}>Create Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.title}</span>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
