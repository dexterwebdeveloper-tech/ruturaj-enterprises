import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Fourseaterfive() {


const cardData = {
keyword: "45 Seater Bus on Rent in Pune",
headingDescription: "Ruturaj Enterprises provides dependable 45 Seater Bus on Rent in Pune for large families, corporate teams, wedding groups, schools, tourist parties, event organizers, and other organizations requiring high-capacity group transportation. A 45-seater bus is a practical choice when many passengers need to travel together, offering a convenient solution for local sightseeing, airport transfers, educational excursions, weddings, corporate programs, picnics, family holidays, and long-distance tours from Pune.",
topPlaces: [
{
title: "Nashik",
description: "Nashik is a popular destination for pilgrimage visits, family outings, cultural exploration, and group tours, with attractions spread across the city and surrounding region. A 45 seater bus is well suited for large groups traveling from Pune who want to stay together throughout their planned itinerary."
},
{
title: "Saputara",
description: "Saputara is a scenic hill destination known for its pleasant climate, viewpoints, lakes, gardens, and surrounding greenery. Large families, school groups, corporate teams, and tourist parties can use a 45 seater bus for an organized journey from Pune."
},
{
title: "Lonar",
description: "Lonar is known for its unique meteor-impact crater lake, surrounding natural landscape, and historical and religious attractions. A 45 seater bus provides a practical transportation option for educational groups, families, researchers, and tourists planning a group journey from Pune."
},
{
title: "Bhor",
description: "Bhor offers scenic landscapes, historic attractions, and access to peaceful countryside surroundings, making it suitable for short group getaways. A large-capacity bus can comfortably support family outings, school excursions, corporate picnics, and organized group trips from Pune."
},
{
title: "Kashid",
description: "Kashid is a popular beach destination known for its sandy coastline, coastal scenery, and relaxed atmosphere. A 45 seater bus is useful for large families, friends, corporate groups, and tourist parties planning a shared beach vacation from Pune."
},
{
title: "Jawhar",
description: "Jawhar is a picturesque hill destination known for waterfalls, tribal culture, viewpoints, and natural surroundings. Larger groups can choose a 45 seater bus for an organized trip from Pune, especially for family vacations, educational outings, and nature-focused tours."
},
{
title: "Pawna Lake",
description: "Pawna Lake is a popular destination for camping, nature trips, family outings, and group recreation near Pune. A 45 seater bus can be a convenient option for larger groups carrying camping equipment, food, bags, and other essentials for their planned outing."
},
{
title: "Nagaon",
description: "Nagaon is a coastal destination near Alibaug that attracts families, friends, and group travelers looking for a beach getaway. Large parties traveling from Pune can benefit from one dedicated 45 seater bus for coordinated transportation and convenient luggage handling."
},
{
title: "Kalsubai",
description: "Kalsubai is known for Maharashtra's highest peak and attracts trekking enthusiasts, adventure groups, and nature lovers. A 45 seater bus can provide shared transportation for larger trekking groups and organizations traveling from Pune with backpacks and outdoor equipment."
},
{
title: "Tuljapur",
description: "Tuljapur is an important pilgrimage destination and attracts devotees and organized religious groups from different parts of Maharashtra. A 45 seater bus provides a convenient way for larger pilgrimage parties traveling from Pune to coordinate passengers, luggage, temple visits, and return schedules."
}
],
services: [
{
name: "45 Seater Bus Rental Pune",
description: "Ruturaj Enterprises offers 45 Seater Bus Rental Pune services for large families, schools, corporate teams, wedding parties, tourist groups, event organizers, and other groups requiring high passenger capacity. The bus can be arranged for local travel, sightseeing, airport transfers, picnics, celebrations, family tours, and long-distance journeys."
},
{
name: "45 Seater Bus Hire Pune",
description: "45 Seater Bus Hire Pune is an effective option for larger groups that want to travel together in one dedicated vehicle instead of coordinating multiple smaller vehicles. It can support weddings, corporate events, school trips, family vacations, tourist programs, group outings, and various organized travel requirements."
},
{
name: "45 Seater Bus Booking Pune",
description: "45 Seater Bus Booking Pune can be planned for local sightseeing, weekend trips, multi-day tours, airport transfers, weddings, corporate programs, school excursions, and outstation travel. Advance arrangements allow passenger numbers, pickup locations, destinations, journey schedules, luggage requirements, and other itinerary details to be organized properly."
},
{
name: "45 Seater AC Bus on Rent Pune",
description: "45 Seater AC Bus on Rent Pune is suitable for larger groups seeking air-conditioned transportation for short or long journeys. It can be used for family vacations, corporate tours, school excursions, wedding transportation, airport transfers, tourist trips, and extended travel from Pune."
},
{
name: "45 Seater Luxury Bus Rental Pune",
description: "45 Seater Luxury Bus Rental Pune provides a premium-oriented transportation choice for larger groups traveling for special occasions, business programs, and important journeys. It is suitable for corporate events, weddings, family celebrations, private tours, tourist groups, and occasions where enhanced travel comfort is preferred."
},
{
name: "45 Seater Bus for Outstation Pune",
description: "45 Seater Bus for Outstation Pune is ideal for larger groups traveling from Pune to destinations across Maharashtra and neighboring states. One dedicated bus allows passengers to remain together while making it easier to manage luggage, planned breaks, sightseeing stops, route schedules, and return travel."
},
{
name: "45 Seater Bus for Wedding Pune",
description: "45 Seater Bus for Wedding Pune is useful for transporting a large number of relatives and guests between residences, hotels, temples, marriage halls, banquet venues, and reception locations. The higher seating capacity makes it suitable for wedding parties where coordinated guest transportation is important."
},
{
name: "45 Seater Bus for Corporate Events Pune",
description: "45 Seater Bus for Corporate Events Pune can be arranged for conferences, seminars, exhibitions, employee gatherings, training programs, team outings, and business functions. A larger-capacity bus enables corporate groups to travel together between offices, hotels, event venues, and other scheduled destinations."
},
{
name: "45 Seater Bus for School Trips Pune",
description: "45 Seater Bus for School Trips Pune provides a practical transportation solution for educational excursions, historical tours, nature visits, museums, recreational outings, and school picnics. Its larger seating capacity is particularly useful when students, teachers, and accompanying staff need to travel together."
},
{
name: "45 Seater Bus for Group Travel Pune",
description: "45 Seater Bus for Group Travel Pune is suitable for large groups of friends, relatives, colleagues, tourists, community members, and organized travelers. One dedicated bus can simplify pickup planning, passenger coordination, route management, luggage handling, parking, and overall group movement."
},
{
name: "45 Seater Bus for Family Trip Pune",
description: "45 Seater Bus for Family Trip Pune is an excellent option for extended families and large relatives groups traveling together for holidays, pilgrimages, weekend getaways, and destination tours. A shared bus helps everyone remain together while providing a convenient arrangement for luggage, planned stops, and sightseeing schedules."
},
{
name: "45 Seater Bus for Airport Pickup Pune",
description: "45 Seater Bus for Airport Pickup Pune is useful when a large family, corporate team, wedding party, or tourist group needs coordinated transportation to or from Pune Airport. One high-capacity bus can accommodate a substantial number of passengers and luggage, reducing the need to arrange several separate airport vehicles."
},
{
name: "45 Seater Bus Near Me Pune",
description: "45 Seater Bus Near Me Pune is useful for travelers searching for a high-capacity bus rental option within Pune. Ruturaj Enterprises supports requirements including airport transportation, local sightseeing, weddings, corporate travel, school excursions, family tours, picnics, events, and longer group journeys."
},
{
name: "Affordable 45 Seater Bus Rental Pune",
description: "Affordable 45 Seater Bus Rental Pune provides a practical shared transportation option for groups that need to move many passengers together. Instead of coordinating several smaller vehicles, groups can use one dedicated bus for family tours, school trips, corporate programs, weddings, tourist journeys, picnics, and events."
},
{
name: "45 Seater Bus for Picnic Pune",
description: "45 Seater Bus for Picnic Pune is suitable for schools, families, offices, friends, clubs, community groups, and organizations planning larger recreational outings. The high seating capacity allows participants to travel together while carrying food, bags, outdoor equipment, and other picnic essentials."
},
{
name: "45 Seater Bus for Marriage Function Pune",
description: "45 Seater Bus for Marriage Function Pune can be arranged for large guest groups attending marriage ceremonies, receptions, and related celebrations. It is convenient for transportation between homes, hotels, temples, banquet halls, wedding venues, and other locations included in the function schedule."
},
{
name: "45 Seater Bus for Corporate Travel Pune",
description: "45 Seater Bus for Corporate Travel Pune provides group transportation for employees attending meetings, business tours, training programs, conferences, client visits, and company activities. A high-capacity bus helps teams travel together and can simplify transportation planning for larger corporate groups."
},
{
name: "45 Seater Bus for Event Pune",
description: "45 Seater Bus for Event Pune is suitable for exhibitions, conferences, cultural programs, social gatherings, corporate functions, private celebrations, and other events requiring transportation for many participants. Event organizers can coordinate passenger movement between pickup locations, hotels, venues, and planned destinations."
},
{
name: "45 Seater Bus for Tourist Trip Pune",
description: "45 Seater Bus for Tourist Trip Pune offers convenient transportation for large tourist groups visiting multiple destinations and attractions. It can support sightseeing circuits, heritage tours, pilgrimage journeys, family holidays, weekend vacations, and organized tourism programs starting from Pune."
},
{
name: "45 Seater Bus for Outstation Tour Pune",
description: "45 Seater Bus for Outstation Tour Pune is a suitable option for large groups planning long-distance vacations, destination tours, pilgrimage trips, weekend getaways, and multi-day itineraries. A dedicated bus helps simplify passenger coordination, luggage management, scheduled breaks, sightseeing stops, and return arrangements."
},
{
name: "45 Seater AC Bus Hire Pune",
description: "45 Seater AC Bus Hire Pune provides an air-conditioned transportation option for larger groups seeking a comfortable shared journey. It can be considered for airport transfers, weddings, corporate programs, school trips, family vacations, tourist tours, local sightseeing, and outstation routes."
},
{
name: "45 Seater Luxury Bus on Rent Pune",
description: "45 Seater Luxury Bus on Rent Pune is suitable for large groups looking for a premium-oriented transportation arrangement for special occasions and longer journeys. It can be used for wedding functions, corporate events, private tours, family celebrations, tourist trips, and other group travel requirements where enhanced comfort is important."
}
],
tableData: [
["45 Seater Bus Rental Pune", "45 Seater Bus Hire Pune"],
["45 Seater Bus Booking Pune", "45 Seater AC Bus on Rent Pune"],
["45 Seater Luxury Bus Rental Pune", "45 Seater Bus for Outstation Pune"],
["45 Seater Bus for Wedding Pune", "45 Seater Bus for Corporate Events Pune"],
["45 Seater Bus for School Trips Pune", "45 Seater Bus for Group Travel Pune"],
["45 Seater Bus for Family Trip Pune", "45 Seater Bus for Airport Pickup Pune"],
["45 Seater Bus Near Me Pune", "Affordable 45 Seater Bus Rental Pune"],
["45 Seater Bus for Picnic Pune", "45 Seater Bus for Marriage Function Pune"],
["45 Seater Bus for Corporate Travel Pune", "45 Seater Bus for Event Pune"],
["45 Seater Bus for Tourist Trip Pune", "45 Seater Bus for Outstation Tour Pune"],
["45 Seater AC Bus Hire Pune", "45 Seater Luxury Bus on Rent Pune"]
],
whychoose: [
{
WhyChooseheading: "High-Capacity Group Transportation",
WhyChoosedescription: "A 45 seater bus is designed for situations where a substantial number of passengers need to travel together. It is particularly useful for school groups, wedding parties, corporate teams, large families, tourist groups, and organized events."
},
{
WhyChooseheading: "Reduce the Need for Multiple Vehicles",
WhyChoosedescription: "Coordinating many cars or smaller buses can create challenges with routes, parking, communication, and arrival timings. A single high-capacity bus provides a centralized transportation solution that helps keep the entire group on the same travel schedule."
},
{
WhyChooseheading: "Well Suited to Multi-Day Tours",
WhyChoosedescription: "Long journeys and multi-day itineraries require dependable transportation with enough capacity for passengers and their travel belongings. A 45 seater bus is a practical choice for family vacations, pilgrimage tours, corporate journeys, educational programs, and organized tourist circuits."
},
{
WhyChooseheading: "Efficient Wedding Guest Transfers",
WhyChoosedescription: "Large weddings often require guests to move between accommodation, ceremony venues, temples, reception halls, and other locations. The higher seating capacity of a 45 seater bus can help wedding organizers manage guest transportation through a more coordinated arrangement."
},
{
WhyChooseheading: "Useful for Large Corporate Groups",
WhyChoosedescription: "Companies arranging conferences, employee outings, seminars, training sessions, exhibitions, or business events can benefit from high-capacity transportation. Keeping a larger team together makes scheduled movement between offices, hotels, and event locations easier to coordinate."
},
{
WhyChooseheading: "Comfort-Focused Travel Options",
WhyChoosedescription: "The needs of a group can change depending on the season, route, duration, and purpose of travel. AC and luxury-oriented 45 seater options provide flexibility for groups seeking a more comfortable travel environment for important or extended journeys."
},
{
WhyChooseheading: "Ideal for Educational Excursions",
WhyChoosedescription: "School and educational trips often involve many students and accompanying teachers traveling to a common destination. A 45 seater bus can provide an organized shared transportation option for educational tours, historical visits, nature excursions, and recreational programs."
},
{
WhyChooseheading: "Flexible for Different Group Requirements",
WhyChoosedescription: "Ruturaj Enterprises supports 45 seater bus requirements for local sightseeing, airport transfers, family travel, weddings, corporate programs, school trips, picnics, events, tourist journeys, and longer routes from Pune. Travel arrangements can be planned around passenger capacity, pickup points, destination, duration, and itinerary requirements."
}
]
};









const faqData = [
{
question: "Why choose Ruturaj Enterprises for a 45 Seater Bus on rent in Pune?",
answer: "Ruturaj Enterprises offers 45 Seater Bus rental options for organizations and groups that require transportation for a large number of passengers. This capacity is suitable for corporate events, school and college tours, weddings, family functions, pilgrimages, sightseeing programs, and outstation journeys."
},
{
question: "Who can hire a 45 Seater Bus in Pune?",
answer: "Large tour groups, companies, schools, colleges, families, wedding organizers, event planners, and social organizations can consider a 45 Seater Bus when many passengers need to travel together. A single large-capacity bus can make group transportation easier to coordinate."
},
{
question: "Can I rent a 45 Seater Bus from Pune for outstation travel?",
answer: "Groups can arrange a 45 Seater Bus from Pune for outstation destinations such as Mumbai, Goa, Shirdi, Nashik, Mahabaleshwar, Kolhapur, Konkan, and other cities or tourist locations. The travel plan can be organized according to the selected route, dates, passenger requirements, and journey duration."
},
{
question: "Is a 45 Seater Bus suitable for large family trips?",
answer: "A 45 Seater Bus can accommodate extended families traveling for vacations, family gatherings, religious tours, weddings, and sightseeing programs. Keeping a large group in one vehicle can reduce the coordination involved with multiple smaller cars and make the overall journey more convenient."
},
{
question: "Can I book a 45 Seater Bus for wedding transportation in Pune?",
answer: "Wedding families and event organizers can use a 45 Seater Bus to transport guests between homes, hotels, marriage halls, reception venues, railway stations, and airports. Its larger seating capacity is helpful when a significant number of relatives and guests need transportation for different functions."
},
{
question: "Can corporate companies rent a 45 Seater Bus in Pune?",
answer: "Corporate teams can arrange a 45 Seater Bus for employee outings, conferences, seminars, training programs, annual events, team-building activities, industrial visits, and business-related group travel. A dedicated bus can help keep employee transportation aligned with the event schedule."
},
{
question: "Is a 45 Seater Bus good for school and college tours?",
answer: "Educational institutions can choose a 45 Seater Bus for school excursions, college tours, educational visits, picnics, industrial visits, cultural programs, and recreational outings. With a large group traveling together, teachers, coordinators, and students can follow a common itinerary more easily."
},
{
question: "Can a 45 Seater Bus be used for sightseeing tours from Pune?",
answer: "Sightseeing groups can hire a 45 Seater Bus when their itinerary includes several attractions in Pune or nearby destinations. The large seating capacity makes it suitable for organized tours where passengers prefer to remain together while traveling between different sightseeing locations."
},
{
question: "Can a 45 Seater Bus be used for airport and railway station transfers?",
answer: "Large groups arriving at or departing from Pune Airport or railway stations can use a 45 Seater Bus for coordinated transportation. It can be particularly useful for tour parties, corporate groups, wedding guests, and educational groups traveling with luggage and multiple passengers."
},
{
question: "How can I book a 45 Seater Bus on rent in Pune?",
answer: "To arrange a 45 Seater Bus with Ruturaj Enterprises, share your pickup location, destination, travel date, passenger count, trip duration, and route requirements. Based on these details, the rental plan can be organized according to the group's itinerary and transportation needs."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Nitin Patil",
feedback:
"We hired a 45 Seater Bus from Ruturaj Enterprises for a large family event outside Pune. Managing transportation for all the relatives was much easier with everyone traveling together. The bus was a practical choice for our group and helped us keep the journey organized.",
rating: 5
},
{
id: 2,
name: "Miss. Aarti Joshi",
feedback:
"Our organization arranged a 45 Seater Bus from Ruturaj Enterprises for a group tour. Having one vehicle for the entire party made coordination at the various stops much simpler. The transportation arrangement suited our large group and planned itinerary very well.",
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
  "name": "45 Seater Bus on Rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/45-seater-bus-on-rent-in-pune.webp",
  "description":
    "45 Seater Bus on Rent in Pune from Ruturaj Enterprises is a spacious group transportation solution for large families, tourist groups, corporate teams, wedding parties, schools, colleges, institutions and organizations that need convenient travel for a larger number of passengers. 45 Seater Bus Rental Pune is suitable for group tours, family vacations, corporate transportation, wedding guest movement, school trips, college excursions, sightseeing programs, pilgrimage journeys, airport transfers and long-distance outstation travel. 45 Seater Bus Hire Pune provides an organized way for large groups to travel together in one vehicle instead of arranging multiple smaller vehicles, helping simplify pickup, drop and travel coordination. 45 Seater Bus Booking Pune can be planned according to the pickup location, destination, travel dates, journey duration, route and passenger requirements. 45 Seater AC Bus on Rent Pune is suitable for comfortable travel during warm weather and longer journeys, while 45 Seater Luxury Bus Rental Pune can be arranged for premium group transportation during corporate events, weddings, special occasions, tours and organized travel programs. 45 Seater Bus for Outstation Pune is suitable for journeys to Mumbai, Lonavala, Mahabaleshwar, Panchgani, Nashik, Shirdi, Kolhapur, Satara, Goa, Konkan, Alibaug, Matheran, Ratnagiri, Ganpatipule and other Maharashtra and interstate destinations. 45 Seater Bus for Wedding Pune is useful for transporting wedding guests between hotels, marriage venues, reception locations, airports and railway stations, while 45 Seater Bus for Corporate Events Pune can support employee outings, conferences, seminars, exhibitions, meetings, training programs, business visits and large team events. 45 Seater Bus for School Trips Pune is suitable for educational tours, school picnics, excursions and industrial visits, while 45 Seater Bus for Group Travel Pune provides convenient transportation for large tourist groups, family tours, friends trips and customized road journeys. Airport pickup and drop, railway station transfers, hotel transportation and resort transfers can be included in customized itineraries. Pune Darshan, temple tours, pilgrimage journeys, religious tours and local sightseeing can also be organized with a dedicated driver. Pickup and drop arrangements can be planned from Kothrud, Baner, Aundh, Wakad, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, Kondhwa, Katraj, Shivajinagar, Swargate, Pimpri, Chinchwad, Talegaon, Moshi, Bhosari and surrounding Pune areas. Ruturaj Enterprises supports flexible full-day, weekend, multi-day, local and outstation 45 Seater Bus rental requirements for family tours, corporate transportation, weddings, school trips, college tours, sightseeing, events, pilgrimages and customized large-group journeys from Pune.",
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
    "url": "https://ruturajenterprises.com/45-seater-bus-on-rent-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>45 Seater Bus on Rent in Pune | 45 Seater Bus Rental Pune | +91 9763381382</title>

  <meta
    name="description"
    content="45 Seater Bus on Rent in Pune for large group travel, weddings, corporate events, school trips, family tours, sightseeing, airport transfers and outstation journeys with driver."
  />

  <meta
    name="keywords"
    content="45 Seater Bus Rental Pune, 45 Seater Bus Hire Pune, 45 Seater Bus Booking Pune, 45 Seater AC Bus on Rent Pune, 45 Seater Luxury Bus Rental Pune, 45 Seater Bus for Outstation Pune, 45 Seater Bus for Wedding Pune, 45 Seater Bus for Corporate Events Pune, 45 Seater Bus for School Trips Pune, 45 Seater Bus for Group Travel Pune, 45 Seater Bus for Family Trips Pune, 45 Seater Bus on Rent in Pune, 45 Seater Bus Rental in Pune, 45 Seater Bus Hire in Pune, 45 Seater Bus Booking in Pune, 45 Seater Bus with Driver Pune, 45 Seater Private Bus Pune, 45 Seater AC Bus Rental Pune, 45 Seater AC Bus Hire Pune, 45 Seater AC Bus Booking Pune, 45 Seater Luxury Bus on Rent Pune, 45 Seater Luxury Bus Hire Pune, 45 Seater Luxury Bus Booking Pune, Premium 45 Seater Bus Pune, Affordable 45 Seater Bus Rental Pune, 45 Seater Bus for Large Group Pune, 45 Seater Bus for Group Tour Pune, 45 Seater Bus for Friends Trip Pune, 45 Seater Bus for Family Tour Pune, 45 Seater Bus for Family Vacation Pune, 45 Seater Bus for Weekend Trip Pune, 45 Seater Bus for Holiday Trip Pune, 45 Seater Bus for Road Trip Pune, 45 Seater Bus for Sightseeing Pune, 45 Seater Bus for Local Sightseeing Pune, 45 Seater Bus for Pune Darshan, 45 Seater Bus for Maharashtra Tour Pune, 45 Seater Bus for Goa Trip Pune, 45 Seater Bus for Mumbai Trip Pune, 45 Seater Bus for Lonavala Trip Pune, 45 Seater Bus for Mahabaleshwar Trip Pune, 45 Seater Bus for Panchgani Trip Pune, 45 Seater Bus for Nashik Trip Pune, 45 Seater Bus for Shirdi Trip Pune, 45 Seater Bus for Kolhapur Trip Pune, 45 Seater Bus for Satara Trip Pune, 45 Seater Bus for Konkan Trip Pune, 45 Seater Bus for Alibaug Trip Pune, 45 Seater Bus for Matheran Trip Pune, 45 Seater Bus for Ratnagiri Trip Pune, 45 Seater Bus for Ganpatipule Trip Pune, 45 Seater Bus for Dapoli Trip Pune, 45 Seater Bus for Outstation Trip Pune, 45 Seater Bus Outstation Rental Pune, 45 Seater Bus One Way Pune, 45 Seater Bus Round Trip Pune, 45 Seater Bus Full Day Rental Pune, 45 Seater Bus Multi Day Rental Pune, 45 Seater Bus Weekend Rental Pune, 45 Seater Bus Tour Package Pune, 45 Seater Bus Sightseeing Package Pune, 45 Seater Bus Family Tour Package Pune, 45 Seater Bus Group Tour Package Pune, 45 Seater Bus Corporate Tour Pune, 45 Seater Bus Corporate Travel Pune, 45 Seater Bus for Corporate Outing Pune, 45 Seater Bus for Employee Transportation Pune, 45 Seater Bus for Office Trip Pune, 45 Seater Bus for Company Event Pune, 45 Seater Bus for Business Travel Pune, 45 Seater Bus for Conference Pune, 45 Seater Bus for Seminar Pune, 45 Seater Bus for Exhibition Pune, 45 Seater Bus for Training Pune, 45 Seater Bus for Industrial Visit Pune, 45 Seater Bus for Wedding Guest Pune, 45 Seater Bus for Marriage Pune, 45 Seater Bus for Reception Pune, 45 Seater Bus for Destination Wedding Pune, 45 Seater Bus for Wedding Guest Transportation Pune, 45 Seater Bus for Event Transportation Pune, 45 Seater Bus for Airport Transfer Pune, 45 Seater Bus for Airport Pickup Pune, 45 Seater Bus for Airport Drop Pune, 45 Seater Bus for Pune Airport, 45 Seater Bus for Railway Station Transfer Pune, 45 Seater Bus for Pune Railway Station, 45 Seater Bus for Hotel Transfer Pune, 45 Seater Bus for Resort Transfer Pune, 45 Seater Bus for Guest Pickup Pune, 45 Seater Bus for Guest Drop Pune, 45 Seater Bus for School Tour Pune, 45 Seater Bus for School Picnic Pune, 45 Seater Bus for College Trip Pune, 45 Seater Bus for College Tour Pune, 45 Seater Bus for Student Group Pune, 45 Seater Bus for Temple Tour Pune, 45 Seater Bus for Pilgrimage Pune, 45 Seater Bus for Religious Tour Pune, 45 Seater Bus for Tourist Group Pune, 45 Seater Bus for Group Transportation Pune, 45 Seater Bus for Family Transportation Pune, 45 Seater Bus for Corporate Transportation Pune, 45 Seater Bus for Event Transportation Pune, 45 Seater Bus Rental Near Pune, 45 Seater Bus Hire Near Pune, 45 Seater Bus Booking Near Pune, 45 Seater Bus Rental Pimpri Chinchwad, 45 Seater Bus Hire Pimpri Chinchwad, 45 Seater Bus Rental Wakad, 45 Seater Bus Rental Hinjewadi, 45 Seater Bus Rental Kothrud, 45 Seater Bus Rental Baner, 45 Seater Bus Rental Aundh, 45 Seater Bus Rental Viman Nagar, 45 Seater Bus Rental Kharadi, 45 Seater Bus Rental Hadapsar, 45 Seater Bus Rental Kondhwa, 45 Seater Bus Rental Katraj, 45 Seater Bus Rental Shivajinagar, 45 Seater Bus Rental Swargate, 45 Seater Bus Rental Pimpri, 45 Seater Bus Rental Chinchwad, 45 Seater Bus Rental Talegaon, 45 Seater Bus Rental Moshi, 45 Seater Bus Rental Bhosari"
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
                            <img src='/images/keyword/015.jpg' alt='img' className='img-fluid' />
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

export default Fourseaterfive ;