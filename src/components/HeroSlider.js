import React from 'react';
import Carousel from './Carousel';
import AboutUs from '../pages/AboutUs';
import CounterSection from '../pages/CounterItem';
import CallToAction from '../pages/CallToAction';
import FeatureArea from '../pages/FeatureArea';
import Testimonial from '../pages/Testimonial';
import CarDeals from '../pages/CarCard ';



const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              <Carousel/>
              <AboutUs/>
              <CounterSection/>
              <CallToAction/>
              <FeatureArea/>
              <CarDeals/>
              <Testimonial/>
    </div>
  );
};

export default HeroSection;
