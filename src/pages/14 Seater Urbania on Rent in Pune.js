import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Onefourseater() {

const cardData = {
keyword: "14 Seater Urbania on Rent in Pune",
headingDescription: "14 Seater Urbania on Rent in Pune is a comfortable group transportation option for family trips, corporate events, weddings, school picnics, airport transfers, pilgrimage tours, sightseeing, and outstation journeys. Ruturaj Enterprises provides spacious Urbania vehicles with comfortable seating, air conditioning, and professional driver assistance for groups that prefer to travel together. Whether the requirement starts from Hadapsar, Kharadi, Viman Nagar, Kothrud, Pimpri Chinchwad, Hinjewadi, Wakad, or another Pune location, a 14-seater Urbania can make group travel more organized and convenient.",
topPlaces: [
{
title: "Hinjewadi IT Park",
description: "Hinjewadi IT Park is one of Pune's major corporate destinations and is suitable for organized group transportation. A 14-seater Urbania can be arranged for employee travel, corporate events, business meetings, team outings, airport transfers, and group journeys starting from or arriving in Hinjewadi."
},
{
title: "Wakad",
description: "Wakad provides convenient connectivity between Hinjewadi, Pimpri Chinchwad, and western Pune. A 14-seater Urbania can be used from Wakad for family holidays, corporate events, weddings, sightseeing trips, airport transfers, and outstation journeys where passengers prefer to travel together."
},
{
title: "Pimpri",
description: "Pimpri is an important residential, commercial, and industrial area in the PCMC region. Group transportation from Pimpri can be arranged for corporate programs, family functions, school outings, weddings, pilgrimage tours, airport transfers, and longer journeys to destinations outside Pune."
},
{
title: "Chinchwad",
description: "Chinchwad is a well-connected PCMC locality with access to industrial areas, residential neighborhoods, and major highways. A 14-seater Urbania provides a practical option for group travel, company events, family trips, educational outings, and outstation transportation from this part of Pune."
},
{
title: "Kharadi",
description: "Kharadi is a major business and residential corridor in eastern Pune. A 14-seater Urbania can support corporate employee transportation, business events, family travel, airport transfers, weddings, and group tours connecting Kharadi with other Pune areas and outstation destinations."
},
{
title: "Viman Nagar",
description: "Viman Nagar is close to Pune International Airport and several hotels, offices, restaurants, and commercial establishments. A 14-seater Urbania from Viman Nagar is useful for airport pickup, corporate travel, family groups, events, sightseeing, and outstation journeys."
},
{
title: "Kothrud",
description: "Kothrud is a major residential and commercial area in western Pune with convenient access toward city routes and popular travel destinations. A 14-seater Urbania can be arranged here for family trips, weddings, corporate events, pilgrimage tours, airport transfers, and group travel."
},
{
title: "Nigdi",
description: "Nigdi is an important northern PCMC locality with good road connectivity toward Pimpri Chinchwad and the Mumbai-Pune corridor. Groups can hire a 14-seater Urbania from Nigdi for family holidays, corporate programs, school picnics, weddings, and outstation tours."
},
{
title: "Akurdi",
description: "Akurdi is a well-connected residential and educational locality in PCMC. A 14-seater Urbania can be useful for college or school groups, family travel, corporate events, wedding transportation, pilgrimage tours, and sightseeing programs that require comfortable group movement."
},
{
title: "Ravet",
description: "Ravet is a growing residential area in western PCMC with convenient access toward Wakad, Tathawade, and the Mumbai-Pune route. A 14-seater Urbania can provide group transportation for family trips, corporate outings, weddings, school picnics, airport transfers, and outstation travel."
}
],
services: [
{
name: "14 Seater Urbania Traveller Pune",
description: "14 Seater Urbania Traveller Pune is suitable for families, corporate teams, event groups, school groups, and tourists who want to travel together. The spacious vehicle can be arranged for local transportation, sightseeing, airport transfers, and longer outstation journeys."
},
{
name: "14 Seater Urbania Hire in Pune",
description: "14 Seater Urbania Hire in Pune provides a convenient group vehicle for customers planning family trips, corporate programs, weddings, school outings, pilgrimage tours, and group travel. Professional driver assistance helps make the journey more organized and comfortable."
},
{
name: "14 Seater Urbania Booking Pune",
description: "14 Seater Urbania Booking Pune allows customers to plan their group transportation around a preferred travel date, pickup location, destination, and itinerary. Advance booking is particularly useful for weddings, corporate events, school picnics, holidays, and outstation tours."
},
{
name: "14 Seater Urbania Van Rental Pune",
description: "14 Seater Urbania Van Rental Pune is a practical option for groups requiring more passenger capacity than a standard car. It can be used for family functions, corporate travel, sightseeing, educational trips, airport transfers, and intercity journeys."
},
{
name: "Luxury 14 Seater Urbania on Rent Pune",
description: "Luxury 14 Seater Urbania on Rent Pune offers a spacious and premium group transportation option for special occasions and longer journeys. It is suitable for corporate events, weddings, family celebrations, executive group travel, sightseeing, and outstation tours."
},
{
name: "14 Seater Urbania for Outstation Pune",
description: "14 Seater Urbania for Outstation Pune is designed for groups travelling from Pune to nearby cities, tourist destinations, religious locations, and other intercity destinations. The larger vehicle helps passengers travel together comfortably throughout the journey."
},
{
name: "14 Seater Urbania Near Me Pune",
description: "14 Seater Urbania Near Me Pune is useful for customers searching for a larger group vehicle close to their preferred pickup location. It can be arranged for family travel, weddings, corporate events, airport transfers, school trips, pilgrimage tours, and outstation requirements."
},
{
name: "14 Seater Urbania for Family Trip Pune",
description: "14 Seater Urbania for Family Trip Pune is a convenient option for families travelling together for holidays, weddings, religious visits, sightseeing, and family functions. One spacious vehicle helps keep the entire group together while making travel coordination easier."
},
{
name: "14 Seater Urbania for Group Travel Pune",
description: "14 Seater Urbania for Group Travel Pune is suitable for friends, families, corporate teams, event participants, students, and organized tour groups. It provides a practical way to manage group transportation for both local Pune journeys and longer intercity trips."
},
{
name: "14 Seater Urbania on Rent Hadapsar",
description: "14 Seater Urbania on Rent Hadapsar is suitable for groups starting from Hadapsar and nearby areas. It can be arranged for corporate transportation, family holidays, weddings, airport transfers, school outings, pilgrimage journeys, and outstation tours."
},
{
name: "14 Seater Urbania Kharadi",
description: "14 Seater Urbania Kharadi provides group transportation for residents, employees, business teams, and event participants. It can be used for corporate events, family trips, airport transfers, weddings, sightseeing, and journeys from Kharadi to outstation destinations."
},
{
name: "14 Seater Urbania Viman Nagar",
description: "14 Seater Urbania Viman Nagar is useful for customers travelling from one of Pune's important airport-connected areas. The vehicle can support family groups, corporate teams, tourists, event participants, and passengers requiring convenient airport or outstation transportation."
},
{
name: "14 Seater Urbania Swargate",
description: "14 Seater Urbania Swargate is suitable for groups starting their journey from central Pune. It can be arranged for family tours, weddings, corporate programs, pilgrimage trips, school outings, sightseeing, airport transfers, and outstation travel."
},
{
name: "14 Seater Urbania Kothrud",
description: "14 Seater Urbania Kothrud offers a convenient group travel solution for families, corporate teams, tourists, and event groups. It is suitable for local travel, airport pickup, wedding transportation, sightseeing programs, pilgrimage tours, and outstation journeys."
},
{
name: "14 Seater Urbania Camp Pune",
description: "14 Seater Urbania Camp Pune provides comfortable group transportation from Pune Camp and nearby central areas. The vehicle can be used for corporate events, weddings, family functions, airport transfers, sightseeing, and longer journeys outside Pune."
},
{
name: "14 Seater Urbania Bibwewadi",
description: "14 Seater Urbania Bibwewadi is suitable for groups travelling from southern Pune. Families, companies, schools, and event organizers can use the vehicle for holidays, corporate outings, wedding functions, pilgrimage tours, airport transfers, and outstation travel."
},
{
name: "14 Seater Urbania Pimpri",
description: "14 Seater Urbania Pimpri provides a spacious transportation option for groups in the Pimpri area. It can be arranged for corporate travel, family trips, school picnics, weddings, airport transfers, pilgrimage journeys, and organized outstation tours."
},
{
name: "14 Seater Urbania Chinchwad",
description: "14 Seater Urbania Chinchwad is useful for families, corporate groups, students, and event participants travelling together. The vehicle can support local group movement as well as longer journeys for weddings, holidays, sightseeing, and pilgrimage programs."
},
{
name: "14 Seater Urbania Hinjewadi",
description: "14 Seater Urbania Hinjewadi is suitable for corporate employees, business groups, event participants, and families travelling from the Hinjewadi area. It can be used for office events, team outings, airport transfers, weddings, and outstation journeys."
},
{
name: "14 Seater Urbania Wakad",
description: "14 Seater Urbania Wakad provides convenient group transportation for customers located around Wakad and nearby western Pune areas. It is suitable for corporate events, family travel, weddings, airport pickup, sightseeing, and outstation tours."
},
{
name: "14 Seater Urbania Nigdi / Akurdi",
description: "14 Seater Urbania Nigdi / Akurdi is suitable for groups from these connected PCMC areas. It can be arranged for school picnics, family trips, weddings, corporate events, pilgrimage tours, airport transfers, and outstation group travel."
},
{
name: "14 Seater Urbania Ravet",
description: "14 Seater Urbania Ravet offers a convenient group vehicle for residents and organizations in western PCMC. It can be used for family holidays, corporate outings, school trips, weddings, airport transfers, sightseeing, and intercity travel."
},
{
name: "14 Seater Urbania for Wedding in Pune",
description: "14 Seater Urbania for Wedding in Pune is useful for transporting relatives, guests, family members, and event participants between homes, hotels, wedding venues, and related functions. A single spacious vehicle can simplify guest movement during the wedding schedule."
},
{
name: "14 Seater Urbania for Corporate Events Pune",
description: "14 Seater Urbania for Corporate Events Pune provides organized group transportation for conferences, seminars, meetings, exhibitions, team outings, annual functions, and company celebrations. The vehicle can accommodate employees or guests travelling together between offices, hotels, and venues."
},
{
name: "14 Seater Urbania for School Picnic Pune",
description: "14 Seater Urbania for School Picnic Pune can be arranged for smaller student groups, teachers, and accompanying staff travelling to educational or recreational destinations. The spacious vehicle offers a convenient option for planned group transportation outside the regular school commute."
},
{
name: "14 Seater Urbania for Airport Pickup Pune",
description: "14 Seater Urbania for Airport Pickup Pune is suitable when multiple passengers need to be collected together from Pune International Airport. It provides enough space for passengers and luggage and can transfer groups conveniently to hotels, offices, residences, or event venues."
},
{
name: "14 Seater Urbania for Pilgrimage Tour Pune",
description: "14 Seater Urbania for Pilgrimage Tour Pune is suitable for families and religious groups visiting temples and pilgrimage destinations from Pune. A dedicated vehicle allows the group to follow a planned itinerary while travelling together comfortably between multiple stops."
},
{
name: "14 Seater Urbania for Family Group Travel Pune",
description: "14 Seater Urbania for Family Group Travel Pune is a practical option when extended family members need to travel together for holidays, functions, weddings, religious visits, or sightseeing. The larger passenger capacity helps simplify travel arrangements for the entire group."
},
{
name: "14 Seater Urbania for Outstation Tour Pune",
description: "14 Seater Urbania for Outstation Tour Pune is suitable for organized group tours from Pune to nearby cities, hill stations, beaches, pilgrimage destinations, and other travel locations. The vehicle provides a comfortable shared transportation option for longer journeys."
}
],
tableData: [
["14 Seater Urbania Traveller Pune"],
["14 Seater Urbania Hire in Pune"],
["14 Seater Urbania Booking Pune"],
["14 Seater Urbania Van Rental Pune"],
["Luxury 14 Seater Urbania on Rent Pune"],
["14 Seater Urbania for Outstation Pune"],
["14 Seater Urbania Near Me Pune"],
["14 Seater Urbania for Family Trip Pune"],
["14 Seater Urbania for Group Travel Pune"],
["14 Seater Urbania on Rent Hadapsar"],
["14 Seater Urbania Kharadi"],
["14 Seater Urbania Viman Nagar"],
["14 Seater Urbania Swargate"],
["14 Seater Urbania Kothrud"],
["14 Seater Urbania Camp Pune"],
["14 Seater Urbania Bibwewadi"],
["14 Seater Urbania Pimpri"],
["14 Seater Urbania Chinchwad"],
["14 Seater Urbania Hinjewadi"],
["14 Seater Urbania Wakad"],
["14 Seater Urbania Nigdi / Akurdi"],
["14 Seater Urbania Ravet"],
["14 Seater Urbania for Wedding in Pune"],
["14 Seater Urbania for Corporate Events Pune"],
["14 Seater Urbania for School Picnic Pune"],
["14 Seater Urbania for Airport Pickup Pune"],
["14 Seater Urbania for Pilgrimage Tour Pune"],
["14 Seater Urbania for Family Group Travel Pune"],
["14 Seater Urbania for Outstation Tour Pune"]
],
whychoose: [
{
WhyChooseheading: "Comfortable 14-Seater Group Travel",
WhyChoosedescription: "A 14-seater Urbania is a practical choice for medium-sized groups that want to travel together in one spacious vehicle. It can accommodate families, corporate teams, students, wedding guests, and tour groups without requiring several separate cars."
},
{
WhyChooseheading: "Ideal for Weddings and Special Events",
WhyChoosedescription: "Wedding functions and special events often require coordinated transportation between homes, hotels, venues, and other locations. A 14-seater Urbania helps event organizers move guests together according to the planned schedule."
},
{
WhyChooseheading: "Useful for Corporate Group Transportation",
WhyChoosedescription: "Companies can arrange a 14-seater Urbania for employee outings, conferences, seminars, business meetings, team activities, and corporate celebrations. The larger vehicle provides a convenient way to coordinate group movement between offices, hotels, and event venues."
},
{
WhyChooseheading: "Suitable for Family Holidays",
WhyChoosedescription: "Extended families can travel together in a 14-seater Urbania for holidays, weddings, sightseeing, religious visits, and family functions. Travelling in one vehicle makes coordination easier and allows the group to follow a common itinerary."
},
{
WhyChooseheading: "Convenient for Outstation Tours",
WhyChoosedescription: "The Urbania is suitable for longer journeys from Pune to tourist destinations, pilgrimage locations, nearby cities, and other intercity routes. Its spacious passenger arrangement makes it a practical option for multi-day group tours."
},
{
WhyChooseheading: "Airport Pickup and Drop Support",
WhyChoosedescription: "Groups arriving at or departing from Pune International Airport can use a 14-seater Urbania for coordinated transfers. The vehicle provides enough space for multiple passengers and their luggage while keeping the group together throughout the airport journey."
},
{
WhyChooseheading: "Professional Driver Assistance",
WhyChoosedescription: "A dedicated professional driver can make group transportation more convenient, especially when the itinerary includes several stops or unfamiliar destinations. Passengers can focus on their event, family plans, or business activities while the travel is handled by the driver."
},
{
WhyChooseheading: "Flexible Pickup Locations Across Pune",
WhyChoosedescription: "Ruturaj Enterprises can arrange 14-seater Urbania transportation for customers from multiple Pune and PCMC locations, including Hadapsar, Kharadi, Viman Nagar, Kothrud, Pimpri, Chinchwad, Hinjewadi, Wakad, Nigdi, Akurdi, and Ravet, depending on the travel requirement."
}
]
};














const faqData = [
{
question: "How can I hire a 14 Seater Urbania on rent in Pune?",
answer: "Customers can enquire about a 14 Seater Urbania by sharing the pickup location, travel date, destination, passenger count, trip duration, and planned route. Ruturaj Enterprises can discuss the vehicle arrangement for family holidays, corporate journeys, weddings, sightseeing tours, school programs, religious trips, and outstation travel."
},
{
question: "Who can hire a 14 Seater Urbania in Pune?",
answer: "Families, corporate teams, wedding groups, tour parties, schools, colleges, social organizations, and other private groups can enquire about a 14 Seater Urbania. It can be a practical option for groups that want to travel together without arranging multiple smaller cars."
},
{
question: "Can I rent a 14 Seater Urbania from Pune for an outstation journey?",
answer: "A 14 Seater Urbania can be arranged for group travel from Pune to destinations such as Goa, Mumbai, Mahabaleshwar, Lonavala, Nashik, Shirdi, Kolhapur, Aurangabad, and other cities or tourist destinations. One-way, round-trip, and multi-day journeys can be discussed according to the itinerary."
},
{
question: "Is a 14 Seater Urbania suitable for family trips from Pune?",
answer: "Families planning vacations, reunions, religious tours, and sightseeing programs can consider a 14 Seater Urbania for their group transportation. Travelling together can make it easier to coordinate departure times, sightseeing stops, hotel transfers, and return journeys throughout the trip."
},
{
question: "Can I book a 14 Seater Urbania for a wedding in Pune?",
answer: "A 14 Seater Urbania can be used for transporting wedding guests and relatives between residences, hotels, marriage halls, reception venues, railway stations, and airports. The vehicle can be planned around the wedding schedule when several guests need to travel together between different locations."
},
{
question: "Can companies hire a 14 Seater Urbania for corporate travel in Pune?",
answer: "Corporate organizations can enquire about a 14 Seater Urbania for team outings, conferences, employee transportation, training programs, business events, industrial visits, and client movement. It can help groups travel together between offices, hotels, event venues, and other business destinations."
},
{
question: "Can a 14 Seater Urbania be used for Pune sightseeing?",
answer: "Groups planning Pune sightseeing or nearby day trips can hire a 14 Seater Urbania according to their preferred itinerary. Multiple attractions, pickup points, meal stops, and return travel can be included in the planned route so the group can remain together during the sightseeing program."
},
{
question: "Can schools and colleges rent a 14 Seater Urbania in Pune?",
answer: "Schools, colleges, student groups, and educational organizations can enquire about a 14 Seater Urbania for excursions, educational visits, picnics, industrial tours, and recreational programs. The passenger count, destination, pickup point, schedule, and duration can be shared when planning the trip."
},
{
question: "Can I use a 14 Seater Urbania for Pune airport transfers?",
answer: "A 14 Seater Urbania can be considered for airport transfers involving families, corporate teams, wedding parties, and tour groups. Customers can provide flight details, pickup or drop location, passenger count, luggage requirements, and required airport reporting time when discussing the arrangement."
},
{
question: "What information is required to book a 14 Seater Urbania on rent in Pune?",
answer: "Customers can provide the pickup address, destination, travel date, number of passengers, rental duration, route details, and expected return time. Information about sightseeing stops, hotel transfers, airport travel, wedding functions, corporate events, or other special requirements can also be shared with Ruturaj Enterprises."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rajesh More",
feedback:
"We rented a 14 Seater Urbania from Ruturaj Enterprises for a family religious trip from Pune. Our group had several members travelling together, and having one vehicle made it much easier to manage the departure and different stops along the route. The overall arrangement was convenient for our group.",
rating: 5
},
{
id: 2,
name: "Miss. Aarti Kulkarni",
feedback:
"Our team arranged a 14 Seater Urbania for a corporate outing near Pune. We had planned several activities during the day, so keeping everyone together was important for our schedule. Ruturaj Enterprises arranged the vehicle according to the itinerary we shared, making the group transportation straightforward to manage.",
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
  "name": "14 Seater Urbania on Rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/14-seater-urbania-on-rent-in-pune.webp",
  "description": "14 Seater Urbania on Rent in Pune from Ruturaj Enterprises is a comfortable and spacious group travel option for families, corporate teams, tour groups, wedding guests and passengers planning local or outstation journeys. 14 Seater Urbania Traveller Pune and 14 Seater Urbania Hire in Pune are suitable for sightseeing, family functions, corporate travel, airport transfers and planned group transportation with a professional driver. 14 Seater Urbania Booking Pune provides a convenient way to arrange a dedicated vehicle for scheduled trips, while 14 Seater Urbania Van Rental Pune can support full-day travel, events, tours and longer journeys. Luxury 14 Seater Urbania on Rent Pune is suitable for passengers seeking a premium travel experience with generous seating and luggage space. For intercity requirements, 14 Seater Urbania for Outstation Pune can be arranged for destinations across Maharashtra and nearby states. Customers searching for 14 Seater Urbania Near Me Pune can choose a convenient pickup arrangement around Pune, while 14 Seater Urbania for Family Trip Pune is suitable for vacations, pilgrimages, weekend tours and multi-day family journeys. Ruturaj Enterprises can also arrange the 14-seater Urbania for corporate events, group sightseeing, weddings and airport transportation.",
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
    "url": "https://ruturajenterprises.com/14-seater-urbania-on-rent-in-pune"
  }
};




    return (
        <div>



<Helmet>
  <title>
    14 Seater Urbania on Rent in Pune | Spacious Luxury Traveller for Family & Group Travel | +91 9763381382
  </title>

  <meta
    name="description"
    content="14 Seater Urbania on Rent in Pune by Ruturaj Enterprises for family trips, group tours, corporate travel, weddings, sightseeing, airport transfers and comfortable outstation journeys."
  />

  <meta
    name="keywords"
    content="14 Seater Urbania on Rent in Pune, 14 Seater Urbania Traveller Pune, 14 Seater Urbania Hire in Pune, 14 Seater Urbania Booking Pune, 14 Seater Urbania Van Rental Pune, Luxury 14 Seater Urbania on Rent Pune, 14 Seater Urbania for Outstation Pune, 14 Seater Urbania Near Me Pune, 14 Seater Urbania for Family Trip Pune, 14 Seater Urbania Rental Pune, 14 Seater Urbania Traveller Hire Pune, 14 Seater Urbania Van on Rent Pune, 14 Seater Urbania with Driver Pune, 14 Seater Urbania Cab Pune, 14 Seater Urbania Taxi Pune, 14 Seater Urbania for Group Travel Pune, 14 Seater Urbania for Corporate Travel Pune, 14 Seater Urbania for Corporate Events Pune, 14 Seater Urbania for Wedding Pune, 14 Seater Urbania for Family Tour Pune, 14 Seater Urbania for Outstation Trips Pune, 14 Seater Urbania for Maharashtra Tour Pune, 14 Seater Urbania Airport Transfer Pune, 14 Seater Urbania Sightseeing Pune, 14 Seater Luxury Traveller Pune, Pune 14 Seater Urbania rental with driver, Pune 14 Seater Urbania outstation hire, Pune 14 Seater Urbania family tour, Pune 14 Seater Urbania group transportation, Pune 14 Seater Urbania van hire, Pune 14 Seater Urbania long distance rental"
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
                            <img src='/images/keyword/105.png' alt='img' className='img-fluid' />
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

export default Onefourseater;