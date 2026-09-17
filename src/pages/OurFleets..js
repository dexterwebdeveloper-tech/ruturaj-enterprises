import React from "react";

const vehicles = [
  {
    id: 1,
    name: "Maruti Ertiga",
    image: "images/Fleets/Maruti-Ertiga.webp",
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
    image: "images/Fleets/Innova-Crysta.jpg",
    seater: "6+1",
    luggage: "5 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Premium Innova Crysta offering spacious seating and superior comfort for long-distance travel.",
  },
  {
    id: 4,
    name: "Urbania",
    image: "images/Fleets/Urbania-17-Seater.webp",
    seater: "17",
    luggage: "12 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Luxury 17 seater Urbania with premium interiors, comfortable seating and ample space for group travel.",
  },
  {
    id: 5,
    name: "13 Seater Tempo Traveller AC",
    image: "images/Fleets/13-Seater-Tempo-Traveller-AC.jpg",
    seater: "13",
    luggage: "8 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Comfortable 13 seater AC Tempo Traveller ideal for family tours, corporate trips and outstation travel.",
  },
  {
    id: 6,
    name: "13 Seater Tempo Traveller Non-AC",
    image: "images/Fleets/13-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "13",
    luggage: "8 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Economical 13 seater Tempo Traveller suitable for local tours, group trips and short-distance travel.",
  },
  {
    id: 7,
    name: "17 Seater Tempo Traveller AC",
    image: "images/Fleets/17-Seater-Tempo-Traveller-AC.jpg",
    seater: "17",
    luggage: "10 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Spacious 17 seater AC Tempo Traveller suitable for family tours, pilgrimages and corporate travel.",
  },
  {
    id: 8,
    name: "17 Seater Tempo Traveller Non-AC",
    image: "images/Fleets/17-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "17",
    luggage: "10 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Practical 17 seater Tempo Traveller for group transportation, sightseeing and local journeys.",
  },
  {
    id: 9,
    name: "20 Seater Tempo Traveller AC",
    image: "images/Fleets/20-Seater-Tempo-Traveller-AC.jpg",
    seater: "20",
    luggage: "12 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Comfortable 20 seater AC Tempo Traveller designed for group tours, corporate outings and family trips.",
  },
  {
    id: 10,
    name: "20 Seater Tempo Traveller Non-AC",
    image: "images/Fleets/20-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "20",
    luggage: "12 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Affordable 20 seater Tempo Traveller suitable for group tours, events and local transportation.",
  },
  {
    id: 11,
    name: "26 Seater Tempo Traveller AC",
    image: "images/Fleets/26-Seater-Tempo-Traveller-AC.jpg",
    seater: "26",
    luggage: "15 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Large 26 seater AC Tempo Traveller ideal for corporate groups, weddings, tours and long-distance journeys.",
  },
  {
    id: 12,
    name: "26 Seater Tempo Traveller Non-AC",
    image: "images/Fleets/26-Seater-Tempo-Traveller-AC.jpg",
    seater: "26",
    luggage: "15 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Spacious 26 seater Tempo Traveller suitable for large groups, local tours and event transportation.",
  },
  {
    id: 13,
    name: "32 Seater Bus AC",
    image: "images/Fleets/32-Seater-Bus-AC.jpg",
    seater: "32",
    luggage: "20 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Comfortable 32 seater AC bus ideal for corporate transport, weddings, school trips and group tours.",
  },
  {
    id: 14,
    name: "32 Seater Bus Non-AC",
    image: "images/Fleets/32-Seater-Bus-Non-AC.jpg",
    seater: "32",
    luggage: "20 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Economical 32 seater bus suitable for staff transportation, local tours and large group travel.",
  },
  {
    id: 15,
    name: "35 Seater Bus AC",
    image: "images/Fleets/35-Seater-Bus-AC.webp",
    seater: "35",
    luggage: "25 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Spacious 35 seater AC bus designed for corporate travel, family tours, weddings and outstation trips.",
  },
  {
    id: 16,
    name: "35 Seater Bus Non-AC",
    image: "images/Fleets/35-Seater-Bus-AC.webp",
    seater: "35",
    luggage: "25 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Reliable 35 seater bus suitable for employee transportation, events, tours and group travel.",
  },
  {
    id: 17,
    name: "45 Seater Bus AC",
    image: "images/Fleets/45-Seater-Bus-AC.jpg",
    seater: "45",
    luggage: "30 Bags",
    fuel: "Diesel",
    ac: "AC",
    desc: "Premium 45 seater AC bus ideal for large corporate groups, weddings, tours and long-distance travel.",
  },
  {
    id: 18,
    name: "45 Seater Bus Non-AC",
    image: "images/Fleets/45-Seater-Bus-AC.jpg",
    seater: "45",
    luggage: "30 Bags",
    fuel: "Diesel",
    ac: "Non AC",
    desc: "Large 45 seater bus suitable for staff transport, school trips, events and group tours.",
  },
];

const OurFleets = () => {
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
                 Our Fleets
                </h1>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>




    
    <div className="section-full py-3 fleet-wrap">
      <div className="container">

        {/* Title */}
      

        {/* Grid */}
        <div className="row">

          {vehicles.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 mb-4">

              <div className="fleet-card">

                <div className="fleet-img">
                  <img src={item.image} alt={item.name} />
                </div>

           
<div className="fleet-content">
  <h4>{item.name}</h4>

  <div className="fleet-specs">
    <span>👥 {item.seater}</span>
    <span>🧳 {item.luggage}</span>
  </div>

  <div className="fleet-specs">
    <span>❄️ {item.ac}</span>
    <span>⛽ {item.fuel}</span>
  </div>

  <p>{item.desc}</p>

</div>



              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Styling */}
      <style jsx>{`
        .fleet-wrap {
          background: linear-gradient(135deg, #fff7ed, #fef3e2);
        }

        .fleet-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #f3d6b3;
          box-shadow: 0 6px 18px rgba(90, 45, 12, 0.12);
          transition: 0.3s;
          height: 100%;
        }

        .fleet-card:hover {
          transform: translateY(-6px);
        }

        .fleet-img img {
          width: 100%;
        //   height: 200px;
          object-fit: cover;
        }

        .fleet-content {
          padding: 15px;
          text-align: center;
        }

        .fleet-content h4 {
          color: #FF681A;
          margin-bottom: 8px;
        }

        .fleet-content p {
          color: #192555;
          font-size: 14px;
          margin: 0;
        }
      `}</style>
    </div>
    </>
  );
};

export default OurFleets;