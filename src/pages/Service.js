// src/components/Service.js
import React from "react";

const vehicles = [
  {
    id: 1,
    name: "Tempo Traveller On Rent",
    desc: "Book a comfortable Tempo Traveller on rent in Pune for family tours, corporate trips, weddings, pilgrimages, sightseeing, and outstation group travel.",
    image: "/images/keyword/31.jpg",
    link: "/Tempo-Traveller-On-Rent",
  },
  {
    id: 2,
    name: "Sadeteenshaktipeeth Tour from Pune by Bus",
    desc: "Plan a Sadeteenshaktipeeth tour from Pune by bus for a comfortable pilgrimage journey with family, devotees, and groups to Maharashtra's sacred Shaktipeeth temples.",
    image: "/images/keyword/42.jpg",
    link: "/Sadeteenshaktipeeth-tour-from-pune-by-bus",
  },
  {
    id: 3,
    name: "Pune to Indore Cab",
    desc: "Book a Pune to Indore cab for comfortable one-way and round-trip travel with professional drivers, suitable for families, business trips, and outstation journeys.",
    image: "/images/keyword/65.jpg",
    link: "/Pune-to-Indore-Cab",
  },
  {
    id: 4,
    name: "Eicher Bus on Rent in Pune",
    desc: "Hire an Eicher bus on rent in Pune for corporate transportation, weddings, family tours, school trips, pilgrimages, events, and comfortable group travel.",
    image: "/images/keyword/48.jpg",
    link: "/Eicher-Bus-on-Rent-in-Pune",
  },
  {
    id: 5,
    name: "Pune to Konkan Darshan Cab",
    desc: "Book a Pune to Konkan Darshan cab for family holidays, sightseeing, temple visits, beach trips, and comfortable tours across popular Konkan destinations.",
    image: "/images/keyword/51.jpg",
    link: "/Pune-to-Konkan-Darshan-Cab",
  },
  {
    id: 6,
    name: "Pune to Konkan Tempo Traveller",
    desc: "Hire a Pune to Konkan Tempo Traveller for family tours, group holidays, beach trips, sightseeing, pilgrimages, and comfortable multi-day journeys.",
    image: "/images/keyword/6.jpg",
    link: "/Pune-to-Konkan-Tempo-Traveller",
  },
  {
    id: 7,
    name: "Pune Bus Hire Rental Service",
    desc: "Book a reliable bus hire rental service in Pune for corporate travel, weddings, family tours, school trips, events, pilgrimages, and outstation group journeys.",
    image: "/images/keyword/21.jpg",
    link: "/Pune-Bus-Hire-Rental-Service",
  },
  {
    id: 8,
    name: "Pune to Bangalore Cab",
    desc: "Book a Pune to Bangalore cab for comfortable long-distance travel, business trips, family journeys, and convenient one-way or round-trip transportation.",
    image: "/images/keyword/68.jpg",
    link: "/Pune-to-Bangalore-Cab",
  },
  {
    id: 9,
    name: "20 Seater Bus on Rent in Pune",
    desc: "Hire a 20 seater bus on rent in Pune for family tours, corporate outings, weddings, pilgrimages, events, sightseeing, and comfortable small-group travel.",
    image: "/images/keyword/11.jpg",
    link: "/20-Seater-Bus-on-Rent-in-Pune",
  },
];



const Service = () => {
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
                  <h1 className="section-title white-color">
                    Services
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     

      <div className="section-full py-5 site-bg-white twm-cars-section-wrap">
        <div className="container">
          <div className="section-content">
            <div className="twm-cars-section m-b30">
             <div className="row ruturaj-service-grid">
  {vehicles.map((vehicle, index) => (
    <div
      key={vehicle.id}
      className="col-lg-4 col-md-6 m-b30 wow fadeInDown"
      data-wow-delay="0.2s"
    >
      <a
        href={vehicle.link}
        className="ruturaj-service-card"
        aria-label={vehicle.name}
      >
        {/* Image */}
        <div className="ruturaj-service-image">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            loading="lazy"
          />

          <span className="service-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="ruturaj-service-content">
          <h3>{vehicle.name}</h3>

          <span className="service-line"></span>

          <p>{vehicle.desc}</p>

          <div className="service-bottom">
            <span>Explore Service</span>

            <span className="service-arrow">
              ›
            </span>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;