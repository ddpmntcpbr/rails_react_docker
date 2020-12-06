import React from 'react';
import {Route, Switch} from "react-router";
import {
  CompletedPostsDetail,
  CompletedPostsList,
  PostEdit,
  PostShow,
  ReadingBookPage,
  ReadingPostsDetail,
  RegisteredPostsDetail,
  RegisteredPostsList,
  TopPage,
  MyPage}
from "./templates";
import Auth from "./Auth"

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={TopPage} />

      <Auth>
        <Route exact path={"/completed/posts/:id"} component={CompletedPostsDetail} />
        <Route exact path={"/completed/posts"} component={CompletedPostsList} />
        <Route exact path={"/reading/posts"} component={ReadingBookPage} />
        <Route exact path={"/reading/posts"} component={ReadingPostsDetail} />
        <Route exact path={"/registered/posts"} component={RegisteredPostsList} />
        <Route exaxt path={"/registered/posts/:id"} component={RegisteredPostsDetail} />
        <Route exact path={"/mypage"} component={MyPage} />
        <Route exact path={"/posts/edit"} component={PostEdit} />
        <Route path={"/posts/show(/:id)?"} component={PostShow} />
      </Auth>
    </Switch>
  );
};

export default Router