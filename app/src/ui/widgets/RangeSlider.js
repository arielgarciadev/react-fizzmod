import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
  console.log(this)

}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 4000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Precios
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max="5000"
        step="100"
      />
    </div>
  );
}