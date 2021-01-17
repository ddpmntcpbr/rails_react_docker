import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container,Paper,Tab,Tabs } from '@material-ui/core';
import { TabPanel } from "../components/UIkit";
import { RegisteredPostsList,CompletedPostsList } from "../components/Posts"
// import { useHistory,useLocation } from "react-router-dom"

const useStyles = makeStyles((theme)=>({
  root: {
  }
}))

const PostsList = () => {
  const classes = useStyles();
  // const history = useHistory()
  // const location = useLocation();
  const [selectedTab,setSelectedTab] = useState(0);

  const handleChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab)
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper>
        <Tabs value={selectedTab} variant="fullWidth" onChange={handleChange}>
          <Tab label="読書中" />
          <Tab label="完読リスト" />
        </Tabs>
        <TabPanel value={selectedTab} index={0}>
          <RegisteredPostsList />
          </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <CompletedPostsList />
        </TabPanel>
      </Paper>
    </Container>
  )
}

export default PostsList