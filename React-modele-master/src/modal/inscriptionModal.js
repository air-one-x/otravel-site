import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
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

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
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

export default function SpringModal() {
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
            <button type="button" onClick={handleOpen}>
                react-spring
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
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="text" id="name" label="nom" />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="password" label="prénom" />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="password" id="paswword" label="pseudo" />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="email" label="adresse email" />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="password" label="Mot de passe" />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="password" label="Mot de passe" />
                                    </Grid>
                                </Grid>
                                <div container spacing={1} className={classes.root}>
                                <Button variant="contained">annuler</Button>
                                <Button variant="contained" color="primary">valider</Button>
                                </div>
                            </div>

                        </div>



                    </div>
                </Fade>
            </Modal>
        </div>
    );
}