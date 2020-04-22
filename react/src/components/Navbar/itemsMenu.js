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
import Account from './account';


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

 const itemsMenu = (props,{isLogged}) => {
console.log('props.itemmenu', props);
console.log('TESSSSSSST',props.isLogged);
    return(
        <StyledMenu
        id="customized-menu"
        anchorEl={props.openMenu}
        keepMounted
        open={Boolean(props.openMenu)}
        onClose={props.closeMenu}
      >
        {
          
            props.isLogged&&
            <StyledMenuItem onClick={props.closeMenu}>
              <ListItemIcon>
                <InboxIcon fontSize="small" />
              </ListItemIcon>
              <Account />
            </StyledMenuItem>
          }
        
        
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <FormLoginModal /> 
        </StyledMenuItem>

        {
          !props.isLogged&&<StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <InscriptionModal />
        </StyledMenuItem>
        }

        

        <Link to="/conditions-utilisations">
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