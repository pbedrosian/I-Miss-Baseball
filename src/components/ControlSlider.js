import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Grid from '@material-ui/core/Grid';


const ControlSlider = (props) => {

    const [value, setValue] = React.useState(1);
    const [status, setStatus] = React.useState(0)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleClick = (event, newStatus ) => {
      setStatus(newStatus)
    }

    const playPause = () => {
      return 'play'
    }

    return (
        <div>
          <Typography id="non-linear-slider" gutterBottom>
            {props.title}
          </Typography>
        <Grid container spacing={2}>
        <Grid item>
          {playPause()}
        </Grid>
        <Grid item xs={3}>
        <Slider
              aria-label="custom thumb label"
              onChange={handleChange}
              defaultValue={20}
            /> 
        </Grid>
        </Grid>
        </div>
    );
};

export default ControlSlider;