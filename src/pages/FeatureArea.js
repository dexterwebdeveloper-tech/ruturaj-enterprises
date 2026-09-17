import React from "react";

const FeatureArea = () => {
  return (
    <div className="ltn__feature-area before-bg-bottom-2--- mb--30--- plr--5 mb-10">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
              <div className="row">

                {/* Feature 1 */}
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="/images/icons/svg/4-track.svg"
                        alt="Tailored Travel Packages"
                      />
                    </div>

                    <div className="ltn__feature-info">
                      <h4>Tailored Travel Packages</h4>
                      <p>
                        Discover pre-packaged travel itineraries to suit
                        different interests.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="/images/icons/svg/5-madel.svg"
                        alt="Reliability"
                      />
                    </div>

                    <div className="ltn__feature-info">
                      <h4>Reliability</h4>
                      <p>
                        We take pride in our punctuality.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="/images/icons/svg/6-return.svg"
                        alt="Easy Booking"
                      />
                    </div>

                    <div className="ltn__feature-info">
                      <h4>Easy Booking</h4>
                      <p>
                        You can book online or by phone, and we will be at
                        your doorstep promptly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="/images/icons/svg/7-support.svg"
                        alt="24/7 Availability"
                      />
                    </div>

                    <div className="ltn__feature-info">
                      <h4>24/7 Availability</h4>
                      <p>
                        We are available round the clock to serve you.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;