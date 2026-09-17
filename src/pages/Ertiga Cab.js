import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Ertigacab() {


const cardData = {
keyword: "Ertiga Cab",
headingDescription: "Ruturaj Enterprises offers comfortable Ertiga Cab services in Pune for families, groups, tourists, corporate travelers, airport passengers, wedding functions, and long-distance journeys. The spacious Ertiga is a practical choice for passengers who need comfortable seating, luggage capacity, air conditioning, and flexible travel arrangements for local trips as well as destinations outside Pune. Customers can choose one-way, round-trip, airport, sightseeing, family, group, corporate, luxury, affordable, and outstation travel options according to their itinerary.",


topPlaces: [
    {
        title: "Pune Airport",
        description: "Pune Airport is an important starting point for travelers arriving in or departing from the city. An Ertiga cab provides convenient private transportation for passengers with luggage, families, business travelers, and groups connecting the airport with hotels or nearby destinations."
    },
    {
        title: "Lonavala",
        description: "Lonavala is a popular hill destination known for scenic valleys, viewpoints, forts, lakes, and monsoon landscapes. An Ertiga is well suited for families and small groups looking for comfortable transportation from Pune for a day trip or weekend getaway."
    },
    {
        title: "Mahabaleshwar",
        description: "Mahabaleshwar attracts tourists with its viewpoints, waterfalls, lakes, temples, and pleasant hill-station surroundings. The spacious Ertiga can provide a convenient private travel option for families carrying luggage and planning multiple sightseeing stops."
    },
    {
        title: "Shirdi",
        description: "Shirdi is a major pilgrimage destination visited by families and devotees throughout the year. A private Ertiga cab allows passengers to travel together from Pune with convenient pickup, comfortable seating, luggage space, and flexible return arrangements."
    },
    {
        title: "Alibaug",
        description: "Alibaug offers beaches, coastal scenery, forts, and relaxing holiday experiences near Maharashtra's Konkan region. Families and groups can use an Ertiga for a comfortable road journey while keeping the sightseeing itinerary flexible."
    },
    {
        title: "Nashik",
        description: "Nashik combines pilgrimage attractions, vineyards, heritage locations, and scenic surroundings, making it suitable for different types of travelers. An Ertiga cab can accommodate families or small groups traveling from Pune for tourism, business, or religious visits."
    },
    {
        title: "Goa",
        description: "Goa is a popular destination for extended holidays, family vacations, group tours, and road trips from Pune. An Ertiga provides a practical private transportation option for travelers who want comfortable seating and convenient luggage accommodation during the long journey."
    },
    {
        title: "Kolhapur",
        description: "Kolhapur is known for its temples, historic attractions, local culture, and access to nearby scenic areas. Travelers from Pune can use an Ertiga for direct transportation, family visits, sightseeing, or round-trip journeys."
    },
    {
        title: "Bhimashankar",
        description: "Bhimashankar is a popular pilgrimage and nature destination surrounded by the Western Ghats. An Ertiga cab is suitable for families and small groups planning a comfortable temple visit combined with scenic stops around the region."
    },
    {
        title: "Matheran",
        description: "Matheran is a scenic hill destination known for viewpoints, greenery, and a vehicle-free central area. Travelers can use an Ertiga for the road journey from Pune and conveniently reach the designated vehicle-accessible area before continuing their local exploration."
    }
],

services: [
    {
        name: "Ertiga Cab Booking Pune",
        description: "Ertiga Cab Booking Pune provides a convenient way to arrange a spacious private vehicle for local travel, airport transfers, sightseeing, family trips, and outstation journeys. Customers can coordinate the pickup point, travel date, passenger requirements, and preferred itinerary in advance."
    },
    {
        name: "Ertiga Cab Hire Pune",
        description: "Ertiga Cab Hire Pune is suitable for travelers who need a dedicated vehicle for personal, family, corporate, tourist, or special-event transportation. The private cab arrangement allows passengers to plan their journey around their own schedule and route."
    },
    {
        name: "Ertiga Cab Rental Pune",
        description: "Ertiga Cab Rental Pune offers flexible private transportation for day trips, weekend holidays, airport travel, sightseeing, and long-distance journeys. Its spacious cabin makes it a practical option for passengers traveling together with luggage."
    },
    {
        name: "Ertiga Taxi Service Pune",
        description: "Ertiga Taxi Service Pune provides private taxi transportation for city travel and destinations outside Pune. The service can be arranged for families, groups, corporate passengers, tourists, airport transfers, and customized travel requirements."
    },
    {
        name: "Ertiga Car on Rent Pune",
        description: "Ertiga Car on Rent Pune is useful for passengers looking for a comfortable and spacious vehicle for personal travel, sightseeing, family functions, and road trips. Rental arrangements can be planned according to the destination, trip duration, and passenger requirements."
    },
    {
        name: "AC Ertiga Cab Pune",
        description: "AC Ertiga Cab Pune provides a climate-controlled private travel environment for passengers who prefer additional comfort during their journey. It is suitable for families, children, senior citizens, tourists, and corporate travelers covering short or long distances."
    },
    {
        name: "Ertiga for Outstation Pune",
        description: "Ertiga for Outstation Pune is suitable for travelers visiting destinations across Maharashtra and other states. The spacious vehicle provides a practical combination of passenger comfort and luggage capacity for family holidays, business trips, pilgrimages, and road tours."
    },
    {
        name: "Ertiga for Family Trip Pune",
        description: "Ertiga for Family Trip Pune offers a private travel option for parents, children, relatives, and senior family members traveling together. Passengers can enjoy convenient pickup, shared seating, luggage space, and flexible breaks during their journey."
    },
    {
        name: "Ertiga for Group Travel Pune",
        description: "Ertiga for Group Travel Pune is a convenient choice for small groups of friends, colleagues, and relatives who want to travel together. The vehicle provides a private environment while making it easier to coordinate pickup, route, luggage, and sightseeing stops."
    },
    {
        name: "Ertiga Airport Pickup Pune",
        description: "Ertiga Airport Pickup Pune provides private airport transportation for arriving passengers, families, corporate travelers, and groups. The spacious vehicle is useful when passengers have multiple bags or require direct transportation from the airport to their hotel or destination."
    },
    {
        name: "Ertiga One Way Cab Pune",
        description: "Ertiga One Way Cab Pune is designed for passengers who require a private transfer without booking the same vehicle for the return journey. It can be useful for intercity transfers, relocation, airport connections, personal visits, and onward travel plans."
    },
    {
        name: "Ertiga Round Trip Cab Pune",
        description: "Ertiga Round Trip Cab Pune provides transportation for both the onward and return portions of a planned journey. It is suitable for sightseeing, family visits, weekend holidays, pilgrimages, and business trips where passengers want a convenient return arrangement."
    },
    {
        name: "Luxury Ertiga Cab Pune",
        description: "Luxury Ertiga Cab Pune offers a comfortable private travel option for passengers who want a more premium journey experience. It can be suitable for special occasions, executive travel, family vacations, airport transfers, and extended road journeys."
    },
    {
        name: "Affordable Ertiga Cab Pune",
        description: "Affordable Ertiga Cab Pune provides a practical private vehicle option for passengers seeking comfortable travel while maintaining a planned budget. It works well for families, couples, small groups, students, and tourists traveling within or beyond Pune."
    },
    {
        name: "Ertiga Tourist Taxi Pune",
        description: "Ertiga Tourist Taxi Pune is suitable for travelers exploring Pune, Maharashtra, and popular destinations outside the city. A private vehicle allows tourists to customize sightseeing routes, include multiple stops, and coordinate their travel according to the available time."
    },
    {
        name: "Ertiga Corporate Cab Pune",
        description: "Ertiga Corporate Cab Pune provides private transportation for professionals traveling to meetings, offices, industrial locations, conferences, client visits, and business events. The spacious vehicle can be useful when colleagues need to travel together with work-related luggage."
    },
    {
        name: "Ertiga Wedding Car Pune",
        description: "Ertiga Wedding Car Pune provides comfortable transportation for wedding guests, relatives, family members, and event participants. The vehicle can be incorporated into guest transfers, venue transportation, hotel pickups, and travel between different wedding functions."
    },
    {
        name: "Ertiga Long Distance Cab Pune",
        description: "Ertiga Long Distance Cab Pune is designed for extended road journeys where passengers require comfortable seating and convenient luggage accommodation. It can support family travel, tourism, personal visits, business journeys, and multi-day road trips."
    },
    {
        name: "Ertiga Outstation Taxi Pune",
        description: "Ertiga Outstation Taxi Pune provides dedicated transportation for travelers heading to destinations outside Pune. The service can be arranged for one-way transfers, return journeys, sightseeing programs, pilgrimage trips, and family holidays."
    },
    {
        name: "Ertiga Car Rental Service Pune",
        description: "Ertiga Car Rental Service Pune offers flexible private transportation for local and outstation requirements. Customers can plan vehicle usage around sightseeing, airport travel, family functions, corporate movement, weekend trips, and longer road journeys."
    },
    {
        name: "Ertiga Near Me Pune",
        description: "Ertiga Near Me Pune helps travelers looking for a convenient Ertiga cab option from their preferred area in Pune. The service can be arranged for local transportation, airport transfers, sightseeing, family trips, and outstation travel."
    },
    {
        name: "6 Seater Ertiga Cab Pune",
        description: "6 Seater Ertiga Cab Pune is suitable for small families and groups who want to travel together in a spacious private vehicle. It can be used for city transfers, airport travel, sightseeing, weekend getaways, and longer intercity journeys."
    }
],

tableData: [
    ["Ertiga Cab Booking Pune", "Private Ertiga booking for family, airport, sightseeing, corporate, and outstation travel."],
    ["Ertiga Cab Hire Pune", "Dedicated Ertiga cab hire for personal, tourist, corporate, and event transportation."],
    ["Ertiga Cab Rental Pune", "Flexible Ertiga rental for day trips, holidays, sightseeing, and road journeys."],
    ["Ertiga Taxi Service Pune", "Private Ertiga taxi service for local and intercity transportation."],
    ["Ertiga Car on Rent Pune", "Spacious Ertiga vehicle arrangement for personal and family travel."],
    ["AC Ertiga Cab Pune", "Air-conditioned Ertiga cab for comfortable short and long-distance journeys."],
    ["Ertiga for Outstation Pune", "Spacious private vehicle for destinations outside Pune."],
    ["Ertiga for Family Trip Pune", "Comfortable Ertiga transportation for families and senior travelers."],
    ["Ertiga for Group Travel Pune", "Private group travel option for friends, relatives, and colleagues."],
    ["Ertiga Airport Pickup Pune", "Convenient airport pickup and transfer service using an Ertiga."],
    ["Ertiga One Way Cab Pune", "One-way Ertiga transfer for intercity and destination travel."],
    ["Ertiga Round Trip Cab Pune", "Return Ertiga transportation for holidays, visits, and sightseeing."],
    ["Luxury Ertiga Cab Pune", "Premium Ertiga option for comfortable executive and special travel."],
    ["Affordable Ertiga Cab Pune", "Budget-friendly private Ertiga transportation for different travel needs."],
    ["Ertiga Tourist Taxi Pune", "Private tourist taxi for customized sightseeing and destination tours."],
    ["Ertiga Corporate Cab Pune", "Corporate transportation for meetings, business visits, and events."],
    ["Ertiga Wedding Car Pune", "Ertiga transportation for wedding guests, functions, and venue transfers."],
    ["Ertiga Long Distance Cab Pune", "Comfortable Ertiga option for extended road journeys."],
    ["Ertiga Outstation Taxi Pune", "Private Ertiga taxi for travel to destinations beyond Pune."],
    ["Ertiga Car Rental Service Pune", "Flexible Ertiga rental service for local and outstation requirements."],
    ["Ertiga Near Me Pune", "Convenient Ertiga cab option for customers seeking nearby Pune pickup."],
    ["6 Seater Ertiga Cab Pune", "Spacious six-seater Ertiga option for families and small groups."]
],

whychoose: [
    {
        WhyChooseheading: "Spacious Travel for Small Groups",
        WhyChoosedescription: "The Ertiga is a practical choice when several passengers want to travel together without splitting into multiple smaller vehicles. Its spacious passenger area and luggage capacity make it suitable for families and small groups."
    },
    {
        WhyChooseheading: "Comfortable Private Journeys",
        WhyChoosedescription: "Private transportation allows passengers to travel together without sharing the vehicle with unknown travelers. Flexible pickup points, planned breaks, and direct routes make the journey more convenient."
    },
    {
        WhyChooseheading: "Useful for Airport Transfers",
        WhyChoosedescription: "Travelers with multiple bags can benefit from a spacious vehicle for airport pickup and drop services. Families and corporate passengers can travel directly between Pune Airport and their preferred destination."
    },
    {
        WhyChooseheading: "Suitable for Outstation Tours",
        WhyChoosedescription: "From nearby hill stations to longer intercity destinations, an Ertiga can be arranged for different types of road journeys. It is suitable for family vacations, pilgrimages, business travel, and sightseeing programs."
    },
    {
        WhyChooseheading: "Flexible One-Way or Return Trips",
        WhyChoosedescription: "Different travel plans can be supported through one-way and round-trip arrangements. Passengers can select the option that best matches their destination, stay duration, and return requirements."
    },
    {
        WhyChooseheading: "Family and Group Friendly",
        WhyChoosedescription: "Families and small groups can remain together throughout the journey instead of coordinating separate transportation. The arrangement is useful for holidays, functions, airport travel, and destination sightseeing."
    },
    {
        WhyChooseheading: "Corporate and Event Transportation",
        WhyChoosedescription: "An Ertiga can also support professional movement and special occasions where a small group needs private transportation. It can be used for client visits, meetings, conferences, wedding functions, and guest transfers."
    },
    {
        WhyChooseheading: "Multiple Travel Choices",
        WhyChoosedescription: "Travelers can consider AC, luxury, affordable, airport, tourist, family, corporate, one-way, round-trip, and outstation arrangements. This flexibility makes it easier to select a service according to the journey type and passenger requirements."
    }
]


};




const faqData = [
{
question: "How can I book an Ertiga cab?",
answer: "An Ertiga cab can be booked by sharing the pickup location, destination, travel date, preferred pickup time, and number of passengers. Ruturaj Enterprises can arrange the vehicle according to your journey type, luggage requirements, route, and preferred travel schedule."
},
{
question: "Is Ertiga cab suitable for family travel?",
answer: "Ertiga is a practical choice for families who want a spacious private vehicle for city trips, airport transfers, sightseeing, and outstation journeys. Its seating arrangement can make group travel more convenient while providing useful space for passenger belongings and luggage."
},
{
question: "Can I hire an Ertiga cab for outstation travel?",
answer: "Outstation Ertiga cab bookings can be arranged for destinations such as Lonavala, Mahabaleshwar, Mumbai, Nashik, Shirdi, Kolhapur, Goa, and other routes. The trip can be planned as a one-way or round-trip journey depending on the travel itinerary."
},
{
question: "Can I book an Ertiga for local travel?",
answer: "Local Ertiga cab service can be useful for family outings, business visits, shopping, airport transportation, city sightseeing, and other daily travel needs. A private vehicle allows passengers to follow a convenient schedule without coordinating multiple modes of transportation."
},
{
question: "Is Ertiga available for airport transfers?",
answer: "Passengers can arrange an Ertiga for airport pickup or drop-off when additional seating and luggage space are required. Flight timing, airport details, passenger count, luggage, and the final destination can be shared in advance to coordinate the transportation."
},
{
question: "Can I book an Ertiga cab for a one-way journey?",
answer: "One-way Ertiga cab service is suitable when you need transportation only from the pickup location to a selected destination. The booking can be organized around your travel date, departure time, passenger requirements, luggage, and exact pickup and drop points."
},
{
question: "Is Ertiga suitable for weekend trips from Pune?",
answer: "An Ertiga can be a convenient option for weekend travel from Pune to nearby destinations and tourist locations. Families or small groups can use the vehicle for short holidays, sightseeing, resort visits, and round trips while keeping the journey flexible."
},
{
question: "Can I hire an Ertiga cab for corporate travel?",
answer: "Corporate travelers can use an Ertiga for client visits, meetings, airport transfers, employee transportation, business tours, and intercity travel. The vehicle can be arranged according to the professional itinerary, number of passengers, luggage, and required pickup or drop locations."
},
{
question: "What details are needed to book an Ertiga cab?",
answer: "Important booking information includes the pickup point, destination, travel date, preferred departure time, passenger count, luggage requirements, and whether the journey is local, one-way, or round trip. These details help Ruturaj Enterprises coordinate an appropriate Ertiga cab arrangement."
},
{
question: "Why choose Ruturaj Enterprises for Ertiga cab service?",
answer: "Ruturaj Enterprises offers Ertiga cab booking for local transportation, airport transfers, sightseeing, family trips, corporate travel, and outstation journeys. The travel arrangement can be planned around passenger capacity, luggage, route, vehicle preference, travel date, and the overall itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Nitin Pawar",
feedback:
"I hired an Ertiga from Ruturaj Enterprises for an outstation trip with my family. The vehicle gave us enough space to travel together comfortably with our luggage, and the private cab made the journey easier to manage. The overall experience was convenient and pleasant.",
rating: 5
},
{
id: 2,
name: "Miss. Kavita Shinde",
feedback:
"For a weekend trip from Pune, I chose an Ertiga cab through Ruturaj Enterprises. The vehicle was a good fit for our group, and having private transportation allowed us to manage the trip according to our own schedule. The booking and travel arrangement were smooth.",
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
  "name": "Ertiga Cab",
  "image": "https://ruturajenterprises.com/assets/images/ertiga-cab.webp",
  "description":
    "Ertiga Cab service in Pune for comfortable local travel, airport transfers, outstation journeys, family holidays, group trips, corporate travel, weddings and sightseeing. Ruturaj Enterprises offers Ertiga cab booking, taxi hire and rental options with spacious seating, comfortable interiors, AC facilities and experienced drivers. One-way, round-trip and flexible rental plans make Ertiga suitable for both city travel and longer journeys from Pune.",
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
    "url": "https://ruturajenterprises.com/ertiga-cab"
  }
};





    return (
        <div>
<Helmet>
  <title>
    Ertiga Cab | Ertiga Cab Booking Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Ertiga Cab service in Pune for local, airport and outstation travel. Hire AC Ertiga cabs for family trips, group travel, corporate journeys, sightseeing and one-way or round-trip trips."
  />

  <meta
    name="keywords"
    content="Ertiga Cab Booking Pune, Ertiga Cab Hire Pune, Ertiga Cab Rental Pune, Ertiga Taxi Service Pune, Ertiga Car on Rent Pune, AC Ertiga Cab Pune, Ertiga for Outstation Pune, Ertiga for Family Trip Pune, Ertiga for Group Travel Pune, Ertiga Airport Pickup Pune, Ertiga One Way Cab Pune, Ertiga Round Trip Cab Pune, Ertiga Outstation Cab Pune, Ertiga Outstation Taxi Pune, Ertiga Local Cab Pune, Ertiga Local Taxi Pune, Ertiga Airport Cab Pune, Ertiga Airport Taxi Pune, Ertiga Cab Service Pune, Ertiga Taxi Booking Pune, Ertiga Taxi Hire Pune, Ertiga Taxi Rental Pune, Ertiga Car Rental Pune, Ertiga Car Hire Pune, Ertiga Hire Pune, Ertiga Rental Pune, Ertiga on Rent Pune, Ertiga AC Taxi Pune, AC Ertiga Taxi Pune, Luxury Ertiga Cab Pune, Premium Ertiga Cab Pune, Affordable Ertiga Cab Pune, Ertiga Cab for Outstation Pune, Ertiga Cab for Local Travel Pune, Ertiga Cab for Family Tour Pune, Ertiga Cab for Group Tour Pune, Ertiga Cab for Corporate Travel Pune, Ertiga Cab for Wedding Pune, Ertiga Cab for Marriage Pune, Ertiga Cab for Airport Pickup Pune, Ertiga Cab for Airport Drop Pune, Ertiga Cab for Sightseeing Pune, Ertiga Cab for Pune Darshan, Ertiga Cab for One Day Trip Pune, Ertiga Cab for Multi Day Trip Pune, Ertiga Cab with Driver Pune, Ertiga Taxi with Driver Pune, Ertiga Private Cab Pune, Ertiga Private Taxi Pune, Ertiga One Way Taxi Pune, Ertiga Round Trip Taxi Pune, Ertiga Outstation Car Rental Pune, Ertiga Local Car Rental Pune, Ertiga Family Trip Taxi Pune, Ertiga Group Travel Taxi Pune, Ertiga Corporate Taxi Pune, Ertiga Wedding Taxi Pune, Ertiga Airport Transfer Pune, Ertiga Cab Rental Service Pune, Ertiga Cab Hire Service Pune, Ertiga Cab Booking Service Pune, Ertiga Taxi Rental Service Pune, Ertiga Taxi Hire Service Pune, Ertiga Taxi Booking Service Pune, Ertiga Cab Near Me Pune, Ertiga Taxi Near Me Pune, Comfortable Ertiga Cab Pune, Spacious Ertiga Cab Pune, Ertiga for Goa Trip Pune, Ertiga for Mumbai Trip Pune, Ertiga for Lonavala Trip Pune, Ertiga for Mahabaleshwar Trip Pune, Ertiga for Nashik Trip Pune, Ertiga for Shirdi Trip Pune, Ertiga for Kolhapur Trip Pune, Ertiga for Konkan Trip Pune, Ruturaj Enterprises Ertiga Cab Pune"
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
                            <img src='/images/keyword/57.jpg' alt='img' className='img-fluid' />
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

export default Ertigacab;