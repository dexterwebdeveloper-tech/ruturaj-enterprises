import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Busservicepune() {


const cardData = {
keyword: "Bus Service Pune",
headingDescription: "Ruturaj Enterprises provides comfortable, organized, and flexible Bus Service Pune solutions for families, friends, corporate teams, schools, colleges, tourists, wedding groups, event organizers, and large travel parties. Dedicated buses can be arranged from Pune for outstation tours, family vacations, group travel, corporate events, wedding functions, school excursions, airport pickups, picnics, local sightseeing, one-day trips, pilgrimage journeys, and customized tourist programs. Customers can select AC, non-AC, luxury, affordable, tourist, family, corporate, local, and outstation transportation according to passenger capacity, luggage requirements, destination, travel duration, comfort preference, itinerary, and budget. A dedicated group bus helps passengers travel together while making it easier to coordinate pickup points, sightseeing stops, accommodation transfers, event venues, meal breaks, and return journeys from Pune.",
topPlaces: [
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a popular hill-station destination from Pune for families, friends, corporate groups, tourists, and weekend travelers. A dedicated bus makes group transportation convenient while allowing passengers to plan visits to viewpoints, waterfalls, lakes, temples, hotels, restaurants, and nearby attractions within a coordinated itinerary."
},
{
title: "Goa",
description: "Goa is a preferred long-distance destination for Pune travelers planning beach holidays, family vacations, group tours, corporate outings, and weekend trips. Private bus transportation allows larger groups to remain together with their luggage while coordinating beach visits, forts, churches, markets, resorts, sightseeing locations, and the return journey."
},
{
title: "Bhimashankar",
description: "Bhimashankar is a popular pilgrimage and nature destination from Pune, attracting families, religious groups, senior travelers, and weekend tourists. Bus transportation provides a practical option for groups traveling together and can be organized around temple visits, sightseeing, meal breaks, rest stops, passenger requirements, and return travel."
},
{
title: "Alibaug",
description: "Alibaug offers a convenient coastal getaway for families, friends, corporate teams, and groups planning short vacations or picnics from Pune. A private bus provides shared transportation for larger parties and can accommodate planned beach visits, sightseeing, hotel transfers, luggage, meal breaks, and the scheduled return trip."
},
{
title: "Nashik",
description: "Nashik is suitable for pilgrimage journeys, family vacations, corporate outings, tourist tours, and weekend travel from Pune, with religious, cultural, and leisure attractions available across the region. A dedicated bus helps groups remain together while coordinating temple visits, vineyards, heritage sites, hotels, restaurants, sightseeing stops, and return transportation."
},
{
title: "Bhandardara",
description: "Bhandardara is known for its lake, mountains, waterfalls, and peaceful natural surroundings, making it suitable for family trips, group tours, picnics, and corporate outings from Pune. Group bus service allows travelers to carry their belongings comfortably and coordinate sightseeing, accommodation, meal stops, and the return journey."
},
{
title: "Kolhapur",
description: "Kolhapur is a useful outstation destination for pilgrimage tours, family holidays, cultural journeys, and organized group travel from Pune. A private bus keeps the group together while supporting visits to temples, historical attractions, local destinations, hotels, restaurants, and other planned sightseeing points."
},
{
title: "Dapoli",
description: "Dapoli provides a relaxed coastal destination for families, friends, corporate teams, and tourist groups traveling from Pune for weekend or multi-day trips. Bus transportation can be arranged around beach visits, accommodation transfers, sightseeing schedules, meal breaks, luggage requirements, and the planned return journey."
},
{
title: "Panchgani",
description: "Panchgani is a scenic hill destination suitable for families, school groups, college excursions, corporate outings, and short tourist trips from Pune. A dedicated bus provides common transportation to viewpoints, attractions, hotels, and nearby destinations while helping the group maintain an organized travel schedule."
},
{
title: "Shirdi",
description: "Shirdi is an important pilgrimage destination for families, religious groups, senior travelers, and organized tour parties traveling from Pune. A private bus allows passengers to travel together while coordinating temple visits, accommodation, meal breaks, rest stops, luggage, and the return journey according to the group's planned schedule."
}
],
services: [
{
name: "Bus Rental Service Pune",
description: "Bus Rental Service Pune provides dedicated transportation for families, friends, businesses, schools, tourists, wedding groups, and event organizers requiring a common vehicle. Ruturaj Enterprises can arrange suitable buses according to passenger capacity, luggage requirements, route, travel duration, comfort preference, and trip purpose for local transportation as well as long-distance outstation journeys."
},
{
name: "Bus Hire Service Pune",
description: "Bus Hire Service Pune is suitable for groups that need a private vehicle for planned tours, functions, events, sightseeing, or long-distance travel. Bus arrangements can support family trips, tourist journeys, corporate programs, school excursions, weddings, picnics, airport transfers, and customized routes based on passenger count and itinerary."
},
{
name: "Bus Booking Service Pune",
description: "Bus Booking Service Pune helps customers organize group transportation in advance according to travel dates, pickup locations, destination, passenger capacity, luggage, and preferred vehicle type. Advance arrangements can be aligned with hotel bookings, sightseeing schedules, corporate programs, wedding functions, school trips, picnic plans, and the expected return journey."
},
{
name: "AC Bus Service Pune",
description: "AC Bus Service Pune provides air-conditioned group transportation for passengers who prefer a more comfortable travel environment during local and outstation journeys. Suitable AC buses can be arranged for family holidays, corporate events, weddings, school trips, tourist tours, airport transfers, and sightseeing programs according to group size, luggage, route, and travel duration."
},
{
name: "Non AC Bus Service Pune",
description: "Non AC Bus Service Pune provides a practical and economical option for groups requiring shared transportation with suitable passenger capacity. It can support picnics, school trips, local sightseeing, family functions, corporate movements, wedding transportation, tourist programs, and selected outstation journeys based on the group's travel requirements."
},
{
name: "Luxury Bus Service Pune",
description: "Luxury Bus Service Pune is suitable for groups looking for a more premium transportation experience during special occasions, corporate programs, family celebrations, and long-distance tours. Suitable luxury arrangements can be considered according to passenger capacity, seating expectations, luggage requirements, travel duration, itinerary, and preferred comfort level."
},
{
name: "Bus Service for Outstation Pune",
description: "Bus Service for Outstation Pune provides dedicated group transportation from Pune to destinations across Maharashtra and other states. The vehicle can be planned according to the selected route, passenger count, luggage, travel duration, sightseeing requirements, accommodation transfers, rest stops, and expected return schedule for an organized long-distance journey."
},
{
name: "Bus Service for Family Trip Pune",
description: "Bus Service for Family Trip Pune is designed for families traveling with children, senior members, relatives, and larger groups who prefer to stay together throughout the journey. A private bus provides space for passengers and luggage while supporting sightseeing, hotel transfers, meal breaks, leisure stops, and coordinated return transportation."
},
{
name: "Bus Service for Group Travel Pune",
description: "Bus Service for Group Travel Pune offers convenient transportation for friends, relatives, social organizations, tourist parties, and other large groups. A dedicated bus reduces the need to coordinate several individual vehicles and provides common transportation for passenger pickup, luggage, sightseeing movements, accommodation transfers, event visits, and return travel."
},
{
name: "Bus Service for Corporate Events Pune",
description: "Bus Service for Corporate Events Pune supports organized transportation for employees, clients, delegates, and corporate teams attending meetings, conferences, seminars, exhibitions, annual functions, and company outings. Bus schedules can be coordinated with offices, hotels, airports, event venues, and return timings to maintain planned group movement throughout the program."
},
{
name: "Bus Service for Wedding Pune",
description: "Bus Service for Wedding Pune helps families arrange transportation for wedding guests, relatives, friends, and participants traveling between homes, hotels, banquet halls, resorts, temples, and function venues. A dedicated bus can be scheduled around ceremony timings, reception programs, guest accommodation, airport pickups, and other wedding-related transportation requirements."
},
{
name: "Bus Service for School Trip Pune",
description: "Bus Service for School Trip Pune provides group transportation for educational excursions, field visits, recreational tours, and school outings. The bus arrangement can be planned around student capacity, teacher travel, pickup points, destination schedules, sightseeing requirements, rest breaks, and return timings while keeping the school group together throughout the trip."
},
{
name: "Bus Service for Airport Pickup Pune",
description: "Bus Service for Airport Pickup Pune is useful when multiple passengers need transportation between Pune Airport and homes, offices, hotels, wedding venues, or other destinations. A dedicated bus provides practical passenger and luggage capacity while allowing airport schedules, flight timings, onward transfers, and group movements to be coordinated efficiently."
},
{
name: "Affordable Bus Service Pune",
description: "Affordable Bus Service Pune provides a practical shared transportation solution for groups that want to manage travel expenses while keeping passengers together. Vehicle size and trip arrangements can be selected according to passenger count, route, journey duration, luggage, AC preference, sightseeing requirements, and the overall travel budget."
},
{
name: "Bus Transportation Service Pune",
description: "Bus Transportation Service Pune supports a wide range of group movement requirements, from short local journeys to extended outstation tours. Ruturaj Enterprises can organize buses for family vacations, corporate programs, school excursions, weddings, picnics, airport transfers, sightseeing, tourist trips, and customized travel schedules based on passenger and route requirements."
},
{
name: "Bus Service for Picnic Pune",
description: "Bus Service for Picnic Pune is suitable for families, schools, colleges, offices, housing societies, and social groups planning day outings or weekend picnics. The bus can provide common transportation to lakes, hill stations, resorts, nature destinations, adventure locations, and other picnic spots while accommodating passengers and their belongings."
},
{
name: "Bus Service for Local Sightseeing Pune",
description: "Bus Service for Local Sightseeing Pune provides convenient transportation for groups exploring tourist attractions and important destinations within Pune and nearby areas. A dedicated bus can connect multiple sightseeing points according to the selected schedule while keeping families, tourists, school groups, corporate teams, and visiting guests together throughout the outing."
},
{
name: "Bus Service for One Day Trip Pune",
description: "Bus Service for One Day Trip Pune is useful for groups planning short excursions with a fixed departure and return schedule. The bus can be arranged for nearby hill stations, pilgrimage destinations, nature attractions, picnic locations, and tourist places while coordinating sightseeing stops, meal breaks, passenger capacity, luggage, and return timing."
},
{
name: "Bus Service for Corporate Travel Pune",
description: "Bus Service for Corporate Travel Pune supports employee transportation, business meetings, training programs, conferences, office outings, client visits, and corporate tours. Group transportation can connect offices, hotels, airports, industrial areas, event venues, and other business locations while maintaining coordinated pickup, travel, and drop schedules."
},
{
name: "Bus Service for Marriage Pune",
description: "Bus Service for Marriage Pune provides organized transportation for wedding guests, relatives, family members, and participants attending marriage ceremonies and related functions. The vehicle can be scheduled between homes, hotels, halls, resorts, temples, and reception venues according to function timings, helping larger groups move together with their luggage and personal belongings."
},
{
name: "Bus Service for Tourist Trip Pune",
description: "Bus Service for Tourist Trip Pune offers dedicated transportation for travelers exploring Pune, Maharashtra, and destinations in other states through organized tours. The itinerary can include beaches, hill stations, pilgrimage sites, heritage attractions, hotels, restaurants, nature destinations, and other sightseeing points while keeping the complete tourist group together throughout the journey."
},
{
name: "Bus Service for Outstation Tour Pune",
description: "Bus Service for Outstation Tour Pune is suitable for families, friends, corporate teams, school groups, tourists, and organizations planning multi-day journeys outside Pune. Ruturaj Enterprises can coordinate the bus around selected destinations, accommodation, sightseeing schedules, luggage requirements, passenger capacity, rest stops, and return travel to create a practical group transportation plan."
}
],
tableData: [
["Bus Rental Service Pune", "Dedicated bus rental for families, groups, businesses, events, and tours"],
["Bus Hire Service Pune", "Flexible bus hire for local, outstation, corporate, wedding, and tourist travel"],
["Bus Booking Service Pune", "Advance bus booking based on travel date, route, passenger count, and vehicle requirements"],
["AC Bus Service Pune", "Air-conditioned bus transportation for comfortable group journeys"],
["Non AC Bus Service Pune", "Economical bus transportation for practical group travel requirements"],
["Luxury Bus Service Pune", "Premium bus arrangements for special occasions, tours, and comfortable travel"],
["Bus Service for Outstation Pune", "Dedicated transportation for journeys from Pune to destinations outside the city"],
["Bus Service for Family Trip Pune", "Family group transportation with passenger and luggage space"],
["Bus Service for Group Travel Pune", "Common vehicle for friends, relatives, organizations, and larger travel groups"],
["Bus Service for Corporate Events Pune", "Organized transportation for employees, delegates, meetings, and corporate events"],
["Bus Service for Wedding Pune", "Wedding guest and family transportation between homes, hotels, and venues"],
["Bus Service for School Trip Pune", "Group transportation for educational excursions and school outings"],
["Bus Service for Airport Pickup Pune", "Dedicated airport pickup and drop transportation for groups with luggage"],
["Affordable Bus Service Pune", "Budget-conscious group transportation based on route and passenger requirements"],
["Bus Transportation Service Pune", "Complete bus transportation support for local, outstation, event, and travel requirements"],
["Bus Service for Picnic Pune", "Group transportation for family, school, office, and society picnic programs"],
["Bus Service for Local Sightseeing Pune", "Dedicated bus for organized sightseeing around Pune and nearby attractions"],
["Bus Service for One Day Trip Pune", "Convenient bus transportation for scheduled one-day excursions"],
["Bus Service for Corporate Travel Pune", "Employee and business transportation for meetings, training, and office programs"],
["Bus Service for Marriage Pune", "Group transportation for marriage ceremonies, receptions, and related functions"],
["Bus Service for Tourist Trip Pune", "Tourist bus transportation for customized sightseeing and travel itineraries"],
["Bus Service for Outstation Tour Pune", "Long-distance bus transportation for multi-day tours outside Pune"]
],
whychoose: [
{
WhyChooseheading: "Suitable Buses for Different Group Requirements",
WhyChoosedescription: "Group transportation needs can vary according to passenger capacity, luggage, destination, journey duration, occasion, and preferred comfort level. Ruturaj Enterprises can arrange suitable bus options for families, friends, corporate teams, schools, tourists, wedding groups, and other larger parties according to the selected itinerary and travel requirements."
},
{
WhyChooseheading: "Convenient Travel Beyond Pune",
WhyChoosedescription: "Outstation bus service provides a practical way for larger groups to travel from Pune to destinations across Maharashtra and other states without splitting passengers between several cars. The transportation plan can include rest breaks, sightseeing stops, hotel transfers, meal breaks, and return travel according to the duration and route of the journey."
},
{
WhyChooseheading: "Comfortable Family and Group Transportation",
WhyChoosedescription: "Families and groups can travel more conveniently when everyone uses one dedicated vehicle throughout the trip. Bus service provides shared passenger and luggage space while making it easier to coordinate pickup points, sightseeing locations, accommodation transfers, meal stops, leisure activities, and the final return journey."
},
{
WhyChooseheading: "Organized Corporate Event Movement",
WhyChoosedescription: "Corporate events often require transportation between offices, hotels, airports, conference venues, and other business locations according to fixed schedules. A dedicated bus can support meetings, conferences, training programs, exhibitions, employee outings, and company events while keeping employee and delegate transportation coordinated."
},
{
WhyChooseheading: "Practical Wedding Transportation",
WhyChoosedescription: "Wedding and marriage functions may involve several groups of guests traveling between homes, hotels, temples, banquet halls, resorts, and reception venues. A dedicated bus helps families coordinate guest transportation around ceremony timings, accommodation schedules, airport arrivals, and other important movements during the celebration."
},
{
WhyChooseheading: "AC, Non-AC and Luxury Choices",
WhyChoosedescription: "Travel comfort requirements can differ based on the season, journey duration, passenger group, occasion, and route. Suitable AC, non-AC, luxury, tourist, and practical bus options can be considered according to availability, passenger capacity, luggage space, comfort expectations, and the planned transportation budget."
},
{
WhyChooseheading: "Convenient for Picnics and One-Day Trips",
WhyChoosedescription: "Dedicated bus service is useful for short group excursions where passengers need to depart from Pune and return according to a fixed schedule. Family outings, school trips, picnics, corporate activities, and local sightseeing programs can be organized around selected destinations, meal breaks, sightseeing stops, planned activities, and return timings."
},
{
WhyChooseheading: "Transportation Planned Around Your Schedule",
WhyChoosedescription: "Customized group tours often involve multiple destinations, hotels, sightseeing locations, functions, and activities that require coordinated transportation. Ruturaj Enterprises can structure the bus service around the selected route, passenger count, luggage requirements, travel duration, comfort preference, sightseeing plan, and return schedule for a practical and organized journey."
}
]
};





const faqData = [
{
question: "What does a Bus Service in Pune include?",
answer: "A Bus Service in Pune can cover transportation for local journeys, outstation tours, weddings, corporate programs, school excursions, pilgrimages, picnics, events, and sightseeing trips. Ruturaj Enterprises can coordinate the vehicle according to passenger strength, travel route, journey duration, luggage requirements, and the schedule planned for the group."
},
{
question: "Which groups can use bus services in Pune?",
answer: "Bus transportation can be arranged for families, friends, companies, schools, colleges, tour groups, wedding parties, social organizations, and other large groups. The vehicle size can be selected according to the number of travelers, while the route and schedule can be planned around the specific purpose of the journey."
},
{
question: "Can a bus service be arranged for local travel within Pune?",
answer: "Local bus transportation is suitable for group movements within Pune and surrounding areas. It can be useful for weddings, corporate gatherings, school activities, events, sightseeing programs, airport or railway transfers, and private group outings where multiple passengers need coordinated transportation between different locations."
},
{
question: "Does Ruturaj Enterprises provide bus services for outstation travel?",
answer: "Outstation group transportation can be organized from Pune to destinations in Maharashtra as well as other states. Depending on the itinerary, the service can support one-day journeys, weekend tours, multi-day trips, pilgrimage routes, family vacations, corporate travel, educational tours, and sightseeing programs with planned pickup and return schedules."
},
{
question: "Can I arrange a bus service for a wedding in Pune?",
answer: "Wedding transportation can be organized for guests traveling between homes, hotels, marriage halls, banquet venues, railway stations, airports, and reception locations. A dedicated bus makes it easier to coordinate larger groups around ceremony timings, venue changes, guest transfers, and the overall wedding itinerary."
},
{
question: "Are buses available for corporate transportation in Pune?",
answer: "Corporate groups can use bus services for conferences, employee outings, team-building activities, company functions, training programs, industrial visits, and business events. Multiple pickup points and destination details can be considered while preparing a transportation schedule that suits the organization's passenger count and event timings."
},
{
question: "Can students travel by bus for educational tours from Pune?",
answer: "School and college groups can arrange buses for educational tours, recreational excursions, picnics, historical visits, and study-related trips. Seating capacity can be selected according to the number of students and staff, while the route, travel duration, stopping points, and destination schedule can be planned before the journey."
},
{
question: "Is Bus Service Pune suitable for pilgrimage tours?",
answer: "Religious groups can arrange private bus transportation from Pune for temple visits, pilgrimage circuits, and multi-location darshan tours. The itinerary can accommodate several destinations along with rest breaks and sightseeing stops, making group travel easier to coordinate when everyone follows the same planned route."
},
{
question: "How is the right bus selected for a group trip?",
answer: "Bus selection generally depends on passenger numbers, luggage volume, route distance, trip duration, and the type of journey. Smaller groups may require a compact bus, while larger groups can consider higher-capacity vehicles. Providing complete travel details helps Ruturaj Enterprises coordinate an appropriate option for the planned trip."
},
{
question: "Why consider Ruturaj Enterprises for Bus Service Pune?",
answer: "Ruturaj Enterprises handles group transportation requirements for local Pune travel as well as outstation journeys, weddings, corporate programs, educational tours, pilgrimages, picnics, and events. The transportation plan can be coordinated around the group's passenger count, route, pickup points, luggage, travel duration, and required schedule."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Akash Jadhav",
feedback:
"Our company arranged a bus service through Ruturaj Enterprises for an employee outing from Pune. The group was able to travel together instead of coordinating multiple cars, which made the pickup and return schedule much easier to manage. The dedicated transportation worked well for our planned itinerary.",
rating: 5
},
{
id: 2,
name: "Miss. Riya Bhosale",
feedback:
"We used Ruturaj Enterprises for a group pilgrimage starting from Pune. The bus arrangement made it convenient for everyone to remain together throughout the journey and follow our planned temple visits and rest breaks. The transportation coordination was helpful for managing the entire group.",
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
  "name": "Bus Service Pune",
  "image": "https://ruturajenterprises.com/assets/images/bus-service-pune.webp",
  "description":
    "Bus Service Pune for local transportation, outstation journeys, family trips, group travel, corporate events, weddings, school excursions, picnics, airport transfers and sightseeing tours. Ruturaj Enterprises provides bus rental, hire and booking services with AC, non-AC and luxury buses suitable for different group sizes and travel requirements. Comfortable vehicles, experienced drivers and flexible rental plans make it convenient to arrange daily transportation, one-day trips, multi-day tours, corporate travel, wedding guest transfers and long-distance journeys from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/bus-service-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Bus Service Pune | Bus Rental Service Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Bus Service Pune for local travel, outstation tours, family trips, group travel, corporate events, weddings, school trips, picnics and airport transfers. Hire AC, non-AC and luxury buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Bus Rental Service Pune, Bus Hire Service Pune, Bus Booking Service Pune, AC Bus Service Pune, Non AC Bus Service Pune, Luxury Bus Service Pune, Bus Service for Outstation Pune, Bus Service for Family Trip Pune, Bus Service for Group Travel Pune, Bus Service for Corporate Events Pune, Bus Service for Wedding Pune, Bus Service for School Trip Pune, Bus Service for Picnic Pune, Bus Service for Airport Transfer Pune, Affordable Bus Service Pune, Bus Service Pune, Bus Rental Pune, Bus Hire Pune, Bus Booking Pune, Bus on Rent Pune, Bus Rental Company Pune, Bus Hire Company Pune, Bus Booking Company Pune, AC Bus Rental Pune, AC Bus Hire Pune, AC Bus Booking Pune, AC Bus on Rent Pune, Non AC Bus Rental Pune, Non AC Bus Hire Pune, Non AC Bus Booking Pune, Non AC Bus on Rent Pune, Luxury Bus Rental Pune, Luxury Bus Hire Pune, Luxury Bus Booking Pune, Luxury Bus on Rent Pune, Tourist Bus Service Pune, Tourist Bus Rental Pune, Tourist Bus Hire Pune, Tourist Bus Booking Pune, Tourist Bus on Rent Pune, Mini Bus Service Pune, Mini Bus Rental Pune, Mini Bus Hire Pune, Mini Bus Booking Pune, Mini Bus on Rent Pune, Outstation Bus Service Pune, Outstation Bus Rental Pune, Outstation Bus Hire Pune, Outstation Bus Booking Pune, Outstation Bus on Rent Pune, One Way Bus Service Pune, One Way Bus Rental Pune, One Way Bus Hire Pune, Round Trip Bus Service Pune, Round Trip Bus Rental Pune, Round Trip Bus Hire Pune, Local Bus Service Pune, Local Bus Rental Pune, Local Bus Hire Pune, Local Bus Booking Pune, Local Bus on Rent Pune, City Bus Service Pune, City Bus Rental Pune, Family Bus Service Pune, Family Tour Bus Pune, Family Travel Bus Pune, Group Bus Service Pune, Group Bus Rental Pune, Group Bus Hire Pune, Group Travel Bus Pune, Corporate Bus Service Pune, Corporate Bus Rental Pune, Corporate Bus Hire Pune, Corporate Bus Booking Pune, Corporate Staff Transportation Pune, Corporate Employee Bus Service Pune, Corporate Event Bus Service Pune, Corporate Event Bus Rental Pune, Corporate Event Bus Hire Pune, Event Bus Service Pune, Event Bus Rental Pune, Event Bus Hire Pune, Event Bus Booking Pune, Wedding Bus Service Pune, Wedding Bus Rental Pune, Wedding Bus Hire Pune, Wedding Bus Booking Pune, Wedding Guest Bus Service Pune, Wedding Guest Transportation Pune, Marriage Bus Service Pune, Marriage Bus Rental Pune, Marriage Bus Hire Pune, Marriage Bus Booking Pune, School Bus Service Pune, School Bus Rental Pune, School Bus Hire Pune, School Trip Bus Service Pune, School Trip Bus Rental Pune, School Tour Bus Pune, School Picnic Bus Service Pune, College Trip Bus Service Pune, College Trip Bus Rental Pune, Picnic Bus Service Pune, Picnic Bus Rental Pune, Picnic Bus Hire Pune, Family Picnic Bus Pune, Group Picnic Bus Pune, Airport Bus Service Pune, Airport Bus Rental Pune, Airport Bus Hire Pune, Airport Pickup Bus Pune, Airport Drop Bus Pune, Airport Transfer Bus Pune, Bus for Airport Travel Pune, Sightseeing Bus Service Pune, Sightseeing Bus Rental Pune, Pune Sightseeing Bus Hire, Pune City Tour Bus Service, Pune City Tour Bus Rental, Bus for Maharashtra Tour Pune, Bus for Weekend Trip Pune, Bus for Holiday Trip Pune, Bus for Temple Tour Pune, Pilgrimage Bus Service Pune, Tourist Transportation Pune, Passenger Bus Service Pune, Group Transportation Bus Pune, Bus with Driver Pune, Bus Service with Driver Pune, Bus Rental with Driver Pune, AC Tourist Bus Pune, Luxury Tourist Bus Pune, Comfortable Bus Service Pune, Professional Bus Service Pune, Reliable Bus Service Pune, Affordable Bus Rental Pune, Bus Transportation Service Pune, Pune Bus Transport Service, Ruturaj Enterprises Bus Service Pune"
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
                            <img src='/images/keyword/84.jpeg' alt='img' className='img-fluid' />
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

export default Busservicepune;