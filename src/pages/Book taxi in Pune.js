import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Booktaxiinpune() {


const cardData = {
keyword: "Book taxi in Pune",
headingDescription: "Ruturaj Enterprises provides reliable taxi booking services in Pune for families, couples, corporate professionals, tourists, airport passengers, students, senior citizens, and individuals looking for convenient private transportation. Customers can arrange taxis for local city travel, airport transfers, outstation journeys, business meetings, sightseeing, family functions, one-way transfers, and round trips according to their schedule and destination. With options for AC, affordable, family, corporate, tourist, local, outstation, one-way, round-trip, and driver-operated travel, passengers can select a suitable cab arrangement based on passenger count, luggage, pickup location, and journey requirements.",


topPlaces: [
    {
        title: "Pune Airport",
        description: "Pune Airport is an important transportation hub serving passengers traveling for business, tourism, education, and personal requirements. A private taxi provides convenient pickup and drop transportation from different parts of Pune, making airport journeys easier for passengers carrying luggage or traveling with family."
    },
    {
        title: "Hinjewadi",
        description: "Hinjewadi is a major technology and corporate destination in Pune with numerous offices, business parks, and professional establishments. Taxi services are useful for employees, clients, visitors, and corporate travelers requiring convenient transportation between Hinjewadi and other parts of Pune."
    },
    {
        title: "Kharadi",
        description: "Kharadi is a prominent commercial and IT hub with offices, residential communities, hotels, and business destinations. Private taxi transportation provides flexible connectivity for professionals, residents, visitors, and travelers moving between Kharadi and other areas of Pune."
    },
    {
        title: "Koregaon Park",
        description: "Koregaon Park is a well-known Pune neighborhood with restaurants, hotels, commercial establishments, and lifestyle destinations. Travelers can use a private cab for local visits, business meetings, hotel transfers, airport connections, and city sightseeing."
    },
    {
        title: "Shaniwar Wada",
        description: "Shaniwar Wada is one of Pune's most recognized historical landmarks and attracts tourists interested in the city's Maratha heritage. A local sightseeing taxi makes it convenient to visit the fort along with other nearby cultural and historical attractions."
    },
    {
        title: "Aga Khan Palace",
        description: "Aga Khan Palace is an important historical landmark in Pune known for its architecture and connection with India's freedom movement. Tourists, families, and educational groups can include the palace in a private city sightseeing itinerary with convenient pickup and drop."
    },
    {
        title: "Sinhagad Fort",
        description: "Sinhagad Fort is a popular destination for history enthusiasts, trekkers, families, and weekend travelers around Pune. A private taxi provides flexible transportation for visitors planning a fort trip without depending on fixed public transport schedules."
    },
    {
        title: "Dagdusheth Halwai Ganpati Temple",
        description: "Dagdusheth Halwai Ganpati Temple is a prominent religious landmark in central Pune and attracts devotees throughout the year. Private taxi transportation is useful for visitors who want convenient access to the temple along with other nearby city attractions."
    },
    {
        title: "Pimpri-Chinchwad",
        description: "Pimpri-Chinchwad is an important residential, industrial, and commercial region connected with Pune's wider metropolitan area. Taxi services can support daily local travel, employee transportation, business visits, airport transfers, and connections between different parts of the region."
    },
    {
        title: "Lavasa",
        description: "Lavasa is a scenic destination near Pune known for its lakeside setting, hills, and leisure-oriented atmosphere. Travelers can hire a private taxi for a comfortable weekend journey, family outing, couple's trip, or customized sightseeing excursion from Pune."
    }
],

services: [
    {
        name: "Taxi Booking Pune",
        description: "Taxi Booking Pune provides convenient private transportation for passengers traveling within Pune and to destinations outside the city. Customers can arrange taxis for local travel, airport transfers, business requirements, family outings, sightseeing, personal work, and planned intercity journeys."
    },
    {
        name: "Online Taxi Booking Pune",
        description: "Online Taxi Booking Pune offers a convenient way to plan private transportation before starting a journey. Travelers can organize their cab requirements around their preferred pickup location, destination, travel date, passenger count, luggage, and desired type of journey."
    },
    {
        name: "Taxi Hire Pune",
        description: "Taxi Hire Pune provides dedicated cab transportation for individuals, families, tourists, professionals, and groups. The service can be used for local commuting, airport travel, sightseeing, business meetings, family functions, and longer outstation journeys."
    },
    {
        name: "Taxi Rental Pune",
        description: "Taxi Rental Pune provides private vehicle arrangements for customers requiring transportation within Pune or beyond the city. It is suitable for personal travel, family trips, corporate requirements, sightseeing, airport connections, and customized travel plans."
    },
    {
        name: "Cab Booking Pune",
        description: "Cab Booking Pune allows passengers to arrange private transportation for a wide range of daily and travel-related requirements. Customers can select suitable cab arrangements for local trips, airport transfers, business travel, tourist visits, one-way journeys, and round trips."
    },
    {
        name: "Cab Hire Pune",
        description: "Cab Hire Pune provides dedicated transportation for passengers who prefer a private vehicle instead of shared travel. It can be useful for families, tourists, professionals, airport passengers, event attendees, and individuals traveling around Pune or to nearby destinations."
    },
    {
        name: "Cab Rental Pune",
        description: "Cab Rental Pune offers flexible private transportation for local and longer-distance travel requirements. Customers can use the service for city tours, personal work, family outings, corporate travel, airport transportation, and planned journeys outside Pune."
    },
    {
        name: "AC Taxi Booking Pune",
        description: "AC Taxi Booking Pune provides an air-conditioned private vehicle for passengers seeking a more comfortable travel experience. It is suitable for city commuting, airport transfers, sightseeing, business travel, family journeys, and longer road trips from Pune."
    },
    {
        name: "Local Taxi Booking Pune",
        description: "Local Taxi Booking Pune is designed for convenient transportation within Pune and surrounding areas. Passengers can use private taxis for shopping, office travel, appointments, railway station transfers, hotel visits, sightseeing, family functions, and everyday city transportation."
    },
    {
        name: "Outstation Taxi Booking Pune",
        description: "Outstation Taxi Booking Pune provides private transportation for travelers heading from Pune to destinations outside the city. It can be arranged for weekend trips, family holidays, pilgrimage journeys, business travel, sightseeing, one-way transfers, and round-trip road journeys."
    },
    {
        name: "Airport Taxi Booking Pune",
        description: "Airport Taxi Booking Pune provides convenient private transportation for passengers traveling to or from Pune Airport. The service is useful for families, corporate travelers, tourists, students, and individuals carrying luggage who require organized airport pickup or drop arrangements."
    },
    {
        name: "One Way Taxi Pune",
        description: "One Way Taxi Pune is suitable for travelers who require transportation to a destination without booking the same vehicle for their return journey. It can support airport transfers, relocation, personal visits, business travel, and intercity journeys where separate return arrangements are preferred."
    },
    {
        name: "Round Trip Taxi Pune",
        description: "Round Trip Taxi Pune provides private transportation for both the onward and return portions of a planned journey. It is suitable for family outings, sightseeing tours, business visits, pilgrimage travel, weekend trips, and travelers returning to Pune after completing their work or holiday."
    },
    {
        name: "Corporate Taxi Booking Pune",
        description: "Corporate Taxi Booking Pune provides private transportation for professionals, employees, clients, guests, and business visitors. It can support office transfers, meetings, conferences, airport pickups, corporate events, client visits, and scheduled travel between business locations."
    },
    {
        name: "Family Taxi Booking Pune",
        description: "Family Taxi Booking Pune provides private transportation for families traveling with children, parents, senior citizens, and luggage. Dedicated travel allows families to maintain their own schedule while making convenient stops for meals, shopping, sightseeing, and other requirements."
    },
    {
        name: "Tourist Taxi Booking Pune",
        description: "Tourist Taxi Booking Pune is suitable for visitors exploring Pune's historical, cultural, religious, and scenic attractions. Travelers can create a customized sightseeing itinerary covering city landmarks, forts, temples, museums, gardens, and nearby destinations."
    },
    {
        name: "Affordable Taxi Booking Pune",
        description: "Affordable Taxi Booking Pune provides a practical private transportation option for customers looking for economical travel within Pune or to nearby destinations. It can be used for local commuting, airport transfers, family travel, sightseeing, and outstation requirements."
    },
    {
        name: "Taxi Near Me Pune",
        description: "Taxi Near Me Pune is useful for passengers looking for convenient private transportation close to their preferred pickup area. Customers can arrange taxis for immediate or planned local travel, airport transfers, business requirements, sightseeing, and other personal transportation needs."
    },
    {
        name: "Online Cab Booking Service Pune",
        description: "Online Cab Booking Service Pune provides a convenient way to organize private transportation for local and outstation journeys. Travelers can plan their cab according to their destination, pickup requirements, passenger count, luggage, preferred vehicle type, and travel schedule."
    },
    {
        name: "Pune Taxi Rental Service",
        description: "Pune Taxi Rental Service provides private transportation solutions for residents, tourists, business professionals, families, and visitors. The service can be used for city travel, airport connections, sightseeing, corporate requirements, family functions, and longer road journeys."
    },
    {
        name: "Pune City Taxi Booking",
        description: "Pune City Taxi Booking provides convenient private transportation across Pune's residential, commercial, industrial, and tourist areas. It is suitable for office travel, shopping, appointments, railway station transfers, hotel visits, sightseeing, and daily city requirements."
    },
    {
        name: "Pune Driver Taxi Service",
        description: "Pune Driver Taxi Service provides transportation with a professional driver for passengers who prefer not to drive themselves. It is suitable for local travel, airport transfers, family trips, business journeys, sightseeing, outstation travel, and occasions where convenient chauffeur-driven transportation is required."
    }
],

tableData: [
    ["Taxi Booking Pune", "Private taxi booking for local, airport, tourist, corporate, and outstation travel."],
    ["Online Taxi Booking Pune", "Convenient online arrangement for planned private taxi transportation."],
    ["Taxi Hire Pune", "Dedicated taxi hire for local travel, business trips, family outings, and sightseeing."],
    ["Taxi Rental Pune", "Private taxi rental for city travel and longer-distance transportation."],
    ["Cab Booking Pune", "Private cab booking for personal, family, tourist, and professional journeys."],
    ["Cab Hire Pune", "Dedicated cab hire for convenient transportation across Pune and nearby destinations."],
    ["Cab Rental Pune", "Flexible private cab rental for local and outstation travel requirements."],
    ["AC Taxi Booking Pune", "Air-conditioned taxi booking for comfortable city and long-distance journeys."],
    ["Local Taxi Booking Pune", "Private taxi service for everyday transportation within Pune."],
    ["Outstation Taxi Booking Pune", "Outstation taxi booking for travel from Pune to destinations outside the city."],
    ["Airport Taxi Booking Pune", "Private airport pickup and drop transportation for Pune Airport passengers."],
    ["One Way Taxi Pune", "Direct one-way taxi transportation for local and intercity journeys."],
    ["Round Trip Taxi Pune", "Private taxi arrangement for onward and return journeys."],
    ["Corporate Taxi Booking Pune", "Business transportation for employees, clients, guests, and corporate events."],
    ["Family Taxi Booking Pune", "Family-friendly private transportation for children, parents, and senior citizens."],
    ["Tourist Taxi Booking Pune", "Private tourist taxi for Pune sightseeing and customized city tours."],
    ["Affordable Taxi Booking Pune", "Economical private taxi option for daily, airport, tourist, and outstation travel."],
    ["Taxi Near Me Pune", "Convenient taxi arrangement based around the passenger's preferred Pune pickup area."],
    ["Online Cab Booking Service Pune", "Online private cab booking for local and outstation transportation needs."],
    ["Pune Taxi Rental Service", "Flexible taxi rental service for personal, family, corporate, and tourist travel."],
    ["Pune City Taxi Booking", "Private taxi booking for convenient transportation throughout Pune city."],
    ["Pune Driver Taxi Service", "Driver-operated private taxi service for local and long-distance journeys."]
],

whychoose: [
    {
        WhyChooseheading: "Convenient Taxi Booking Across Pune",
        WhyChoosedescription: "Private taxi transportation makes it easier to travel between Pune's residential, commercial, industrial, airport, and tourist areas without depending on shared transport schedules. Customers can plan pickup and drop arrangements according to their daily travel requirements."
    },
    {
        WhyChooseheading: "Local and Outstation Travel",
        WhyChoosedescription: "The service supports both everyday city transportation and journeys beyond Pune, making it suitable for different travel purposes. Passengers can arrange taxis for office visits, appointments, airport transfers, sightseeing, weekend trips, family travel, and longer road journeys."
    },
    {
        WhyChooseheading: "Airport Travel Made Easier",
        WhyChoosedescription: "Airport taxi arrangements provide dedicated transportation for passengers traveling to or from Pune Airport. Families with luggage, business professionals, tourists, and individuals can organize their airport journey around their flight schedule and preferred pickup location."
    },
    {
        WhyChooseheading: "Flexible One-Way and Return Options",
        WhyChoosedescription: "Travel plans can be matched with one-way or round-trip taxi arrangements depending on the passenger's requirements. This flexibility is useful for airport transfers, personal visits, business travel, sightseeing tours, family outings, and planned outstation journeys."
    },
    {
        WhyChooseheading: "Useful for Corporate Requirements",
        WhyChoosedescription: "Professionals and businesses can use private taxi transportation for meetings, employee movement, client visits, conferences, airport pickups, and corporate events. Dedicated vehicles provide greater flexibility when several business activities need to be covered in one day."
    },
    {
        WhyChooseheading: "Comfortable Family Transportation",
        WhyChoosedescription: "Families can travel together in a dedicated vehicle while carrying children, senior citizens, and luggage more conveniently. Private taxi travel also allows passengers to plan suitable breaks and adjust the journey around family needs."
    },
    {
        WhyChooseheading: "Convenient Pune Sightseeing",
        WhyChoosedescription: "Tourists can use private taxi services to explore historical landmarks, temples, forts, gardens, museums, and other attractions around Pune. A customized itinerary allows travelers to cover multiple locations without following a fixed public transportation route."
    },
    {
        WhyChooseheading: "AC and Driver-Operated Options",
        WhyChoosedescription: "Passengers can select air-conditioned and driver-operated taxi arrangements according to their comfort and travel preferences. These options are useful for daily city travel as well as longer journeys where travelers prefer a more relaxed and convenient transportation experience."
    }
]


};











const faqData = [
{
question: "How can I book a taxi in Pune?",
answer: "Booking a taxi in Pune can be done by sharing your pickup location, destination, travel date, preferred time, number of passengers, and vehicle preference. Ruturaj Enterprises can arrange suitable taxi transportation for local journeys, airport transfers, outstation travel, business trips, and sightseeing requirements."
},
{
question: "What types of taxi can I book in Pune?",
answer: "Different vehicle options can be selected according to passenger capacity, luggage, and comfort requirements. Sedan cars are suitable for smaller groups, while Ertiga, SUV, Innova, and Innova Crysta can be considered when additional seating and cabin space are required."
},
{
question: "Can I book a taxi in Pune for local travel?",
answer: "Local taxi booking is useful for daily transportation, shopping trips, railway station transfers, meetings, family visits, and city travel. The pickup and drop locations can be provided in advance so the journey can be arranged around your required schedule."
},
{
question: "Can I book a taxi from Pune Airport?",
answer: "Pune taxi booking can include airport pickup and drop services for passengers traveling to or from Pune Airport. The journey can be coordinated according to the flight schedule, passenger count, luggage, pickup location, and preferred vehicle type."
},
{
question: "Is it possible to book a taxi in Pune for outstation travel?",
answer: "Outstation taxi services can be arranged from Pune for destinations across Maharashtra and other states. Travelers can plan one-way or round-trip journeys to places such as Mumbai, Shirdi, Nashik, Mahabaleshwar, Goa, Bangalore, Hyderabad, and other destinations according to their itinerary."
},
{
question: "Can I book a taxi in Pune for a family trip?",
answer: "Families can select a private taxi based on the number of passengers and amount of luggage they are carrying. Spacious options such as Ertiga, SUV, Innova, and Innova Crysta can be considered for longer journeys where additional seating and comfortable cabin space are important."
},
{
question: "Can I book an Innova or Innova Crysta taxi in Pune?",
answer: "Innova and Innova Crysta taxis can be considered for families, corporate groups, and travelers who prefer a spacious vehicle. Selection can be based on passenger count, luggage requirements, travel distance, destination, and the comfort level required for the journey."
},
{
question: "Can I book a taxi in Pune for a one-way journey?",
answer: "One-way taxi booking can be useful when transportation is required from Pune to another city without needing the same vehicle for the return journey. The trip can be planned around the exact pickup location, destination, travel date, departure time, and passenger requirements."
},
{
question: "What information is required to book a taxi in Pune?",
answer: "Basic booking details generally include the pickup address, destination, travel date, preferred departure time, number of passengers, luggage details, and vehicle preference. Providing accurate information helps Ruturaj Enterprises coordinate the taxi according to the specific transportation requirement."
},
{
question: "Why choose Ruturaj Enterprises to book a taxi in Pune?",
answer: "Ruturaj Enterprises arranges taxi services in Pune for local transportation, airport transfers, outstation journeys, sightseeing, family travel, and corporate requirements. Vehicle selection and trip planning can be coordinated according to the route, passenger capacity, luggage, schedule, and type of journey."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Nitin Joshi",
feedback:
"I needed a taxi in Pune for several local visits and arranged the service through Ruturaj Enterprises. Sharing the pickup and destination details made the booking process straightforward, and the selected vehicle was suitable for my travel needs. Overall, it was a convenient option for moving around the city.",
rating: 5
},
{
id: 2,
name: "Miss. Riya Kulkarni",
feedback:
"I booked a Pune taxi for an airport transfer with Ruturaj Enterprises and found the arrangement convenient for my travel schedule. The private vehicle gave me enough space for my luggage, and having the pickup planned in advance made the journey easier to manage.",
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
  "name": "Book taxi in Pune",
  "image": "https://ruturajenterprises.com/assets/images/book-taxi-in-pune.webp",
  "description":
    "Book taxi in Pune for convenient local travel, airport transfers, outstation journeys, business trips, family travel, sightseeing and special occasions. Ruturaj Enterprises provides taxi booking, online taxi hire and rental services with comfortable AC vehicles, experienced drivers and flexible travel options. Customers can choose suitable cabs for one-way trips, round trips, airport pickup and drop, local transportation, corporate travel and longer journeys from Pune to popular destinations.",
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
    "url": "https://ruturajenterprises.com/book-taxi-in-pune"
  }
};








    return (
        <div>

<Helmet>
  <title>
    Book taxi in Pune | Taxi Booking Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Book taxi in Pune for local, airport and outstation travel. Choose comfortable AC cabs for family trips, corporate journeys, sightseeing, one-way and round-trip travel with Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Taxi Booking Pune, Online Taxi Booking Pune, Taxi Hire Pune, Taxi Rental Pune, Cab Booking Pune, Taxi Service Pune, Cab Hire Pune, Cab Rental Pune, Online Cab Booking Pune, Online Cab Hire Pune, Online Cab Rental Pune, Taxi Booking Service Pune, Taxi Hire Service Pune, Taxi Rental Service Pune, Cab Booking Service Pune, Cab Hire Service Pune, Cab Rental Service Pune, AC Taxi Booking Pune, AC Cab Booking Pune, AC Taxi Hire Pune, AC Cab Hire Pune, AC Taxi Rental Pune, AC Cab Rental Pune, Luxury Taxi Booking Pune, Luxury Cab Booking Pune, Premium Taxi Pune, Premium Cab Pune, Local Taxi Booking Pune, Local Cab Booking Pune, Local Taxi Hire Pune, Local Cab Hire Pune, Local Taxi Rental Pune, Local Cab Rental Pune, Outstation Taxi Booking Pune, Outstation Cab Booking Pune, Outstation Taxi Hire Pune, Outstation Cab Hire Pune, Outstation Taxi Rental Pune, Outstation Cab Rental Pune, One Way Taxi Booking Pune, One Way Cab Booking Pune, Round Trip Taxi Booking Pune, Round Trip Cab Booking Pune, Airport Taxi Booking Pune, Airport Cab Booking Pune, Airport Taxi Hire Pune, Airport Cab Hire Pune, Airport Taxi Rental Pune, Airport Cab Rental Pune, Taxi for Family Trip Pune, Cab for Family Trip Pune, Taxi for Group Travel Pune, Cab for Group Travel Pune, Taxi for Corporate Travel Pune, Cab for Corporate Travel Pune, Corporate Taxi Service Pune, Corporate Cab Service Pune, Taxi for Wedding Pune, Cab for Wedding Pune, Taxi for Sightseeing Pune, Cab for Sightseeing Pune, Pune Darshan Taxi Booking, Pune Darshan Cab Booking, One Day Taxi Rental Pune, One Day Cab Rental Pune, Weekend Taxi Rental Pune, Weekend Cab Rental Pune, Private Taxi Pune, Private Cab Pune, Taxi with Driver Pune, Cab with Driver Pune, Car Rental with Driver Pune, Taxi Near Me Pune, Cab Near Me Pune, Affordable Taxi Pune, Affordable Cab Pune, Comfortable Taxi Pune, Comfortable Cab Pune, Taxi Booking Online Pune, Cab Booking Online Pune, Taxi for Goa Trip Pune, Taxi for Mumbai Trip Pune, Taxi for Lonavala Trip Pune, Taxi for Mahabaleshwar Trip Pune, Taxi for Nashik Trip Pune, Taxi for Shirdi Trip Pune, Taxi for Kolhapur Trip Pune, Taxi for Konkan Trip Pune, Pune Airport Taxi Booking, Pune Railway Station Taxi Booking, Pune City Taxi Booking, Pune Local Travel Taxi, Pune Outstation Cab Service, Ruturaj Enterprises Taxi Booking Pune"
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
                            <img src='/images/keyword/70.jpg' alt='img' className='img-fluid' />
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

export default Booktaxiinpune;