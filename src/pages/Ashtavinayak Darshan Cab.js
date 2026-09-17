import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Ashtavinayakdarshancab() {


const cardData = {
keyword: "Ashtavinayak Darshan Cab",
headingDescription: "Ruturaj Enterprises offers comfortable Ashtavinayak Darshan Cab services from Pune for devotees, families, senior citizens, friends, and organized pilgrimage groups visiting the eight revered temples of Lord Ganesha across Maharashtra. A private cab provides the flexibility to plan temple visits, travel between different Ashtavinayak destinations, manage meal and rest breaks, and follow a customized pilgrimage schedule. AC, luxury, affordable, one-day, round-trip, outstation, family, group, and sightseeing cab options can be arranged according to the requirements of the yatra.",


topPlaces: [
    {
        title: "Mayureshwar Temple, Morgaon",
        description: "Mayureshwar Temple at Morgaon is traditionally regarded as the first and most important stop in the Ashtavinayak pilgrimage circuit. Devotees can begin their yatra from Pune with a private cab and continue to the remaining temples according to their planned route."
    },
    {
        title: "Siddhivinayak Temple, Siddhatek",
        description: "Siddhivinayak Temple at Siddhatek is one of the eight sacred Ashtavinayak temples and is situated in a peaceful rural setting. A dedicated cab makes the journey more convenient for families and devotees who want flexible travel between the pilgrimage destinations."
    },
    {
        title: "Ballaleshwar Temple, Pali",
        description: "Ballaleshwar Temple in Pali is an important destination in the Ashtavinayak circuit and has strong religious significance for Ganesha devotees. Travelers can include the temple in a customized pilgrimage itinerary while enjoying private transportation and convenient travel breaks."
    },
    {
        title: "Varadvinayak Temple, Mahad",
        description: "Varadvinayak Temple at Mahad is surrounded by a peaceful atmosphere and forms an important part of the traditional Ashtavinayak yatra. A private cab from Pune provides flexibility for devotees traveling with family members, elderly passengers, or small groups."
    },
    {
        title: "Chintamani Temple, Theur",
        description: "Chintamani Temple at Theur is one of the revered Ashtavinayak temples and is conveniently connected to Pune. It can be included as an early or later stop depending on the preferred pilgrimage sequence and overall travel plan."
    },
    {
        title: "Vighneshwar Temple, Ozar",
        description: "Vighneshwar Temple at Ozar is dedicated to Lord Ganesha in the form of Vighneshwar and is an important stop for devotees completing the Ashtavinayak circuit. Private cab travel allows pilgrims to manage temple timings and breaks with greater convenience."
    },
    {
        title: "Girijatmaj Temple, Lenyadri",
        description: "Girijatmaj Temple at Lenyadri is located among the scenic hills and is associated with the Ashtavinayak pilgrimage tradition. Travelers can combine spiritual darshan with the surrounding natural scenery while using a private vehicle for comfortable transportation."
    },
    {
        title: "Mahaganapati Temple, Ranjangaon",
        description: "Mahaganapati Temple at Ranjangaon is one of the eight important Ashtavinayak destinations and is a popular pilgrimage stop for devotees from Pune and nearby regions. A cab provides convenient access for families and groups planning a complete temple tour."
    },
    {
        title: "Jejuri Khandoba Temple",
        description: "Jejuri is a well-known pilgrimage destination associated with Lord Khandoba and can be added to an extended spiritual itinerary around the Ashtavinayak circuit. Travelers can conveniently include the temple as an additional stop when planning a customized pilgrimage tour."
    },
    {
        title: "Alandi",
        description: "Alandi is an important spiritual destination known for the Sant Dnyaneshwar Maharaj temple and attracts devotees throughout the year. It can be combined with an Ashtavinayak journey for travelers interested in covering additional religious sites around Pune and Maharashtra."
    }
],

services: [
    {
        name: "Ashtavinayak Darshan Cab Pune",
        description: "Ashtavinayak Darshan Cab Pune from Ruturaj Enterprises provides private transportation for devotees planning to visit the eight revered Ganesha temples across Maharashtra. The itinerary can be organized around temple timings, family requirements, rest breaks, and the preferred sequence of the pilgrimage."
    },
    {
        name: "Ashtavinayak Cab Booking Pune",
        description: "Ashtavinayak Cab Booking Pune makes it convenient to reserve a private vehicle for a complete or customized Ashtavinayak yatra. Travelers can communicate their travel dates, passenger count, pickup location, duration, and preferred vehicle type before starting the pilgrimage."
    },
    {
        name: "Ashtavinayak Cab Hire Pune",
        description: "Ashtavinayak Cab Hire Pune is suitable for devotees who prefer a dedicated vehicle throughout their temple tour. The cab can remain available for planned transfers, sightseeing stops, meal breaks, and movement between the different Ashtavinayak destinations."
    },
    {
        name: "Ashtavinayak Taxi Service Pune",
        description: "Ashtavinayak Taxi Service Pune provides private transportation for individuals, families, and groups undertaking the traditional pilgrimage circuit. Flexible travel arrangements make it easier to coordinate the journey around darshan schedules and the requirements of different passengers."
    },
    {
        name: "Ashtavinayak Tour Cab Pune",
        description: "Ashtavinayak Tour Cab Pune is designed for travelers planning a structured temple tour covering multiple destinations in one journey. The route can be customized according to the number of days available, preferred temple sequence, sightseeing interests, and return schedule."
    },
    {
        name: "Ashtavinayak Temple Cab Pune",
        description: "Ashtavinayak Temple Cab Pune provides direct private transportation for devotees visiting the sacred Ganesha temples. It is particularly convenient for families with children, senior citizens, and passengers who want comfortable travel between the temples without relying on public transport."
    },
    {
        name: "Ashtavinayak Yatra Cab Pune",
        description: "Ashtavinayak Yatra Cab Pune supports complete pilgrimage journeys covering the traditional eight temples. Travelers can plan a multi-day yatra with suitable breaks, overnight stays, sightseeing, and return transportation according to their personal schedule."
    },
    {
        name: "Ashtavinayak AC Cab Pune",
        description: "Ashtavinayak AC Cab Pune offers an air-conditioned private travel option for devotees covering multiple temple destinations. The comfortable environment is especially useful for families, senior citizens, children, and travelers spending several hours on the road."
    },
    {
        name: "Luxury Cab for Ashtavinayak Pune",
        description: "Luxury Cab for Ashtavinayak Pune provides a premium travel option for passengers seeking additional comfort during their pilgrimage. It is suitable for families, corporate groups, special religious tours, and travelers who prefer a more refined private transportation experience."
    },
    {
        name: "Ashtavinayak Family Tour Cab Pune",
        description: "Ashtavinayak Family Tour Cab Pune offers a convenient private travel environment for families completing the temple circuit together. Comfortable seating, luggage space, flexible breaks, and direct transportation can make a multi-temple pilgrimage easier for all age groups."
    },
    {
        name: "Ashtavinayak Group Tour Cab Pune",
        description: "Ashtavinayak Group Tour Cab Pune is suitable for friends, relatives, devotional groups, and small organized pilgrimage parties. Travelers can coordinate the vehicle around group size, luggage requirements, temple stops, meal breaks, and the overall yatra schedule."
    },
    {
        name: "Ashtavinayak One Day Cab Pune",
        description: "Ashtavinayak One Day Cab Pune is suitable for travelers planning a short pilgrimage itinerary or visiting selected temples within a single day. The journey can be organized around an early departure, planned darshan stops, refreshments, and a convenient return to Pune."
    },
    {
        name: "Ashtavinayak Outstation Cab Pune",
        description: "Ashtavinayak Outstation Cab Pune provides private transportation for the pilgrimage destinations located beyond Pune city. It is useful for complete yatra programs, extended religious tours, family pilgrimages, and customized multi-destination travel."
    },
    {
        name: "Ashtavinayak Round Trip Cab Pune",
        description: "Ashtavinayak Round Trip Cab Pune offers transportation for the onward journey through the temple circuit and the eventual return to Pune. Travelers can retain a private vehicle throughout the trip, making luggage management, sightseeing, and schedule adjustments more convenient."
    },
    {
        name: "Affordable Ashtavinayak Cab Pune",
        description: "Affordable Ashtavinayak Cab Pune provides a practical private transportation option for devotees who want to manage their pilgrimage travel budget. It is suitable for individuals, families, and small groups seeking comfortable transportation for temple visits and return travel."
    },
    {
        name: "Ashtavinayak Pilgrimage Cab Pune",
        description: "Ashtavinayak Pilgrimage Cab Pune is dedicated to travelers undertaking the spiritual journey to the eight Ganesha temples. The private cab format allows devotees to organize the pilgrimage around prayer schedules, darshan timings, family needs, and planned rest stops."
    },
    {
        name: "Ashtavinayak Sightseeing Cab Pune",
        description: "Ashtavinayak Sightseeing Cab Pune allows pilgrims to combine temple visits with nearby historical, cultural, and spiritual attractions. The itinerary can include additional destinations such as Jejuri, Alandi, or other places of interest when time permits."
    },
    {
        name: "Ashtavinayak Tourist Taxi Pune",
        description: "Ashtavinayak Tourist Taxi Pune is suitable for visitors who want to explore the temple circuit as part of a broader Maharashtra tourism itinerary. Private transportation gives travelers greater flexibility to combine pilgrimage destinations with local sightseeing."
    },
    {
        name: "Ashtavinayak Cab Rental Service Pune",
        description: "Ashtavinayak Cab Rental Service Pune provides private vehicle arrangements for short temple visits as well as multi-day pilgrimage tours. Vehicle selection can be planned according to passenger numbers, luggage, travel duration, and comfort preferences."
    },
    {
        name: "Ashtavinayak Darshan Taxi Booking Pune",
        description: "Ashtavinayak Darshan Taxi Booking Pune makes it easier for devotees to arrange transportation for their planned temple visits in advance. Customers can coordinate pickup details, travel dates, passenger requirements, and the intended pilgrimage route before departure."
    },
    {
        name: "Ashtavinayak Temple Tour Taxi Pune",
        description: "Ashtavinayak Temple Tour Taxi Pune provides a dedicated vehicle for travelers covering the sacred Ganesha temples across Maharashtra. The service is useful for families, senior citizens, and groups who want a comfortable journey with flexible stops and organized temple transfers."
    },
    {
        name: "Ashtavinayak Travel Cab Pune",
        description: "Ashtavinayak Travel Cab Pune supports customized pilgrimage and tourism journeys around the Ashtavinayak circuit. Travelers can plan one-day or multi-day programs with temple darshan, sightseeing, meal breaks, overnight stops, and return transportation."
    }
],

tableData: [
    ["Ashtavinayak Darshan Cab Pune", "Private cab service for visiting the eight revered Ashtavinayak temples from Pune."],
    ["Ashtavinayak Cab Booking Pune", "Advance private cab booking for complete and customized Ashtavinayak yatras."],
    ["Ashtavinayak Cab Hire Pune", "Dedicated cab hire for temple transfers, sightseeing, and pilgrimage travel."],
    ["Ashtavinayak Taxi Service Pune", "Private taxi transportation for devotees, families, and pilgrimage groups."],
    ["Ashtavinayak Tour Cab Pune", "Customized cab service for multi-temple Ashtavinayak tour itineraries."],
    ["Ashtavinayak Temple Cab Pune", "Comfortable private transportation between Pune and Ashtavinayak temples."],
    ["Ashtavinayak Yatra Cab Pune", "Dedicated vehicle for complete multi-day Ashtavinayak pilgrimage journeys."],
    ["Ashtavinayak AC Cab Pune", "Air-conditioned cab option for comfortable temple circuit travel."],
    ["Luxury Cab for Ashtavinayak Pune", "Premium private travel option for devotees seeking enhanced comfort."],
    ["Ashtavinayak Family Tour Cab Pune", "Spacious and convenient transportation for family pilgrimage tours."],
    ["Ashtavinayak Group Tour Cab Pune", "Private group transportation for friends, relatives, and devotional groups."],
    ["Ashtavinayak One Day Cab Pune", "One-day cab arrangement for selected temple visits and short pilgrimage plans."],
    ["Ashtavinayak Outstation Cab Pune", "Outstation cab transportation for destinations across the Ashtavinayak circuit."],
    ["Ashtavinayak Round Trip Cab Pune", "Return cab arrangement for complete pilgrimage and sightseeing journeys."],
    ["Affordable Ashtavinayak Cab Pune", "Budget-conscious private cab option for individuals, families, and small groups."],
    ["Ashtavinayak Pilgrimage Cab Pune", "Pilgrimage-focused transportation for devotees visiting the eight temples."],
    ["Ashtavinayak Sightseeing Cab Pune", "Flexible sightseeing cab for temples and additional attractions along the route."],
    ["Ashtavinayak Tourist Taxi Pune", "Private tourist taxi for combining Ashtavinayak temples with Maharashtra sightseeing."],
    ["Ashtavinayak Cab Rental Service Pune", "Flexible cab rental for short visits and multi-day temple tours."],
    ["Ashtavinayak Darshan Taxi Booking Pune", "Advance taxi booking for convenient temple darshan transportation."],
    ["Ashtavinayak Temple Tour Taxi Pune", "Dedicated taxi for organized temple-to-temple pilgrimage travel."],
    ["Ashtavinayak Travel Cab Pune", "Customized travel cab for pilgrimage, sightseeing, and multi-day tours."]
],

whychoose: [
    {
        WhyChooseheading: "Dedicated Pilgrimage Transportation",
        WhyChoosedescription: "A private cab keeps the pilgrimage journey organized from the first temple to the final destination. Devotees can travel together without depending on changing public transport services between different temple locations."
    },
    {
        WhyChooseheading: "Flexible Temple Scheduling",
        WhyChoosedescription: "Temple visits can be planned around the group's preferred timings, prayer requirements, meal breaks, and rest periods. This flexibility is especially valuable during a multi-stop yatra involving family members of different age groups."
    },
    {
        WhyChooseheading: "Comfort for Senior Citizens",
        WhyChoosedescription: "Private transportation can make the Ashtavinayak journey more manageable for elderly devotees and families traveling with children. Passengers can coordinate comfortable stops and avoid the repeated transfers associated with public transportation."
    },
    {
        WhyChooseheading: "One-Day or Multi-Day Plans",
        WhyChoosedescription: "The travel arrangement can be adapted for a short one-day itinerary or a more relaxed multi-day pilgrimage. Travelers can include overnight stays and additional sightseeing when they want more time at each destination."
    },
    {
        WhyChooseheading: "Suitable for Groups",
        WhyChoosedescription: "Friends, relatives, devotional groups, and families can travel together in a dedicated vehicle. This makes it easier to coordinate temple visits, luggage, meal breaks, photographs, and other group requirements throughout the journey."
    },
    {
        WhyChooseheading: "AC and Premium Choices",
        WhyChoosedescription: "Travelers can select a vehicle according to their comfort expectations and trip requirements. AC and premium cab options provide additional convenience for long journeys and travelers who prefer an upgraded private experience."
    },
    {
        WhyChooseheading: "Customized Sightseeing",
        WhyChoosedescription: "The pilgrimage can be extended with additional spiritual, historical, or cultural attractions when the schedule allows. Destinations such as Jejuri and Alandi can be included for travelers who want a broader religious tour."
    },
    {
        WhyChooseheading: "Advance Travel Coordination",
        WhyChoosedescription: "Planning the cab before the yatra allows passengers to organize their pickup location, travel dates, passenger count, vehicle preference, and itinerary. Advance arrangements can be particularly helpful during festivals and busy pilgrimage periods."
    }
]


};













const faqData = [
{
question: "How can I book a cab for Ashtavinayak Darshan?",
answer: "An Ashtavinayak Darshan cab can be arranged by providing the preferred travel date, pickup location, number of passengers, and expected trip duration. Ruturaj Enterprises can help organize a private cab according to the pilgrimage itinerary, group size, luggage, and planned temple visits."
},
{
question: "Which Ashtavinayak temples can be covered by cab?",
answer: "A planned Ashtavinayak Darshan journey can cover the traditional eight temples of Lord Ganesha, including Mayureshwar, Siddhivinayak, Ballaleshwar, Varadvinayak, Chintamani, Girijatmaj, Vighneshwar, and Mahaganapati. The route and sequence can be planned according to the selected itinerary and travel schedule."
},
{
question: "Is a private cab suitable for Ashtavinayak Darshan?",
answer: "Private cab travel is convenient for devotees who want to follow their own pilgrimage schedule without depending on public transportation. Families and groups can travel together, carry their belongings comfortably, and adjust stop durations according to temple visits and personal requirements."
},
{
question: "Can I book an Ashtavinayak Darshan cab from Pune?",
answer: "Devotees traveling from Pune can arrange an Ashtavinayak Darshan cab with a customized pickup and temple itinerary. The journey can be planned according to the number of passengers, preferred vehicle, travel date, and whether the group wants to complete the circuit in a shorter or more relaxed schedule."
},
{
question: "Is Ashtavinayak Darshan available for families and senior citizens?",
answer: "Families and senior citizens can choose a private cab for a more organized pilgrimage experience. Having dedicated transportation makes it easier to manage temple visits, rest breaks, luggage, and travel timings without having to coordinate multiple public transport connections."
},
{
question: "Can I hire an Innova Crysta for Ashtavinayak Darshan?",
answer: "An Innova Crysta can be considered for Ashtavinayak Darshan when passengers prefer additional cabin space and a comfortable private vehicle for the pilgrimage. Vehicle selection can be discussed based on the number of devotees, luggage, route requirements, and overall travel plan."
},
{
question: "How many days are required for an Ashtavinayak Darshan cab tour?",
answer: "The duration depends on the starting point, selected route, temple visiting hours, traffic, rest requirements, and the amount of time spent at each location. A suitable itinerary can be prepared according to whether travelers prefer a compact pilgrimage schedule or a more relaxed multi-day journey."
},
{
question: "Can I book a cab for a round trip Ashtavinayak Darshan?",
answer: "Round-trip cab arrangements are suitable for devotees who want transportation from their starting location to the temples and back after completing the pilgrimage. The return schedule can be coordinated in advance so that the overall journey remains organized from departure through the final drop-off."
},
{
question: "What details are needed to plan an Ashtavinayak Darshan cab?",
answer: "Useful details include the pickup location, travel date, number of devotees, preferred vehicle, luggage requirements, approximate trip duration, and any specific temple or route preferences. These details allow Ruturaj Enterprises to understand the pilgrimage plan and arrange appropriate transportation."
},
{
question: "Why choose Ruturaj Enterprises for Ashtavinayak Darshan Cab?",
answer: "Ruturaj Enterprises can arrange private cab transportation for devotees planning Ashtavinayak Darshan, with options suited to family groups, senior citizens, and other travelers. The trip can be coordinated around the pilgrimage route, passenger requirements, temple visits, rest stops, and return schedule."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Prakash Jadhav",
feedback:
"Our family planned an Ashtavinayak Darshan and selected Ruturaj Enterprises for the complete cab journey. Having a private vehicle made the temple visits much easier to coordinate, and we could take breaks whenever required. The overall pilgrimage travel experience was comfortable and well planned.",
rating: 5
},
{
id: 2,
name: "Miss. Snehal More",
feedback:
"I arranged an Ashtavinayak Darshan cab with Ruturaj Enterprises for a group of relatives. The private travel option gave us flexibility throughout the route and made it easier to manage everyone's timings. We appreciated the comfortable journey and organized transportation during the pilgrimage.",
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
  "name": "Ashtavinayak Darshan Cab",
  "image": "https://ruturajenterprises.com/assets/images/ashtavinayak-darshan-cab.webp",
  "description":
    "Ashtavinayak Darshan Cab for convenient pilgrimage travel from Pune to the eight revered Ashtavinayak temples of Maharashtra. Ruturaj Enterprises offers Ashtavinayak cab booking, taxi hire and tour rental options for families, devotees and groups, with AC and luxury cab choices, experienced drivers, comfortable seating and flexible one-day or multi-day travel plans. The service is suitable for temple visits, religious tours, group yatra and complete Ashtavinayak sightseeing.",
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
    "url": "https://ruturajenterprises.com/ashtavinayak-darshan-cab"
  }
};










    return (
        <div>
<Helmet>
  <title>
    Ashtavinayak Darshan Cab | Ashtavinayak Darshan Cab Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Ashtavinayak Darshan Cab for pilgrimage tours from Pune to the eight Ashtavinayak temples. Hire AC and luxury cabs for family, group, one-day and multi-day Ashtavinayak Yatra with Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Ashtavinayak Darshan Cab Pune, Ashtavinayak Cab Booking Pune, Ashtavinayak Cab Hire Pune, Ashtavinayak Taxi Service Pune, Ashtavinayak Tour Cab Pune, Ashtavinayak Temple Cab Pune, Ashtavinayak Yatra Cab Pune, Ashtavinayak AC Cab Pune, Luxury Cab for Ashtavinayak Pune, Ashtavinayak Cab Rental Pune, Ashtavinayak Taxi Booking Pune, Ashtavinayak Taxi Hire Pune, Ashtavinayak Taxi Rental Pune, Ashtavinayak Darshan Taxi Pune, Ashtavinayak Tour Taxi Pune, Ashtavinayak Temple Taxi Pune, Ashtavinayak Yatra Taxi Pune, Ashtavinayak Cab Service Pune, Ashtavinayak Tour Package by Cab Pune, Ashtavinayak Darshan Tour by Cab Pune, Ashtavinayak Temple Tour Cab from Pune, Ashtavinayak Pilgrimage Cab Pune, Ashtavinayak Religious Tour Cab Pune, Ashtavinayak Family Tour Cab Pune, Ashtavinayak Group Tour Cab Pune, Ashtavinayak One Day Tour Cab Pune, Ashtavinayak Multi Day Tour Cab Pune, Ashtavinayak Cab with Driver Pune, Ashtavinayak Taxi with Driver Pune, AC Ashtavinayak Taxi Pune, AC Ashtavinayak Cab Pune, Luxury Ashtavinayak Taxi Pune, Premium Ashtavinayak Cab Pune, Ashtavinayak Private Cab Pune, Ashtavinayak Private Taxi Pune, Ashtavinayak Outstation Cab Pune, Ashtavinayak Outstation Taxi Pune, Ashtavinayak Darshan Cab Rental Pune, Ashtavinayak Darshan Taxi Rental Pune, Ashtavinayak Darshan Cab Hire Service Pune, Ashtavinayak Darshan Cab Booking Service Pune, Ashtavinayak Tour Cab Rental Pune, Ashtavinayak Temple Tour Taxi Pune, Ashtavinayak Yatra Taxi Booking Pune, Ashtavinayak Yatra Taxi Hire Pune, Ashtavinayak Ganpati Darshan Cab Pune, Ashtavinayak Ganpati Tour Cab Pune, Ashtavinayak Ganpati Yatra Cab Pune, Pune Ashtavinayak Darshan Taxi, Pune Ashtavinayak Tour Cab, Pune Ashtavinayak Temple Taxi, Pune Ashtavinayak Yatra Taxi, Ashtavinayak Cab for Family Pune, Ashtavinayak Cab for Group Travel Pune, Ashtavinayak Cab for Devotees Pune, Ashtavinayak Cab for Pilgrimage Pune, Ashtavinayak Cab for Religious Tour Pune, Ashtavinayak Cab for Temple Tour Pune, Ashtavinayak Cab for One Day Trip Pune, Ashtavinayak Cab for Multi Day Trip Pune, Comfortable Ashtavinayak Cab Pune, Affordable Ashtavinayak Cab Pune, Ashtavinayak Cab Near Me Pune, Ashtavinayak Taxi Near Me Pune, Ruturaj Enterprises Ashtavinayak Darshan Cab Pune"
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
                            <img src='/images/keyword/54.jpg' alt='img' className='img-fluid' />
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

export default Ashtavinayakdarshancab;