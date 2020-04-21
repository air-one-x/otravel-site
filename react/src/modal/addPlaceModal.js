import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddPlaceModal = ({cityPlace, zipCodePlace, streetPlace, categoryPlace, namePlace , descriptionPlace, addNamePlace, addCategoryPlace, addDescriptionPlace, addZipCodePlace, addCityPlace, addStreetPlace, lat, long, addPlace}) => {

  const classes = useStyles(); 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    console.log('event SELECT !!', event);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Ajouter un lieu
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
  
          </Toolbar>
        </AppBar>
        
        <List>
        <Grid container item>
        <TextField id="street" label="street" type="text" value={streetPlace} onChange={(event) => addStreetPlace(event.target.value)} />
        </Grid>
        <Grid container item>
        <TextField id="zipcode" label="zipcode" type="text" value={zipCodePlace} onChange={(event) => addZipCodePlace(event.target.value)}  />
        </Grid>
        <Grid container item>
        <TextField id="city" label="city" type="text" value={cityPlace} onChange={(event) => addCityPlace(event.target.value)} />
        </Grid>
        <Grid container item>
        <TextField id="name" label="name" type="text" value={namePlace} onChange={(event) => addNamePlace(event.target.value)} />
        </Grid>
        <TextField id="outlined-basic" label="Latitude" variant="outlined" value={lat} />
        <TextField id="outlined-basic" label="Longitude" variant="outlined" value={long} />

        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryPlace}
          onChange={(event) => addCategoryPlace(event.target.value)}
        >
        <MenuItem value="1" >Douche</MenuItem>
      </Select>
    </FormControl>
          <Grid container item>
            <TextField
            id="outlined-multiline-static"
            label="description"
            multiline
            rows={4}
            defaultValue="description"
            variant="outlined"
            value={descriptionPlace}
            onChange={(event) => addDescriptionPlace(event.target.value)}
          />
          </Grid>
        </List>
        <Button autoFocus color="inherit" onClick={addPlace;handleClose}>
        save
      </Button>
      </Dialog>
    </div>
 

 
);
}
export default AddPlaceModal;