import React from "react";

const vehicles = [
  {
    id: 1,
    name: "Maruti Ertiga",
    image: "/images/Fleets/Maruti-Ertiga.webp",
    seater: "6+1",
    fuel: "Petrol / CNG",
    ac: "AC",
  },
  {
    id: 2,
    name: "Toyota Innova",
    image: "/images/Fleets/Toyota-Innova.jpg",
    seater: "6+1",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 3,
    name: "Toyota Innova Crysta",
    image: "/images/Fleets/Innova-Crysta.jpg",
    seater: "6+1",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 4,
    name: "Urbania",
    image: "/images/Fleets/Urbania-17-Seater.webp",
    seater: "17",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 5,
    name: "13 Seater Tempo Traveller AC",
    image: "/images/Fleets/13-Seater-Tempo-Traveller-AC.jpg",
    seater: "13",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 6,
    name: "13 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/13-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "13",
    fuel: "Diesel",
    ac: "Non AC",
  },
  {
    id: 7,
    name: "17 Seater Tempo Traveller AC",
    image: "/images/Fleets/17-Seater-Tempo-Traveller-AC.jpg",
    seater: "17",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 8,
    name: "17 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/17-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "17",
    fuel: "Diesel",
    ac: "Non AC",
  },
  {
    id: 9,
    name: "20 Seater Tempo Traveller AC",
    image: "/images/Fleets/20-Seater-Tempo-Traveller-AC.jpg",
    seater: "20",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 10,
    name: "20 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/20-Seater-Tempo-Traveller-Non-AC.jpg",
    seater: "20",
    fuel: "Diesel",
    ac: "Non AC",
  },
  {
    id: 11,
    name: "26 Seater Tempo Traveller AC",
    image: "/images/Fleets/26-Seater-Tempo-Traveller-AC.jpg",
    seater: "26",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 12,
    name: "26 Seater Tempo Traveller Non-AC",
    image: "/images/Fleets/26-Seater-Tempo-Traveller-AC.jpg",
    seater: "26",
    fuel: "Diesel",
    ac: "Non AC",
  },
  {
    id: 13,
    name: "32 Seater Bus AC",
    image: "/images/Fleets/32-Seater-Bus-AC.jpg",
    seater: "32",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 14,
    name: "32 Seater Bus Non-AC",
    image: "/images/Fleets/32-Seater-Bus-Non-AC.jpg",
    seater: "32",
    fuel: "Diesel",
    ac: "Non AC",
  },
  {
    id: 15,
    name: "35 Seater Bus AC",
    image: "/images/Fleets/35-Seater-Bus-AC.webp",
    seater: "35",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 16,
    name: "35 Seater Bus Non-AC",
    image: "/images/Fleets/35-Seater-Bus-AC.webp",
    seater: "35",
    fuel: "Diesel",
    ac: "Non AC",
  },
  {
    id: 17,
    name: "45 Seater Bus AC",
    image: "/images/Fleets/45-Seater-Bus-AC.jpg",
    seater: "45",
    fuel: "Diesel",
    ac: "AC",
  },
  {
    id: 18,
    name: "45 Seater Bus Non-AC",
    image: "/images/Fleets/45-Seater-Bus-AC.jpg",
    seater: "45",
    fuel: "Diesel",
    ac: "Non AC",
  },
];

const CarCard = ({ car }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="fleet-vehicle-card">

        {/* Vehicle Image */}
        <div className="fleet-vehicle-image">
          <img
            src={car.image}
            alt={car.name}
            loading="lazy"
          />
        </div>

        {/* Vehicle Information */}
        <div className="fleet-vehicle-info">

          {/* Vehicle Name */}
          <h3 className="fleet-vehicle-title">
            {car.name}
          </h3>

          {/* Vehicle Details */}
          <div className="fleet-vehicle-details">

            {/* Seater */}
            <div className="fleet-detail-item">
              <i className="fas fa-users"></i>
              <span>{car.seater} Seater</span>
            </div>

            {/* Fuel */}
            <div className="fleet-detail-item">
              <i className="fas fa-gas-pump"></i>
              <span>{car.fuel}</span>
            </div>

            {/* AC */}
            <div className="fleet-detail-item">
              <i className="fas fa-snowflake"></i>
              <span>{car.ac}</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

const CarDeals = () => {
  return (
    <section className="fleet-section py-3">
      <div className="container">

        {/* Section Heading */}
        <div className="row">
          <div className="col-12">

            <div className="fleet-section-heading">

              <h6 className="fleet-subtitle">
                // Fleets //
              </h6>

              <h2 className="fleet-main-title">
                Driving Excellence<span>.</span>
              </h2>

            </div>

          </div>
        </div>

        {/* Fleet Cards */}
        <div className="row">
          {vehicles.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarDeals;