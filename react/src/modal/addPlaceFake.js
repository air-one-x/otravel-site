import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef((props, ref) => {
  const {
    in: open, children, onEnter, onExited, ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const LoginModal = ({
  userEmail, userPassword, changeEmail, changePassword, login, isLoggedUser , loginError
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  console.log('!!!!!!!!!!!!!!!!!!!!', isLoggedUser);
  const checkLogged = () => {
    if(isLoggedUser  === true ){  
      handleClose();
    } 
  };



  return (
   
    <div className="nav-link"> 
    
      

    <Button 
    variant="outlined" 
    color="primary" 
    onClick={handleOpen} 
    style={{color: '#3f51b5'}}>
          Ajouter un lieu
      </Button>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>


            <form>
              <p>Veuillez vous connecter pour ajouter un lieu </p>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end" >
                  <Grid container item>
                    <AccountCircle />
                  </Grid>
                  <Grid container item>
                    <TextField type="email" id="email" label="Email" value={userEmail} onChange={(event) => changeEmail(event.target.value)} />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid container item>
                    <LockIcon />
                  </Grid>
                  <Grid container item>
                    <TextField type="password" id="paswword" label="Mot de passe" value={userPassword} onChange={(event) => changePassword(event.target.value)} />
                  </Grid>
                </Grid>
                <p>{loginError === '' ? '' : loginError}</p>
                <div className="m-3 justify-content-center">
                  <Button className="mr-3" variant="contained" onClick={handleClose}>annuler</Button>
                  <Button variant="contained" color="primary" onClick={()=> {login(); checkLogged()}}>valider</Button>
                </div>
              </div>
            </form>


          </div>
        </Fade>
      </Modal>
      </div>
    
  );

};

LoginModal.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default LoginModal;
