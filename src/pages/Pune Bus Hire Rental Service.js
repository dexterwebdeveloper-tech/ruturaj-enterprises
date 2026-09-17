import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punebushirerentalservice() {


const cardData = {
keyword: "Pune Bus Hire Rental Service",
headingDescription: "Ruturaj Enterprises provides dependable Pune Bus Hire Rental Service for families, tourists, corporate teams, schools, wedding groups, event participants, and organizations requiring convenient group transportation. With options suitable for different passenger capacities, travel purposes, and journey lengths, customers can arrange buses for local programs as well as trips outside Pune. AC, luxury, mini bus, tourist, and larger group transportation options make it easier to select a vehicle according to seating requirements, luggage, route, and schedule. Whether the requirement is for an airport transfer, family holiday, wedding function, school excursion, corporate event, picnic, or outstation tour, Ruturaj Enterprises offers practical bus rental solutions for organized group travel.",
topPlaces: [
{
title: "Lavasa",
description: "Lavasa is a popular destination for family outings, corporate getaways, college groups, and weekend trips from Pune. Hiring a bus allows the complete group to travel together comfortably while carrying luggage and managing planned sightseeing or recreational activities."
},
{
title: "Khandala",
description: "Khandala is suitable for family holidays, office outings, school trips, and short group vacations from Pune. A dedicated bus provides convenient transportation for groups and avoids the need to coordinate several private cars along the route."
},
{
title: "Matheran",
description: "Matheran attracts families, tourists, school groups, and corporate teams looking for a hill-station getaway. Bus rental makes the Pune-to-destination journey easier to organize, particularly when several passengers need to travel according to the same schedule."
},
{
title: "Murud",
description: "Murud is a popular coastal destination for family trips, group holidays, picnics, and weekend travel. A spacious bus provides a practical solution for carrying passengers and travel bags together while maintaining a coordinated journey from Pune."
},
{
title: "Bhimashankar",
description: "Bhimashankar is frequently chosen for religious visits, family journeys, nature trips, and group tours. A hired bus helps devotees and travelers stay together throughout the journey and simplifies transportation planning for larger groups."
},
{
title: "Panchgani",
description: "Panchgani is well suited for school excursions, family vacations, corporate outings, and tourist programs. Group bus rental provides comfortable shared transportation and makes it easier to coordinate pickup, sightseeing, and return travel."
},
{
title: "Nashik",
description: "Nashik is a useful destination for religious tours, family travel, corporate programs, and sightseeing journeys from Pune. A dedicated bus can accommodate groups traveling on a common itinerary and provides convenient space for luggage and travel essentials."
},
{
title: "Goa",
description: "Goa is a preferred destination for extended holidays, college trips, family vacations, destination celebrations, and corporate outings. For longer journeys, selecting a suitable bus allows the entire group to travel together with comfortable seating and sufficient luggage capacity."
},
{
title: "Satara",
description: "Satara is convenient for family tours, educational trips, corporate outings, and group sightseeing programs from Pune. Bus rental helps keep passengers together and provides a practical transportation arrangement for planned travel schedules."
},
{
title: "Ganpatipule",
description: "Ganpatipule is suitable for beach holidays, family vacations, religious travel, and organized tourist groups. A dedicated bus makes long-distance group travel easier by providing shared transportation and allowing the itinerary to include planned stops along the route."
}
],
services: [
{
name: "Pune Bus Rental Service",
description: "Pune Bus Rental Service is suitable for customers planning group travel for family functions, tourist tours, corporate programs, school excursions, weddings, picnics, and events. Ruturaj Enterprises provides vehicle choices according to passenger capacity, destination, luggage requirements, and travel duration."
},
{
name: "Pune Bus Hire Service",
description: "Pune Bus Hire Service offers a convenient way to arrange shared transportation for groups traveling within Pune or to destinations outside the city. A suitable bus helps passengers remain together while simplifying pickup, route coordination, and return arrangements."
},
{
name: "Pune Bus Booking Service",
description: "Pune Bus Booking Service allows customers to plan group transportation around their preferred travel date, route, passenger count, and vehicle requirements. Advance bus planning is particularly useful for weddings, school trips, corporate events, holidays, and large gatherings."
},
{
name: "AC Bus Rental Service Pune",
description: "AC Bus Rental Service Pune provides an air-conditioned travel option for passengers who want additional comfort during local and long-distance journeys. It is suitable for families, tourists, corporate teams, wedding guests, students, and event participants."
},
{
name: "Luxury Bus Rental Service Pune",
description: "Luxury Bus Rental Service Pune is suitable for premium group travel, destination weddings, corporate programs, special celebrations, and private tours. Groups can enjoy a more comfortable and refined travel environment while remaining together throughout the journey."
},
{
name: "Mini Bus Rental Service Pune",
description: "Mini Bus Rental Service Pune is a practical choice for smaller groups that need more seating than individual cars but do not require a full-size bus. It can be used for family functions, office outings, airport transfers, local events, and short group tours."
},
{
name: "Outstation Bus Rental Pune",
description: "Outstation Bus Rental Pune supports long-distance group journeys to destinations across Maharashtra and other states. Depending on the group size, customers can select a suitable bus for family holidays, corporate travel, weddings, school tours, religious trips, and tourist programs."
},
{
name: "Wedding Bus Rental Pune",
description: "Wedding Bus Rental Pune helps families transport relatives and guests between homes, hotels, venues, reception locations, and other wedding-related destinations. Dedicated buses keep guests together and make wedding transportation easier to coordinate."
},
{
name: "Corporate Bus Rental Pune",
description: "Corporate Bus Rental Pune is useful for employee outings, business meetings, conferences, training programs, corporate celebrations, and team travel. A dedicated bus provides organized transportation according to office schedules, pickup points, and event requirements."
},
{
name: "School Trip Bus Rental Pune",
description: "School Trip Bus Rental Pune is suitable for educational tours, annual excursions, student outings, and school picnic programs. The appropriate bus capacity can be selected according to student numbers, accompanying staff, route distance, and overall trip requirements."
},
{
name: "Event Bus Rental Pune",
description: "Event Bus Rental Pune provides group transportation for exhibitions, conferences, cultural programs, private functions, celebrations, and other events. Bus schedules can be organized around event timings and pickup or drop locations to make participant movement more convenient."
},
{
name: "Group Bus Rental Pune",
description: "Group Bus Rental Pune is designed for families, friends, organizations, clubs, tour groups, and community gatherings traveling together. Hiring one suitable bus helps reduce coordination between multiple smaller vehicles and keeps the group on a common schedule."
},
{
name: "Airport Bus Rental Pune",
description: "Airport Bus Rental Pune is useful for transporting multiple passengers and their luggage to or from Pune Airport. It can be arranged for corporate teams, wedding guests, tourist groups, families, and organizations requiring coordinated airport transfers."
},
{
name: "Affordable Bus Rental Service Pune",
description: "Affordable Bus Rental Service Pune provides a practical transportation solution for groups looking to manage travel costs efficiently. Sharing a suitable bus among several passengers can reduce the requirement for multiple cars while providing organized group transportation."
},
{
name: "Bus Hire for Picnic Pune",
description: "Bus Hire for Picnic Pune is suitable for families, schools, offices, clubs, and social groups planning recreational day trips or longer outings. Spacious group transportation makes it easier to carry picnic supplies, bags, and other essentials while keeping everyone together."
},
{
name: "Bus Hire for Marriage Pune",
description: "Bus Hire for Marriage Pune helps arrange transportation for relatives, guests, and family members attending marriage ceremonies. Buses can be used for transfers between pickup points, accommodations, wedding venues, reception locations, and other places included in the function schedule."
},
{
name: "Bus Hire for Corporate Events Pune",
description: "Bus Hire for Corporate Events Pune supports employee transportation for conferences, seminars, annual functions, team celebrations, business events, and corporate outings. Group bus service helps organizers coordinate employee movement according to event timings and planned routes."
},
{
name: "Bus Hire for Family Trips Pune",
description: "Bus Hire for Family Trips Pune makes travel convenient when relatives and family members are planning a shared vacation. An appropriately sized bus can provide comfortable seating and space for luggage while allowing everyone to follow one common travel schedule."
},
{
name: "Bus Hire for Outstation Pune",
description: "Bus Hire for Outstation Pune provides shared transportation for long-distance holidays, religious tours, corporate journeys, destination functions, and sightseeing trips. Customers can choose the vehicle size according to the number of passengers, route, luggage, and travel duration."
},
{
name: "Bus Hire for School Trips Pune",
description: "Bus Hire for School Trips Pune offers organized transportation for educational tours, school excursions, annual trips, and student outings. A suitable bus helps students and accompanying staff remain together and makes the overall journey easier to manage."
},
{
name: "AC Bus Hire Service Pune",
description: "AC Bus Hire Service Pune provides comfortable air-conditioned transportation for local programs, outstation tours, weddings, corporate events, family trips, and group travel. It is especially useful when passengers expect a more comfortable environment during longer journeys."
},
{
name: "Tourist Bus Rental Pune",
description: "Tourist Bus Rental Pune is suitable for sightseeing tours, multi-destination holidays, religious journeys, family vacations, and organized tourist groups. Different bus options can be selected according to group size, itinerary, luggage requirements, and overall comfort preferences."
}
],
tableData: [
["Pune Bus Rental Service", "Pune Bus Hire Service"],
["Pune Bus Booking Service", "AC Bus Rental Service Pune"],
["Luxury Bus Rental Service Pune", "Mini Bus Rental Service Pune"],
["Outstation Bus Rental Pune", "Wedding Bus Rental Pune"],
["Corporate Bus Rental Pune", "School Trip Bus Rental Pune"],
["Event Bus Rental Pune", "Group Bus Rental Pune"],
["Airport Bus Rental Pune", "Affordable Bus Rental Service Pune"],
["Bus Hire for Picnic Pune", "Bus Hire for Marriage Pune"],
["Bus Hire for Corporate Events Pune", "Bus Hire for Family Trips Pune"],
["Bus Hire for Outstation Pune", "Bus Hire for School Trips Pune"],
["AC Bus Hire Service Pune", "Tourist Bus Rental Pune"]
],
whychoose: [
{
WhyChooseheading: "Wide Range of Group Travel Options",
WhyChoosedescription: "Ruturaj Enterprises caters to different types of group transportation requirements, from smaller family groups to larger school, wedding, corporate, and tourist groups. Vehicle selection can be based on passenger count, destination, luggage, and travel purpose."
},
{
WhyChooseheading: "Comfortable AC Travel Choices",
WhyChoosedescription: "Passengers traveling during warm weather or on longer routes can choose air-conditioned bus options for a more pleasant journey. These buses are useful for families, tourists, employees, students, wedding guests, and event participants."
},
{
WhyChooseheading: "Suitable for Multiple Occasions",
WhyChoosedescription: "Bus rental can be arranged for weddings, marriages, school trips, corporate events, picnics, family holidays, airport transfers, tourist tours, and other group programs. This makes the service adaptable to different travel schedules and requirements."
},
{
WhyChooseheading: "Convenient Outstation Transportation",
WhyChoosedescription: "Traveling outside Pune becomes easier when the complete group uses one dedicated vehicle. This reduces the coordination required between multiple cars and helps passengers follow a common route, schedule, and sightseeing plan."
},
{
WhyChooseheading: "Options for Different Group Sizes",
WhyChoosedescription: "Not every journey requires the same seating capacity, so selecting the right vehicle is important for practical travel. Mini buses and larger buses can be considered according to the number of passengers and the amount of luggage being carried."
},
{
WhyChooseheading: "Useful for Corporate and School Groups",
WhyChoosedescription: "Organizations and educational institutions often need planned transportation for employees or students. A dedicated bus provides coordinated group movement for meetings, conferences, excursions, annual trips, training programs, and corporate outings."
},
{
WhyChooseheading: "Easy Wedding and Event Transportation",
WhyChoosedescription: "Large functions often involve transportation between several locations, making group bus service especially useful. Guests and participants can be moved together between hotels, pickup points, venues, and event locations according to the planned schedule."
},
{
WhyChooseheading: "Practical Group Travel Planning",
WhyChoosedescription: "A well-selected bus can simplify the complete travel arrangement by combining passengers in one vehicle. Ruturaj Enterprises focuses on matching bus rental requirements with group size, route distance, trip purpose, comfort preferences, and planned itinerary."
}
]
};
















const faqData = [
{
question: "Why choose Ruturaj Enterprises for Pune Bus Hire Rental Service?",
answer: "Ruturaj Enterprises offers bus hire and rental solutions in Pune for families, companies, educational groups, wedding parties, tour groups, and event organizers. Different bus capacities can be considered according to passenger count, destination, travel duration, and the type of journey being planned."
},
{
question: "Who can use a Pune Bus Hire Rental Service?",
answer: "Families, corporate teams, schools, colleges, wedding organizers, tour operators, social groups, and event planners can hire buses in Pune for local and outstation transportation. A suitable vehicle can help larger groups travel together while keeping their itinerary organized."
},
{
question: "Can I hire a bus in Pune for an outstation journey?",
answer: "Bus rental services can be used for outstation trips from Pune to destinations such as Mumbai, Goa, Shirdi, Mahabaleshwar, Nashik, Kolhapur, Konkan, Hyderabad, Bengaluru, and other locations. The journey can be arranged according to the group's route and travel schedule."
},
{
question: "What types of buses can be hired in Pune?",
answer: "The required vehicle depends on the number of passengers and the purpose of the journey. Ruturaj Enterprises can arrange group transportation options such as 20, 26, 32, 35, 45, and 50 Seater Buses for family tours, corporate programs, school trips, weddings, events, and other group travel requirements."
},
{
question: "Can I book a bus for a family trip from Pune?",
answer: "Family groups can hire a bus for vacations, reunions, religious tours, sightseeing programs, and multi-day journeys. Keeping family members together in one vehicle can simplify coordination at pickup points, sightseeing stops, accommodation locations, and return journeys."
},
{
question: "Is Pune bus rental available for wedding transportation?",
answer: "Wedding families and event organizers can use bus rental services to transport relatives and guests between homes, hotels, marriage halls, reception venues, railway stations, and airports. The vehicle capacity can be selected according to the number of guests requiring transportation."
},
{
question: "Can companies hire buses for corporate travel in Pune?",
answer: "Corporate organizations can arrange buses for employee outings, conferences, seminars, training programs, industrial visits, team-building activities, business events, and company tours. Dedicated group transportation can make employee movement easier to coordinate around a fixed business schedule."
},
{
question: "Can schools and colleges use Pune bus rental services?",
answer: "Educational institutions can hire buses for school picnics, college excursions, educational tours, industrial visits, study programs, sports events, and cultural activities. A dedicated bus allows students, teachers, and accompanying staff to follow a common travel itinerary."
},
{
question: "Can I hire a bus for events and sightseeing in Pune?",
answer: "Bus rental services can support weddings, exhibitions, conferences, cultural programs, family functions, religious gatherings, and sightseeing tours. Groups can travel together between multiple venues or attractions without having to coordinate several smaller vehicles."
},
{
question: "How can I book a Pune Bus Hire Rental Service?",
answer: "To arrange a bus with Ruturaj Enterprises, provide your pickup location, destination, travel date, passenger count, preferred bus capacity, journey duration, and route details. Sharing the complete travel plan helps organize a suitable rental arrangement for your group."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Dinesh Shinde",
feedback:
"We hired a bus from Ruturaj Enterprises for a family tour from Pune and found the group transportation very convenient. Everyone could travel together and follow the same itinerary without managing several separate vehicles. The rental arrangement worked well for our trip.",
rating: 5
},
{
id: 2,
name: "Miss. Vaishali Pawar",
feedback:
"Our group booked a bus through Ruturaj Enterprises for an event outside Pune. Coordinating guests and transportation between the different locations was much easier with a dedicated bus. The service suited our passenger count and made the travel planning more organized.",
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
  "name": "Pune Bus Hire Rental Service",
  "image": "https://ruturajenterprises.com/assets/images/pune-bus-hire-rental-service.webp",
  "description":
    "Pune Bus Hire Rental Service from Ruturaj Enterprises offers flexible group transportation for families, tourists, corporate teams, schools, colleges, wedding groups, event organizers and other passengers travelling within Pune or to outstation destinations. Pune Bus Rental Service is suitable for local sightseeing, family trips, group tours, corporate transportation, school excursions, wedding guest movement, events, airport transfers and customized travel plans. Pune Bus Hire Service can be arranged according to passenger capacity, pickup location, destination, travel date, journey duration and itinerary. Pune Bus Booking Service provides a convenient way to plan dedicated transportation for one-day programs, weekend trips, multi-day tours and regular group travel requirements. AC Bus Rental Service Pune is suitable for comfortable travel during warm weather and longer journeys, while Luxury Bus Rental Service Pune can be selected for premium weddings, corporate events, special occasions, conferences and organized tours. Mini Bus Rental Service Pune is useful for smaller groups requiring a compact vehicle for local travel, airport transfers, family functions, office programs and sightseeing. Outstation Bus Rental Pune can support journeys from Pune to Mumbai, Lonavala, Khandala, Mahabaleshwar, Panchgani, Matheran, Alibaug, Nashik, Shirdi, Satara, Kolhapur, Sangli, Solapur, Konkan, Ratnagiri, Ganpatipule, Goa, Hyderabad, Bangalore and other destinations. Wedding Bus Rental Pune provides group transportation for marriage ceremonies, receptions, haldi, mehendi, sangeet and destination wedding functions, while Corporate Bus Rental Pune can support employee transportation, office commuting, conferences, meetings, training programs, exhibitions and team outings. School and college groups can also arrange buses for educational tours, picnics, industrial visits, sports events and excursions. Different seating capacities including 20 Seater, 26 Seater, 32 Seater, 35 Seater, 45 Seater and 50 Seater buses can be selected according to passenger requirements and availability. Airport pickup and drop, railway station transfers, hotel transportation, resort transfers and multi-point guest movement can be included in customized itineraries. Service coverage can include Kothrud, Baner, Aundh, Wakad, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, Magarpatta, Kalyani Nagar, Yerawada, Shivajinagar, Swargate, Kondhwa, Katraj, Pimpri, Chinchwad, Bhosari, Moshi and Talegaon. Ruturaj Enterprises supports local, full-day, weekend, event-based, multi-day and outstation bus rental requirements with suitable vehicle capacities, planned routes and dedicated driver support.",
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
    "url": "https://ruturajenterprises.com/pune-bus-hire-rental-service"
  }
};






    return (
        <div>
<Helmet>
  <title>Pune Bus Hire Rental Service | Pune Bus Rental Service | +91 9763381382</title>

  <meta
    name="description"
    content="Pune Bus Hire Rental Service for local and outstation travel, weddings, corporate events, school trips, family tours, sightseeing, airport transfers and group transportation."
  />

  <meta
    name="keywords"
    content="Pune Bus Rental Service, Pune Bus Hire Service, Pune Bus Booking Service, AC Bus Rental Service Pune, Luxury Bus Rental Service Pune, Mini Bus Rental Service Pune, Outstation Bus Rental Pune, Wedding Bus Rental Pune, Corporate Bus Rental Pune, Pune Bus Hire Rental Service, Bus Rental Service Pune, Bus Hire Service Pune, Bus Booking Service Pune, Bus on Rent Pune, Bus Hire Pune, Bus Booking Pune, Private Bus Rental Pune, Private Bus Hire Pune, Private Bus Booking Pune, AC Bus Rental Pune, AC Bus Hire Pune, AC Bus Booking Pune, Luxury Bus Rental Pune, Luxury Bus Hire Pune, Luxury Bus Booking Pune, Mini Bus Rental Pune, Mini Bus Hire Pune, Mini Bus Booking Pune, Bus with Driver Pune, Bus Rental with Driver Pune, Affordable Bus Rental Pune, Comfortable Bus Rental Pune, Premium Bus Rental Pune, Group Bus Rental Pune, Group Bus Hire Pune, Group Bus Booking Pune, Family Bus Rental Pune, Tourist Bus Rental Pune, Tour Bus Rental Pune, Tour Bus Hire Pune, Tour Bus Booking Pune, Group Travel Bus Pune, Family Trip Bus Pune, Friends Trip Bus Pune, Sightseeing Bus Rental Pune, Pune Darshan Bus Rental Pune, Local Bus Rental Pune, Local Sightseeing Bus Pune, Full Day Bus Rental Pune, Half Day Bus Rental Pune, Weekend Bus Rental Pune, Multi Day Bus Rental Pune, One Way Bus Rental Pune, Round Trip Bus Rental Pune, Outstation Bus Hire Pune, Outstation Bus Booking Pune, AC Bus for Outstation Pune, Luxury Bus for Outstation Pune, Outstation Group Bus Pune, Outstation Family Bus Pune, Outstation Tourist Bus Pune, Outstation Travel Bus Pune, Outstation Tour Bus Pune, Wedding Bus Hire Pune, Wedding Bus Booking Pune, Wedding Guest Bus Rental Pune, Wedding Guest Transportation Pune, Marriage Bus Rental Pune, Marriage Bus Hire Pune, Marriage Bus Booking Pune, Marriage Function Bus Pune, Wedding Event Bus Pune, Wedding Shuttle Bus Pune, Corporate Bus Hire Pune, Corporate Bus Booking Pune, Corporate Staff Transportation Pune, Corporate Employee Bus Pune, Employee Transportation Bus Pune, Staff Bus Rental Pune, Office Bus Rental Pune, Office Staff Transportation Pune, Corporate Event Bus Pune, Corporate Outing Bus Pune, Corporate Travel Bus Pune, Corporate Conference Bus Pune, Corporate Seminar Bus Pune, Corporate Exhibition Bus Pune, School Bus Rental Pune, School Trip Bus Rental Pune, School Picnic Bus Pune, School Tour Bus Pune, Educational Tour Bus Pune, College Trip Bus Pune, Student Group Bus Pune, Industrial Visit Bus Pune, Event Bus Rental Pune, Event Bus Hire Pune, Event Bus Booking Pune, Event Transportation Bus Pune, Event Shuttle Bus Pune, Conference Bus Rental Pune, Seminar Bus Rental Pune, Exhibition Bus Rental Pune, Airport Bus Rental Pune, Airport Transfer Bus Pune, Airport Pickup Bus Pune, Airport Drop Bus Pune, Railway Station Bus Rental Pune, Hotel Transfer Bus Pune, Resort Transfer Bus Pune, Guest Transportation Bus Pune, 20 Seater Bus Rental Pune, 20 Seater Bus Hire Pune, 20 Seater Bus Booking Pune, 26 Seater Bus Rental Pune, 26 Seater Bus Hire Pune, 26 Seater Bus Booking Pune, 32 Seater Bus Rental Pune, 32 Seater Bus Hire Pune, 32 Seater Bus Booking Pune, 35 Seater Bus Rental Pune, 35 Seater Bus Hire Pune, 35 Seater Bus Booking Pune, 45 Seater Bus Rental Pune, 45 Seater Bus Hire Pune, 45 Seater Bus Booking Pune, 50 Seater Bus Rental Pune, 50 Seater Bus Hire Pune, 50 Seater Bus Booking Pune, Bus Rental Near Pune, Bus Hire Near Pune, Bus Booking Near Pune, Bus Rental Pimpri Chinchwad, Bus Hire Pimpri Chinchwad, Bus Rental Kothrud, Bus Hire Kothrud, Bus Rental Baner, Bus Hire Baner, Bus Rental Aundh, Bus Hire Aundh, Bus Rental Wakad, Bus Hire Wakad, Bus Rental Hinjewadi, Bus Hire Hinjewadi, Bus Rental Viman Nagar, Bus Hire Viman Nagar, Bus Rental Kharadi, Bus Hire Kharadi, Bus Rental Hadapsar, Bus Hire Hadapsar, Bus Rental Magarpatta, Bus Hire Magarpatta, Bus Rental Kalyani Nagar, Bus Hire Kalyani Nagar, Bus Rental Yerawada, Bus Hire Yerawada, Bus Rental Shivajinagar, Bus Hire Shivajinagar, Bus Rental Swargate, Bus Hire Swargate, Bus Rental Kondhwa, Bus Hire Kondhwa, Bus Rental Katraj, Bus Hire Katraj, Bus Rental Pimpri, Bus Hire Pimpri, Bus Rental Chinchwad, Bus Hire Chinchwad, Bus Rental Bhosari, Bus Hire Bhosari, Bus Rental Moshi, Bus Hire Moshi, Bus Rental Talegaon, Bus Hire Talegaon"
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
                            <img src='/images/keyword/21.jpg' alt='img' className='img-fluid' />
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

export default Punebushirerentalservice;