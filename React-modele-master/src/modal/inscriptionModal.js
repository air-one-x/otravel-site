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
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

const SpringModal = ({inputChangeEmailInscription,insertNewUser, inputChangePasswordInscription, inputChangePseudoInscription, newUserEmail, newUserPseudo, newUserPassword}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="dropdown-item nav-link" type="button" onClick={handleOpen}>
                inscription
      </button>
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


            <div>

              <div className={classes.margin}>
                
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid container item>
                    <AccountCircle />
                  </Grid>
                  <Grid container item>
                    <TextField type="text" id="paswword" label="pseudo" value={newUserPseudo} onChange={(event) => inputChangePseudoInscription(event.target.value)} />
                  </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                  <Grid container item>
                    <AlternateEmailIcon />
                  </Grid>
                  <Grid container item>
                    <TextField type="file" label="avatar" />
                  </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                  <Grid container item>
                    <AlternateEmailIcon />
                  </Grid>
                  <Grid container item>
                    <TextField type="email" label="adresse email" value={newUserEmail} onChange={(event) => inputChangeEmailInscription(event.target.value)}/>
                  </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                  <Grid container item>
                    <LockIcon />
                  </Grid>
                  <Grid container item>
                    <TextField type="password" label="Mot de passe" value={newUserPassword} onChange={(event) => inputChangePasswordInscription(event.target.value)} />
                  </Grid>
                </Grid>

              </div>
              <div className="CheckCond" style={{marginTop: '1rem', marginLeft: '0.5rem'}}>
                <input type="checkbox" name="checkConditions" id="checkConditions" style={{width: '15px', height: '15px', marginRight: '0.3rem'}}/>
                <label htmlFor="checkConditions" style={{fontSize: '0.7em'}}> En cochant la case, j'accepte les <a href="#" style={{color: '#303f9f'}}>conditions d'utilisations </a></label>
              </div>
              <div className="m-3 justify-content-center">
                <Button className="mr-3" variant="contained">annuler</Button>
                <Button onClick={insertNewUser} variant="contained" color="primary">valider</Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

SpringModal.propTypes = {
  inputChangeEmailInscription: PropTypes.func.isRequired,
  insertNewUser: PropTypes.func.isRequired,
  inputChangePasswordInscription: PropTypes.func.isRequired, 
  inputChangePseudoInscription: PropTypes.func.isRequired, 
  newUserEmail: PropTypes.string.isRequired,
  newUserPseudo: PropTypes.string.isRequired,
  newUserPassword: PropTypes.string.isRequired,
}

export default SpringModal;
