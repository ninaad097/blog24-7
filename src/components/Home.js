import {   Container , Grid , Paper } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Blog } from "./Blog"
import useStyles from "./homestyles"
import axios from "axios"
import { useHistory } from "react-router"

export const Home = () => {
    const history = useHistory()
    const classes = useStyles()
    const [blog , setBlog] = useState(null)
    useEffect(() => {
        axios.get('/blogs')
             .then(function (res) {
               
                setBlog(res.data)
             })
             .catch(function (error) {
               console.log(error);
             })
             history.push('/')
    }, [])
    // const classes = useStyles()
   
    return (
        <div >
         <div className={classes.buffer} />
          
            <Container >
                {/* <Typography className={classes.blog} variant="h1">Blogs</Typography> */}
                <Grid container 
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                wrap="nowrap">
                    { blog && 
                        blog.map((blog) => (
                            <Paper key={blog.id} className={classes.paper}>
                                <Grid item>
                                 <Blog blog={blog} />
                                </Grid>
                            </Paper>
                        ))
                    }

                  
                </Grid>
            </Container>
            <div className={classes.buffer} />
        </div>
    )
}
