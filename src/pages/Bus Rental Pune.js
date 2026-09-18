import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Busrentalpune() {

const cardData = {
keyword: "Bus Rental Pune",
headingDescription: "Ruturaj Enterprises provides reliable and convenient bus rental services in Pune for families, friends, schools, corporate teams, wedding groups, tourists, and other organized travel parties. A bus is a practical choice when multiple passengers need to travel together with comfortable seating, useful luggage space, and coordinated pickup and drop arrangements instead of using several separate cars. From local sightseeing and airport transfers to one-day excursions, family holidays, corporate programs, weddings, school trips, picnics, and longer journeys across Maharashtra and nearby states, bus rental arrangements can be planned according to passenger requirements, destination, route, travel duration, and itinerary.",
topPlaces: [
{
title: "Malshej Ghat",
description: "Malshej Ghat is a scenic destination for group outings from Pune, especially during family holidays, college trips, corporate excursions, and nature-focused journeys. A rented bus provides convenient shared transportation for passengers carrying bags and travel essentials while allowing the group to explore viewpoints, waterfalls, and nearby attractions together."
},
{
title: "Goa",
description: "Pune to Goa is a popular long-distance road journey where a bus can provide comfortable shared transportation for larger groups. The spacious arrangement is useful for family vacations, corporate tours, student groups, wedding travel, and multi-day holidays where passengers need room for luggage throughout the journey."
},
{
title: "Shirdi",
description: "Groups traveling from Pune to Shirdi for pilgrimage and religious tours can benefit from coordinated bus transportation. Families, relatives, and organized groups can remain together throughout the journey while carrying luggage and planning temple visits or nearby destinations according to their travel schedule."
},
{
title: "Kashid",
description: "Kashid offers a relaxing coastal getaway from Pune for families, friends, and organized groups, and a bus makes shared travel convenient for the entire party. The vehicle can accommodate passengers and luggage while supporting weekend beach holidays, resort stays, picnic plans, and multi-stop coastal itineraries."
},
{
title: "Nashik",
description: "Pune to Nashik journeys are suitable for family tours, corporate visits, religious travel, sightseeing, and organized group programs. A bus rental allows passengers to travel together while providing practical space for luggage and making it easier to coordinate visits to temples, nature attractions, vineyards, and other planned locations."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a popular hill destination for group travel from Pune, and a bus offers a convenient way for families, friends, and organizations to make the journey together. Comfortable shared transportation is useful for sightseeing around viewpoints, markets, resorts, strawberry farms, and nearby Panchgani."
},
{
title: "Ratnagiri",
description: "Pune to Ratnagiri is a longer coastal route where bus rental can simplify transportation for families, tourist groups, and organized travel parties. The vehicle provides useful passenger and luggage capacity for multi-day journeys involving beaches, forts, local attractions, and nearby coastal destinations."
},
{
title: "Bhandardara",
description: "Bhandardara is well suited for nature trips, weekend outings, and group excursions from Pune, making a rented bus a practical transportation choice. Families, friends, school groups, and corporate teams can travel together with room for bags and outdoor essentials while visiting scenic locations around the destination."
},
{
title: "Kolhapur",
description: "Pune to Kolhapur travel can be arranged by bus for family visits, religious journeys, corporate programs, tourist tours, and group excursions. Shared transportation keeps passengers together during the road trip and provides a convenient setup for carrying luggage and visiting multiple attractions around Kolhapur."
},
{
title: "Diveagar",
description: "Diveagar provides a peaceful coastal destination for groups traveling from Pune, and a bus can make the journey easier to coordinate for families and friends. The spacious group arrangement is suitable for beach holidays, weekend trips, picnics, resort stays, and travel plans involving additional coastal stops."
}
],
services: [
{
name: "Bus On Rent Pune",
description: "Bus on rent in Pune provides a practical group transportation option for families, friends, schools, companies, wedding parties, tourists, and organized travel groups. Ruturaj Enterprises can support local and long-distance requirements with arrangements based on the passenger count, route, pickup points, destination, travel duration, and planned itinerary."
},
{
name: "Bus Hire Pune",
description: "Bus hire in Pune is suitable for travelers who want to keep a group together while enjoying convenient seating and useful luggage capacity. The service can support family holidays, corporate travel, school excursions, weddings, picnics, sightseeing programs, airport transfers, and extended road journeys."
},
{
name: "Bus Booking Pune",
description: "Bus booking in Pune allows groups to organize transportation in advance around their preferred travel date, pickup location, destination, and journey duration. Advance planning is particularly useful for weddings, school trips, corporate events, holiday tours, airport schedules, and multi-day travel where coordinated transportation is required."
},
{
name: "Bus Rental Service Pune",
description: "Bus rental service in Pune supports a wide range of group transportation needs, from short local journeys to full-day excursions and multi-day outstation tours. Travel arrangements can be planned according to group size, destination, route, schedule, luggage requirements, and the type of trip being organized."
},
{
name: "AC Bus Rental Pune",
description: "AC bus rental in Pune offers a comfortable air-conditioned environment for passengers traveling together, particularly during warm weather and extended road journeys. It is suitable for family tours, corporate programs, school trips, wedding functions, tourist groups, airport transfers, and long-distance travel where cabin comfort is important."
},
{
name: "Non AC Bus Rental Pune",
description: "Non AC bus rental in Pune can be considered for groups seeking a practical transportation arrangement for suitable weather conditions and selected travel requirements. It provides shared passenger space for picnics, school outings, local sightseeing, family trips, events, and other group journeys where a straightforward bus setup is preferred."
},
{
name: "Luxury Bus Rental Pune",
description: "Luxury bus rental in Pune is suitable for groups looking for a more premium travel environment for special occasions and important journeys. It can be arranged for corporate events, weddings, executive group travel, family celebrations, destination tours, and guest transportation where enhanced comfort and presentation are valued."
},
{
name: "Bus for Outstation Pune",
description: "Bus for outstation travel from Pune is a convenient option for groups heading toward destinations across Maharashtra and nearby states. The shared vehicle helps passengers travel together during longer highway journeys while providing practical room for luggage, making it useful for holidays, pilgrimages, tours, and organized excursions."
},
{
name: "Bus for Family Trip Pune",
description: "Families planning a group vacation from Pune can use a bus when relatives and family members want to travel together in one vehicle. It is useful for hill stations, beaches, religious destinations, nature trips, weekend getaways, and multi-day holidays where passengers may carry luggage and other personal belongings."
},
{
name: "Bus for Group Travel Pune",
description: "Bus for group travel in Pune provides an organized alternative to arranging several individual cars for friends, relatives, community groups, or other travel parties. Shared transportation keeps passengers together while simplifying pickup coordination, luggage handling, route planning, sightseeing stops, and return travel arrangements."
},
{
name: "Bus for Corporate Events Pune",
description: "Bus for corporate events in Pune can support conferences, meetings, seminars, exhibitions, employee outings, annual functions, training programs, and company gatherings. Group transportation can connect offices, hotels, airports, resorts, and event venues according to the company's planned schedule and transportation requirements."
},
{
name: "Bus for Wedding Pune",
description: "Bus for wedding travel in Pune is useful for transporting relatives, friends, family members, and invited guests between homes, hotels, ceremony venues, reception halls, and other wedding locations. A shared vehicle helps simplify guest movement during marriage celebrations and can be planned around different functions and event timings."
},
{
name: "Bus for School Trip Pune",
description: "Bus for school trips from Pune provides organized transportation for educational visits, nature excursions, historical tours, recreational outings, and activity programs. Travel planning can be coordinated around the school itinerary, designated pickup points, destination requirements, sightseeing schedule, and expected return time."
},
{
name: "Bus for Airport Pickup Pune",
description: "Bus for airport pickup in Pune is suitable when several passengers, family members, corporate teams, or tour groups need to reach the airport together with their luggage. The service can support airport-to-hotel, airport-to-office, and airport-to-home transfers while helping groups coordinate transportation around their flight schedules."
},
{
name: "Affordable Bus Rental Pune",
description: "Affordable bus rental in Pune provides groups with a practical way to manage shared transportation without arranging multiple individual vehicles. It can suit family outings, school programs, picnics, sightseeing, weddings, corporate events, tourist tours, and selected outstation journeys where group convenience and transportation planning are important."
},
{
name: "Bus Rental Service Provider Pune",
description: "A bus rental service provider in Pune can support transportation planning for different group sizes, destinations, and travel purposes. Ruturaj Enterprises can arrange group travel requirements around pickup locations, routes, dates, trip duration, event schedules, and destination plans for families, companies, schools, tourists, and event organizers."
},
{
name: "Bus for Picnic Pune",
description: "Bus for picnic trips from Pune is convenient for families, friends, school groups, and colleagues carrying food, bags, outdoor equipment, and other outing essentials. The shared vehicle is suitable for resorts, nature destinations, amusement locations, lakeside areas, and planned day-long recreational journeys."
},
{
name: "Bus for Local Sightseeing Pune",
description: "Bus for local sightseeing in Pune provides convenient group transportation for itineraries involving multiple planned stops and attractions. Families, visitors, school groups, corporate teams, and social organizations can use one vehicle to travel between sightseeing points without depending on several separate cars."
},
{
name: "Bus for One Day Trip Pune",
description: "Bus for a one day trip from Pune is useful for groups planning a complete same-day round journey to a nearby destination. It can support hill-station visits, religious tours, nature outings, picnics, sightseeing programs, and family excursions where the group plans to return to Pune within the same day."
},
{
name: "Bus for Corporate Travel Pune",
description: "Bus for corporate travel in Pune can support employee transportation, business meetings, client visits, conferences, training programs, office outings, and intercity professional journeys. Keeping team members together in one vehicle helps simplify movement between offices, hotels, airports, event venues, and other scheduled business locations."
},
{
name: "Bus for Marriage Function Pune",
description: "Bus for marriage functions in Pune is suitable for relatives, guests, friends, and family members traveling between homes, hotels, wedding venues, reception locations, and related functions. Group transportation can be coordinated around ceremony timings and pickup points to provide a more organized travel arrangement during the celebration."
},
{
name: "Bus for Tourist Trip Pune",
description: "Bus for tourist trips from Pune is suitable for groups exploring hill stations, beaches, heritage locations, religious destinations, nature attractions, and other travel routes. Shared transportation allows passengers to remain together throughout the journey while carrying luggage and following itineraries that may include several sightseeing stops."
}
],
tableData: [
["Bus On Rent Pune", "Practical bus rental for families, friends, schools, companies, wedding groups, tourists, and organized travel parties."],
["Bus Hire Pune", "Convenient group bus hire for family holidays, corporate travel, school trips, weddings, picnics, and outstation journeys."],
["Bus Booking Pune", "Advance booking arrangements based on travel dates, pickup points, destinations, group size, and journey duration."],
["Bus Rental Service Pune", "Flexible bus rental service for local travel, day trips, sightseeing, events, airport transfers, and multi-day tours."],
["AC Bus Rental Pune", "Air-conditioned bus option for comfortable group travel during local and extended road journeys."],
["Non AC Bus Rental Pune", "Practical non-air-conditioned bus option for suitable weather conditions and selected group travel requirements."],
["Luxury Bus Rental Pune", "Premium group transportation for corporate events, weddings, executive travel, family celebrations, and special tours."],
["Bus for Outstation Pune", "Shared transportation for long-distance routes across Maharashtra and nearby states with practical luggage space."],
["Bus for Family Trip Pune", "Group bus transportation for family vacations, religious journeys, hill stations, beaches, and weekend getaways."],
["Bus for Group Travel Pune", "Convenient shared vehicle for friends, relatives, community groups, and organized travel parties."],
["Bus for Corporate Events Pune", "Organized transportation for conferences, meetings, seminars, exhibitions, annual events, and employee outings."],
["Bus for Wedding Pune", "Wedding guest transportation between homes, hotels, ceremony venues, reception halls, and other functions."],
["Bus for School Trip Pune", "Group transportation for educational visits, recreational outings, nature excursions, and school programs."],
["Bus for Airport Pickup Pune", "Convenient airport transportation for families, corporate teams, tour groups, and passengers carrying luggage."],
["Affordable Bus Rental Pune", "Cost-conscious group transportation for outings, school trips, picnics, sightseeing, weddings, and corporate programs."],
["Bus Rental Service Provider Pune", "Bus rental support for different group sizes, destinations, travel dates, routes, events, and itinerary requirements."],
["Bus for Picnic Pune", "Spacious group transportation for picnics with room for passengers, food, bags, and outdoor equipment."],
["Bus for Local Sightseeing Pune", "Multi-stop sightseeing transportation for families, visitors, schools, companies, and organized groups."],
["Bus for One Day Trip Pune", "Same-day group transportation for nearby hill stations, religious destinations, nature spots, picnics, and attractions."],
["Bus for Corporate Travel Pune", "Professional group transportation for employees, meetings, client visits, training programs, conferences, and business travel."],
["Bus for Marriage Function Pune", "Coordinated transportation for relatives and guests attending marriage functions, receptions, ceremonies, and family gatherings."],
["Bus for Tourist Trip Pune", "Comfortable group travel for tourist routes covering beaches, hills, heritage attractions, religious places, and nature destinations."]
],
whychoose: [
{
WhyChooseheading: "Convenient Group Transportation",
WhyChoosedescription: "A rented bus allows families, friends, employees, students, and other organized groups to travel together instead of coordinating several individual cars. This makes pickup planning, luggage handling, route coordination, sightseeing stops, and return arrangements easier to manage throughout the journey."
},
{
WhyChooseheading: "Suitable for Different Group Sizes",
WhyChoosedescription: "Group transportation requirements can vary depending on whether the journey involves a family gathering, school program, corporate event, wedding, or tourist tour. Bus rental arrangements provide a practical shared option for organized groups that need suitable passenger capacity and convenient travel planning."
},
{
WhyChooseheading: "Comfortable for Long Journeys",
WhyChoosedescription: "Outstation tours and extended road trips can involve several hours of travel, making passenger comfort and luggage space important considerations. Suitable bus arrangements provide shared seating and practical storage capacity for family holidays, corporate tours, school excursions, pilgrimages, and multi-day sightseeing programs."
},
{
WhyChooseheading: "Useful for Events and Functions",
WhyChoosedescription: "Weddings, corporate events, school programs, social gatherings, and organized tours often require several passengers to reach a common destination according to a fixed schedule. A dedicated bus can connect homes, hotels, offices, airports, resorts, and event venues while keeping participants together."
},
{
WhyChooseheading: "Flexible Local and Outstation Travel",
WhyChoosedescription: "Bus rental can be planned for short local requirements as well as longer journeys outside Pune. Whether the itinerary involves sightseeing, an airport transfer, a one-day excursion, a family holiday, a corporate retreat, or a multi-day tourist tour, transportation can be arranged around the planned route."
},
{
WhyChooseheading: "AC and Premium Travel Options",
WhyChoosedescription: "Different occasions may require different levels of travel comfort, particularly during summer journeys, important events, and executive programs. AC and luxury bus options provide additional choices for groups that want a more comfortable and premium environment during local travel, long-distance tours, weddings, and corporate events."
},
{
WhyChooseheading: "Simplified Trip Coordination",
WhyChoosedescription: "When a group uses one dedicated vehicle, organizers can coordinate common pickup points, departure timings, destinations, planned stops, and return schedules more easily. This is particularly useful for schools, companies, families, wedding organizers, and tourist groups managing travel for several participants."
},
{
WhyChooseheading: "Travel Support from Pune",
WhyChoosedescription: "Ruturaj Enterprises supports bus rental requirements starting from Pune for family trips, group travel, school excursions, corporate programs, weddings, airport transfers, sightseeing, picnics, and outstation tours. Transportation can be planned around the passenger count, destination, route, travel schedule, and overall itinerary for a convenient group journey."
}
]
};










const faqData = [
{
question: "How can I rent a bus in Pune?",
answer: "Bus rental in Pune can be arranged by sharing the pickup location, destination, travel date, passenger count, journey duration, and preferred timings. Ruturaj Enterprises can coordinate suitable group transportation for local journeys, family tours, school trips, weddings, corporate programs, sightseeing, picnics, religious tours, events, and outstation travel."
},
{
question: "What types of buses can be rented in Pune?",
answer: "Different bus options can be considered according to the size of the travelling group and the nature of the journey. Requirements may vary for small group movements, medium-sized gatherings, corporate programs, school excursions, wedding transportation, large events, and longer outstation tours, so passenger count and itinerary details are useful when selecting a suitable vehicle."
},
{
question: "Can I hire a bus in Pune for local travel?",
answer: "Local bus rental can be useful when a group needs transportation between several locations within Pune and nearby areas. The vehicle can be scheduled for events, family functions, educational programs, office activities, sightseeing, shopping trips, social gatherings, and other planned journeys requiring shared transportation."
},
{
question: "Is bus rental available from Pune for outstation trips?",
answer: "Outstation bus rental can be arranged from Pune for journeys to destinations across Maharashtra and other states. Groups can plan trips for vacations, pilgrimages, educational tours, corporate travel, family functions, sightseeing programs, and multi-day excursions with the route, stops, overnight stays, and return schedule included in the itinerary."
},
{
question: "Can I rent a bus for a family tour from Pune?",
answer: "Family groups can use bus rental when several relatives want to travel together for a holiday or multi-destination tour. The journey can include sightseeing locations, accommodation transfers, meal breaks, rest stops, religious places, and return travel while keeping the entire group on a coordinated transportation schedule."
},
{
question: "Can buses be hired for school and college trips in Pune?",
answer: "Bus rental can be arranged for school excursions, college tours, educational visits, industrial trips, sports programs, and student outings. The travel schedule can be structured around institutional pickup points, destination timings, planned activities, rest breaks, and return arrangements to support an organized group journey."
},
{
question: "Can I hire a bus for a wedding or family function in Pune?",
answer: "Wedding and family function transportation can be planned with a bus when relatives and guests need coordinated movement. Transfers may be arranged between homes, hotels, railway stations, airports, marriage halls, banquet venues, reception locations, and other event points according to the function schedule."
},
{
question: "Can a bus be rented for sightseeing and picnic trips from Pune?",
answer: "Sightseeing and picnic groups can hire a bus for journeys involving several attractions or recreational locations. The itinerary can include multiple stops, meal breaks, activity venues, scenic destinations, and return travel, allowing the group to follow one shared schedule instead of arranging transportation separately for each passenger."
},
{
question: "What information is required for Bus Rental Pune?",
answer: "When requesting a bus rental, it is helpful to provide the travel date, passenger count, pickup locations, destination, departure time, trip duration, intermediate stops, luggage requirements, and return timing. A complete itinerary gives Ruturaj Enterprises the information needed to coordinate transportation around the group's actual travel plan."
},
{
question: "Why choose Ruturaj Enterprises for Bus Rental Pune?",
answer: "Ruturaj Enterprises coordinates bus rental for local travel, outstation tours, school trips, corporate programs, weddings, family functions, sightseeing, picnics, pilgrimages, and events. Transportation arrangements can be planned according to group size, pickup points, destination, travel duration, planned stops, luggage, and the complete journey schedule."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Amit Wagh",
feedback:
"Our group hired a bus through Ruturaj Enterprises for a multi-location trip from Pune. The itinerary included several stops and a return journey, so having shared transportation made the overall movement easier to coordinate. Everyone could travel together and follow the same schedule throughout the tour.",
rating: 5
},
{
id: 2,
name: "Miss. Pooja Chavan",
feedback:
"I arranged a bus rental with Ruturaj Enterprises for a group outing from Pune. We had multiple passengers and several planned activities during the day, making one shared vehicle a convenient option. The transportation arrangement helped us manage the pickup, destination transfers, and return journey more smoothly.",
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
  "name": "Bus Rental Pune",
  "image": "https://ruturajenterprises.com/assets/images/bus-rental-pune.webp",
  "description":
    "Bus Rental Pune for local travel, outstation journeys, family trips, group tours, corporate events, weddings, school excursions, picnics, sightseeing and airport transportation. Ruturaj Enterprises offers bus on rent, bus hire and bus booking services with AC, non-AC, luxury, mini bus and tourist bus options for different group sizes and travel requirements. Comfortable seating, experienced drivers and flexible rental plans make these buses suitable for one-day trips, weekend tours, multi-day journeys, corporate transportation, wedding guest movement and long-distance travel from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/bus-rental-pune"
  }
};








    return (
        <div>

<Helmet>
  <title>
    Bus Rental Pune | Bus Hire Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Bus Rental Pune for local and outstation travel, family trips, group tours, corporate events, weddings, school trips, picnics and airport transfers. Hire AC, non-AC, luxury and tourist buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Bus On Rent Pune, Bus Hire Pune, Bus Booking Pune, Bus Rental Service Pune, AC Bus Rental Pune, Non AC Bus Rental Pune, Luxury Bus Rental Pune, Bus for Outstation Pune, Bus for Family Trip Pune, Bus for Group Travel Pune, Bus for Corporate Events Pune, Bus for Wedding Pune, Bus for School Trip Pune, Bus for Picnic Pune, Bus for Airport Pickup Pune, Affordable Bus Rental Pune, Bus Rental Pune, Bus Hire Service Pune, Bus Booking Service Pune, AC Bus On Rent Pune, AC Bus Hire Pune, AC Bus Booking Pune, Non AC Bus On Rent Pune, Non AC Bus Hire Pune, Non AC Bus Booking Pune, Luxury Bus On Rent Pune, Luxury Bus Hire Pune, Luxury Bus Booking Pune, Tourist Bus Rental Pune, Tourist Bus Hire Pune, Tourist Bus Booking Pune, Mini Bus Rental Pune, Mini Bus Hire Pune, Mini Bus Booking Pune, Mini Bus On Rent Pune, Outstation Bus Rental Pune, Outstation Bus Hire Pune, Outstation Bus Booking Pune, Local Bus Rental Pune, Local Bus Hire Pune, Local Bus Booking Pune, Local Bus Service Pune, Bus for Family Tour Pune, Family Bus Rental Pune, Family Bus Hire Pune, Family Travel Bus Pune, Bus for Group Tour Pune, Group Bus Rental Pune, Group Bus Hire Pune, Group Travel Bus Pune, Corporate Bus Rental Pune, Corporate Bus Hire Pune, Corporate Bus Booking Pune, Corporate Bus Service Pune, Corporate Staff Transportation Bus Pune, Corporate Event Bus Rental Pune, Corporate Event Bus Hire Pune, Wedding Bus Rental Pune, Wedding Bus Hire Pune, Wedding Bus Booking Pune, Wedding Guest Bus Rental Pune, Wedding Guest Transportation Pune, Marriage Bus Rental Pune, Marriage Bus Hire Pune, Marriage Bus Booking Pune, School Bus Rental Pune, School Bus Hire Pune, School Trip Bus Rental Pune, School Tour Bus Hire Pune, College Trip Bus Rental Pune, Picnic Bus Rental Pune, Picnic Bus Hire Pune, Picnic Bus Booking Pune, Airport Bus Rental Pune, Airport Transfer Bus Pune, Airport Pickup Bus Pune, Airport Drop Bus Pune, Sightseeing Bus Rental Pune, Sightseeing Bus Hire Pune, Pune City Tour Bus Rental, Pune City Tour Bus Hire, Maharashtra Tour Bus Pune, Temple Tour Bus Pune, Pilgrimage Bus Rental Pune, One Day Bus Rental Pune, One Day Bus Hire Pune, Weekend Trip Bus Pune, Holiday Trip Bus Pune, Bus Rental with Driver Pune, Bus Hire with Driver Pune, Bus Booking with Driver Pune, Comfortable Bus Rental Pune, Premium Bus Rental Pune, Professional Bus Hire Pune, Reliable Bus Rental Pune, Bus Transportation Pune, Group Transportation Bus Pune, Bus Rental Company Pune, Bus Hire Company Pune, Bus Rental Near Me Pune, Bus Hire Near Me Pune, AC Tourist Bus Pune, Luxury Tourist Bus Pune, Corporate Tourist Bus Pune, Wedding Tourist Bus Pune, Outstation Tourist Bus Pune, 20 Seater Bus Rental Pune, 25 Seater Bus Rental Pune, 26 Seater Bus Rental Pune, 32 Seater Bus Rental Pune, 35 Seater Bus Rental Pune, 40 Seater Bus Rental Pune, 45 Seater Bus Rental Pune, 50 Seater Bus Rental Pune, Ruturaj Enterprises Bus Rental Pune"
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
                            <img src='/images/keyword/101.jpg' alt='img' className='img-fluid' />
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

export default Busrentalpune;