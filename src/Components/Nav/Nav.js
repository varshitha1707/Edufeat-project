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
import './Nav.css'

const drawerWidth = 240;
const NavData =[
  {
    id:1,
    name:'About us',
    url:'/aboutus',
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

          <IconButton id="logo" size="small" edge="start" color="inherit" aria-label="logo">
              <img src={img} alt="logo" id="logo-img"/>
          </IconButton>

          <div id="Nav-Links" style={{position:"absolute", right:"20px"}}>
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
          <h9>+</h9>
          </IconButton>

        </Toolbar>
      </AppBar>
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
            ('-'): ('-')}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {NavData.map(link => (
            <ListItem button key={link.id}>
              <a href={link.url}>
                <ListItemText primary={link.name} />
              </a>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
