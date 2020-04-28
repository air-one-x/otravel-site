import React from 'react';
import FormLoginModal from '../../containers/Login';

const ConnexionButtonComponent = ({ isLogged, logout }) => {
    console.log('propsbuttoncoisLoggedUser', isLogged,)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log('closemodallogin');
        setOpen(false);
    };
    
    return (
        <div className="nav-link"> 
            {
            isLogged&&
                <div>
                <button className="dropdown-item nav-link" type="button" onClick={() => {logout(), handleClose()}} style={{padding:'0'}}>
                    déconnexion
                </button>
                </div>
            }
            { !isLogged &&<div>
            <button className="dropdown-item nav-link" type="button" onClick={handleOpen}>
                connexion
            </button>
            <FormLoginModal 
                open={open}
                setOpen={setOpen}
                onClose={handleClose}
            />
            </div>}

        </div>
    )
}

export default ConnexionButtonComponent;