import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import { AppBar,Box,Toolbar,IconButton, Button} from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu'
import { AccountCircle,VideoCall,Apps, MoreVert } from '@material-ui/icons';
import LogoPreto from '../assets/logopreto.png'
import { GlobalContext } from '../context';


const useStyles = makeStyles((theme)=>({
    root:{
     height:'100vh',
   }, 
   icons:{
     paddingRight: theme.spacing(5),
   },menuIcon:{
     paddingRight:theme.spacing(5),
     paddingLeft:theme.spacing(4)
   },
   grow:{
     flexGrow:1
   },logo:{
     height:25,
     cursor:'pointer'
   }
 }));
 
const Header = () => {
const {handleDrawerToggle} = useContext(GlobalContext)
    const classes = useStyles()

  return (
    <div className={classes.root}>
    
      <AppBar color='inherit' elevation={0} sx={{zIndex:1201}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
           <MenuIcon />
          </IconButton>
          <img src={LogoPreto} alt="logo do YouTube"  className={classes.logo}/>

          <div className={classes.grow}/>
          <IconButton
            color="inherit"
            className={classes.menuIcon}
          >
           <VideoCall />
          </IconButton>
          <IconButton
            color="inherit"
            className={classes.icons}
          >
           <Apps />
          </IconButton>
          <IconButton
            color="inherit"
            className={classes.icons}
          >
           <MoreVert />
          </IconButton>
      
          <Button variant='outlined' color="secondary" startIcon={<AccountCircle/>}>Fazer Login</Button>
        </Toolbar>
      </AppBar>
  
    </div>
  )
}

export default Header
