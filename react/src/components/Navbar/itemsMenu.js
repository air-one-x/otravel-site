import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import FormLoginModal from '../../containers/Login';
import InscriptionModal from '../../containers/Inscription';
import { Link } from 'react-router-dom';

 const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

   const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

 const itemsMenu = (props) => {
console.log('props.itemmenu', props);
    return(
        <StyledMenu
        id="customized-menu"
        anchorEl={props.openMenu}
        keepMounted
        open={Boolean(props.openMenu)}
        onClose={props.closeMenu}
      >
        
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <FormLoginModal /> 
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <InscriptionModal />
        </StyledMenuItem>

        <Link to="/conditions">
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Conditions" />
        </StyledMenuItem>
        </Link>

        <Link to="/a-propos">
       <StyledMenuItem>
        <ListItemIcon>
            <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="A propos" />
        </StyledMenuItem>
        </Link>

        <Link to="/contact">
        <StyledMenuItem>
        <ListItemIcon>
            <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Contact" />
        </StyledMenuItem>
        </Link>

        </StyledMenu>
     
    )
}

 export default itemsMenu; 