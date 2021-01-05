import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { TwitterLoginButton } from "../components/UIkit";
import { TwitterShareButton,TwitterIcon } from 'react-share';
import {useDispatch} from 'react-redux';
import {signIn,signInGuestUser} from "../reducks/users/operations";
import topPageImage from "../assets/img/src/top.png";
import axios from "axios";
import {PrimaryButton} from "../components/UIkit";
import { fetchPosts } from "../reducks/posts/operations"
import { Helmet } from "react-helmet";

const fetchHttpsUsersCount = () => {
    return async () => {
      // const apiEndpoint = process.env.REACT_APP_API_V1_URL + "/users_count"
      const apiEndpoint = "https://yomukatsu-backend.com/api/v1/users_count"
      axios.get(apiEndpoint)
      .then((response) => {
        console.log("fetchHttpsUsersCount",response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

const fetchHttpUsersCount = () => {
    return async () => {
      const apiEndpoint = "http://yomukatsu-backend.com/api/v1/users_count"
      console.log("httpApiEndpoint",apiEndpoint)
      axios.get(apiEndpoint)
      .then((response) => {
        console.log("fetchHttpUsersCount",response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

const TopPage = () => {
  const dispatch = useDispatch()

  const url = process.env.REACT_APP_BASE_URL;
  const title = `開発途中のアプリです\n#hashtag_test`;
  // const [usersCount,setUsersCount] = useState(0);
  // const usersCount = fetchUsersCount()

  // useEffect(()=>{
  //   // setUsersCount(fetchUsersCount())
  //   const usersCount = fetchUsersCount()
  // },[])

  return (
    <Container>
      <Helmet
        meta={[
          {name: "twitter:card", content: "summary"},
          {name: "twitter:image", content: "https://www.book.yomukatsu.com/static/media/logo.e89c3802.png"},
          {name: "twitter:title", content: "Yomukatsu"},
          {name: "twitter:description", content: "積読解消サポート!"},
        ]}
      />
      <div>
        <img
          src={topPageImage} alt="topPageImage"
        />
      </div>
      <Typography>HTTPS対応</Typography>
      <Typography>かんたん！5秒で登録！</Typography>
      <TwitterLoginButton
        label={"Twitter ログイン / 新規登録"}
        onClick={() => dispatch(signIn())}
      />
      <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={64} round />
      </TwitterShareButton>
      <PrimaryButton
        label="fetchHttpUsersCount"
        onClick={fetchHttpUsersCount()}
      />
      <PrimaryButton
        label="fetchHttpsUsersCount"
        onClick={fetchHttpsUsersCount()}
      />
      <PrimaryButton
        label="fetchPosts"
        onClick={()=>dispatch(fetchPosts())}
      />
      <PrimaryButton
        label="ゲストログイン"
        onClick={()=>dispatch(signInGuestUser())}
      />
      {/* <Typography>{usersCount}</Typography> */}
    </Container>
  );
};

export default TopPage
