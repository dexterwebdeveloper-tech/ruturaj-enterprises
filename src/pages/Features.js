import React from "react";



const features = [
  {
    icon: "fa-solid fa-car",
    title: "Clean and Comfortable Vehicles",
    description:
      "Our fleet is well-maintained and sanitized, offering a comfortable and hygienic environment.",
  },
  {
    icon: "fa-solid fa-indian-rupee-sign",
    title: "Transparent Pricing",
    description:
      "We believe in fair and competitive pricing, with no hidden fees or surprises.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Easy Booking",
    description:
      "Our user-friendly booking system allows you to reserve your ride effortlessly, whether online or over the phone.",
  },
];
const Features = () => {
  return (
    <section className="ltn__feature-area section-bg-1 py-3">
      <div className="container">

        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">

              <h6 className="section-subtitle ltn__secondary-color">
                // features //
              </h6>

              <h1 className="section-title">
                Why Choose Us<span>.</span>
              </h1>

            </div>
          </div>
        </div>

        {/* Features */}
        <div className="row justify-content-center">

          {features.map((feature, index) => (
            <div
              className="col-lg-4 col-sm-6 col-12"
              key={index}
            >
              <div className="ltn__feature-item ltn__feature-item-7">

                <div className="ltn__feature-icon-title">

                  <div className="ltn__feature-icon">
                    <span>
                      <i className={feature.icon}></i>
                    </span>
                  </div>

                  <h3>
                    <a href="/service-details" className="text-dark">
                      {feature.title}
                    </a>
                  </h3>

                </div>

                <div className="ltn__feature-info">
                  <p>{feature.description}</p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;
