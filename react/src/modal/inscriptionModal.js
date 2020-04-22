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
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

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
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
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

const SpringModal = ({inputChangeEmailInscription,insertNewUser, inputChangePasswordInscription, inputChangePseudoInscription, newUserEmail, newUserPseudo, newUserPassword, pictureAvatarInscription,fileNameAvatarInscription, newUserAvatar}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    console.log('event',event);
    let files = event.files
    console.log('file', files)
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    fileNameAvatarInscription(files[0].name)

    reader.onload=(e)=>{
      console.log('e',e.target)
      pictureAvatarInscription(e.target.result)
    }
  }
console.log('yyyyyyyyyyyyyyyyyyoooooooo', newUserAvatar);
  return (
    <div className="nav-link">
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
                    <TextField type="text" id="username" label="username" value={newUserPseudo} onChange={(event) => inputChangePseudoInscription(event.target.value)} />
                  </Grid>
                </Grid>


                <Grid container spacing={1} alignItems="flex-end">
                  <Grid container item>
                    <input type="file" label="file" onChange={(event) => {
                      handleChange(event.target);
                      
                      var input = event.target.files[0];
                      var reader = new FileReader(); 
                      reader.onload = function(){
                        if(newUserAvatar === "") {
                          console.log(reader.result);
                          const photo = document.createElement("img");
                          photo.src = reader.result;
                          photo.style.height = "200px";
                          photo.style.width ="200px";
                          photo.id="photoInscription"
                          const avatar = document.getElementById('avatar');
                          avatar.append(photo);
                          localStorage.setItem('test',input);
                        } else {
                          const photo = document.getElementById('photoInscription');
                          photo.src=reader.result;
                        }
                        
                     };
                      
                      
                      reader.readAsDataURL(input);
                      }}/>
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
                <div id="avatar"> </div>
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
