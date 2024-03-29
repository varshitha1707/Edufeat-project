import React from 'react'
import { AppBar, Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import img from '../../Assets/edufeat-logo.png';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Nav.css'

const drawerWidth = 240;
// NavBar data
const NavData =[
  {
    id:1,
    name:'About us',
    url:'/about',
  },
  {
    id:2,
    name:'Departments',
    url:'/departments',
  },
  {
    id:3,
    name:'Support',
    url:'/support',
  },
  {
    id:4,
    name:'Testimonials',
    url:'/testimonials',
  },
  {
    id:5,
    name:'Sign Up',
    url:'/signup',
  },
  {
    id:6,
    name:'Log In',
    url:'/login',
  }
]

export default function Nav() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // functions for the drawer open and close
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
        
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id="Nav" position="fixed" open={open}>
        <Toolbar>
        {/* NavBar logo */}
          <IconButton id="logo" size="small" edge="start" color="inherit" aria-label="logo">
              <img src={img} alt="logo" id="logo-img"/>
          </IconButton>

          <div id="Nav-Links" style={{position:"absolute", right:"20px"}}>
            {/* mapping the navBar data */}
            {NavData.map(link => (
              <a href={link.url}>
                <Button key={link.id}>
                  {link.name}
                </Button>
              </a>
            ))}
          </div>
          <IconButton id="OpenDrawer" size="large" edge="start" color="primary" aria-label="open drawer" edge="end" onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' })}}>
          <MenuOutlinedIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      {/* Side Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? 
            (
            <CloseOutlinedIcon/>
            ): (
              <div style={{position:"absolute", right:"-200px"}}>
                <MenuOutlinedIcon/>
              </div>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Drawer data mapped */}
          {NavData.map(link => (
            <ListItem button key={link.id}>
              <a href={link.url}>
                <ListItemText primary={link.name} />
              </a>
              <div style={{position:"absolute", right:0}}>
                <ChevronRightOutlinedIcon />
              </div>
            </ListItem>
          ))}
          <ListItem>
            <a href=''>
              <button id="Sign-in-btn">
                <ListItemText primary="Sign Up" />
              </button>
            </a>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
