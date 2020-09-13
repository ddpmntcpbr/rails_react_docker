import React from "react";
import {  Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"

const QuestionDialog = (props) => {
  return (
    <Box>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={props.handleClose} >
            OK
          </Button>
          <Button variant="outlined" color="primary" onClick={props.handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default QuestionDialog