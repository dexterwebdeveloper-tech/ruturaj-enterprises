import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Actempotraveller() {


const cardData = {
keyword: "Ac Tempo Traveller Rent Pune",
headingDescription: "Ruturaj Enterprises offers comfortable and well-maintained AC Tempo Traveller rental services in Pune for families, friends, corporate teams, wedding groups, airport transfers, picnics, local sightseeing and outstation journeys. Choose from 13, 17 and 20 seater AC Tempo Travellers with spacious interiors, comfortable seating and suitable travel arrangements for short trips as well as longer group journeys. Our AC Tempo Traveller services are designed to make group transportation convenient, relaxed and organized across Pune and popular destinations.",
topPlaces: [
{
title: "Pawna Lake",
description: "Pawna Lake is a popular destination near Pune for camping, weekend breaks and group picnics. An AC Tempo Traveller makes the journey comfortable for families and friends carrying luggage, camping equipment and other essentials."
},
{
title: "Bhandardara",
description: "Bhandardara is known for its scenic landscapes, lakes, waterfalls and peaceful surroundings, making it suitable for group getaways. A spacious AC Tempo Traveller allows everyone to travel together comfortably while enjoying a relaxed journey from Pune."
},
{
title: "Lavasa",
description: "Lavasa offers a refreshing combination of hills, lakeside views and leisure attractions for weekend trips and group outings. AC Tempo Traveller rentals are convenient for families, friends and corporate groups who prefer traveling together in one comfortable vehicle."
},
{
title: "Kashid Beach",
description: "Kashid is a beautiful coastal destination suitable for family holidays, beach trips and group vacations from Pune. A comfortable AC Traveller provides ample seating and luggage space for groups traveling together on a longer road journey."
},
{
title: "Bhimashankar",
description: "Bhimashankar attracts pilgrims, nature lovers and groups looking for a peaceful getaway surrounded by the Western Ghats. An AC Tempo Traveller is a practical choice for group transportation, especially when the journey includes multiple passengers and travel bags."
},
{
title: "Panchgani",
description: "Panchgani is a scenic hill station known for its pleasant climate, viewpoints, valleys and family attractions. Groups can use an AC Tempo Traveller for a comfortable trip from Pune with convenient seating for sightseeing and leisure travel."
},
{
title: "Alibaug",
description: "Alibaug is a preferred destination for beach holidays, family outings, corporate breaks and weekend group trips. Traveling by AC Tempo Traveller keeps the entire group together and offers a convenient way to manage luggage and sightseeing plans."
},
{
title: "Satara",
description: "Satara provides access to forts, waterfalls, viewpoints and natural attractions, making it suitable for family and group tours. AC Tempo Traveller rentals from Pune offer a comfortable option for organized road travel with flexible stops along the way."
},
{
title: "Malshej Ghat",
description: "Malshej Ghat is popular for mountain scenery, monsoon landscapes, waterfalls and weekend excursions. A well-equipped AC Tempo Traveller is useful for groups that want a comfortable shared ride while exploring the surrounding attractions."
},
{
title: "Nashik",
description: "Nashik combines religious attractions, vineyards, temples and scenic locations, making it suitable for different types of group tours from Pune. An AC Tempo Traveller provides a convenient group travel solution for families, friends, corporate teams and sightseeing groups."
}
],
services: [
{
name: "AC Tempo Traveller Rental Pune",
description: "Ruturaj Enterprises provides AC Tempo Traveller rental services in Pune for comfortable family trips, group journeys, sightseeing, events and long-distance travel. Vehicles are suitable for groups looking for spacious seating, air conditioning and a convenient shared transportation option."
},
{
name: "AC Tempo Traveller Hire Pune",
description: "Hiring an AC Tempo Traveller in Pune is convenient for groups that want to travel together without arranging multiple cars. The service can be planned for local journeys, weekend trips, religious tours, corporate transportation and extended road travel."
},
{
name: "AC Tempo Traveller Booking Pune",
description: "AC Tempo Traveller booking in Pune can be arranged according to your group size, travel route and trip duration. Options are available for planned tours, family vacations, airport transfers, weddings, corporate events, picnics and sightseeing programs."
},
{
name: "Luxury AC Tempo Traveller Pune",
description: "Luxury AC Tempo Travellers in Pune offer a more comfortable travel experience for premium family tours, corporate outings, wedding transportation and special occasions. Spacious interiors and air conditioning make longer journeys more convenient for passengers traveling as a group."
},
{
name: "AC Traveller on Rent Pune",
description: "An AC Traveller on rent in Pune is suitable for groups requiring comfortable transportation for local and outstation journeys. Ruturaj Enterprises helps arrange suitable vehicles for sightseeing, vacations, events, airport transfers and group travel requirements."
},
{
name: "AC Traveller Hire Pune",
description: "AC Traveller hire services in Pune provide a practical solution for families, friends, tour groups and organizations traveling together. The vehicle can accommodate group luggage while keeping passengers together throughout the journey."
},
{
name: "AC Traveller Booking Pune",
description: "AC Traveller booking in Pune can be planned for short-distance trips, full-day sightseeing, weekend tours and multi-day travel. Vehicle selection can be matched with the number of passengers so the group receives a comfortable and organized travel arrangement."
},
{
name: "13 Seater AC Tempo Traveller Pune",
description: "The 13 Seater AC Tempo Traveller in Pune is suitable for small and medium-sized families, friends and corporate groups. It provides an efficient group travel arrangement for airport transfers, local sightseeing, weekend holidays, weddings and outstation routes."
},
{
name: "17 Seater AC Tempo Traveller Pune",
description: "A 17 Seater AC Tempo Traveller is a useful choice for larger families, tour groups, school groups and corporate teams traveling from Pune. The spacious seating arrangement allows passengers to travel together comfortably without depending on several separate vehicles."
},
{
name: "20 Seater AC Tempo Traveller Pune",
description: "The 20 Seater AC Tempo Traveller in Pune is designed for larger group transportation requirements including tours, events, corporate programs, weddings and long-distance travel. It helps keep the complete group together while offering air-conditioned comfort during the journey."
},
{
name: "AC Tempo Traveller for Outstation Pune",
description: "AC Tempo Travellers are suitable for outstation journeys from Pune to hill stations, pilgrimage destinations, beaches and major cities. Comfortable seating and air conditioning make them particularly useful for families and groups planning full-day or multi-day road trips."
},
{
name: "AC Tempo Traveller for Family Trip Pune",
description: "Family trips become easier to coordinate when everyone travels in one AC Tempo Traveller. There is sufficient room for passengers and luggage, making the vehicle suitable for holidays, religious visits, weekend breaks and multi-destination family tours."
},
{
name: "AC Tempo Traveller for Group Travel Pune",
description: "Group travelers can choose an AC Tempo Traveller in Pune to simplify transportation for friends, relatives, tour groups and social organizations. Traveling together helps maintain a coordinated schedule and makes longer journeys more comfortable and convenient."
},
{
name: "AC Tempo Traveller for Wedding Pune",
description: "Wedding groups can use AC Tempo Travellers for guest transfers, venue transportation, family movement and travel between hotels and functions. Different seating capacities help accommodate wedding groups while reducing the need to coordinate several individual cars."
},
{
name: "AC Tempo Traveller for Corporate Events Pune",
description: "Corporate events, conferences, employee outings and team programs often require dependable group transportation. AC Tempo Travellers provide a comfortable way to move employees and business guests between offices, hotels, venues, airports and event locations."
},
{
name: "AC Tempo Traveller for Airport Pickup Pune",
description: "AC Tempo Travellers can be arranged for airport pickup requirements in Pune when several passengers need to travel together. The spacious vehicle is useful for families, corporate teams and groups carrying multiple suitcases or travel bags."
},
{
name: "AC Tempo Traveller for Picnic Pune",
description: "For school, college, family and corporate picnics, an AC Tempo Traveller provides convenient shared transportation from Pune. Groups can travel together with their bags and picnic equipment while enjoying a comfortable ride to nearby destinations."
},
{
name: "Affordable AC Tempo Traveller Pune",
description: "Affordable AC Tempo Traveller options in Pune offer a practical balance between group comfort and travel expenses. Sharing one suitable-capacity vehicle can help groups avoid arranging multiple cars while keeping the journey organized and convenient."
},
{
name: "AC Tempo Traveller Near Me Pune",
description: "People searching for an AC Tempo Traveller near them in Pune can choose a convenient group transportation option based on passenger capacity and travel requirements. Ruturaj Enterprises supports arrangements for local sightseeing, airport travel, events, family trips and outstation journeys."
},
{
name: "AC Traveller Rental Service Pune",
description: "The AC Traveller rental service in Pune is suitable for planned tours, family vacations, corporate transportation, weddings, picnics and sightseeing. Vehicle capacity can be selected according to the size of the group and the duration of the planned journey."
},
{
name: "Luxury Traveller Rental Pune",
description: "Luxury Traveller rental in Pune is designed for groups seeking an upgraded and comfortable road travel experience. It works well for premium family tours, corporate travel, wedding transportation and special occasions where passengers prefer to stay together in a spacious vehicle."
},
{
name: "AC Tempo Traveller for Local Sightseeing Pune",
description: "For local sightseeing around Pune, an AC Tempo Traveller gives families and groups the flexibility to visit several attractions in one journey. The spacious vehicle is suitable for full-day sightseeing programs where passengers want comfortable transportation between multiple stops."
}
],
tableData: [
["AC Tempo Traveller Rental Pune", "AC Tempo Traveller Hire Pune"],
["AC Tempo Traveller Booking Pune", "Luxury AC Tempo Traveller Pune"],
["AC Traveller on Rent Pune", "AC Traveller Hire Pune"],
["AC Traveller Booking Pune", "13 Seater AC Tempo Traveller Pune"],
["17 Seater AC Tempo Traveller Pune", "20 Seater AC Tempo Traveller Pune"],
["AC Tempo Traveller for Outstation Pune", "AC Tempo Traveller for Family Trip Pune"],
["AC Tempo Traveller for Group Travel Pune", "AC Tempo Traveller for Wedding Pune"],
["AC Tempo Traveller for Corporate Events Pune", "AC Tempo Traveller for Airport Pickup Pune"],
["AC Tempo Traveller for Picnic Pune", "Affordable AC Tempo Traveller Pune"],
["AC Tempo Traveller Near Me Pune", "AC Traveller Rental Service Pune"],
["Luxury Traveller Rental Pune", "AC Tempo Traveller for Local Sightseeing Pune"]
],
whychoose: [
{
WhyChooseheading: "Comfortable Air-Conditioned Travel",
WhyChoosedescription: "Air-conditioned interiors provide a more pleasant travel environment, particularly during warm weather and longer road journeys. Groups can remain together and enjoy a comfortable ride without arranging multiple smaller vehicles."
},
{
WhyChooseheading: "Multiple Seating Capacities",
WhyChoosedescription: "13, 17 and 20 seater options make it easier to select a vehicle according to the actual size of your group. Choosing an appropriate capacity helps provide sufficient seating and practical luggage space."
},
{
WhyChooseheading: "Suitable for Many Occasions",
WhyChoosedescription: "From family holidays and weekend trips to weddings, corporate events, airport transfers and picnics, AC Tempo Travellers can support a wide range of travel requirements. The same group vehicle can simplify transportation planning for different types of journeys."
},
{
WhyChooseheading: "Convenient Group Transportation",
WhyChoosedescription: "Keeping everyone in one vehicle makes group coordination easier throughout the trip. It reduces the hassle of managing several cars, separate drivers and different arrival times during sightseeing or event transportation."
},
{
WhyChooseheading: "Useful for Local and Long Routes",
WhyChoosedescription: "AC Tempo Traveller rentals can be arranged for Pune city travel as well as longer routes to hill stations, pilgrimage destinations, beaches and major cities. This flexibility makes the service useful for both short outings and multi-day tours."
},
{
WhyChooseheading: "Spacious Travel Arrangement",
WhyChoosedescription: "Tempo Traveller interiors provide a practical amount of seating and room for passenger belongings compared with using several compact cars. This is especially helpful for families and groups carrying luggage on overnight or extended trips."
},
{
WhyChooseheading: "Group-Friendly Travel Planning",
WhyChoosedescription: "Travel arrangements can be planned around the passenger count, route, trip duration and purpose of the journey. This allows families, friends, corporate teams and event groups to organize transportation around their itinerary."
},
{
WhyChooseheading: "Practical Choice for Pune Groups",
WhyChoosedescription: "For groups starting from Pune, an AC Tempo Traveller combines shared transportation with passenger comfort and convenient trip coordination. It is a practical option for sightseeing, vacations, celebrations, business programs and destination travel."
}
]
};










const faqData = [
{
question: "Can I rent an AC Tempo Traveller in Pune?",
answer: "AC Tempo Traveller rental is a practical choice for families, friends, corporate teams, tourists, and other groups traveling together from Pune. Ruturaj Enterprises can help arrange a suitable vehicle according to the number of passengers, luggage, travel distance, trip duration, and preferred comfort level."
},
{
question: "What is the benefit of hiring an AC Tempo Traveller in Pune?",
answer: "An AC Tempo Traveller provides a comfortable group travel arrangement, particularly during warm weather and longer road journeys. Everyone can travel together in one vehicle while enjoying a more convenient environment than coordinating several separate cars."
},
{
question: "Can I hire an AC Tempo Traveller for local sightseeing in Pune?",
answer: "Groups can use an AC Tempo Traveller for planned sightseeing around Pune when they need transportation for multiple passengers. It can be useful for family outings, tourist groups, school excursions, corporate activities, and other local travel plans requiring one dedicated vehicle."
},
{
question: "Can an AC Tempo Traveller be rented for outstation trips from Pune?",
answer: "An AC Tempo Traveller can be arranged for outstation journeys from Pune to destinations such as Mahabaleshwar, Lonavala, Mumbai, Nashik, Kolhapur, Goa, Shirdi, and other locations. The vehicle can be selected according to the group size, route, luggage, and duration of the journey."
},
{
question: "What seating capacities are available for AC Tempo Traveller rental in Pune?",
answer: "The suitable seating capacity depends on the size of the travel group and the amount of luggage being carried. Ruturaj Enterprises can help select an appropriate AC Tempo Traveller for smaller groups as well as larger parties while considering passenger comfort and trip requirements."
},
{
question: "Is an AC Tempo Traveller suitable for family trips?",
answer: "Families can benefit from a dedicated AC Tempo Traveller when traveling with children, parents, or extended relatives. Having one vehicle keeps everyone together and provides a convenient way to manage luggage, planned stops, sightseeing, and travel timings during the trip."
},
{
question: "Can corporate groups rent an AC Tempo Traveller in Pune?",
answer: "Corporate teams can arrange an AC Tempo Traveller for employee outings, conferences, business travel, team-building activities, and company events. Group transportation helps colleagues travel together and maintain a coordinated schedule throughout the planned journey."
},
{
question: "Can tourists book an AC Tempo Traveller for a multi-day tour?",
answer: "Multi-day AC Tempo Traveller rental can be useful for tourists planning extended sightseeing, pilgrimage tours, destination holidays, and group vacations. The transportation schedule can be planned around overnight stays, sightseeing stops, passenger count, luggage, and the complete tour itinerary."
},
{
question: "Can I book an AC Tempo Traveller for a wedding or event in Pune?",
answer: "An AC Tempo Traveller can be useful for transporting guests between homes, hotels, venues, and other locations during weddings and events. A dedicated vehicle helps groups travel together and makes guest transportation easier to coordinate according to the event schedule."
},
{
question: "Why choose Ruturaj Enterprises for AC Tempo Traveller rental in Pune?",
answer: "Ruturaj Enterprises provides group transportation options for local sightseeing, outstation journeys, family vacations, corporate travel, pilgrimages, weddings, and events. The AC Tempo Traveller can be selected according to group size, luggage, route, duration, and comfort requirements for a more organized travel experience."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Amit Chavan",
feedback:
"We rented an AC Tempo Traveller from Ruturaj Enterprises for a group trip from Pune. The air-conditioned vehicle was a comfortable choice for our long journey, and keeping everyone together made the travel arrangements much easier. We were satisfied with the overall experience.",
rating: 5
},
{
id: 2,
name: "Miss. Pooja Wagh",
feedback:
"Our family needed a comfortable vehicle for an outstation trip from Pune, so we chose an AC Tempo Traveller from Ruturaj Enterprises. There was enough convenience for everyone to travel together with our luggage, and the journey was much easier to manage as a group.",
rating: 5
}
];










































    const Images = [
        { place: "/images/keyword/1.jpg", text: "Tempo Traveller On Rent in Pune", link: "Tempo-Traveller-On-Rent-in-Pune" },
        { place: "/images/keyword/2.jpg", text: "Pune to Shirdi Tempo Traveller on Rent", link: "Pune-to-Shirdi-Tempo-Traveller-on-Rent" },
        { place: "/images/keyword/3.jpg", text: "Pune to Mahabaleshwar Tempo Traveller on Rent", link: "Pune-to-Mahabaleshwar-Tempo-Traveller-on-Rent" },
        { place: "/images/keyword/4.jpg", text: "Pune to Goa Tempo Traveller", link: "Pune-to-Goa-Tempo-Traveller" },
        { place: "/images/keyword/5.jpg", text: "Pune to Mumbai Tempo Traveller on Rent", link: "Pune-to-Mumbai-Tempo-Traveller-on-Rent" },
        { place: "/images/keyword/6.jpg", text: "Pune to Konkan Tempo Traveller", link: "Pune-to-Konkan-Tempo-Traveller" },
        { place: "/images/keyword/7.jpg", text: "Pune to Nashik Tempo Traveller On Rent", link: "Pune-to-Nashik-Tempo-Traveller-On-Rent" },
        { place: "/images/keyword/8.jpg", text: "Pune Darshan Tempo Traveller On Rent", link: "Pune-Darshan-Tempo-Traveller-On-Rent" },
        { place: "/images/keyword/9.jpg", text: "Mini Bus On Rent in Pune", link: "Mini-Bus-On-Rent-in-Pune" },
        { place: "/images/keyword/10.jpg", text: "13 Seater Tempo Traveller on Rent", link: "13-Seater-Tempo-Traveller-on-Rent" },
        { place: "/images/keyword/11.jpg", text: "17 Seater Tempo Traveller on Rent in Pune", link: "17-Seater-Tempo-Traveller-on-Rent-in-Pune" },
        { place: "/images/keyword/12.jpg", text: "20 Seater Bus on Rent in Pune", link: "20-Seater-Bus-on-Rent-in-Pune" },
        { place: "/images/keyword/13.jpg", text: "26 Seater Tempo Traveller on Rent in Pune", link: "26-Seater-Tempo-Traveller-on-Rent-in-Pune" },
        { place: "/images/keyword/14.jpg", text: "32 Seater Bus Rent in Pune", link: "32-Seater-Bus-Rent-in-Pune" },
        { place: "/images/keyword/15.jpg", text: "35 Seater Bus on Rent in Pune", link: "35-Seater-Bus-on-Rent-in-Pune" },
        { place: "/images/keyword/16.jpg", text: "45 Seater Bus on Rent in Pune", link: "45-Seater-Bus-on-Rent-in-Pune" },
        { place: "/images/keyword/17.jpg", text: "50 Seater Bus On Rent in Pune", link: "50-Seater-Bus-On-Rent-in-Pune" },
        { place: "/images/keyword/18.jpg", text: "Bus Rentals For School Trips in Pune", link: "Bus-Rentals-For-School-Trips-in-Pune" },
        { place: "/images/keyword/19.jpg", text: "Bus booking for wedding in Pune", link: "Bus-booking-for-wedding-in-Pune" },
        { place: "/images/keyword/20.jpg", text: "Bus Booking for Marriage", link: "Bus-Booking-for-Marriage" },
        { place: "/images/keyword/21.jpg", text: "Bus Service for Corporate Pune", link: "Bus-Service-for-Corporate-Pune" },
        { place: "/images/keyword/22.jpg", text: "Bus on Rent For Event in Pune", link: "Bus-on-Rent-For-Event-in-Pune" },
        { place: "/images/keyword/23.jpg", text: "Bus Hire for Outstation", link: "Bus-Hire-for-Outstation" },
        { place: "/images/keyword/24.jpg", text: "AC Bus On Rent in Pune", link: "AC-Bus-On-Rent-in-Pune" },
        { place: "/images/keyword/25.jpg", text: "Pune Bus Hire Rental Service", link: "Pune-Bus-Hire-Rental-Service" },
    ];









const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ac Tempo Traveller Rent Pune",
  "image": "https://ruturajenterprises.com/assets/images/ac-tempo-traveller-rent-pune.webp",
  "description":
    "Ac Tempo Traveller Rent Pune for comfortable family holidays, group tours, corporate travel, weddings, airport transfers, religious journeys, sightseeing, and outstation trips. Ruturaj Enterprises offers well-maintained AC Tempo Traveller and AC Traveller options in multiple seating capacities, with experienced drivers, convenient pickup arrangements, spacious seating, and flexible rental plans for local and long-distance travel from Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Ruturaj Enterprises"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "8517"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://ruturajenterprises.com/ac-tempo-traveller-rent-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Ac Tempo Traveller Rent Pune | AC Tempo Traveller Rental Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Ac Tempo Traveller Rent Pune for family trips, group tours, corporate travel, weddings, airport transfers, religious tours and outstation journeys. Hire comfortable AC Tempo Travellers in 13, 17 and 20 seater options."
  />

  <meta
    name="keywords"
    content="AC Tempo Traveller Rental Pune, AC Tempo Traveller Hire Pune, AC Tempo Traveller Booking Pune, Luxury AC Tempo Traveller Pune, AC Traveller on Rent Pune, AC Traveller Hire Pune, AC Traveller Booking Pune, 13 Seater AC Tempo Traveller Pune, 17 Seater AC Tempo Traveller Pune, 20 Seater AC Tempo Traveller Pune, AC Tempo Traveller for Outstation Pune, AC Tempo Traveller for Family Trip Pune, AC Tempo Traveller for Group Travel Pune, AC Tempo Traveller for Corporate Travel Pune, AC Tempo Traveller for Wedding Pune, AC Tempo Traveller for Marriage Pune, AC Tempo Traveller for Airport Pickup Pune, AC Tempo Traveller for Airport Drop Pune, AC Tempo Traveller for Local Sightseeing Pune, AC Tempo Traveller for Pune Darshan, AC Tempo Traveller for Picnic Pune, AC Tempo Traveller for School Trip Pune, AC Tempo Traveller for College Trip Pune, AC Tempo Traveller for Religious Tour Pune, AC Tempo Traveller for Pilgrimage Pune, AC Tempo Traveller for One Day Trip Pune, AC Tempo Traveller for Multi Day Trip Pune, AC Tempo Traveller on Rent Pune, AC Tempo Traveller Rental Service Pune, AC Tempo Traveller Hire Service Pune, AC Tempo Traveller Booking Service Pune, AC Traveller Rental Pune, AC Traveller Rental Service Pune, AC Traveller Hire Service Pune, AC Traveller Booking Service Pune, Luxury Traveller Rental Pune, Luxury Traveller Hire Pune, Luxury Traveller Booking Pune, 12 Seater AC Tempo Traveller Pune, 14 Seater AC Tempo Traveller Pune, 26 Seater AC Tempo Traveller Pune, 13 Seater Tempo Traveller on Rent Pune, 17 Seater Tempo Traveller on Rent Pune, 20 Seater Tempo Traveller on Rent Pune, AC Tempo Traveller for Family Tour Pune, AC Tempo Traveller for Group Tour Pune, AC Tempo Traveller for Corporate Events Pune, AC Tempo Traveller for Wedding Events Pune, AC Tempo Traveller for Outstation Tour Pune, AC Tempo Traveller for Maharashtra Tour Pune, AC Tempo Traveller for Goa Trip Pune, AC Tempo Traveller for Mumbai Trip Pune, AC Tempo Traveller for Lonavala Trip Pune, AC Tempo Traveller for Mahabaleshwar Trip Pune, AC Tempo Traveller for Nashik Trip Pune, AC Tempo Traveller for Shirdi Trip Pune, AC Tempo Traveller for Kolhapur Trip Pune, AC Tempo Traveller for Konkan Trip Pune, AC Tempo Traveller for Matheran Trip Pune, AC Tempo Traveller for Ashtavinayak Tour Pune, Affordable AC Tempo Traveller Rental Pune, AC Tempo Traveller Rental Near Me Pune, Comfortable AC Tempo Traveller Pune, Premium AC Tempo Traveller Pune, AC Tempo Traveller Tour Package Pune, AC Tempo Traveller Travel Service Pune, Ruturaj Enterprises AC Tempo Traveller Pune"
  />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>



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
                                        {cardData.keyword}
                                    </h1>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>






















            <section>
                <div className="container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keyword/44.jpg' alt='img' className='img-fluid' />
                            <h3 className="py-1"
                                style={{
                                    color: '#FF681A', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >Ruturaj Enterprises: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="topPlaces">

                                <p className="sectionLead">Top Places to visit from {cardData.keyword} </p>
                                {cardData.topPlaces.map((place, index) => (
                                    <article key={index} className="placeCard borderr" tabIndex="0">
                                        <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                                        <div className="placeBody">
                                            <h4 className="placeTitle">{place.title}</h4>
                                            <p className="placeDesc">{place.description}</p>

                                        </div>

                                        <span className="placeArrow" aria-hidden>›</span>
                                    </article>
                                ))}
                            </div>


                            <div className="services-section">
                                {cardData.services.map((service, index) => (
                                    <div key={index} className="service-row">

                                        <div>
                                            <h4 className="service-title">{service.name}</h4>
                                            <p className="service-desc">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable /> */}

                            <div id="why-choose-section" className="why-choose-section">


                                {/* Section Title */}
                                <h2 className="section-title text-white">
                                    Why Choose <span>Ruturaj Enterprises</span>
                                </h2>


                                {/* Cards */}
                                <div className="cards-grid">
                                    {cardData.whychoose.map((item, index) => (
                                        <div key={index} className="why-card">
                                            <div className="icon-circle">{index + 1}</div>
                                            <h4 className="card-heading">{item.WhyChooseheading}</h4>
                                            <p className="card-desc">{item.WhyChoosedescription}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>



                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Ruturaj Enterprises </h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">

                                                <FaqSection
                                                    title="Frequently Asked"
                                                    subtitle="Help & Info"
                                                    items={faqData}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <TestimonialSectionKeyword
                                testimonials={testimonials}
                            />


                            <ContactShowcase keyword={cardData.keyword} />
                        </div>

                        <div className='col-12 col-md-4' >
                            <div className="routeList">
                                {Images.map((e, i) => {
                                    const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                                    const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                                    return (
                                        <a
                                            key={e.link || i}
                                            href={href}
                                            className="routeItem"
                                            aria-label={e.text}
                                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            <div className="routeThumb">
                                                <img src={e.place} alt="" loading="lazy" />
                                            </div>

                                            <div className="routeMeta">
                                                <h6 className="routeTitle">{e.text}</h6>
                                                <span className="routeUnderline" />
                                            </div>

                                            <span className="routeArrow" aria-hidden>›</span>
                                        </a>
                                    );
                                })}
                            </div>




                            <div>
                                {/* <FleetHighway /> */}
                            </div>
                            <div className="pc-contact">
                                <h4 className="pc-title">Contact Information</h4>

                                <div className="pc-grid">
                                    {/* Phones */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="bi bi-telephone-fill"></i>
                                            <span>Phone Numbers</span>
                                        </header>

                                        <div className="pc-list">
                                            <a href="tel:+919763381382" className="pc-call">+91 9763381382</a>
                                        </div>

                                        <div className="pc-list">
                                            <a href="tel:+919011051114" className="pc-call">+91 9011051114</a>
                                        </div>

                                        <div className="pc-list">
                                            <a href="tel:+919822697554" className="pc-call">+91 9822697554</a>
                                        </div>

                                        <div className="pc-cta">
                                            <a
                                                href="https://wa.me/919763381382"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pc-whats"
                                            >
                                                <i className="bi bi-whatsapp"></i> WhatsApp
                                            </a>
                                            <a href="tel:+919763381382" className="pc-primary">
                                                Call Now
                                            </a>
                                        </div>
                                    </section>

                                    {/* Email */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="bi bi-envelope-fill"></i>
                                            <span>Email</span>
                                        </header>

                                        <a href="mailto:booking@ruturajenterprises.com" className="pc-email">
                                            booking@ruturajenterprises.com
                                        </a>
                                    </section>

                                    {/* Address */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="bi bi-geo-alt-fill"></i>
                                            <span>Address</span>
                                        </header>

                                        <address className="pc-address">
                                            <strong>Ruturaj Enterprises</strong><br />

                                            Nandini Takle Nagar, Pune - Solapur Road Manjri Bk Hadapsar, Pune, Maharashtra 412307
                                        </address>
                                    </section>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Actempotraveller ;