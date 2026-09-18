import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Twosixseaterbus() {

const cardData = {
keyword: "26 Seater Bus on Rent in Pune",
headingDescription: "Ruturaj Enterprises offers 26 Seater Bus on Rent in Pune for families, friends, corporate teams, wedding groups, school excursions, airport transfers, picnics, sightseeing programs, and organized tourist tours. A 26-seater bus is a practical choice for medium-sized groups that prefer traveling together in one dedicated vehicle rather than coordinating multiple cars or smaller vehicles. Rental arrangements can be planned for one-day trips, weekend getaways, multi-day tours, corporate programs, marriage functions, educational journeys, and outstation travel from Pune to destinations across Maharashtra and nearby states. Depending on the journey requirements, passengers can select suitable AC, luxury, or affordable options according to group size, comfort expectations, destination, trip duration, luggage requirements, and planned itinerary.",
topPlaces: [
{
title: "Lonavala",
description: "Lonavala is a convenient destination for family holidays, corporate outings, school excursions, and weekend group trips from Pune. A 26-seater bus allows a medium-sized group to travel together comfortably while providing practical space for passengers and luggage and making it easier to coordinate sightseeing and return schedules."
},
{
title: "Goa",
description: "Goa is a popular choice for extended family vacations, corporate retreats, friend groups, and organized tourist tours from Pune. A dedicated 26-seater bus provides a shared travel arrangement for the longer road journey, helping groups coordinate luggage, scheduled stops, sightseeing plans, accommodation transfers, and return travel."
},
{
title: "Shirdi",
description: "Shirdi is suitable for family pilgrimages, religious groups, senior travelers, and organized tour parties traveling from Pune. Hiring a 26-seater bus provides a convenient group transportation solution where passengers can remain together while managing luggage, departure timings, temple visits, meal breaks, and the planned return journey."
},
{
title: "Alibaug",
description: "Alibaug offers a popular coastal getaway for families, friends, corporate teams, and social groups traveling from Pune. A 26-seater bus is useful for keeping the complete group together while providing comfortable shared transportation and convenient space for luggage during the journey and local sightseeing."
},
{
title: "Nashik",
description: "Nashik is a versatile destination for family tours, pilgrimage visits, corporate programs, and tourist journeys from Pune. A dedicated 26-seater bus can simplify transportation by allowing passengers to follow one common schedule while accommodating luggage and planned stops throughout the trip."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar attracts families, school groups, corporate teams, and tourists looking for a scenic hill-station trip from Pune. A 26-seater bus provides a practical option for medium-sized groups, helping organizers coordinate departure timings, sightseeing locations, meal breaks, and return travel through one shared vehicle."
},
{
title: "Kolhapur",
description: "Kolhapur is suitable for family journeys, religious visits, cultural tours, corporate travel, and organized group excursions from Pune. With a 26-seater bus, passengers can travel together with their belongings while maintaining a coordinated route and convenient schedule for sightseeing and return transportation."
},
{
title: "Bhandardara",
description: "Bhandardara is an attractive destination for nature trips, family outings, corporate retreats, and weekend group programs from Pune. A 26-seater bus provides a comfortable shared transportation option for groups carrying personal luggage and outdoor essentials while following a planned itinerary."
},
{
title: "Panchgani",
description: "Panchgani is well suited for family holidays, school trips, corporate outings, and group vacations from Pune. A 26-seater bus helps keep participants together throughout the journey while providing a practical arrangement for sightseeing stops, meal breaks, luggage handling, and scheduled return travel."
},
{
title: "Ratnagiri",
description: "Ratnagiri offers a coastal travel option for families, friends, school groups, and organized tourist parties planning a longer journey from Pune. A dedicated 26-seater bus allows passengers to stay together while supporting luggage accommodation, sightseeing schedules, accommodation transfers, and the complete return itinerary."
}
],
services: [
{
name: "26 Seater Bus Rental Pune",
description: "26 Seater Bus Rental Pune is suitable for medium-sized families, friends, corporate teams, wedding groups, school parties, and organized tourist groups that require one dedicated vehicle. Ruturaj Enterprises can arrange the rental according to passenger count, destination, travel duration, luggage requirements, pickup locations, and the complete journey plan."
},
{
name: "26 Seater Bus Hire Pune",
description: "26 Seater Bus Hire Pune provides a convenient group transportation solution for passengers who want to travel together instead of arranging several smaller vehicles. The bus can be considered for family holidays, corporate programs, weddings, school excursions, picnics, sightseeing tours, and outstation journeys with schedules coordinated around the group's requirements."
},
{
name: "26 Seater Bus Booking Pune",
description: "26 Seater Bus Booking Pune helps customers organize group transportation in advance according to travel dates, passenger requirements, route, destination, and trip duration. Advance planning can make it easier to coordinate pickup points, departure timings, luggage arrangements, sightseeing stops, overnight stays, and return transportation."
},
{
name: "AC 26 Seater Bus Pune",
description: "AC 26 Seater Bus Pune provides an air-conditioned group transportation option for passengers who prefer a cooler and more comfortable travel environment. It can be suitable for family vacations, corporate journeys, weddings, tourist tours, airport transfers, and long-distance highway trips where passengers spend several hours traveling together."
},
{
name: "Luxury 26 Seater Bus Pune",
description: "Luxury 26 Seater Bus Pune is suitable for groups looking for a more refined and comfortable transportation experience for special occasions and extended journeys. It can be considered for corporate events, premium family tours, wedding transportation, executive group travel, and tourist programs where additional passenger comfort is an important consideration."
},
{
name: "26 Seater Bus for Outstation Pune",
description: "26 Seater Bus for Outstation Pune provides dedicated group transportation for journeys from Pune to destinations across Maharashtra and nearby states. Medium-sized groups can travel together while keeping luggage, passenger coordination, sightseeing schedules, planned stops, and return arrangements within one organized transportation setup."
},
{
name: "26 Seater Bus for Family Trip Pune",
description: "26 Seater Bus for Family Trip Pune is designed for families planning holidays, pilgrimages, weekend breaks, and multi-day tours with relatives traveling together. The larger shared seating arrangement helps keep family members together while providing practical space for luggage and personal belongings throughout the journey."
},
{
name: "26 Seater Bus for Group Travel Pune",
description: "26 Seater Bus for Group Travel Pune is a practical option for friends, relatives, social organizations, and organized travel parties requiring shared transportation. One dedicated bus can simplify route coordination, passenger management, luggage handling, sightseeing schedules, meal stops, and return travel compared with arranging multiple separate vehicles."
},
{
name: "26 Seater Bus for Corporate Events Pune",
description: "26 Seater Bus for Corporate Events Pune supports employee transportation for conferences, meetings, training programs, team outings, annual gatherings, and company functions. A dedicated bus allows participants to travel together according to planned pickup locations and event timings while providing coordinated transportation for venue transfers and return journeys."
},
{
name: "26 Seater Bus for Wedding Pune",
description: "26 Seater Bus for Wedding Pune is useful for transporting relatives, guests, friends, and wedding groups between homes, hotels, ceremony venues, reception locations, and other scheduled destinations. The dedicated bus helps families coordinate guest movement while keeping the group together during local as well as outstation wedding travel."
},
{
name: "26 Seater Bus for School Trip Pune",
description: "26 Seater Bus for School Trip Pune can be arranged for educational tours, field visits, excursions, recreational outings, and student group travel. A dedicated vehicle helps teachers and organizers manage the planned itinerary with coordinated departure points, destination visits, scheduled breaks, sightseeing activities, and return timings."
},
{
name: "26 Seater Bus for Airport Pickup Pune",
description: "26 Seater Bus for Airport Pickup Pune provides group transportation for passengers arriving together at Pune Airport or traveling collectively for an onward journey. The bus offers convenient seating and luggage accommodation while supporting scheduled pickup arrangements and direct transfers to hotels, residences, offices, event venues, or other destinations."
},
{
name: "Affordable 26 Seater Bus Pune",
description: "Affordable 26 Seater Bus Pune is intended for groups looking for practical transportation while keeping the overall travel budget in consideration. Rental planning can be aligned with passenger count, destination, trip duration, and vehicle requirements so a group can use one shared bus instead of arranging several separate cars or smaller vehicles."
},
{
name: "26 Seater Bus Rental Service Pune",
description: "26 Seater Bus Rental Service Pune provides group transportation for family tours, corporate travel, weddings, school trips, tourist programs, picnics, airport transfers, and outstation journeys. The rental can be coordinated around the complete itinerary, including pickup locations, travel timings, destination stops, overnight requirements, and scheduled return arrangements."
},
{
name: "26 Seater Bus for Picnic Pune",
description: "26 Seater Bus for Picnic Pune is suitable for families, friends, colleges, offices, and social groups planning recreational outings together. A dedicated bus provides shared transportation for passengers and their belongings while making it easier to coordinate departure times, picnic activities, meal breaks, destination stops, and return travel."
},
{
name: "26 Seater Bus for Local Sightseeing Pune",
description: "26 Seater Bus for Local Sightseeing Pune supports medium-sized groups visiting multiple attractions during a planned sightseeing program around Pune and nearby travel circuits. One dedicated vehicle makes passenger movement easier to coordinate while providing practical space for luggage and allowing the group to follow a common sightseeing schedule."
},
{
name: "26 Seater Bus for One Day Trip Pune",
description: "26 Seater Bus for One Day Trip Pune is suitable for groups planning same-day excursions to nearby destinations and attractions from Pune. The rental can be scheduled around preferred departure and return times, giving the group one dedicated vehicle for sightseeing, meals, rest stops, passenger movement, and the complete round trip."
},
{
name: "26 Seater Bus for Corporate Travel Pune",
description: "26 Seater Bus for Corporate Travel Pune provides organized transportation for employees, management teams, clients, and business groups traveling between offices, hotels, meeting venues, industrial locations, and event destinations. The vehicle can be coordinated around business schedules, pickup requirements, passenger count, destination, and planned route details."
},
{
name: "26 Seater Bus for Marriage Pune",
description: "26 Seater Bus for Marriage Pune helps families arrange transportation for marriage ceremonies, receptions, pre-wedding functions, and related guest movements. It can be used for transfers between residences, hotels, venues, and outstation destinations while keeping relatives and guests together through one planned group transportation arrangement."
},
{
name: "26 Seater Luxury Bus Hire Pune",
description: "26 Seater Luxury Bus Hire Pune provides a premium group travel option for customers arranging special tours, weddings, corporate events, family celebrations, and longer journeys. The service is suitable when a medium-sized group wants dedicated transportation with greater attention to passenger comfort and an organized travel experience."
},
{
name: "26 Seater AC Bus Rental Pune",
description: "26 Seater AC Bus Rental Pune offers air-conditioned transportation for families, corporate teams, tourists, wedding groups, school parties, and other medium-sized groups. It can be arranged for local travel, airport transfers, one-day excursions, weekend trips, and long-distance journeys where maintaining a comfortable cabin environment is important."
},
{
name: "26 Seater Bus for Tourist Trip Pune",
description: "26 Seater Bus for Tourist Trip Pune is designed for groups exploring hill stations, beaches, pilgrimage destinations, heritage locations, and other tourist circuits from Pune. A dedicated bus allows passengers to follow one common itinerary while providing practical seating, luggage accommodation, sightseeing coordination, and convenient travel between multiple destinations."
}
],
tableData: [
["26 Seater Bus Rental Pune", "Dedicated 26-seater bus rental for family tours, group journeys, corporate programs, and special events."],
["26 Seater Bus Hire Pune", "26-seater vehicle hire for medium-sized groups traveling together on planned routes."],
["26 Seater Bus Booking Pune", "Advance booking support for passenger groups, destinations, travel dates, and complete itineraries."],
["AC 26 Seater Bus Pune", "Air-conditioned 26-seater option for comfortable local, outstation, and long-distance group travel."],
["Luxury 26 Seater Bus Pune", "Premium 26-seater transportation for special occasions, corporate travel, weddings, and extended tours."],
["26 Seater Bus for Outstation Pune", "Dedicated group vehicle for destinations outside Pune and longer road journeys."],
["26 Seater Bus for Family Trip Pune", "Shared 26-seater transportation for families traveling together with luggage and personal belongings."],
["26 Seater Bus for Group Travel Pune", "Practical group transportation for friends, relatives, social groups, and organized travel parties."],
["26 Seater Bus for Corporate Events Pune", "26-seater group vehicle for conferences, meetings, employee events, outings, and company programs."],
["26 Seater Bus for Wedding Pune", "26-seater transportation for wedding guests, relatives, functions, venue transfers, and ceremonies."],
["26 Seater Bus for School Trip Pune", "Organized transportation for educational tours, excursions, student groups, and school outings."],
["26 Seater Bus for Airport Pickup Pune", "Group airport pickup and transfer arrangement with seating and luggage accommodation."],
["Affordable 26 Seater Bus Pune", "Budget-conscious 26-seater group transportation planned around destination and travel requirements."],
["26 Seater Bus Rental Service Pune", "Flexible rental service for tours, events, sightseeing, family trips, and corporate travel."],
["26 Seater Bus for Picnic Pune", "Shared transportation for family, office, college, and social picnic groups."],
["26 Seater Bus for Local Sightseeing Pune", "26-seater vehicle support for multiple sightseeing stops within a planned travel itinerary."],
["26 Seater Bus for One Day Trip Pune", "Same-day group travel option with coordinated departure, sightseeing, and return schedules."],
["26 Seater Bus for Corporate Travel Pune", "Dedicated transportation for employees, management teams, clients, and business groups."],
["26 Seater Bus for Marriage Pune", "Group vehicle arrangement for marriage functions, guest transfers, relatives, and venue travel."],
["26 Seater Luxury Bus Hire Pune", "Premium 26-seater hire for weddings, corporate programs, special tours, and group occasions."],
["26 Seater AC Bus Rental Pune", "Air-conditioned 26-seater rental for comfortable group transportation across different routes."],
["26 Seater Bus for Tourist Trip Pune", "Dedicated 26-seater travel option for sightseeing tours and multi-destination tourist circuits."]
],
whychoose: [
{
WhyChooseheading: "Convenient 26-Seater Capacity",
WhyChoosedescription: "A 26-seater bus is a practical choice for medium-sized groups that need more capacity than a few cars while maintaining a manageable group travel arrangement. Keeping passengers in one dedicated vehicle simplifies communication, route coordination, luggage management, sightseeing planning, and overall journey organization."
},
{
WhyChooseheading: "Comfortable Shared Travel",
WhyChoosedescription: "Families, friends, corporate teams, wedding groups, and school parties can benefit from traveling together instead of managing several separate vehicles. A dedicated 26-seater provides shared transportation where the group can follow common departure timings, destination schedules, planned stops, and return arrangements."
},
{
WhyChooseheading: "AC and Luxury Choices",
WhyChooseheading: "AC and Luxury Choices",
WhyChoosedescription: "Travel requirements can change according to the season, journey distance, event type, and passenger expectations. Customers can consider AC or luxury 26-seater options when additional cabin comfort is preferred for long highway journeys, family holidays, corporate programs, wedding travel, or premium tourist tours."
},
{
WhyChooseheading: "Suitable for Outstation Journeys",
WhyChoosedescription: "Long-distance travel from Pune often involves luggage, multiple passengers, sightseeing stops, and detailed schedules that can be difficult to coordinate across separate vehicles. A dedicated 26-seater provides a practical group transportation arrangement for destinations across Maharashtra and nearby states, including one-day and multi-day itineraries."
},
{
WhyChooseheading: "Useful for Events and Functions",
WhyChoosedescription: "Weddings, corporate events, school programs, family celebrations, and group functions frequently require transportation between several locations. A 26-seater bus can help organizers move guests and participants together between homes, hotels, offices, venues, and destinations according to the planned event schedule."
},
{
WhyChooseheading: "Practical for Family and Group Tours",
WhyChoosedescription: "Group holidays become easier to organize when family members, friends, or colleagues can travel in one vehicle with their belongings. The 26-seater format provides a useful balance between passenger capacity and group coordination, making it suitable for recreational trips, pilgrimages, tourist tours, and weekend journeys."
},
{
WhyChooseheading: "Flexible Trip Arrangements",
WhyChoosedescription: "The rental can be planned for different travel durations and purposes, including one-day excursions, weekend getaways, sightseeing programs, airport transfers, corporate travel, weddings, school trips, and extended tours. Pickup locations, destination routes, scheduled stops, travel duration, and return requirements can be considered during trip planning."
},
{
WhyChooseheading: "Organized Group Transportation",
WhyChoosedescription: "Ruturaj Enterprises handles 26-seater bus requirements for family trips, corporate programs, tourist journeys, school excursions, picnics, weddings, airport transfers, and outstation travel. The transportation arrangement can be aligned with passenger requirements, destination, itinerary, luggage needs, travel duration, and the overall purpose of the journey."
}
]
};













const faqData = [
{
question: "How can I arrange a 26 seater bus on rent in Pune?",
answer: "A 26 seater bus can be arranged by sharing the pickup location, destination, travel date, number of passengers, trip duration, and planned route. Ruturaj Enterprises can coordinate transportation for family tours, corporate outings, educational trips, weddings, pilgrimages, picnics, sightseeing programs, and other medium-sized group travel requirements."
},
{
question: "What type of groups can use a 26 seater bus?",
answer: "A 26 seater bus can accommodate groups that need more capacity than a smaller Tempo Traveller or mini bus. It can be considered by families, friends, companies, schools, colleges, wedding parties, tour groups, and social organizations planning local or outstation travel together."
},
{
question: "Can I take a 26 seater bus from Pune for an outstation tour?",
answer: "Outstation tours from Pune can be planned with a 26 seater bus for destinations across Maharashtra and other states. The vehicle can be used for short excursions as well as multi-day journeys, with sightseeing locations, rest breaks, meal stops, overnight halts, and return travel included in the itinerary."
},
{
question: "Is a 26 seater bus suitable for family vacations?",
answer: "Families traveling in a larger group can use a 26 seater bus for holidays, weekend getaways, sightseeing tours, and multi-destination vacations. Traveling together makes it easier to coordinate departure times, luggage, sightseeing stops, accommodation transfers, and the return journey without depending on multiple separate vehicles."
},
{
question: "Can a 26 seater bus be rented for wedding guest transportation?",
answer: "A 26 seater bus can be useful for transporting wedding guests and relatives between homes, hotels, railway stations, airports, marriage venues, banquet halls, and reception locations. The transportation schedule can be coordinated with ceremony timings, venue changes, guest arrival times, and other requirements of the wedding program."
},
{
question: "Can companies use a 26 seater bus for employee outings?",
answer: "Corporate teams can arrange a 26 seater bus for employee outings, team-building programs, conferences, training activities, company celebrations, industrial visits, and business events. The plan can include employee pickup points, destination locations, event timings, planned stops, and return transportation according to the company's schedule."
},
{
question: "Can schools and colleges hire a 26 seater bus in Pune?",
answer: "Educational institutions can consider a 26 seater bus for student excursions, college tours, school picnics, educational visits, and recreational programs. The available capacity can be planned around the number of students and accompanying staff, while the route, destination activities, stopping points, and journey duration can be organized beforehand."
},
{
question: "Is a 26 seater bus suitable for pilgrimage and temple tours?",
answer: "Religious groups can use a 26 seater bus for pilgrimage journeys from Pune covering one or several temple destinations. The itinerary can be structured around darshan schedules, temple visits, meal breaks, rest periods, sightseeing points, and overnight stays, helping the entire group follow a common travel plan."
},
{
question: "What details are needed before renting a 26 seater bus?",
answer: "Important trip information includes the pickup location, destination, travel date, passenger count, luggage requirements, journey duration, intermediate stops, and preferred departure and return timings. For longer tours, sharing the complete itinerary allows Ruturaj Enterprises to understand the transportation requirements more accurately."
},
{
question: "Why choose Ruturaj Enterprises for a 26 seater bus on rent in Pune?",
answer: "Ruturaj Enterprises coordinates 26 seater bus requirements for family vacations, outstation tours, weddings, corporate events, educational excursions, pilgrimages, picnics, and sightseeing programs. The transportation arrangement can be organized around passenger numbers, route requirements, luggage, pickup points, journey duration, planned stops, and the group's complete itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Dinesh Pawar",
feedback:
"We arranged a 26 seater bus through Ruturaj Enterprises for a group holiday from Pune. The vehicle capacity worked well for our group, and having everyone travel together made it easier to manage our sightseeing schedule. We could also keep our luggage together and coordinate stops without arranging multiple cars.",
rating: 5
},
{
id: 2,
name: "Miss. Vaishali More",
feedback:
"Our college group needed a larger vehicle for an educational trip, so we arranged a 26 seater bus from Ruturaj Enterprises. The group transportation made it easier for students and staff to follow the same itinerary and stay together at different locations. Overall coordination of the journey was convenient for the organizers.",
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
  "name": "26 Seater Bus on Rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/26-seater-bus-on-rent-in-pune.webp",
  "description":
    "26 Seater Bus on Rent in Pune for comfortable group transportation, family tours, outstation journeys, corporate events, weddings, school and college trips, picnics, sightseeing and airport transfers. Ruturaj Enterprises provides 26 seater bus rental, hire and booking services with AC and luxury options for different travel requirements. Spacious seating, experienced drivers and flexible rental plans make the bus suitable for one-day trips, weekend getaways, multi-day tours, corporate transportation, wedding guest travel, educational excursions and long-distance journeys from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/26-seater-bus-on-rent-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    26 Seater Bus on Rent in Pune | 26 Seater Bus Hire Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="26 Seater Bus on Rent in Pune for family trips, group travel, corporate events, weddings, school trips, picnics, sightseeing and outstation journeys. Hire AC and luxury 26 seater buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="26 Seater Bus Rental Pune, 26 Seater Bus Hire Pune, 26 Seater Bus Booking Pune, AC 26 Seater Bus Pune, Luxury 26 Seater Bus Pune, 26 Seater Bus for Outstation Pune, 26 Seater Bus for Family Trip Pune, 26 Seater Bus for Group Travel Pune, 26 Seater Bus for Corporate Events Pune, 26 Seater Bus for Wedding Pune, 26 Seater Bus for School Trip Pune, 26 Seater Bus for Picnic Pune, 26 Seater Bus for Airport Pickup Pune, Affordable 26 Seater Bus Pune, 26 Seater Bus on Rent Pune, 26 Seater Bus on Rent in Pune, 26 Seater Bus Rental Service Pune, 26 Seater Bus Hire Service Pune, 26 Seater Bus Booking Service Pune, 26 Seater AC Bus Rental Pune, 26 Seater AC Bus Hire Pune, 26 Seater AC Bus Booking Pune, 26 Seater Luxury Bus Rental Pune, 26 Seater Luxury Bus Hire Pune, 26 Seater Luxury Bus Booking Pune, 26 Seater Tourist Bus Pune, 26 Seater Tourist Bus Rental Pune, 26 Seater Tourist Bus Hire Pune, 26 Seater Tourist Bus Booking Pune, 26 Seater Outstation Bus Pune, 26 Seater Outstation Bus Rental Pune, 26 Seater Outstation Bus Hire Pune, 26 Seater Outstation Bus Booking Pune, 26 Seater One Way Bus Pune, 26 Seater One Way Bus Rental Pune, 26 Seater One Way Bus Hire Pune, 26 Seater Round Trip Bus Pune, 26 Seater Round Trip Bus Rental Pune, 26 Seater Round Trip Bus Hire Pune, 26 Seater Local Bus Pune, 26 Seater Local Bus Rental Pune, 26 Seater Local Bus Hire Pune, 26 Seater Local Bus Booking Pune, 26 Seater Family Tour Bus Pune, 26 Seater Family Travel Bus Pune, 26 Seater Group Tour Bus Pune, 26 Seater Group Travel Bus Pune, 26 Seater Corporate Bus Pune, 26 Seater Corporate Bus Rental Pune, 26 Seater Corporate Bus Hire Pune, 26 Seater Corporate Bus Booking Pune, 26 Seater Corporate Event Bus Pune, 26 Seater Event Bus Rental Pune, 26 Seater Event Bus Hire Pune, 26 Seater Event Bus Booking Pune, 26 Seater Wedding Bus Pune, 26 Seater Wedding Bus Rental Pune, 26 Seater Wedding Bus Hire Pune, 26 Seater Wedding Bus Booking Pune, 26 Seater Wedding Guest Bus Pune, 26 Seater Wedding Guest Transportation Pune, 26 Seater Marriage Bus Pune, 26 Seater Marriage Bus Rental Pune, 26 Seater Marriage Bus Hire Pune, 26 Seater School Trip Bus Pune, 26 Seater School Tour Bus Pune, 26 Seater School Bus Rental Pune, 26 Seater College Trip Bus Pune, 26 Seater Picnic Bus Pune, 26 Seater Picnic Bus Rental Pune, 26 Seater Picnic Bus Hire Pune, 26 Seater Family Picnic Bus Pune, 26 Seater Group Picnic Bus Pune, 26 Seater Airport Bus Pune, 26 Seater Airport Transfer Bus Pune, 26 Seater Airport Pickup Bus Pune, 26 Seater Airport Drop Bus Pune, 26 Seater Sightseeing Bus Pune, 26 Seater Sightseeing Bus Rental Pune, 26 Seater Sightseeing Bus Hire Pune, 26 Seater Pune City Tour Bus, 26 Seater Bus for Maharashtra Tour Pune, 26 Seater Bus for Weekend Trip Pune, 26 Seater Bus for Holiday Trip Pune, 26 Seater Bus for Temple Tour Pune, 26 Seater Pilgrimage Bus Pune, 26 Seater Bus for Tourist Pune, 26 Seater Bus with Driver Pune, 26 Seater Bus Rental with Driver Pune, 26 Seater Bus Hire with Driver Pune, 26 Seater Bus Booking with Driver Pune, Comfortable 26 Seater Bus Pune, Premium 26 Seater Bus Pune, Professional 26 Seater Bus Rental Pune, Reliable 26 Seater Bus Hire Pune, 26 Seater Group Transportation Pune, 26 Seater Bus Transportation Pune, 26 Seater Bus Service Pune, 26 Seater Bus Rental Near Me Pune, 26 Seater Bus Hire Near Me Pune, Ruturaj Enterprises 26 Seater Bus Rental Pune"
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
                            <img src='/images/keyword/94.jpg' alt='img' className='img-fluid' />
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

export default Twosixseaterbus;