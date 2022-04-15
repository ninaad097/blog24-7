import { Typography , TextField , Paper , Button} from "@material-ui/core"
import { useState } from "react";
import useStyles from './cstyles';
import { useHistory } from "react-router";
import axios from "axios"



const initial = { title:"" , name: "", genre:"" , blog:" "}
export const Create = () => {
    const history = useHistory()
    const [blog , setBlog] = useState(initial);
    const classes = useStyles()
    const handleSubmit = async (e) => {
      e.preventDefault()
    //   axios({
    //     method: 'post',
    //     url: '/create',
    //     headers: {'Content-type' : 'application/json'},
    //     body: blog
       

    // })
      axios.post('/create', blog)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      history.push('/')
    }
    console.log(blog);
    return (
        <>
         <div className={classes.buffer} />
        <Paper className={classes.paper}>
        <div >
        <Typography align="center" variant="h2">Create your blog 🖋</Typography>
        <form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.form}> 
        <TextField required onChange={(e) => setBlog({...blog , title : e.target.value})} className={classes.input} fullWidth label="What's it about? 🤔" variant="outlined" />
        <TextField required onChange={(e) => setBlog({...blog , name : e.target.value})} className={classes.input}  fullWidth label="Your good Name 😏" variant="outlined" />
        <TextField   required onChange={(e) => setBlog({...blog , genre : e.target.value})} className={classes.input}  fullWidth label="Genre 🤓" variant="outlined" />
        <TextField  required onChange={(e) => setBlog({...blog , blog : e.target.value})} className={classes.input}  fullWidth label="Get Started 💃" multiline minRows="7" variant="outlined" />
        <Button fullWidth variant="contained" className={classes.input} type="submit">Submit</Button>

        </form>
         </div>
        </Paper>
      
        </>
    )

}
