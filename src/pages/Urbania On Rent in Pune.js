import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Urbaniaonrentinpune() {

const cardData = {
keyword: "Urbania On Rent in Pune",
headingDescription: "Ruturaj Enterprises provides comfortable and professionally managed Urbania On Rent in Pune services for families, friends, corporate teams, wedding groups, tourists, event organizers, and travelers looking for a premium group transportation experience. Force Urbania vehicles are well suited for outstation tours, family vacations, corporate programs, wedding functions, airport transfers, picnics, sightseeing plans, one-day trips, tourist journeys, and customized travel itineraries where passengers want to travel together in a spacious and refined vehicle. Customers can select suitable Urbania arrangements according to group size, luggage requirements, destination, journey duration, comfort expectations, itinerary, and budget. The service can be planned around convenient Pune pickup points, destination transfers, sightseeing stops, accommodation changes, meal breaks, event venues, and return schedules, making Urbania a practical choice for groups seeking a combination of premium comfort, organized travel, and flexible trip planning.",
topPlaces: [
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a popular hill destination for families, friends, corporate teams, and tourist groups traveling from Pune for weekend holidays and longer vacations. Urbania rental provides a spacious group travel option for visiting viewpoints, resorts, markets, picnic locations, and nearby attractions while keeping passengers together throughout the itinerary."
},
{
title: "Goa",
description: "Goa is a preferred destination for family holidays, corporate outings, friend groups, wedding parties, and organized tourist journeys from Pune. A Force Urbania can make the long road journey more comfortable by providing premium shared transportation with convenient luggage arrangements, hotel transfers, sightseeing plans, meal breaks, and scheduled return travel."
},
{
title: "Shirdi",
description: "Shirdi is suitable for family pilgrimage programs, religious groups, senior travelers, and organized tour parties departing from Pune. Urbania transportation can help the group travel together with coordinated pickup arrangements, luggage space, comfortable seating, temple visits, planned breaks, and convenient return transportation."
},
{
title: "Alibaug",
description: "Alibaug offers beaches, resorts, and leisure attractions that make it suitable for family trips, corporate outings, friend groups, and weekend travel from Pune. A premium Urbania provides an organized option for group transportation while accommodating luggage and supporting beach visits, resort transfers, sightseeing stops, meal breaks, and return schedules."
},
{
title: "Nashik",
description: "Nashik is suitable for pilgrimage tours, family vacations, corporate programs, cultural visits, and organized sightseeing journeys from Pune. Urbania rental allows groups to travel together while planning visits to temples, cultural attractions, vineyards, hotels, and nearby destinations with coordinated pickup, sightseeing, and return arrangements."
},
{
title: "Dapoli",
description: "Dapoli is a suitable coastal destination for families, friends, corporate groups, and tourist parties looking for a relaxed journey from Pune. Urbania provides a spacious and comfortable group transportation option for beach visits, resort transfers, sightseeing stops, meal breaks, luggage requirements, and multi-day travel schedules."
},
{
title: "Kolhapur",
description: "Kolhapur is suitable for cultural tours, family journeys, pilgrimage programs, corporate travel, and organized group trips from Pune. A Force Urbania can simplify transportation for temple visits, historical attractions, hotel transfers, local sightseeing, and nearby destinations while allowing passengers to remain together on one coordinated itinerary."
},
{
title: "Bhandardara",
description: "Bhandardara offers scenic landscapes and nature attractions that are suitable for family vacations, corporate retreats, college groups, and weekend tourist programs from Pune. Urbania rental gives medium-sized groups a comfortable shared transportation option with planned stops, luggage arrangements, accommodation transfers, and convenient return travel."
},
{
title: "Ganpatipule",
description: "Ganpatipule combines coastal attractions with religious sightseeing and is suitable for families, tourist groups, and organized holiday programs from Pune. Urbania transportation can make the longer journey more convenient by keeping passengers together while supporting planned sightseeing, hotel transfers, meal breaks, luggage handling, and return schedules."
},
{
title: "Panchgani",
description: "Panchgani is a convenient destination for families, corporate teams, school groups, and tourists planning a scenic trip from Pune. A premium Urbania provides comfortable shared transportation for viewpoints, resorts, picnic locations, and nearby attractions while allowing the group to follow a common departure, sightseeing, and return schedule."
}
],
services: [
{
name: "Force Urbania On Rent Pune",
description: "Force Urbania On Rent Pune services are suitable for families, friends, corporate teams, wedding groups, tourists, and organizations looking for spacious and premium group transportation. Rental arrangements can be planned according to passenger capacity, luggage requirements, destination, journey duration, pickup points, sightseeing schedule, comfort preferences, and overall travel budget."
},
{
name: "Urbania Rental Pune",
description: "Urbania Rental Pune provides a comfortable transportation solution for family vacations, corporate travel, weddings, tourist tours, airport transfers, picnics, and outstation journeys. The rental plan can be organized around the complete itinerary, including pickup locations, destination transfers, sightseeing stops, accommodation changes, meal breaks, waiting requirements, and scheduled return travel."
},
{
name: "Urbania Hire in Pune",
description: "Urbania Hire in Pune is suitable for groups that want to travel together in a spacious and premium vehicle rather than arranging multiple smaller cars. Ruturaj Enterprises can coordinate the Urbania according to passenger count, route distance, luggage volume, travel duration, sightseeing requirements, destination transfers, and preferred journey schedule."
},
{
name: "Urbania Booking Pune",
description: "Urbania Booking Pune services help customers arrange premium group transportation in advance for weddings, family trips, corporate programs, tourist journeys, airport transfers, picnics, and outstation tours. Booking details can be coordinated according to travel dates, pickup locations, destination, passenger requirements, luggage, itinerary, and preferred Urbania configuration."
},
{
name: "AC Urbania On Rent Pune",
description: "AC Urbania On Rent Pune services are suitable for travelers seeking a comfortable and climate-controlled environment during family holidays, corporate programs, weddings, tourist tours, and long-distance road journeys. The AC Urbania arrangement allows passengers to travel together while supporting luggage requirements, planned sightseeing, meal breaks, hotel transfers, and organized return travel."
},
{
name: "Luxury Urbania On Rent Pune",
description: "Luxury Urbania On Rent Pune services are designed for groups that prefer a premium travel experience for corporate events, weddings, special occasions, family vacations, and extended tourist journeys. The spacious vehicle provides an organized solution for group transportation while giving greater emphasis to comfort, interior space, travel presentation, and the overall journey experience."
},
{
name: "Urbania for Outstation Pune",
description: "Urbania for Outstation Pune services support comfortable group journeys to destinations across Maharashtra and other states for vacations, pilgrimages, corporate programs, weddings, and tourist circuits. Travel plans can include route coordination, overnight journeys, sightseeing stops, accommodation transfers, meal breaks, luggage arrangements, and scheduled return transportation."
},
{
name: "Urbania for Family Trip Pune",
description: "Urbania for Family Trip Pune arrangements are suitable for families and relatives who want to travel together in a spacious vehicle for vacations, celebrations, pilgrimages, and sightseeing programs. The service can accommodate luggage and support coordinated pickup, hotel transfers, meal breaks, family sightseeing, intermediate stops, and return transportation."
},
{
name: "Urbania for Group Travel Pune",
description: "Urbania for Group Travel Pune services provide a convenient premium transportation option for friends, relatives, associations, clubs, and organized travel parties. A dedicated Urbania helps passengers remain together while allowing the itinerary to include shared pickup points, luggage arrangements, sightseeing stops, accommodation transfers, meal breaks, and return travel."
},
{
name: "Urbania for Corporate Events Pune",
description: "Urbania for Corporate Events Pune services can support conferences, seminars, business meetings, employee gatherings, team outings, corporate celebrations, and off-site programs. Premium group transportation helps organizations coordinate employee pickup locations, venue transfers, reporting times, event schedules, luggage, and organized return journeys."
},
{
name: "Urbania for Wedding Pune",
description: "Urbania for Wedding Pune services provide comfortable group transportation for wedding guests traveling between homes, hotels, ceremony venues, reception locations, and other functions. The vehicle can be scheduled around wedding timings and multiple pickup points while supporting guest luggage, venue transfers, waiting periods, and return transportation."
},
{
name: "Urbania for Airport Pickup Pune",
description: "Urbania for Airport Pickup Pune services are suitable for families, corporate teams, tourist groups, wedding parties, and organizations requiring coordinated airport transportation. The spacious vehicle can help manage passengers and luggage between planned pickup points and airport locations while also supporting hotel transfers, arrival schedules, departure requirements, and onward journeys."
},
{
name: "Affordable Urbania Rental Pune",
description: "Affordable Urbania Rental Pune services provide a practical way for groups to access premium shared transportation while keeping the overall travel plan within a planned budget. Arrangements can be considered according to passenger count, route distance, trip duration, luggage needs, number of stops, itinerary, and preferred Urbania category."
},
{
name: "Urbania Rental Service Pune",
description: "Urbania Rental Service Pune supports family tours, corporate events, wedding functions, tourist journeys, airport transfers, picnics, sightseeing programs, and outstation travel requirements. Ruturaj Enterprises can organize the rental according to passenger capacity, pickup requirements, destination, travel duration, luggage, itinerary, and scheduled return arrangements."
},
{
name: "Urbania for Picnic Pune",
description: "Urbania for Picnic Pune services are suitable for families, offices, friend groups, clubs, and organized parties planning recreational outings and day trips. A dedicated Urbania allows passengers to travel together comfortably while supporting luggage, coordinated departure times, meal breaks, sightseeing stops, recreational activities, and planned return transportation."
},
{
name: "Urbania for Local Sightseeing Pune",
description: "Urbania for Local Sightseeing Pune services can be used by groups visiting multiple attractions during an organized sightseeing program around Pune and nearby destinations. The journey can be planned according to pickup locations, passenger requirements, sightseeing sequence, stop duration, luggage needs, final drop point, and the group's preferred schedule."
},
{
name: "Urbania for One Day Trip Pune",
description: "Urbania for One Day Trip Pune services are suitable for groups planning a same-day journey with a coordinated departure and return schedule. The itinerary can include destination travel, sightseeing stops, meal breaks, waiting time, recreational activities, and planned return transportation while maintaining a comfortable shared travel arrangement."
},
{
name: "Urbania for Corporate Travel Pune",
description: "Urbania for Corporate Travel Pune services can support employee transportation, business meetings, conferences, training programs, client visits, team outings, company tours, and corporate events. A premium dedicated vehicle helps coordinate employees through planned pickup points, venue transfers, reporting schedules, luggage handling, event timings, and organized return travel."
},
{
name: "Urbania for Marriage Function Pune",
description: "Urbania for Marriage Function Pune services help families arrange comfortable transportation for guests attending marriage ceremonies, receptions, engagement functions, and related celebrations. The schedule can be aligned with event timings and multiple pickup points while supporting venue transfers, luggage, waiting requirements, guest coordination, and return transportation."
},
{
name: "Urbania for Tourist Trip Pune",
description: "Urbania for Tourist Trip Pune services are suitable for families, friends, organized tourist parties, corporate groups, and travel associations visiting destinations across Maharashtra and other states. Customized itineraries can include sightseeing, hotel transfers, meal stops, overnight travel, luggage arrangements, destination transfers, intermediate stops, and scheduled return journeys."
},
{
name: "Force Urbania Rental Pune",
description: "Force Urbania Rental Pune provides a spacious and premium group transportation option for customers planning family holidays, corporate programs, weddings, tourist tours, airport transfers, picnics, and outstation journeys. Rental planning can be customized around passenger count, destination, luggage requirements, travel duration, pickup points, sightseeing stops, and overall itinerary."
},
{
name: "Premium Urbania Hire Pune",
description: "Premium Urbania Hire Pune services are suitable for travelers who want a refined and spacious transportation arrangement for special occasions, corporate travel, family vacations, weddings, and tourist programs. The vehicle can be planned around the group's schedule, route, passenger requirements, luggage, sightseeing needs, hotel transfers, and return journey."
}
],
tableData: [
["Force Urbania On Rent Pune", "Spacious Force Urbania rental for families, corporate groups, weddings, tourists, and premium group travel."],
["Urbania Rental Pune", "Urbania rental arrangements for family trips, corporate travel, weddings, airport transfers, picnics, and outstation journeys."],
["Urbania Hire in Pune", "Dedicated Urbania hiring for groups seeking comfortable shared transportation from Pune."],
["Urbania Booking Pune", "Advance Urbania booking for weddings, family vacations, corporate programs, tourist trips, and group travel."],
["AC Urbania On Rent Pune", "Air-conditioned Urbania transportation for comfortable family trips, corporate travel, weddings, tours, and long journeys."],
["Luxury Urbania On Rent Pune", "Premium Urbania rental for special events, corporate programs, weddings, family vacations, and tourist travel."],
["Urbania for Outstation Pune", "Urbania transportation for outstation vacations, pilgrimages, corporate tours, weddings, and customized tourist circuits."],
["Urbania for Family Trip Pune", "Spacious family transportation with luggage arrangements, sightseeing, hotel transfers, meal breaks, and return planning."],
["Urbania for Group Travel Pune", "Premium shared transportation for friends, relatives, associations, clubs, and organized travel parties."],
["Urbania for Corporate Events Pune", "Corporate transportation for conferences, seminars, team outings, business events, and company gatherings."],
["Urbania for Wedding Pune", "Comfortable wedding guest transportation between homes, hotels, ceremony venues, receptions, and functions."],
["Urbania for Airport Pickup Pune", "Spacious airport transportation for families, corporate teams, tourists, wedding parties, and organizations."],
["Affordable Urbania Rental Pune", "Budget-conscious Urbania rental based on passenger requirements, route, duration, luggage, and itinerary."],
["Urbania Rental Service Pune", "Complete Urbania rental support for tours, weddings, corporate events, airport transfers, picnics, sightseeing, and outstation travel."],
["Urbania for Picnic Pune", "Premium group transportation for family picnics, office outings, friend groups, clubs, and recreational tours."],
["Urbania for Local Sightseeing Pune", "Dedicated Urbania transportation for organized sightseeing with planned pickup points, stops, and destination transfers."],
["Urbania for One Day Trip Pune", "Comfortable same-day Urbania travel with coordinated departure, sightseeing, meal breaks, and return transportation."],
["Urbania for Corporate Travel Pune", "Premium employee and business transportation for meetings, conferences, training programs, tours, and corporate outings."],
["Urbania for Marriage Function Pune", "Guest transportation for marriage ceremonies, receptions, engagement functions, and family wedding events."],
["Urbania for Tourist Trip Pune", "Spacious Urbania tourist transportation for customized sightseeing, family holidays, multi-day tours, and destination travel."],
["Force Urbania Rental Pune", "Force Urbania rental for premium family travel, corporate programs, weddings, tourist tours, and outstation journeys."],
["Premium Urbania Hire Pune", "Premium Urbania hiring for special occasions, corporate travel, family vacations, weddings, and organized tourist programs."]
],
whychoose: [
{
WhyChooseheading: "Spacious Premium Travel",
WhyChoosedescription: "Force Urbania provides a practical option for groups that want more space and a premium travel environment than a standard car or smaller vehicle. It is suitable for families, corporate teams, wedding parties, tourist groups, and friends who prefer to travel together with convenient passenger and luggage arrangements."
},
{
WhyChooseheading: "Comfortable AC Journey",
WhyChoosedescription: "Air-conditioned Urbania arrangements can be considered for longer road journeys and occasions where passenger comfort is an important part of the travel plan. The format works well for family vacations, corporate programs, weddings, tourist tours, airport transfers, and multi-day outstation trips from Pune."
},
{
WhyChooseheading: "Premium Group Transportation",
WhyChoosedescription: "Groups planning important occasions or refined travel programs can choose Urbania as a premium shared transportation solution. It is suitable for corporate events, weddings, special celebrations, family holidays, tourist journeys, and long-distance travel where passengers want to remain together in a spacious vehicle."
},
{
WhyChooseheading: "Outstation Travel Support",
WhyChoosedescription: "Urbania transportation can be arranged from Pune for destinations across Maharashtra and other states, supporting weekend getaways, family vacations, pilgrimages, corporate tours, weddings, and tourist circuits. The travel plan can include sightseeing stops, hotel transfers, meal breaks, overnight journeys, luggage arrangements, and scheduled return transportation."
},
{
WhyChooseheading: "Ideal for Group Occasions",
WhyChoosedescription: "A dedicated Urbania can simplify transportation for wedding functions, corporate gatherings, family celebrations, tourist groups, airport transfers, picnics, and organized events. Keeping passengers in one vehicle helps coordinate common departure timings, pickup points, destination transfers, luggage, sightseeing stops, and return schedules."
},
{
WhyChooseheading: "Flexible Itinerary Planning",
WhyChoosedescription: "Urbania rental can be planned around the group's actual journey requirements, including pickup locations, destinations, intermediate stops, sightseeing schedules, accommodation transfers, meal breaks, waiting periods, overnight travel, and final drop points. This makes the service suitable for both straightforward transfers and customized multi-stop itineraries."
},
{
WhyChooseheading: "Convenient for Families and Corporates",
WhyChoosedescription: "Families can use Urbania for vacations, celebrations, pilgrimages, and sightseeing, while companies can arrange it for employee movement, conferences, team outings, and business programs. The spacious group format helps both types of travelers maintain a coordinated schedule without relying on multiple independent cars."
},
{
WhyChooseheading: "Organized Pune Pickup Planning",
WhyChoosedescription: "Travel arrangements can be coordinated around suitable Pune pickup points according to passenger requirements and scheduled departure times. Organized boarding helps groups start their journey together, simplifies luggage coordination, and creates a structured travel plan before continuing toward the selected destination."
}
]
};









const faqData = [
{
question: "How can I book an Urbania on rent in Pune?",
answer: "Urbania rental in Pune can be arranged by sharing your pickup location, destination, travel date, passenger count, journey duration, and preferred travel schedule. Ruturaj Enterprises can coordinate Urbania transportation for family tours, corporate travel, weddings, airport transfers, sightseeing programs, and outstation journeys according to the group's itinerary."
},
{
question: "Why is Urbania suitable for group travel from Pune?",
answer: "Urbania is a practical choice for groups looking for a more premium travel experience than a standard small vehicle. Its spacious passenger arrangement makes it suitable for family vacations, corporate outings, wedding transportation, airport transfers, sightseeing tours, and long-distance journeys where group comfort and convenient travel are important."
},
{
question: "What types of trips can be planned with an Urbania from Pune?",
answer: "An Urbania can be used for a wide range of planned journeys, including local sightseeing, weekend getaways, family vacations, corporate outings, wedding functions, airport transportation, pilgrimage tours, and outstation travel. The route and schedule can be customized around the group's destinations, planned stops, and travel duration."
},
{
question: "Can I rent an Urbania in Pune for an outstation trip?",
answer: "Outstation Urbania rentals can be arranged from Pune for destinations across Maharashtra and other states. Groups can plan one-day excursions or longer multi-day tours with multiple destinations, sightseeing stops, meal breaks, overnight stays, and return travel included within the overall itinerary."
},
{
question: "Is Urbania available for wedding and event transportation in Pune?",
answer: "Wedding parties and event organizers can use Urbania transportation to move guests between hotels, homes, railway stations, airports, marriage halls, banquet venues, and reception locations. A dedicated vehicle can help coordinate group transfers around ceremony timings while providing a convenient option for guests traveling together."
},
{
question: "Can companies rent an Urbania for corporate travel in Pune?",
answer: "Corporate organizations can consider Urbania rental for employee outings, conferences, business meetings, team-building activities, company events, training programs, and executive group travel. Pickup points, passenger numbers, destination locations, and event timings can be incorporated into a transportation schedule suited to the company's requirements."
},
{
question: "Can Urbania be used for airport and railway station transfers in Pune?",
answer: "Urbania can be arranged for group airport or railway station transfers when several passengers need to travel together. It can help coordinate pickups and drop-offs for families, corporate teams, wedding guests, or tour groups, with the travel schedule planned around flight, train, and onward transportation timings."
},
{
question: "Is Urbania suitable for long-distance family tours?",
answer: "For families planning longer journeys from Pune, an Urbania can provide a dedicated group transportation option for multi-day travel. The itinerary can include sightseeing destinations, rest breaks, meal stops, overnight locations, and return travel, allowing the family group to remain together throughout the planned tour."
},
{
question: "What details are required when renting an Urbania in Pune?",
answer: "Useful information includes the pickup point, destination, travel date, number of passengers, luggage requirements, journey duration, intermediate stops, and preferred schedule. Sharing these details in advance helps Ruturaj Enterprises understand the group's requirements and coordinate the Urbania rental around the planned route."
},
{
question: "Why choose Ruturaj Enterprises for Urbania On Rent in Pune?",
answer: "Ruturaj Enterprises arranges Urbania transportation for groups requiring a comfortable and organized travel option in Pune. The service can be planned for local and outstation tours, weddings, corporate programs, airport transfers, sightseeing, family trips, and special events, with the vehicle schedule coordinated according to the group's itinerary and passenger requirements."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Vikram Joshi",
feedback:
"We rented an Urbania from Ruturaj Enterprises for a family trip from Pune to several destinations. The spacious group arrangement was convenient during the longer journey, and everyone could stay together throughout the tour. Coordinating sightseeing stops and luggage was also much easier with one dedicated vehicle.",
rating: 5
},
{
id: 2,
name: "Miss. Priyanka Kulkarni",
feedback:
"Our company arranged an Urbania for a corporate outing from Pune. The vehicle was a convenient option for keeping the team together during the trip, and the pickup schedule was easy to coordinate with our event plan. The group transportation made the overall outing simpler to manage.",
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
  "name": "Urbania On Rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/urbania-on-rent-in-pune.webp",
  "description":
    "Urbania On Rent in Pune for comfortable family trips, group tours, corporate travel, weddings, outstation journeys, sightseeing and special events. Ruturaj Enterprises offers Force Urbania rental, hire and booking services with AC and luxury travel options for passengers looking for a premium and spacious travel experience. Urbania vehicles are suitable for long-distance journeys, weekend getaways, corporate transportation, wedding guest travel, family vacations and group tours from Pune to destinations across Maharashtra and other states, with experienced drivers and flexible rental plans.",
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
    "url": "https://ruturajenterprises.com/urbania-on-rent-in-pune"
  }
};




    return (
        <div>
<Helmet>
  <title>
    Urbania On Rent in Pune | Urbania Hire in Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Urbania On Rent in Pune for family trips, group travel, corporate events, weddings, outstation tours and sightseeing. Hire AC and luxury Force Urbania with professional drivers from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Force Urbania On Rent Pune, Urbania Rental Pune, Urbania Hire in Pune, Urbania Booking Pune, AC Urbania On Rent Pune, Luxury Urbania On Rent Pune, Urbania for Outstation Pune, Urbania for Family Trip Pune, Urbania for Group Travel Pune, Urbania for Corporate Events Pune, Urbania for Wedding Pune, Urbania for School Trip Pune, Urbania for Picnic Pune, Urbania for Airport Pickup Pune, Affordable Urbania Rental Pune, Force Urbania Rental Pune, Force Urbania Hire Pune, Force Urbania Booking Pune, Force Urbania on Rent Pune, Urbania On Rent in Pune, Urbania Rental Service Pune, Urbania Hire Service Pune, Urbania Booking Service Pune, AC Force Urbania Pune, AC Urbania Rental Pune, AC Urbania Hire Pune, AC Urbania Booking Pune, Luxury Force Urbania Pune, Luxury Urbania Rental Pune, Luxury Urbania Hire Pune, Luxury Urbania Booking Pune, Urbania Tourist Vehicle Pune, Urbania Tourist Rental Pune, Urbania Tourist Hire Pune, Urbania Tourist Booking Pune, Urbania Outstation Pune, Urbania Outstation Rental Pune, Urbania Outstation Hire Pune, Urbania Outstation Booking Pune, Urbania One Way Pune, Urbania One Way Rental Pune, Urbania One Way Hire Pune, Urbania Round Trip Pune, Urbania Round Trip Rental Pune, Urbania Round Trip Hire Pune, Urbania Local Rental Pune, Urbania Local Hire Pune, Urbania Local Booking Pune, Urbania for Family Tour Pune, Urbania for Family Travel Pune, Family Urbania Rental Pune, Urbania for Group Tour Pune, Urbania Group Travel Pune, Group Urbania Rental Pune, Corporate Urbania Pune, Corporate Urbania Rental Pune, Corporate Urbania Hire Pune, Corporate Urbania Booking Pune, Corporate Staff Transportation Urbania Pune, Corporate Event Urbania Pune, Event Urbania Rental Pune, Event Urbania Hire Pune, Event Urbania Booking Pune, Wedding Urbania Pune, Wedding Urbania Rental Pune, Wedding Urbania Hire Pune, Wedding Urbania Booking Pune, Wedding Guest Urbania Pune, Wedding Guest Transportation Urbania Pune, Marriage Urbania Pune, Marriage Urbania Rental Pune, Marriage Urbania Hire Pune, School Urbania Pune, School Trip Urbania Pune, School Tour Urbania Pune, College Trip Urbania Pune, Picnic Urbania Pune, Picnic Urbania Rental Pune, Picnic Urbania Hire Pune, Family Picnic Urbania Pune, Group Picnic Urbania Pune, Airport Urbania Pune, Airport Transfer Urbania Pune, Airport Pickup Urbania Pune, Airport Drop Urbania Pune, Sightseeing Urbania Pune, Sightseeing Urbania Rental Pune, Pune City Tour Urbania Pune, Urbania for Maharashtra Tour Pune, Urbania for Weekend Trip Pune, Urbania for Holiday Trip Pune, Urbania for Temple Tour Pune, Pilgrimage Urbania Pune, Urbania for Tourist Pune, Urbania with Driver Pune, Urbania Rental with Driver Pune, Urbania Hire with Driver Pune, Urbania Booking with Driver Pune, Comfortable Urbania Pune, Premium Urbania Pune, Professional Urbania Rental Pune, Reliable Urbania Hire Pune, Urbania Transportation Pune, Group Transportation Urbania Pune, Urbania Service Pune, Urbania Rental Near Me Pune, Urbania Hire Near Me Pune, Ruturaj Enterprises Urbania Rental Pune"
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
                            <img src='/images/keyword/89.jpg' alt='img' className='img-fluid' />
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

export default Urbaniaonrentinpune;