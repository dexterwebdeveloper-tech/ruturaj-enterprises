import React from "react";
import Features from "../pages/Features";
import CallToAction from "./CallToAction";
import Skills from "../pages/Skills";
import Testimonials from "../pages/Testimonialsabout";

const AboutUs = () => {
  return (

<>


      <div
      className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
      style={{ backgroundImage: "url('/img/bg/9.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  // Welcome to our company
                </h6>

                <h1 className="section-title white-color">
                  About Us
                </h1>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="ltn__about-us-area pt-120-- pb-120">
      <div className="container">
        <div className="row">

          {/* Left Image */}
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">

              <img
                src="/images/10.webp"
                alt="About Us"
              />

              {/* Experience Box */}
              <div className="about-us-img-info about-us-img-info-2">
                <div className="about-us-img-info-inner">
                  <h1>
                    19<span>+</span>
                  </h1>

                  <h6>Years Experience</h6>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">

              {/* Heading */}
              <div className="section-title-area ltn__section-title-2">

                <h6 className="section-subtitle ltn__secondary-color">
                  // About Us
                </h6>

                <h1 className="section-title">
                  Our Commitment to Quality Transportation Services
                 
                  <span>.</span>
                </h1>

                <p>
                  At Ruturaj Enterprises, we believe that journeys matter, and how you get there is just as important as the destination itself. Our commitment to providing safe, reliable, and convenient transportation services has been the driving force behind our operations.


                </p>

              </div>

              {/* Description */}
              <p>
                Join us on your next journey, and experience the Ruturaj Enterprises difference. We are dedicated to making your travel as enjoyable as your destination. Your trust in us fuels our commitment to excellence.


              </p>

              {/* Button */}
              {/* <div className="btn-wrapper">
                <a
                  href="/service"
                  className="theme-btn-3 btn btn-effect-4"
                >
                  OUR SERVICES
                </a>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
<Features/>
<CallToAction/>
<Skills/>
<Testimonials/>
</>
  );
};

export default AboutUs;
