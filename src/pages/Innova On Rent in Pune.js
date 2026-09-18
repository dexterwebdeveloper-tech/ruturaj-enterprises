import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Innovaonrentinpune() {

const cardData = {
keyword: "Innova On Rent in Pune",
headingDescription: "Ruturaj Enterprises offers convenient Innova rental services in Pune for families, friends, corporate professionals, wedding groups, tourists, airport travelers, and other passengers looking for comfortable private transportation. Innova vehicles are suitable for both short and long road journeys, providing a practical travel arrangement for local sightseeing, one-day trips, family holidays, corporate programs, wedding functions, airport transfers, picnics, and outstation tours. Travel plans can be organized according to the number of passengers, pickup location, destination, travel duration, luggage requirements, and itinerary, making an Innova a useful choice for individuals and groups seeking coordinated road transportation from Pune.",
topPlaces: [
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a popular hill destination for family holidays, couples, friends, and small groups traveling from Pune. An Innova provides a comfortable private travel arrangement for the scenic journey while giving passengers useful space for luggage and convenient access to viewpoints, markets, resorts, and nearby attractions."
},
{
title: "Goa",
description: "Pune to Goa is a popular long-distance road route for families, friends, corporate travelers, and tourist groups. An Innova offers a practical private travel option for extended journeys, with comfortable seating and luggage space that can be useful for multi-day beach holidays and planned sightseeing."
},
{
title: "Shirdi",
description: "Shirdi is a frequently visited religious destination for families and groups traveling from Pune, and an Innova can provide convenient door-to-door transportation. Passengers can travel together with their belongings while planning temple visits, nearby attractions, and return travel according to their preferred schedule."
},
{
title: "Bhandardara",
description: "Bhandardara is well suited for nature-focused road trips, family outings, weekend holidays, and small group excursions from Pune. Innova rental makes the journey convenient by providing private transportation with passenger comfort and practical luggage capacity for visits to lakes, viewpoints, waterfalls, and surrounding attractions."
},
{
title: "Nashik",
description: "Pune to Nashik travel is suitable for religious visits, family trips, corporate travel, sightseeing, and leisure tours. An Innova provides a convenient private vehicle for the journey and can accommodate luggage while supporting itineraries that include temples, nature attractions, vineyards, and nearby destinations."
},
{
title: "Alibaug",
description: "Alibaug is a convenient coastal getaway from Pune for families, friends, couples, and small travel groups. An Innova can make the road journey more comfortable while providing useful space for luggage and allowing travelers to plan beach visits, resort stays, forts, and nearby coastal attractions."
},
{
title: "Kolhapur",
description: "Kolhapur is suitable for family visits, religious travel, food and heritage tours, business journeys, and organized sightseeing from Pune. Innova rental provides private group transportation for the route, allowing passengers to travel together with luggage and coordinate multiple stops around their planned itinerary."
},
{
title: "Panchgani",
description: "Panchgani offers a scenic hill-station experience and is suitable for family trips, weekend holidays, school-related travel, and small group excursions from Pune. An Innova provides a comfortable road travel option for the journey while making it convenient to carry bags and visit viewpoints and nearby attractions."
},
{
title: "Dapoli",
description: "Dapoli is a peaceful coastal destination for weekend breaks, family holidays, friends' trips, and leisure travel from Pune. A private Innova makes it easier for passengers to travel together with luggage while planning beach visits, resorts, temples, and other attractions along the coastal route."
},
{
title: "Ganpatipule",
description: "Ganpatipule is a popular coastal and religious destination that can be explored comfortably through a private road journey from Pune. Innova rental is useful for families and small groups carrying luggage for longer stays, with the flexibility to include temple visits, beaches, scenic coastal locations, and nearby sightseeing points."
}
],
services: [
{
name: "Innova Rental Pune",
description: "Innova rental in Pune provides a comfortable private transportation option for families, friends, business travelers, tourists, wedding guests, and small groups. Ruturaj Enterprises can support local and long-distance travel plans based on the passenger requirement, pickup location, destination, travel duration, luggage needs, and planned itinerary."
},
{
name: "Innova Hire Pune",
description: "Innova hire in Pune is suitable for passengers who prefer a dedicated vehicle rather than coordinating several separate cars. The service can support family holidays, airport transfers, corporate journeys, weddings, sightseeing programs, picnics, one-day trips, and longer outstation travel with convenient route planning."
},
{
name: "Innova Booking Pune",
description: "Innova booking in Pune allows travelers to organize their vehicle requirement in advance around a planned date, pickup point, destination, passenger count, and journey duration. Advance arrangements are particularly useful for airport travel, weddings, corporate programs, family holidays, tourist tours, and multi-day road trips."
},
{
name: "AC Innova On Rent Pune",
description: "AC Innova on rent in Pune provides an air-conditioned private travel environment for passengers looking for additional comfort during local and long-distance journeys. It can be suitable for family trips, corporate travel, airport transfers, wedding transportation, sightseeing, tourist tours, and extended highway routes."
},
{
name: "Luxury Innova Rental Pune",
description: "Luxury Innova rental in Pune is suitable for travelers looking for a more premium and comfortable private transportation experience. It can support executive journeys, corporate events, wedding travel, family celebrations, important airport transfers, tourist trips, and special occasions where a refined vehicle arrangement is preferred."
},
{
name: "Innova for Outstation Pune",
description: "Innova for outstation travel from Pune is a practical choice for passengers traveling to destinations across Maharashtra and nearby states. The vehicle is suitable for family vacations, business journeys, pilgrimages, tourist tours, weekend getaways, and multi-day trips where private transportation and luggage capacity are important."
},
{
name: "Innova for Family Trip Pune",
description: "Innova for family trips from Pune provides a private travel arrangement where family members can remain together throughout the journey. It is suitable for hill stations, beaches, religious destinations, nature getaways, weekend holidays, and longer vacations where passengers need comfortable seating and space for personal luggage."
},
{
name: "Innova for Group Travel Pune",
description: "Innova for group travel in Pune offers convenient private transportation for small groups of friends, relatives, colleagues, and other organized passengers. A dedicated vehicle helps simplify common pickup arrangements, route planning, luggage handling, sightseeing stops, and return travel without requiring multiple individual cars."
},
{
name: "Innova for Corporate Travel Pune",
description: "Innova for corporate travel in Pune can support employee movement, client visits, business meetings, executive transportation, airport transfers, conferences, training programs, and intercity business journeys. The private vehicle arrangement helps professionals travel according to their work schedule between offices, hotels, airports, event venues, and other destinations."
},
{
name: "Innova for Wedding Pune",
description: "Innova for wedding travel in Pune is suitable for transporting family members, relatives, close guests, and wedding participants between homes, hotels, venues, reception halls, and other event locations. Private transportation can be coordinated around ceremony timings and multiple functions while providing a convenient arrangement for guests."
},
{
name: "Innova for Airport Pickup Pune",
description: "Innova for airport pickup in Pune provides private transportation for individuals, families, corporate travelers, and small groups arriving at or departing from the airport. The vehicle offers useful passenger and luggage capacity for airport-to-home, airport-to-hotel, airport-to-office, and onward travel arrangements."
},
{
name: "Affordable Innova Rental Pune",
description: "Affordable Innova rental in Pune provides a practical private vehicle option for travelers who want comfortable transportation for local and outstation journeys. It can be used for family trips, airport transfers, sightseeing, corporate travel, weddings, picnics, tourist tours, and other planned road journeys."
},
{
name: "Innova Rental Service Pune",
description: "Innova rental service in Pune supports different transportation requirements ranging from short local journeys to extended outstation tours. Travel arrangements can be planned around the passenger count, destination, route, travel date, duration, luggage requirements, and purpose of the journey."
},
{
name: "Innova for Picnic Pune",
description: "Innova for picnic trips from Pune is convenient for families, friends, colleagues, and small groups carrying food, bags, outdoor equipment, and personal belongings. Private transportation can support day-long recreational journeys to resorts, nature spots, lakeside destinations, amusement locations, and other picnic areas."
},
{
name: "Innova for Local Sightseeing Pune",
description: "Innova for local sightseeing in Pune is useful for passengers who want a private vehicle for visiting multiple planned attractions in a single itinerary. Families, tourists, visiting relatives, and small groups can travel between sightseeing points conveniently without depending on different vehicles for each stop."
},
{
name: "Innova for One Day Trip Pune",
description: "Innova for a one-day trip from Pune is suitable for travelers planning a complete same-day journey to a nearby destination. It can support hill-station visits, religious tours, nature excursions, picnics, sightseeing programs, and family outings where passengers plan to return to Pune within the same day."
},
{
name: "Innova for Corporate Events Pune",
description: "Innova for corporate events in Pune can be used for executive travel, client meetings, conferences, seminars, employee programs, exhibitions, training sessions, and business gatherings. Private transportation can connect offices, hotels, airports, conference venues, and other scheduled locations according to the event itinerary."
},
{
name: "Innova for Marriage Function Pune",
description: "Innova for marriage functions in Pune is suitable for transporting relatives, close guests, family members, and participants between homes, hotels, wedding venues, reception locations, and related functions. The private vehicle can be coordinated around ceremony schedules and individual pickup requirements for convenient event transportation."
},
{
name: "Innova for Tourist Trip Pune",
description: "Innova for tourist trips from Pune provides private transportation for travelers exploring beaches, hill stations, heritage destinations, religious places, nature attractions, and other popular routes. Passengers can maintain their own itinerary while carrying luggage and planning multiple sightseeing stops during the journey."
},
{
name: "Innova for Outstation Tour Pune",
description: "Innova for outstation tours from Pune is suitable for extended private road journeys across Maharashtra and nearby regions. Families, friends, corporate travelers, and tourists can use the vehicle for multi-day holiday circuits, pilgrimages, coastal tours, hill-station trips, and customized sightseeing itineraries."
},
{
name: "Innova Cab Hire Pune",
description: "Innova cab hire in Pune provides a convenient private cab option for families, business travelers, tourists, airport passengers, and small groups. The service can be arranged for local travel, one-day journeys, sightseeing, corporate requirements, weddings, and outstation routes while allowing passengers to travel together in one vehicle."
},
{
name: "Innova Traveller Rental Pune",
description: "Innova Traveller rental in Pune provides a group-oriented transportation option for passengers looking for a spacious vehicle arrangement for planned journeys. It can be useful for family tours, tourist groups, corporate travel, wedding transportation, airport transfers, picnics, and outstation trips where passenger comfort and luggage space are important."
}
],
tableData: [
["Innova Rental Pune", "Private Innova rental for families, friends, business travelers, tourists, wedding groups, and small travel parties."],
["Innova Hire Pune", "Convenient dedicated vehicle hire for family holidays, airport transfers, corporate journeys, weddings, sightseeing, and tours."],
["Innova Booking Pune", "Advance Innova booking based on travel date, passenger requirement, pickup point, destination, and journey duration."],
["AC Innova On Rent Pune", "Air-conditioned Innova option for comfortable local travel, airport transfers, family trips, corporate journeys, and outstation routes."],
["Luxury Innova Rental Pune", "Premium private transportation for executive travel, weddings, corporate events, special occasions, and important journeys."],
["Innova for Outstation Pune", "Private Innova transportation for long-distance routes across Maharashtra and nearby states with useful luggage capacity."],
["Innova for Family Trip Pune", "Comfortable private travel for family vacations, religious visits, hill stations, beaches, nature trips, and weekend holidays."],
["Innova for Group Travel Pune", "Dedicated transportation for small groups of friends, relatives, colleagues, and organized passengers."],
["Innova for Corporate Travel Pune", "Private business transportation for employees, executives, client visits, meetings, conferences, and professional journeys."],
["Innova for Wedding Pune", "Wedding transportation for relatives, guests, family members, and participants traveling between multiple event locations."],
["Innova for Airport Pickup Pune", "Private airport transfer option for individuals, families, corporate travelers, and small groups with luggage."],
["Affordable Innova Rental Pune", "Practical private vehicle rental for family trips, sightseeing, airport transfers, picnics, weddings, and outstation travel."],
["Innova Rental Service Pune", "Flexible Innova rental support for local journeys, day trips, corporate travel, sightseeing, and extended tours."],
["Innova for Picnic Pune", "Private transportation for picnics with useful space for passengers, food, bags, and outdoor essentials."],
["Innova for Local Sightseeing Pune", "Private vehicle for visiting multiple sightseeing attractions according to a planned local travel itinerary."],
["Innova for One Day Trip Pune", "Same-day private transportation for nearby hill stations, religious destinations, nature spots, picnics, and attractions."],
["Innova for Corporate Events Pune", "Private travel support for conferences, meetings, seminars, exhibitions, employee programs, and business events."],
["Innova for Marriage Function Pune", "Dedicated transportation for relatives, family members, guests, and participants attending marriage functions and ceremonies."],
["Innova for Tourist Trip Pune", "Private tourist transportation for beaches, hills, heritage sites, religious destinations, and nature attractions."],
["Innova for Outstation Tour Pune", "Private vehicle support for multi-day holiday circuits, pilgrimages, coastal journeys, hill-station tours, and sightseeing routes."],
["Innova Cab Hire Pune", "Convenient Innova cab hire for local travel, airport transfers, business journeys, family trips, sightseeing, and outstation routes."],
["Innova Traveller Rental Pune", "Spacious group-oriented vehicle arrangement for family tours, corporate travel, weddings, airport transfers, picnics, and tourist journeys."]
],
whychoose: [
{
WhyChooseheading: "Comfortable Private Travel",
WhyChoosedescription: "An Innova provides a convenient private transportation environment for families, friends, professionals, and small groups who prefer to travel together. Passengers can enjoy a dedicated vehicle arrangement while carrying their luggage and following a planned route without coordinating multiple separate cars."
},
{
WhyChooseheading: "Suitable for Long Road Journeys",
WhyChoosedescription: "Extended journeys from Pune to destinations across Maharashtra and nearby states require a practical vehicle with comfortable seating and useful luggage capacity. Innova rental is suitable for family vacations, pilgrimages, corporate travel, coastal holidays, hill-station visits, and multi-day tourist itineraries."
},
{
WhyChooseheading: "Useful for Families and Groups",
WhyChoosedescription: "Family members, friends, relatives, and small travel groups can remain together throughout the journey with a dedicated Innova. This makes common pickup arrangements, luggage handling, route coordination, sightseeing stops, and return travel easier to organize."
},
{
WhyChooseheading: "Convenient for Events",
WhyChoosedescription: "Weddings, corporate programs, family functions, conferences, and other events often require reliable movement between multiple locations. A private Innova can be planned around event schedules to connect homes, hotels, offices, airports, venues, and other destinations."
},
{
WhyChooseheading: "AC and Premium Options",
WhyChoosedescription: "Travelers may have different expectations depending on the purpose and duration of their journey. AC and luxury Innova options provide additional choices for passengers seeking a more comfortable environment during summer travel, executive journeys, wedding transportation, corporate events, and extended road trips."
},
{
WhyChooseheading: "Flexible Travel Itineraries",
WhyChoosedescription: "Private vehicle travel can be useful when the itinerary includes multiple destinations, sightseeing stops, or changes in the day's schedule. Family trips, tourist tours, one-day excursions, corporate journeys, and outstation holidays can be planned around the preferred route and travel requirements."
},
{
WhyChooseheading: "Practical for Airport Transfers",
WhyChoosedescription: "Airport journeys often involve passengers carrying luggage and following specific flight-related schedules. An Innova provides a convenient private arrangement for airport pickup and drop requirements involving homes, hotels, offices, business locations, and onward travel destinations."
},
{
WhyChooseheading: "Pune-Based Travel Support",
WhyChoosedescription: "Ruturaj Enterprises supports Innova rental requirements from Pune for family trips, corporate travel, weddings, airport transfers, local sightseeing, picnics, one-day excursions, tourist journeys, and outstation tours. Transportation can be planned according to the passenger count, pickup location, destination, route, travel duration, luggage requirements, and overall itinerary."
}
]
};











const faqData = [
{
question: "How can I rent an Innova in Pune?",
answer: "An Innova can be rented in Pune by sharing the pickup location, destination, travel date, passenger count, trip duration, and preferred departure time. Ruturaj Enterprises can coordinate Innova rental for family journeys, local sightseeing, airport transfers, corporate travel, weddings, pilgrimage tours, weekend trips, and outstation travel."
},
{
question: "What types of trips are suitable for Innova rental in Pune?",
answer: "Innova rental can be considered for group travel where passengers want to travel together in one spacious vehicle. It can be arranged for family vacations, business journeys, airport transfers, weddings, sightseeing programs, religious tours, social events, and outstation trips involving planned stops and longer travel distances."
},
{
question: "Can I hire an Innova from Pune for an outstation journey?",
answer: "Outstation Innova rentals can be arranged from Pune for destinations within Maharashtra as well as selected routes to other states. The vehicle can be planned for one-day excursions, weekend travel, multi-day holidays, family tours, pilgrimage routes, business visits, and sightseeing itineraries based on the required route and schedule."
},
{
question: "Is Innova suitable for family travel from Pune?",
answer: "Families can consider an Innova when they need a dedicated vehicle for a planned journey with multiple passengers and luggage. Travel plans can include sightseeing stops, hotel transfers, meal breaks, rest points, religious destinations, and return travel, allowing the family group to remain together throughout the trip."
},
{
question: "Can I rent an Innova for airport pickup and drop in Pune?",
answer: "Innova rental can be arranged for airport pickups and drops when passengers require a dedicated vehicle for their travel. The transportation schedule can be coordinated around flight arrival or departure timings, with provisions for luggage and onward transfers between Pune Airport, hotels, residences, offices, or other destinations."
},
{
question: "Can an Innova be hired for corporate travel in Pune?",
answer: "Corporate professionals can use an Innova for client meetings, airport transfers, business visits, conferences, site inspections, executive travel, and company programs. The journey can be organized around office locations, meeting schedules, reporting times, multiple business destinations, and return requirements."
},
{
question: "Can I use an Innova rental for a wedding in Pune?",
answer: "An Innova can be arranged for wedding-related transportation involving family members, relatives, or selected guests. The vehicle may be used for transfers between homes, hotels, marriage halls, banquet venues, railway stations, airports, and reception locations according to the wedding program and ceremony timings."
},
{
question: "Can I rent an Innova for a pilgrimage from Pune?",
answer: "Pilgrimage travel can be planned with an Innova when a family or small group wants dedicated transportation between multiple religious destinations. The itinerary may include temple visits, darshan schedules, meal breaks, overnight stays, sightseeing locations, and return travel according to the group's planned religious tour."
},
{
question: "What details are needed to book an Innova on rent in Pune?",
answer: "For an accurate rental arrangement, provide the travel date, pickup location, destination, number of passengers, luggage details, journey duration, intermediate stops, and preferred departure and return timings. A detailed itinerary allows Ruturaj Enterprises to coordinate the Innova according to the group's actual transportation requirements."
},
{
question: "Why choose Ruturaj Enterprises for Innova On Rent in Pune?",
answer: "Ruturaj Enterprises coordinates Innova rentals for family tours, corporate travel, airport transfers, weddings, pilgrimages, sightseeing, weekend journeys, local transportation, and outstation trips. Rental planning can be based on passenger requirements, pickup points, route, travel duration, luggage, planned stops, and the complete journey schedule."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rahul Gaikwad",
feedback:
"We rented an Innova from Ruturaj Enterprises for a family trip from Pune that included several sightseeing locations. Having a dedicated vehicle for the entire journey made it easier to manage our stops, hotel transfers, and return schedule. The arrangement was convenient for our group and luggage.",
rating: 5
},
{
id: 2,
name: "Miss. Shreya Joshi",
feedback:
"I arranged an Innova through Ruturaj Enterprises for a business trip that involved airport pickup and visits to multiple locations in Pune. Having one vehicle for the scheduled transfers made the day's travel easier to coordinate around meetings and flight timings.",
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
  "name": "Innova On Rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/innova-on-rent-in-pune.webp",
  "description":
    "Innova On Rent in Pune for family trips, group travel, corporate journeys, weddings, airport transfers, local sightseeing, pilgrimage tours and outstation travel. Ruturaj Enterprises provides Innova rental, hire and booking services with comfortable AC and luxury options for passengers seeking spacious and convenient transportation. With experienced drivers, flexible rental plans and well-maintained vehicles, Innova cars are suitable for one-way journeys, round trips, weekend getaways, business travel, family holidays, wedding guest transfers and long-distance journeys from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/innova-on-rent-in-pune"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Innova On Rent in Pune | Innova Hire Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Innova On Rent in Pune for family trips, group travel, corporate journeys, weddings, airport transfers, sightseeing and outstation tours. Hire comfortable AC and luxury Innova cars from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Innova Rental Pune, Innova Hire Pune, Innova Booking Pune, AC Innova On Rent Pune, Luxury Innova Rental Pune, Innova for Outstation Pune, Innova for Family Trip Pune, Innova for Group Travel Pune, Innova for Corporate Travel Pune, Innova for Wedding Pune, Innova for Airport Pickup Pune, Innova for Local Travel Pune, Affordable Innova Rental Pune, Innova On Rent Pune, Innova On Rent in Pune, Innova Car Rental Pune, Innova Car Hire Pune, Innova Car Booking Pune, Innova Cab Pune, Innova Cab Rental Pune, Innova Cab Hire Pune, Innova Cab Booking Pune, Innova Taxi Pune, Toyota Innova Rental Pune, Toyota Innova Hire Pune, Toyota Innova Booking Pune, Toyota Innova On Rent Pune, AC Innova Rental Pune, AC Innova Hire Pune, AC Innova Booking Pune, Luxury Innova On Rent Pune, Luxury Innova Hire Pune, Luxury Innova Booking Pune, Outstation Innova Rental Pune, Outstation Innova Hire Pune, Outstation Innova Booking Pune, One Way Innova Pune, One Way Innova Rental Pune, One Way Innova Hire Pune, One Way Innova Booking Pune, Round Trip Innova Pune, Round Trip Innova Rental Pune, Round Trip Innova Hire Pune, Round Trip Innova Booking Pune, Local Innova Rental Pune, Local Innova Hire Pune, Local Innova Booking Pune, Innova for Family Tour Pune, Family Innova Rental Pune, Family Innova Hire Pune, Family Innova Booking Pune, Innova for Group Tour Pune, Group Innova Rental Pune, Group Innova Hire Pune, Group Innova Booking Pune, Innova for Corporate Events Pune, Corporate Innova Rental Pune, Corporate Innova Hire Pune, Corporate Innova Booking Pune, Corporate Travel Innova Pune, Business Travel Innova Pune, Innova for Wedding Guests Pune, Wedding Innova Rental Pune, Wedding Innova Hire Pune, Wedding Innova Booking Pune, Marriage Innova Rental Pune, Marriage Innova Hire Pune, Innova for School Trip Pune, Innova for College Trip Pune, Innova for Picnic Pune, Picnic Innova Rental Pune, Picnic Innova Hire Pune, Innova for Airport Transfer Pune, Airport Innova Rental Pune, Airport Innova Hire Pune, Airport Innova Booking Pune, Innova Airport Pickup Pune, Innova Airport Drop Pune, Innova for Sightseeing Pune, Sightseeing Innova Rental Pune, Sightseeing Innova Hire Pune, Sightseeing Innova Booking Pune, Pune City Tour Innova, Innova for Pune Darshan, Pune Darshan Innova Rental, Innova for Maharashtra Tour Pune, Innova for Temple Tour Pune, Pilgrimage Innova Pune, Innova for Holiday Trip Pune, Innova for Weekend Trip Pune, Innova for Tourist Travel Pune, Tourist Innova Rental Pune, Tourist Innova Hire Pune, Tourist Innova Booking Pune, Innova with Driver Pune, Innova Rental with Driver Pune, Innova Hire with Driver Pune, Innova Booking with Driver Pune, Comfortable Innova Pune, Premium Innova Rental Pune, Professional Innova Hire Pune, Reliable Innova Rental Pune, Innova Transportation Pune, Innova Taxi Service Pune, Innova Cab Service Pune, Innova Rental Service Pune, Innova Hire Service Pune, Innova Booking Service Pune, Innova Rental Near Me Pune, Innova Hire Near Me Pune, Ruturaj Enterprises Innova Rental Pune"
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
                            <img src='/images/keyword/103.jpg' alt='img' className='img-fluid' />
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

export default Innovaonrentinpune;