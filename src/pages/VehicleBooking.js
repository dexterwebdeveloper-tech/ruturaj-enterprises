import React from "react";
import "./VehicleBooking.css";

// const vehicles = [
//   {
//     id: 1,
//     name: "Urbania 17 Seater AC",
//     seats: "17 Seater",
//     ac: "AC",
//     price: "₹7,500/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/7.jpg",
//   },
//   {
//     id: 2,
//     name: "13 Seater Tempo Traveller AC",
//     seats: "13 Seats",
//     ac: "AC",
//     price: "₹6,300/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/8.jpg",
//   },
//   {
//     id: 3,
//     name: "13 Seater Tempo Traveller Non-AC",
//     seats: "13 Seats",
//     ac: "Non AC",
//     price: "₹7,800/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/9.jpg",
//   },
//   {
//     id: 4,
//     name: "17 Seater Tempo Traveller AC",
//     seats: "17 Seats",
//     ac: "AC",
//     price: "₹6,600/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/10.jpg",
//   },
//   {
//     id: 5,
//     name: "17 Seater Tempo Traveller Non-AC",
//     seats: "17 Seats",
//     ac: "Non AC",
//     price: "₹8,100/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/11.jpg",
//   },
//   {
//     id: 6,
//     name: "20 Seater Tempo Traveller AC",
//     seats: "20 Seats",
//     ac: "AC",
//     price: "₹7,200/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/12.jpg",
//   },
//   {
//     id: 7,
//     name: "20 Seater Tempo Traveller Non-AC",
//     seats: "20 Seats",
//     ac: "Non AC",
//     price: "₹11,400/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/13.jpg",
//   },
//   {
//     id: 8,
//     name: "26 Seater Tempo Traveller AC",
//     seats: "26 Seats",
//     ac: "AC",
//     price: "₹10,200/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/14.jpg",
//   },
//   {
//     id: 9,
//     name: "26 Seater Tempo Traveller Non-AC",
//     seats: "26 Seats",
//     ac: "Non AC",
//     price: "₹14,400/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/15.jpg",
//   },
//   {
//     id: 10,
//     name: "32 Seater Bus AC",
//     seats: "32 Seats",
//     ac: "AC",
//     price: "₹9,600/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/16.jpg",
//   },
//   {
//     id: 11,
//     name: "32 Seater Bus Non-AC",
//     seats: "32 Seats",
//     ac: "Non AC",
//     price: "₹15,000/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/19.jpg",
//   },
//   {
//     id: 12,
//     name: "35 Seater Bus AC",
//     seats: "35 Seats",
//     ac: "AC",
//     price: "₹13,500/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/20.jpg",
//   },
//   {
//     id: 13,
//     name: "35 Seater Bus Non-AC",
//     seats: "35 Seats",
//     ac: "Non AC",
//     price: "₹19,500/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/21.jpg",
//   },
//   {
//     id: 14,
//     name: "45 Seater Bus AC",
//     seats: "45 Seats",
//     ac: "AC",
//     price: "₹14,100/-",
//     image:
//       "https://ruturajenterprises.com/uploads/fleet-images/22.jpg",
//   },
// ];

const vehicles = [
  {
    id: 1,
    name: "Maruti Ertiga",
    image: "/images/Fleets/Maruti-Ertiga.webp",
    seater: "6+1",
    luggage: "4 Bags",
    fuel: "Petrol / CNG",
    ac: "AC",
    desc: "Spacious 6+1 seater SUV ideal for family trips, local travel and outstation journeys.",
  },
  {
    id: 2,
    name: "Toyota Innova",
    image: "/images/Fleets/Toyota-Innova.jpg",
    seater: "6+1",
    luggage: "5 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Comfortable 6+1 seater Innova suitable for family tours, corporate travel and outstation trips.",
  },
  {
    id: 3,
    name: "Toyota Innova Crysta",
    image: "/images/Fleets/Innova-Crysta.jpg",
    seater: "6+1",
    luggage: "5 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Premium Innova Crysta offering spacious seating and superior comfort for long-distance travel.",
  },
  {
    id: 4,
    name: "Urbania",
    image: "/images/Fleets/Urbania-17-Seater.webp",
    seater: "17",
    luggage: "12 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Luxury 17 seater Urbania with premium interiors, comfortable seating and ample space for group travel.",
  },
  {
    id: 5,
    name: "13 Seater Tempo Traveller AC",
    image: "/images/Fleets/13-Seater-Tempo-Traveller-AC.jpg",
    seater: "13",
    luggage: "8 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Comfortable 13 seater AC Tempo Traveller ideal for family tours, corporate trips and outstation travel.",
  },
  {
    id: 6,
    name: "13 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/13-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "13",
    luggage: "8 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Economical 13 seater Tempo Traveller suitable for local tours, group trips and short-distance travel.",
  },
  {
    id: 7,
    name: "17 Seater Tempo Traveller AC",
    image: "/images/Fleets/17-Seater-Tempo-Traveller-AC.jpg",
    seater: "17",
    luggage: "10 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Spacious 17 seater AC Tempo Traveller suitable for family tours, pilgrimages and corporate travel.",
  },
  {
    id: 8,
    name: "17 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/17-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "17",
    luggage: "10 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Practical 17 seater Tempo Traveller for group transportation, sightseeing and local journeys.",
  },
  {
    id: 9,
    name: "20 Seater Tempo Traveller AC",
    image: "/images/Fleets/20-Seater-Tempo-Traveller-AC.jpg",
    seater: "20",
    luggage: "12 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Comfortable 20 seater AC Tempo Traveller designed for group tours, corporate outings and family trips.",
  },
  {
    id: 10,
    name: "20 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/20-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "20",
    luggage: "12 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Affordable 20 seater Tempo Traveller suitable for group tours, events and local transportation.",
  },
  {
    id: 11,
    name: "26 Seater Tempo Traveller AC",
    image: "/images/Fleets/26-Seater-Tempo-Traveller-AC.jpg",
    seater: "26",
    luggage: "15 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Large 26 seater AC Tempo Traveller ideal for corporate groups, weddings, tours and long-distance journeys.",
  },
  {
    id: 12,
    name: "26 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/26-Seater-Tempo-Traveller-AC.jpg",
    seater: "26",
    luggage: "15 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Spacious 26 seater Tempo Traveller suitable for large groups, local tours and event transportation.",
  },
  {
    id: 13,
    name: "32 Seater Bus AC",
    image: "/images/Fleets/32-Seater-Bus-AC.jpg",
    seater: "32",
    luggage: "20 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Comfortable 32 seater AC bus ideal for corporate transport, weddings, school trips and group tours.",
  },
  {
    id: 14,
    name: "32 Seater Bus Non-AC",
    image: "/images/Fleets/32-Seater-Bus-Non-AC.jpg",
    seater: "32",
    luggage: "20 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Economical 32 seater bus suitable for staff transportation, local tours and large group travel.",
  },
  {
    id: 15,
    name: "35 Seater Bus AC",
    image: "/images/Fleets/35-Seater-Bus-AC.webp",
    seater: "35",
    luggage: "25 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Spacious 35 seater AC bus designed for corporate travel, family tours, weddings and outstation trips.",
  },
  {
    id: 16,
    name: "35 Seater Bus Non-AC",
    image: "/images/Fleets/35-Seater-Bus-AC.webp",
    seater: "35",
    luggage: "25 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Reliable 35 seater bus suitable for employee transportation, events, tours and group travel.",
  },
  {
    id: 17,
    name: "45 Seater Bus AC",
    image: "/images/Fleets/45-Seater-Bus-AC.jpg",
    seater: "45",
    luggage: "30 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Premium 45 seater AC bus ideal for large corporate groups, weddings, tours and long-distance travel.",
  },
  {
    id: 18,
    name: "45 Seater Bus Non-AC",
    image: "/images/Fleets/45-Seater-Bus-AC.jpg",
    seater: "45",
    luggage: "30 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Large 45 seater bus suitable for staff transport, school trips, events and group tours.",
  },
];
const VehicleBooking = () => {
  const whatsappNumber = "919763381382";

  const handleBooking = (vehicle) => {
    const message = `Hello Ruturaj Enterprises,

I want to book ${vehicle.name}.

Vehicle: ${vehicle.name}
Seating Capacity: ${vehicle.seats}
Type: ${vehicle.ac}
Rate: ${vehicle.price}
Minimum Usage: 300 KM per day

Please share availability and complete booking details.

Thank you.`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

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
                    Online Booking
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <section className="rv-booking-section">
      <div className="container">

        {/* HEADING */}
        <div className="rv-heading">
          <span className="rv-small-title">
            RUTURAJ ENTERPRISES
          </span>

          <h2>
            Choose Your <span>Vehicle</span>
          </h2>

          <p>
            Select the right vehicle for your family trip,
            group tour, corporate travel or outstation journey.
          </p>
        </div>

        {/* VEHICLES */}
        <div className="rv-list">
          {vehicles.map((vehicle, index) => (
            <article
              className="rv-vehicle"
              key={vehicle.id}
            >

              {/* NUMBER */}
              <span className="rv-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* IMAGE */}
              <div className="rv-image">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                />
              </div>

              {/* INFORMATION */}
              <div className="rv-info">

                <div className="rv-name-row">
                  <h3>{vehicle.name}</h3>

                  <span
                    className={`rv-type ${
                      vehicle.ac === "AC"
                        ? "rv-ac"
                        : "rv-non-ac"
                    }`}
                  >
                    {vehicle.ac}
                  </span>
                </div>

                <div className="rv-line"></div>

                <div className="rv-facilities">

                  <div className="rv-facility">
                    <span className="rv-icon">
                      <i className="fas fa-chair"></i>
                    </span>

                    <div>
                      <small>Capacity</small>
                      <strong>{vehicle.seats}</strong>
                    </div>
                  </div>

                  <div className="rv-facility">
                    <span className="rv-icon">
                      <i className="fas fa-snowflake"></i>
                    </span>

                    <div>
                      <small>Comfort</small>
                      <strong>{vehicle.ac}</strong>
                    </div>
                  </div>

                  <div className="rv-facility">
                    <span className="rv-icon">
                      <i className="fas fa-ban"></i>
                    </span>

                    <div>
                      <small>Pets</small>
                      <strong>No Pets</strong>
                    </div>
                  </div>

                  <div className="rv-facility">
                    <span className="rv-icon">
                      <i className="fas fa-road"></i>
                    </span>

                    <div>
                      <small>Minimum</small>
                      <strong>300 KM / Day</strong>
                    </div>
                  </div>

                </div>
              </div>

              {/* PRICE + BOOKING */}
              <div className="rv-book-box">

                <span className="rv-starting">
                  Starting From
                </span>

                <div className="rv-price">
                  {vehicle.price}
                </div>

                <button
                  type="button"
                  className="rv-book-btn"
                  onClick={() =>
                    handleBooking(vehicle)
                  }
                >
                  <i className="fab fa-whatsapp"></i>

                  Book Now
                </button>

                <a
                  href="tel:+919763381382"
                  className="rv-call"
                >
                  <i className="fas fa-phone-alt"></i>
                  +91 9763381382
                </a>

              </div>

            </article>
          ))}
        </div>
      </div>
    </section>

</>
  );
};

export default VehicleBooking;