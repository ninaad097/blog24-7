import { Typography , Paper , IconButton } from "@material-ui/core"
import { useEffect, useState } from "react";
import useStyles from './singlestyles';
import { useParams } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { useHistory } from "react-router";
import axios from "axios"
export const Single = (e) => {
    const history = useHistory()
    const params = useParams();
   const [ bl , setBl ] = useState(null)
    useEffect(() => {
        axios.get(`/blogs/${params.id}`)
        .then(function (res) {
           
          setBl(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    },[params.id])
    const handleDelete = async () => {
        console.log(params.id);
        axios.delete(`/blogs/${params.id}`);
        history.push('/')
    }

   
    const classes = useStyles()
    return (
        <>
        <div className={classes.buffer} />
          { bl && (
              <Paper className={classes.paper}>
                 
                  <Typography className={classes.title}  variant="h2">{bl.title}</Typography>
                  <Typography className={classes.name} variant="h6">  ~ By {bl.name}</Typography>
                  <Typography className={classes.genre} variant="h5">Genre : {bl.genre}</Typography>
                  <Typography className={classes.blog} variant="body1">{bl.blog}</Typography>
                  <IconButton className={classes.delete} onClick={handleDelete}><DeleteIcon /></IconButton>
                  <IconButton className={classes.back} onClick={() => history.push('/')}><BackspaceIcon /></IconButton>
              </Paper>
          )}
     </>
    )
}
