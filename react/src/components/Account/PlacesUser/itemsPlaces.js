import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { isEmpty } from 'lodash';
import axios from 'axios';








const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({place, allPlaces, user}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const newDate = new Date(place.created_at);
  const day = newDate.getDay();
  const day1 = day+1;
  const month = newDate.getMonth();
  const month1 = month+1;
  const year = newDate.getFullYear();

  const placesInfos = allPlaces.find((places) => places.id == place.id );

  console.log(placesInfos);

  return (
    <Card className={classes.root}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={place.name}
        subheader={`${day1}/${month1}/${year}`}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {place.street}{place.zipcode}{place.city}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div>
              {
                placesInfos.places_picture != null ? <img style={{width:'100%'}} src={`https://apiotravel.ovh/${placesInfos.places_picture.name}`} alt="image du lieu" /> : <div />
              }
               <DialogContent style={{width:'100%'}}>
                  { placesInfos.commentary.map((comment) => (


                          <Card className={classes.root} key={comment.id} style={{width:'100%'}}>
                          <CardHeader
                              avatar={
                              <Avatar aria-label="recipe" style={{width:'2rem', height:'2rem', borderRadius: '50%'}}>
                              { isEmpty(comment.user.avatar)?
                                  <img style={{ width:'100%' }} src={`https://apiotravel.ovh/uploads/images/account.png`}/>:
                                  <img style={{ width:'100%' }} src={`https://apiotravel.ovh/${user.avatar}`}/>
                              
                              }
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
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

