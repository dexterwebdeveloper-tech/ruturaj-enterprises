const AboutUs = () => {
  return (
    <div className="ltn__about-us-area pt-115 pb-95">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-7 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  // About Us
                </h6>

                <h1 className="section-title">
                  Your Trusted Transportation Partner<span>.</span>
                </h1>

                <p>
                  Welcome to Ruturaj Enterprises, your trusted partner for all your transportation needs.
                </p>
              </div>

              <div className="about-us-info-wrap-inner about-us-info-devide">
                <p>
                 We understand the importance of safe, reliable, and convenient transportation, and we are here to make your journey enjoyable and stress-free. Whether you need a ride to the airport, a city tour, or daily commuting, Ruturaj Enterprises is here to serve you.Our journey began with a commitment to excellence and a passion for helping people reach their destinations comfortably and on time.


                </p>

                <div className="list-item-with-icon text-dark">
                  <ul className="">
                    <li>
                      <a href="/contact" className="text-dark">Top Rated Bus Service</a>
                    </li>
                    <li>
                      <a href="/team" className="text-dark">Corporate Travel Management</a>
                    </li>
                    <li>
                      <a href="/service-details" className="text-dark">Outstation Cabs & Bus Service</a>
                    </li>
                    <li>
                      <a href="/shop" className="text-dark">Special Occasions</a>
                    </li>
                      <li>
                      <a href="/shop" className="text-dark">Point-to-Point Rides</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Get a Quote */}
          <div className="col-lg-5 align-self-center">
            <div className="get-a-quote-wrap">

             <img src="/images/4.webp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
