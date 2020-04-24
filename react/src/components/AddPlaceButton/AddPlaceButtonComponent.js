import React from 'react';
import Button from '@material-ui/core/Button';
import AddPlace from '../../containers/AddPlace';

const AddPlaceButtonComponent = () => {
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

// const checkIsLogged = () => {
//   if (isLogged === true) {
//     handleClickOpen();
//   } else {
//     console.log('sortir la modal de connexion');  
//   }
// }
    return (
        <div>
          <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Ajouter un lieu
          </Button>
          </div>
          <AddPlace 
            open={open}
            onClose={handleClose}
          />
        </div>
        )
}

export default AddPlaceButtonComponent;