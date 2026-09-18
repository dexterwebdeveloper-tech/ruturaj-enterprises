import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Urbaniaonrentpune() {

const cardData = {
keyword: "Urbania On Rent Pune",
headingDescription: "Ruturaj Enterprises offers professionally arranged Urbania On Rent Pune services for families, friends, corporate teams, wedding groups, tourists, event organizers, and travelers seeking spacious and premium group transportation. Force Urbania is suitable for outstation tours, family vacations, corporate programs, wedding functions, airport transfers, picnics, sightseeing plans, one-day trips, tourist journeys, and customized travel itineraries where passengers prefer to remain together throughout the journey. Customers can choose suitable Urbania options according to group size, luggage requirements, destination, travel duration, comfort preferences, itinerary, and budget. The service can be organized around Pune pickup locations, destination transfers, sightseeing stops, hotel changes, meal breaks, event venues, and return schedules, providing a convenient transportation solution for both short-distance programs and longer journeys from Pune.",
topPlaces: [
{
title: "Lonavala",
description: "Lonavala is a convenient destination for families, friends, corporate groups, and weekend travelers planning a comfortable journey from Pune. An Urbania provides spacious shared transportation for visiting viewpoints, resorts, picnic locations, and nearby attractions while allowing the group to maintain a common travel and return schedule."
},
{
title: "Goa",
description: "Goa is suitable for family holidays, corporate outings, friend groups, wedding parties, and organized tourist tours traveling from Pune. A premium Urbania can make the longer road journey more comfortable while supporting luggage requirements, hotel transfers, beach sightseeing, meal breaks, and coordinated return travel."
},
{
title: "Bhimashankar",
description: "Bhimashankar is a popular choice for families, pilgrimage groups, senior travelers, and organized tourist parties traveling from Pune. Urbania transportation allows the group to travel together while accommodating planned temple visits, scenic stops, luggage, meal breaks, and convenient return arrangements."
},
{
title: "Alibaug",
description: "Alibaug offers beaches, resorts, and leisure attractions that make it suitable for family vacations, corporate outings, and friend groups from Pune. A dedicated Urbania provides spacious transportation for the complete group while supporting luggage, resort transfers, beach visits, sightseeing stops, and scheduled return travel."
},
{
title: "Nashik",
description: "Nashik is suitable for pilgrimage journeys, family trips, corporate programs, cultural tours, and organized sightseeing from Pune. Urbania rental helps groups remain together while visiting temples, cultural attractions, vineyards, hotels, and nearby destinations according to a planned itinerary."
},
{
title: "Dapoli",
description: "Dapoli is a suitable coastal destination for families, friends, corporate groups, and tourist parties looking for a relaxed journey from Pune. An Urbania provides a comfortable group travel option with space for passengers and luggage while allowing convenient planning for beaches, resorts, sightseeing, meal breaks, and return transportation."
},
{
title: "Kolhapur",
description: "Kolhapur attracts families, tourists, pilgrimage groups, and corporate travelers planning organized journeys from Pune. A Force Urbania can simplify group transportation for temple visits, historical attractions, hotel transfers, local sightseeing, and nearby destinations while keeping the entire party on one coordinated travel schedule."
},
{
title: "Bhandardara",
description: "Bhandardara is well suited for nature trips, family holidays, college groups, corporate retreats, and weekend travel from Pune. Urbania rental gives groups a spacious shared transportation option for scenic viewpoints, nature locations, accommodation transfers, planned breaks, luggage, and return travel."
},
{
title: "Ganpatipule",
description: "Ganpatipule combines coastal scenery and temple attractions, making it suitable for families and organized tourist groups traveling from Pune. Urbania transportation can make the longer journey more convenient by keeping passengers together while supporting sightseeing stops, hotel transfers, meal breaks, luggage handling, and scheduled return travel."
},
{
title: "Matheran",
description: "Matheran is a popular hill destination for families, friends, corporate groups, and weekend tourists traveling from Pune. An Urbania can provide comfortable transportation for the road journey and help coordinate group pickup, luggage, nearby sightseeing, accommodation transfers, meal stops, and the planned return schedule."
}
],
services: [
{
name: "Urbania Rental Pune",
description: "Urbania Rental Pune services provide spacious and comfortable group transportation for families, friends, corporate teams, tourists, wedding parties, and organizations. Rental arrangements can be planned according to passenger requirements, luggage volume, destination, journey duration, pickup locations, sightseeing schedule, and preferred level of comfort."
},
{
name: "Urbania Hire Pune",
description: "Urbania Hire Pune offers a practical premium transportation option for groups that want to travel together instead of arranging several separate cars. Ruturaj Enterprises can coordinate the vehicle according to passenger count, route, travel duration, luggage requirements, sightseeing plans, destination transfers, and return schedule."
},
{
name: "Urbania Booking Pune",
description: "Urbania Booking Pune services help customers arrange group transportation in advance for family trips, corporate events, weddings, tourist journeys, airport transfers, picnics, and outstation tours. Booking requirements can be organized around travel dates, pickup points, destination, passenger capacity, luggage, preferred vehicle type, itinerary, and journey duration."
},
{
name: "Force Urbania Rental Pune",
description: "Force Urbania Rental Pune provides a spacious and premium transportation solution for families, corporate groups, wedding parties, tourists, and special travel programs. The rental can be organized around passenger requirements, destination, luggage, travel duration, pickup locations, sightseeing stops, accommodation transfers, and the complete return itinerary."
},
{
name: "AC Urbania On Rent Pune",
description: "AC Urbania On Rent Pune services are suitable for travelers looking for a comfortable climate-controlled environment during family vacations, corporate journeys, wedding functions, tourist tours, and longer outstation trips. The service allows groups to travel together while supporting luggage arrangements, planned sightseeing, meal breaks, hotel transfers, and scheduled return transportation."
},
{
name: "Luxury Urbania Rental Pune",
description: "Luxury Urbania Rental Pune services are designed for groups seeking a premium travel arrangement for corporate events, weddings, special occasions, family vacations, and extended tourist journeys. The spacious luxury vehicle provides an organized transportation solution while giving greater importance to comfort, presentation, passenger convenience, and the overall travel experience."
},
{
name: "Urbania for Outstation Pune",
description: "Urbania for Outstation Pune services support group journeys to destinations across Maharashtra and other states for vacations, pilgrimages, corporate programs, weddings, and tourist circuits. Travel plans can include route coordination, overnight journeys, sightseeing stops, hotel transfers, meal breaks, luggage requirements, intermediate destinations, and scheduled return transportation."
},
{
name: "Urbania for Family Trip Pune",
description: "Urbania for Family Trip Pune arrangements are suitable for extended families and relatives traveling together for vacations, celebrations, pilgrimages, and sightseeing programs. The spacious vehicle can accommodate passengers and luggage while supporting coordinated pickup points, hotel transfers, family sightseeing, meal breaks, intermediate stops, and return travel."
},
{
name: "Urbania for Group Travel Pune",
description: "Urbania for Group Travel Pune services provide a convenient premium transportation option for friends, relatives, associations, clubs, and organized tour parties. A dedicated Urbania keeps passengers together while allowing the itinerary to include shared pickup points, luggage arrangements, sightseeing stops, accommodation transfers, meal breaks, and return schedules."
},
{
name: "Urbania for Corporate Events Pune",
description: "Urbania for Corporate Events Pune services can support conferences, seminars, business meetings, employee gatherings, team outings, corporate celebrations, and off-site programs. Premium group transportation helps organizations coordinate employee pickup locations, venue transfers, reporting times, event schedules, luggage requirements, and organized return journeys."
},
{
name: "Urbania for Wedding Pune",
description: "Urbania for Wedding Pune services provide comfortable group transportation for wedding guests traveling between homes, hotels, ceremony venues, reception locations, and other functions. The vehicle can be scheduled around event timings and multiple pickup points while supporting guest luggage, venue transfers, waiting requirements, and return transportation."
},
{
name: "Urbania for Airport Transfer Pune",
description: "Urbania for Airport Transfer Pune services are suitable for families, corporate teams, tourist groups, wedding parties, and organizations requiring coordinated transportation to or from the airport. The spacious vehicle helps manage passengers and luggage through planned pickup points, airport schedules, hotel connections, and onward travel arrangements."
},
{
name: "Affordable Urbania On Rent Pune",
description: "Affordable Urbania On Rent Pune services provide groups with a practical way to arrange spacious shared transportation while planning their travel budget. Rental requirements can be considered according to passenger count, route distance, journey duration, luggage needs, number of stops, itinerary, and preferred Urbania category."
},
{
name: "Urbania Rental Service Pune",
description: "Urbania Rental Service Pune supports family vacations, corporate events, wedding functions, tourist journeys, airport transfers, picnics, sightseeing programs, and outstation travel requirements. Ruturaj Enterprises can organize the rental according to passenger capacity, pickup requirements, destination, travel duration, luggage, itinerary, intermediate stops, and return schedule."
},
{
name: "Urbania for Picnic Pune",
description: "Urbania for Picnic Pune services are suitable for families, offices, friend groups, clubs, and organized parties planning recreational outings and day trips. A dedicated Urbania allows passengers to travel together comfortably while supporting coordinated departure times, luggage, meal breaks, sightseeing stops, recreational activities, and planned return transportation."
},
{
name: "Urbania for Local Sightseeing Pune",
description: "Urbania for Local Sightseeing Pune services can be used by groups visiting multiple attractions during an organized sightseeing program around Pune and nearby destinations. The journey can be arranged according to pickup locations, passenger requirements, sightseeing sequence, stop duration, luggage needs, final drop point, and the group's preferred travel schedule."
},
{
name: "Urbania for One Day Trip Pune",
description: "Urbania for One Day Trip Pune services are suitable for groups planning a same-day journey with coordinated departure and return timings. The itinerary can include destination travel, sightseeing stops, meal breaks, waiting periods, recreational activities, and planned return transportation while allowing the complete group to travel together."
},
{
name: "Urbania for Corporate Travel Pune",
description: "Urbania for Corporate Travel Pune services can support employee transportation, business meetings, conferences, training programs, client visits, team outings, company tours, and corporate events. A premium dedicated vehicle helps coordinate employees through planned pickup points, venue transfers, reporting schedules, luggage handling, event timings, and organized return travel."
},
{
name: "Urbania for Marriage Pune",
description: "Urbania for Marriage Pune services help families arrange comfortable transportation for guests attending marriage ceremonies, receptions, engagement functions, and related celebrations. The schedule can be aligned with event timings and pickup points while supporting venue transfers, luggage, waiting requirements, guest coordination, and convenient return transportation."
},
{
name: "Urbania for Tourist Trip Pune",
description: "Urbania for Tourist Trip Pune services are suitable for families, friends, organized tourist parties, corporate groups, and travel associations visiting destinations across Maharashtra and other states. Customized itineraries can include sightseeing, hotel transfers, meal stops, overnight travel, luggage arrangements, destination transfers, intermediate stops, and scheduled return journeys."
},
{
name: "Premium Urbania On Rent Pune",
description: "Premium Urbania On Rent Pune services are suitable for customers seeking a refined and spacious group transportation arrangement for special occasions, family vacations, corporate programs, weddings, and tourist journeys. The vehicle can be planned around passenger requirements, route, luggage, travel duration, sightseeing schedule, accommodation transfers, and return travel."
},
{
name: "Urbania Traveller Hire Pune",
description: "Urbania Traveller Hire Pune provides a premium group travel option for families, friends, corporate teams, wedding guests, and tourists who want to travel together in a spacious vehicle. Hire arrangements can be customized around pickup points, passenger requirements, destination, luggage, sightseeing stops, trip duration, hotel transfers, and the complete travel itinerary."
}
],
tableData: [
["Urbania Rental Pune", "Spacious Urbania rental for families, corporate groups, weddings, tourists, picnics, and outstation journeys."],
["Urbania Hire Pune", "Dedicated Urbania hiring for groups seeking comfortable and premium shared transportation from Pune."],
["Urbania Booking Pune", "Advance Urbania booking for family trips, weddings, corporate programs, tourist tours, airport transfers, and group travel."],
["Force Urbania Rental Pune", "Force Urbania rental for premium family travel, corporate programs, weddings, tourist tours, and outstation journeys."],
["AC Urbania On Rent Pune", "Air-conditioned Urbania transportation for comfortable family vacations, corporate travel, weddings, tours, and long journeys."],
["Luxury Urbania Rental Pune", "Luxury Urbania rental for special occasions, corporate programs, weddings, family vacations, and organized tourist travel."],
["Urbania for Outstation Pune", "Urbania transportation for outstation vacations, pilgrimages, corporate tours, weddings, and customized tourist circuits."],
["Urbania for Family Trip Pune", "Spacious family transportation with luggage arrangements, sightseeing, hotel transfers, meal breaks, and return planning."],
["Urbania for Group Travel Pune", "Premium shared transportation for friends, relatives, associations, clubs, and organized travel parties."],
["Urbania for Corporate Events Pune", "Corporate Urbania transportation for conferences, seminars, team outings, business events, and company gatherings."],
["Urbania for Wedding Pune", "Comfortable wedding guest transportation between homes, hotels, ceremony venues, receptions, and functions."],
["Urbania for Airport Transfer Pune", "Spacious airport transportation for families, corporate teams, tourists, wedding parties, and organizations."],
["Affordable Urbania On Rent Pune", "Budget-conscious Urbania rental based on passenger requirements, route, duration, luggage, and itinerary."],
["Urbania Rental Service Pune", "Complete Urbania rental support for tours, weddings, corporate events, airport transfers, picnics, sightseeing, and outstation travel."],
["Urbania for Picnic Pune", "Premium group transportation for family picnics, office outings, friend groups, clubs, and recreational tours."],
["Urbania for Local Sightseeing Pune", "Dedicated Urbania transportation for organized sightseeing with planned pickup points, stops, and destination transfers."],
["Urbania for One Day Trip Pune", "Comfortable same-day Urbania travel with coordinated departure, sightseeing, meal breaks, and scheduled return transportation."],
["Urbania for Corporate Travel Pune", "Premium employee and business transportation for meetings, conferences, training programs, tours, and corporate outings."],
["Urbania for Marriage Pune", "Guest transportation for marriage ceremonies, receptions, engagement functions, and family wedding events."],
["Urbania for Tourist Trip Pune", "Spacious Urbania tourist transportation for customized sightseeing, family holidays, multi-day tours, and destination travel."],
["Premium Urbania On Rent Pune", "Premium Urbania rental for special occasions, corporate travel, family vacations, weddings, and organized tourist programs."],
["Urbania Traveller Hire Pune", "Spacious Urbania Traveller hiring for families, corporate teams, wedding groups, tourists, and customized group journeys."]
],
whychoose: [
{
WhyChooseheading: "Spacious Urbania Travel",
WhyChoosedescription: "Force Urbania provides a practical premium transportation solution for groups that need more space than a regular car or smaller vehicle. It is suitable for families, corporate teams, wedding parties, tourist groups, friends, and organizations that prefer to travel together with convenient passenger and luggage arrangements."
},
{
WhyChooseheading: "Comfortable AC Option",
WhyChoosedescription: "AC Urbania arrangements can be considered for longer road journeys and travel programs where a comfortable environment is important. This option works well for family vacations, corporate events, weddings, airport transfers, tourist tours, and multi-day outstation trips from Pune."
},
{
WhyChooseheading: "Premium Group Experience",
WhyChoosedescription: "Luxury and premium Urbania options are suitable for groups looking for a more refined shared transportation experience during important occasions and planned journeys. Corporate events, wedding functions, family celebrations, special trips, and tourist programs can all benefit from a spacious premium vehicle."
},
{
WhyChooseheading: "Outstation Journey Support",
WhyChoosedescription: "Urbania transportation can be arranged from Pune for destinations across Maharashtra and other states, supporting family vacations, pilgrimages, corporate tours, weddings, and tourist circuits. The journey can include sightseeing stops, hotel transfers, meal breaks, overnight travel, luggage arrangements, and planned return transportation."
},
{
WhyChooseheading: "Suitable for Different Groups",
WhyChoosedescription: "Urbania is useful for families, friends, corporate teams, wedding guests, tourist groups, event participants, and organized travel parties with varying transportation requirements. Having one dedicated vehicle makes it easier to coordinate common pickup times, luggage, destination transfers, sightseeing stops, and return schedules."
},
{
WhyChooseheading: "Flexible Itinerary Planning",
WhyChoosedescription: "The Urbania journey can be structured according to the group's actual itinerary, including pickup locations, destinations, intermediate stops, sightseeing plans, hotel transfers, meal breaks, waiting periods, overnight travel, and final drop points. This flexibility supports both straightforward transfers and customized multi-stop tours."
},
{
WhyChooseheading: "Useful for Special Occasions",
WhyChoosedescription: "Urbania rental can support weddings, marriage functions, corporate gatherings, family celebrations, tourist programs, airport transfers, picnics, and organized events. A dedicated premium vehicle helps keep passengers together while making group movement easier to coordinate before, during, and after the occasion."
},
{
WhyChooseheading: "Organized Pune Pickup",
WhyChoosedescription: "Group travel can be coordinated around suitable Pune pickup locations according to passenger requirements and scheduled departure times. Organized boarding helps passengers begin their journey together, simplifies luggage coordination, and creates a structured travel plan before continuing toward the selected destination."
}
]
};










const faqData = [
{
question: "What is included when arranging an Urbania on rent in Pune?",
answer: "Urbania rental arrangements can be planned according to the group's pickup point, destination, travel date, passenger count, journey duration, and itinerary. Ruturaj Enterprises can coordinate Urbania travel for family tours, corporate programs, wedding functions, airport transfers, sightseeing trips, pilgrimage journeys, and outstation travel based on the transportation requirements shared by the group."
},
{
question: "How many people can travel in a rented Urbania?",
answer: "Urbania vehicles are available in different seating configurations, so the appropriate option depends on the exact passenger requirement. When planning the rental, the group size, luggage, route, and travel duration can be considered to identify a suitable seating arrangement rather than selecting a vehicle only by the number of travelers."
},
{
question: "Can Urbania be rented for a weekend trip from Pune?",
answer: "A rented Urbania can be arranged for weekend getaways and short outstation tours from Pune. The journey may include one or more destinations, sightseeing stops, meal breaks, and return travel. A dedicated vehicle also allows the group to follow a common schedule without coordinating several separate cars."
},
{
question: "Is Urbania On Rent Pune available for long-distance tours?",
answer: "Long-distance group tours can be organized using an Urbania from Pune for destinations within Maharashtra and across state borders. Multi-day itineraries can be planned around sightseeing, rest periods, overnight stays, luggage requirements, and return travel, making the arrangement suitable for extended family, corporate, or social group journeys."
},
{
question: "Can I arrange Urbania rental for a wedding or reception?",
answer: "Urbania can be used to coordinate transportation for wedding guests, relatives, and event participants. Transfers between hotels, residences, railway stations, airports, marriage venues, and reception locations can be incorporated into the schedule, helping organizers manage group movements around important ceremony timings."
},
{
question: "Can Urbania rental be used for corporate and executive group travel?",
answer: "Businesses can arrange Urbania transportation for corporate outings, conferences, meetings, team-building programs, employee events, training sessions, and executive group travel. The itinerary can be structured around multiple pickup points, business locations, event timings, and planned return travel according to the organization's schedule."
},
{
question: "Can I rent an Urbania for an airport transfer in Pune?",
answer: "Groups requiring airport transportation can use a rented Urbania when several passengers need to travel together. It can be useful for families, corporate teams, wedding guests, or tour groups carrying luggage, with pickup and drop-off timings planned around flight schedules and onward travel arrangements."
},
{
question: "Is Urbania suitable for pilgrimage and temple tours?",
answer: "Religious groups can arrange an Urbania for pilgrimage routes beginning from Pune and covering multiple temples or religious destinations. The travel plan can include darshan timings, rest breaks, meal stops, sightseeing points, and overnight halts where required, allowing the group to follow a coordinated itinerary."
},
{
question: "What should I check before renting an Urbania in Pune?",
answer: "Before finalizing the rental, consider the number of passengers, luggage requirements, travel distance, number of days, pickup and drop locations, intermediate stops, and overall itinerary. Providing complete information to Ruturaj Enterprises helps in planning an Urbania arrangement that matches the group's intended journey and schedule."
},
{
question: "Why consider Ruturaj Enterprises for Urbania On Rent Pune?",
answer: "Ruturaj Enterprises handles Urbania rental requirements for local and outstation group travel, including family tours, corporate journeys, weddings, airport transfers, sightseeing programs, pilgrimages, and special events. Transportation can be coordinated around the group's passenger count, route, luggage, travel duration, pickup points, and planned itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rahul Deshpande",
feedback:
"Our group selected an Urbania from Ruturaj Enterprises for a weekend journey from Pune. Having a dedicated vehicle made the entire trip easier to coordinate, particularly because we had several sightseeing stops and luggage to manage. Everyone could travel together and follow the same itinerary.",
rating: 5
},
{
id: 2,
name: "Miss. Shweta Patil",
feedback:
"We arranged an Urbania for our wedding guests who needed transportation between the hotel and ceremony venue. Ruturaj Enterprises coordinated the vehicle around our event schedule, which helped simplify guest transfers. Keeping the group together was especially useful during the busy wedding day.",
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
  "name": "Urbania On Rent Pune",
  "image": "https://ruturajenterprises.com/assets/images/urbania-on-rent-pune.webp",
  "description":
    "Urbania On Rent Pune for comfortable family trips, group tours, corporate travel, weddings, outstation journeys, sightseeing and special events. Ruturaj Enterprises provides Urbania rental, hire and booking services with Force Urbania, AC and luxury travel options for customers seeking spacious and premium group transportation. Urbania vehicles are suitable for weekend trips, family holidays, corporate outings, wedding guest transportation, school and college excursions, airport transfers and long-distance journeys from Pune to destinations across Maharashtra and other states, supported by experienced drivers and flexible rental plans.",
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
    "url": "https://ruturajenterprises.com/urbania-on-rent-pune"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Urbania On Rent Pune | Urbania Hire Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Urbania On Rent Pune for family trips, group travel, corporate events, weddings, outstation tours, sightseeing and airport transfers. Hire Force Urbania with AC and luxury options from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Urbania Rental Pune, Urbania Hire Pune, Urbania Booking Pune, Force Urbania Rental Pune, AC Urbania On Rent Pune, Luxury Urbania Rental Pune, Urbania for Outstation Pune, Urbania for Family Trip Pune, Urbania for Group Travel Pune, Urbania for Corporate Events Pune, Urbania for Wedding Pune, Urbania for School Trip Pune, Urbania for Picnic Pune, Urbania for Airport Pickup Pune, Affordable Urbania Rental Pune, Urbania On Rent Pune, Urbania On Rent in Pune, Urbania Rental Service Pune, Urbania Hire Service Pune, Urbania Booking Service Pune, Force Urbania On Rent Pune, Force Urbania Hire Pune, Force Urbania Booking Pune, Force Urbania Rental Service Pune, AC Urbania Pune, AC Urbania Rental Pune, AC Urbania Hire Pune, AC Urbania Booking Pune, AC Force Urbania Pune, Luxury Urbania Pune, Luxury Urbania On Rent Pune, Luxury Urbania Hire Pune, Luxury Urbania Booking Pune, Luxury Force Urbania Pune, Urbania Tourist Vehicle Pune, Urbania Tourist Rental Pune, Urbania Tourist Hire Pune, Urbania Tourist Booking Pune, Urbania Outstation Pune, Urbania Outstation Rental Pune, Urbania Outstation Hire Pune, Urbania Outstation Booking Pune, Urbania One Way Pune, Urbania One Way Rental Pune, Urbania One Way Hire Pune, Urbania One Way Booking Pune, Urbania Round Trip Pune, Urbania Round Trip Rental Pune, Urbania Round Trip Hire Pune, Urbania Round Trip Booking Pune, Urbania Local Rental Pune, Urbania Local Hire Pune, Urbania Local Booking Pune, Urbania for Family Tour Pune, Urbania for Family Travel Pune, Family Urbania Rental Pune, Family Urbania Hire Pune, Urbania for Group Tour Pune, Urbania Group Travel Pune, Group Urbania Rental Pune, Group Urbania Hire Pune, Corporate Urbania Pune, Corporate Urbania Rental Pune, Corporate Urbania Hire Pune, Corporate Urbania Booking Pune, Corporate Staff Transportation Urbania Pune, Corporate Event Urbania Pune, Event Urbania Rental Pune, Event Urbania Hire Pune, Event Urbania Booking Pune, Wedding Urbania Pune, Wedding Urbania Rental Pune, Wedding Urbania Hire Pune, Wedding Urbania Booking Pune, Wedding Guest Urbania Pune, Wedding Guest Transportation Urbania Pune, Marriage Urbania Pune, Marriage Urbania Rental Pune, Marriage Urbania Hire Pune, School Urbania Pune, School Trip Urbania Pune, School Tour Urbania Pune, College Trip Urbania Pune, College Tour Urbania Pune, Picnic Urbania Pune, Picnic Urbania Rental Pune, Picnic Urbania Hire Pune, Family Picnic Urbania Pune, Group Picnic Urbania Pune, Airport Urbania Pune, Airport Transfer Urbania Pune, Airport Pickup Urbania Pune, Airport Drop Urbania Pune, Sightseeing Urbania Pune, Sightseeing Urbania Rental Pune, Sightseeing Urbania Hire Pune, Pune City Tour Urbania Pune, Urbania for Maharashtra Tour Pune, Urbania for Weekend Trip Pune, Urbania for Holiday Trip Pune, Urbania for Temple Tour Pune, Pilgrimage Urbania Pune, Urbania for Tourist Pune, Urbania with Driver Pune, Urbania Rental with Driver Pune, Urbania Hire with Driver Pune, Urbania Booking with Driver Pune, Comfortable Urbania Pune, Premium Urbania Pune, Professional Urbania Rental Pune, Reliable Urbania Hire Pune, Urbania Transportation Pune, Group Transportation Urbania Pune, Urbania Service Pune, Urbania Rental Near Me Pune, Urbania Hire Near Me Pune, Ruturaj Enterprises Urbania Rental Pune"
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
                            <img src='/images/keyword/90.jpg' alt='img' className='img-fluid' />
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

export default Urbaniaonrentpune;