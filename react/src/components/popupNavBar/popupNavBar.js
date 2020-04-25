import React, {useState} from 'react';
import ButtonIcon from '../Generique/ButtonIcon';
import DirectionsCarRoundedIcon from '@material-ui/icons/DirectionsCarRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddCommentsModal from '../../containers/AddComments';


const PopupNavBar = () => {

    const [openAddComments, setOpenAddComments] = useState(false);

    const handleOpenAddComments = () => {
        console.log('open modal');
        setOpenAddComments(true);
    }

    const handleCloseAddComments = () => {
        console.log('close modale')
        setOpenAddComments(false);
      };

    return(
        <div>
            <ButtonIcon 
                variant="contained" 
                size="small" 
                color="primary" 
                title="Commentaire" 
                startIcon={<VisibilityRoundedIcon />}
             />
            <ButtonIcon 
                variant="contained" 
                size="small" 
                color="primary" 
                title="Commentaire" 
                startIcon={<AddCircleRoundedIcon />}
                onClick={handleOpenAddComments}
             />
            <ButtonIcon 
                variant="contained" 
                size="small" 
                color="primary" 
                title="Itineraire" 
                startIcon={<DirectionsCarRoundedIcon />}
             />

             <AddCommentsModal open={openAddComments} onClose={handleCloseAddComments} />
        </div>
    );
}

export default PopupNavBar;
