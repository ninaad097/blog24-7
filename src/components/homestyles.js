import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    buffer: {
        height:'90px'
    },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
    width:"100%",

  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  blog: {
    fontFamily:'Allison , "cursive"'

  }
 
}));