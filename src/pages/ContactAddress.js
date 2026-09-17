import React from "react";

const ContactAddress = () => {
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
                  // Welcome to Ruturaj Enterprises
                </h6>

                <h1 className="section-title white-color">
                  Contact Us
                </h1>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>


    <section className="ltn__contact-address-area mb-90">
      <div className="container">
        <div className="row">

        

          {/* Phone */}
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src="/img/icons/11.png"
                  alt="Phone Icon"
                />
              </div>

              <h3>Phone Number</h3>

              <p>
                +91 9763381382
                <br />
              +91 9011051114
              <br/>
              +91 9822697554
              </p>
            </div>
          </div>

  {/* Email */}
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src="/img/icons/10.png"
                  alt="Email Icon"
                />
              </div>

              <h3>Email Address</h3>

              <p>
                <br />
               booking@ruturajenterprises.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src="/img/icons/12.png"
                  alt="Address Icon"
                />
              </div>

              <h3>Office Address</h3>

              <p>
                Ruturaj Enterprises
                <br />
                Nandini Takle Nagar, Pune - Solapur Road Manjri Bk Hadapsar, Pune, Maharashtra 412307
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.0932591951187!2d73.9581623!3d18.498549099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c148b7268589%3A0xb12f31c0ca1f85eb!2sRuturaj%20Enterprises!5e1!3m2!1sen!2sin!4v1787590851570!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </>
  );
};

export default ContactAddress;
