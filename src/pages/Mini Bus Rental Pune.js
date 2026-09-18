import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Minibusrentalpune() {

const cardData = {
keyword: "Mini Bus Rental Pune",
headingDescription: "Ruturaj Enterprises provides dependable and professionally organized Mini Bus Rental Pune services for families, friends, corporate teams, schools, colleges, wedding groups, tourists, event organizers, and medium-sized travel parties. Mini buses are a practical choice for group transportation when passengers want to travel together for outstation tours, family vacations, corporate programs, wedding functions, school excursions, airport transfers, picnics, sightseeing plans, one-day trips, pilgrimage journeys, and customized tourist itineraries. Customers can choose AC, non-AC, luxury, affordable, tourist, family, or corporate travel arrangements according to group size, luggage requirements, destination, journey duration, comfort preferences, itinerary, and budget. Dedicated mini bus transportation helps simplify pickup coordination, sightseeing stops, hotel transfers, meal breaks, event venue travel, and return schedules while allowing passengers to remain together throughout the journey from Pune.",
topPlaces: [
{
title: "Malshej Ghat",
description: "Malshej Ghat is a scenic destination suitable for families, friends, corporate teams, college groups, and weekend travelers planning a group journey from Pune. A mini bus provides convenient shared transportation for viewpoints, nature attractions, picnic locations, and nearby sightseeing stops while keeping passengers together according to the planned schedule."
},
{
title: "Aurangabad",
description: "Aurangabad is suitable for historical tours, family vacations, school excursions, pilgrimage journeys, and organized tourist programs traveling from Pune. A dedicated mini bus makes group transportation easier for visiting heritage attractions, religious sites, hotels, meal stops, and nearby destinations while maintaining a coordinated itinerary."
},
{
title: "Alibaug",
description: "Alibaug is a popular coastal destination for families, friends, corporate groups, and picnic parties looking for a convenient getaway from Pune. Mini bus rental allows the group to travel together with luggage while making it easier to coordinate beach visits, resort transfers, sightseeing stops, meal breaks, and the planned return journey."
},
{
title: "Shirdi",
description: "Shirdi attracts families, religious groups, senior citizens, and organized tour parties traveling from Pune for pilgrimage visits. A mini bus can accommodate the group comfortably while supporting coordinated pickup points, luggage arrangements, temple visits, meal breaks, sightseeing requirements, and scheduled transportation back to Pune."
},
{
title: "Panchgani",
description: "Panchgani is a convenient hill destination for family holidays, school trips, corporate outings, and group vacations from Pune. A rented mini bus provides shared transportation for scenic viewpoints, resorts, picnic areas, and nearby attractions while making group movement and luggage coordination easier throughout the trip."
},
{
title: "Ratnagiri",
description: "Ratnagiri is suitable for coastal holidays, family tours, cultural journeys, and multi-day tourist programs from Pune. Mini bus transportation can keep the group together during the longer journey while allowing planned stops for sightseeing, accommodation transfers, meals, luggage handling, and return travel."
},
{
title: "Bhimashankar",
description: "Bhimashankar is a suitable destination for pilgrimage groups, families, senior citizens, and nature-loving travelers traveling from Pune. A mini bus can provide organized transportation for temple visits and nearby scenic locations while supporting coordinated boarding, luggage, meal breaks, sightseeing, and return arrangements."
},
{
title: "Kamshet",
description: "Kamshet is well suited for family outings, college groups, corporate retreats, adventure programs, and short recreational trips from Pune. A mini bus makes group travel convenient by providing shared transportation for activity locations, resorts, picnic areas, meal stops, luggage, and planned return schedules."
},
{
title: "Diveagar",
description: "Diveagar offers beaches, coastal attractions, and peaceful surroundings that make it suitable for family holidays, friend groups, and weekend travel from Pune. A dedicated mini bus helps coordinate the entire group with space for luggage and convenient planning for resort transfers, beach visits, sightseeing stops, and return travel."
},
{
title: "Saputara",
description: "Saputara is a suitable destination for families, corporate groups, school parties, and tourists planning a longer sightseeing journey from Pune. Mini bus transportation allows passengers to travel together while supporting planned hotel transfers, scenic stops, meal breaks, local sightseeing, luggage arrangements, and a structured return itinerary."
}
],
services: [
{
name: "Mini Bus On Rent Pune",
description: "Mini Bus On Rent Pune services are suitable for families, friends, corporate teams, schools, tourists, wedding groups, and organizations requiring shared transportation from Pune. Rental arrangements can be planned according to passenger capacity, luggage requirements, route, destination, trip duration, sightseeing needs, pickup points, and preferred comfort level."
},
{
name: "Mini Bus Hire Pune",
description: "Mini Bus Hire Pune provides a convenient transportation option for groups that want to travel together without arranging several individual cars. Ruturaj Enterprises can organize the journey according to passenger count, route distance, travel duration, luggage volume, sightseeing requirements, accommodation transfers, and planned return schedule."
},
{
name: "Mini Bus Booking Pune",
description: "Mini Bus Booking Pune services help customers arrange group transportation in advance for family trips, corporate events, school excursions, weddings, tourist tours, picnics, airport transfers, and outstation journeys. Booking requirements can be coordinated around travel dates, pickup locations, destination, passenger count, preferred bus category, itinerary, and trip duration."
},
{
name: "AC Mini Bus Rental Pune",
description: "AC Mini Bus Rental Pune services are suitable for groups looking for a comfortable travel environment during family vacations, corporate programs, wedding functions, tourist tours, school trips, and longer journeys. Air-conditioned transportation helps create a convenient shared travel experience while supporting organized seating, luggage planning, sightseeing stops, and scheduled breaks."
},
{
name: "Non AC Mini Bus Rental Pune",
description: "Non AC Mini Bus Rental Pune services offer a practical transportation option for groups seeking economical travel arrangements. These mini buses can be useful for school trips, picnics, short tours, local sightseeing, family programs, and budget-conscious journeys where shared passenger capacity and coordinated transportation are important."
},
{
name: "Luxury Mini Bus Rental Pune",
description: "Luxury Mini Bus Rental Pune services are suitable for groups that prefer a more premium travel arrangement for corporate events, weddings, special occasions, family vacations, and tourist journeys. The luxury format provides organized group transportation for medium-sized parties while placing greater emphasis on comfort, presentation, and the overall travel experience."
},
{
name: "Mini Bus for Outstation Pune",
description: "Mini Bus for Outstation Pune services support group journeys to destinations across Maharashtra and other states for family vacations, pilgrimages, corporate programs, educational tours, weddings, and tourist circuits. Travel plans can include route coordination, overnight journeys, sightseeing stops, hotel transfers, meal breaks, luggage requirements, and scheduled return transportation."
},
{
name: "Mini Bus for Family Trip Pune",
description: "Mini Bus for Family Trip Pune arrangements are useful for relatives and families traveling together from Pune for vacations, celebrations, pilgrimages, and sightseeing programs. The service can support coordinated pickup points, luggage, hotel transfers, meal breaks, family-friendly sightseeing schedules, intermediate stops, and return transportation."
},
{
name: "Mini Bus for Group Travel Pune",
description: "Mini Bus for Group Travel Pune services are suitable for friends, relatives, associations, clubs, tour parties, and organized groups planning a common journey. A dedicated mini bus allows passengers to remain together while accommodating shared pickup points, luggage arrangements, sightseeing schedules, meal stops, accommodation transfers, and return travel."
},
{
name: "Mini Bus for Corporate Events Pune",
description: "Mini Bus for Corporate Events Pune services can support conferences, seminars, employee gatherings, team outings, business events, corporate celebrations, and off-site programs. Dedicated transportation helps organizations coordinate employee pickup locations, venue transfers, reporting times, luggage, event schedules, and organized return journeys."
},
{
name: "Mini Bus for Wedding Pune",
description: "Mini Bus for Wedding Pune services provide organized transportation for wedding guests traveling between homes, hotels, ceremony venues, reception locations, and other event destinations. A mini bus is suitable for smaller guest groups and can be scheduled around function timings, multiple pickup points, luggage needs, waiting periods, and return requirements."
},
{
name: "Mini Bus for School Trip Pune",
description: "Mini Bus for School Trip Pune services are suitable for educational excursions, student tours, nature programs, museum visits, historical journeys, picnics, and intercity school activities. Transportation can be organized around student capacity, teacher requirements, school departure times, planned stops, destination activities, luggage arrangements, and the return schedule."
},
{
name: "Mini Bus for Airport Pickup Pune",
description: "Mini Bus for Airport Pickup Pune services can be arranged for families, corporate teams, tourist groups, wedding parties, and organizations requiring coordinated airport transportation. The service helps manage passengers and luggage through planned pickup locations, airport transfers, hotel connections, arrival or departure schedules, and onward travel requirements."
},
{
name: "Affordable Mini Bus Rental Pune",
description: "Affordable Mini Bus Rental Pune services provide a practical solution for groups that want shared transportation while maintaining control over their travel budget. Rental planning can consider passenger count, route distance, journey duration, luggage requirements, number of stops, itinerary, and preferred vehicle category to create a suitable group travel arrangement."
},
{
name: "Mini Bus Rental Service Pune",
description: "Mini Bus Rental Service Pune supports family tours, corporate events, school trips, weddings, picnics, airport transfers, sightseeing programs, tourist journeys, and outstation travel requirements. Ruturaj Enterprises can organize the rental according to passenger capacity, pickup locations, destination, travel duration, itinerary, luggage requirements, and planned return schedule."
},
{
name: "Mini Bus for Picnic Pune",
description: "Mini Bus for Picnic Pune services are useful for families, schools, colleges, offices, clubs, and friend groups planning recreational outings and day trips. A dedicated mini bus allows everyone to travel together while supporting coordinated departure times, luggage arrangements, meal breaks, sightseeing stops, recreational activities, and return transportation."
},
{
name: "Mini Bus for Local Sightseeing Pune",
description: "Mini Bus for Local Sightseeing Pune services can accommodate groups visiting multiple attractions during an organized sightseeing program around Pune and nearby destinations. The journey can be planned around pickup locations, passenger capacity, sightseeing sequence, stop duration, luggage requirements, final drop point, and the group's preferred travel schedule."
},
{
name: "Mini Bus for One Day Trip Pune",
description: "Mini Bus for One Day Trip Pune services are suitable for groups planning a same-day journey with coordinated departure and return timings. The itinerary can include destination travel, sightseeing stops, meal breaks, waiting periods, recreational activities, and planned return transportation while allowing all passengers to remain together throughout the day."
},
{
name: "Mini Bus for Corporate Travel Pune",
description: "Mini Bus for Corporate Travel Pune services can support employee transportation, business meetings, conferences, training programs, client visits, team outings, company tours, and corporate events. A dedicated mini bus helps coordinate employees through planned pickup points, venue transfers, reporting times, luggage handling, event schedules, and organized return travel."
},
{
name: "Mini Bus for Marriage Function Pune",
description: "Mini Bus for Marriage Function Pune services help families coordinate guest transportation for marriage ceremonies, receptions, engagement programs, and related functions. The schedule can be aligned with event timings and pickup points so guests can reach venues together while maintaining convenient arrangements for luggage, waiting periods, venue transfers, and return transportation."
},
{
name: "Mini Bus for Tourist Trip Pune",
description: "Mini Bus for Tourist Trip Pune services are suitable for families, friends, organized tourist parties, associations, and travel groups visiting destinations across Maharashtra and other states. Customized itineraries can include sightseeing, hotel transfers, meal stops, overnight travel, luggage arrangements, destination transfers, intermediate stops, and scheduled return journeys."
},
{
name: "Mini Bus for Outstation Tour Pune",
description: "Mini Bus for Outstation Tour Pune services are designed for organized group tours requiring comfortable shared transportation from Pune to regional and long-distance destinations. Travel plans can be customized around sightseeing circuits, family holidays, pilgrimage routes, corporate tours, school programs, accommodation transfers, meal breaks, overnight journeys, and return schedules."
}
],
tableData: [
["Mini Bus On Rent Pune", "Mini bus rental for families, corporate groups, schools, weddings, tourists, picnics, and group travel."],
["Mini Bus Hire Pune", "Dedicated mini bus hiring for medium-sized groups traveling together from Pune on planned routes."],
["Mini Bus Booking Pune", "Advance mini bus booking for tours, weddings, events, school programs, airport transfers, and corporate travel."],
["AC Mini Bus Rental Pune", "Air-conditioned mini bus option for comfortable family trips, corporate journeys, weddings, tours, and long-distance travel."],
["Non AC Mini Bus Rental Pune", "Economical non-AC mini bus transportation for school trips, picnics, short tours, and budget-conscious group journeys."],
["Luxury Mini Bus Rental Pune", "Premium mini bus transportation for weddings, corporate programs, special events, family vacations, and tourist trips."],
["Mini Bus for Outstation Pune", "Mini bus transportation for outstation vacations, pilgrimages, corporate tours, educational programs, and group journeys."],
["Mini Bus for Family Trip Pune", "Family group transportation with coordinated seating, luggage arrangements, sightseeing, accommodation transfers, and return travel."],
["Mini Bus for Group Travel Pune", "Shared mini bus transportation for friends, relatives, associations, clubs, and organized travel parties."],
["Mini Bus for Corporate Events Pune", "Corporate transportation for conferences, seminars, team outings, business programs, and company events."],
["Mini Bus for Wedding Pune", "Wedding guest transportation between homes, hotels, ceremony venues, reception locations, and related functions."],
["Mini Bus for School Trip Pune", "Mini bus transportation for school excursions, educational tours, nature programs, picnics, and student journeys."],
["Mini Bus for Airport Pickup Pune", "Coordinated airport transportation for families, corporate groups, tourists, wedding parties, and organizations."],
["Affordable Mini Bus Rental Pune", "Budget-conscious mini bus rental based on passenger count, route, duration, luggage, and itinerary requirements."],
["Mini Bus Rental Service Pune", "Complete mini bus rental support for tours, weddings, corporate events, school trips, picnics, sightseeing, and outstation travel."],
["Mini Bus for Picnic Pune", "Mini bus transportation for family picnics, school outings, office trips, college programs, and recreational tours."],
["Mini Bus for Local Sightseeing Pune", "Dedicated mini bus transportation for organized sightseeing with planned pickup points, stops, and destination transfers."],
["Mini Bus for One Day Trip Pune", "Same-day mini bus travel with coordinated departure, sightseeing, meal breaks, waiting time, and scheduled return transportation."],
["Mini Bus for Corporate Travel Pune", "Mini bus employee and business transportation for meetings, conferences, training programs, tours, and corporate outings."],
["Mini Bus for Marriage Function Pune", "Guest transportation for marriage ceremonies, receptions, engagement functions, and family wedding events."],
["Mini Bus for Tourist Trip Pune", "Mini bus tourist transportation for customized sightseeing, family holidays, multi-day tours, and destination travel."],
["Mini Bus for Outstation Tour Pune", "Mini bus arrangements for organized outstation tours, family vacations, pilgrimages, corporate journeys, and tourist circuits."]
],
whychoose: [
{
WhyChooseheading: "Practical Mini Bus Capacity",
WhyChoosedescription: "A mini bus provides a convenient middle-capacity transportation option for groups that are larger than a regular car but do not require a full-size bus. It is suitable for family vacations, corporate programs, school excursions, weddings, tourist tours, picnics, airport transfers, and outstation journeys where passengers prefer to remain together."
},
{
WhyChooseheading: "AC and Non-AC Choices",
WhyChoosedescription: "Different travel requirements can be accommodated by considering AC or non-AC mini bus arrangements according to the route, season, journey duration, group preferences, and budget. These options can support short sightseeing programs as well as longer family, corporate, school, wedding, and tourist journeys from Pune."
},
{
WhyChooseheading: "Premium Travel Availability",
WhyChoosedescription: "Groups looking for a more refined transportation experience can consider luxury mini bus arrangements for important occasions and comfortable travel programs. These services are useful for corporate events, weddings, special celebrations, family vacations, tourist groups, and longer journeys where the overall travel environment is an important consideration."
},
{
WhyChooseheading: "Outstation Travel Planning",
WhyChoosedescription: "Mini bus transportation can be organized for destinations across Maharashtra and other states, making it suitable for weekend getaways, pilgrimages, family vacations, school trips, corporate tours, and tourist circuits. The journey can include planned sightseeing, accommodation transfers, meal breaks, overnight travel, and scheduled return transportation."
},
{
WhyChooseheading: "Convenient for Medium Groups",
WhyChoosedescription: "Groups with a moderate number of passengers can benefit from having a dedicated vehicle rather than coordinating multiple individual cars. Shared transportation makes it easier to manage common pickup locations, departure times, luggage, sightseeing stops, hotel transfers, meal breaks, and return schedules throughout the journey."
},
{
WhyChooseheading: "Customized Itineraries",
WhyChoosedescription: "Travel arrangements can be structured according to the group's actual itinerary, including pickup points, destinations, intermediate stops, sightseeing requirements, accommodation transfers, waiting periods, meal breaks, overnight stays, and final drop locations. This flexibility makes mini bus rental suitable for both simple transfers and customized multi-stop tours."
},
{
WhyChooseheading: "Suitable for Various Occasions",
WhyChoosedescription: "Mini bus rental can support family trips, school excursions, corporate events, weddings, marriage functions, airport transfers, tourist tours, picnics, local sightseeing, one-day trips, and outstation programs. Its flexible group capacity makes it useful for organizations and families with different travel purposes and schedules."
},
{
WhyChooseheading: "Coordinated Pune Departure",
WhyChoosedescription: "The journey can be organized around suitable Pune pickup locations according to the group's passenger requirements and departure schedule. Coordinated boarding helps passengers begin their trip together, reduces separate vehicle coordination, and creates a more structured travel experience before continuing toward the selected destination."
}
]
};









const faqData = [
{
question: "How can I rent a mini bus in Pune?",
answer: "Mini bus rental in Pune can be arranged by providing the pickup location, destination, travel date, number of passengers, journey duration, and planned stops. Ruturaj Enterprises can coordinate suitable mini bus transportation for family outings, local sightseeing, corporate programs, school trips, weddings, picnics, pilgrimages, and outstation group travel."
},
{
question: "What type of trips are suitable for a mini bus rental in Pune?",
answer: "A mini bus can be useful for medium-sized groups traveling together for sightseeing, family functions, corporate outings, educational excursions, social events, weekend trips, and religious tours. It provides a group transportation option when traveling together is preferable to arranging several separate cars."
},
{
question: "Can I rent a mini bus in Pune for local sightseeing?",
answer: "Local sightseeing around Pune can be organized with a rented mini bus when several passengers need to visit multiple locations together. The itinerary can include sightseeing points, scheduled stops, meal breaks, and return travel, making it easier for the group to maintain a common departure and arrival schedule."
},
{
question: "Is Mini Bus Rental Pune available for outstation journeys?",
answer: "Mini buses can be arranged for outstation travel from Pune to destinations across Maharashtra and other states. Depending on the duration and itinerary, groups can use the service for weekend getaways, family tours, pilgrimage journeys, educational trips, corporate outings, and multi-day sightseeing programs."
},
{
question: "Can a mini bus be rented for a wedding in Pune?",
answer: "For weddings and family functions, a mini bus can transport guests between homes, hotels, railway stations, airports, marriage halls, banquet venues, and reception locations. A dedicated vehicle helps keep the group together and allows transportation timings to be coordinated around ceremonies and venue schedules."
},
{
question: "Are mini buses suitable for corporate events and employee outings?",
answer: "Companies can use mini bus transportation for employee outings, conferences, team-building activities, training programs, industrial visits, corporate celebrations, and business events. Pickup points and destination locations can be included in the travel plan, with the schedule adjusted according to the organization's event timings."
},
{
question: "Can schools and colleges rent a mini bus in Pune?",
answer: "Educational institutions can consider mini bus rental for student excursions, college tours, school picnics, educational visits, and recreational activities. The vehicle can be planned according to the number of students and accompanying staff, along with the route, planned stops, destination activities, and overall duration of the trip."
},
{
question: "Can I rent a mini bus for a pilgrimage tour from Pune?",
answer: "A mini bus can be arranged for religious groups visiting temples and pilgrimage destinations from Pune. Multi-stop journeys can be planned with temple visits, darshan schedules, rest breaks, meal stops, and sightseeing points, allowing the group to travel together throughout the planned pilgrimage itinerary."
},
{
question: "What information is required for mini bus rental in Pune?",
answer: "To plan the rental, it is useful to provide the pickup area, destination, travel date, passenger count, approximate luggage, journey duration, and any intermediate stops. For multi-day tours, a complete itinerary helps Ruturaj Enterprises coordinate the mini bus around the group's planned route and schedule."
},
{
question: "Why choose Ruturaj Enterprises for Mini Bus Rental Pune?",
answer: "Ruturaj Enterprises supports group transportation requirements through mini bus arrangements for local travel, outstation tours, weddings, corporate activities, school and college trips, pilgrimages, picnics, and events. The rental plan can be coordinated according to passenger numbers, route requirements, luggage, pickup points, journey duration, and the group's itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Amol Chavan",
feedback:
"We rented a mini bus through Ruturaj Enterprises for a group sightseeing trip from Pune. It was convenient having everyone in one vehicle, especially while visiting several locations during the day. The arrangement made it easier to coordinate departure times, stops, luggage, and the return journey.",
rating: 5
},
{
id: 2,
name: "Miss. Aarti Desai",
feedback:
"Our office group needed transportation for a team outing, and we selected a mini bus rental through Ruturaj Enterprises. The group could travel together without arranging multiple cars, and the planned pickup and return schedule was easy to coordinate. It made the overall transportation for the outing much more organized.",
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
  "name": "Mini Bus Rental Pune",
  "image": "https://ruturajenterprises.com/assets/images/mini-bus-rental-pune.webp",
  "description":
    "Mini Bus Rental Pune for local transportation, outstation journeys, family trips, group travel, corporate events, weddings, school and college trips, picnics, sightseeing and airport transfers. Ruturaj Enterprises provides mini bus rental, hire and booking services with AC, non-AC and luxury options for different group sizes and travel requirements. Comfortable vehicles, experienced drivers and flexible rental plans make mini buses suitable for one-day trips, multi-day tours, corporate transportation, wedding guest transfers, school excursions and convenient group travel from Pune to destinations across Maharashtra and other states.",
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
    "url": "https://ruturajenterprises.com/mini-bus-rental-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Mini Bus Rental Pune | Mini Bus Hire Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Mini Bus Rental Pune for outstation trips, family tours, group travel, corporate events, weddings, school trips, picnics and sightseeing. Hire AC, non-AC and luxury mini buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Mini Bus On Rent Pune, Mini Bus Hire Pune, Mini Bus Booking Pune, AC Mini Bus Rental Pune, Non AC Mini Bus Rental Pune, Luxury Mini Bus Rental Pune, Mini Bus for Outstation Pune, Mini Bus for Family Trip Pune, Mini Bus for Group Travel Pune, Mini Bus for Corporate Events Pune, Mini Bus for Wedding Pune, Mini Bus for School Trip Pune, Mini Bus for Picnic Pune, Mini Bus for Airport Transfer Pune, Affordable Mini Bus Rental Pune, Mini Bus Rental Pune, Mini Bus Hire in Pune, Mini Bus Booking in Pune, Mini Bus Rental Service Pune, Mini Bus Hire Service Pune, Mini Bus Booking Service Pune, Mini Bus on Rent Pune, Mini Bus Rental Company Pune, Mini Bus Hire Company Pune, AC Mini Bus Pune, AC Mini Bus Hire Pune, AC Mini Bus Booking Pune, AC Mini Bus on Rent Pune, Non AC Mini Bus Pune, Non AC Mini Bus Hire Pune, Non AC Mini Bus Booking Pune, Non AC Mini Bus on Rent Pune, Luxury Mini Bus Pune, Luxury Mini Bus Hire Pune, Luxury Mini Bus Booking Pune, Luxury Mini Bus on Rent Pune, Tourist Mini Bus Pune, Tourist Mini Bus Rental Pune, Tourist Mini Bus Hire Pune, Tourist Mini Bus Booking Pune, Outstation Mini Bus Pune, Outstation Mini Bus Rental Pune, Outstation Mini Bus Hire Pune, Outstation Mini Bus Booking Pune, One Way Mini Bus Pune, One Way Mini Bus Rental Pune, One Way Mini Bus Hire Pune, Round Trip Mini Bus Pune, Round Trip Mini Bus Rental Pune, Round Trip Mini Bus Hire Pune, Local Mini Bus Pune, Local Mini Bus Rental Pune, Local Mini Bus Hire Pune, Local Mini Bus Booking Pune, Family Mini Bus Pune, Family Tour Mini Bus Pune, Family Travel Mini Bus Pune, Group Mini Bus Pune, Group Tour Mini Bus Pune, Group Travel Mini Bus Pune, Corporate Mini Bus Pune, Corporate Mini Bus Rental Pune, Corporate Mini Bus Hire Pune, Corporate Mini Bus Booking Pune, Corporate Staff Transportation Mini Bus Pune, Corporate Event Mini Bus Pune, Event Mini Bus Rental Pune, Event Mini Bus Hire Pune, Event Mini Bus Booking Pune, Wedding Mini Bus Pune, Wedding Mini Bus Rental Pune, Wedding Mini Bus Hire Pune, Wedding Mini Bus Booking Pune, Wedding Guest Mini Bus Pune, Wedding Guest Transportation Pune, Marriage Mini Bus Pune, Marriage Mini Bus Rental Pune, Marriage Mini Bus Hire Pune, School Mini Bus Pune, School Trip Mini Bus Pune, School Tour Mini Bus Pune, School Picnic Mini Bus Pune, College Trip Mini Bus Pune, Picnic Mini Bus Pune, Picnic Mini Bus Rental Pune, Picnic Mini Bus Hire Pune, Family Picnic Mini Bus Pune, Group Picnic Mini Bus Pune, Airport Mini Bus Pune, Airport Transfer Mini Bus Pune, Airport Pickup Mini Bus Pune, Airport Drop Mini Bus Pune, Sightseeing Mini Bus Pune, Sightseeing Mini Bus Rental Pune, Pune Sightseeing Mini Bus Hire, Pune City Tour Mini Bus Pune, Mini Bus for Maharashtra Tour Pune, Mini Bus for Weekend Trip Pune, Mini Bus for Holiday Trip Pune, Mini Bus for Temple Tour Pune, Pilgrimage Mini Bus Pune, Mini Bus for Tourist Pune, Mini Bus with Driver Pune, Mini Bus Rental with Driver Pune, Mini Bus Hire with Driver Pune, Mini Bus Booking with Driver Pune, Comfortable Mini Bus Pune, Professional Mini Bus Rental Pune, Reliable Mini Bus Hire Pune, Premium Mini Bus Pune, Mini Bus Transportation Pune, Group Transportation Mini Bus Pune, Passenger Mini Bus Pune, Mini Bus Service Pune, Mini Bus Rental Near Me Pune, Mini Bus Hire Near Me Pune, Ruturaj Enterprises Mini Bus Rental Pune"
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
                            <img src='/images/keyword/88.jpg' alt='img' className='img-fluid' />
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

export default Minibusrentalpune;