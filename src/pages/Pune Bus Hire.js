import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punebushire() {


const cardData = {
keyword: "Pune Bus Hire",
headingDescription: "Ruturaj Enterprises provides comfortable, dependable, and flexible Pune Bus Hire services for families, friends, corporate teams, school and college groups, tourists, wedding parties, event organizers, and larger travel groups planning local or outstation journeys. Private buses can be arranged from Pune for family vacations, group tours, corporate events, weddings, school excursions, picnics, airport transfers, local sightseeing, one-day trips, pilgrimage journeys, and customized outstation tours. Travelers can select AC, non-AC, luxury, affordable, tourist, family, corporate, local, and outstation bus options according to passenger capacity, luggage requirements, route, journey duration, comfort preference, and budget. A dedicated bus helps the entire group travel together while making it easier to coordinate pickup locations, sightseeing stops, hotel transfers, event venues, meal breaks, and return journeys from Pune.",
topPlaces: [
{
title: "Bhandardara",
description: "Bhandardara is a scenic destination from Pune known for lakes, mountain landscapes, waterfalls, and peaceful natural surroundings, making it suitable for family trips, group holidays, picnics, and corporate outings. A private bus provides convenient shared transportation for larger groups while allowing the itinerary to include sightseeing stops, accommodation transfers, meal breaks, and a coordinated return journey."
},
{
title: "Goa",
description: "Goa is a popular long-distance destination from Pune for family vacations, group tours, beach holidays, corporate outings, and weekend travel. Bus hire allows larger groups to travel together with their luggage and coordinate visits to beaches, forts, churches, markets, resorts, and other attractions according to the selected multi-day itinerary."
},
{
title: "Shirdi",
description: "Shirdi is a major pilgrimage destination suitable for families, religious groups, senior travelers, and organized tour parties traveling from Pune. A dedicated bus can coordinate temple visits, hotel transfers, meal stops, rest breaks, passenger movement, and the return journey while keeping the entire group together throughout the trip."
},
{
title: "Panchgani",
description: "Panchgani offers a pleasant hill-station setting for families, school groups, college students, tourists, and corporate teams looking for a short trip from Pune. Bus hire makes group transportation easier by connecting travelers with viewpoints, attractions, hotels, restaurants, and nearby sightseeing locations without requiring multiple separate vehicles."
},
{
title: "Alibaug",
description: "Alibaug is a popular coastal destination for weekend vacations, family outings, corporate programs, and group picnics from Pune. A hired bus provides practical transportation for larger parties and can accommodate planned beach visits, sightseeing, hotel transfers, luggage, meal stops, and the scheduled return trip."
},
{
title: "Nashik",
description: "Nashik is suitable for family travel, pilgrimage tours, corporate outings, tourist programs, and weekend journeys from Pune, with a variety of cultural, religious, and leisure attractions. A private bus helps groups remain together while coordinating visits to temples, vineyards, heritage locations, hotels, restaurants, and other destinations included in the itinerary."
},
{
title: "Kolhapur",
description: "Kolhapur is a useful outstation destination from Pune for pilgrimage tours, family holidays, cultural trips, and organized group travel. Bus hire provides shared transportation for larger parties and can be coordinated around temple visits, historical attractions, accommodation, meal breaks, sightseeing schedules, and the planned return journey."
},
{
title: "Matheran",
description: "Matheran is a popular hill destination for family outings, school trips, college excursions, and corporate weekend programs from Pune. A dedicated bus can manage the group journey up to the permitted access area while helping coordinate passenger movement, luggage, sightseeing schedules, accommodation transfers, and return transportation."
},
{
title: "Aurangabad",
description: "Aurangabad is a suitable destination for history, heritage, pilgrimage, and family-oriented group tours from Pune, with access to several important attractions in the surrounding region. A private bus allows larger groups to travel together while planning visits, hotel transfers, meal breaks, and additional sightseeing according to the selected route and duration."
},
{
title: "Dapoli",
description: "Dapoli provides a coastal getaway option from Pune for families, friends, corporate teams, and groups looking for beaches and relaxed weekend travel. Bus hire can be arranged for the complete journey with sufficient planning for luggage, accommodation transfers, sightseeing, meal breaks, and return transportation."
}
],
services: [
{
name: "Pune Bus Rental",
description: "Pune Bus Rental provides dedicated group transportation for families, friends, businesses, schools, tourists, wedding parties, and event organizers requiring a common vehicle. Ruturaj Enterprises can arrange suitable buses according to passenger capacity, luggage requirements, travel duration, route, comfort preference, and trip purpose for both local and outstation journeys."
},
{
name: "Pune Bus Booking",
description: "Pune Bus Booking helps travelers organize their group transportation in advance according to travel dates, pickup points, destination, passenger count, luggage, and preferred bus type. Advance planning allows the vehicle schedule to be coordinated with hotel bookings, sightseeing plans, corporate events, wedding functions, school programs, and return travel requirements."
},
{
name: "Bus Hire Service Pune",
description: "Bus Hire Service Pune is suitable for customers who need a private vehicle for group transportation within Pune or for journeys to destinations outside the city. The arrangement can support family trips, tourist tours, corporate programs, school excursions, weddings, picnics, airport transfers, local sightseeing, and customized travel schedules."
},
{
name: "AC Bus Hire Pune",
description: "AC Bus Hire Pune provides air-conditioned transportation for groups seeking additional comfort during local or long-distance journeys. Suitable AC buses can be arranged for family vacations, corporate travel, weddings, school trips, tourist tours, airport transfers, and outstation journeys while considering passenger strength, luggage, travel duration, and itinerary requirements."
},
{
name: "Non AC Bus Hire Pune",
description: "Non AC Bus Hire Pune offers a practical transportation option for groups that prioritize passenger capacity and economical travel arrangements. It can be used for picnics, school trips, local sightseeing, family functions, corporate movements, wedding transportation, tourist programs, and selected outstation journeys according to the group's requirements."
},
{
name: "Luxury Bus Hire Pune",
description: "Luxury Bus Hire Pune is suitable for travelers looking for a more premium group transportation experience during special occasions and longer journeys. Luxury bus arrangements can support corporate events, weddings, family celebrations, tourist tours, and outstation travel according to passenger capacity, seating expectations, luggage requirements, journey duration, and preferred comfort level."
},
{
name: "Bus Hire for Outstation Pune",
description: "Bus Hire for Outstation Pune provides dedicated transportation for groups traveling from Pune to destinations across Maharashtra and other states. The bus can be planned according to the route, number of passengers, luggage, travel duration, sightseeing requirements, rest stops, hotel transfers, and expected return schedule for an organized long-distance journey."
},
{
name: "Bus Hire for Family Trip Pune",
description: "Bus Hire for Family Trip Pune is designed for families traveling with children, senior members, relatives, and larger groups who prefer to stay together throughout their journey. A private bus provides space for passengers and luggage while supporting planned sightseeing, hotel transfers, meal breaks, leisure stops, and coordinated return transportation."
},
{
name: "Bus Hire for Group Travel Pune",
description: "Bus Hire for Group Travel Pune offers convenient transportation for friends, relatives, social organizations, tourist parties, and other large groups traveling together. A dedicated vehicle reduces the need to coordinate multiple cars and helps organize passenger pickup, luggage, sightseeing movements, accommodation transfers, events, and return travel under one common itinerary."
},
{
name: "Bus Hire for Corporate Events Pune",
description: "Bus Hire for Corporate Events Pune supports organized transportation for employees, clients, delegates, and business teams attending conferences, seminars, meetings, exhibitions, annual functions, and corporate outings. Bus schedules can be coordinated with offices, hotels, airports, event venues, and return timings to keep group transportation aligned with the business program."
},
{
name: "Bus Hire for Wedding Pune",
description: "Bus Hire for Wedding Pune helps families arrange transportation for relatives, guests, friends, and wedding participants between homes, hotels, banquet halls, resorts, temples, and function venues. A dedicated bus can be scheduled around ceremony timings, reception programs, airport pickups, guest accommodation, and other wedding-related transportation requirements."
},
{
name: "Bus Hire for School Trip Pune",
description: "Bus Hire for School Trip Pune provides group transportation for educational excursions, field visits, recreational tours, and school outings. The bus arrangement can be planned according to student capacity, teacher travel, pickup and drop points, destination schedules, sightseeing requirements, rest breaks, and return timings while keeping the group together."
},
{
name: "Bus Hire for Airport Pickup Pune",
description: "Bus Hire for Airport Pickup Pune is useful when multiple passengers need to travel together between Pune Airport and hotels, offices, homes, wedding venues, or other destinations. A dedicated bus provides practical passenger and luggage capacity while allowing airport schedules, flight timings, onward transfers, and group movements to be coordinated efficiently."
},
{
name: "Affordable Bus Hire Pune",
description: "Affordable Bus Hire Pune provides a practical group transportation solution for customers who want to manage travel costs while keeping passengers together. Vehicle size and journey arrangements can be selected according to passenger count, route, travel duration, luggage, AC requirements, sightseeing plans, and overall budget."
},
{
name: "Bus Hire Service in Pune",
description: "Bus Hire Service in Pune supports a broad range of transportation needs, including local travel, outstation tours, family holidays, corporate programs, school trips, weddings, picnics, airport transfers, and tourist journeys. Ruturaj Enterprises can coordinate bus arrangements around pickup locations, passenger capacity, luggage requirements, itinerary, travel duration, and return schedules."
},
{
name: "Bus Hire for Picnic Pune",
description: "Bus Hire for Picnic Pune is suitable for families, schools, colleges, offices, housing societies, and social groups planning day outings or weekend picnics. The hired bus can provide common transportation to lakes, hill stations, nature destinations, resorts, adventure locations, and other picnic spots while accommodating passengers and their belongings."
},
{
name: "Bus Hire for Local Sightseeing Pune",
description: "Bus Hire for Local Sightseeing Pune provides convenient transportation for groups exploring tourist attractions and important destinations within Pune and nearby areas. A dedicated bus can connect multiple sightseeing points according to the selected schedule while keeping families, tourists, school groups, corporate teams, and visiting guests together throughout the outing."
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
name: "Bus Hire for Marriage Pune",
description: "Bus Hire for Marriage Pune provides organized transportation for wedding guests, relatives, family members, and participants attending marriage ceremonies and related functions. The vehicle can be scheduled between homes, hotels, halls, resorts, temples, and reception venues according to function timings, helping larger groups move together with their luggage and personal belongings."
},
{
name: "Bus Hire for Tourist Trip Pune",
description: "Bus Hire for Tourist Trip Pune offers dedicated transportation for travelers exploring Pune, Maharashtra, and destinations in other states through organized tours. The itinerary can include beaches, hill stations, pilgrimage sites, heritage attractions, hotels, restaurants, nature destinations, and other sightseeing points while keeping the complete tourist group together throughout the journey."
},
{
name: "Bus Hire for Outstation Tour Pune",
description: "Bus Hire for Outstation Tour Pune is suitable for families, friends, corporate teams, school groups, tourists, and organizations planning multi-day journeys outside Pune. Ruturaj Enterprises can coordinate the bus around selected destinations, accommodation, sightseeing schedules, luggage requirements, passenger capacity, rest stops, and return travel to create a practical group transportation plan."
}
],
tableData: [
["Pune Bus Rental", "Dedicated bus rental for families, groups, businesses, events, and tours"],
["Pune Bus Booking", "Advance bus booking based on route, date, passenger count, and vehicle requirements"],
["Bus Hire Service Pune", "Flexible bus hire for local, outstation, corporate, wedding, and tourist travel"],
["AC Bus Hire Pune", "Air-conditioned bus transportation for comfortable group journeys"],
["Non AC Bus Hire Pune", "Economical bus hire for practical local and outstation group travel"],
["Luxury Bus Hire Pune", "Premium bus arrangements for special occasions, tours, and comfortable travel"],
["Bus Hire for Outstation Pune", "Dedicated transportation for journeys from Pune to destinations outside the city"],
["Bus Hire for Family Trip Pune", "Family-friendly group transportation with passenger and luggage space"],
["Bus Hire for Group Travel Pune", "Common vehicle for friends, relatives, organizations, and larger travel groups"],
["Bus Hire for Corporate Events Pune", "Organized transportation for employees, delegates, meetings, and corporate events"],
["Bus Hire for Wedding Pune", "Wedding guest and family transportation between homes, hotels, and venues"],
["Bus Hire for School Trip Pune", "Group bus transportation for educational excursions and school outings"],
["Bus Hire for Airport Pickup Pune", "Dedicated airport pickup and drop transportation for groups with luggage"],
["Affordable Bus Hire Pune", "Budget-conscious bus transportation based on route and passenger requirements"],
["Bus Hire Service in Pune", "Complete bus hire support for local, outstation, event, and travel requirements"],
["Bus Hire for Picnic Pune", "Group transportation for family, school, office, and society picnic programs"],
["Bus Hire for Local Sightseeing Pune", "Dedicated bus for organized sightseeing around Pune and nearby attractions"],
["Bus Hire for One Day Trip Pune", "Convenient bus transportation for scheduled one-day excursions"],
["Bus Hire for Corporate Travel Pune", "Employee and business transportation for meetings, training, and office programs"],
["Bus Hire for Marriage Pune", "Group transportation for marriage ceremonies, receptions, and related functions"],
["Bus Hire for Tourist Trip Pune", "Tourist bus transportation for customized sightseeing and travel itineraries"],
["Bus Hire for Outstation Tour Pune", "Long-distance bus hire for multi-day tours outside Pune"]
],
whychoose: [
{
WhyChooseheading: "Flexible Bus Hire for Different Group Sizes",
WhyChoosedescription: "Every group journey has different requirements depending on passenger strength, luggage, destination, travel duration, and preferred comfort level. Ruturaj Enterprises can arrange suitable bus hire options for families, friends, corporate teams, schools, tourists, wedding groups, and larger parties according to the planned journey and itinerary."
},
{
WhyChooseheading: "Convenient Outstation Transportation",
WhyChoosedescription: "Private bus hire makes long-distance travel from Pune more organized by keeping passengers and luggage together in one vehicle. The arrangement can support journeys to hill stations, pilgrimage destinations, coastal locations, tourist cities, and other outstation destinations while coordinating rest breaks, sightseeing, hotel transfers, and return travel."
},
{
WhyChooseheading: "Suitable for Family and Group Tours",
WhyChoosedescription: "Families and larger groups can benefit from common transportation when several travelers need to follow the same itinerary. A dedicated bus helps simplify pickup arrangements, luggage coordination, sightseeing movements, meal breaks, accommodation transfers, and the final return journey without requiring multiple individual cars."
},
{
WhyChooseheading: "Options for Corporate and Business Travel",
WhyChoosedescription: "Corporate programs often require transportation between offices, hotels, airports, meeting venues, and event locations according to fixed schedules. Bus hire provides a practical way to move employees, delegates, and clients together while coordinating transportation with conferences, training programs, business meetings, exhibitions, and company outings."
},
{
WhyChooseheading: "Useful for Weddings and Marriage Functions",
WhyChoosedescription: "Wedding transportation can involve multiple guest groups moving between homes, hotels, temples, banquet halls, resorts, and reception venues. A dedicated hired bus helps families organize these movements around ceremony timings and provides a common transportation option for relatives, guests, and participants."
},
{
WhyChooseheading: "AC, Non-AC and Premium Choices",
WhyChoosedescription: "Travel preferences can differ according to the season, route, occasion, passenger group, and journey duration. Suitable AC, non-AC, luxury, tourist, and practical bus options can be considered according to availability, passenger requirements, luggage capacity, comfort expectations, and the planned travel budget."
},
{
WhyChooseheading: "Convenient for Short and One-Day Trips",
WhyChoosedescription: "A hired bus is also useful for short excursions where groups need to depart from Pune and return on the same day. Family outings, school trips, picnics, corporate activities, and local sightseeing programs can be organized around fixed departure times, destination visits, meal breaks, and scheduled return transportation."
},
{
WhyChooseheading: "Organized Travel Around Your Itinerary",
WhyChoosedescription: "Customized group journeys often include several destinations, accommodation stops, sightseeing locations, and planned activities that need coordinated transportation. Ruturaj Enterprises can structure the bus hire arrangement around the selected route, passenger count, luggage, travel duration, sightseeing requirements, and return schedule for a practical and organized trip."
}
]
};



const faqData = [
{
question: "How can I hire a bus in Pune?",
answer: "Pune bus hire can be arranged by sharing your pickup location, destination, travel date, number of passengers, trip duration, and preferred seating capacity. Ruturaj Enterprises can coordinate suitable buses for local travel, outstation tours, weddings, corporate programs, school trips, pilgrimages, picnics, and group events."
},
{
question: "What types of buses can I hire in Pune?",
answer: "Bus selection depends on the size of the group, luggage requirements, travel distance, and comfort preferences. Mini buses and larger tourist buses can be considered for different passenger capacities, allowing families, organizations, corporate teams, and event groups to select a suitable transportation option."
},
{
question: "Can I hire a bus from Pune for an outstation tour?",
answer: "Outstation bus hire is suitable for groups traveling from Pune to destinations across Maharashtra and other states. The journey can be organized for holidays, sightseeing tours, pilgrimages, family functions, corporate outings, educational trips, and multi-city travel according to the group's itinerary."
},
{
question: "Can I hire a bus in Pune for a wedding?",
answer: "Wedding bus hire can help transport relatives and guests between homes, hotels, railway stations, airports, wedding halls, banquet venues, and reception locations. The vehicle schedule can be coordinated around ceremony timings and the number of guests requiring transportation."
},
{
question: "Is Pune bus hire available for corporate events?",
answer: "Corporate groups can hire buses in Pune for employee outings, conferences, team-building activities, company events, industrial visits, and business programs. Passenger numbers, pickup points, destination locations, and event timings can be considered when planning the transportation schedule."
},
{
question: "Can I hire a bus in Pune for a school or college tour?",
answer: "Schools and colleges can arrange buses for educational tours, student excursions, picnics, and group visits. Bus capacity can be selected according to the number of students and staff, while the route, destination, travel duration, planned stops, and complete tour schedule can be considered during the arrangement."
},
{
question: "Can I hire a bus from Pune for a pilgrimage tour?",
answer: "Pilgrimage groups can use private bus transportation for temple tours and religious journeys from Pune. The itinerary can include multiple destinations, sightseeing points, rest stops, and return travel, with the seating capacity chosen according to the number of devotees traveling together."
},
{
question: "Can I hire a bus in Pune for a picnic or group outing?",
answer: "A private bus can be arranged for family picnics, friend groups, social gatherings, and organized outings from Pune. Traveling together in one vehicle can make it easier to coordinate the group's departure, sightseeing stops, luggage, meal breaks, and return schedule."
},
{
question: "What details are needed for Pune bus hire?",
answer: "Important information generally includes the pickup location, destination or complete route, travel date, number of passengers, trip duration, luggage requirements, preferred seating capacity, and purpose of travel. Sharing these details helps Ruturaj Enterprises plan the bus arrangement around the group's requirements."
},
{
question: "Why choose Ruturaj Enterprises for Pune Bus Hire?",
answer: "Ruturaj Enterprises arranges bus hire in Pune for family tours, outstation travel, weddings, corporate events, school and college trips, pilgrimages, picnics, and group transportation. Vehicle capacity and scheduling can be coordinated according to passenger count, luggage, route, travel duration, event timings, and the planned itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Sachin Pawar",
feedback:
"We hired a bus from Ruturaj Enterprises for an outstation family trip from Pune. The vehicle capacity was suitable for our group, and having everyone travel together made the journey easier to coordinate. We were able to manage our luggage and planned stops comfortably throughout the trip.",
rating: 5
},
{
id: 2,
name: "Miss. Neelam Shinde",
feedback:
"Our group required a bus in Pune for a wedding event, and Ruturaj Enterprises handled the transportation arrangement according to our schedule. Guests needed transfers between different locations, so having a dedicated bus was very helpful. The overall travel coordination was convenient for everyone.",
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
  "name": "Pune Bus Hire",
  "image": "https://ruturajenterprises.com/assets/images/pune-bus-hire.webp",
  "description":
    "Pune Bus Hire for local transportation, outstation journeys, family trips, group tours, corporate events, weddings, school excursions, picnics and sightseeing. Ruturaj Enterprises offers bus rental, booking and hire services in Pune with AC, non-AC and luxury buses for different group sizes and travel requirements. Flexible rental plans and experienced drivers support comfortable transportation for one-day trips, multi-day tours, airport transfers, corporate travel, wedding guest movement and long-distance journeys from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/pune-bus-hire"
  }
};


    return (
        <div>

<Helmet>
  <title>
    Pune Bus Hire | Pune Bus Rental | +91 9763381382
  </title>

  <meta
    name="description"
    content="Pune Bus Hire for local travel, outstation tours, family trips, group travel, corporate events, weddings, school trips, picnics and sightseeing. Hire AC, non-AC and luxury buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Pune Bus Rental, Pune Bus Booking, Bus Hire Service Pune, AC Bus Hire Pune, Non AC Bus Hire Pune, Luxury Bus Hire Pune, Bus Hire for Outstation Pune, Bus Hire for Family Trip Pune, Bus Hire for Group Travel Pune, Bus Hire for Corporate Events Pune, Bus Hire for Wedding Pune, Bus Hire for School Trip Pune, Bus Hire for Picnic Pune, Bus Hire for Airport Pickup Pune, Affordable Bus Hire Pune, Pune Bus Hire, Pune Bus Hire Service, Pune Bus Rental Service, Pune Bus Booking Service, Bus Rental Company Pune, Bus Hire Company Pune, Bus on Rent Pune, Bus Rental Pune, Bus Booking Pune, AC Bus Rental Pune, AC Bus Booking Pune, AC Bus on Rent Pune, Non AC Bus Rental Pune, Non AC Bus Booking Pune, Non AC Bus on Rent Pune, Luxury Bus Rental Pune, Luxury Bus Booking Pune, Luxury Bus on Rent Pune, Tourist Bus Hire Pune, Tourist Bus Rental Pune, Tourist Bus Booking Pune, Tourist Bus on Rent Pune, Mini Bus Hire Pune, Mini Bus Rental Pune, Mini Bus Booking Pune, Mini Bus on Rent Pune, Outstation Bus Hire Pune, Outstation Bus Rental Pune, Outstation Bus Booking Pune, Outstation Bus on Rent Pune, One Way Bus Hire Pune, One Way Bus Rental Pune, Round Trip Bus Hire Pune, Round Trip Bus Rental Pune, Local Bus Hire Pune, Local Bus Rental Pune, Local Bus Booking Pune, Local Bus on Rent Pune, City Bus Hire Pune, City Bus Rental Pune, Bus for Local Travel Pune, Family Bus Hire Pune, Family Tour Bus Pune, Family Travel Bus Pune, Group Bus Hire Pune, Group Bus Rental Pune, Group Travel Bus Pune, Corporate Bus Hire Pune, Corporate Bus Rental Pune, Corporate Bus Booking Pune, Corporate Staff Bus Pune, Corporate Employee Transportation Pune, Corporate Event Bus Hire Pune, Event Bus Hire Pune, Event Bus Rental Pune, Event Bus Booking Pune, Wedding Bus Hire Pune, Wedding Bus Rental Pune, Wedding Bus Booking Pune, Wedding Guest Bus Hire Pune, Wedding Guest Transportation Pune, Marriage Bus Hire Pune, Marriage Bus Rental Pune, Marriage Bus Booking Pune, School Bus Hire Pune, School Trip Bus Hire Pune, School Tour Bus Rental Pune, School Picnic Bus Hire Pune, College Trip Bus Hire Pune, Picnic Bus Hire Pune, Picnic Bus Rental Pune, Family Picnic Bus Pune, Group Picnic Bus Pune, Airport Bus Hire Pune, Airport Bus Rental Pune, Airport Pickup Bus Pune, Airport Drop Bus Pune, Airport Transfer Bus Pune, Bus for Airport Travel Pune, Sightseeing Bus Hire Pune, Pune Sightseeing Bus Rental, Pune City Tour Bus Hire, Pune City Tour Bus Rental, Bus for Maharashtra Tour Pune, Bus for Weekend Trip Pune, Bus for Holiday Trip Pune, Bus for Temple Tour Pune, Pilgrimage Bus Hire Pune, Bus for Tourist Pune, Tourist Transportation Pune, Passenger Bus Hire Pune, Group Transportation Bus Pune, Bus with Driver Pune, Bus Hire with Driver Pune, Bus Rental with Driver Pune, AC Tourist Bus Pune, Luxury Tourist Bus Pune, Comfortable Bus Hire Pune, Professional Bus Hire Pune, Reliable Bus Rental Pune, Affordable Bus Rental Pune, Bus Transportation Service Pune, Pune Bus Transport Service, Ruturaj Enterprises Pune Bus Hire"
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
                            <img src='/images/keyword/82.jpg' alt='img' className='img-fluid' />
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

export default Punebushire;