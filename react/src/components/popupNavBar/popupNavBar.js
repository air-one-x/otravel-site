import React, {useState} from 'react';
import ButtonIcon from '../Generique/ButtonIcon';
import DirectionsCarRoundedIcon from '@material-ui/icons/DirectionsCarRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddCommentsModal from '../../containers/AddComments';
import ViewComments from '../../modal/viewCommentModal';

const PopupNavBar = ({ placeInfos }) => {

    const [openAddComments, setOpenAddComments] = useState(false);
    const [openComments, setOpenComments] = useState(false);

    const handleOpenAddComments = () => {
        console.log('open modal');
        setOpenAddComments(true);
    }

    const handleCloseAddComments = () => {
        console.log('close modale')
        setOpenAddComments(false);
      };

    const handleOpenComments = () => {
        console.log('open modal');
        setOpenComments(true);
    }

    const handleCloseComments = () => {
        console.log('close modale')
        setOpenComments(false);
      };

    return(
        <div>
            <ButtonIcon 
                variant="contained" 
                size="small" 
                color="primary" 
                title="Commentaire" 
                startIcon={<VisibilityRoundedIcon />}
                onClick={handleOpenComments}
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
             <ViewComments open={openComments} onClose={handleCloseComments} commentaryInfos={placeInfos.commentary} />
        </div>
    );
}

export default PopupNavBar;
