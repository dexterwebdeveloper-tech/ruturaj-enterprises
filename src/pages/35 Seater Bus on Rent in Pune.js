import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Threeffiveseater() {


const cardData = {
keyword: "35 Seater Bus on Rent in Pune",
headingDescription: "Ruturaj Enterprises provides dependable 35 Seater Bus on Rent in Pune for large families, corporate teams, wedding groups, schools, tourist parties, event organizers, and other groups that need convenient shared transportation. A 35-seater bus offers generous seating capacity for group journeys and can be arranged for local sightseeing, airport transfers, picnics, weddings, corporate programs, school excursions, family vacations, and longer travel plans from Pune.",
topPlaces: [
{
title: "Khandala",
description: "Khandala is a scenic hill destination known for mountain views, valleys, viewpoints, and pleasant surroundings, making it popular for group outings from Pune. A 35 seater bus is suitable for families, friends, school groups, and corporate teams planning a comfortable shared day trip."
},
{
title: "Bhimashankar",
description: "Bhimashankar combines religious importance with lush forest surroundings and attracts pilgrims, families, and nature enthusiasts throughout the year. Larger groups can use a 35 seater bus from Pune to coordinate their journey, luggage, planned stops, and return schedule conveniently."
},
{
title: "Malshej Ghat",
description: "Malshej Ghat is a popular mountain getaway featuring scenic valleys, waterfalls, winding roads, and beautiful natural landscapes. Its surroundings make it suitable for group picnics, family outings, nature tours, and corporate trips where a larger bus can keep everyone together."
},
{
title: "Igatpuri",
description: "Igatpuri is known for its hills, greenery, waterfalls, forts, and peaceful surroundings, making it a popular destination for weekend group trips. A 35 seater bus provides a convenient option for families, offices, schools, and tourist groups traveling together from Pune."
},
{
title: "Dapoli",
description: "Dapoli offers beaches, coastal scenery, temples, and peaceful Konkan surroundings, making it suitable for longer family and group holidays. A 35 seater bus is useful when a larger party wants to travel together while carrying luggage and other holiday essentials."
},
{
title: "Ratnagiri",
description: "Ratnagiri is an attractive coastal destination with beaches, forts, temples, scenic locations, and Konkan heritage. Large tourist groups and families traveling from Pune can benefit from a dedicated 35 seater bus for organized transportation throughout their itinerary."
},
{
title: "Kaas Plateau",
description: "Kaas Plateau is known for its seasonal flowers, grasslands, and surrounding natural beauty, attracting nature lovers and organized excursion groups. A 35 seater bus can make group transportation easier for school trips, family outings, photography tours, and nature-focused journeys."
},
{
title: "Karnala",
description: "Karnala is a popular destination for its wildlife sanctuary, historic fort, and natural surroundings, making it suitable for adventure and educational outings. A 35 seater bus allows larger groups from Pune to travel together for a planned day excursion or group picnic."
},
{
title: "Akluj",
description: "Akluj is a destination in Maharashtra suitable for family visits, organized group programs, and regional travel. Larger groups can choose a 35 seater bus from Pune when they require shared transportation with convenient passenger and luggage management."
},
{
title: "Harihareshwar",
description: "Harihareshwar is a peaceful coastal destination known for its temple, beaches, and scenic Konkan environment. It is well suited for pilgrimage groups, families, and tourist parties traveling from Pune who prefer one dedicated bus for their longer coastal journey."
}
],
services: [
{
name: "35 Seater Bus Rental Pune",
description: "Ruturaj Enterprises offers 35 Seater Bus Rental Pune services for large families, corporate teams, wedding parties, schools, tourist groups, event organizers, and other passengers traveling together. The bus can be arranged for local travel, sightseeing, airport transfers, picnics, celebrations, family tours, and long-distance journeys."
},
{
name: "35 Seater Bus Hire Pune",
description: "35 Seater Bus Hire Pune is a convenient choice for groups that want to travel together in one dedicated vehicle instead of managing several smaller vehicles. It can support wedding transportation, corporate programs, school excursions, family vacations, tourist tours, events, and group travel requirements."
},
{
name: "35 Seater Bus Booking Pune",
description: "35 Seater Bus Booking Pune can be planned for local sightseeing, weekend getaways, multi-day tours, weddings, corporate events, school trips, airport transfers, and longer journeys. Early planning makes it easier to coordinate passenger numbers, pickup points, destinations, schedules, luggage, and other trip requirements."
},
{
name: "35 Seater AC Bus on Rent Pune",
description: "35 Seater AC Bus on Rent Pune is suitable for larger groups looking for an air-conditioned travel option for comfortable journeys. It can be used for family vacations, corporate tours, school trips, weddings, airport transportation, tourist programs, and extended routes from Pune."
},
{
name: "35 Seater Luxury Bus Rental Pune",
description: "35 Seater Luxury Bus Rental Pune provides a premium-oriented transportation option for larger groups traveling for special occasions or important programs. It is suitable for corporate events, wedding functions, private group tours, family celebrations, tourist journeys, and other occasions where enhanced comfort is preferred."
},
{
name: "35 Seater Bus for Outstation Pune",
description: "35 Seater Bus for Outstation Pune is suitable for large groups traveling from Pune to destinations across Maharashtra and neighboring states. A dedicated bus allows passengers to stay together while making luggage handling, scheduled breaks, route coordination, and sightseeing arrangements easier."
},
{
name: "35 Seater Bus for Wedding Pune",
description: "35 Seater Bus for Wedding Pune can be used to transport relatives and guests between residences, hotels, temples, marriage halls, banquet venues, and reception locations. Its larger seating capacity helps wedding organizers manage guest transportation efficiently during multiple ceremonies and functions."
},
{
name: "35 Seater Bus for Corporate Events Pune",
description: "35 Seater Bus for Corporate Events Pune is useful for conferences, seminars, exhibitions, employee gatherings, team outings, training programs, and business functions. Corporate teams can travel together between offices, hotels, event venues, and other scheduled destinations with simpler transportation coordination."
},
{
name: "35 Seater Bus for School Trips Pune",
description: "35 Seater Bus for School Trips Pune provides group transportation for educational excursions, historical tours, museums, nature visits, recreational programs, and school picnics. The larger seating capacity makes it practical for groups of students, teachers, and accompanying staff traveling to a common destination."
},
{
name: "35 Seater Bus for Group Travel Pune",
description: "35 Seater Bus for Group Travel Pune is designed for larger groups of friends, relatives, colleagues, tourists, community members, and organized travelers. One dedicated vehicle can simplify passenger coordination, pickup planning, route management, luggage handling, and overall group transportation."
},
{
name: "35 Seater Bus for Family Trip Pune",
description: "35 Seater Bus for Family Trip Pune is suitable for extended families and relatives traveling together for holidays, pilgrimages, weekend getaways, and destination tours. A shared bus allows everyone to remain together while providing a convenient arrangement for luggage, planned stops, and sightseeing schedules."
},
{
name: "35 Seater Bus for Airport Pickup Pune",
description: "35 Seater Bus for Airport Pickup Pune is useful for large families, corporate teams, wedding groups, tourist parties, and organized travelers arriving at or departing from Pune Airport. A dedicated bus can accommodate a larger passenger group and their luggage while reducing the need for multiple airport vehicles."
},
{
name: "35 Seater Bus Near Me Pune",
description: "35 Seater Bus Near Me Pune is useful for travelers searching for a larger-capacity bus rental option within Pune. Ruturaj Enterprises supports requirements such as local sightseeing, airport transfers, weddings, corporate programs, school trips, family holidays, picnics, events, and outstation tours."
},
{
name: "Affordable 35 Seater Bus Rental Pune",
description: "Affordable 35 Seater Bus Rental Pune offers a practical transportation solution for large groups that prefer one shared vehicle rather than arranging several smaller options. It can be planned for family tours, school trips, corporate travel, weddings, tourist programs, picnics, events, and longer journeys."
},
{
name: "35 Seater Bus for Picnic Pune",
description: "35 Seater Bus for Picnic Pune is suitable for schools, families, offices, friends, community organizations, and other groups planning recreational outings. The spacious seating arrangement makes it easier to travel together while carrying food, bags, outdoor equipment, and other picnic essentials."
},
{
name: "35 Seater Bus for Marriage Function Pune",
description: "35 Seater Bus for Marriage Function Pune can be arranged for transporting relatives and guests during marriage ceremonies, receptions, and related celebrations. It provides a shared transportation solution for movement between homes, hotels, temples, banquet halls, function venues, and other locations."
},
{
name: "35 Seater Bus for Corporate Travel Pune",
description: "35 Seater Bus for Corporate Travel Pune provides group transportation for employees attending meetings, business tours, training programs, client visits, conferences, and company activities. Traveling together in one dedicated vehicle can make corporate movement more organized and reduce coordination between multiple vehicles."
},
{
name: "35 Seater Bus for Event Pune",
description: "35 Seater Bus for Event Pune is suitable for exhibitions, conferences, cultural programs, social gatherings, private celebrations, corporate functions, and other large events. Event organizers can use a dedicated bus to coordinate passenger movement between pickup points, hotels, venues, and planned event locations."
},
{
name: "35 Seater Bus for Tourist Trip Pune",
description: "35 Seater Bus for Tourist Trip Pune provides convenient transportation for larger tourist parties visiting multiple attractions and destinations. It can support sightseeing circuits, heritage tours, pilgrimage journeys, family vacations, weekend holidays, and organized tourism programs starting from Pune."
},
{
name: "35 Seater Bus for Outstation Tour Pune",
description: "35 Seater Bus for Outstation Tour Pune is a practical option for large groups planning long-distance vacations, destination tours, pilgrimage journeys, weekend getaways, and multi-day itineraries. A dedicated bus helps simplify passenger coordination, luggage management, scheduled breaks, sightseeing stops, and return arrangements."
},
{
name: "35 Seater AC Bus Hire Pune",
description: "35 Seater AC Bus Hire Pune provides an air-conditioned transportation option for larger groups who want a comfortable shared journey. It can be considered for airport transfers, weddings, corporate programs, school trips, family vacations, tourist tours, local sightseeing, and outstation travel."
},
{
name: "35 Seater Luxury Bus on Rent Pune",
description: "35 Seater Luxury Bus on Rent Pune is suitable for larger groups looking for a premium-oriented travel arrangement for special occasions and longer journeys. It can be used for wedding functions, corporate events, private tours, family celebrations, tourist trips, and other group transportation requirements."
}
],
tableData: [
["35 Seater Bus Rental Pune", "35 Seater Bus Hire Pune"],
["35 Seater Bus Booking Pune", "35 Seater AC Bus on Rent Pune"],
["35 Seater Luxury Bus Rental Pune", "35 Seater Bus for Outstation Pune"],
["35 Seater Bus for Wedding Pune", "35 Seater Bus for Corporate Events Pune"],
["35 Seater Bus for School Trips Pune", "35 Seater Bus for Group Travel Pune"],
["35 Seater Bus for Family Trip Pune", "35 Seater Bus for Airport Pickup Pune"],
["35 Seater Bus Near Me Pune", "Affordable 35 Seater Bus Rental Pune"],
["35 Seater Bus for Picnic Pune", "35 Seater Bus for Marriage Function Pune"],
["35 Seater Bus for Corporate Travel Pune", "35 Seater Bus for Event Pune"],
["35 Seater Bus for Tourist Trip Pune", "35 Seater Bus for Outstation Tour Pune"],
["35 Seater AC Bus Hire Pune", "35 Seater Luxury Bus on Rent Pune"]
],
whychoose: [
{
WhyChooseheading: "Generous Seating for Large Groups",
WhyChoosedescription: "A 35 seater bus offers a convenient transportation arrangement for larger families, school groups, corporate teams, wedding parties, and tourist groups. Keeping passengers together in one vehicle can make long-distance travel and organized itineraries much easier to manage."
},
{
WhyChooseheading: "Convenient Alternative to Multiple Vehicles",
WhyChoosedescription: "Large groups traveling in several cars may need to coordinate different drivers, routes, parking areas, and arrival times. One dedicated 35 seater bus provides a more centralized transportation arrangement and helps the group stay together throughout the journey."
},
{
WhyChooseheading: "Designed for Extended Journeys",
WhyChoosedescription: "Long-distance trips often require enough seating capacity along with space for personal luggage and travel essentials. The 35 seater format is suitable for family holidays, pilgrimage tours, corporate journeys, school excursions, and multi-day tourist programs."
},
{
WhyChooseheading: "Helpful for Wedding Guest Movement",
WhyChoosedescription: "Wedding functions frequently involve transportation between multiple venues and accommodation locations. A 35 seater bus can carry a substantial group of relatives and guests while helping organizers maintain a planned movement schedule for ceremonies and celebrations."
},
{
WhyChooseheading: "Practical Corporate Transportation",
WhyChoosedescription: "Corporate organizations can use larger-capacity bus services for conferences, employee outings, training programs, exhibitions, meetings, and business events. A shared vehicle makes it easier for teams to follow a common route and reach scheduled venues together."
},
{
WhyChooseheading: "Comfort Options for Different Trips",
WhyChoosedescription: "Travel requirements can vary depending on the destination, weather, duration, and purpose of the journey. AC and luxury-oriented 35 seater options provide additional flexibility for groups seeking a more comfortable transportation experience."
},
{
WhyChooseheading: "Suitable for School and Group Excursions",
WhyChoosedescription: "Educational trips, picnics, nature tours, and recreational programs often involve many participants traveling to the same destination. A 35 seater bus provides a useful shared transportation solution for students, teachers, families, friends, and organized groups."
},
{
WhyChooseheading: "Flexible Travel from Pune",
WhyChoosedescription: "Ruturaj Enterprises supports 35 seater bus requirements for local travel as well as longer journeys from Pune. Arrangements can be planned according to passenger count, pickup locations, destination, journey duration, sightseeing requirements, wedding schedules, corporate programs, and event transportation needs."
}
]
};








const faqData = [
{
question: "Why is a 35 Seater Bus a good option for group travel in Pune?",
answer: "A 35 Seater Bus offers a practical transportation solution for large groups that want to travel together from Pune. It can be used for family functions, corporate outings, weddings, school and college tours, pilgrimages, sightseeing programs, and longer outstation journeys."
},
{
question: "Who can book a 35 Seater Bus on rent in Pune?",
answer: "Tour groups, families, corporate teams, schools, colleges, wedding organizers, event planners, and social organizations can hire a 35 Seater Bus when transportation is needed for a larger number of passengers. One dedicated bus can simplify group coordination throughout the trip."
},
{
question: "Can I hire a 35 Seater Bus from Pune for an outstation trip?",
answer: "A 35 Seater Bus can be arranged for outstation routes from Pune to destinations such as Mumbai, Goa, Shirdi, Nashik, Mahabaleshwar, Kolhapur, Konkan, and other cities or tourist destinations. The journey can be planned according to the group's route and schedule."
},
{
question: "Is a 35 Seater Bus suitable for family tours?",
answer: "Families traveling in larger numbers can choose a 35 Seater Bus for vacations, reunions, religious tours, destination visits, and sightseeing trips. Traveling together in one vehicle helps reduce coordination between multiple cars and keeps the group connected during the journey."
},
{
question: "Can a 35 Seater Bus be hired for weddings and marriage functions?",
answer: "Wedding parties can rent a 35 Seater Bus to move relatives and guests between homes, hotels, marriage halls, reception venues, railway stations, and airports. The spacious seating capacity makes it useful when a large number of guests need transportation for different wedding events."
},
{
question: "Can corporate groups rent a 35 Seater Bus in Pune?",
answer: "Businesses can arrange a 35 Seater Bus for employee transportation, corporate outings, conferences, seminars, training programs, team-building activities, industrial visits, and company events. Group transportation can make employee movement more organized during scheduled programs."
},
{
question: "Is a 35 Seater Bus suitable for school and college tours?",
answer: "Schools and colleges can use a 35 Seater Bus for educational excursions, picnics, industrial visits, study tours, cultural programs, and recreational trips. A dedicated bus allows students and accompanying staff to follow a common travel schedule and route."
},
{
question: "Can I book a 35 Seater Bus for sightseeing in Pune and nearby areas?",
answer: "Groups planning sightseeing around Pune and nearby destinations can hire a 35 Seater Bus for convenient group movement. It is especially useful when the itinerary includes several attractions and the passengers prefer to travel together rather than arranging multiple smaller vehicles."
},
{
question: "Can a 35 Seater Bus be used for airport and railway station transfers?",
answer: "Large families, corporate teams, wedding groups, and tour parties can use a 35 Seater Bus for Pune Airport or railway station transfers. Coordinating a larger group through one vehicle can make arrivals, departures, luggage movement, and onward travel easier to manage."
},
{
question: "How can I book a 35 Seater Bus on rent in Pune?",
answer: "To plan a 35 Seater Bus rental with Ruturaj Enterprises, provide the pickup point, destination, travel date, number of passengers, trip duration, and route details. These details help in organizing a suitable transportation arrangement around your group's itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rahul Bhosale",
feedback:
"Our family group rented a 35 Seater Bus from Ruturaj Enterprises for an outstation function. Since everyone traveled together, coordinating the group at different stops was much easier than using several cars. The bus worked well for the size of our family and the planned journey.",
rating: 5
},
{
id: 2,
name: "Miss. Pooja More",
feedback:
"We arranged a 35 Seater Bus from Ruturaj Enterprises for our college excursion. Having one vehicle for the entire group made the transportation plan much simpler and helped everyone stay together throughout the tour. It was a convenient choice for our scheduled activities.",
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
  "name": "35 Seater Bus on Rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/35-seater-bus-on-rent-in-pune.webp",
  "description":
    "35 Seater Bus on Rent in Pune from Ruturaj Enterprises is a spacious group transportation solution designed for large families, friends, corporate teams, wedding groups, schools, colleges, tourist groups, institutions and organizations traveling together. 35 Seater Bus Rental Pune is suitable for local sightseeing, family vacations, group tours, corporate transportation, wedding guest movement, school excursions, college trips, pilgrimage journeys, airport transfers and long-distance outstation travel. 35 Seater Bus Hire Pune allows larger groups to travel together in one vehicle rather than arranging several smaller vehicles, making group transportation more organized and convenient. 35 Seater Bus Booking Pune can be planned according to the pickup location, destination, travel schedule, journey duration and passenger requirements. 35 Seater AC Bus on Rent Pune provides a comfortable environment for warm-weather journeys and longer routes, while 35 Seater Luxury Bus Rental Pune is suitable for premium group transportation during corporate events, weddings, special occasions, tours and organized travel programs. 35 Seater Bus for Outstation Pune can be arranged for popular destinations including Mumbai, Lonavala, Mahabaleshwar, Panchgani, Nashik, Shirdi, Kolhapur, Satara, Goa, Konkan, Alibaug, Matheran, Ratnagiri, Ganpatipule and other Maharashtra and interstate destinations. 35 Seater Bus for Wedding Pune is useful for transporting wedding guests between hotels, venues, reception locations, airports and railway stations. 35 Seater Bus for Corporate Events Pune can support employee outings, conferences, seminars, exhibitions, meetings, training programs, business visits and team-building activities. 35 Seater Bus for School Trips Pune is suitable for educational tours, school picnics, excursions, student transportation and industrial visits, while 35 Seater Bus for Group Travel Pune provides convenient transportation for tourist groups, family vacations, friends trips and customized road journeys. Airport pickup and drop, railway station transfers, hotel transportation and resort transfers can also be included in customized travel plans. Pune Darshan, temple tours, pilgrimage journeys, religious tours and local sightseeing can be organized with a dedicated driver. Pickup and drop arrangements can be planned from Kothrud, Baner, Aundh, Wakad, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, Kondhwa, Katraj, Shivajinagar, Swargate, Pimpri, Chinchwad, Talegaon, Moshi, Bhosari and surrounding Pune areas. Ruturaj Enterprises supports flexible full-day, weekend, multi-day, local and outstation 35 Seater Bus rental requirements for family tours, corporate transportation, weddings, school trips, college tours, sightseeing, events, pilgrimages and customized large-group journeys from Pune.",
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
    "url": "https://ruturajenterprises.com/35-seater-bus-on-rent-in-pune"
  }
};










    return (
        <div>
<Helmet>
  <title>35 Seater Bus on Rent in Pune | 35 Seater Bus Rental Pune | +91 9763381382</title>

  <meta
    name="description"
    content="35 Seater Bus on Rent in Pune for large group travel, weddings, corporate events, school trips, family tours, sightseeing, airport transfers and outstation journeys with driver."
  />

  <meta
    name="keywords"
    content="35 Seater Bus Rental Pune, 35 Seater Bus Hire Pune, 35 Seater Bus Booking Pune, 35 Seater AC Bus on Rent Pune, 35 Seater Luxury Bus Rental Pune, 35 Seater Bus for Outstation Pune, 35 Seater Bus for Wedding Pune, 35 Seater Bus for Corporate Events Pune, 35 Seater Bus for School Trips Pune, 35 Seater Bus for Group Travel Pune, 35 Seater Bus for Family Trips Pune, 35 Seater Bus on Rent in Pune, 35 Seater Bus Rental in Pune, 35 Seater Bus Hire in Pune, 35 Seater Bus Booking in Pune, 35 Seater Bus with Driver Pune, 35 Seater Private Bus Pune, 35 Seater AC Bus Rental Pune, 35 Seater AC Bus Hire Pune, 35 Seater AC Bus Booking Pune, 35 Seater Luxury Bus on Rent Pune, 35 Seater Luxury Bus Hire Pune, 35 Seater Luxury Bus Booking Pune, Premium 35 Seater Bus Pune, Affordable 35 Seater Bus Rental Pune, 35 Seater Bus for Large Group Pune, 35 Seater Bus for Group Tour Pune, 35 Seater Bus for Friends Trip Pune, 35 Seater Bus for Family Tour Pune, 35 Seater Bus for Family Vacation Pune, 35 Seater Bus for Weekend Trip Pune, 35 Seater Bus for Holiday Trip Pune, 35 Seater Bus for Road Trip Pune, 35 Seater Bus for Sightseeing Pune, 35 Seater Bus for Local Sightseeing Pune, 35 Seater Bus for Pune Darshan, 35 Seater Bus for Maharashtra Tour Pune, 35 Seater Bus for Goa Trip Pune, 35 Seater Bus for Mumbai Trip Pune, 35 Seater Bus for Lonavala Trip Pune, 35 Seater Bus for Mahabaleshwar Trip Pune, 35 Seater Bus for Panchgani Trip Pune, 35 Seater Bus for Nashik Trip Pune, 35 Seater Bus for Shirdi Trip Pune, 35 Seater Bus for Kolhapur Trip Pune, 35 Seater Bus for Satara Trip Pune, 35 Seater Bus for Konkan Trip Pune, 35 Seater Bus for Alibaug Trip Pune, 35 Seater Bus for Matheran Trip Pune, 35 Seater Bus for Ratnagiri Trip Pune, 35 Seater Bus for Ganpatipule Trip Pune, 35 Seater Bus for Dapoli Trip Pune, 35 Seater Bus for Outstation Trip Pune, 35 Seater Bus Outstation Rental Pune, 35 Seater Bus One Way Pune, 35 Seater Bus Round Trip Pune, 35 Seater Bus Full Day Rental Pune, 35 Seater Bus Multi Day Rental Pune, 35 Seater Bus Weekend Rental Pune, 35 Seater Bus Tour Package Pune, 35 Seater Bus Sightseeing Package Pune, 35 Seater Bus Family Tour Package Pune, 35 Seater Bus Group Tour Package Pune, 35 Seater Bus Corporate Tour Pune, 35 Seater Bus Corporate Travel Pune, 35 Seater Bus for Corporate Outing Pune, 35 Seater Bus for Employee Transportation Pune, 35 Seater Bus for Office Trip Pune, 35 Seater Bus for Company Event Pune, 35 Seater Bus for Business Travel Pune, 35 Seater Bus for Conference Pune, 35 Seater Bus for Seminar Pune, 35 Seater Bus for Exhibition Pune, 35 Seater Bus for Training Pune, 35 Seater Bus for Industrial Visit Pune, 35 Seater Bus for Wedding Guest Pune, 35 Seater Bus for Marriage Pune, 35 Seater Bus for Reception Pune, 35 Seater Bus for Destination Wedding Pune, 35 Seater Bus for Wedding Guest Transportation Pune, 35 Seater Bus for Event Transportation Pune, 35 Seater Bus for Airport Transfer Pune, 35 Seater Bus for Airport Pickup Pune, 35 Seater Bus for Airport Drop Pune, 35 Seater Bus for Pune Airport, 35 Seater Bus for Railway Station Transfer Pune, 35 Seater Bus for Pune Railway Station, 35 Seater Bus for Hotel Transfer Pune, 35 Seater Bus for Resort Transfer Pune, 35 Seater Bus for Guest Pickup Pune, 35 Seater Bus for Guest Drop Pune, 35 Seater Bus for School Tour Pune, 35 Seater Bus for School Picnic Pune, 35 Seater Bus for College Trip Pune, 35 Seater Bus for College Tour Pune, 35 Seater Bus for Student Group Pune, 35 Seater Bus for Temple Tour Pune, 35 Seater Bus for Pilgrimage Pune, 35 Seater Bus for Religious Tour Pune, 35 Seater Bus for Tourist Group Pune, 35 Seater Bus for Group Transportation Pune, 35 Seater Bus for Family Transportation Pune, 35 Seater Bus for Corporate Transportation Pune, 35 Seater Bus for Event Transportation Pune, 35 Seater Bus Rental Near Pune, 35 Seater Bus Hire Near Pune, 35 Seater Bus Booking Near Pune, 35 Seater Bus Rental Pimpri Chinchwad, 35 Seater Bus Hire Pimpri Chinchwad, 35 Seater Bus Rental Wakad, 35 Seater Bus Rental Hinjewadi, 35 Seater Bus Rental Kothrud, 35 Seater Bus Rental Baner, 35 Seater Bus Rental Aundh, 35 Seater Bus Rental Viman Nagar, 35 Seater Bus Rental Kharadi, 35 Seater Bus Rental Hadapsar, 35 Seater Bus Rental Kondhwa, 35 Seater Bus Rental Katraj, 35 Seater Bus Rental Shivajinagar, 35 Seater Bus Rental Swargate, 35 Seater Bus Rental Pimpri, 35 Seater Bus Rental Chinchwad, 35 Seater Bus Rental Talegaon, 35 Seater Bus Rental Moshi, 35 Seater Bus Rental Bhosari"
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
                            <img src='/images/keyword/14.jpg' alt='img' className='img-fluid' />
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

export default Threeffiveseater ;