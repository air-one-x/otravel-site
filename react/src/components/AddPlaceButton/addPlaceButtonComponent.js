import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddPlace from '../../containers/AddPlace';
import FormLoginModal from '../../containers/Login';

const AddPlaceButtonComponent = ({isLogged, sendAdress, resetClickLocation}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        if(isLogged){
          console.log('sendadress')
          sendAdress()
        }
      };
    
    const handleClose = () => {
    setOpen(false);
    resetClickLocation();
    };

    return (
        <div>
          <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Ajouter un lieu
            </Button>
          </div>
          { isLogged ? 
            <AddPlace 
              open={open}
              onClose={handleClose}
            /> :
            <FormLoginModal
              open={open}
              setOpen={setOpen}
              onClose={handleClose}
          />}
        </div>
    )
}

export default AddPlaceButtonComponent;