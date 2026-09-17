import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Bushireforoutstation() {


const cardData = {
keyword: "Bus Hire for Outstation",
headingDescription: "Ruturaj Enterprises offers reliable Bus Hire for Outstation travel from Pune for families, large groups, corporate teams, students, wedding guests, tourists, and event participants. With multiple seating capacities and comfortable travel options, passengers can choose a suitable bus according to group size, route distance, luggage requirements, and trip schedule. From short weekend journeys to long-distance tours across Maharashtra and other states, the service is designed to make group transportation convenient, organized, and comfortable. AC, luxury, and spacious buses are available for different travel requirements, making Ruturaj Enterprises a practical choice for planned group journeys from Pune.",
topPlaces: [
{
title: "Lonavala",
description: "Lonavala is a popular getaway from Pune for families, friends, corporate teams, and student groups looking for a convenient group trip. A spacious bus makes it easier for larger groups to travel together while carrying luggage, picnic equipment, and other essentials."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar attracts families, tourists, college groups, and corporate teams throughout the year with its scenic surroundings and pleasant travel experience. Hiring a suitable bus from Pune allows the entire group to stay together throughout the journey with comfortable seating and organized transportation."
},
{
title: "Goa",
description: "Goa is a preferred destination for extended group holidays, family vacations, college tours, corporate trips, and celebrations. Ruturaj Enterprises provides suitable bus options for long-distance travel, giving groups the convenience of shared transportation, ample seating, and space for travel luggage."
},
{
title: "Nashik",
description: "Nashik is suitable for family tours, religious journeys, corporate travel, and group sightseeing programs from Pune. A hired bus provides coordinated transportation for the complete group and can be planned around multiple stops, luggage requirements, and the preferred travel schedule."
},
{
title: "Shirdi",
description: "Shirdi is frequently visited by families, devotees, senior citizens, and organized groups traveling from Pune. Group bus hire helps everyone travel together instead of arranging several smaller vehicles, making the journey easier to coordinate from departure through return."
},
{
title: "Alibaug",
description: "Alibaug is a convenient destination for weekend holidays, family outings, corporate getaways, and group picnics. A comfortable bus allows passengers to travel together from Pune with sufficient seating and luggage space, making it suitable for both small and large groups."
},
{
title: "Kolhapur",
description: "Kolhapur is an important destination for family trips, business visits, religious travel, and sightseeing programs. Hiring a bus provides a practical way to move a complete group on the same schedule while reducing the need to coordinate multiple cars during the journey."
},
{
title: "Aurangabad",
description: "Aurangabad is a popular choice for historical tours, educational trips, family holidays, and organized group travel. Spacious buses are useful for these journeys because passengers can remain together and carry bags, food, and other travel essentials comfortably."
},
{
title: "Ganpatipule",
description: "Ganpatipule is well suited for family vacations, religious tours, beach trips, and group holidays from Pune. A dedicated bus provides convenient transportation for larger groups and allows the itinerary to include planned sightseeing and stops along the route."
},
{
title: "Bhandardara",
description: "Bhandardara is an attractive destination for nature trips, corporate outings, family vacations, and group picnics. Choosing a suitable bus makes group travel more organized, especially when passengers need comfortable seating, luggage capacity, and coordinated transportation throughout the trip."
}
],
services: [
{
name: "Outstation Bus Rental Pune",
description: "Ruturaj Enterprises provides Outstation Bus Rental Pune services for families, tourist groups, organizations, schools, and event participants traveling beyond the city. Different seating capacities can be selected according to group size, journey duration, luggage requirements, and destination."
},
{
name: "Outstation Bus Hire Pune",
description: "Outstation Bus Hire Pune is suitable for planned holidays, religious tours, corporate journeys, weddings, and large-group travel. The service helps passengers travel together in one vehicle while enjoying organized pickup, comfortable seating, and a trip plan suited to the group's schedule."
},
{
name: "Outstation Bus Booking Pune",
description: "Outstation Bus Booking Pune makes it convenient to arrange group transportation in advance for upcoming trips and long-distance journeys. Ruturaj Enterprises can provide bus options based on the number of passengers, route, travel dates, and preferred comfort level."
},
{
name: "AC Bus for Outstation Pune",
description: "AC Bus for Outstation Pune is a comfortable choice for passengers traveling longer distances, particularly during warm weather. Air-conditioned interiors, spacious seating, and a group-friendly layout help make extended journeys more relaxing for families, tourists, and corporate travelers."
},
{
name: "Luxury Bus for Outstation Pune",
description: "Luxury Bus for Outstation Pune is designed for groups that prefer a more premium travel experience during holidays, celebrations, corporate journeys, and special tours. These buses provide enhanced comfort and a refined environment for passengers traveling together over longer routes."
},
{
name: "20 Seater Bus for Outstation Pune",
description: "20 Seater Bus for Outstation Pune is a practical option for medium-sized groups that need more space than multiple cars but do not require a very large bus. It works well for family holidays, small corporate teams, wedding groups, and private tours with luggage."
},
{
name: "32 Seater Bus for Outstation Pune",
description: "32 Seater Bus for Outstation Pune offers a balanced solution for medium to large groups traveling to destinations outside Pune. The seating capacity is suitable for organized tours, school groups, corporate travel, family functions, and sightseeing programs."
},
{
name: "35 Seater Bus for Outstation Pune",
description: "35 Seater Bus for Outstation Pune provides additional seating for larger groups planning vacations, educational tours, weddings, picnics, or corporate trips. A dedicated bus helps passengers remain together and makes pickup, route planning, and destination transportation easier to coordinate."
},
{
name: "45 Seater Bus for Outstation Pune",
description: "45 Seater Bus for Outstation Pune is suitable for large groups requiring substantial passenger capacity for long-distance travel. It can be used for school excursions, corporate programs, weddings, tourist tours, religious journeys, and large family trips."
},
{
name: "50 Seater Bus for Outstation Pune",
description: "50 Seater Bus for Outstation Pune is an efficient option for very large groups traveling on the same route and schedule. It helps simplify transportation for schools, organizations, wedding parties, events, and large tour groups by bringing many passengers together in one vehicle."
},
{
name: "Outstation Bus for Family Trip Pune",
description: "Outstation Bus for Family Trip Pune makes family vacations easier by providing shared transportation for parents, children, relatives, and larger family groups. Depending on the group size, a suitable bus can accommodate passengers and luggage while keeping the entire family together."
},
{
name: "Outstation Bus for Group Travel Pune",
description: "Outstation Bus for Group Travel Pune is useful for friends, social groups, tour groups, and organizations planning journeys outside Pune. Group members can travel together under one coordinated schedule, reducing the complexity of managing several private vehicles."
},
{
name: "Outstation Bus for Wedding Pune",
description: "Outstation Bus for Wedding Pune helps transport wedding guests between Pune and destinations outside the city. Dedicated buses can be arranged for family members and guests, making transfers between hotels, venues, pickup points, and the wedding destination more organized."
},
{
name: "Affordable Outstation Bus Rental Pune",
description: "Affordable Outstation Bus Rental Pune provides a practical transportation option for groups that want to manage travel expenses efficiently. Sharing one bus among several passengers can reduce the need for multiple vehicles while still providing comfortable and coordinated group transportation."
},
{
name: "Outstation Bus for Corporate Travel Pune",
description: "Outstation Bus for Corporate Travel Pune is suitable for employee trips, business meetings, team outings, conferences, training programs, and corporate tours. A dedicated bus helps companies coordinate group movement according to office schedules, planned stops, and destination requirements."
},
{
name: "Outstation Bus for School Trip Pune",
description: "Outstation Bus for School Trip Pune supports educational tours, school excursions, annual trips, and organized student travel outside Pune. Suitable seating capacity and planned transportation help teachers, coordinators, and students travel together throughout the itinerary."
},
{
name: "Outstation Bus for Picnic Pune",
description: "Outstation Bus for Picnic Pune is ideal for families, schools, offices, clubs, and social groups planning recreational day trips or longer outings. A spacious bus offers convenient seating and allows passengers to carry picnic supplies, bags, and other necessary items."
},
{
name: "Outstation Bus for Marriage Pune",
description: "Outstation Bus for Marriage Pune provides organized transportation for relatives, friends, and wedding guests traveling to marriage destinations outside Pune. Dedicated group buses can help manage guest movement between pickup points, accommodations, ceremony venues, and return locations."
},
{
name: "Outstation Bus for Event Pune",
description: "Outstation Bus for Event Pune is suitable for transporting guests and participants to exhibitions, cultural programs, celebrations, conferences, and private events outside Pune. Group transportation can be planned around event timings and multiple pickup or drop locations."
},
{
name: "Outstation AC Bus Rental Pune",
description: "Outstation AC Bus Rental Pune combines group transportation with air-conditioned comfort for longer journeys. It is a useful choice for families, tourists, corporate teams, wedding groups, and organizations that want a more comfortable travel environment."
},
{
name: "Luxury Outstation Bus Hire Pune",
description: "Luxury Outstation Bus Hire Pune is suited to premium group travel for celebrations, corporate programs, family holidays, destination weddings, and special tours. Passengers can enjoy a more comfortable and polished travel experience while staying together throughout the journey."
},
{
name: "Outstation Tourist Bus Rental Pune",
description: "Outstation Tourist Bus Rental Pune is designed for sightseeing tours, multi-destination holidays, religious trips, and organized tourist groups traveling from Pune. The appropriate bus capacity can be selected according to passenger numbers, itinerary length, luggage, and overall travel requirements."
}
],
tableData: [
["Outstation Bus Rental Pune", "Outstation Bus Hire Pune"],
["Outstation Bus Booking Pune", "AC Bus for Outstation Pune"],
["Luxury Bus for Outstation Pune", "20 Seater Bus for Outstation Pune"],
["32 Seater Bus for Outstation Pune", "35 Seater Bus for Outstation Pune"],
["45 Seater Bus for Outstation Pune", "50 Seater Bus for Outstation Pune"],
["Outstation Bus for Family Trip Pune", "Outstation Bus for Group Travel Pune"],
["Outstation Bus for Wedding Pune", "Affordable Outstation Bus Rental Pune"],
["Outstation Bus for Corporate Travel Pune", "Outstation Bus for School Trip Pune"],
["Outstation Bus for Picnic Pune", "Outstation Bus for Marriage Pune"],
["Outstation Bus for Event Pune", "Outstation AC Bus Rental Pune"],
["Luxury Outstation Bus Hire Pune", "Outstation Tourist Bus Rental Pune"]
],
whychoose: [
{
WhyChooseheading: "Multiple Seating Capacity Options",
WhyChoosedescription: "Ruturaj Enterprises offers different bus capacities so groups can select a vehicle that matches their passenger count. Options ranging from smaller group buses to larger 45 and 50 seater vehicles make it easier to avoid unnecessary empty seats or multiple vehicles."
},
{
WhyChooseheading: "Suitable for Long-Distance Journeys",
WhyChoosedescription: "Long-distance travel requires dependable group transportation with sufficient seating and luggage space. The available bus options are suitable for extended journeys across Maharashtra and other destinations, helping passengers travel together throughout the trip."
},
{
WhyChooseheading: "Comfortable AC Travel",
WhyChoosedescription: "For journeys during warm weather or extended travel schedules, air-conditioned buses can provide a more pleasant environment. AC options are available for families, tourists, corporate teams, wedding groups, and other passengers seeking added comfort."
},
{
WhyChooseheading: "Ideal for Different Group Requirements",
WhyChoosedescription: "Whether the trip involves a family holiday, school excursion, corporate outing, wedding, picnic, or tourist tour, bus rental can be planned around the purpose of the journey. This flexibility allows groups to choose transportation according to their itinerary and passenger requirements."
},
{
WhyChooseheading: "Convenient Group Transportation",
WhyChoosedescription: "Keeping everyone in one bus makes group movement simpler and reduces the coordination required between several cars or smaller vehicles. Pickup points, travel schedules, route plans, and destination transfers can be organized around the group's requirements."
},
{
WhyChooseheading: "Practical for Weddings and Events",
WhyChoosedescription: "Large gatherings often require transportation between different locations and venues. Dedicated buses can help wedding guests, event participants, and family members move together according to planned timings, making overall guest transportation more manageable."
},
{
WhyChooseheading: "Options for Corporate and Educational Travel",
WhyChoosedescription: "Corporate teams and educational groups often need organized transportation for off-site programs and tours. Suitable bus capacities can accommodate employees or students together while supporting a structured travel schedule for the complete group."
},
{
WhyChooseheading: "Convenient Planning from Pune",
WhyChoosedescription: "Starting an outstation journey from Pune becomes easier when the vehicle is selected according to destination, group size, travel duration, and luggage needs. Ruturaj Enterprises focuses on providing practical bus rental choices for different types of planned group journeys."
}
]
};














const faqData = [
{
question: "Why choose Ruturaj Enterprises for bus hire for outstation travel?",
answer: "Ruturaj Enterprises offers bus hire solutions for groups planning journeys outside Pune and other starting locations. Outstation buses are suitable for family vacations, corporate tours, weddings, pilgrimages, educational trips, sightseeing programs, and group events where passengers prefer to travel together."
},
{
question: "Who can hire a bus for an outstation trip?",
answer: "Families, corporate teams, schools, colleges, wedding groups, tour parties, social organizations, and event groups can hire a bus for outstation travel. The vehicle size can be selected according to the number of passengers, destination, journey duration, and planned itinerary."
},
{
question: "Which destinations can I travel to with an outstation rental bus?",
answer: "An outstation rental bus can be used for journeys to destinations such as Mumbai, Goa, Nashik, Shirdi, Mahabaleshwar, Kolhapur, Konkan, Hyderabad, Bengaluru, and other cities or tourist locations. The route can be planned according to the group's travel requirements."
},
{
question: "What seating capacity can I choose for an outstation bus?",
answer: "The required seating capacity depends on the size of the traveling group. Ruturaj Enterprises can arrange options such as 20, 26, 32, 35, 45, and 50 Seater Buses for different types of outstation journeys and group transportation requirements."
},
{
question: "Is an outstation bus suitable for family vacations?",
answer: "Large families can hire a bus for vacations, reunions, religious tours, sightseeing trips, and multi-day holidays. Traveling together in one vehicle can make it easier to coordinate family members, planned stops, sightseeing locations, and return schedules."
},
{
question: "Can I hire a bus for an outstation wedding?",
answer: "Wedding families can arrange an outstation bus to transport relatives and guests to marriage venues in another city or destination. It can also be used for movement between hotels, wedding halls, reception venues, railway stations, airports, and other locations included in the wedding itinerary."
},
{
question: "Can corporate groups hire a bus for outstation travel?",
answer: "Corporate teams can use outstation bus services for company tours, conferences, training programs, team-building activities, industrial visits, employee outings, and business events. A dedicated vehicle allows the group to travel together according to the planned business schedule."
},
{
question: "Can schools and colleges hire buses for outstation educational tours?",
answer: "Educational institutions can arrange buses for study tours, industrial visits, historical excursions, nature trips, picnics, and cultural programs outside their city. The transportation plan can be structured around the group's itinerary, scheduled stops, and duration of the educational tour."
},
{
question: "Can I hire a bus for a multi-day outstation trip?",
answer: "Multi-day journeys can be planned with a suitable rental bus when the itinerary covers several destinations and overnight stays. The vehicle can support transportation between hotels, sightseeing points, event venues, and other locations throughout the scheduled trip."
},
{
question: "How can I book a bus for an outstation trip?",
answer: "To hire an outstation bus from Ruturaj Enterprises, share your pickup location, destination, travel dates, passenger count, required seating capacity, journey duration, and planned route. Providing these details helps organize a transportation arrangement around your complete travel itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Ganesh Pawar",
feedback:
"Our family hired a bus from Ruturaj Enterprises for an outstation holiday. Since everyone traveled together, coordinating the group during the long journey and sightseeing stops was much easier. The arrangement was well suited to our large family and multi-day travel plan.",
rating: 5
},
{
id: 2,
name: "Miss. Snehal Patil",
feedback:
"We booked an outstation bus from Ruturaj Enterprises for a group tour with friends. Having one dedicated vehicle made it simple to follow our planned route and keep everyone together at different destinations. It was a convenient option for our long-distance trip.",
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
  "name": "Bus Hire for Outstation",
  "image": "https://ruturajenterprises.com/assets/images/bus-hire-for-outstation.webp",
  "description":
    "Bus Hire for Outstation from Ruturaj Enterprises is a convenient group transportation option for families, friends, corporate teams, schools, colleges, wedding groups, tourist groups and organizations travelling from Pune to destinations across Maharashtra and other states. Outstation Bus Rental Pune is suitable for one-way journeys, round trips, weekend holidays, family vacations, group tours, corporate outings, wedding transportation, school excursions, pilgrimages and multi-day travel programs. Outstation Bus Hire Pune can be arranged according to passenger count, destination, travel dates, route, trip duration and itinerary. Outstation Bus Booking Pune allows groups to plan dedicated transportation in advance instead of coordinating multiple smaller vehicles. AC Bus for Outstation Pune provides a comfortable option for longer journeys and warm-weather travel, while Luxury Bus for Outstation Pune can be considered for premium group tours, corporate travel, weddings, special events and organized trips. Different seating capacities are available according to group requirements, including 20 Seater Bus for Outstation Pune, 32 Seater Bus for Outstation Pune, 35 Seater Bus for Outstation Pune, 45 Seater Bus for Outstation Pune and 50 Seater Bus for Outstation Pune, subject to vehicle availability. These buses can be used for family tours, friends trips, corporate travel, employee outings, school and college excursions, wedding guest transportation, pilgrimage tours, sightseeing programs and customized road journeys. Popular outstation routes from Pune can include Mumbai, Lonavala, Khandala, Mahabaleshwar, Panchgani, Matheran, Alibaug, Nashik, Shirdi, Satara, Kolhapur, Sangli, Solapur, Aurangabad, Konkan, Ratnagiri, Ganpatipule, Goa, Hyderabad, Bangalore and other destinations depending on the planned itinerary. One-way and round-trip transportation can be arranged with pickup and drop points customized around the group's schedule. Airport and railway station transfers can also be included for outstation guests and travelers. Local pickup arrangements can be planned from Kothrud, Baner, Aundh, Wakad, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, Magarpatta, Kondhwa, Katraj, Shivajinagar, Swargate, Pimpri, Chinchwad, Bhosari, Moshi and Talegaon. Ruturaj Enterprises supports full-day, weekend, multi-day and long-distance outstation bus requirements with customized routes, suitable seating capacities and dedicated driver support.",
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
    "url": "https://ruturajenterprises.com/bus-hire-for-outstation"
  }
};




    return (
        <div>

<Helmet>
  <title>Bus Hire for Outstation | Outstation Bus Rental Pune | +91 9763381382</title>

  <meta
    name="description"
    content="Bus Hire for Outstation from Pune for family trips, group tours, corporate travel, weddings, school excursions, pilgrimages and long-distance journeys with AC and luxury buses."
  />

  <meta
    name="keywords"
    content="Outstation Bus Rental Pune, Outstation Bus Hire Pune, Outstation Bus Booking Pune, AC Bus for Outstation Pune, Luxury Bus for Outstation Pune, 20 Seater Bus for Outstation Pune, 32 Seater Bus for Outstation Pune, 35 Seater Bus for Outstation Pune, 45 Seater Bus for Outstation Pune, 50 Seater Bus for Outstation Pune, Bus Hire for Outstation, Outstation Bus on Rent Pune, Outstation Bus Rental in Pune, Outstation Bus Hire in Pune, Outstation Bus Booking in Pune, Outstation Bus Service Pune, Outstation Bus with Driver Pune, Private Outstation Bus Pune, AC Outstation Bus Rental Pune, Luxury Outstation Bus Rental Pune, Premium Outstation Bus Pune, Comfortable Outstation Bus Pune, Affordable Outstation Bus Rental Pune, Outstation Group Bus Pune, Outstation Family Bus Pune, Outstation Tourist Bus Pune, Outstation Corporate Bus Pune, Outstation Wedding Bus Pune, Outstation School Bus Pune, Outstation College Bus Pune, Outstation Group Transportation Pune, Outstation Travel Bus Pune, Outstation Tour Bus Pune, Outstation Trip Bus Rental Pune, Outstation Journey Bus Pune, Long Distance Bus Rental Pune, Long Distance Bus Hire Pune, Long Distance Bus Booking Pune, One Way Outstation Bus Pune, Round Trip Outstation Bus Pune, Full Day Outstation Bus Pune, Multi Day Outstation Bus Pune, Weekend Outstation Bus Pune, Outstation Bus Tour Package Pune, Outstation Bus for Family Trip Pune, Outstation Bus for Family Tour Pune, Outstation Bus for Group Travel Pune, Outstation Bus for Friends Trip Pune, Outstation Bus for Corporate Travel Pune, Outstation Bus for Corporate Outing Pune, Outstation Bus for Wedding Pune, Outstation Bus for Wedding Guests Pune, Outstation Bus for Marriage Pune, Outstation Bus for School Trip Pune, Outstation Bus for School Picnic Pune, Outstation Bus for College Trip Pune, Outstation Bus for Educational Tour Pune, Outstation Bus for Pilgrimage Pune, Outstation Bus for Temple Tour Pune, Outstation Bus for Religious Tour Pune, Outstation Bus for Sightseeing Pune, Outstation Bus for Tourist Group Pune, Outstation Bus for Airport Transfer Pune, Outstation Bus for Railway Station Transfer Pune, Outstation Bus for Hotel Transfer Pune, 20 Seater Outstation Bus Pune, 20 Seater Bus Rental Pune, 20 Seater Bus Hire Pune, 20 Seater Bus Booking Pune, 32 Seater Outstation Bus Pune, 32 Seater Bus Rental Pune, 32 Seater Bus Hire Pune, 32 Seater Bus Booking Pune, 35 Seater Outstation Bus Pune, 35 Seater Bus Rental Pune, 35 Seater Bus Hire Pune, 35 Seater Bus Booking Pune, 45 Seater Outstation Bus Pune, 45 Seater Bus Rental Pune, 45 Seater Bus Hire Pune, 45 Seater Bus Booking Pune, 50 Seater Outstation Bus Pune, 50 Seater Bus Rental Pune, 50 Seater Bus Hire Pune, 50 Seater Bus Booking Pune, Outstation Bus from Pune to Mumbai, Outstation Bus from Pune to Lonavala, Outstation Bus from Pune to Khandala, Outstation Bus from Pune to Mahabaleshwar, Outstation Bus from Pune to Panchgani, Outstation Bus from Pune to Matheran, Outstation Bus from Pune to Alibaug, Outstation Bus from Pune to Nashik, Outstation Bus from Pune to Shirdi, Outstation Bus from Pune to Satara, Outstation Bus from Pune to Kolhapur, Outstation Bus from Pune to Sangli, Outstation Bus from Pune to Solapur, Outstation Bus from Pune to Aurangabad, Outstation Bus from Pune to Konkan, Outstation Bus from Pune to Ratnagiri, Outstation Bus from Pune to Ganpatipule, Outstation Bus from Pune to Goa, Outstation Bus from Pune to Hyderabad, Outstation Bus from Pune to Bangalore, Outstation Bus Rental Near Pune, Outstation Bus Hire Near Pune, Outstation Bus Booking Near Pune, Outstation Bus Rental Pimpri Chinchwad, Outstation Bus Rental Kothrud, Outstation Bus Rental Baner, Outstation Bus Rental Aundh, Outstation Bus Rental Wakad, Outstation Bus Rental Hinjewadi, Outstation Bus Rental Viman Nagar, Outstation Bus Rental Kharadi, Outstation Bus Rental Hadapsar, Outstation Bus Rental Magarpatta, Outstation Bus Rental Kondhwa, Outstation Bus Rental Katraj, Outstation Bus Rental Shivajinagar, Outstation Bus Rental Swargate, Outstation Bus Rental Pimpri, Outstation Bus Rental Chinchwad, Outstation Bus Rental Bhosari, Outstation Bus Rental Moshi, Outstation Bus Rental Talegaon"
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
                            <img src='/images/keyword/20.jpg' alt='img' className='img-fluid' />
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

export default Bushireforoutstation;