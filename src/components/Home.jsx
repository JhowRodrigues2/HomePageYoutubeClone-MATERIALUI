import React from 'react'
import { makeStyles } from '@mui/styles';
import { AppBar,Box,Toolbar,IconButton , Typography, Button} from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme)=>({
   root:{
    height:'100vh',
  }, 
  appBar:{
    boxShadow:'none',
  },
  grow:{
    flexGrow:1
  }
}));


const  Home = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           {<MenuIcon />}
          </IconButton>
          <div className={classes.grow}/>
          <Button variant='outlined' color="secondary">Fazer Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Home
