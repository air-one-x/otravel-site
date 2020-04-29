import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddPlace from '../../containers/AddPlace';
import FormLoginModal from '../../containers/Login';

const AddPlaceButtonComponent = ({isLogged, sendAdress, resetClickLocation}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        
          console.log('sendadress')
          sendAdress()
        
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
          { !isLogged ? 
            <FormLoginModal
              open={open}
              sendAdress={sendAdress}
              setOpen={setOpen}
              onClose={handleClose}
            />
             :
             <AddPlace 
              open={open}
              onClose={handleClose}
              />
          }
        </div>
    )
}

export default AddPlaceButtonComponent;