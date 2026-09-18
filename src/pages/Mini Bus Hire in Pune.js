import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Minibushirepune() {

const cardData = {
keyword: "Mini Bus Hire in Pune",
headingDescription: "Ruturaj Enterprises offers comfortable and practical mini bus hire services in Pune for families, groups, corporate teams, school tours, weddings, airport transfers, picnics, sightseeing programs, and outstation journeys. A mini bus provides a convenient way for medium-sized groups to travel together without depending on multiple cars, while offering useful passenger space, luggage capacity, and flexible trip planning. Whether the requirement is for a one-day excursion, a weekend getaway, a corporate program, or a multi-day tour across Maharashtra and nearby destinations, travelers can arrange transportation according to their route, schedule, group requirements, and preferred vehicle type.",
topPlaces: [
{
title: "Lonavala",
description: "Lonavala is a convenient road-trip destination from Pune for families, friends, school groups, and corporate teams, and a mini bus provides comfortable shared transportation for the journey. The spacious arrangement is useful for carrying passengers and luggage while allowing the group to visit viewpoints, attractions, resorts, and nearby sightseeing locations together."
},
{
title: "Goa",
description: "A Pune to Goa journey can be arranged in a mini bus when a medium-sized group wants to remain together throughout the long road trip. The vehicle provides practical seating and luggage space for family holidays, corporate outings, college groups, wedding travel, and multi-day beach itineraries with multiple planned stops."
},
{
title: "Shirdi",
description: "Travelers planning a Pune to Shirdi pilgrimage can choose a mini bus for convenient group transportation and coordinated movement. The arrangement works well for families, religious groups, senior travelers, and organized tours where passengers may also want to include nearby destinations within the same itinerary."
},
{
title: "Dapoli",
description: "Dapoli offers a relaxed coastal destination for groups traveling from Pune, and a mini bus can make the road journey more convenient for everyone. Comfortable shared transportation is particularly useful for weekend holidays, family outings, college groups, and corporate trips carrying luggage and other travel essentials."
},
{
title: "Nashik",
description: "Pune to Nashik travel is suitable for family tours, corporate visits, sightseeing programs, and group excursions, making a mini bus a practical transportation choice. Passengers can travel together while keeping space for luggage and planning additional stops around temples, nature locations, vineyards, and other attractions."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a popular hill destination for group road trips from Pune, and a mini bus provides a comfortable shared travel arrangement for medium-sized groups. It can accommodate luggage and personal belongings while supporting sightseeing plans involving viewpoints, markets, strawberry farms, resorts, and nearby Panchgani."
},
{
title: "Alibaug",
description: "A mini bus is convenient for Pune to Alibaug group journeys where families, friends, or colleagues want to travel together to the coast. The vehicle provides practical room for passengers and luggage, making it suitable for beach holidays, resort stays, weekend outings, and multi-location coastal trips."
},
{
title: "Bhandardara",
description: "Groups planning a nature-focused trip from Pune to Bhandardara can use a mini bus for convenient transportation throughout the journey. The shared vehicle is useful for families, college groups, photography teams, and corporate outings that require comfortable travel along with room for bags and outdoor essentials."
},
{
title: "Ratnagiri",
description: "Pune to Ratnagiri is a longer road journey where traveling together in a mini bus can simplify transportation for a medium-sized group. The spacious arrangement is suitable for family vacations, coastal tours, group holidays, and multi-day itineraries that include beaches, forts, local attractions, and nearby destinations."
},
{
title: "Panchgani",
description: "Panchgani provides a scenic hill-station option for groups traveling from Pune, and a mini bus allows passengers to share the entire journey in one vehicle. It is useful for family outings, school trips, corporate excursions, and one-day tours where travelers want convenient transportation between multiple sightseeing points."
}
],
services: [
{
name: "Mini Bus Rental Pune",
description: "Mini bus rental in Pune provides a practical transportation solution for medium-sized groups that need comfortable shared travel without arranging several individual cars. Ruturaj Enterprises can support family journeys, corporate programs, school excursions, weddings, sightseeing plans, airport movements, and longer trips according to the required route and duration."
},
{
name: "Mini Bus On Rent Pune",
description: "A mini bus on rent in Pune is suitable for groups that want convenient transportation for day trips, events, tours, and intercity journeys. The spacious passenger arrangement helps keep the group together while providing useful room for luggage, travel bags, and other essentials required during the trip."
},
{
name: "Mini Bus Booking Pune",
description: "Mini bus booking in Pune allows travelers to organize group transportation in advance around their travel date, pickup location, destination, and expected journey duration. Advance planning can be especially helpful for school trips, weddings, corporate events, airport schedules, family holidays, and multi-day tours where coordinated transportation is important."
},
{
name: "AC Mini Bus Hire Pune",
description: "AC mini bus hire in Pune offers a comfortable air-conditioned environment for group travel, particularly during warm weather and longer road journeys. The service is useful for families, corporate teams, school groups, tourists, and event participants who want to travel together with a comfortable cabin throughout the route."
},
{
name: "Non AC Mini Bus Hire Pune",
description: "Non AC mini bus hire in Pune can be considered by groups looking for a practical transportation arrangement for suitable weather conditions and budget-conscious journeys. It provides shared seating and useful passenger capacity for local trips, educational outings, picnics, sightseeing programs, and selected outstation travel requirements."
},
{
name: "Luxury Mini Bus Hire Pune",
description: "Luxury mini bus hire in Pune is designed for travelers who want enhanced comfort and a more premium group transportation experience. It can be arranged for corporate events, wedding functions, executive group movement, special occasions, family tours, and important guest transfers where comfortable presentation and convenient travel are both required."
},
{
name: "Mini Bus for Outstation Pune",
description: "Mini bus for outstation Pune travel is a convenient choice for medium-sized groups traveling to destinations across Maharashtra and nearby states. The vehicle allows passengers to remain together during extended highway journeys while providing practical space for luggage, making it suitable for holidays, tours, pilgrimages, and group excursions."
},
{
name: "Mini Bus for Family Trip Pune",
description: "Families planning a group vacation from Pune can choose a mini bus to keep relatives and family members together throughout the journey. The arrangement is useful for hill-station trips, religious visits, beach holidays, weekend getaways, and multi-day tours where passengers need comfortable seating and space for personal luggage."
},
{
name: "Mini Bus for Group Travel Pune",
description: "Mini bus for group travel in Pune provides an organized transportation option for friends, relatives, community groups, and other medium-sized travel parties. Instead of coordinating several separate cars, passengers can share one vehicle and plan common pickup points, destinations, sightseeing stops, and return schedules."
},
{
name: "Mini Bus for Corporate Events Pune",
description: "Corporate events can use mini bus transportation in Pune for employee movement, team outings, conferences, meetings, exhibitions, seminars, and company programs. Coordinated group travel helps move participants between offices, hotels, event venues, restaurants, and other scheduled locations according to the planned itinerary."
},
{
name: "Mini Bus for Wedding Pune",
description: "A mini bus for wedding travel in Pune is useful for transporting relatives, guests, friends, and family members between homes, hotels, wedding venues, and related functions. Shared transportation helps simplify guest movement when several people need to reach the same destination according to a coordinated event schedule."
},
{
name: "Mini Bus for School Trip Pune",
description: "Mini bus transportation for school trips from Pune can support educational visits, nature excursions, historical tours, activity programs, and recreational outings for organized student groups. Trip planning can be coordinated around the school schedule, destination, pickup points, sightseeing requirements, and expected return time."
},
{
name: "Mini Bus for Airport Pickup Pune",
description: "Mini bus for airport pickup in Pune is suitable when several passengers or a travel group need to reach the airport together with their luggage. The service can be useful for families returning from trips, corporate teams, wedding guests, tour groups, and visitors who require coordinated transportation between the airport and their next destination."
},
{
name: "Affordable Mini Bus Hire Pune",
description: "Affordable mini bus hire in Pune offers groups a practical way to manage shared transportation while avoiding the need for several individual vehicles. It can be considered for family outings, school programs, picnics, sightseeing, corporate travel, weddings, and other journeys where group convenience and controlled transportation costs are important."
},
{
name: "Mini Bus Hire Service Pune",
description: "Mini bus hire service in Pune supports different journey types ranging from short local requirements to full-day and multi-day travel programs. Travelers can plan transportation around the group size, pickup points, destinations, route requirements, travel dates, and duration to create a convenient arrangement for their specific itinerary."
},
{
name: "Mini Bus for Picnic Pune",
description: "Mini bus for picnic trips from Pune provides a comfortable shared option for families, friends, school groups, and colleagues traveling with food, bags, sports equipment, and other outing essentials. The vehicle is suitable for resorts, nature locations, amusement destinations, lakeside spots, and planned day-long recreational journeys."
},
{
name: "Mini Bus for Local Sightseeing Pune",
description: "Mini bus for local sightseeing in Pune is useful for groups that want to visit multiple locations together without depending on separate cars. It can support organized sightseeing programs with several planned stops, making it suitable for families, visitors, student groups, corporate teams, and social organizations."
},
{
name: "Mini Bus for One Day Trip Pune",
description: "A mini bus for a one day trip from Pune is convenient for groups planning a complete same-day round journey to a nearby destination. Comfortable shared transportation can support hill-station visits, religious trips, nature outings, sightseeing programs, and family excursions where the group plans to return within the same day."
},
{
name: "Mini Bus for Corporate Travel Pune",
description: "Mini bus for corporate travel in Pune can be arranged for employee transportation, business meetings, client visits, training programs, conferences, office outings, and intercity professional journeys. Keeping team members together in one vehicle can simplify movement between offices, hotels, airports, and scheduled business locations."
},
{
name: "Mini Bus for Marriage Function Pune",
description: "Mini bus transportation for marriage functions in Pune is suitable for relatives, guests, friends, and family members who need coordinated movement between different wedding locations. The service can support hotel transfers, venue transportation, family gatherings, reception movements, and other scheduled functions where group travel is required."
},
{
name: "Mini Bus for Tourist Trip Pune",
description: "Tourist groups can hire a mini bus from Pune for sightseeing tours covering hill stations, beaches, heritage locations, religious destinations, and nature attractions. Shared transportation provides a convenient way to keep the group together while accommodating luggage and supporting itineraries with multiple destinations."
},
{
name: "Mini Bus for Outstation Tour Pune",
description: "Mini bus for outstation tours from Pune is suitable for medium-sized groups planning extended road journeys across Maharashtra and nearby regions. The vehicle provides practical seating and luggage space for weekend vacations, pilgrimage tours, family holidays, corporate outings, and multi-day sightseeing programs."
}
],
tableData: [
["Mini Bus Rental Pune", "Comfortable mini bus rental for medium-sized groups, family journeys, corporate programs, events, and outstation travel."],
["Mini Bus On Rent Pune", "Practical mini bus rental option for day trips, group outings, tours, events, and intercity journeys."],
["Mini Bus Booking Pune", "Advance booking facility for planned group journeys with coordinated dates, pickup points, destinations, and trip duration."],
["AC Mini Bus Hire Pune", "Air-conditioned mini bus hire providing a comfortable cabin for group travel and longer road journeys."],
["Non AC Mini Bus Hire Pune", "Practical non-air-conditioned mini bus option for suitable weather conditions and budget-conscious group transportation."],
["Luxury Mini Bus Hire Pune", "Premium mini bus hire for corporate events, weddings, executive groups, special occasions, and important guest travel."],
["Mini Bus for Outstation Pune", "Shared transportation for medium-sized groups traveling to destinations across Maharashtra and nearby states."],
["Mini Bus for Family Trip Pune", "Spacious group vehicle for family vacations, religious journeys, hill stations, beaches, and weekend getaways."],
["Mini Bus for Group Travel Pune", "Convenient transportation that keeps friends, relatives, and other medium-sized groups together during the journey."],
["Mini Bus for Corporate Events Pune", "Organized group transportation for conferences, meetings, exhibitions, seminars, and company events."],
["Mini Bus for Wedding Pune", "Convenient wedding transportation for relatives, guests, family members, hotels, venues, and related functions."],
["Mini Bus for School Trip Pune", "Group transportation for educational visits, recreational outings, nature trips, and organized school excursions."],
["Mini Bus for Airport Pickup Pune", "Comfortable airport transportation for families, corporate groups, wedding guests, and travelers carrying luggage."],
["Affordable Mini Bus Hire Pune", "Budget-conscious group transportation for outings, picnics, sightseeing, events, and selected outstation journeys."],
["Mini Bus Hire Service Pune", "Flexible hire service for local trips, full-day travel, airport transfers, sightseeing, and multi-day group tours."],
["Mini Bus for Picnic Pune", "Spacious transportation for picnics with room for passengers, bags, food, sports equipment, and outing essentials."],
["Mini Bus for Local Sightseeing Pune", "Convenient multi-stop sightseeing transportation for families, visitors, student groups, and corporate teams."],
["Mini Bus for One Day Trip Pune", "Shared transportation for same-day round trips to nearby hill stations, religious places, nature spots, and attractions."],
["Mini Bus for Corporate Travel Pune", "Professional group transportation for employees, meetings, training programs, client visits, and business journeys."],
["Mini Bus for Marriage Function Pune", "Coordinated guest transportation for marriage functions, hotel transfers, venues, receptions, and family gatherings."],
["Mini Bus for Tourist Trip Pune", "Comfortable group travel for tourist routes covering beaches, hills, heritage attractions, religious destinations, and nature spots."],
["Mini Bus for Outstation Tour Pune", "Spacious transportation for weekend vacations, pilgrimage tours, family holidays, corporate outings, and multi-day road trips."]
],
whychoose: [
{
WhyChooseheading: "Convenient Group Transportation",
WhyChoosedescription: "A mini bus allows a medium-sized group to travel together instead of coordinating several individual cars for the same journey. This makes pickup planning, route coordination, luggage handling, and arrival arrangements more convenient for families, friends, organizations, and professional teams."
},
{
WhyChooseheading: "Comfort for Extended Journeys",
WhyChoosedescription: "Long road trips require sufficient passenger space and a practical travel environment, especially when the journey covers several hours or multiple destinations. A suitable mini bus provides shared seating and useful luggage capacity for outstation tours, family holidays, school excursions, and corporate travel."
},
{
WhyChooseheading: "Options for Different Travel Needs",
WhyChoosedescription: "Travel requirements can range from simple day outings to premium event transportation and extended road tours. Mini bus arrangements can therefore be planned for AC or non-AC requirements, family trips, corporate programs, weddings, school journeys, airport transfers, sightseeing, and other group travel purposes."
},
{
WhyChooseheading: "Useful for Events and Functions",
WhyChoosedescription: "Weddings, corporate events, school programs, and social gatherings often require several passengers to move according to a common schedule. A mini bus provides a coordinated transportation solution that can connect hotels, homes, venues, offices, airports, and other locations included in the event itinerary."
},
{
WhyChooseheading: "Practical for Outstation Tours",
WhyChoosedescription: "For destinations outside Pune, traveling together can make the journey easier to organize while allowing passengers to carry their luggage in one vehicle. The mini bus is suitable for hill stations, coastal destinations, religious places, nature locations, and multi-day Maharashtra road tours."
},
{
WhyChooseheading: "Flexible Itinerary Planning",
WhyChoosedescription: "Group journeys often include multiple stops, sightseeing points, meal breaks, hotel transfers, or scheduled events, so transportation needs to match the itinerary. Pickup locations, destinations, travel duration, and planned stops can be considered while arranging the mini bus for a more organized journey."
},
{
WhyChooseheading: "Suitable for Families and Organizations",
WhyChoosedescription: "The mini bus format works across both personal and organized travel requirements, making it useful for families, friends, schools, companies, tour groups, and social organizations. Shared transportation can help maintain group coordination while providing a practical alternative to arranging numerous separate vehicles."
},
{
WhyChooseheading: "Travel Support from Pune",
WhyChoosedescription: "Ruturaj Enterprises supports mini bus travel requirements starting from Pune for local journeys, airport transfers, sightseeing, events, and destinations across Maharashtra and nearby regions. With route and schedule planning based on the group's requirements, travelers can arrange transportation suited to their specific journey."
}
]
};















const faqData = [
{
question: "How can I hire a mini bus in Pune?",
answer: "A mini bus can be hired in Pune by sharing your pickup location, destination, travel date, passenger count, journey duration, and preferred timings. Ruturaj Enterprises can coordinate suitable mini bus transportation for local travel, family functions, corporate programs, school outings, sightseeing tours, weddings, events, and planned outstation journeys."
},
{
question: "What types of trips are suitable for a mini bus hire in Pune?",
answer: "Mini bus hire is suitable for group transportation where a regular car or multiple small vehicles may not be convenient. It can be arranged for family tours, corporate travel, school and college trips, weddings, social functions, sightseeing programs, religious journeys, airport transfers, picnics, and group excursions from Pune."
},
{
question: "Can I hire a mini bus from Pune for an outstation trip?",
answer: "Outstation mini bus travel can be arranged from Pune for destinations across Maharashtra and other states, depending on the planned route. Groups can use the vehicle for weekend trips, multi-day tours, family vacations, pilgrimage journeys, corporate travel, sightseeing programs, and other journeys that require transportation for several passengers."
},
{
question: "Is a mini bus suitable for family functions and gatherings?",
answer: "For family functions involving several relatives or guests, a mini bus provides a practical way to keep the group together during transportation. It can be planned for weddings, receptions, engagement ceremonies, anniversaries, family gatherings, religious programs, and transfers between homes, hotels, venues, railway stations, or other locations."
},
{
question: "Can I hire a mini bus for corporate events in Pune?",
answer: "Corporate groups can arrange mini bus transportation for conferences, employee programs, business meetings, office outings, training sessions, exhibitions, site visits, and company events. Pickup points and travel schedules can be coordinated according to employee locations, reporting times, event venues, and the overall corporate itinerary."
},
{
question: "Can a mini bus be hired for school or college trips?",
answer: "Mini bus hire can be considered for educational outings, school excursions, college tours, industrial visits, sports events, and student group programs. The journey can be planned around the institution's pickup points, destination, scheduled activities, rest breaks, and return timing while keeping the student group organized during transportation."
},
{
question: "Can I use a mini bus for sightseeing around Pune?",
answer: "Groups can use a mini bus for sightseeing programs covering multiple attractions and planned stops around Pune and nearby destinations. The itinerary may include forts, temples, historical locations, scenic areas, cultural attractions, and other points of interest while allowing the group to travel together according to the day's schedule."
},
{
question: "What details are required to hire a mini bus in Pune?",
answer: "To arrange a mini bus, it is helpful to provide the pickup location, destination, travel date, number of passengers, luggage requirements, journey duration, intermediate stops, and preferred departure and return timings. Complete itinerary details allow Ruturaj Enterprises to plan the transportation according to the group's specific requirements."
},
{
question: "Can a mini bus be hired for weddings and events in Pune?",
answer: "Wedding and event transportation can be organized with a mini bus when multiple guests need coordinated transfers. The vehicle can be scheduled between hotels, homes, banquet halls, wedding venues, reception locations, railway stations, and airports according to ceremony timings and the movement plan prepared for the event."
},
{
question: "Why choose Ruturaj Enterprises for Mini Bus Hire in Pune?",
answer: "Ruturaj Enterprises coordinates mini bus transportation for corporate programs, family functions, school trips, weddings, sightseeing, picnics, religious tours, local travel, and outstation journeys. Rental arrangements can be planned around passenger requirements, pickup points, destinations, travel duration, intermediate stops, and the complete group itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Nilesh Jadhav",
feedback:
"We hired a mini bus from Ruturaj Enterprises for a family function in Pune where several relatives needed transportation between different locations. Keeping everyone together in one vehicle made the transfers much easier to coordinate, especially around the function timings and venue changes.",
rating: 5
},
{
id: 2,
name: "Miss. Sneha Kulkarni",
feedback:
"I arranged a mini bus through Ruturaj Enterprises for a group sightseeing trip from Pune. The vehicle was a convenient choice for our group, and having shared transportation made it simpler to manage the day's pickup schedule, sightseeing stops, and return journey without arranging several separate cars.",
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
  "name": "Mini Bus Hire in Pune",
  "image": "https://ruturajenterprises.com/assets/images/mini-bus-hire-in-pune.webp",
  "description":
    "Mini Bus Hire in Pune for comfortable local and outstation transportation, family trips, group tours, corporate events, weddings, school trips, picnics, sightseeing and airport transfers. Ruturaj Enterprises provides mini bus rental, hire and booking services with AC, non-AC and luxury options for different group travel requirements. With spacious seating, experienced drivers and flexible rental plans, mini buses are suitable for one-day tours, weekend getaways, multi-day journeys, corporate transportation, wedding guest transfers, educational excursions and group travel from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/mini-bus-hire-in-pune"
  }
};








    return (
        <div>
<Helmet>
  <title>
    Mini Bus Hire in Pune | Mini Bus Booking Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Mini Bus Hire in Pune for outstation trips, family tours, group travel, corporate events, weddings, school trips, airport transfers and sightseeing. Hire AC, non-AC and luxury mini buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Mini Bus Rental Pune, Mini Bus On Rent Pune, Mini Bus Booking Pune, AC Mini Bus Hire Pune, Non AC Mini Bus Hire Pune, Luxury Mini Bus Hire Pune, Mini Bus for Outstation Pune, Mini Bus for Family Trip Pune, Mini Bus for Group Travel Pune, Mini Bus for Corporate Events Pune, Mini Bus for Wedding Pune, Mini Bus for School Trip Pune, Mini Bus for Airport Pickup Pune, Affordable Mini Bus Hire Pune, Mini Bus Hire Service Pune, Mini Bus Rental Service Pune, Mini Bus Booking Service Pune, Mini Bus Hire in Pune, Mini Bus Rental in Pune, Mini Bus Booking in Pune, Mini Bus on Rent in Pune, AC Mini Bus Pune, AC Mini Bus Rental Pune, AC Mini Bus On Rent Pune, AC Mini Bus Booking Pune, Non AC Mini Bus Pune, Non AC Mini Bus Rental Pune, Non AC Mini Bus On Rent Pune, Non AC Mini Bus Booking Pune, Luxury Mini Bus Pune, Luxury Mini Bus Rental Pune, Luxury Mini Bus On Rent Pune, Luxury Mini Bus Booking Pune, Tourist Mini Bus Pune, Tourist Mini Bus Rental Pune, Tourist Mini Bus Hire Pune, Tourist Mini Bus Booking Pune, Mini Bus for Tourist Pune, Outstation Mini Bus Pune, Outstation Mini Bus Rental Pune, Outstation Mini Bus Hire Pune, Outstation Mini Bus Booking Pune, One Way Mini Bus Pune, One Way Mini Bus Rental Pune, One Way Mini Bus Hire Pune, One Way Mini Bus Booking Pune, Round Trip Mini Bus Pune, Round Trip Mini Bus Rental Pune, Round Trip Mini Bus Hire Pune, Round Trip Mini Bus Booking Pune, Local Mini Bus Pune, Local Mini Bus Rental Pune, Local Mini Bus Hire Pune, Local Mini Bus Booking Pune, Mini Bus for Family Tour Pune, Mini Bus for Family Travel Pune, Family Mini Bus Rental Pune, Family Mini Bus Hire Pune, Mini Bus for Group Tour Pune, Group Mini Bus Rental Pune, Group Mini Bus Hire Pune, Group Travel Mini Bus Pune, Corporate Mini Bus Pune, Corporate Mini Bus Rental Pune, Corporate Mini Bus Hire Pune, Corporate Mini Bus Booking Pune, Corporate Staff Transportation Mini Bus Pune, Corporate Event Mini Bus Pune, Event Mini Bus Rental Pune, Event Mini Bus Hire Pune, Event Mini Bus Booking Pune, Wedding Mini Bus Pune, Wedding Mini Bus Rental Pune, Wedding Mini Bus Hire Pune, Wedding Mini Bus Booking Pune, Wedding Guest Mini Bus Pune, Wedding Guest Transportation Mini Bus Pune, Marriage Mini Bus Pune, Marriage Mini Bus Rental Pune, Marriage Mini Bus Hire Pune, School Mini Bus Pune, School Trip Mini Bus Pune, School Tour Mini Bus Pune, School Bus Rental Pune, College Trip Mini Bus Pune, College Tour Mini Bus Pune, Picnic Mini Bus Pune, Picnic Mini Bus Rental Pune, Picnic Mini Bus Hire Pune, Family Picnic Mini Bus Pune, Group Picnic Mini Bus Pune, Airport Mini Bus Pune, Airport Transfer Mini Bus Pune, Airport Pickup Mini Bus Pune, Airport Drop Mini Bus Pune, Sightseeing Mini Bus Pune, Sightseeing Mini Bus Rental Pune, Sightseeing Mini Bus Hire Pune, Pune City Tour Mini Bus Pune, Mini Bus for Maharashtra Tour Pune, Mini Bus for Weekend Trip Pune, Mini Bus for Holiday Trip Pune, Mini Bus for Temple Tour Pune, Pilgrimage Mini Bus Pune, Mini Bus with Driver Pune, Mini Bus Rental with Driver Pune, Mini Bus Hire with Driver Pune, Mini Bus Booking with Driver Pune, Comfortable Mini Bus Pune, Premium Mini Bus Pune, Professional Mini Bus Hire Pune, Reliable Mini Bus Rental Pune, Mini Bus Transportation Pune, Group Transportation Mini Bus Pune, Mini Bus Service Pune, Mini Bus Rental Near Me Pune, Mini Bus Hire Near Me Pune, Ruturaj Enterprises Mini Bus Hire Pune"
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
                            <img src='/images/keyword/97.jpg' alt='img' className='img-fluid' />
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

export default Minibushirepune;