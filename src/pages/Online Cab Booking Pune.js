import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Onlinecabbookingpune() {


const cardData = {
keyword: "Online Cab Booking Pune",
headingDescription: "Ruturaj Enterprises makes Online Cab Booking Pune convenient for families, professionals, tourists, students, couples, and groups looking for dependable private transportation. Customers can arrange local rides, airport transfers, outstation journeys, one-way trips, round trips, and popular routes from Pune to Mumbai, Lonavala, Mahabaleshwar, Shirdi, Nashik, Goa, Bhimashankar, and Konkan. With AC and affordable cab options, flexible pickup arrangements, and advance booking support, travelers can plan their journey according to their schedule and vehicle requirements.",


topPlaces: [
    {
        title: "Pune Airport",
        description: "Pune Airport is an important pickup and drop location for passengers traveling for business, holidays, and connecting flights. Online cab booking allows travelers to arrange airport transportation in advance and coordinate convenient pickup or drop-off timing."
    },
    {
        title: "Lonavala",
        description: "Lonavala is a popular hill destination known for scenic viewpoints, lakes, forts, and monsoon landscapes. Travelers can reserve a private cab from Pune online for weekend trips, family outings, sightseeing, or comfortable return journeys."
    },
    {
        title: "Mahabaleshwar",
        description: "Mahabaleshwar attracts visitors with its mountain scenery, viewpoints, waterfalls, temples, and pleasant climate. An advance cab reservation from Pune provides convenient private transportation for families, couples, and groups planning a short vacation."
    },
    {
        title: "Shirdi",
        description: "Shirdi is an important pilgrimage destination visited by devotees throughout the year. Online cab booking from Pune offers a practical way to arrange private transportation for temple visits, family pilgrimages, and same-day or round-trip journeys."
    },
    {
        title: "Nashik",
        description: "Nashik combines religious landmarks, temples, vineyards, and scenic surroundings, making it suitable for both tourism and pilgrimage. A pre-booked cab provides flexibility for travelers who want to visit multiple destinations during their journey."
    },
    {
        title: "Goa",
        description: "Goa is a popular long-distance holiday destination for families, friends, couples, and groups traveling from Pune. Online cab booking can help travelers organize a private vehicle for an extended road journey with luggage and planned stops."
    },
    {
        title: "Bhimashankar",
        description: "Bhimashankar is known for its revered Jyotirlinga temple, forest surroundings, and scenic hill landscape. Travelers can arrange a private cab online from Pune for pilgrimage visits, family trips, sightseeing, or a convenient one-day tour."
    },
    {
        title: "Konkan",
        description: "The Konkan region offers beaches, temples, forts, coastal towns, and scenic landscapes that are ideal for multi-day road trips. Online cab reservations make it easier to organize private transportation for destinations such as Ratnagiri, Ganpatipule, Malvan, and other coastal locations."
    },
    {
        title: "Mumbai",
        description: "Mumbai is a major destination for business, airport transfers, family visits, tourism, and intercity travel from Pune. Travelers can arrange a one-way or round-trip cab online and coordinate pickup and drop according to their preferred schedule."
    },
    {
        title: "Alibaug",
        description: "Alibaug is a convenient coastal getaway from Pune featuring beaches, forts, and relaxing seaside surroundings. A pre-booked private cab is useful for families and groups who want direct transportation with flexibility for sightseeing and return travel."
    }
],

services: [
    {
        name: "Online Cab Booking Pune",
        description: "Online Cab Booking Pune from Ruturaj Enterprises provides a convenient way to arrange private transportation without visiting a booking office. Travelers can share their pickup location, destination, travel date, passenger count, and preferred vehicle requirements to plan local or outstation journeys."
    },
    {
        name: "Cab Booking Service Pune",
        description: "Cab Booking Service Pune supports a wide range of travel requirements, including local transportation, airport transfers, business trips, family journeys, and outstation travel. Advance coordination helps passengers organize suitable pickup and drop arrangements around their schedules."
    },
    {
        name: "Taxi Booking Online Pune",
        description: "Taxi Booking Online Pune offers a simple way to plan private taxi transportation for different destinations. The service can be used for short city journeys as well as longer trips where passengers prefer a dedicated vehicle and flexible travel arrangements."
    },
    {
        name: "Pune Taxi Booking",
        description: "Pune Taxi Booking provides convenient transportation for residents, visitors, business travelers, and tourists who need a private cab. Depending on the trip, passengers can arrange local rides, airport transfers, sightseeing journeys, or intercity travel."
    },
    {
        name: "Pune Cab Rental Online",
        description: "Pune Cab Rental Online allows travelers to arrange a private vehicle for planned journeys based on trip duration, passenger requirements, and itinerary. It is suitable for family outings, business travel, sightseeing programs, weekend trips, and longer road journeys."
    },
    {
        name: "Pune Cab Hire Online",
        description: "Pune Cab Hire Online makes it easier to reserve a dedicated cab for local or outstation transportation. Travelers can coordinate pickup details and choose a suitable travel arrangement instead of depending on shared or fixed-route transportation."
    },
    {
        name: "AC Cab Booking Pune",
        description: "AC Cab Booking Pune is a comfortable option for passengers who prefer air-conditioned transportation for city travel and longer journeys. It is particularly useful for families, children, senior citizens, professionals, and travelers carrying luggage."
    },
    {
        name: "Airport Cab Booking Pune",
        description: "Airport Cab Booking Pune helps passengers organize timely transportation to or from Pune Airport. Advance booking is useful for early-morning flights, late arrivals, business travel, family airport transfers, and passengers who want direct pickup and drop support."
    },
    {
        name: "Outstation Cab Booking Pune",
        description: "Outstation Cab Booking Pune provides private transportation for journeys beyond the city toward nearby and long-distance destinations. Customers can arrange one-way or round-trip travel for holidays, pilgrimages, business visits, family functions, and sightseeing."
    },
    {
        name: "Local Cab Booking Pune",
        description: "Local Cab Booking Pune is designed for convenient transportation within Pune and surrounding areas. It can support daily travel, meetings, shopping, events, station transfers, airport requirements, and other city-based journeys with flexible pickup arrangements."
    },
    {
        name: "One Way Cab Booking Pune",
        description: "One Way Cab Booking Pune is suitable for travelers who need private transportation to a destination without requiring the same vehicle for the return. This option works well for intercity transfers, relocation travel, airport connections, and onward journeys."
    },
    {
        name: "Round Trip Cab Booking Pune",
        description: "Round Trip Cab Booking Pune provides transportation for both the onward and return portions of a planned journey. It is convenient for sightseeing, family visits, pilgrimages, business trips, and same-day or multi-day travel where passengers need organized return transportation."
    },
    {
        name: "Pune to Mumbai Cab Booking",
        description: "Pune to Mumbai Cab Booking offers convenient private transportation between two major Maharashtra cities. Travelers can arrange one-way or round-trip journeys for business meetings, airport transfers, family visits, tourism, and other personal requirements."
    },
    {
        name: "Pune to Lonavala Cab Booking",
        description: "Pune to Lonavala Cab Booking is ideal for weekend trips, family outings, couple getaways, and sightseeing around the hill station. A private cab allows passengers to travel directly from Pune and include convenient stops based on their itinerary."
    },
    {
        name: "Pune to Mahabaleshwar Cab Booking",
        description: "Pune to Mahabaleshwar Cab Booking provides private transportation for travelers visiting the hill station for holidays, family tours, and sightseeing. The cab can be arranged for one-way travel, round trips, or customized travel plans."
    },
    {
        name: "Pune to Shirdi Cab Booking",
        description: "Pune to Shirdi Cab Booking is a practical option for devotees and families planning a visit to Sai Baba Temple. Private transportation provides flexibility around temple schedules, meal breaks, passenger comfort, and return travel."
    },
    {
        name: "Pune to Nashik Cab Booking",
        description: "Pune to Nashik Cab Booking allows travelers to arrange a comfortable private journey for pilgrimage, tourism, business visits, or family travel. The itinerary can also include nearby temples, cultural attractions, and sightseeing locations."
    },
    {
        name: "Pune to Goa Cab Booking",
        description: "Pune to Goa Cab Booking is suitable for travelers planning a long-distance road trip with family, friends, couples, or groups. A private cab offers direct transportation with convenient luggage handling and the ability to plan breaks along the route."
    },
    {
        name: "Pune to Bhimashankar Cab Booking",
        description: "Pune to Bhimashankar Cab Booking provides convenient private transportation for devotees, tourists, families, and small groups visiting the Jyotirlinga temple. The journey can be arranged as a one-day trip, round trip, pilgrimage tour, or customized sightseeing plan."
    },
    {
        name: "Pune to Konkan Cab Booking",
        description: "Pune to Konkan Cab Booking helps travelers organize private road transportation toward beaches, temples, forts, and coastal towns. It is suitable for multi-day holidays covering destinations such as Ratnagiri, Ganpatipule, Malvan, Tarkarli, and other Konkan attractions."
    },
    {
        name: "Affordable Cab Booking Pune",
        description: "Affordable Cab Booking Pune provides a practical private travel option for passengers who want convenient transportation while maintaining a reasonable trip budget. It can be arranged for local journeys, airport transfers, family travel, and selected outstation routes."
    },
    {
        name: "Online Taxi Rental Pune",
        description: "Online Taxi Rental Pune makes it convenient to reserve private transportation for planned travel requirements. Customers can coordinate the vehicle according to passenger count, travel duration, destination, luggage, and whether the journey is local, one-way, or round trip."
    },
    {
        name: "Cab Booking Near Me Pune",
        description: "Cab Booking Near Me Pune helps travelers looking for convenient cab pickup around their preferred Pune location. By arranging the booking in advance, passengers can coordinate a suitable pickup point and travel directly toward their destination without unnecessary waiting."
    }
],

tableData: [
    ["Online Cab Booking Pune", "Convenient online private cab booking for local, airport, and outstation travel."],
    ["Cab Booking Service Pune", "Cab booking support for personal, business, family, airport, and sightseeing journeys."],
    ["Taxi Booking Online Pune", "Online taxi arrangement for convenient city and intercity transportation."],
    ["Pune Taxi Booking", "Private taxi booking for local travel, airport transfers, and outstation trips."],
    ["Pune Cab Rental Online", "Online cab rental for planned family, business, sightseeing, and road trips."],
    ["Pune Cab Hire Online", "Dedicated cab hire arranged conveniently for local and outstation journeys."],
    ["AC Cab Booking Pune", "Air-conditioned cab booking for comfortable travel across short and long routes."],
    ["Airport Cab Booking Pune", "Advance airport cab arrangements for convenient pickup and drop services."],
    ["Outstation Cab Booking Pune", "Private outstation cab booking for holidays, pilgrimages, business, and family travel."],
    ["Local Cab Booking Pune", "Flexible local transportation for city travel and everyday requirements."],
    ["One Way Cab Booking Pune", "One-way private cab arrangements for convenient intercity transfers."],
    ["Round Trip Cab Booking Pune", "Return cab booking for sightseeing, family visits, pilgrimages, and business trips."],
    ["Pune to Mumbai Cab Booking", "Private cab transportation between Pune and Mumbai with one-way and return options."],
    ["Pune to Lonavala Cab Booking", "Comfortable cab booking for Lonavala weekend trips and sightseeing."],
    ["Pune to Mahabaleshwar Cab Booking", "Private transportation for Mahabaleshwar holidays, family trips, and tours."],
    ["Pune to Shirdi Cab Booking", "Convenient cab booking for Shirdi pilgrimage and temple visits."],
    ["Pune to Nashik Cab Booking", "Private travel arrangement for Nashik pilgrimage, tourism, and business journeys."],
    ["Pune to Goa Cab Booking", "Long-distance private cab booking for comfortable Pune-Goa road trips."],
    ["Pune to Bhimashankar Cab Booking", "Cab booking for Bhimashankar pilgrimage, sightseeing, and one-day journeys."],
    ["Pune to Konkan Cab Booking", "Private transportation for Konkan beaches, temples, forts, and coastal tours."],
    ["Affordable Cab Booking Pune", "Budget-conscious private cab booking for local and selected outstation journeys."],
    ["Online Taxi Rental Pune", "Online private taxi rental for customized travel durations and itineraries."],
    ["Cab Booking Near Me Pune", "Convenient cab pickup arrangements around the traveler's preferred Pune location."]
],

whychoose: [
    {
        WhyChooseheading: "Simple Advance Booking",
        WhyChoosedescription: "Online booking makes it easier to organize transportation before the journey begins. Travelers can communicate their date, pickup point, destination, passenger count, and vehicle requirements in advance."
    },
    {
        WhyChooseheading: "Local and Outstation Options",
        WhyChoosedescription: "A wide range of travel requirements can be handled through local, airport, one-way, round-trip, and outstation cab arrangements. This makes the service suitable for both everyday transportation and planned road trips."
    },
    {
        WhyChooseheading: "Popular Route Coverage",
        WhyChoosedescription: "Travelers can arrange cabs for popular destinations such as Mumbai, Lonavala, Mahabaleshwar, Shirdi, Nashik, Goa, Bhimashankar, and Konkan. Route-specific booking makes it easier to plan journeys around the intended destination."
    },
    {
        WhyChooseheading: "Comfortable Vehicle Choices",
        WhyChoosedescription: "Passengers can select an appropriate cab based on their group size, luggage, and preferred comfort level. AC and premium options provide additional convenience for longer journeys and family travel."
    },
    {
        WhyChooseheading: "Convenient Airport Transfers",
        WhyChoosedescription: "Airport travel often requires careful timing, particularly for early departures and late arrivals. Advance cab booking helps passengers coordinate their airport pickup or drop and avoid unnecessary transportation concerns."
    },
    {
        WhyChooseheading: "Suitable for Families and Groups",
        WhyChoosedescription: "Private cabs allow families and small groups to travel together without depending on shared transport. Flexible breaks and direct pickup arrangements can make the overall journey more comfortable."
    },
    {
        WhyChooseheading: "Flexible One-Way and Return Travel",
        WhyChoosedescription: "Travel plans differ from passenger to passenger, so both one-way and round-trip arrangements can be organized. This is useful for travelers with separate return plans as well as those completing a full return journey."
    },
    {
        WhyChooseheading: "Travel Planning Made Convenient",
        WhyChoosedescription: "Advance coordination gives travelers better control over their itinerary, pickup timing, destination, and vehicle requirements. Whether the purpose is business, pilgrimage, sightseeing, or a holiday, the booking can be aligned with the planned journey."
    }
]


};











const faqData = [
{
question: "How can I make an online cab booking in Pune?",
answer: "Online cab booking in Pune can be arranged by sharing the pickup location, destination, travel date, passenger count, and preferred vehicle type. Ruturaj Enterprises can help organize a suitable cab according to the journey requirements, luggage, travel schedule, and type of trip."
},
{
question: "Can I book a cab online in Pune for local travel?",
answer: "Local cab bookings can be used for city travel, airport transfers, business visits, shopping trips, sightseeing, appointments, and other daily transportation needs. Providing the pickup and drop locations in advance helps create a more organized travel plan."
},
{
question: "Can I make an online cab booking from Pune for outstation travel?",
answer: "Outstation cab bookings can be arranged online for destinations such as Mumbai, Mahabaleshwar, Lonavala, Nashik, Shirdi, Kolhapur, Goa, and other locations. The booking can be planned according to the route, number of passengers, luggage, and one-way or round-trip requirement."
},
{
question: "What details are required for online cab booking in Pune?",
answer: "Useful booking details include the pickup point, destination, travel date, preferred pickup time, number of passengers, luggage requirements, and whether the journey is local, one-way, or round-trip. Sharing these details helps determine a suitable vehicle and transportation arrangement."
},
{
question: "Can I book a cab online from Pune Airport?",
answer: "Passengers arriving at Pune Airport can arrange an online cab booking for city destinations as well as outstation locations. Flight arrival information, passenger count, luggage details, and the required drop location can be shared while planning the airport transfer."
},
{
question: "Can families book a cab online in Pune?",
answer: "Families can use online cab booking to arrange convenient transportation for local outings, airport transfers, sightseeing, and outstation holidays. A private cab allows the family to travel together while accommodating luggage and planning the journey around their preferred schedule."
},
{
question: "Can I book a cab online for a one-way trip from Pune?",
answer: "One-way online cab booking is suitable when transportation is required only from Pune to the selected destination. The booking can be planned by providing the pickup point, destination, travel date, passenger count, and luggage information."
},
{
question: "Is online cab booking available for round trips from Pune?",
answer: "Round-trip cab bookings can be arranged for travelers who plan to return to Pune after completing their visit. This option can be useful for family tours, business travel, sightseeing, pilgrimages, and weekend trips where the return schedule is known in advance."
},
{
question: "Can corporate travelers book cabs online in Pune?",
answer: "Corporate travelers can arrange online cab bookings for office visits, client meetings, airport transfers, business trips, conferences, and employee travel. Providing the required locations and timings in advance helps coordinate transportation around the professional schedule."
},
{
question: "Why choose Ruturaj Enterprises for online cab booking in Pune?",
answer: "Ruturaj Enterprises provides cab booking options for local travel, airport transfers, sightseeing, one-way journeys, round trips, and outstation travel from Pune. Vehicle selection can be planned around passenger requirements, luggage, route, travel date, and preferred schedule for a convenient booking experience."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Harish Kulkarni",
feedback:
"I needed an outstation cab from Pune and arranged the booking with Ruturaj Enterprises. Sharing the travel details in advance made the transportation planning simple, and the private cab was convenient for our trip. The overall booking experience was smooth and straightforward.",
rating: 5
},
{
id: 2,
name: "Miss. Pallavi Joshi",
feedback:
"We used Ruturaj Enterprises for an online cab booking in Pune for an airport transfer. The arrangement was convenient for our family because we could travel together with our luggage instead of arranging separate transportation. The overall experience was comfortable and well organized.",
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
  "name": "Online Cab Booking Pune",
  "image": "https://ruturajenterprises.com/assets/images/online-cab-booking-pune.webp",
  "description":
    "Online Cab Booking Pune for convenient local travel, airport transfers, outstation journeys, one-way trips, round trips, business travel, family tours and sightseeing. Ruturaj Enterprises provides online cab booking, taxi rental and cab hire options with comfortable AC vehicles, experienced drivers, flexible pickup arrangements and practical rental plans for travel within Pune and to destinations across Maharashtra and beyond.",
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
    "url": "https://ruturajenterprises.com/online-cab-booking-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Online Cab Booking Pune | Online Cab Booking Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Online Cab Booking Pune for local, airport and outstation travel. Book AC cabs online for one-way and round trips, business travel, family tours and sightseeing with Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Online Cab Booking Pune, Cab Booking Service Pune, Taxi Booking Online Pune, Pune Taxi Booking, Pune Cab Rental Online, Pune Cab Hire Online, AC Cab Booking Pune, Airport Cab Booking Pune, Outstation Cab Booking Pune, Local Cab Booking Pune, One Way Cab Booking Pune, Round Trip Cab Booking Pune, Online Taxi Booking Pune, Online Taxi Hire Pune, Online Taxi Rental Pune, Online Cab Rental Pune, Online Cab Hire Pune, Pune Online Taxi Service, Pune Online Cab Service, Pune Cab Booking Online, Pune Taxi Booking Online, AC Taxi Booking Pune, AC Taxi Rental Pune, AC Taxi Hire Pune, Airport Taxi Booking Pune, Pune Airport Cab Booking, Pune Airport Taxi Booking, Pune Airport Transfer Cab, Pune Airport Pickup Cab, Pune Airport Drop Cab, Outstation Taxi Booking Pune, Outstation Cab Rental Pune, Outstation Cab Hire Pune, Local Taxi Booking Pune, Local Cab Rental Pune, Local Cab Hire Pune, One Way Taxi Booking Pune, One Way Taxi Pune, Round Trip Taxi Booking Pune, Round Trip Taxi Pune, Affordable Cab Booking Pune, Affordable Taxi Booking Pune, Luxury Cab Booking Pune, Luxury Taxi Booking Pune, Sedan Cab Booking Pune, SUV Cab Booking Pune, Family Cab Booking Pune, Corporate Cab Booking Pune, Corporate Taxi Booking Pune, Business Cab Booking Pune, Group Travel Cab Pune, Family Trip Cab Pune, Pune Sightseeing Cab Booking, Pune Local Sightseeing Taxi, Pune Darshan Cab Booking, Cab Booking for Outstation Pune, Cab Booking for Family Trip Pune, Cab Booking for Corporate Travel Pune, Cab Booking for Wedding Pune, Cab Booking for Airport Transfer Pune, Cab Booking for One Day Trip Pune, Cab Booking for Weekend Trip Pune, Cab Booking Near Me Pune, Taxi Booking Near Me Pune, Online Cab Service Near Me Pune, Online Taxi Service Near Me Pune, Pune to Mumbai Cab Booking Online, Pune to Lonavala Cab Booking Online, Pune to Mahabaleshwar Cab Booking Online, Pune to Nashik Cab Booking Online, Pune to Shirdi Cab Booking Online, Pune to Kolhapur Cab Booking Online, Pune to Goa Cab Booking Online, Pune to Konkan Cab Booking Online, Ruturaj Enterprises Online Cab Booking Pune"
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
                            <img src='/images/keyword/52.jpg' alt='img' className='img-fluid' />
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

export default Onlinecabbookingpune ;