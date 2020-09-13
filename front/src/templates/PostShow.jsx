import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Box,Container,Typography } from "@material-ui/core"
import axios from "axios"
import { BookCard } from "../components/UIkit"
import { MapItemCard, ReadingBookDetail,CompletedBookDetail } from "../components/Posts"
import { fetchPostDetail } from "../reducks/posts/operations"

const PostShow = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state);
  const path = selector.router.location.pathname;
  const id = path.split("/posts/")[1];

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [url,setUrl] = useState("#");
  const [status,setStatus] = useState("");
  const [mapItems, setMapItems] = useState([]);

  useEffect(()=>{
    // dispatch(fetchPostDetail(id))
    axios.get(('http://localhost:3000/api/v1/posts/' +  String(id)), {
      headers: {
        'access-token': localStorage.getItem('auth_token'),
        'client': localStorage.getItem('client_id'),
        'uid': localStorage.getItem('uid'),
      }
    })
    .then((response) => {
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setImage(response.data.image)
      setUrl(response.data.url)
      setStatus(response.data.status)
      setMapItems(response.data.post_items)
    })
    .catch((error) => {
      console.log("error",error)
    })
  },[])

  return (
    <Container maxWidth="sm">
      {status === "reading"
        ? <ReadingBookDetail
            title={title} author={author} image={image}
            url={url} status={status} mapItems={mapItems}
          />
        : <CompletedBookDetail
            title={title} author={author} image={image}
            url={url} status={status} mapItems={mapItems}
          />
      }

      {/* <Typography variant="h5" component="h3">
        書籍情報
      </Typography>
      <Box>
        <BookCard title={title} author={author} image={image} />
      </Box>

      <Typography variant="h5" component="h3">
        メンタルマップ
      </Typography>

      {mapItems.length > 0 && (
        mapItems.map(mapItem => (
        <Box key={mapItem.id}>
          <MapItemCard content={mapItem.content} />
        </Box>
        ))
      )} */}
    </Container>
  )
}

export default PostShow