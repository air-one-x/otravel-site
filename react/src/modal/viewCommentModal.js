import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DialogTitleComponent from '../components/Generique/dialogTitleComponent';
const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        marginBottom: '1rem',
      },
      avatar: {
        backgroundColor: red[500],
      },
}));



const ViewCommentPlace = ({ onClose, open, commentaryInfos }) => {

    console.log(commentaryInfos);
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
    <DialogTitleComponent onClose={onClose} id="simple-dialog-title">Commentaires de ce lieu</DialogTitleComponent>
      <DialogContent>
{ commentaryInfos.map((comment) => (


        <Card className={classes.root} key={comment.id}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                R
            </Avatar>
            }
        
            title={comment.user.username}
            subheader={comment.created_at}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {comment.text}
            </Typography>
        </CardContent>
        </Card>
        ))}
      </DialogContent>
  </Dialog>
  );
}

export default ViewCommentPlace;