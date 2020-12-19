import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Box,Container,Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { getRegisteredPosts } from "../reducks/posts/selectors"
import { BookCard } from "../components/UIkit"
import { push } from "connected-react-router";

const useStyles = makeStyles((theme)=>({
  root: {
  }
}))

const RegisteredPostsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state);
  const posts = getRegisteredPosts(selector);

  return (
    <Container maxWidth="md" className={classes.root}>
      {posts.length > 0 ? (
        posts.map(post => (
          <Box
            key={post.id}
            onClick={()=>dispatch(push("/registered/posts/" + String(post.id)))}
          >
            <BookCard
              title={post.title}
              author={post.author}
              image={post.image}
            />
          </Box>
        ))
      ) : (
        <Typography>読書中アイテムなし</Typography>
      )}
    </Container>
  )
}

export default RegisteredPostsList