import { AppBar  , makeStyles, Toolbar, Typography} from "@material-ui/core"

import { Link } from "react-router-dom"

const useStyles = makeStyles({
    title : {
        fontFamily:'Allison , "cursive"',
  
        color:'black',

    },
    appbar:{

    backgroundColor:'#A0BBB6',
    display:'flex',
    height:'80px',
    alignContent:'center',
    flexDirection:'row',
    justifyContent:'space-around'
    },
    link:{
        textDecoration:'none',
        listStyle:'none',
        color:'black',
        fontSize:'1.5 rem',
        '&:hover' : {
            color:'white',
           
         
        }
    },
    parent:{
        top: 'auto',
        bottom: 0,
        marginTop:'10px',
        position:'fixed',
       
    },
    footer:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#A0BBB6',
        color:'black',
      
  
    }
})
export const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div>
            <AppBar >
                <Toolbar  className={classes.appbar}>

           <Typography variant="h3"  className={classes.title}>Blogs 24/7</Typography>
           <Link to="/" className={classes.link}><Typography variant="h6"  >Home</Typography></Link>
           <Link to="/create" className={classes.link}><Typography variant="h6" >Create</Typography></Link>
           
                </Toolbar>

            </AppBar>
            {children}
            <footer >

            <AppBar className={classes.parent} position="fixed">
                <Toolbar  className={classes.footer}>
                 <Typography >Made with ❤️ by Ninad {new Date().getFullYear()}   </Typography>
               
                
                </Toolbar>
            </AppBar>
            </footer>
        </div>
    )
}

