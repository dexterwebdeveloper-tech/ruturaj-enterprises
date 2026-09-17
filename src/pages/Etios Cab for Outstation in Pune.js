import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Etioncabforout() {


const cardData = {
keyword: "Etios Cab for Outstation in Pune",
headingDescription: "Ruturaj Enterprises provides Etios Cab for Outstation in Pune for families, couples, corporate professionals, tourists, airport passengers, and individuals planning comfortable journeys beyond the city. Etios is a practical choice for one-way transfers, round trips, family visits, business travel, sightseeing, airport transportation, and long-distance road journeys. Customers can select AC, affordable, driver-operated, tourist, intercity, one-way, round-trip, and outstation travel arrangements according to their destination, passenger requirements, luggage, and schedule.",


topPlaces: [
    {
        title: "Shirdi",
        description: "Shirdi is a major pilgrimage destination visited by families, devotees, and tourists throughout the year. An Etios cab provides a convenient private travel option from Pune, allowing passengers to maintain a flexible departure and return schedule."
    },
    {
        title: "Mahabaleshwar",
        description: "Mahabaleshwar is a popular hill station featuring viewpoints, valleys, strawberry farms, and scenic surroundings. A private Etios cab is suitable for couples, families, and small groups looking for a comfortable road journey from Pune."
    },
    {
        title: "Nashik",
        description: "Nashik combines religious attractions, historic sites, vineyards, and scenic locations, making it suitable for different types of travelers. An Etios cab can provide direct transportation from Pune for business visits, family travel, sightseeing, or weekend plans."
    },
    {
        title: "Kolhapur",
        description: "Kolhapur is known for its temples, heritage attractions, cuisine, and cultural significance. Travelers from Pune can use an Etios cab for a convenient intercity journey with private pickup and destination drop arrangements."
    },
    {
        title: "Goa",
        description: "Goa is a popular long-distance destination for beach holidays, family vacations, group trips, and leisure travel. An Etios cab is a practical option for passengers who prefer a private road journey with flexible stops along the route."
    },
    {
        title: "Alibaug",
        description: "Alibaug offers beaches, coastal attractions, forts, and relaxed weekend experiences close to Pune and Mumbai. An Etios cab can make the journey convenient for families and couples carrying luggage and planning a private trip."
    },
    {
        title: "Aurangabad",
        description: "Aurangabad, also known as Chhatrapati Sambhajinagar, provides access to heritage attractions and important tourist destinations. A private Etios cab allows travelers from Pune to reach the city comfortably while keeping their itinerary flexible."
    },
    {
        title: "Satara",
        description: "Satara is surrounded by scenic landscapes, forts, waterfalls, and hill areas that attract travelers throughout the year. Etios cab travel is useful for families and professionals requiring a direct and comfortable Pune-to-Satara journey."
    },
    {
        title: "Bhimashankar",
        description: "Bhimashankar is a prominent pilgrimage and nature destination surrounded by forested hills and scenic landscapes. An Etios cab provides convenient private transportation for devotees, families, and tourists traveling from Pune."
    },
    {
        title: "Udaipur",
        description: "Udaipur is a renowned Rajasthan destination known for lakes, palaces, heritage architecture, and tourism experiences. For travelers planning an extended road journey from Pune, an Etios cab can provide private point-to-point transportation with planned travel arrangements."
    }
],

services: [
    {
        name: "Etios Cab Outstation Pune",
        description: "Etios Cab Outstation Pune provides private transportation for travelers heading to destinations beyond Pune. It is suitable for family visits, holidays, pilgrimages, business travel, sightseeing, and long-distance road journeys."
    },
    {
        name: "Etios Cab Booking Pune",
        description: "Etios Cab Booking Pune allows customers to arrange a suitable vehicle for planned local or intercity travel. Pickup location, destination, journey date, passenger requirements, luggage, and one-way or return arrangements can be coordinated in advance."
    },
    {
        name: "Etios Cab Hire Pune",
        description: "Etios Cab Hire Pune is a practical option for passengers who want a dedicated car for personal, family, corporate, or tourist travel. The vehicle can be arranged for airport transfers, sightseeing, intercity journeys, and outstation requirements."
    },
    {
        name: "Etios Car Rental Pune",
        description: "Etios Car Rental Pune offers a convenient private vehicle option for travelers requiring comfortable transportation around Pune or to destinations outside the city. It can be used for short trips, long journeys, business visits, and family travel."
    },
    {
        name: "Etios Taxi Service Pune",
        description: "Etios Taxi Service Pune provides private point-to-point transportation for individuals, couples, families, and corporate passengers. It is suitable for airport transfers, local movement, sightseeing, intercity travel, and planned outstation trips."
    },
    {
        name: "Etios on Rent Pune",
        description: "Etios on Rent Pune provides access to a practical sedan for personal and professional travel requirements. Customers can use the vehicle for family outings, business travel, airport transfers, tourism, one-way journeys, and round trips."
    },
    {
        name: "AC Etios Cab Pune",
        description: "AC Etios Cab Pune provides an air-conditioned private travel option for passengers looking for a comfortable journey. It is suitable for city transfers as well as extended road trips where maintaining a comfortable cabin environment is important."
    },
    {
        name: "Etios Outstation Taxi Pune",
        description: "Etios Outstation Taxi Pune is designed for travelers heading to cities, pilgrimage destinations, tourist locations, and family destinations outside Pune. The service provides a private vehicle arrangement for one-way or return journeys."
    },
    {
        name: "Etios for Family Trip Pune",
        description: "Etios for Family Trip Pune provides a convenient private car for parents, children, relatives, and small family groups. Families can plan comfortable road journeys with flexible pickup, breaks, sightseeing stops, and destination transfers."
    },
    {
        name: "Etios for Corporate Travel Pune",
        description: "Etios for Corporate Travel Pune is suitable for employees, business professionals, clients, and executives traveling for meetings, site visits, conferences, and official work. Private transportation helps maintain a planned schedule while providing direct pickup and drop."
    },
    {
        name: "Etios Airport Pickup Pune",
        description: "Etios Airport Pickup Pune provides private transportation between Pune Airport and residences, hotels, offices, railway stations, or other destinations. The service is useful for passengers who prefer direct travel without depending on shared transportation."
    },
    {
        name: "Etios One Way Cab Pune",
        description: "Etios One Way Cab Pune is suitable when passengers need transportation from Pune to another city without requiring a return trip in the same vehicle. It can support personal visits, relocation, airport connections, business travel, and intercity transfers."
    },
    {
        name: "Etios Round Trip Cab Pune",
        description: "Etios Round Trip Cab Pune provides transportation for both onward and return journeys. It works well for family holidays, pilgrimages, sightseeing tours, business visits, and weekend travel where a planned return to Pune is required."
    },
    {
        name: "Etios Long Distance Cab Pune",
        description: "Etios Long Distance Cab Pune is suitable for extended road journeys involving multiple cities, family visits, tourism, business travel, and personal trips. Private transportation gives passengers greater flexibility over pickup times, stops, and travel planning."
    },
    {
        name: "Etios Tourist Cab Pune",
        description: "Etios Tourist Cab Pune provides private transportation for visitors exploring Pune, Maharashtra, and destinations in nearby states. Travelers can plan customized sightseeing routes and combine several attractions during their journey."
    },
    {
        name: "Affordable Etios Cab Pune",
        description: "Affordable Etios Cab Pune offers a practical sedan option for travelers who want comfortable private transportation while keeping their trip economical. It can be arranged for local travel, airport transfers, one-way trips, round trips, and outstation journeys."
    },
    {
        name: "Etios Near Me Pune",
        description: "Etios Near Me Pune helps customers looking for a convenient Etios cab pickup option within Pune. The vehicle can be arranged for local transfers, airport transportation, family travel, sightseeing, and destinations outside the city."
    },
    {
        name: "Etios Driver Car Rental Pune",
        description: "Etios Driver Car Rental Pune provides a driver-operated vehicle so passengers can focus on their journey rather than navigation, traffic, parking, and driving. It is useful for families, tourists, corporate professionals, and long-distance travelers."
    },
    {
        name: "Etios Intercity Cab Pune",
        description: "Etios Intercity Cab Pune provides private transportation between Pune and other cities for business, family, tourism, and personal requirements. Passengers can choose suitable one-way or return arrangements based on their itinerary."
    },
    {
        name: "Etios Outstation Car Hire Pune",
        description: "Etios Outstation Car Hire Pune provides a dedicated sedan for journeys outside Pune. It is suitable for holidays, pilgrimages, family functions, business visits, and long-distance travel requiring private transportation."
    },
    {
        name: "Etios Travel Taxi Pune",
        description: "Etios Travel Taxi Pune provides a convenient transportation solution for tourists, families, corporate travelers, and individuals. The service can be used for airport transfers, sightseeing, intercity travel, weekend trips, and longer journeys."
    },
    {
        name: "Etios Rental Service Pune",
        description: "Etios Rental Service Pune provides flexible private car arrangements for different travel requirements. Customers can use the service for local transportation, airport trips, family journeys, corporate travel, tourist routes, and outstation destinations."
    }
],

tableData: [
    ["Etios Cab Outstation Pune", "Private Etios transportation for journeys to destinations outside Pune."],
    ["Etios Cab Booking Pune", "Advance Etios booking for planned local, intercity, and outstation travel."],
    ["Etios Cab Hire Pune", "Dedicated Etios cab hire for families, professionals, tourists, and individuals."],
    ["Etios Car Rental Pune", "Practical Etios rental option for local and long-distance journeys."],
    ["Etios Taxi Service Pune", "Private Etios taxi for airport, city, intercity, and tourist transportation."],
    ["Etios on Rent Pune", "Etios rental for personal, family, corporate, and travel requirements."],
    ["AC Etios Cab Pune", "Air-conditioned Etios cab for comfortable private transportation."],
    ["Etios Outstation Taxi Pune", "Outstation Etios taxi for one-way and return road journeys."],
    ["Etios for Family Trip Pune", "Comfortable private Etios transportation for family holidays and visits."],
    ["Etios for Corporate Travel Pune", "Etios cab option for meetings, site visits, clients, and business travel."],
    ["Etios Airport Pickup Pune", "Private airport pickup and drop transportation using an Etios cab."],
    ["Etios One Way Cab Pune", "One-way Etios transfer for intercity and destination travel."],
    ["Etios Round Trip Cab Pune", "Return Etios transportation for holidays, business trips, and sightseeing."],
    ["Etios Long Distance Cab Pune", "Etios cab suitable for extended intercity and long-distance road journeys."],
    ["Etios Tourist Cab Pune", "Private Etios cab for customized tourist routes and sightseeing."],
    ["Affordable Etios Cab Pune", "Economical Etios option for practical private transportation."],
    ["Etios Near Me Pune", "Convenient Etios pickup option for customers searching within Pune."],
    ["Etios Driver Car Rental Pune", "Driver-operated Etios rental for convenient and relaxed travel."],
    ["Etios Intercity Cab Pune", "Private Etios transportation between Pune and other cities."],
    ["Etios Outstation Car Hire Pune", "Dedicated Etios hire for destinations beyond Pune."],
    ["Etios Travel Taxi Pune", "Etios travel taxi for family, tourist, corporate, and personal journeys."],
    ["Etios Rental Service Pune", "Flexible Etios rental service for local, airport, and outstation travel."]
],

whychoose: [
    {
        WhyChooseheading: "Practical Sedan for Outstation Travel",
        WhyChoosedescription: "Etios is a practical choice for passengers looking for private sedan transportation on intercity and outstation routes. It works well for families, couples, corporate travelers, and individuals planning longer road journeys."
    },
    {
        WhyChooseheading: "Private Point-to-Point Journey",
        WhyChoosedescription: "Travelers can enjoy direct pickup and drop without sharing the vehicle with unrelated passengers. This makes the journey easier to coordinate around personal schedules, destinations, and planned stops."
    },
    {
        WhyChooseheading: "Comfortable Family Trips",
        WhyChoosedescription: "Families can travel together in a dedicated car while keeping their itinerary flexible. The service is useful for holidays, family functions, pilgrimages, weekend trips, and visits to relatives."
    },
    {
        WhyChooseheading: "Useful for Business Travel",
        WhyChoosedescription: "Corporate professionals can use an Etios cab for meetings, client visits, conferences, site inspections, and intercity business requirements. Direct transportation can help travelers manage their schedules more efficiently."
    },
    {
        WhyChooseheading: "Airport Travel Made Convenient",
        WhyChoosedescription: "Airport pickup and drop arrangements provide a straightforward way to travel between Pune Airport and the required destination. Private cab service is particularly useful when passengers have luggage or are traveling with family members."
    },
    {
        WhyChooseheading: "One-Way and Return Options",
        WhyChoosedescription: "Different trip structures can be arranged according to the travel plan, including one-way transfers and round trips. This gives passengers flexibility when they are visiting another city, returning to Pune, or planning a multi-day journey."
    },
    {
        WhyChooseheading: "Driver-Operated Travel",
        WhyChoosedescription: "A driver-operated Etios allows passengers to relax during the journey instead of managing traffic, navigation, parking, and unfamiliar roads. This arrangement is useful for tourists, families, business travelers, and long-distance passengers."
    },
    {
        WhyChooseheading: "Flexible Destination Coverage",
        WhyChoosedescription: "Etios cab arrangements can support travel to hill stations, pilgrimage locations, business cities, coastal destinations, and other intercity routes. Customers can select an arrangement based on their destination, passenger needs, luggage, journey duration, and preferred schedule."
    }
]


};







const faqData = [
{
question: "How can I book an Etios cab for outstation travel in Pune?",
answer: "An Etios cab for outstation travel can be arranged by providing the Pune pickup location, destination, travel date, preferred departure time, passenger count, and trip type. Ruturaj Enterprises can coordinate the cab according to the route, luggage requirements, and planned travel schedule."
},
{
question: "Which destinations can I travel to by Etios from Pune?",
answer: "Etios outstation cab journeys can be planned from Pune to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Kolhapur, Aurangabad, Goa, and other cities or tourist locations. The route can be selected according to the travel itinerary and duration."
},
{
question: "Is Etios suitable for long-distance outstation travel?",
answer: "Etios can be a practical option for passengers looking for a private car for intercity travel. It can suit small groups traveling with moderate luggage and is useful for family visits, business journeys, sightseeing trips, and other planned outstation transportation requirements."
},
{
question: "Can I book a one-way Etios cab from Pune?",
answer: "One-way Etios cab service is suitable when transportation is required from Pune to a selected destination without planning the same vehicle for the return journey. Pickup details, destination, travel date, departure time, passenger count, and luggage information can be shared while making the booking."
},
{
question: "Is round-trip Etios cab service available from Pune?",
answer: "A round-trip Etios can be arranged for travelers who plan to return to Pune after completing their visit. This option can work for family holidays, business travel, pilgrimages, sightseeing, and short outstation trips where the onward and return schedule is known."
},
{
question: "Can I hire an Etios cab from Pune for a family trip?",
answer: "Families traveling as a small group can consider an Etios for outstation journeys when they prefer a private vehicle. The trip can be planned around family schedules, luggage requirements, sightseeing stops, meal breaks, and the preferred return timing."
},
{
question: "Can Etios be used for corporate outstation travel?",
answer: "Corporate travelers can arrange an Etios for client meetings, business visits, site inspections, conferences, airport connections, and intercity work requirements. Providing the complete business itinerary helps coordinate pickup locations, destination timings, and the overall travel schedule."
},
{
question: "Can I hire an Etios for sightseeing from Pune?",
answer: "An Etios can be used for private sightseeing trips from Pune to nearby tourist destinations. Travelers can plan multiple stops and breaks according to their itinerary, making the vehicle useful for weekend outings, family tours, and short leisure journeys."
},
{
question: "What information is required to book an Etios for outstation travel?",
answer: "The main booking details include the Pune pickup point, destination, travel date, preferred departure time, number of passengers, luggage requirements, and whether the trip is one-way or round trip. Sharing complete information helps Ruturaj Enterprises organize the cab around the actual travel requirement."
},
{
question: "Why choose Ruturaj Enterprises for Etios cab for outstation in Pune?",
answer: "Ruturaj Enterprises arranges Etios cab transportation from Pune for outstation journeys, family travel, business trips, sightseeing, and intercity transportation. The travel plan can be coordinated according to the route, passenger requirements, luggage, travel date, departure schedule, and selected journey type."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Ajay More",
feedback:
"I booked an Etios from Ruturaj Enterprises for an outstation journey from Pune. The car was a suitable choice for our small group, and traveling privately made the long-distance trip easier to manage. The booking coordination was simple and the overall journey was comfortable.",
rating: 5
},
{
id: 2,
name: "Miss. Tanvi Desai",
feedback:
"For a family visit outside Pune, I arranged an Etios cab through Ruturaj Enterprises. The private vehicle gave us flexibility with our departure time and made traveling with our luggage convenient. The complete transportation experience was smooth and well organized.",
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
  "name": "Etios Cab for Outstation in Pune",
  "image": "https://ruturajenterprises.com/assets/images/etios-cab-for-outstation-in-pune.webp",
  "description":
    "Etios Cab for Outstation in Pune for comfortable and convenient long-distance travel, family trips, corporate journeys, airport transfers, sightseeing and weekend getaways. Ruturaj Enterprises offers Etios cab booking, hire and rental services with AC comfort, experienced drivers and flexible one-way or round-trip travel options. Etios cabs are suitable for individuals, families and business travellers planning reliable outstation journeys from Pune to nearby cities and popular destinations.",
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
    "url": "https://ruturajenterprises.com/etios-cab-for-outstation-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Etios Cab for Outstation in Pune | Etios Cab Outstation Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Etios Cab for Outstation in Pune for family trips, corporate travel, airport transfers, sightseeing and long-distance journeys. Hire comfortable AC Etios cabs for one-way and round-trip travel with Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Etios Cab Outstation Pune, Etios Cab Booking Pune, Etios Cab Hire Pune, Etios Car Rental Pune, Etios Taxi Service Pune, Etios on Rent Pune, AC Etios Cab Pune, Etios Outstation Taxi Pune, Etios for Family Trip Pune, Etios for Corporate Travel Pune, Etios Airport Pickup Pune, Etios One Way Cab Pune, Etios Round Trip Cab Pune, Etios Outstation Cab Pune, Etios Outstation Car Rental Pune, Etios Outstation Car Hire Pune, Etios Outstation Cab Booking Pune, Etios Outstation Taxi Booking Pune, Etios Outstation Taxi Hire Pune, Etios Outstation Taxi Rental Pune, Etios Car on Rent Pune, Etios Car Hire Pune, Etios Car Booking Pune, Etios Cab Rental Pune, Etios Cab Service Pune, Etios Taxi Pune, Etios Taxi Booking Pune, Etios Taxi Hire Pune, Etios Taxi Rental Pune, Etios AC Taxi Pune, AC Etios Taxi Pune, Etios Cab with Driver Pune, Etios Taxi with Driver Pune, Etios Car with Driver Pune, Etios Private Cab Pune, Etios Private Taxi Pune, Etios Airport Cab Pune, Etios Airport Taxi Pune, Etios Airport Drop Pune, Etios Airport Transfer Pune, Etios Local Cab Pune, Etios Local Taxi Pune, Etios for Local Travel Pune, Etios for Group Travel Pune, Etios for Corporate Events Pune, Etios for Wedding Pune, Etios for Marriage Pune, Etios for Sightseeing Pune, Etios for Pune Darshan, Etios for One Day Trip Pune, Etios for Weekend Trip Pune, Etios for Holiday Pune, Etios One Way Taxi Pune, Etios Round Trip Taxi Pune, Etios One Way Car Rental Pune, Etios Round Trip Car Rental Pune, Etios One Way Outstation Pune, Etios Round Trip Outstation Pune, Affordable Etios Cab Pune, Comfortable Etios Cab Pune, Etios Cab Rental Service Pune, Etios Cab Hire Service Pune, Etios Cab Booking Service Pune, Etios Taxi Rental Service Pune, Etios Taxi Hire Service Pune, Etios Taxi Booking Service Pune, Etios Cab Near Me Pune, Etios Taxi Near Me Pune, Etios for Goa Trip Pune, Etios for Mumbai Trip Pune, Etios for Lonavala Trip Pune, Etios for Mahabaleshwar Trip Pune, Etios for Nashik Trip Pune, Etios for Shirdi Trip Pune, Etios for Kolhapur Trip Pune, Etios for Konkan Trip Pune, Etios Outstation Cab with Driver Pune, Etios Long Distance Cab Pune, Ruturaj Enterprises Etios Cab Pune"
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
                            <img src='/images/keyword/62.jpg' alt='img' className='img-fluid' />
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

export default Etioncabforout;