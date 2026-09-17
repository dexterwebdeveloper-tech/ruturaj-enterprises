import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Sedancabserviceinpune() {


const cardData = {
keyword: "Sedan Cab Service in Pune",
headingDescription: "Ruturaj Enterprises offers Sedan Cab Service in Pune for individuals, couples, families, tourists, corporate professionals, airport passengers, wedding guests, and travelers planning local or outstation journeys. Sedan cars are a practical choice for comfortable point-to-point transportation, airport transfers, business travel, sightseeing, family outings, one-way trips, round trips, and long-distance road travel. Customers can choose AC, luxury, affordable, driver-operated, tourist, intercity, and outstation sedan options according to their destination, schedule, passenger requirements, and luggage needs.",


topPlaces: [
    {
        title: "Pune Airport",
        description: "Pune Airport is a key arrival and departure point for business travelers, tourists, families, and visitors to the city. A private sedan cab provides direct airport pickup and drop transportation with a comfortable cabin and convenient luggage space."
    },
    {
        title: "Hinjewadi",
        description: "Hinjewadi is a major technology and business hub in Pune and receives professionals for meetings, office visits, and corporate assignments. Sedan cabs offer convenient transportation for executives and employees traveling between hotels, offices, and other business locations."
    },
    {
        title: "Kharadi",
        description: "Kharadi is an important commercial and IT area attracting professionals and corporate visitors. A private sedan provides comfortable point-to-point transportation for meetings, office transfers, airport connections, and business-related travel."
    },
    {
        title: "Lonavala",
        description: "Lonavala is a popular hill getaway known for scenic viewpoints, lakes, forts, and monsoon landscapes. Sedan cabs are suitable for couples and small families planning one-day sightseeing trips or weekend journeys from Pune."
    },
    {
        title: "Mahabaleshwar",
        description: "Mahabaleshwar features scenic viewpoints, waterfalls, lakes, temples, and pleasant mountain surroundings. A private sedan is a convenient option for couples and small families planning a comfortable road trip with flexible sightseeing stops."
    },
    {
        title: "Shirdi",
        description: "Shirdi is an important pilgrimage destination visited by devotees throughout the year. A sedan cab provides direct transportation from Pune for families and individuals seeking a comfortable temple visit with flexible departure and return arrangements."
    },
    {
        title: "Nashik",
        description: "Nashik offers religious attractions, vineyards, heritage locations, and scenic surroundings for tourists and pilgrims. Private sedan transportation makes it convenient to travel from Pune while allowing passengers to organize their own schedule."
    },
    {
        title: "Alibaug",
        description: "Alibaug is a popular coastal destination featuring beaches, forts, and relaxed holiday locations. A sedan cab can provide comfortable private transportation from Pune for couples, families, and small groups planning a coastal getaway."
    },
    {
        title: "Kolhapur",
        description: "Kolhapur is known for its temples, heritage attractions, culture, and nearby scenic destinations. Sedan transportation is suitable for family visits, pilgrimage journeys, business travel, and sightseeing trips from Pune."
    },
    {
        title: "Bhimashankar",
        description: "Bhimashankar combines religious significance with scenic Western Ghats surroundings and attracts pilgrims and nature lovers. A private sedan cab provides a convenient option for couples, families, and small groups traveling from Pune."
    }
],

services: [
    {
        name: "Sedan Cab Service Pune",
        description: "Sedan Cab Service Pune provides private transportation for local travel, airport transfers, sightseeing, family outings, corporate movement, and outstation journeys. Customers can arrange a suitable sedan according to their destination, schedule, passenger count, and travel requirements."
    },
    {
        name: "Sedan Cab Booking Pune",
        description: "Sedan Cab Booking Pune makes it convenient to reserve a private sedan for a planned journey. Travelers can coordinate their pickup location, travel date, destination, passenger requirements, luggage, and preferred travel arrangement in advance."
    },
    {
        name: "Sedan Cab Hire Pune",
        description: "Sedan Cab Hire Pune is suitable for individuals, couples, families, tourists, and professionals who need a dedicated car. Private hire allows passengers to travel according to their preferred route and schedule without depending on shared transportation."
    },
    {
        name: "Sedan Car Rental Pune",
        description: "Sedan Car Rental Pune provides flexible private transportation for short trips, business travel, airport transfers, sightseeing, family journeys, and long-distance road travel. The arrangement can be planned according to the purpose and duration of the trip."
    },
    {
        name: "Sedan Taxi Service Pune",
        description: "Sedan Taxi Service Pune offers private taxi transportation for city journeys and destinations outside Pune. It is suitable for airport transfers, personal visits, tourist travel, business movement, family outings, and intercity transportation."
    },
    {
        name: "Sedan Car on Rent Pune",
        description: "Sedan Car on Rent Pune is a practical option for travelers requiring private transportation for local and outstation purposes. It can support sightseeing, weekend trips, family functions, airport travel, and corporate movement."
    },
    {
        name: "AC Sedan Cab Pune",
        description: "AC Sedan Cab Pune provides an air-conditioned cabin for passengers who prefer a comfortable travel environment. It is useful for city transfers, airport journeys, sightseeing trips, family travel, and longer road journeys."
    },
    {
        name: "Luxury Sedan Cab Pune",
        description: "Luxury Sedan Cab Pune caters to passengers looking for a more premium private travel experience. It can be arranged for executive transportation, special occasions, important guests, corporate travel, and comfortable intercity journeys."
    },
    {
        name: "Sedan for Outstation Pune",
        description: "Sedan for Outstation Pune provides private transportation for destinations beyond Pune across Maharashtra and other regions. It is suitable for holidays, pilgrimages, family visits, business travel, and customized road-trip itineraries."
    },
    {
        name: "Sedan for Local Travel Pune",
        description: "Sedan for Local Travel Pune supports point-to-point transportation within Pune and surrounding areas. Passengers can use it for appointments, shopping, meetings, events, sightseeing, personal visits, and daily travel requirements."
    },
    {
        name: "Sedan Airport Pickup Pune",
        description: "Sedan Airport Pickup Pune provides direct private transportation for passengers arriving at Pune Airport. It is suitable for individuals, couples, families, and business travelers who need convenient transfers to hotels, homes, offices, or onward destinations."
    },
    {
        name: "Sedan One Way Cab Pune",
        description: "Sedan One Way Cab Pune is designed for travelers who require private transportation to a destination without booking the same vehicle for the return journey. It can be useful for intercity transfers, relocation, personal visits, and onward connections."
    },
    {
        name: "Sedan Round Trip Cab Pune",
        description: "Sedan Round Trip Cab Pune provides transportation for both the onward and return portions of a journey. It works well for sightseeing, family visits, pilgrimages, weekend holidays, and business trips where a planned return arrangement is required."
    },
    {
        name: "Sedan for Family Trip Pune",
        description: "Sedan for Family Trip Pune offers private transportation for small families traveling together for holidays, personal visits, pilgrimages, and sightseeing. Convenient pickup, luggage space, and flexible breaks make it suitable for comfortable family travel."
    },
    {
        name: "Sedan for Corporate Travel Pune",
        description: "Sedan for Corporate Travel Pune is suitable for professionals attending meetings, client appointments, office visits, conferences, and business events. A private sedan allows executives to travel directly between locations while maintaining control over their schedules."
    },
    {
        name: "Sedan Wedding Car Rental Pune",
        description: "Sedan Wedding Car Rental Pune provides private transportation for wedding guests, relatives, family members, and event participants. Sedans can be arranged for hotel pickups, venue transfers, guest movement, and travel between different wedding functions."
    },
    {
        name: "Affordable Sedan Cab Pune",
        description: "Affordable Sedan Cab Pune provides a practical private transportation solution for travelers who want comfortable travel while maintaining a planned budget. It is suitable for individuals, couples, families, tourists, and small groups."
    },
    {
        name: "Sedan Cab Near Me Pune",
        description: "Sedan Cab Near Me Pune helps travelers searching for a convenient sedan from their preferred location in Pune. The service can support local transportation, airport travel, sightseeing, family trips, and journeys outside the city."
    },
    {
        name: "Sedan Tourist Cab Pune",
        description: "Sedan Tourist Cab Pune is suitable for visitors exploring Pune and nearby destinations as well as travelers planning longer sightseeing tours. Private transportation allows tourists to customize routes, include multiple attractions, and manage their travel schedule."
    },
    {
        name: "Sedan Long Distance Cab Pune",
        description: "Sedan Long Distance Cab Pune caters to travelers covering extended road distances for tourism, family visits, business requirements, personal commitments, and intercity travel. Private transportation provides greater flexibility for planned breaks and route requirements."
    },
    {
        name: "Sedan Intercity Cab Pune",
        description: "Sedan Intercity Cab Pune provides direct private transportation between Pune and other cities. It can be arranged for one-way transfers, round trips, business travel, family visits, sightseeing, and personal journeys."
    },
    {
        name: "Sedan Rental Service Pune",
        description: "Sedan Rental Service Pune offers flexible private transportation for local and outstation requirements. Customers can use the service for airport transfers, sightseeing, family travel, corporate movement, weddings, one-way journeys, round trips, and long-distance road trips."
    }
],

tableData: [
    ["Sedan Cab Service Pune", "Private sedan transportation for local, airport, tourist, corporate, and outstation travel."],
    ["Sedan Cab Booking Pune", "Advance sedan booking for planned private journeys from Pune."],
    ["Sedan Cab Hire Pune", "Dedicated sedan hire for personal, family, business, and tourist travel."],
    ["Sedan Car Rental Pune", "Flexible sedan rental for short trips, sightseeing, airport travel, and road journeys."],
    ["Sedan Taxi Service Pune", "Private sedan taxi service for city and intercity transportation."],
    ["Sedan Car on Rent Pune", "Sedan rental option for local, family, corporate, and outstation requirements."],
    ["AC Sedan Cab Pune", "Air-conditioned sedan cab for comfortable private travel."],
    ["Luxury Sedan Cab Pune", "Premium sedan option for executive travel, guests, and special occasions."],
    ["Sedan for Outstation Pune", "Private sedan transportation for destinations outside Pune."],
    ["Sedan for Local Travel Pune", "Sedan service for city transfers, appointments, events, and sightseeing."],
    ["Sedan Airport Pickup Pune", "Private sedan airport pickup and transfer service."],
    ["Sedan One Way Cab Pune", "One-way sedan transfer for intercity and destination travel."],
    ["Sedan Round Trip Cab Pune", "Return sedan transportation for holidays, visits, and sightseeing."],
    ["Sedan for Family Trip Pune", "Comfortable private sedan transportation for family travel."],
    ["Sedan for Corporate Travel Pune", "Corporate sedan transportation for meetings, visits, and business events."],
    ["Sedan Wedding Car Rental Pune", "Sedan rental for wedding guests, functions, and venue transfers."],
    ["Affordable Sedan Cab Pune", "Budget-conscious private sedan transportation for different travel needs."],
    ["Sedan Cab Near Me Pune", "Convenient sedan option for customers seeking nearby Pune pickup."],
    ["Sedan Tourist Cab Pune", "Private sedan tourist cab for customized sightseeing and tours."],
    ["Sedan Long Distance Cab Pune", "Sedan option for extended road journeys and intercity travel."],
    ["Sedan Intercity Cab Pune", "Direct sedan transportation between Pune and other cities."],
    ["Sedan Rental Service Pune", "Flexible sedan rental for local, airport, corporate, and outstation travel."]
],

whychoose: [
    {
        WhyChooseheading: "Comfortable Private Sedan",
        WhyChoosedescription: "A sedan provides a practical balance of comfort, space, and easy city travel for individuals, couples, and small families. Private transportation also allows passengers to avoid the inconvenience of shared travel."
    },
    {
        WhyChooseheading: "Convenient City Transportation",
        WhyChoosedescription: "Sedan cabs can be used for appointments, shopping, meetings, events, sightseeing, and personal visits across Pune. Direct point-to-point movement makes local travel easier to coordinate."
    },
    {
        WhyChooseheading: "Reliable Airport Transfers",
        WhyChoosedescription: "Passengers can arrange direct pickup or drop transportation between Pune Airport and their preferred location. The private cabin provides a comfortable environment for travelers carrying personal or business luggage."
    },
    {
        WhyChooseheading: "Ideal for Small Families",
        WhyChoosedescription: "Families can travel together in a dedicated vehicle while keeping their pickup, departure, and break schedule flexible. Sedan travel is particularly suitable for smaller family groups and couples."
    },
    {
        WhyChooseheading: "Suitable for Corporate Trips",
        WhyChoosedescription: "Business professionals can use sedan transportation for client meetings, office visits, conferences, airport transfers, and corporate events. Direct travel helps executives manage their schedules more efficiently."
    },
    {
        WhyChooseheading: "Flexible Outstation Options",
        WhyChoosedescription: "A private sedan can be arranged for hill stations, pilgrimage destinations, coastal locations, and other cities outside Pune. Travelers can select one-way, round-trip, or customized arrangements based on their itinerary."
    },
    {
        WhyChooseheading: "Useful for Events and Weddings",
        WhyChoosedescription: "Sedans can support guest transportation during weddings, family functions, celebrations, and special events. Private cars can be coordinated for hotel pickups, venue transfers, and movement between different functions."
    },
    {
        WhyChooseheading: "Multiple Travel Categories",
        WhyChoosedescription: "AC, luxury, affordable, tourist, airport, corporate, family, intercity, long-distance, one-way, and round-trip options provide flexibility for different requirements. Travelers can select an arrangement according to destination, schedule, comfort, and budget."
    }
]


};






const faqData = [
{
question: "How can I book a sedan cab service in Pune?",
answer: "A sedan cab can be arranged in Pune by sharing the pickup location, destination, travel date, preferred pickup time, and number of passengers. Ruturaj Enterprises can coordinate a suitable sedan according to the journey type, luggage requirements, route, and travel schedule."
},
{
question: "What types of travel are suitable for sedan cabs in Pune?",
answer: "Sedan cabs are suitable for local transportation, airport transfers, business meetings, family outings, city sightseeing, and outstation journeys. They can be a practical choice for individuals, couples, and small groups looking for private point-to-point transportation."
},
{
question: "Can I hire a sedan cab from Pune for outstation travel?",
answer: "Outstation sedan cab service can be arranged from Pune for destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Kolhapur, and other locations. Travelers can choose a one-way or round-trip arrangement depending on their complete travel itinerary."
},
{
question: "Is one-way sedan cab service available from Pune?",
answer: "One-way sedan transportation is useful when passengers need a private cab from Pune to another destination without planning a return journey in the same booking. The trip can be coordinated according to the pickup point, destination, travel date, timing, and passenger requirements."
},
{
question: "Can I book a sedan cab for Pune Airport transfers?",
answer: "Sedan cabs can be arranged for Pune Airport pickup and drop services. Passengers can provide their flight timing, airport requirement, pickup or destination details, luggage information, and number of travelers to help coordinate a convenient airport transportation plan."
},
{
question: "Is a sedan cab suitable for business travel in Pune?",
answer: "For corporate transportation, a sedan can be a convenient option for office visits, client meetings, conferences, airport transfers, and business appointments. The travel arrangement can be planned around the professional schedule and required pickup and drop locations."
},
{
question: "Can families use sedan cab service in Pune?",
answer: "Small families can use sedan cabs for local outings, airport transportation, sightseeing, and short outstation journeys. Private travel allows family members to stay together while following their preferred departure time, route, and planned stops."
},
{
question: "Can I book a sedan cab for a round trip from Pune?",
answer: "Round-trip sedan bookings are suitable for sightseeing tours, family visits, weekend travel, pilgrimages, and business journeys where passengers intend to return to Pune. The onward and return schedule can be discussed while planning the complete cab service."
},
{
question: "What details are required for sedan cab booking in Pune?",
answer: "The booking process generally requires the pickup location, destination, travel date, preferred departure time, number of passengers, luggage requirements, and journey type. Providing these details helps Ruturaj Enterprises arrange the sedan according to the specific transportation requirement."
},
{
question: "Why choose Ruturaj Enterprises for sedan cab service in Pune?",
answer: "Ruturaj Enterprises arranges sedan cab services in Pune for local travel, airport transfers, corporate transportation, sightseeing, family trips, and outstation journeys. Each booking can be planned around the route, passenger count, luggage, travel date, timing, and one-way or round-trip requirement."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Sameer Chavan",
feedback:
"I used the sedan cab service from Ruturaj Enterprises for an outstation business trip from Pune. The car was a suitable option for my travel requirement, and the private transportation made it easy to follow my planned schedule. The overall experience was comfortable and convenient.",
rating: 5
},
{
id: 2,
name: "Miss. Pooja Wagh",
feedback:
"My family needed a sedan for an airport transfer and local travel in Pune. Ruturaj Enterprises arranged a suitable cab for us, and the private journey made handling our luggage and different stops much easier. The booking experience was straightforward and pleasant.",
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
  "name": "Sedan Cab Service in Pune",
  "image": "https://ruturajenterprises.com/assets/images/sedan-cab-service-in-pune.webp",
  "description":
    "Sedan Cab Service in Pune for comfortable local travel, airport transfers, outstation journeys, family trips, corporate travel, weddings and sightseeing. Ruturaj Enterprises provides sedan cab booking, hire and rental options with comfortable AC vehicles, experienced drivers, convenient pickup arrangements and flexible travel plans. Sedan cabs are suitable for one-way and round-trip journeys, business travel, airport transfers and longer outstation trips from Pune.",
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
    "url": "https://ruturajenterprises.com/sedan-cab-service-in-pune"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Sedan Cab Service in Pune | Sedan Cab Service Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Sedan Cab Service in Pune for local, airport and outstation travel. Book comfortable AC sedans for family trips, corporate travel, sightseeing, one-way and round-trip journeys with Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Sedan Cab Service Pune, Sedan Cab Booking Pune, Sedan Cab Hire Pune, Sedan Cab Rental Pune, Sedan Taxi Pune, Sedan Car Rental Pune, Sedan Car Hire Pune, Sedan Car Booking Pune, Sedan Car on Rent Pune, AC Sedan Cab Pune, AC Sedan Taxi Pune, Luxury Sedan Cab Pune, Premium Sedan Cab Pune, Sedan Cab on Rent Pune, Sedan Taxi Service Pune, Sedan Taxi Booking Pune, Sedan Taxi Hire Pune, Sedan Taxi Rental Pune, Sedan Rental Service Pune, Sedan Hire Service Pune, Sedan Booking Service Pune, Sedan Cab for Outstation Pune, Sedan Taxi for Outstation Pune, Sedan Car for Outstation Pune, Sedan Cab for Local Travel Pune, Sedan Taxi for Local Travel Pune, Sedan Car for Local Travel Pune, Sedan Cab for Family Trip Pune, Sedan Cab for Group Travel Pune, Sedan Cab for Corporate Travel Pune, Sedan Cab for Corporate Events Pune, Sedan Cab for Wedding Pune, Sedan Cab for Marriage Pune, Sedan Cab for Airport Pickup Pune, Sedan Cab for Airport Drop Pune, Sedan Airport Taxi Pune, Sedan Airport Cab Pune, Sedan Cab for Sightseeing Pune, Sedan Cab for Pune Darshan, Sedan Cab for One Day Trip Pune, Sedan Cab for Multi Day Trip Pune, Sedan Cab for Weekend Trip Pune, Sedan Cab for Holiday Pune, Sedan One Way Cab Pune, Sedan Round Trip Cab Pune, Sedan One Way Taxi Pune, Sedan Round Trip Taxi Pune, Sedan Outstation Cab Pune, Sedan Outstation Taxi Pune, Sedan Local Cab Pune, Sedan Local Taxi Pune, Sedan Private Cab Pune, Sedan Private Taxi Pune, Sedan Cab with Driver Pune, Sedan Taxi with Driver Pune, Sedan Car with Driver Pune, Sedan Cab Rental Near Me Pune, Sedan Cab Hire Near Me Pune, Sedan Taxi Near Me Pune, Affordable Sedan Cab Pune, Comfortable Sedan Cab Pune, Premium Sedan Rental Pune, Sedan Cab Rental Service Pune, Sedan Cab Hire Service Pune, Sedan Cab Booking Service Pune, Sedan Taxi Rental Service Pune, Sedan Taxi Hire Service Pune, Sedan Taxi Booking Service Pune, Sedan for Goa Trip Pune, Sedan for Mumbai Trip Pune, Sedan for Lonavala Trip Pune, Sedan for Mahabaleshwar Trip Pune, Sedan for Nashik Trip Pune, Sedan for Shirdi Trip Pune, Sedan for Kolhapur Trip Pune, Sedan for Konkan Trip Pune, Ruturaj Enterprises Sedan Cab Pune"
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
                            <img src='/images/keyword/60.jpg' alt='img' className='img-fluid' />
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

export default Sedancabserviceinpune;