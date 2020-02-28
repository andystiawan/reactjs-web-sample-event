import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };




  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      style={{backgroundColor:'black',color:'white', paddingTop:'10%', height:'100%'}}
    >
    <List style={{marginLeft:'10%'}}>
          <ListItem button component={Link} to="/profile">
                    <img
                      alt='account icon'
                      src={require('./../../assets/img/icon-account.png')}
                      width="32"
                      height="32"

                     />
                     <span style={{marginLeft:'5%'}}>{localStorage.getItem('username')}</span>
          </ListItem>
          <Divider />
          <br/>
          <br/>
          <ListItem button component={Link} to="/tickets">
            <ListItemText primary="Tickets" />
          </ListItem>
          <ListItem button component={Link} to="/liked">
            <ListItemText primary="Liked" />
          </ListItem>
          <ListItem button component={Link} to="/following">
            <ListItemText primary="Following" />
          </ListItem>
          <ListItem button component={Link} to="/notification">
            <ListItemText primary="Notification" />
          </ListItem>
          <ListItem button component={Link} to="/account">
            <ListItemText primary="Account Setting" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Log Out" />
          </ListItem>

    </List>
    </div>
  );




  return (
      <div>
      <Button onClick={toggleDrawer('right', true)} style={{padding: '0px', margin: '0px', backgroundColor: 'transparent', border: 'none'}}>
        <img
          alt='account icon'
          src={require('./../../assets/img/icon-account.png')}
          width="32"
          height="32"

         />
      </Button>
      <Drawer style={{opacity:'0.9'}} anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
      </div>
    );
  }
