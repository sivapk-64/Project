import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { Button,Grid } from '@mui/material';
import '../Datafull/Imageslider.css'
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
   
    <section className='slider'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      <Button sx={{color:"red",backgroundColor:"blueviolet"}} onClick={prevSlide}  ></Button>
      <Button onClick={nextSlide} ></Button>
      <Grid container direction={"column"} sx={{marginTop:"75px",paddingLeft:'30px',paddingTop:'39px',color:'',height:'550px'}}>
        <Grid item>
      <p><b>"Discover Excellence in   </b></p>
      </Grid>
        <Grid item>
      <p><b>Every Appliance </b></p>
      </Grid>
        <Grid item>
      <p><b>- Where Functionality Meets</b></p>
      </Grid>
        <Grid item>
      <p><b>Elegance, Every Day."</b></p>
      </Grid>
      </Grid>
      {SliderData.map((slide, index) => {
        return (
          <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel imag' className='image' />
              )}
          </div>
        );
      })}
    </section>
    
  );
};

export default ImageSlider;