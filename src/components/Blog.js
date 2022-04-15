import { Typography , makeStyles  } from "@material-ui/core"
import Truncate from 'react-truncate';

const useStyles = makeStyles({
    parent:{
        position:'relative'
    },
   title:{
       display:'inline-block',
       marginBottom:'10px'
   },
   genre:{
       position:'absolute',
       top:'0',
       right:'1%',
       fontWeight:'bolder'
   },
   name:{
       fontWeight:'bolder',
       fontSize:'1.2rem',
       marginLeft:'7px'
   }
   
})
export const Blog = ({ blog }) => {
    const classes = useStyles()
    return (
        
        <div className={classes.parent}>
        <Typography className={classes.title}  variant="h3">{blog.title}</Typography>
        <Typography  className={classes.genre}  variant="h6">Genre : {blog.genre}</Typography>
        <Typography  className={classes.name}  variant="caption"> by {blog.name}</Typography>
        <Typography className={classes.blog}  variant="body2">
           <Truncate lines={1} ellipsis={<span>... <a href={`/blogs/${blog._id}`}>Read more</a></span>}>{blog.blog}</Truncate> 
            </Typography>
        </div>

    )
}
