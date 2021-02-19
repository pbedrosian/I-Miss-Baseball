import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
});

export default function ContinuousSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(60);
  const [state, setState] = React.useState({
    toggle: false
  });

  const handleChange = (event) => {
    setState({ ...state, ['toggle']: !state.toggle });
  };

  const handleScroll = (event, newValue) => {
    setValue(newValue);
  };

  const buttonDisplay = () => {
    if (state.toggle === false) return <PlayArrowIcon onClick={handleChange} name="toggle" fontSize='small' color='action'/>;
    else return <PauseIcon onClick={handleChange} name="toggle" fontSize='small' color='action' />
  }


  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        {props.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          {buttonDisplay()}
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleScroll} aria-labelledby="continuous-slider" name='value' />
        </Grid>
      </Grid>
    </div>
  );
}
