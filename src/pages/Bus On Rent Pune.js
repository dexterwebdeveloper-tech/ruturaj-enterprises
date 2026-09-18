import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Busonrentpune() {


const cardData = {
keyword: "Bus On Rent Pune",
headingDescription: "Ruturaj Enterprises provides comfortable, dependable, and flexible Bus On Rent Pune services for families, friends, corporate teams, schools, colleges, tourists, wedding groups, event organizers, and large travel parties. Buses can be arranged for local Pune transportation, outstation journeys, family vacations, group tours, corporate events, school trips, picnics, airport pickups, wedding functions, sightseeing programs, one-day trips, and customized travel requirements. Customers can select AC, non-AC, luxury, tourist, affordable, local, outstation, and group travel options according to passenger capacity, luggage requirements, journey duration, route, comfort preferences, and budget. A dedicated bus helps larger groups travel together while making it easier to coordinate pickup points, sightseeing stops, hotel transfers, event venues, meal breaks, and return journeys without depending on multiple individual vehicles.",
topPlaces: [
{
title: "Pune Airport",
description: "Pune Airport is an important transportation point for passengers arriving in or departing from the city for business, family travel, and holidays. A dedicated bus can be arranged for group airport pickups and drops, helping corporate teams, families, wedding guests, and tourist groups coordinate luggage, passenger movement, and onward transportation from a common location."
},
{
title: "Hinjewadi",
description: "Hinjewadi is a major business and technology hub where companies frequently require organized transportation for employees, meetings, events, and corporate programs. Bus rental arrangements can support office transfers, group movements, conferences, corporate outings, and scheduled transportation between workplaces, hotels, and event venues."
},
{
title: "Lonavala",
description: "Lonavala is a popular destination for short vacations, family outings, corporate trips, school excursions, and one-day group tours from Pune. A private bus provides convenient shared transportation for larger parties visiting viewpoints, lakes, forts, and nearby attractions while keeping the complete group together throughout the journey."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar attracts families, tourists, college groups, and corporate teams looking for a hill-station getaway from Pune. Group bus transportation can be planned around sightseeing locations, hotel transfers, meal breaks, luggage requirements, and return travel, making it practical for both one-day and multi-day group itineraries."
},
{
title: "Shirdi",
description: "Shirdi is a popular pilgrimage destination for families, religious groups, senior travelers, and organized tour parties traveling from Pune. A dedicated bus allows passengers to travel together while coordinating temple visits, accommodation transfers, meal stops, rest breaks, and the planned return journey according to the group's schedule."
},
{
title: "Alibaug",
description: "Alibaug is a coastal destination suitable for family holidays, corporate outings, weekend trips, and group picnics from Pune. Bus rental makes it easier for larger groups to manage the journey, luggage, beach visits, sightseeing stops, accommodation transfers, and return transportation without splitting passengers between multiple cars."
},
{
title: "Nashik",
description: "Nashik is a useful destination for tourism, pilgrimage, family travel, corporate programs, and group excursions from Pune. A private bus can accommodate organized travel plans involving temples, vineyards, heritage locations, hotels, restaurants, and other sightseeing stops while maintaining a common schedule for all passengers."
},
{
title: "Bhimashankar",
description: "Bhimashankar is a well-known pilgrimage and nature destination that attracts families, religious groups, tourists, and weekend travelers. Group bus transportation provides a convenient way to manage the route, passenger coordination, luggage, planned breaks, temple visits, and return travel during a scheduled day trip or extended itinerary."
},
{
title: "Kolhapur",
description: "Kolhapur is suitable for pilgrimage tours, family trips, cultural journeys, and group travel from Pune, with attractions such as temples, historical sites, and local destinations. A rented bus allows travelers to remain together throughout the journey while coordinating sightseeing, hotel transfers, meal breaks, and the planned return schedule."
},
{
title: "Matheran",
description: "Matheran is a popular hill destination for family outings, school excursions, college trips, and corporate weekend programs from Pune. A private bus can handle the group journey up to the permitted access area, making it easier to coordinate the overall travel schedule, passenger movement, luggage, and return transportation."
}
],
services: [
{
name: "Bus Rental Pune",
description: "Bus Rental Pune provides a practical transportation solution for families, friends, corporate groups, schools, tourists, event organizers, and larger parties that need a common vehicle. Ruturaj Enterprises can arrange suitable buses according to passenger strength, luggage requirements, journey duration, route, comfort preference, and trip purpose, helping groups manage local as well as long-distance travel in an organized manner."
},
{
name: "Bus Hire in Pune",
description: "Bus Hire in Pune is suitable for customers who need dedicated transportation for a planned journey, function, tour, or group activity. Vehicle arrangements can be selected according to the number of passengers and itinerary, with the bus supporting airport transfers, sightseeing, family trips, corporate programs, weddings, school excursions, picnics, and outstation travel."
},
{
name: "Bus Booking Pune",
description: "Bus Booking Pune allows groups to arrange their transportation in advance according to their preferred travel dates, pickup locations, destination, passenger capacity, and vehicle requirements. Advance planning helps coordinate the bus with hotel schedules, event timings, sightseeing plans, school programs, wedding functions, corporate meetings, and the expected return journey."
},
{
name: "AC Bus On Rent Pune",
description: "AC Bus On Rent Pune is suitable for passengers who prefer air-conditioned transportation for local or long-distance group journeys. These buses can be planned for family vacations, corporate events, school trips, tourist tours, weddings, airport transfers, and outstation travel while considering passenger count, luggage space, travel duration, and the overall itinerary."
},
{
name: "Non AC Bus On Rent Pune",
description: "Non AC Bus On Rent Pune provides a practical option for groups looking for straightforward and economical shared transportation. It can be used for local sightseeing, school trips, picnics, family functions, corporate movements, wedding transportation, and selected outstation journeys where the group prioritizes passenger capacity and budget-friendly travel."
},
{
name: "Luxury Bus On Rent Pune",
description: "Luxury Bus On Rent Pune is designed for groups seeking enhanced comfort and a more premium travel arrangement for special journeys and organized events. Suitable luxury transportation can be planned for corporate programs, weddings, family celebrations, tourist tours, and long-distance travel according to group size, seating expectations, luggage requirements, and journey duration."
},
{
name: "Bus Rental Service Pune",
description: "Bus Rental Service Pune supports a wide range of transportation requirements, from short local movements to extended outstation tours. Ruturaj Enterprises can organize group buses for family travel, corporate programs, school excursions, weddings, picnics, airport transfers, sightseeing, events, and customized itineraries while considering pickup points, passenger capacity, luggage, and scheduling requirements."
},
{
name: "Bus for Outstation Pune",
description: "Bus for Outstation Pune provides dedicated group transportation for travelers heading from Pune to destinations across Maharashtra and other states. The vehicle can be planned around the selected route, number of passengers, luggage, travel duration, rest stops, hotel transfers, sightseeing requirements, and return schedule for a coordinated long-distance journey."
},
{
name: "Bus for Family Trip Pune",
description: "Bus for Family Trip Pune offers convenient shared transportation for families traveling with children, senior members, relatives, and larger groups. A private bus keeps everyone together while providing space for luggage and allowing the itinerary to include sightseeing, hotel transfers, meal breaks, leisure stops, and a coordinated return journey."
},
{
name: "Bus for Group Travel Pune",
description: "Bus for Group Travel Pune is suitable for friends, relatives, social organizations, tourist groups, and other larger parties traveling together. A dedicated vehicle reduces the need to coordinate multiple cars and provides a common transportation plan for passenger pickup, luggage, sightseeing movements, accommodation transfers, event visits, and return travel."
},
{
name: "Bus for Corporate Events Pune",
description: "Bus for Corporate Events Pune provides organized transportation for employees, delegates, clients, and corporate teams attending conferences, meetings, seminars, exhibitions, annual functions, and company outings. Bus schedules can be coordinated with office locations, hotels, event venues, airport transfers, and return timings to help maintain an efficient group movement plan."
},
{
name: "Bus for Wedding Pune",
description: "Bus for Wedding Pune is useful for transporting wedding guests, relatives, family members, and event staff between homes, hotels, banquet halls, resorts, temples, and wedding venues. A dedicated bus helps families coordinate guest movement around ceremony timings, reception schedules, airport pickups, accommodation transfers, and other marriage-related travel requirements."
},
{
name: "Bus for School Trip Pune",
description: "Bus for School Trip Pune provides group transportation for educational excursions, field visits, recreational tours, and school outings. Bus arrangements can be planned around student capacity, teacher travel, pickup and drop points, destination schedules, sightseeing stops, rest breaks, and return timings while keeping the student group together during the journey."
},
{
name: "Bus for Picnic Pune",
description: "Bus for Picnic Pune is suitable for families, schools, colleges, offices, housing societies, and social groups planning day outings or weekend picnics. The bus can accommodate the group and their belongings while supporting planned travel to lakes, hill stations, nature destinations, resorts, adventure locations, and picnic spots around Pune and nearby regions."
},
{
name: "Bus for Airport Pickup Pune",
description: "Bus for Airport Pickup Pune helps families, corporate teams, wedding groups, and tourist parties coordinate airport transportation when several passengers arrive together. A dedicated bus provides practical space for passengers and luggage while allowing pickup timings, flight-related schedules, hotel transfers, and onward travel arrangements to be coordinated in one transportation plan."
},
{
name: "Affordable Bus Rental Pune",
description: "Affordable Bus Rental Pune is intended for groups that want shared transportation while keeping travel costs under consideration. Vehicle capacity and trip arrangements can be planned according to the passenger count, route, journey duration, AC preference, luggage, sightseeing requirements, and overall budget, making group travel more practical than arranging several individual vehicles."
},
{
name: "Bus for Local Sightseeing Pune",
description: "Bus for Local Sightseeing Pune is convenient for groups exploring attractions and important locations within and around Pune. A dedicated bus can connect multiple sightseeing points according to the selected schedule while providing common transportation for families, tourists, school groups, corporate teams, and visiting guests."
},
{
name: "Bus for One Day Trip Pune",
description: "Bus for One Day Trip Pune provides a convenient option for groups planning short excursions with a fixed departure and return schedule. The vehicle can be arranged for destinations such as hill stations, pilgrimage locations, nature attractions, picnic spots, and nearby tourist places while coordinating sightseeing stops, meal breaks, passenger capacity, and return timing."
},
{
name: "Bus for Corporate Travel Pune",
description: "Bus for Corporate Travel Pune supports employee transportation, business meetings, office outings, conferences, training programs, client visits, and corporate tours. Group bus arrangements can connect offices, hotels, airports, industrial areas, event venues, and other business locations while maintaining coordinated schedules for employees and corporate participants."
},
{
name: "Bus for Marriage Function Pune",
description: "Bus for Marriage Function Pune helps families manage transportation for guests and relatives attending marriage ceremonies, receptions, engagement functions, and related celebrations. The bus can be scheduled between homes, hotels, halls, resorts, temples, and venues according to function timings, helping larger groups move together with their luggage and personal belongings."
},
{
name: "Bus for Tourist Trip Pune",
description: "Bus for Tourist Trip Pune provides dedicated transportation for travelers exploring Pune, Maharashtra, and destinations in other states as part of organized tours. The itinerary can include sightseeing attractions, hotels, restaurants, pilgrimage sites, heritage locations, beaches, hill stations, and other destinations while keeping the complete tourist group together throughout the journey."
},
{
name: "Bus for Outstation Tour Pune",
description: "Bus for Outstation Tour Pune is suitable for families, friends, corporate groups, school parties, tourists, and organizations planning multi-day journeys outside Pune. Ruturaj Enterprises can coordinate transportation around the selected destinations, sightseeing schedule, accommodation, luggage requirements, rest stops, passenger capacity, and return journey to create a practical group travel arrangement."
}
],
tableData: [
["Bus Rental Pune", "Dedicated bus rental for families, groups, businesses, events, and tours"],
["Bus Hire in Pune", "Flexible bus hire for local, outstation, corporate, wedding, and tourist travel"],
["Bus Booking Pune", "Advance bus booking according to route, passenger count, date, and vehicle requirements"],
["AC Bus On Rent Pune", "Air-conditioned group transportation for comfortable local and long-distance travel"],
["Non AC Bus On Rent Pune", "Practical and economical bus option for group transportation requirements"],
["Luxury Bus On Rent Pune", "Premium bus arrangements for special events, tours, and comfortable group travel"],
["Bus Rental Service Pune", "Complete bus rental support for customized local and outstation transportation"],
["Bus for Outstation Pune", "Dedicated bus transportation for journeys from Pune to destinations outside the city"],
["Bus for Family Trip Pune", "Shared family transportation with space for passengers, luggage, and planned sightseeing"],
["Bus for Group Travel Pune", "Common group vehicle for friends, relatives, organizations, and tourist parties"],
["Bus for Corporate Events Pune", "Organized employee and delegate transportation for corporate functions and events"],
["Bus for Wedding Pune", "Guest and family transportation for weddings, receptions, and marriage celebrations"],
["Bus for School Trip Pune", "Group transportation for educational excursions and school outings"],
["Bus for Picnic Pune", "Bus travel for family, school, office, society, and group picnic programs"],
["Bus for Airport Pickup Pune", "Dedicated airport pickup and drop transportation for groups with luggage"],
["Affordable Bus Rental Pune", "Budget-conscious group bus transportation based on route and passenger requirements"],
["Bus for Local Sightseeing Pune", "Dedicated bus for organized sightseeing across Pune and nearby attractions"],
["Bus for One Day Trip Pune", "Convenient transportation for scheduled one-day excursions and return journeys"],
["Bus for Corporate Travel Pune", "Employee and business transportation for meetings, training, tours, and office programs"],
["Bus for Marriage Function Pune", "Group transportation between homes, hotels, halls, temples, and wedding venues"],
["Bus for Tourist Trip Pune", "Tourist bus transportation for customized sightseeing and travel itineraries"],
["Bus for Outstation Tour Pune", "Long-distance bus arrangements for multi-day tours outside Pune"]
],
whychoose: [
{
WhyChooseheading: "Multiple Bus Options for Different Requirements",
WhyChoosedescription: "Group travel requirements can vary significantly depending on passenger capacity, destination, trip duration, luggage, comfort expectations, and budget. Ruturaj Enterprises can arrange suitable bus options for local travel, outstation journeys, family vacations, school programs, corporate movements, weddings, picnics, and tourist tours according to the planned itinerary."
},
{
WhyChooseheading: "Convenient Transportation for Large Groups",
WhyChoosedescription: "Traveling together in one dedicated bus can simplify passenger coordination and reduce the difficulty of managing several individual vehicles. Families, friends, employees, students, wedding guests, and tourist groups can remain together while coordinating common pickup points, luggage, sightseeing stops, hotel transfers, and scheduled return travel."
},
{
WhyChooseheading: "Useful for Local and Outstation Travel",
WhyChoosedescription: "A bus rental can support both short-distance Pune transportation and longer journeys to destinations across Maharashtra and other states. The travel arrangement can be structured around local sightseeing, one-day trips, multi-day tours, pilgrimage journeys, corporate travel, family holidays, and other planned routes."
},
{
WhyChooseheading: "Suitable for Events and Special Functions",
WhyChoosedescription: "Special occasions often require transportation between multiple locations within specific time windows. Bus arrangements can help move wedding guests, corporate participants, school groups, event attendees, and family members between homes, hotels, venues, airports, banquet halls, resorts, and other scheduled locations."
},
{
WhyChooseheading: "Comfort-Focused Group Journeys",
WhyChoosedescription: "Long-distance group travel becomes more convenient when the selected vehicle matches the number of passengers and expected comfort level. AC, non-AC, luxury, and other suitable bus arrangements can be considered according to availability, passenger requirements, luggage space, travel duration, and the nature of the journey."
},
{
WhyChooseheading: "Flexible Itinerary Coordination",
WhyChoosedescription: "Private group transportation provides flexibility when travelers need multiple sightseeing stops, hotel transfers, meal breaks, event movements, or destination changes within a planned itinerary. The bus schedule can be coordinated around the group's travel requirements so passengers can follow a common transportation plan throughout the trip."
},
{
WhyChooseheading: "Practical Choice for Corporate and School Groups",
WhyChoosedescription: "Corporate teams and school groups often need transportation that keeps a larger number of passengers organized around fixed schedules. Dedicated bus arrangements can support office programs, conferences, training visits, school excursions, educational tours, picnics, and group activities while simplifying common pickup and drop arrangements."
},
{
WhyChooseheading: "Planned Travel for Families and Tourists",
WhyChoosedescription: "Families and tourist groups can benefit from having one vehicle for the complete journey, particularly when the itinerary includes several destinations and sightseeing stops. Transportation can be planned around passenger count, luggage, accommodation, local movements, destination preferences, rest breaks, and the desired return schedule for a more organized travel experience."
}
]
};



const faqData = [
{
question: "How can I book a bus on rent in Pune?",
answer: "Bus rental in Pune can be arranged by sharing your pickup location, destination, travel date, number of passengers, trip duration, and preferred seating capacity. Ruturaj Enterprises can coordinate suitable bus transportation for local trips, outstation tours, weddings, corporate events, school excursions, pilgrimages, and group travel."
},
{
question: "What types of buses are available for rent in Pune?",
answer: "Bus selection can be based on group size, luggage, journey distance, and comfort requirements. Depending on availability and trip requirements, travelers can consider mini buses and larger tourist buses with different seating capacities for family tours, events, corporate outings, educational trips, and outstation journeys."
},
{
question: "Can I rent a bus in Pune for an outstation trip?",
answer: "Outstation bus rentals can be planned from Pune for destinations across Maharashtra and other states. A private bus can be arranged for family vacations, group tours, pilgrimage journeys, corporate outings, weddings, picnics, and multi-city travel according to the planned route and number of passengers."
},
{
question: "Can I hire a bus on rent in Pune for a family trip?",
answer: "Families and extended groups can choose a private bus when several passengers need to travel together. The seating capacity can be selected according to the group size, while luggage space, travel duration, sightseeing stops, and return plans can be considered while organizing the complete trip."
},
{
question: "Is bus rental in Pune available for weddings and events?",
answer: "Wedding and event transportation can be organized with rental buses for guests, relatives, and groups traveling between homes, hotels, railway stations, airports, and event venues. The bus schedule can be coordinated around ceremony timings and the different locations included in the event itinerary."
},
{
question: "Can I book a bus on rent in Pune for a corporate trip?",
answer: "Corporate groups can hire buses for employee outings, team-building trips, conferences, business events, industrial visits, and company tours. Vehicle capacity and travel schedules can be planned according to employee count, pickup locations, destinations, luggage, and the duration of the corporate program."
},
{
question: "Can I rent a bus in Pune for a school or college trip?",
answer: "Educational institutions and student groups can arrange bus transportation for educational tours, picnics, excursions, and organized trips. The vehicle requirement can be planned according to student and staff numbers, route, destination, travel duration, and the overall schedule of the educational tour."
},
{
question: "Can I hire a bus in Pune for a religious or pilgrimage tour?",
answer: "Private buses can be arranged for groups visiting temples and pilgrimage destinations from Pune. The itinerary can include multiple religious locations, sightseeing points, planned breaks, and return travel, with the bus capacity selected according to the number of devotees traveling together."
},
{
question: "What information is required to rent a bus in Pune?",
answer: "Bus rental arrangements generally require the Pune pickup location, destination or route, travel date, number of passengers, expected trip duration, luggage requirements, preferred seating capacity, and journey type. Providing these details helps Ruturaj Enterprises coordinate a bus suitable for the complete travel plan."
},
{
question: "Why choose Ruturaj Enterprises for Bus On Rent Pune?",
answer: "Ruturaj Enterprises arranges bus rentals in Pune for family tours, corporate travel, weddings, school trips, picnics, pilgrimages, sightseeing, and outstation journeys. Bus selection and scheduling can be coordinated according to passenger capacity, route, luggage, travel duration, event requirements, and the group's planned itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Ganesh More",
feedback:
"Our extended family needed a bus for an outstation trip from Pune, so we arranged the rental through Ruturaj Enterprises. The seating capacity worked well for our group, and traveling together made it easier to manage luggage and planned stops. The overall transportation arrangement was convenient.",
rating: 5
},
{
id: 2,
name: "Miss. Priyanka Jadhav",
feedback:
"We rented a bus from Ruturaj Enterprises for a group event in Pune. Several family members and guests needed transportation between different locations, so having a dedicated bus made coordination much simpler. The vehicle arrangement suited our group and event schedule well.",
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
  "name": "Bus On Rent Pune",
  "image": "https://ruturajenterprises.com/assets/images/bus-on-rent-pune.webp",
  "description":
    "Bus On Rent Pune for local travel, outstation journeys, family trips, group tours, corporate events, weddings, school trips, picnics and airport transportation. Ruturaj Enterprises provides bus rental, hire and booking services in Pune with AC, non-AC and luxury buses suited to different group sizes and travel requirements. Flexible rental arrangements, comfortable vehicles and experienced drivers make it convenient to organize day trips, long-distance tours, corporate transportation, wedding guest movement and group travel from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/bus-on-rent-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Bus On Rent Pune | Bus Rental in Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Bus On Rent Pune for local travel, outstation trips, family tours, group travel, corporate events, weddings, school trips, picnics and airport pickup. Hire AC, non-AC and luxury buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Bus Rental Pune, Bus Hire in Pune, Bus Booking Pune, AC Bus On Rent Pune, Non AC Bus On Rent Pune, Luxury Bus On Rent Pune, Bus Rental Service Pune, Bus for Outstation Pune, Bus for Family Trip Pune, Bus for Group Travel Pune, Bus for Corporate Events Pune, Bus for Wedding Pune, Bus for School Trip Pune, Bus for Picnic Pune, Bus for Airport Pickup Pune, Affordable Bus Rental Pune, Bus On Rent Pune, Bus Hire Pune, Bus Booking Service Pune, Bus Rental Company Pune, Bus Hire Service Pune, Bus Rental Near Me Pune, Bus Hire Near Me Pune, AC Bus Rental Pune, AC Bus Hire Pune, AC Bus Booking Pune, AC Bus Rental Service Pune, Non AC Bus Rental Pune, Non AC Bus Hire Pune, Non AC Bus Booking Pune, Non AC Bus Rental Service Pune, Luxury Bus Rental Pune, Luxury Bus Hire Pune, Luxury Bus Booking Pune, Luxury Bus Rental Service Pune, Tourist Bus Rental Pune, Tourist Bus Hire Pune, Tourist Bus Booking Pune, Tourist Bus on Rent Pune, Mini Bus Rental Pune, Mini Bus Hire Pune, Mini Bus Booking Pune, Mini Bus on Rent Pune, Outstation Bus Rental Pune, Outstation Bus Hire Pune, Outstation Bus Booking Pune, Outstation Bus on Rent Pune, One Way Bus Rental Pune, One Way Bus Hire Pune, Round Trip Bus Rental Pune, Round Trip Bus Hire Pune, Bus for Local Travel Pune, Local Bus Rental Pune, Local Bus Hire Pune, Local Bus Booking Pune, City Bus Rental Pune, Bus for Family Tour Pune, Bus for Family Travel Pune, Bus for Group Tour Pune, Group Bus Rental Pune, Group Bus Hire Pune, Group Travel Bus Pune, Corporate Bus Rental Pune, Corporate Bus Hire Pune, Corporate Bus Booking Pune, Corporate Staff Transportation Pune, Corporate Employee Bus Pune, Corporate Event Bus Rental Pune, Wedding Bus Rental Pune, Wedding Bus Hire Pune, Wedding Bus Booking Pune, Wedding Guest Transportation Pune, Marriage Bus Rental Pune, Marriage Bus Hire Pune, Marriage Bus Booking Pune, School Bus Rental Pune, School Trip Bus Rental Pune, School Tour Bus Hire Pune, School Picnic Bus Pune, College Trip Bus Rental Pune, Picnic Bus Rental Pune, Picnic Bus Hire Pune, Family Picnic Bus Pune, Group Picnic Bus Pune, Airport Bus Rental Pune, Airport Pickup Bus Pune, Airport Drop Bus Pune, Airport Transfer Bus Pune, Bus for Airport Travel Pune, Bus for Events Pune, Event Bus Rental Pune, Event Bus Hire Pune, Event Bus Booking Pune, Bus for Corporate Events Pune, Bus for Marriage Function Pune, Bus for Wedding Guests Pune, Bus for Temple Tour Pune, Pilgrimage Bus Rental Pune, Tourist Bus for Outstation Pune, Bus for Maharashtra Tour Pune, Bus for Weekend Trip Pune, Bus for Holiday Trip Pune, Bus for Sightseeing Pune, Pune Sightseeing Bus Rental, Pune City Tour Bus Rental, Bus with Driver Pune, Bus Rental with Driver Pune, Bus Hire with Driver Pune, AC Tourist Bus Pune, Luxury Tourist Bus Pune, Comfortable Bus Rental Pune, Professional Bus Hire Pune, Reliable Bus Rental Pune, Affordable Bus Hire Pune, Bus Service Pune, Bus Transportation Service Pune, Passenger Bus Rental Pune, Group Transportation Bus Pune, Ruturaj Enterprises Bus Rental Pune"
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
                            <img src='/images/keyword/81.jpg' alt='img' className='img-fluid' />
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

export default Busonrentpune;