import React from 'react'
import Post from "./Post/Post.js"
import makeStyles from "./style.js"
const Posts = () => {
    const classes = makeStyles();
  return (

    <>
    <h1 className={classes.something}>POSTS</h1>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </>
    
  )
}

export default Posts