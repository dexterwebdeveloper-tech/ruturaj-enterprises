import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Sevanseatercaronrent() {


const cardData = {
keyword: "7 Seater car on rent in Pune",
headingDescription: "Ruturaj Enterprises provides 7 Seater car on rent in Pune for families, friends, tourists, corporate travelers, wedding guests, airport passengers, and groups looking for spacious private transportation. A 7-seater vehicle is a practical choice for local travel, sightseeing, weekend getaways, airport transfers, family functions, one-way journeys, round trips, and long-distance road travel. Customers can choose AC, luxury, affordable, driver-operated, tourist, intercity, and outstation options according to their destination, passenger count, luggage, and travel schedule.",


topPlaces: [
    {
        title: "Pune Airport",
        description: "Pune Airport is a major travel hub for tourists, business professionals, families, and passengers arriving from different cities. A 7-seater car provides useful space for passengers and luggage while offering direct transportation to homes, hotels, offices, or onward destinations."
    },
    {
        title: "Lavasa",
        description: "Lavasa is a scenic destination surrounded by hills, lakes, and winding roads, making it suitable for relaxed day trips and weekend outings. Families and groups can use a 7-seater vehicle to travel together and carry their belongings comfortably."
    },
    {
        title: "Bhandardara",
        description: "Bhandardara is known for its lakes, mountain landscapes, waterfalls, and peaceful natural surroundings. A spacious 7-seater car is convenient for families and groups planning a road trip from Pune with multiple sightseeing stops."
    },
    {
        title: "Panchgani",
        description: "Panchgani is a popular hill destination featuring viewpoints, valleys, greenery, and pleasant surroundings. A 7-seater car allows families and friends to travel together from Pune while keeping the itinerary flexible."
    },
    {
        title: "Dapoli",
        description: "Dapoli offers beaches, coastal scenery, temples, and peaceful Konkan landscapes for travelers looking for a longer getaway. A 7-seater vehicle is suitable for groups carrying luggage and planning a comfortable multi-day road journey."
    },
    {
        title: "Matheran",
        description: "Matheran is a scenic hill destination famous for its viewpoints, greenery, and peaceful atmosphere. Travelers can use a 7-seater car for the road journey from Pune and continue their local exploration from the designated vehicle-accessible area."
    },
    {
        title: "Kashid",
        description: "Kashid is a popular coastal destination known for its beach and relaxed surroundings. A 7-seater car provides a convenient option for families and groups traveling from Pune with luggage for a weekend or extended coastal holiday."
    },
    {
        title: "Satara",
        description: "Satara provides access to scenic landscapes, historic attractions, waterfalls, and nearby hill destinations. A private 7-seater car is useful for families and groups planning sightseeing or personal travel from Pune."
    },
    {
        title: "Ganpatipule",
        description: "Ganpatipule is a well-known Konkan destination combining coastal scenery with spiritual attractions. A spacious 7-seater vehicle can make the long road journey more convenient for families and groups traveling with luggage."
    },
    {
        title: "Saputara",
        description: "Saputara is a scenic hill destination in Gujarat known for its viewpoints, lake, greenery, and pleasant surroundings. A 7-seater car can support families and groups planning a longer road trip with flexible stops along the route."
    }
],

services: [
    {
        name: "7 Seater Car Rental Pune",
        description: "7 Seater Car Rental Pune provides spacious private transportation for families, groups, tourists, corporate travelers, and special occasions. The vehicle can be arranged for local travel, sightseeing, airport transfers, weekend trips, and longer outstation journeys."
    },
    {
        name: "7 Seater Car Hire Pune",
        description: "7 Seater Car Hire Pune is suitable for passengers who want to travel together in one private vehicle. It provides a practical solution for family outings, group tours, corporate movement, events, and road trips."
    },
    {
        name: "7 Seater Car Booking Pune",
        description: "7 Seater Car Booking Pune makes it convenient to reserve a spacious vehicle before a planned journey. Customers can coordinate their pickup location, destination, travel date, passenger count, luggage requirements, and preferred travel arrangement."
    },
    {
        name: "7 Seater Car on Rent Pune",
        description: "7 Seater Car on Rent Pune offers a convenient private vehicle for families and groups requiring additional seating capacity. It can be used for city travel, sightseeing, airport transportation, family functions, weekend holidays, and outstation trips."
    },
    {
        name: "7 Seater SUV Rental Pune",
        description: "7 Seater SUV Rental Pune is a suitable option for travelers looking for a spacious vehicle for family trips, group travel, and longer road journeys. The SUV format provides useful cabin and luggage space for passengers traveling together."
    },
    {
        name: "7 Seater AC Car Pune",
        description: "7 Seater AC Car Pune provides a comfortable air-conditioned environment for families and groups traveling together. It is suitable for local transfers, airport travel, sightseeing, weekend trips, and extended journeys outside Pune."
    },
    {
        name: "7 Seater Luxury Car Pune",
        description: "7 Seater Luxury Car Pune offers a premium private transportation option for travelers who want enhanced comfort for special occasions, executive travel, family holidays, and important guest movement. It is suitable when both space and a refined travel experience are preferred."
    },
    {
        name: "7 Seater Car for Outstation Pune",
        description: "7 Seater Car for Outstation Pune is designed for travelers heading to destinations beyond Pune for holidays, family visits, pilgrimages, tourism, and personal travel. The larger vehicle is particularly useful when several passengers need to travel together with luggage."
    },
    {
        name: "7 Seater Car for Family Trip Pune",
        description: "7 Seater Car for Family Trip Pune provides private transportation for parents, children, relatives, and senior family members. Families can travel together with convenient pickup, luggage space, flexible breaks, and a route suited to their itinerary."
    },
    {
        name: "7 Seater Car for Group Travel Pune",
        description: "7 Seater Car for Group Travel Pune is suitable for friends, relatives, colleagues, and small travel groups. A dedicated vehicle helps everyone remain together while making it easier to coordinate pickup, sightseeing stops, luggage, and return travel."
    },
    {
        name: "7 Seater Airport Pickup Pune",
        description: "7 Seater Airport Pickup Pune provides convenient transportation for families, groups, and passengers carrying multiple bags. The spacious vehicle can be used for direct transfers between Pune Airport, hotels, residences, offices, and other destinations."
    },
    {
        name: "7 Seater One Way Cab Pune",
        description: "7 Seater One Way Cab Pune is useful for passengers who need a private transfer to another city or destination without requiring the same vehicle for the return. It can support relocation, personal visits, airport connections, and intercity travel."
    },
    {
        name: "7 Seater Round Trip Cab Pune",
        description: "7 Seater Round Trip Cab Pune provides transportation for both the onward and return portions of a journey. It is suitable for family holidays, sightseeing tours, pilgrimages, weekend getaways, and events requiring planned return travel."
    },
    {
        name: "7 Seater Wedding Car Pune",
        description: "7 Seater Wedding Car Pune provides spacious transportation for wedding guests, relatives, family members, and event participants. The vehicle can be used for hotel pickups, venue transfers, guest movement, and transportation between different wedding functions."
    },
    {
        name: "7 Seater Corporate Car Pune",
        description: "7 Seater Corporate Car Pune is suitable for companies needing private transportation for employees, clients, executives, meetings, conferences, and business events. A single spacious vehicle can help small corporate groups travel together."
    },
    {
        name: "7 Seater Tourist Car Pune",
        description: "7 Seater Tourist Car Pune provides private transportation for visitors exploring Pune and destinations across Maharashtra and nearby states. Groups can customize their sightseeing route and include multiple attractions without depending on fixed public transport schedules."
    },
    {
        name: "Affordable 7 Seater Car Rental Pune",
        description: "Affordable 7 Seater Car Rental Pune offers a practical transportation option for families and groups looking to manage travel expenses while using one spacious vehicle. It is useful for local trips, sightseeing, weekend travel, and planned outstation journeys."
    },
    {
        name: "7 Seater Car Near Me Pune",
        description: "7 Seater Car Near Me Pune helps travelers looking for a spacious private vehicle from their preferred area in Pune. The service can support airport travel, local transportation, family trips, sightseeing, and journeys outside the city."
    },
    {
        name: "7 Seater Driver Car Rental Pune",
        description: "7 Seater Driver Car Rental Pune provides a spacious vehicle with driver support, allowing passengers to focus on their trip instead of handling the driving. It is suitable for families, tourists, corporate groups, airport passengers, and long-distance travelers."
    },
    {
        name: "7 Seater Outstation Taxi Pune",
        description: "7 Seater Outstation Taxi Pune provides private transportation for destinations beyond Pune. Families and small groups can travel together with luggage while planning convenient stops, sightseeing, and return arrangements according to their itinerary."
    },
    {
        name: "7 Seater Long Distance Car Pune",
        description: "7 Seater Long Distance Car Pune is suitable for extended road journeys involving family visits, tourism, business travel, pilgrimages, and multi-day trips. The additional seating and luggage capacity make it practical for groups covering longer distances."
    },
    {
        name: "7 Seater Car Hire Service Pune",
        description: "7 Seater Car Hire Service Pune provides flexible private transportation for local and outstation requirements. Customers can use the service for airport transfers, sightseeing, family travel, corporate movement, weddings, weekend holidays, and long-distance road trips."
    }
],

tableData: [
    ["7 Seater Car Rental Pune", "Spacious private car rental for families, groups, tourists, and corporate travel."],
    ["7 Seater Car Hire Pune", "Dedicated 7-seater vehicle hire for local and outstation transportation."],
    ["7 Seater Car Booking Pune", "Advance booking option for planned journeys requiring additional seating."],
    ["7 Seater Car on Rent Pune", "7-seater rental for family trips, sightseeing, airport travel, and road journeys."],
    ["7 Seater SUV Rental Pune", "Spacious SUV rental option for groups, families, luggage, and long journeys."],
    ["7 Seater AC Car Pune", "Air-conditioned 7-seater vehicle for comfortable private transportation."],
    ["7 Seater Luxury Car Pune", "Premium 7-seater option for special occasions and comfortable group travel."],
    ["7 Seater Car for Outstation Pune", "Private 7-seater transportation for destinations outside Pune."],
    ["7 Seater Car for Family Trip Pune", "Comfortable vehicle option for families and relatives traveling together."],
    ["7 Seater Car for Group Travel Pune", "Private group transportation for friends, colleagues, and small groups."],
    ["7 Seater Airport Pickup Pune", "Spacious airport pickup and transfer option for passengers with luggage."],
    ["7 Seater One Way Cab Pune", "One-way 7-seater transportation for intercity and destination transfers."],
    ["7 Seater Round Trip Cab Pune", "Return transportation for holidays, sightseeing, family trips, and events."],
    ["7 Seater Wedding Car Pune", "7-seater transportation for wedding guests and event-related movement."],
    ["7 Seater Corporate Car Pune", "Corporate group transportation for meetings, events, and business travel."],
    ["7 Seater Tourist Car Pune", "Private tourist vehicle for customized sightseeing and destination tours."],
    ["Affordable 7 Seater Car Rental Pune", "Budget-conscious spacious vehicle rental for families and groups."],
    ["7 Seater Car Near Me Pune", "Convenient 7-seater option for customers seeking nearby Pune pickup."],
    ["7 Seater Driver Car Rental Pune", "7-seater vehicle with driver support for convenient passenger travel."],
    ["7 Seater Outstation Taxi Pune", "Private 7-seater taxi for travel to destinations beyond Pune."],
    ["7 Seater Long Distance Car Pune", "Spacious vehicle option for extended intercity and road journeys."],
    ["7 Seater Car Hire Service Pune", "Flexible 7-seater hire for local, airport, tourist, corporate, and outstation travel."]
],

whychoose: [
    {
        WhyChooseheading: "More Space for Group Travel",
        WhyChoosedescription: "A 7-seater vehicle allows families and small groups to travel together instead of arranging multiple cars. The additional seating capacity is especially useful when passengers are carrying luggage for longer trips."
    },
    {
        WhyChooseheading: "Comfortable Family Transportation",
        WhyChoosedescription: "Families can enjoy private transportation with convenient pickup points, flexible breaks, and space for personal belongings. It is a practical option for holidays, family functions, pilgrimages, and sightseeing."
    },
    {
        WhyChooseheading: "Convenient Airport Transfers",
        WhyChoosedescription: "Airport journeys become easier when passengers and luggage can travel together in one spacious vehicle. The service can be arranged for direct pickup or drop between Pune Airport and the preferred destination."
    },
    {
        WhyChooseheading: "Ideal for Weekend Getaways",
        WhyChoosedescription: "A 7-seater car works well for weekend trips to hill stations, beaches, nature destinations, and nearby tourist locations. Groups can plan their departure, sightseeing stops, and return schedule around their own itinerary."
    },
    {
        WhyChooseheading: "Suitable for Outstation Journeys",
        WhyChoosedescription: "The vehicle can be used for destinations across Maharashtra and other states for tourism, personal visits, business travel, and family occasions. Its spacious configuration makes longer road journeys more convenient for groups."
    },
    {
        WhyChooseheading: "Driver-Operated Convenience",
        WhyChoosedescription: "With a driver-operated arrangement, passengers can relax throughout the journey rather than handling traffic, navigation, and parking themselves. This is particularly useful for tourists, families, corporate groups, and long-distance travelers."
    },
    {
        WhyChooseheading: "Useful for Weddings and Events",
        WhyChoosedescription: "A spacious 7-seater can help move wedding guests, relatives, colleagues, and event participants between hotels and venues. It can also support transportation between multiple functions during a celebration."
    },
    {
        WhyChooseheading: "Flexible Travel Categories",
        WhyChoosedescription: "AC, luxury, affordable, tourist, corporate, airport, family, one-way, round-trip, long-distance, and outstation arrangements provide options for different travel needs. Customers can select the service according to their destination, passenger count, luggage, budget, and schedule."
    }
]


};






const faqData = [
{
question: "How can I book a 7 seater car on rent in Pune?",
answer: "A 7 seater car can be rented in Pune by sharing the pickup location, destination, travel date, preferred departure time, number of passengers, and rental duration. Ruturaj Enterprises can help arrange a suitable vehicle based on the group size, luggage, route, and type of journey."
},
{
question: "Is a 7 seater car suitable for family trips in Pune?",
answer: "A 7 seater vehicle can be a convenient choice for families who want to travel together in a private car. It is suitable for local outings, sightseeing, airport transfers, weekend holidays, and selected outstation journeys where additional seating is useful."
},
{
question: "Can I rent a 7 seater car in Pune for outstation travel?",
answer: "Outstation 7 seater car rentals can be arranged from Pune for destinations such as Lonavala, Mahabaleshwar, Mumbai, Nashik, Shirdi, Kolhapur, Goa, and other routes. The vehicle can be planned for one-way or round-trip travel according to the itinerary."
},
{
question: "Can I hire a 7 seater car for a one-way journey?",
answer: "One-way rental is suitable when a group needs transportation from Pune to another destination without requiring the vehicle for the return trip. The booking can be coordinated according to the pickup point, final destination, travel date, passenger count, luggage, and departure time."
},
{
question: "Is a 7 seater car available for round-trip travel from Pune?",
answer: "Round-trip 7 seater car rental can work well for family holidays, sightseeing, pilgrimages, weekend trips, and visits to nearby cities. The return schedule can be planned along with the onward journey so the complete transportation requirement is covered."
},
{
question: "Can I rent a 7 seater car for Pune Airport pickup?",
answer: "A 7 seater vehicle can be arranged for Pune Airport pickup or drop when several passengers are traveling together with luggage. Sharing the flight timing, airport details, passenger count, and destination helps organize a suitable airport transportation arrangement."
},
{
question: "What destinations can I visit from Pune in a 7 seater car?",
answer: "A 7 seater car can be used for trips from Pune to nearby hill stations, pilgrimage destinations, cities, and tourist locations. Popular travel plans may include Lonavala, Mahabaleshwar, Shirdi, Nashik, Mumbai, Kolhapur, Goa, and other destinations depending on the group's itinerary."
},
{
question: "Is a 7 seater car good for group sightseeing?",
answer: "Groups can benefit from a 7 seater car when they want to visit multiple locations without arranging separate vehicles. A private car allows passengers to coordinate sightseeing stops, meal breaks, departure times, and return travel according to their preferred schedule."
},
{
question: "What details are required to rent a 7 seater car in Pune?",
answer: "Useful rental details include the pickup location, destination, travel date, departure time, number of passengers, luggage requirements, rental duration, and whether the journey is local, one-way, or round trip. These details help Ruturaj Enterprises plan the vehicle arrangement accurately."
},
{
question: "Why choose Ruturaj Enterprises for a 7 seater car on rent in Pune?",
answer: "Ruturaj Enterprises offers 7 seater car rental arrangements in Pune for family travel, group outings, airport transfers, sightseeing, corporate requirements, and outstation journeys. The vehicle and travel plan can be organized according to passenger capacity, luggage, route, schedule, and rental requirements."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Mahesh Gaikwad",
feedback:
"We rented a 7 seater car from Ruturaj Enterprises for a family trip from Pune. Having everyone travel together made the journey much more convenient, and there was useful space for our luggage. The overall rental arrangement worked very well for our travel plans.",
rating: 5
},
{
id: 2,
name: "Miss. Shruti Patil",
feedback:
"I selected a 7 seater car through Ruturaj Enterprises for a weekend outing with friends. The vehicle was suitable for our group and gave us the flexibility to manage our sightseeing schedule. The booking process was easy and the trip was comfortable.",
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
  "name": "7 Seater car on rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/7-seater-car-on-rent-in-pune.webp",
  "description":
    "7 Seater car on rent in Pune for family holidays, group travel, airport transfers, local sightseeing, corporate journeys and outstation trips. Ruturaj Enterprises offers spacious 7 seater car rental, hire and booking options with AC comfort, convenient pickup arrangements and experienced drivers. These vehicles are suitable for one-way and round-trip travel, weekend getaways, wedding transportation, family tours and longer journeys from Pune to popular destinations.",
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
    "url": "https://ruturajenterprises.com/7-seater-car-on-rent-in-pune"
  }
};







    return (
        <div>
<Helmet>
  <title>
    7 Seater car on rent in Pune | 7 Seater Car Rental Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="7 Seater car on rent in Pune for family trips, group travel, airport transfers, sightseeing and outstation journeys. Hire spacious AC and luxury 7 seater cars with Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="7 Seater Car Rental Pune, 7 Seater Car Hire Pune, 7 Seater Car Booking Pune, 7 Seater Car on Rent Pune, 7 Seater SUV Rental Pune, 7 Seater AC Car Pune, 7 Seater Luxury Car Pune, 7 Seater Car for Outstation Pune, 7 Seater Car for Family Trip Pune, 7 Seater Car for Group Travel Pune, 7 Seater Car for Corporate Travel Pune, 7 Seater Car for Wedding Pune, 7 Seater Car for Airport Pickup Pune, 7 Seater Car for Airport Drop Pune, 7 Seater Car for Local Travel Pune, 7 Seater Car for Sightseeing Pune, 7 Seater Car for One Day Trip Pune, 7 Seater Car for Weekend Trip Pune, 7 Seater Car for Holiday Pune, 7 Seater One Way Car Pune, 7 Seater Round Trip Car Pune, 7 Seater Outstation Car Rental Pune, 7 Seater Outstation Car Hire Pune, 7 Seater Outstation Car Booking Pune, 7 Seater SUV on Rent Pune, 7 Seater SUV Hire Pune, 7 Seater SUV Booking Pune, 7 Seater AC SUV Pune, 7 Seater Luxury SUV Pune, 7 Seater Family Car Pune, 7 Seater Family Car Rental Pune, 7 Seater Family Car Hire Pune, 7 Seater Family Car Booking Pune, 7 Seater Group Car Rental Pune, 7 Seater Private Car Pune, 7 Seater Private Car Hire Pune, 7 Seater Private Car Rental Pune, 7 Seater Car with Driver Pune, 7 Seater Car Rental with Driver Pune, 7 Seater Car Hire with Driver Pune, 7 Seater Taxi Pune, 7 Seater Taxi Service Pune, 7 Seater Taxi Booking Pune, 7 Seater Taxi Hire Pune, 7 Seater Taxi Rental Pune, 7 Seater Airport Cab Pune, 7 Seater Airport Taxi Pune, 7 Seater Airport Transfer Pune, 7 Seater Car Near Me Pune, Affordable 7 Seater Car Rental Pune, Comfortable 7 Seater Car Pune, Premium 7 Seater Car Rental Pune, 7 Seater Car Rental Service Pune, 7 Seater Car Hire Service Pune, 7 Seater Car Booking Service Pune, 7 Seater Car for Goa Trip Pune, 7 Seater Car for Mumbai Trip Pune, 7 Seater Car for Lonavala Trip Pune, 7 Seater Car for Mahabaleshwar Trip Pune, 7 Seater Car for Nashik Trip Pune, 7 Seater Car for Shirdi Trip Pune, 7 Seater Car for Kolhapur Trip Pune, 7 Seater Car for Konkan Trip Pune, Ruturaj Enterprises 7 Seater Car Pune"
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
                            <img src='/images/keyword/61.jpg' alt='img' className='img-fluid' />
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

export default Sevanseatercaronrent;