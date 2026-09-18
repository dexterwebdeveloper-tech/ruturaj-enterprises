import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Bushireinpune() {


const cardData = {
keyword: "Bus Hire in Pune",
headingDescription: "Ruturaj Enterprises provides comfortable, reliable, and flexible Bus Hire in Pune services for families, friends, corporate teams, school and college groups, tourists, wedding parties, event organizers, and larger groups planning local or outstation journeys. Private buses can be arranged from Pune for family vacations, group tours, corporate events, weddings, school excursions, picnics, airport transfers, local sightseeing, one-day trips, pilgrimage journeys, and customized outstation tours. Customers can select AC, non-AC, luxury, affordable, tourist, family, corporate, local, and outstation bus options according to passenger capacity, luggage requirements, route, travel duration, comfort preference, and budget. A dedicated bus allows the complete group to travel together while making it easier to coordinate pickup points, sightseeing stops, hotel transfers, event venues, meal breaks, and return journeys according to the planned itinerary.",
topPlaces: [
{
title: "Lavasa",
description: "Lavasa is a scenic hill destination near Pune that attracts families, friends, corporate teams, and groups looking for a short leisure trip. A private bus provides convenient transportation for larger parties while allowing the itinerary to include lakeside areas, viewpoints, resorts, meal stops, and other nearby attractions before returning to Pune."
},
{
title: "Goa",
description: "Goa is a popular long-distance destination for Pune travelers planning family holidays, beach tours, corporate outings, weekend breaks, and group vacations. Bus hire allows passengers to remain together with their luggage while coordinating visits to beaches, forts, churches, markets, resorts, and other sightseeing destinations across North and South Goa."
},
{
title: "Bhandardara",
description: "Bhandardara offers a peaceful combination of lakes, mountains, waterfalls, and natural landscapes, making it suitable for family outings, group tours, picnics, and corporate retreats from Pune. A dedicated bus can accommodate larger groups and coordinate sightseeing, hotel transfers, meal breaks, and the scheduled return journey."
},
{
title: "Shirdi",
description: "Shirdi is a well-known pilgrimage destination for families, religious groups, senior travelers, and organized tour parties traveling from Pune. A private bus makes the journey more convenient by keeping passengers together while coordinating temple visits, accommodation, meal breaks, rest stops, and return transportation."
},
{
title: "Dapoli",
description: "Dapoli is a coastal getaway suitable for families, friends, corporate groups, and tourists planning a relaxed weekend or multi-day trip from Pune. Bus transportation provides practical space for passengers and luggage while supporting beach visits, sightseeing, accommodation transfers, meal stops, and the return journey."
},
{
title: "Nashik",
description: "Nashik is a popular outstation destination from Pune for pilgrimage tours, family trips, corporate outings, and tourist programs, offering religious, cultural, and leisure attractions. A hired bus helps groups remain together while visiting temples, vineyards, heritage locations, hotels, restaurants, and other selected destinations."
},
{
title: "Panchgani",
description: "Panchgani is a hill-station destination suitable for family holidays, school excursions, college trips, corporate outings, and short group tours from Pune. A dedicated bus can connect travelers with viewpoints, attractions, hotels, and nearby sightseeing locations while keeping passenger movement and the overall itinerary organized."
},
{
title: "Alibaug",
description: "Alibaug provides a convenient coastal destination for weekend trips, family vacations, group picnics, and corporate outings from Pune. A private bus allows larger groups to travel together with their luggage and coordinate beach visits, sightseeing stops, accommodation transfers, meal breaks, and return transportation."
},
{
title: "Kolhapur",
description: "Kolhapur is suitable for cultural journeys, pilgrimage tours, family vacations, and organized group travel from Pune, with temples and historical attractions forming important parts of many itineraries. Bus hire provides common transportation for the group while allowing sightseeing, hotel transfers, meal breaks, and return schedules to be planned together."
},
{
title: "Matheran",
description: "Matheran is a popular hill destination for families, school groups, college students, and corporate teams planning short trips from Pune. A private bus can handle transportation up to the permitted access area while helping groups coordinate luggage, sightseeing timings, accommodation, meal breaks, and their return journey."
}
],
services: [
{
name: "Bus Rental in Pune",
description: "Bus Rental in Pune provides dedicated transportation for families, friends, businesses, schools, tourists, wedding groups, and event organizers requiring a common vehicle. Ruturaj Enterprises can arrange suitable buses according to passenger capacity, luggage requirements, route, travel duration, comfort preference, and trip purpose for both local transportation and long-distance outstation journeys."
},
{
name: "Bus Booking in Pune",
description: "Bus Booking in Pune helps groups arrange transportation in advance according to their travel date, pickup point, destination, passenger count, luggage requirements, and preferred bus type. Advance planning allows the vehicle schedule to be coordinated with hotel bookings, sightseeing programs, corporate events, wedding functions, school trips, picnics, and return travel."
},
{
name: "AC Bus Hire in Pune",
description: "AC Bus Hire in Pune provides air-conditioned transportation for groups seeking comfortable travel during local journeys and longer outstation trips. Suitable AC buses can be arranged for family vacations, corporate programs, tourist tours, weddings, school excursions, airport transfers, and sightseeing plans according to passenger capacity, luggage, journey duration, and itinerary."
},
{
name: "Non AC Bus Hire in Pune",
description: "Non AC Bus Hire in Pune offers a practical transportation choice for groups looking for economical shared travel and sufficient passenger capacity. It can support school trips, picnics, local sightseeing, family functions, corporate movements, wedding transportation, tourist programs, and selected outstation journeys according to the group's requirements."
},
{
name: "Luxury Bus Hire in Pune",
description: "Luxury Bus Hire in Pune is suitable for groups seeking enhanced comfort and a premium transportation arrangement for special occasions, tours, and long-distance journeys. Luxury bus options can be considered for corporate events, weddings, family celebrations, tourist trips, and outstation travel based on passenger capacity, seating expectations, luggage requirements, journey duration, and preferred comfort."
},
{
name: "Bus Hire for Outstation Pune",
description: "Bus Hire for Outstation Pune provides dedicated transportation for groups traveling from Pune to destinations across Maharashtra and other states. The bus can be planned according to the selected route, passenger count, luggage, travel duration, sightseeing requirements, rest stops, accommodation transfers, and expected return schedule for an organized long-distance journey."
},
{
name: "Bus Hire for Family Trip Pune",
description: "Bus Hire for Family Trip Pune is designed for families traveling with children, senior members, relatives, and larger groups who prefer to remain together throughout their journey. A private bus provides passenger and luggage space while supporting planned sightseeing, hotel transfers, meal breaks, leisure stops, and coordinated return transportation."
},
{
name: "Bus Hire for Group Travel Pune",
description: "Bus Hire for Group Travel Pune offers convenient shared transportation for friends, relatives, social organizations, tourist parties, and other larger groups. A dedicated vehicle reduces the need to manage several cars and provides a common transportation plan for passenger pickup, luggage, sightseeing movements, accommodation transfers, events, and return travel."
},
{
name: "Bus Hire for Corporate Events Pune",
description: "Bus Hire for Corporate Events Pune supports transportation for employees, clients, delegates, and business teams attending conferences, seminars, meetings, exhibitions, annual functions, and corporate outings. Bus schedules can be coordinated with offices, hotels, airports, event venues, and return timings to maintain organized movement throughout the corporate program."
},
{
name: "Bus Hire for Wedding Pune",
description: "Bus Hire for Wedding Pune helps families arrange transportation for relatives, guests, friends, and wedding participants between homes, hotels, banquet halls, resorts, temples, and function venues. A dedicated bus can be scheduled around ceremony timings, reception programs, airport pickups, guest accommodation, and other wedding-related transportation requirements."
},
{
name: "Bus Hire for School Trip Pune",
description: "Bus Hire for School Trip Pune provides group transportation for educational excursions, field visits, recreational tours, and school outings. The bus arrangement can be planned according to student capacity, teacher travel, pickup and drop points, destination schedules, sightseeing requirements, rest breaks, and return timings while keeping the school group together."
},
{
name: "Bus Hire for Airport Transfer Pune",
description: "Bus Hire for Airport Transfer Pune is useful when multiple passengers need transportation between Pune Airport and homes, offices, hotels, wedding venues, or other destinations. A dedicated bus provides practical passenger and luggage capacity while allowing airport schedules, flight timings, onward transfers, and group movements to be coordinated within one transportation plan."
},
{
name: "Affordable Bus Hire in Pune",
description: "Affordable Bus Hire in Pune provides a practical shared transportation solution for groups that want to manage their travel expenses while keeping passengers together. Vehicle size and travel arrangements can be selected according to passenger count, route, journey duration, luggage, AC preference, sightseeing requirements, and the overall budget."
},
{
name: "Bus Rental Service in Pune",
description: "Bus Rental Service in Pune supports a wide range of transportation needs, including local travel, outstation tours, family vacations, corporate programs, school trips, weddings, picnics, airport transfers, and tourist journeys. Ruturaj Enterprises can coordinate bus arrangements around pickup locations, passenger capacity, luggage requirements, itinerary, travel duration, and planned return schedules."
},
{
name: "Bus Hire for Picnic Pune",
description: "Bus Hire for Picnic Pune is suitable for families, schools, colleges, offices, housing societies, and social groups planning day outings or weekend picnics. The hired bus can provide common transportation to lakes, hill stations, resorts, nature destinations, adventure locations, and other picnic spots while accommodating passengers and their belongings."
},
{
name: "Bus Hire for Local Sightseeing Pune",
description: "Bus Hire for Local Sightseeing Pune provides convenient transportation for groups exploring tourist attractions and important destinations within Pune and nearby areas. A dedicated bus can connect multiple sightseeing points according to the selected schedule while keeping families, tourists, school groups, corporate teams, and visiting guests together during the outing."
},
{
name: "Bus Hire for One Day Trip Pune",
description: "Bus Hire for One Day Trip Pune is useful for groups planning short excursions with a fixed departure and return schedule. The bus can be arranged for nearby hill stations, pilgrimage destinations, nature attractions, picnic locations, and tourist places while coordinating sightseeing stops, meal breaks, passenger capacity, luggage, and return timing."
},
{
name: "Bus Hire for Corporate Travel Pune",
description: "Bus Hire for Corporate Travel Pune supports employee transportation, business meetings, training programs, conferences, office outings, client visits, and corporate tours. Group transportation can connect offices, hotels, airports, industrial areas, event venues, and other business locations while maintaining coordinated pickup, travel, and drop schedules."
},
{
name: "Bus Hire for Marriage Function Pune",
description: "Bus Hire for Marriage Function Pune provides organized transportation for wedding guests, relatives, family members, and participants attending marriage ceremonies and related functions. The vehicle can be scheduled between homes, hotels, halls, resorts, temples, and reception venues according to function timings, helping larger groups move together with their luggage and personal belongings."
},
{
name: "Bus Hire for Tourist Trip Pune",
description: "Bus Hire for Tourist Trip Pune offers dedicated transportation for travelers exploring Pune, Maharashtra, and destinations in other states through organized tours. The itinerary can include beaches, hill stations, pilgrimage sites, heritage attractions, hotels, restaurants, nature destinations, and other sightseeing points while keeping the complete tourist group together throughout the journey."
},
{
name: "Bus Hire for Outstation Tour Pune",
description: "Bus Hire for Outstation Tour Pune is suitable for families, friends, corporate teams, school groups, tourists, and organizations planning multi-day journeys outside Pune. Ruturaj Enterprises can coordinate the bus around selected destinations, accommodation, sightseeing schedules, luggage requirements, passenger capacity, rest stops, and return travel to create a practical group transportation plan."
},
{
name: "Bus Hire Near Me Pune",
description: "Bus Hire Near Me Pune is useful for customers searching for convenient group transportation from their preferred location in Pune or nearby areas. Ruturaj Enterprises can organize suitable bus arrangements around the customer's pickup point, destination, passenger count, luggage, journey duration, vehicle preference, sightseeing requirements, and planned return schedule."
}
],
tableData: [
["Bus Rental in Pune", "Dedicated bus rental for families, groups, businesses, events, and tours"],
["Bus Booking in Pune", "Advance bus booking based on route, date, passenger count, and vehicle requirements"],
["AC Bus Hire in Pune", "Air-conditioned bus transportation for comfortable local and outstation journeys"],
["Non AC Bus Hire in Pune", "Economical bus hire for practical group transportation requirements"],
["Luxury Bus Hire in Pune", "Premium bus arrangements for special occasions, tours, and comfortable travel"],
["Bus Hire for Outstation Pune", "Dedicated transportation for journeys from Pune to destinations outside the city"],
["Bus Hire for Family Trip Pune", "Family group transportation with passenger and luggage space"],
["Bus Hire for Group Travel Pune", "Common vehicle for friends, relatives, organizations, and larger groups"],
["Bus Hire for Corporate Events Pune", "Organized transportation for employees, delegates, meetings, and corporate events"],
["Bus Hire for Wedding Pune", "Wedding guest and family transportation between homes, hotels, and venues"],
["Bus Hire for School Trip Pune", "Group transportation for educational excursions and school outings"],
["Bus Hire for Airport Transfer Pune", "Dedicated airport transfer transportation for groups with passenger and luggage capacity"],
["Affordable Bus Hire in Pune", "Budget-conscious bus transportation based on route and group requirements"],
["Bus Rental Service in Pune", "Complete bus rental support for local, outstation, event, and travel requirements"],
["Bus Hire for Picnic Pune", "Group transportation for family, school, office, and society picnic programs"],
["Bus Hire for Local Sightseeing Pune", "Dedicated bus for organized sightseeing around Pune and nearby destinations"],
["Bus Hire for One Day Trip Pune", "Convenient bus transportation for scheduled one-day excursions"],
["Bus Hire for Corporate Travel Pune", "Employee and business transportation for meetings, training, and office programs"],
["Bus Hire for Marriage Function Pune", "Group transportation for marriage ceremonies, receptions, and related functions"],
["Bus Hire for Tourist Trip Pune", "Tourist bus transportation for customized sightseeing and travel itineraries"],
["Bus Hire for Outstation Tour Pune", "Long-distance bus hire for multi-day tours outside Pune"],
["Bus Hire Near Me Pune", "Convenient bus hire arrangements based on the customer's preferred Pune pickup location"]
],
whychoose: [
{
WhyChooseheading: "Flexible Bus Options for Group Travel",
WhyChoosedescription: "Different journeys require different vehicle capacities and comfort levels depending on passenger strength, luggage, destination, duration, and trip purpose. Ruturaj Enterprises can arrange suitable bus options for families, friends, corporate teams, schools, tourists, wedding groups, and other larger parties according to the planned itinerary."
},
{
WhyChooseheading: "Convenient Outstation Journeys from Pune",
WhyChoosedescription: "Private bus hire makes long-distance travel more organized by keeping passengers and luggage together in one vehicle. The arrangement can support journeys to hill stations, beaches, pilgrimage destinations, tourist cities, and other outstation locations while coordinating sightseeing stops, rest breaks, hotel transfers, and return travel."
},
{
WhyChooseheading: "Practical Choice for Family Trips",
WhyChoosedescription: "Families traveling with children, senior members, and relatives can benefit from having one common vehicle throughout the journey. Bus transportation provides space for passengers and luggage while making it easier to coordinate sightseeing, accommodation transfers, meal breaks, leisure stops, and the complete return schedule."
},
{
WhyChooseheading: "Organized Corporate Transportation",
WhyChoosedescription: "Corporate travel often involves moving employees, clients, or delegates between offices, hotels, airports, meeting venues, and event locations. A dedicated bus can support conferences, training programs, corporate outings, business meetings, exhibitions, and other company activities while maintaining coordinated pickup and drop schedules."
},
{
WhyChooseheading: "Reliable Wedding and Function Travel",
WhyChoosedescription: "Marriage functions may require transportation between several locations within specific time windows, especially when guests stay at different hotels or homes. A hired bus provides a common travel option for relatives and guests while helping coordinate movements between wedding venues, reception halls, temples, resorts, and accommodation locations."
},
{
WhyChooseheading: "AC, Non-AC and Luxury Arrangements",
WhyChoosedescription: "Passenger expectations can vary according to the season, route, occasion, group type, and journey duration. Suitable AC, non-AC, luxury, tourist, and practical bus arrangements can be considered according to availability, passenger requirements, luggage capacity, comfort expectations, and the planned travel budget."
},
{
WhyChooseheading: "Useful for Picnics and One-Day Tours",
WhyChoosedescription: "Groups planning short excursions can use dedicated bus transportation for day trips, picnics, sightseeing programs, school outings, and corporate activities. The journey can be organized around a fixed departure point, selected destination, sightseeing schedule, meal breaks, planned activities, and a coordinated return to Pune."
},
{
WhyChooseheading: "Travel Planned Around Your Itinerary",
WhyChoosedescription: "Customized tours often include multiple destinations, accommodation stops, sightseeing attractions, event venues, and scheduled activities that require coordinated transportation. Ruturaj Enterprises can structure the bus hire arrangement around the selected route, passenger count, luggage, travel duration, comfort preference, sightseeing requirements, and return schedule."
}
]
};




const faqData = [
{
question: "How can I arrange Bus Hire in Pune?",
answer: "Bus Hire in Pune can be arranged by providing the pickup point, destination, travel date, number of passengers, trip duration, and preferred bus capacity. Ruturaj Enterprises can help coordinate suitable transportation for local sightseeing, outstation tours, weddings, corporate programs, school trips, pilgrimages, picnics, and other group travel requirements."
},
{
question: "What bus sizes are available for hire in Pune?",
answer: "Different seating capacities can be considered depending on the size of your group and the type of journey. Mini buses, mid-size buses, and larger tourist buses can be selected according to passenger count, luggage requirements, route distance, and comfort preferences, making it easier to organize transportation for both small and large groups."
},
{
question: "Can I hire a bus in Pune for an outstation trip?",
answer: "Outstation bus hire from Pune is suitable for group journeys to destinations across Maharashtra and other states. Ruturaj Enterprises can coordinate transportation for family vacations, corporate outings, educational tours, pilgrimages, wedding functions, sightseeing programs, and multi-day trips based on the planned route and travel schedule."
},
{
question: "Is Bus Hire in Pune available for weddings and family functions?",
answer: "A hired bus can be useful for transporting wedding guests and family members between residences, hotels, railway stations, airports, wedding venues, banquet halls, and reception locations. The travel schedule can be planned around ceremony timings and guest requirements so that group transportation remains organized throughout the function."
},
{
question: "Can companies hire buses in Pune for employee transportation?",
answer: "Businesses can arrange buses for employee outings, corporate events, conferences, team-building programs, industrial visits, training sessions, and other company activities. Pickup locations, passenger strength, destination, event timings, and the duration of transportation can be considered while planning a suitable corporate bus arrangement."
},
{
question: "Can I hire a bus in Pune for a school or college trip?",
answer: "Educational institutions can arrange group buses for school picnics, college tours, educational visits, excursions, and recreational programs. The required seating capacity can be selected according to the number of students and accompanying staff, while the route, planned stops, travel duration, and complete trip schedule can be considered."
},
{
question: "Is bus rental available in Pune for pilgrimage tours?",
answer: "Pilgrimage groups can use private bus transportation for temple visits and multi-destination religious tours starting from Pune. A customized route can include several temples, darshan locations, sightseeing points, meal breaks, rest stops, and return travel, with vehicle capacity selected according to the number of devotees."
},
{
question: "Can I hire a bus in Pune for a picnic or group outing?",
answer: "Private bus hire is convenient for family picnics, friend groups, social gatherings, corporate outings, and organized recreational trips. Keeping the group together in one vehicle can simplify departure coordination, luggage management, sightseeing stops, meal breaks, and the return journey while allowing the itinerary to be planned around the group's requirements."
},
{
question: "What information should I provide when requesting a bus in Pune?",
answer: "For a suitable bus arrangement, it is helpful to share the pickup location, destination, travel date, number of passengers, journey duration, approximate luggage requirements, preferred seating capacity, and purpose of the trip. These details allow Ruturaj Enterprises to understand the travel plan and coordinate the transportation accordingly."
},
{
question: "Why choose Ruturaj Enterprises for Bus Hire in Pune?",
answer: "Ruturaj Enterprises caters to different group transportation requirements in Pune, including local travel, outstation tours, weddings, corporate programs, school and college excursions, pilgrimages, picnics, and special events. Bus capacity and travel scheduling can be coordinated according to passenger numbers, route requirements, luggage, journey duration, and the group's planned itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rohit Kulkarni",
feedback:
"We arranged a bus through Ruturaj Enterprises for a group tour from Pune, and the overall transportation planning was convenient for our group. Everyone could travel together with enough space for our luggage, while the planned stops and sightseeing schedule were easier to coordinate using a dedicated bus.",
rating: 5
},
{
id: 2,
name: "Miss. Pooja Deshmukh",
feedback:
"For a family function in Pune, we needed transportation for several guests traveling between different locations. Ruturaj Enterprises helped us arrange the bus according to our schedule, which made guest transfers much simpler. Having one dedicated vehicle also helped everyone stay together during the event.",
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
  "name": "Bus Hire in Pune",
  "image": "https://ruturajenterprises.com/assets/images/bus-hire-in-pune.webp",
  "description":
    "Bus Hire in Pune for local transportation, outstation journeys, family trips, group tours, corporate events, weddings, school excursions, airport transfers and sightseeing. Ruturaj Enterprises provides flexible bus rental, booking and hire services with AC, non-AC and luxury buses suitable for different group sizes and travel requirements. Comfortable vehicles, experienced drivers and convenient rental options make it easier to arrange one-day trips, multi-day tours, corporate transportation, wedding guest transfers, school excursions and long-distance travel from Pune.",
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
    "url": "https://ruturajenterprises.com/bus-hire-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Bus Hire in Pune | Bus Rental in Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Bus Hire in Pune for outstation trips, family tours, group travel, corporate events, weddings, school trips, airport transfers and sightseeing. Hire AC, non-AC and luxury buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Bus Rental in Pune, Bus Booking in Pune, AC Bus Hire in Pune, Non AC Bus Hire in Pune, Luxury Bus Hire in Pune, Bus Hire for Outstation Pune, Bus Hire for Family Trip Pune, Bus Hire for Group Travel Pune, Bus Hire for Corporate Events Pune, Bus Hire for Wedding Pune, Bus Hire for School Trip Pune, Bus Hire for Airport Transfer Pune, Affordable Bus Hire Pune, Bus Hire in Pune, Bus Rental Pune, Bus Booking Pune, Bus Hire Service Pune, Bus Rental Service Pune, Bus Booking Service Pune, Bus on Rent Pune, Bus Rental Company Pune, Bus Hire Company Pune, AC Bus Rental Pune, AC Bus Booking Pune, AC Bus on Rent Pune, Non AC Bus Rental Pune, Non AC Bus Booking Pune, Non AC Bus on Rent Pune, Luxury Bus Rental Pune, Luxury Bus Booking Pune, Luxury Bus on Rent Pune, Tourist Bus Hire Pune, Tourist Bus Rental Pune, Tourist Bus Booking Pune, Tourist Bus on Rent Pune, Mini Bus Hire Pune, Mini Bus Rental Pune, Mini Bus Booking Pune, Mini Bus on Rent Pune, Outstation Bus Hire Pune, Outstation Bus Rental Pune, Outstation Bus Booking Pune, Outstation Bus on Rent Pune, One Way Bus Hire Pune, One Way Bus Rental Pune, Round Trip Bus Hire Pune, Round Trip Bus Rental Pune, Local Bus Hire Pune, Local Bus Rental Pune, Local Bus Booking Pune, Local Bus on Rent Pune, City Bus Hire Pune, City Bus Rental Pune, Family Bus Hire Pune, Family Tour Bus Pune, Family Travel Bus Pune, Group Bus Hire Pune, Group Bus Rental Pune, Group Travel Bus Pune, Corporate Bus Hire Pune, Corporate Bus Rental Pune, Corporate Bus Booking Pune, Corporate Staff Transportation Pune, Corporate Employee Bus Service Pune, Corporate Event Bus Hire Pune, Corporate Event Bus Rental Pune, Event Bus Hire Pune, Event Bus Rental Pune, Event Bus Booking Pune, Wedding Bus Hire Pune, Wedding Bus Rental Pune, Wedding Bus Booking Pune, Wedding Guest Bus Hire Pune, Wedding Guest Transportation Pune, Marriage Bus Hire Pune, Marriage Bus Rental Pune, Marriage Bus Booking Pune, School Bus Hire Pune, School Trip Bus Hire Pune, School Tour Bus Rental Pune, School Picnic Bus Hire Pune, College Trip Bus Hire Pune, Picnic Bus Hire Pune, Picnic Bus Rental Pune, Family Picnic Bus Pune, Group Picnic Bus Pune, Airport Bus Hire Pune, Airport Bus Rental Pune, Airport Pickup Bus Pune, Airport Drop Bus Pune, Airport Transfer Bus Pune, Bus for Airport Travel Pune, Sightseeing Bus Hire Pune, Pune Sightseeing Bus Rental, Pune City Tour Bus Hire, Pune City Tour Bus Rental, Bus for Maharashtra Tour Pune, Bus for Weekend Trip Pune, Bus for Holiday Trip Pune, Bus for Temple Tour Pune, Pilgrimage Bus Hire Pune, Tourist Transportation Pune, Passenger Bus Hire Pune, Group Transportation Bus Pune, Bus with Driver Pune, Bus Hire with Driver Pune, Bus Rental with Driver Pune, AC Tourist Bus Pune, Luxury Tourist Bus Pune, Comfortable Bus Hire Pune, Professional Bus Hire Pune, Reliable Bus Rental Pune, Affordable Bus Rental Pune, Bus Transportation Service Pune, Pune Bus Transport Service, Ruturaj Enterprises Bus Hire in Pune"
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
                            <img src='/images/keyword/83.jpg' alt='img' className='img-fluid' />
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

export default Bushireinpune;