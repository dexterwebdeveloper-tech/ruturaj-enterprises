import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Carhireinpune() {


const cardData = {
keyword: "Car Hire in Pune",
headingDescription: "Ruturaj Enterprises provides convenient Car Hire in Pune for families, couples, tourists, corporate professionals, airport passengers, wedding guests, and travelers planning local or outstation journeys. Private cars can be arranged for city transfers, sightseeing, business travel, airport pickup and drop, one-way trips, round trips, weekend holidays, and long-distance road journeys. Customers can select suitable sedan, SUV, AC, luxury, affordable, driver-operated, and chauffeur-style car hire options based on their travel requirements.",


topPlaces: [
    {
        title: "Pune Airport",
        description: "Pune Airport is a major transportation point for business and leisure travelers arriving in or departing from the city. A private hired car offers convenient airport pickup and drop arrangements with space for passengers and luggage."
    },
    {
        title: "Hinjewadi",
        description: "Hinjewadi is one of Pune's prominent business and technology destinations, attracting professionals and corporate visitors throughout the year. Car hire services provide practical transportation for meetings, office visits, employee movement, and client appointments."
    },
    {
        title: "Lonavala",
        description: "Lonavala is a popular hill getaway from Pune, offering scenic viewpoints, lakes, forts, and monsoon landscapes. A hired car makes it easier for families and tourists to travel together and explore multiple attractions at their preferred pace."
    },
    {
        title: "Mahabaleshwar",
        description: "Mahabaleshwar is known for its mountain scenery, viewpoints, waterfalls, lakes, and pleasant climate. Private car hire from Pune is suitable for families, couples, and groups planning one-day or extended hill-station trips."
    },
    {
        title: "Shirdi",
        description: "Shirdi attracts pilgrims and families visiting the famous temple and surrounding spiritual attractions. A private car provides direct road transportation from Pune with convenient arrangements for luggage, breaks, and return travel."
    },
    {
        title: "Alibaug",
        description: "Alibaug is a popular coastal destination featuring beaches, forts, and relaxing holiday locations. Travelers can hire a private car from Pune for comfortable transportation and create a flexible itinerary around coastal sightseeing."
    },
    {
        title: "Nashik",
        description: "Nashik offers a combination of religious destinations, vineyards, heritage attractions, and scenic surroundings. A hired car can be useful for tourists, families, corporate travelers, and pilgrims planning direct or sightseeing-oriented journeys."
    },
    {
        title: "Kolhapur",
        description: "Kolhapur is an important cultural and pilgrimage destination with historic sites and temples. Car hire provides a convenient private travel option for visitors traveling from Pune for family visits, business requirements, tourism, or religious trips."
    },
    {
        title: "Goa",
        description: "Goa is a favored long-distance destination for beach vacations, family holidays, and group road trips. A private hired car provides a comfortable option for travelers carrying luggage and planning a direct multi-day journey from Pune."
    },
    {
        title: "Bhimashankar",
        description: "Bhimashankar combines pilgrimage importance with scenic Western Ghats surroundings and attracts visitors throughout the year. A private car is convenient for families and groups planning temple visits, nature trips, or customized sightseeing."
    }
],

services: [
    {
        name: "Car Hire Pune",
        description: "Car Hire Pune provides private transportation for local travel, airport transfers, sightseeing, family outings, corporate movement, and outstation journeys. Customers can select an appropriate vehicle and travel arrangement according to their destination and schedule."
    },
    {
        name: "Car Rental Pune",
        description: "Car Rental Pune offers flexible vehicle arrangements for individuals, families, tourists, professionals, and groups. Cars can be used for city travel, weekend trips, long-distance journeys, special events, and customized sightseeing programs."
    },
    {
        name: "Car Booking Pune",
        description: "Car Booking Pune makes it convenient to arrange private transportation before a planned journey. Travelers can coordinate their pickup location, travel date, destination, passenger count, vehicle preference, and trip requirements in advance."
    },
    {
        name: "Car on Rent Pune",
        description: "Car on Rent Pune is suitable for customers who need a private vehicle for personal travel, business movement, family functions, tourism, or road trips. The arrangement can be planned around the duration and purpose of the journey."
    },
    {
        name: "AC Car Rental Pune",
        description: "AC Car Rental Pune provides air-conditioned private transportation for passengers who prefer a comfortable travel environment. It is suitable for city transfers, airport travel, sightseeing, family trips, and longer journeys outside Pune."
    },
    {
        name: "Luxury Car Hire Pune",
        description: "Luxury Car Hire Pune caters to travelers looking for a premium transportation experience for business travel, special occasions, executive movement, weddings, and important guest transfers. The service offers a more refined alternative for selected travel requirements."
    },
    {
        name: "Sedan Car Hire Pune",
        description: "Sedan Car Hire Pune is a practical option for individuals, couples, families, and corporate travelers seeking comfortable private transportation. Sedans can be used for airport transfers, local travel, business visits, and intercity journeys."
    },
    {
        name: "SUV Car Hire Pune",
        description: "SUV Car Hire Pune is suitable for travelers who require additional cabin and luggage space for family trips, group travel, sightseeing, and longer road journeys. SUVs can provide a convenient option for routes involving multiple passengers and luggage."
    },
    {
        name: "Outstation Car Hire Pune",
        description: "Outstation Car Hire Pune provides private transportation for destinations beyond Pune across Maharashtra and other states. It is suitable for vacations, pilgrimages, family visits, corporate travel, sightseeing tours, and extended road trips."
    },
    {
        name: "Local Car Hire Pune",
        description: "Local Car Hire Pune supports city transportation for shopping, appointments, meetings, events, sightseeing, personal visits, and daily travel requirements. A private hired car provides direct point-to-point movement within Pune and surrounding areas."
    },
    {
        name: "One Way Car Hire Pune",
        description: "One Way Car Hire Pune is convenient for passengers who need private transportation to a destination without requiring the same vehicle for the return. It can be useful for intercity transfers, relocation, airport connections, and personal travel."
    },
    {
        name: "Round Trip Car Hire Pune",
        description: "Round Trip Car Hire Pune provides a return transportation arrangement for travelers planning holidays, sightseeing, family visits, pilgrimages, and business journeys. The option allows passengers to coordinate both directions around their preferred schedule."
    },
    {
        name: "Family Car Rental Pune",
        description: "Family Car Rental Pune provides private transportation for parents, children, relatives, and senior family members. Convenient pickup, luggage space, flexible breaks, and direct travel make it suitable for family outings and longer road journeys."
    },
    {
        name: "Corporate Car Hire Pune",
        description: "Corporate Car Hire Pune is designed for professionals traveling to offices, meetings, client locations, industrial areas, conferences, and business events. Dedicated transportation helps companies coordinate employee and guest movement more efficiently."
    },
    {
        name: "Airport Car Rental Pune",
        description: "Airport Car Rental Pune offers private transportation for passengers arriving at or departing from Pune Airport. It is useful for tourists, families, corporate travelers, and groups who need direct hotel transfers or onward transportation."
    },
    {
        name: "Wedding Car Hire Pune",
        description: "Wedding Car Hire Pune provides transportation for wedding guests, relatives, family members, and event participants. Cars can be used for hotel transfers, venue movement, guest pickups, and transportation between different wedding functions."
    },
    {
        name: "Tourist Car Rental Pune",
        description: "Tourist Car Rental Pune is suitable for visitors exploring Pune and nearby destinations as well as travelers planning longer sightseeing tours. Private transportation allows tourists to organize multiple attractions according to their available time."
    },
    {
        name: "Affordable Car Hire Pune",
        description: "Affordable Car Hire Pune provides a practical private transportation solution for customers who want to manage their travel budget. It is suitable for individuals, couples, families, and small groups requiring comfortable transportation for planned journeys."
    },
    {
        name: "Car Hire Near Me Pune",
        description: "Car Hire Near Me Pune helps customers searching for a convenient private vehicle from their preferred area within Pune. The service can support local travel, airport transfers, sightseeing, family requirements, and outstation journeys."
    },
    {
        name: "Driver Car Rental Pune",
        description: "Driver Car Rental Pune provides a vehicle along with professional driving support, allowing passengers to focus on their journey instead of driving themselves. This arrangement is useful for families, tourists, business travelers, and long-distance trips."
    },
    {
        name: "Chauffeur Car Hire Pune",
        description: "Chauffeur Car Hire Pune offers a convenient driver-operated transportation experience for corporate executives, tourists, families, special events, and important guests. It is suitable when passengers prefer comfortable travel without handling the driving themselves."
    },
    {
        name: "Long Distance Car Rental Pune",
        description: "Long Distance Car Rental Pune caters to travelers covering extended road distances for tourism, family visits, business travel, personal commitments, and multi-day trips. Private transportation provides greater flexibility for planned breaks and route requirements."
    }
],

tableData: [
    ["Car Hire Pune", "Private car hire for local, airport, sightseeing, corporate, and outstation travel."],
    ["Car Rental Pune", "Flexible private car rental for individuals, families, tourists, and professionals."],
    ["Car Booking Pune", "Advance private car booking for planned journeys from Pune."],
    ["Car on Rent Pune", "Private vehicle rental for personal, family, business, and tourist requirements."],
    ["AC Car Rental Pune", "Air-conditioned car rental for comfortable local and long-distance travel."],
    ["Luxury Car Hire Pune", "Premium car hire for executive travel, events, and special occasions."],
    ["Sedan Car Hire Pune", "Comfortable sedan hire for individuals, couples, families, and business travel."],
    ["SUV Car Hire Pune", "Spacious SUV option for groups, families, luggage, and longer journeys."],
    ["Outstation Car Hire Pune", "Private car hire for destinations outside Pune and intercity travel."],
    ["Local Car Hire Pune", "City car hire for appointments, shopping, meetings, events, and sightseeing."],
    ["One Way Car Hire Pune", "Private one-way transportation for destination transfers without return travel."],
    ["Round Trip Car Hire Pune", "Return car hire for holidays, visits, sightseeing, and business journeys."],
    ["Family Car Rental Pune", "Private car rental designed for families and senior travelers."],
    ["Corporate Car Hire Pune", "Business transportation for meetings, clients, employees, and events."],
    ["Airport Car Rental Pune", "Private car rental for Pune Airport pickup, drop, and onward transfers."],
    ["Wedding Car Hire Pune", "Car transportation for wedding guests, relatives, and event functions."],
    ["Tourist Car Rental Pune", "Private tourist car rental for customized sightseeing and tours."],
    ["Affordable Car Hire Pune", "Budget-conscious private car hire for individuals and small groups."],
    ["Car Hire Near Me Pune", "Convenient private car option for customers seeking nearby Pune pickup."],
    ["Driver Car Rental Pune", "Private rental with driver support for convenient passenger travel."],
    ["Chauffeur Car Hire Pune", "Driver-operated car hire for executives, guests, tourists, and special occasions."],
    ["Long Distance Car Rental Pune", "Private car rental for extended road trips and intercity journeys."]
],

whychoose: [
    {
        WhyChooseheading: "Flexible Vehicle Selection",
        WhyChoosedescription: "Different journeys require different vehicle types, so travelers can consider sedan, SUV, AC, luxury, and affordable car options. The choice can be based on passenger count, luggage, comfort preferences, destination, and trip duration."
    },
    {
        WhyChooseheading: "Local and Outstation Convenience",
        WhyChoosedescription: "A hired car can support both city transportation and journeys beyond Pune. This makes the service useful for daily requirements as well as holidays, pilgrimages, family visits, and intercity travel."
    },
    {
        WhyChooseheading: "Professional Driver Support",
        WhyChoosedescription: "Driver-operated and chauffeur-style arrangements allow passengers to focus on their work, family, or sightseeing instead of managing the road journey. This is particularly convenient for business travelers and long-distance trips."
    },
    {
        WhyChooseheading: "Airport Travel Made Easier",
        WhyChoosedescription: "Private airport transportation provides direct movement between Pune Airport and the desired hotel, home, office, or onward destination. Families and passengers carrying multiple bags can benefit from a dedicated vehicle."
    },
    {
        WhyChooseheading: "Suitable for Family Holidays",
        WhyChoosedescription: "Families can travel together in a private vehicle with convenient pickup and flexible breaks. Spacious car options are useful when children, senior citizens, and luggage are part of the journey."
    },
    {
        WhyChooseheading: "Business-Friendly Transportation",
        WhyChoosedescription: "Corporate car hire can support meetings, client visits, office travel, conferences, and business events. Dedicated transportation helps professionals maintain a planned schedule while traveling around Pune or to other cities."
    },
    {
        WhyChooseheading: "One-Way and Return Options",
        WhyChoosedescription: "Travelers can choose between one-way and round-trip arrangements depending on their itinerary. This provides greater flexibility for destination transfers, holidays, personal visits, and business journeys."
    },
    {
        WhyChooseheading: "Convenient for Special Events",
        WhyChoosedescription: "Car hire can be arranged for weddings, guest transfers, celebrations, and other important occasions where dependable private transportation is required. Different vehicle categories can accommodate varying comfort and event requirements."
    }
]


};





const faqData = [
{
question: "How can I hire a car in Pune?",
answer: "Car hire in Pune can be arranged by sharing your pickup location, destination, travel date, required duration, number of passengers, and preferred vehicle type. Ruturaj Enterprises can help coordinate a suitable car according to your local, airport, sightseeing, corporate, or outstation travel requirements."
},
{
question: "What types of cars are available for hire in Pune?",
answer: "Vehicle selection can be planned according to the size of the traveling group and the type of journey. Options may include comfortable sedans, Ertiga, SUVs, Innova, and Innova Crysta, allowing passengers to choose a vehicle based on seating, luggage, route, and comfort requirements."
},
{
question: "Can I hire a car in Pune for local travel?",
answer: "Local car hire is suitable for city visits, shopping, appointments, business meetings, family outings, sightseeing, and other transportation needs. A private vehicle can provide convenient point-to-point travel while allowing the schedule to be organized around the passenger's requirements."
},
{
question: "Is car hire available in Pune for outstation trips?",
answer: "Outstation car hire can be arranged from Pune for destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Kolhapur, Goa, and other cities or tourist locations. Depending on the itinerary, travelers can select a one-way or round-trip transportation arrangement."
},
{
question: "Can I hire a car from Pune Airport?",
answer: "Airport car hire can be organized for both arrivals and departures at Pune Airport. Passengers can provide flight details, pickup or drop location, number of travelers, and luggage information so that the transportation arrangement can be coordinated according to the airport schedule."
},
{
question: "Can families hire a car in Pune for sightseeing?",
answer: "Families can hire a private car for Pune sightseeing and nearby destinations when they prefer flexible transportation. The itinerary can include multiple locations and planned breaks, while the vehicle can be selected according to the number of family members and luggage being carried."
},
{
question: "Can I hire an Ertiga or Innova in Pune?",
answer: "Ertiga and Innova vehicles can be considered when passengers need more space for family or group travel. Vehicle selection can depend on the number of travelers, luggage, trip distance, and comfort expectations, making these options useful for both local and outstation journeys."
},
{
question: "Is one-way car hire available from Pune?",
answer: "One-way car hire is useful when transportation is needed from Pune to another city or destination without requiring the same vehicle for the return journey. The booking can be planned according to the pickup point, destination, travel date, passenger count, and luggage requirements."
},
{
question: "Can I hire a car in Pune for corporate travel?",
answer: "Corporate car hire can support client meetings, office visits, conferences, airport transfers, employee transportation, and business trips. The travel plan can be coordinated around professional schedules, multiple pickup locations, destination requirements, and the number of passengers."
},
{
question: "Why choose Ruturaj Enterprises for car hire in Pune?",
answer: "Ruturaj Enterprises arranges car hire solutions in Pune for local travel, airport transfers, sightseeing, corporate requirements, family trips, and outstation journeys. Vehicle options can be matched with the passenger count, luggage, route, travel date, duration, and preferred transportation arrangement."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Vivek Bhosale",
feedback:
"I hired a car from Ruturaj Enterprises for an outstation journey from Pune. The vehicle selection was suitable for our group and luggage, and having private transportation made the trip much easier to manage. The complete arrangement was convenient and comfortable.",
rating: 5
},
{
id: 2,
name: "Miss. Priyanka Joshi",
feedback:
"We needed a car in Pune for a combination of local travel and sightseeing, so we contacted Ruturaj Enterprises. The private vehicle gave us the flexibility to manage different stops during the day. The overall hiring process was straightforward and the journey was enjoyable.",
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
  "name": "Car Hire in Pune",
  "image": "https://ruturajenterprises.com/assets/images/car-hire-in-pune.webp",
  "description":
    "Car Hire in Pune for local travel, airport transfers, outstation journeys, family trips, corporate travel, weddings, sightseeing and special occasions. Ruturaj Enterprises offers car hire, rental and booking options with AC cars, comfortable sedans and spacious SUVs. Customers can choose suitable vehicles for one-way trips, round trips, short-term rentals and long-distance journeys with convenient pickup arrangements and experienced drivers.",
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
    "url": "https://ruturajenterprises.com/car-hire-in-pune"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Car Hire in Pune | Car Hire Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Car Hire in Pune for local, airport and outstation travel. Choose AC cars, luxury cars, sedans and SUVs for family trips, corporate travel, sightseeing, one-way and round-trip journeys."
  />

  <meta
    name="keywords"
    content="Car Hire Pune, Car Rental Pune, Car Booking Pune, Car on Rent Pune, AC Car Rental Pune, Luxury Car Hire Pune, Sedan Car Hire Pune, SUV Car Hire Pune, Car Hire Service Pune, Car Rental Service Pune, Car Booking Service Pune, Car Rental Near Me Pune, Car Hire Near Me Pune, Car Booking Near Me Pune, AC Car Hire Pune, AC Car Booking Pune, AC Car on Rent Pune, Luxury Car Rental Pune, Luxury Car Booking Pune, Luxury Car on Rent Pune, Sedan Car Rental Pune, Sedan Car Booking Pune, Sedan Car on Rent Pune, SUV Car Rental Pune, SUV Car Booking Pune, SUV Car on Rent Pune, Car Taxi Hire Pune, Private Car Hire Pune, Private Car Rental Pune, Car Hire with Driver Pune, Car Rental with Driver Pune, Car Booking with Driver Pune, Local Car Hire Pune, Local Car Rental Pune, Local Car Booking Pune, Outstation Car Hire Pune, Outstation Car Rental Pune, Outstation Car Booking Pune, Airport Car Hire Pune, Airport Car Rental Pune, Airport Car Booking Pune, Airport Pickup Car Pune, Airport Drop Car Pune, One Way Car Hire Pune, One Way Car Rental Pune, One Way Car Booking Pune, Round Trip Car Hire Pune, Round Trip Car Rental Pune, Round Trip Car Booking Pune, Family Car Rental Pune, Family Car Hire Pune, Family Trip Car Pune, Group Travel Car Pune, Corporate Car Rental Pune, Corporate Car Hire Pune, Corporate Travel Car Pune, Wedding Car Rental Pune, Wedding Car Hire Pune, Wedding Guest Car Pune, Sightseeing Car Rental Pune, Sightseeing Car Hire Pune, Pune Darshan Car Rental, Pune Darshan Car Hire, Car for One Day Trip Pune, Car for Multi Day Trip Pune, Car for Weekend Trip Pune, Car for Outstation Trip Pune, Car for Family Tour Pune, Car for Group Tour Pune, Car for Corporate Events Pune, Car for Wedding Events Pune, Car for Airport Transfer Pune, Affordable Car Rental Pune, Affordable Car Hire Pune, Comfortable Car Rental Pune, Premium Car Hire Pune, Premium Car Rental Pune, Economy Car Rental Pune, Sedan Taxi Rental Pune, SUV Taxi Rental Pune, Innova Car Rental Pune, Innova Crysta Car Rental Pune, Ertiga Car Rental Pune, Car Rental for Goa Trip Pune, Car Rental for Mumbai Trip Pune, Car Rental for Lonavala Trip Pune, Car Rental for Mahabaleshwar Trip Pune, Car Rental for Nashik Trip Pune, Car Rental for Shirdi Trip Pune, Car Rental for Kolhapur Trip Pune, Car Rental for Konkan Trip Pune, Ruturaj Enterprises Car Hire Pune"
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
                            <img src='/images/keyword/58.jpg' alt='img' className='img-fluid' />
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

export default Carhireinpune;