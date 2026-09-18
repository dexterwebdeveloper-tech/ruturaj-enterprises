import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Rentabuspune() {

const cardData = {
keyword: "Rent a Bus Pune",
headingDescription: "Ruturaj Enterprises offers convenient and professionally managed Rent a Bus Pune services for families, friends, corporate teams, schools, colleges, tourists, wedding groups, event organizers, and large travel parties. Buses can be arranged from Pune for outstation journeys, family vacations, group tours, corporate programs, wedding functions, school excursions, airport transfers, picnics, sightseeing plans, one-day trips, pilgrimage visits, and customized travel schedules. Depending on the group size and journey requirements, customers can choose AC, non-AC, luxury, affordable, tourist, family, corporate, and spacious buses with suitable seating capacity and luggage space. The service is planned around pickup locations, travel distance, destination requirements, sightseeing stops, trip duration, passenger comfort, and budget, helping groups stay together throughout the journey while reducing the coordination difficulties associated with multiple cars.",
topPlaces: [
{
title: "Lonavala",
description: "Lonavala is a popular short-trip destination from Pune for families, college groups, corporate teams, and weekend travelers, making it suitable for organized bus journeys with comfortable group transportation. A rented bus can accommodate passengers together while allowing convenient travel toward viewpoints, resorts, picnic locations, and nearby attractions according to the planned itinerary."
},
{
title: "Shirdi",
description: "Shirdi attracts families, religious groups, senior citizens, and tour parties traveling from Pune for temple visits and planned pilgrimage programs. Renting a bus allows the entire group to travel together with coordinated pickup, luggage arrangements, comfortable seating, scheduled meal breaks, and convenient return transportation."
},
{
title: "Dapoli",
description: "Dapoli is well suited for family holidays, college outings, corporate retreats, and group beach trips from Pune, especially when travelers want shared transportation for the complete journey. A dedicated bus makes it easier to coordinate departure times, luggage, resort transfers, sightseeing stops, and group movement throughout the coastal itinerary."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a preferred destination for family vacations, school excursions, corporate outings, and group tours from Pune because of its scenic surroundings and sightseeing opportunities. A rented bus provides a practical way for larger groups to travel together while managing luggage, planned stops, hotel transfers, and sightseeing schedules."
},
{
title: "Ganpatipule",
description: "Ganpatipule combines coastal scenery, temple visits, and leisure attractions, making it a suitable destination for families and organized groups traveling from Pune. Group bus transportation can simplify the long-distance journey by keeping passengers together and supporting planned stops, accommodation transfers, sightseeing visits, and return travel."
},
{
title: "Nashik",
description: "Nashik is suitable for pilgrimage tours, family trips, corporate travel, educational excursions, and weekend group programs originating from Pune. A rented bus offers coordinated transportation for larger parties and can accommodate planned visits around temples, vineyards, cultural attractions, hotels, and nearby destinations included in the itinerary."
},
{
title: "Kashid",
description: "Kashid is a popular coastal getaway for friends, families, college groups, and corporate teams looking for a relaxed group trip from Pune. Hiring a bus provides shared transportation with space for passengers and luggage while making it easier to organize beach visits, resort transfers, meal breaks, and scheduled return journeys."
},
{
title: "Kolhapur",
description: "Kolhapur is a useful destination for cultural tours, family journeys, pilgrimage programs, corporate trips, and multi-day group travel from Pune. A dedicated bus allows travelers to remain together while visiting temples, historical attractions, local sightseeing points, hotels, and nearby destinations according to their customized travel plan."
},
{
title: "Bhandardara",
description: "Bhandardara offers a scenic setting for family vacations, school trips, college outings, corporate retreats, and weekend group excursions from Pune. Bus rental makes group transportation easier by providing shared seating, luggage capacity, coordinated pickup arrangements, and flexibility for visiting viewpoints, nature spots, camping areas, and nearby attractions."
},
{
title: "Goa",
description: "Goa is a popular long-distance destination for friends, families, corporate groups, college parties, and organized tourist programs traveling from Pune. A dedicated bus can support multi-day travel with sufficient passenger seating and luggage space while helping groups coordinate accommodation transfers, sightseeing schedules, meal stops, and the return journey."
}
],
services: [
{
name: "Bus On Rent Pune",
description: "Ruturaj Enterprises arranges Bus On Rent Pune services for families, friends, organizations, schools, tourists, and large groups requiring shared transportation from Pune. Vehicles can be selected according to passenger capacity, trip distance, luggage requirements, comfort preferences, itinerary, and travel budget for local programs as well as longer journeys."
},
{
name: "Bus Rental Pune",
description: "Bus Rental Pune solutions are suitable for planned tours, family vacations, corporate programs, wedding functions, school excursions, picnics, and group sightseeing requirements. The rental arrangement can be organized around the complete itinerary, including pickup points, destination transfers, sightseeing stops, waiting requirements, and scheduled return travel."
},
{
name: "Bus Hire Pune",
description: "Bus Hire Pune services provide a convenient transportation option when a group needs to travel together instead of arranging several separate cars. Ruturaj Enterprises can coordinate suitable bus options based on group size, route, journey duration, luggage volume, comfort level, and the number of planned destinations."
},
{
name: "Bus Booking Pune",
description: "Bus Booking Pune services help customers arrange group transportation in advance for tours, weddings, school programs, corporate events, airport transfers, family trips, and tourist journeys. Travel requirements such as passenger count, pickup location, destination, preferred bus type, travel dates, and itinerary can be considered while planning the booking."
},
{
name: "AC Bus on Rent Pune",
description: "AC Bus on Rent Pune is suitable for passengers looking for a more comfortable environment during family vacations, corporate travel, weddings, tourist tours, and longer outstation journeys. Air-conditioned group transportation helps maintain a comfortable travel atmosphere while providing shared seating and organized movement for larger parties."
},
{
name: "Non AC Bus on Rent Pune",
description: "Non AC Bus on Rent Pune services provide a practical group transportation option for customers looking for economical travel arrangements. These buses can be useful for school trips, picnics, local programs, short tours, large gatherings, and budget-conscious journeys where passenger capacity and reliable group movement are important."
},
{
name: "Luxury Bus on Rent Pune",
description: "Luxury Bus on Rent Pune services are designed for groups that place greater emphasis on comfortable seating, spacious interiors, premium travel arrangements, and a more refined journey experience. They can be considered for corporate programs, wedding travel, family vacations, special events, VIP group movements, and long-distance tourist itineraries."
},
{
name: "Bus for Outstation Pune",
description: "Bus for Outstation Pune services are suitable for journeys to destinations across Maharashtra and other states, including family tours, pilgrimages, corporate programs, educational trips, and vacations. The transportation plan can be structured around the complete route, overnight requirements, sightseeing stops, accommodation transfers, passenger count, and return schedule."
},
{
name: "Bus for Family Trip Pune",
description: "Bus for Family Trip Pune arrangements make group vacations easier by allowing relatives and family members to travel together from the same pickup point or coordinated locations. The service can support luggage, sightseeing stops, hotel transfers, meal breaks, child-friendly travel planning, and multi-day itineraries based on the family's destination and schedule."
},
{
name: "Bus for Group Travel Pune",
description: "Bus for Group Travel Pune services are useful when friends, relatives, associations, clubs, educational groups, or tour parties need coordinated transportation for a common journey. A dedicated bus keeps passengers together and can be planned according to group size, route, luggage requirements, sightseeing schedule, travel duration, and return arrangements."
},
{
name: "Bus for Corporate Events Pune",
description: "Bus for Corporate Events Pune services support employee transportation, conferences, seminars, business gatherings, team outings, corporate celebrations, and off-site programs. Dedicated group transportation helps coordinate employee pickup points, venue transfers, scheduled departures, luggage, event timings, and return journeys while keeping the corporate group organized."
},
{
name: "Bus for Wedding Pune",
description: "Bus for Wedding Pune services provide organized transportation for wedding guests traveling between homes, hotels, ceremony venues, reception locations, and other functions. Bus arrangements can be planned around guest numbers, event timings, multiple pickup points, luggage needs, venue distances, and the complete wedding schedule."
},
{
name: "Bus for School Trip Pune",
description: "Bus for School Trip Pune services are suitable for educational excursions, study tours, museum visits, nature camps, historical tours, picnics, and intercity student programs. Group transportation can be scheduled around school departure times, teacher requirements, student seating capacity, planned stops, destination activities, and the return journey."
},
{
name: "Bus for Airport Pickup Pune",
description: "Bus for Airport Pickup Pune services can be arranged for large families, corporate teams, tour groups, wedding parties, and organizations requiring coordinated airport transportation. The service can help manage passenger movement and luggage between Pune-area pickup points and the airport while supporting scheduled arrivals, departures, hotel transfers, and onward travel plans."
},
{
name: "Affordable Bus on Rent Pune",
description: "Affordable Bus on Rent Pune services are designed for customers who want practical group transportation while maintaining control over overall travel expenses. Suitable options can be planned according to passenger capacity, route distance, trip duration, luggage requirements, number of stops, and preferred travel arrangement for economical group journeys."
},
{
name: "Bus Rental Service Pune",
description: "Bus Rental Service Pune supports different group transportation requirements, including tourist tours, family vacations, school trips, corporate events, weddings, picnics, airport transfers, and outstation programs. Ruturaj Enterprises can organize the rental around the customer's itinerary, pickup requirements, passenger count, bus category, travel duration, and destination schedule."
},
{
name: "Bus for Picnic Pune",
description: "Bus for Picnic Pune services are convenient for schools, colleges, families, offices, clubs, and friend groups planning recreational day trips or longer picnic programs. A dedicated bus allows passengers to travel together with coordinated departure times, luggage arrangements, meal breaks, sightseeing stops, recreational locations, and return transportation."
},
{
name: "Bus for Local Sightseeing Pune",
description: "Bus for Local Sightseeing Pune services can be used by larger groups visiting multiple attractions during a planned sightseeing program around Pune and nearby destinations. Transportation can be arranged according to the preferred route, passenger count, sightseeing duration, pickup points, stop sequence, luggage requirements, and final drop location."
},
{
name: "Bus for One Day Trip Pune",
description: "Bus for One Day Trip Pune services are suitable for short group journeys where passengers want a coordinated departure and return on the same day. The itinerary can include destination travel, sightseeing stops, meal breaks, waiting time, group activities, and a planned return schedule while keeping everyone together throughout the trip."
},
{
name: "Bus for Corporate Travel Pune",
description: "Bus for Corporate Travel Pune arrangements can support employee transportation, business meetings, conferences, training programs, client visits, team outings, and company tours. Dedicated buses help coordinate multiple employees through planned pickup points, venue transfers, scheduled reporting times, luggage handling, and organized return transportation."
},
{
name: "Bus for Marriage Function Pune",
description: "Bus for Marriage Function Pune services help families coordinate transportation for guests attending ceremonies, receptions, engagement functions, pre-wedding events, and related gatherings. The bus schedule can be aligned with event timings and multiple pickup locations so guests can reach venues together and return safely according to the planned function schedule."
},
{
name: "Bus for Tourist Trip Pune",
description: "Bus for Tourist Trip Pune services are suitable for families, friends, travel groups, associations, and organized tourist parties visiting destinations across Maharashtra and other states. Ruturaj Enterprises can support customized itineraries covering sightseeing, hotel transfers, meal stops, overnight travel, passenger requirements, luggage, and scheduled return journeys."
}
],
tableData: [
["Bus On Rent Pune", "Group bus rental for family, corporate, tourist, school, wedding, picnic, and outstation travel from Pune."],
["Bus Rental Pune", "Flexible bus rental arrangements planned according to passenger capacity, route, duration, itinerary, and travel requirements."],
["Bus Hire Pune", "Convenient dedicated bus hiring for groups traveling together from Pune to local, regional, and outstation destinations."],
["Bus Booking Pune", "Advance bus booking support for tours, events, weddings, school trips, corporate programs, and group journeys."],
["AC Bus on Rent Pune", "Air-conditioned bus options for comfortable family trips, corporate travel, weddings, tours, and long-distance journeys."],
["Non AC Bus on Rent Pune", "Economical non-AC group transportation suitable for picnics, school trips, short tours, and budget travel."],
["Luxury Bus on Rent Pune", "Premium bus arrangements for corporate groups, weddings, special events, family vacations, and comfortable long-distance travel."],
["Bus for Outstation Pune", "Dedicated buses for organized outstation journeys, multi-day tours, pilgrimages, vacations, and group travel."],
["Bus for Family Trip Pune", "Family-focused bus travel with coordinated seating, luggage arrangements, sightseeing stops, and planned return schedules."],
["Bus for Group Travel Pune", "Shared group transportation for friends, relatives, associations, clubs, and organized travel parties."],
["Bus for Corporate Events Pune", "Corporate transportation for conferences, seminars, team outings, business events, and company gatherings."],
["Bus for Wedding Pune", "Wedding guest transportation between pickup points, hotels, ceremony venues, reception locations, and functions."],
["Bus for School Trip Pune", "Organized school excursion transportation for educational tours, picnics, nature trips, and student programs."],
["Bus for Airport Pickup Pune", "Coordinated airport transportation for large groups, families, corporate teams, wedding parties, and tourists."],
["Affordable Bus on Rent Pune", "Budget-conscious group bus rental based on passenger count, route, duration, luggage, and itinerary requirements."],
["Bus Rental Service Pune", "Complete bus rental support for tours, weddings, corporate events, school trips, picnics, and outstation travel."],
["Bus for Picnic Pune", "Group transportation for recreational outings, school picnics, office trips, family gatherings, and day tours."],
["Bus for Local Sightseeing Pune", "Dedicated transportation for organized sightseeing programs with planned pickup points, stops, and drop locations."],
["Bus for One Day Trip Pune", "Same-day group transportation with coordinated departure, sightseeing, meal breaks, waiting time, and return travel."],
["Bus for Corporate Travel Pune", "Employee and business group transportation for meetings, conferences, training, tours, and corporate outings."],
["Bus for Marriage Function Pune", "Guest transportation for marriage ceremonies, receptions, engagement functions, and related family events."],
["Bus for Tourist Trip Pune", "Tourist bus arrangements for customized sightseeing, family holidays, multi-day tours, and destination travel."]
],
whychoose: [
{
WhyChooseheading: "Multiple Bus Categories",
WhyChoosedescription: "Ruturaj Enterprises can help customers select suitable bus categories according to passenger count, journey distance, comfort expectations, luggage requirements, and overall travel plans. Options can be considered for economical trips, AC travel, premium group transportation, family vacations, corporate programs, weddings, school excursions, and tourist journeys."
},
{
WhyChooseheading: "Planned Group Transportation",
WhyChoosedescription: "Every group journey can be organized around important travel details such as pickup locations, destination, departure timing, sightseeing stops, meal breaks, waiting periods, and return schedules. This structured approach helps large groups maintain a common travel plan instead of coordinating several independent vehicles throughout the journey."
},
{
WhyChooseheading: "Outstation Travel Support",
WhyChoosedescription: "Pune-based groups can arrange bus transportation for destinations across Maharashtra and other states, whether the requirement is a short weekend trip or a multi-day tour. Route planning can accommodate family vacations, pilgrimages, corporate travel, school programs, wedding functions, tourist circuits, and customized group itineraries."
},
{
WhyChooseheading: "Suitable for Large Groups",
WhyChoosedescription: "Large passenger groups can benefit from traveling in a dedicated bus with everyone following the same schedule and route. This arrangement is particularly useful for weddings, school groups, corporate teams, family gatherings, tourist parties, associations, and event-related transportation where coordinated movement is important."
},
{
WhyChooseheading: "Flexible Trip Planning",
WhyChoosedescription: "Travel arrangements can be structured around the actual requirements of the group rather than following a single fixed journey pattern. Customers can discuss pickup points, destinations, intermediate stops, trip duration, sightseeing plans, overnight travel, luggage needs, and return schedules while organizing their bus requirement."
},
{
WhyChooseheading: "Comfort-Focused Journeys",
WhyChoosedescription: "Passenger comfort can be considered while selecting the appropriate bus category for the journey, particularly for longer routes and multi-day travel programs. Seating capacity, air-conditioning requirements, luggage space, travel duration, planned breaks, and the nature of the itinerary can all be considered during transportation planning."
},
{
WhyChooseheading: "Useful for Different Occasions",
WhyChoosedescription: "The bus rental service can support a wide range of travel occasions, from school excursions and family vacations to corporate events, weddings, picnics, airport transfers, tourist tours, and pilgrimage journeys. Having one dedicated transportation arrangement makes group movement easier to coordinate before, during, and after the trip."
},
{
WhyChooseheading: "Convenient Pune Pickup Planning",
WhyChoosedescription: "Group transportation can be organized around suitable Pune pickup points according to the travel schedule and passenger requirements. Coordinated boarding and drop arrangements help reduce confusion for larger parties and create a more structured travel experience from the beginning of the journey through the final destination."
}
]
};






const faqData = [
{
question: "How can I rent a bus in Pune for a group trip?",
answer: "To rent a bus in Pune, share the pickup location, destination, travel date, passenger count, trip duration, and preferred seating capacity. Ruturaj Enterprises can coordinate bus transportation according to the group's itinerary, whether the journey is for sightseeing, a family tour, corporate travel, a wedding, pilgrimage, picnic, or another group activity."
},
{
question: "What seating capacities can be considered when renting a bus in Pune?",
answer: "The required seating capacity depends on the number of travelers, luggage requirements, route, and journey duration. Groups can consider smaller buses for compact gatherings or higher-capacity buses for larger parties. Selecting a vehicle based on actual passenger strength can help maintain comfortable and organized group transportation."
},
{
question: "Can I rent a bus in Pune for a one-day trip?",
answer: "A bus can be arranged for one-day local or outstation group trips from Pune. The itinerary may include the pickup point, destination, sightseeing locations, meal breaks, planned stops, and return journey. Sharing the complete schedule in advance helps coordinate the transportation around the day's activities."
},
{
question: "Is it possible to rent a bus in Pune for a multi-day tour?",
answer: "Multi-day bus rentals can be suitable for extended family vacations, pilgrimage circuits, corporate tours, educational trips, and sightseeing programs. The journey can be planned around multiple destinations, overnight stays, rest stops, luggage requirements, and return travel, allowing the group to follow a single coordinated transportation plan."
},
{
question: "Can I rent a bus in Pune for a marriage or wedding function?",
answer: "Wedding groups can rent a dedicated bus for transporting relatives and guests between residences, hotels, railway stations, airports, marriage halls, banquet venues, and reception locations. The vehicle schedule can be aligned with ceremony timings and venue changes to simplify guest transportation throughout the event."
},
{
question: "Are rented buses suitable for corporate outings from Pune?",
answer: "Corporate teams can use rented buses for employee outings, conferences, annual events, team-building activities, industrial visits, training programs, and company celebrations. Pickup points, passenger numbers, destination locations, event timings, and return schedules can be incorporated into the transportation plan."
},
{
question: "Can students rent a bus for a college or school tour?",
answer: "Schools and colleges can arrange buses for educational excursions, student tours, picnics, historical visits, and recreational programs. Vehicle capacity can be matched with the number of students and accompanying staff, while the route, stopping points, destination schedule, and journey duration can be planned according to the educational tour."
},
{
question: "Can a bus be rented in Pune for a pilgrimage or temple tour?",
answer: "Pilgrimage groups can rent buses for temple visits and multi-destination religious journeys starting from Pune. A private vehicle allows the group to travel together while following a planned sequence of destinations, darshan points, rest breaks, meal stops, sightseeing locations, and return travel."
},
{
question: "What details are required to rent a bus from Pune?",
answer: "Useful trip details include the pickup address or area, destination, travel date, number of passengers, approximate luggage, duration of the journey, preferred seating capacity, and purpose of travel. For multi-stop trips, providing the complete itinerary can further help Ruturaj Enterprises coordinate the bus service according to the group's schedule."
},
{
question: "Why rent a bus from Ruturaj Enterprises in Pune?",
answer: "Ruturaj Enterprises supports group transportation requirements for local journeys, outstation tours, weddings, corporate activities, school and college trips, pilgrimages, picnics, and special events. Bus arrangements can be coordinated according to passenger strength, route, luggage needs, travel duration, pickup points, and the itinerary provided by the group."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Nilesh Patil",
feedback:
"We rented a bus from Ruturaj Enterprises for a weekend trip from Pune with a large group of friends. Having everyone travel in one vehicle made the journey much easier to organize, especially when managing luggage and sightseeing stops. The transportation arrangement suited our planned route well.",
rating: 5
},
{
id: 2,
name: "Miss. Sneha Joshi",
feedback:
"Our family needed a rented bus for a wedding function where guests were coming from different locations in Pune. Ruturaj Enterprises helped us coordinate dedicated group transportation around the event schedule. It was convenient to have one vehicle available for transfers between the hotel and wedding venue.",
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
  "name": "Rent a Bus Pune",
  "image": "https://ruturajenterprises.com/assets/images/rent-a-bus-pune.webp",
  "description":
    "Rent a Bus Pune for local transportation, outstation journeys, family trips, group travel, corporate events, weddings, school excursions, picnics and airport transfers. Ruturaj Enterprises offers convenient bus rental, hire and booking solutions with AC, non-AC and luxury buses for different group sizes and travel needs. Comfortable vehicles, experienced drivers and flexible rental options make it easy to arrange one-day trips, multi-day tours, sightseeing journeys, corporate transportation, wedding guest movement and long-distance travel from Pune.",
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
    "url": "https://ruturajenterprises.com/rent-a-bus-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Rent a Bus Pune | Bus On Rent Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Rent a Bus Pune for outstation trips, family tours, group travel, corporate events, weddings, school trips, picnics and airport transfers. Hire AC, non-AC and luxury buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Bus On Rent Pune, Bus Rental Pune, Bus Hire Pune, Bus Booking Pune, AC Bus on Rent Pune, Non AC Bus on Rent Pune, Luxury Bus on Rent Pune, Bus for Outstation Pune, Bus for Family Trip Pune, Bus for Group Travel Pune, Bus for Corporate Events Pune, Bus for Wedding Pune, Bus for School Trip Pune, Bus for Picnic Pune, Bus for Airport Pickup Pune, Affordable Bus Rental Pune, Rent a Bus Pune, Rent Bus Pune, Bus Rent Pune, Bus Rental Service Pune, Bus Hire Service Pune, Bus Booking Service Pune, Bus Rental Company Pune, Bus on Rent Service Pune, AC Bus Rental Pune, AC Bus Hire Pune, AC Bus Booking Pune, Non AC Bus Rental Pune, Non AC Bus Hire Pune, Non AC Bus Booking Pune, Luxury Bus Rental Pune, Luxury Bus Hire Pune, Luxury Bus Booking Pune, Tourist Bus on Rent Pune, Tourist Bus Rental Pune, Tourist Bus Hire Pune, Tourist Bus Booking Pune, Mini Bus on Rent Pune, Mini Bus Rental Pune, Mini Bus Hire Pune, Mini Bus Booking Pune, Outstation Bus on Rent Pune, Outstation Bus Rental Pune, Outstation Bus Hire Pune, Outstation Bus Booking Pune, One Way Bus Rental Pune, One Way Bus Hire Pune, One Way Bus Booking Pune, Round Trip Bus Rental Pune, Round Trip Bus Hire Pune, Round Trip Bus Booking Pune, Local Bus on Rent Pune, Local Bus Rental Pune, Local Bus Hire Pune, Local Bus Booking Pune, City Bus Rental Pune, City Bus Hire Pune, Family Bus Rental Pune, Family Bus Hire Pune, Family Tour Bus Pune, Family Travel Bus Pune, Group Bus Rental Pune, Group Bus Hire Pune, Group Travel Bus Pune, Corporate Bus Rental Pune, Corporate Bus Hire Pune, Corporate Bus Booking Pune, Corporate Staff Transportation Pune, Corporate Employee Bus Pune, Corporate Event Bus Rental Pune, Corporate Event Bus Hire Pune, Event Bus Rental Pune, Event Bus Hire Pune, Event Bus Booking Pune, Wedding Bus Rental Pune, Wedding Bus Hire Pune, Wedding Bus Booking Pune, Wedding Guest Bus Rental Pune, Wedding Guest Transportation Pune, Marriage Bus Rental Pune, Marriage Bus Hire Pune, Marriage Bus Booking Pune, School Bus Rental Pune, School Bus Hire Pune, School Bus Booking Pune, School Trip Bus Rental Pune, School Trip Bus Hire Pune, School Tour Bus Pune, School Picnic Bus Rental Pune, College Trip Bus Rental Pune, College Trip Bus Hire Pune, Picnic Bus Rental Pune, Picnic Bus Hire Pune, Family Picnic Bus Pune, Group Picnic Bus Pune, Airport Bus Rental Pune, Airport Bus Hire Pune, Airport Pickup Bus Pune, Airport Drop Bus Pune, Airport Transfer Bus Pune, Bus for Airport Travel Pune, Sightseeing Bus Rental Pune, Sightseeing Bus Hire Pune, Pune Sightseeing Bus Service, Pune City Tour Bus Rental, Pune City Tour Bus Hire, Bus for Maharashtra Tour Pune, Bus for Weekend Trip Pune, Bus for Holiday Trip Pune, Bus for Temple Tour Pune, Pilgrimage Bus Rental Pune, Tourist Bus Rental Pune, Passenger Bus Rental Pune, Group Transportation Bus Pune, Bus with Driver Pune, Bus Rental with Driver Pune, Bus Hire with Driver Pune, AC Tourist Bus Pune, Luxury Tourist Bus Pune, Comfortable Bus Rental Pune, Professional Bus Hire Pune, Reliable Bus Rental Pune, Affordable Bus Hire Pune, Bus Transportation Service Pune, Pune Bus Transport Service, Ruturaj Enterprises Rent a Bus Pune"
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
                            <img src='/images/keyword/85.jpg' alt='img' className='img-fluid' />
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

export default Rentabuspune;