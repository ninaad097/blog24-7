import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    buffer: {
        height:'90px'
    },
    title:{

    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    width:"100%"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  input: {
      margin:'8px 5px',
      '&:hover' : {
      
    
     
    }
  }
 
}));