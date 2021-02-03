import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import globalStyles from '../../Assets/global-styles/bootstrap.min.module.css'
import air from '../../Assets/workAir.jpg'
import amazon from '../../Assets/workAmazon.jpg'
import wander from '../../Assets/workWander.jpg'
import hoopla from '../../Assets/workHoopla.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 265,
    margin:'0 10px'
  },
  media: {
    height: 200,
    "&:hover":{
      transform:"scale(1.01)"
    }
  },
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <div id='works' className={globalStyles.container}>
      <div className={globalStyles.row}>
      <Card className={classes.root}>
        <CardMedia component="img" className={classes.media}src= {air}title="Flight"/>
    </Card>
    <Card className={classes.root}>
        <CardMedia component="img" className={classes.media}src= {amazon}title="Amazon"/>
            </Card>
    <Card className={classes.root}>
        <CardMedia component="img"className={classes.media} src= {wander} title="wander"/>
    </Card>
    <Card className={classes.root}>
        <CardMedia component="img" className={classes.media}src= {hoopla} title="hoopla"/>
    </Card>
      </div>
    </div>
  );
}
