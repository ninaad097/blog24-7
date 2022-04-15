import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    buffer: {
        height:'90px'
    },
    paper: {
        margin:'15px auto',
        display: 'flex',
        flexDirection: 'column',
        alignContent:'center',
        padding: theme.spacing(6),
        width:"90%",
        borderRadius:'2%',
        position:'relative',
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(160%2c 187%2c 182%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c499.14C96.799%2c525.365%2c207.443%2c508.273%2c291.143%2c453.027C374.526%2c397.99%2c422.668%2c301.031%2c446.963%2c204.121C468.96%2c116.38%2c435.65%2c28.7%2c419.85%2c-60.365C404.624%2c-146.193%2c414.04%2c-243.439%2c356.024%2c-308.496C298.172%2c-373.369%2c202.138%2c-380.531%2c117.333%2c-399.598C37.653%2c-417.513%2c-44.614%2c-441.657%2c-122.151%2c-416.007C-198.657%2c-390.698%2c-245.031%2c-318.76%2c-301.328%2c-261.102C-361.487%2c-199.489%2c-432.425%2c-146.999%2c-463.3%2c-66.612C-498.677%2c25.497%2c-542.017%2c140.49%2c-487.042%2c222.425C-430.514%2c306.675%2c-293.008%2c268.547%2c-204.794%2c318.666C-124.047%2c364.543%2c-89.639%2c474.855%2c0%2c499.14' fill='%23789e97'%3e%3c/path%3e%3cpath d='M1440 972.13C1545.899 986.248 1653.482 1089.339 1747.07 1037.811 1838.968 987.2139999999999 1804.791 841.919 1849.157 746.856 1894.064 650.633 2021.386 583.67 2008.1889999999999 478.307 1995.0320000000002 373.265 1857.397 338.4 1787.984 258.47 1718.679 178.664 1702.296 41.801000000000045 1601.496 9.994000000000028 1500.895-21.750999999999976 1402.879 62.91300000000001 1306.887 106.66000000000003 1224.084 144.39600000000002 1144.649 184.06599999999997 1079.6970000000001 247.796 1010.304 315.88300000000004 949.097 392.323 920.916 485.367 889.768 588.206 860.621 706.767 912.118 801.076 963.3009999999999 894.809 1079.799 929.475 1181.395 962.396 1265.153 989.537 1352.726 960.495 1440 972.13' fill='%23c8d8d5'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`
      },
      title: {
        display:'inline-block',
        width:'50%',
        fontWeight:'700'
      },
      name: {
        display:'inline-block',
        width:'50%',
        flexWrap:'wrap',
        fontWeight:'500'
      },
      genre: {
          position:'absolute',
          top:' 5%',
          right:'5%',
          fontWeight:'600'
      },
      blog:{
          marginTop:'10px'
      },
      delete:{
        width:'30px',
        height:'30px',
        position:'absolute',
        bottom:'5%',
        left:'2%',
        marginTop:'45px',
        '&:hover' : {
          color:'black',
         
       
      }
        
      },
      back:{
        width:'30px',
        height:'30px',
        position:'absolute',
        bottom:'5%',
        right:'2%',
        marginTop:'45px',
        '&:hover' : {
          color:'black',
         
       
      }
      }
 
}));