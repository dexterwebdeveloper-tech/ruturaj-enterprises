import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Luxuryonetwo() {


const cardData = {
keyword: "Luxury 12,14 Seater Tempo Traveller in Pune",
headingDescription: "Ruturaj Enterprises provides Luxury 12,14 Seater Tempo Traveller in Pune for families, friends, corporate teams, wedding groups, and travelers planning comfortable local or outstation journeys. Both 12-seater and 14-seater options can be arranged with AC and premium travel features according to group size, luggage requirements, destination, and trip duration. These vehicles are suitable for sightseeing, weekend holidays, family functions, corporate travel, airport transfers, and long-distance group journeys where comfortable transportation and coordinated travel are important.",
topPlaces: [
{
title: "Lonavala",
description: "Lonavala is a popular hill destination for families, friends, corporate teams, and weekend travelers from Pune. A luxury Tempo Traveller provides convenient group transportation for visiting viewpoints, lakes, forts, and nearby attractions while keeping the group together."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is known for its scenic viewpoints, pleasant surroundings, strawberry farms, and popular tourist attractions. A 12 or 14 seater luxury Tempo Traveller is suitable for families and groups looking for comfortable transportation during a full-day or multi-day hill-station trip."
},
{
title: "Goa",
description: "Goa is a popular long-distance destination for friends, families, corporate groups, and holiday travelers from Pune. A spacious luxury Tempo Traveller can make the road journey more convenient by providing dedicated group transportation for the onward trip, local travel, and return journey."
},
{
title: "Shirdi",
description: "Shirdi is an important pilgrimage destination visited by families and devotees throughout the year. A comfortable 12 or 14 seater traveller can be used for group pilgrimage trips from Pune, with sufficient space for passengers and travel luggage."
},
{
title: "Alibaug",
description: "Alibaug is a popular coastal destination for weekend breaks, family outings, and group holidays. Luxury Tempo Traveller travel allows passengers to journey together from Pune while comfortably accommodating sightseeing plans and beachside activities."
},
{
title: "Nashik",
description: "Nashik combines religious attractions, scenic destinations, vineyards, and cultural landmarks, making it suitable for different types of group trips. A luxury traveller can provide convenient transportation for families, corporate teams, and friends exploring the city and surrounding locations."
},
{
title: "Bhandardara",
description: "Bhandardara offers lakes, hills, waterfalls, and peaceful natural surroundings and is popular for group getaways. The 12 and 14 seater traveller options are suitable for families and friends planning comfortable transportation for an extended sightseeing or leisure trip."
},
{
title: "Kolhapur",
description: "Kolhapur is known for its historical attractions, temples, food culture, and heritage destinations. A dedicated luxury Tempo Traveller can make group travel from Pune easier by providing comfortable transportation for sightseeing, family visits, and religious journeys."
},
{
title: "Matheran",
description: "Matheran is a scenic hill destination known for viewpoints and a peaceful environment away from regular city traffic. Groups can use a luxury Tempo Traveller for convenient travel from Pune to the surrounding region as part of a planned weekend or family itinerary."
},
{
title: "Aurangabad",
description: "Aurangabad is a major tourism destination with historic monuments and heritage attractions in the surrounding region. A 12 or 14 seater luxury traveller is suitable for families, friends, and organized groups planning comfortable road travel from Pune."
}
],
services: [
{
name: "Luxury 12 Seater Tempo Traveller Pune",
description: "Luxury 12 Seater Tempo Traveller Pune is suitable for small and medium-sized families, friends, corporate teams, and premium travel groups. The vehicle provides a dedicated group travel solution for local sightseeing, weekend trips, outstation journeys, weddings, and special occasions."
},
{
name: "Luxury 14 Seater Tempo Traveller Pune",
description: "Luxury 14 Seater Tempo Traveller Pune is a practical option for groups requiring additional passenger capacity while maintaining a comfortable travel environment. It can be arranged for family holidays, corporate journeys, weddings, sightseeing programs, and longer road trips."
},
{
name: "12 Seater Tempo Traveller on Rent Pune",
description: "12 Seater Tempo Traveller on Rent Pune provides convenient transportation for groups traveling together within Pune or to destinations outside the city. The vehicle can be hired for one-day trips, multi-day tours, family outings, sightseeing, and planned group travel."
},
{
name: "14 Seater Tempo Traveller on Rent Pune",
description: "14 Seater Tempo Traveller on Rent Pune is suitable for groups that need more seating capacity without moving to a much larger bus. It can support local and outstation journeys, family vacations, corporate travel, wedding transportation, and tourist itineraries."
},
{
name: "12 Seater Traveller Hire Pune",
description: "12 Seater Traveller Hire Pune offers dedicated transportation for groups of suitable size looking for a convenient alternative to multiple cars. Travel arrangements can be planned around the group's pickup location, destination, travel duration, luggage requirements, and preferred schedule."
},
{
name: "14 Seater Traveller Hire Pune",
description: "14 Seater Traveller Hire Pune provides a comfortable group travel option for families, friends, office teams, and tourists. The vehicle can be used for local sightseeing, outstation travel, weddings, corporate programs, and recreational journeys."
},
{
name: "12 Seater Traveller Booking Pune",
description: "12 Seater Traveller Booking Pune allows travelers to arrange their group transportation in advance for planned trips. Booking requirements can include travel date, pickup point, destination, number of passengers, luggage needs, vehicle preference, and trip duration."
},
{
name: "14 Seater Traveller Booking Pune",
description: "14 Seater Traveller Booking Pune is suitable for groups requiring a dedicated 14-seater vehicle for their journey. It can be planned for family tours, corporate travel, weddings, sightseeing, pilgrimages, weekend holidays, and long-distance road trips."
},
{
name: "AC 12 Seater Tempo Traveller Pune",
description: "AC 12 Seater Tempo Traveller Pune provides a comfortable air-conditioned environment for group travel in and around Pune. It is suitable for families, tourists, corporate teams, and friends traveling on longer routes or spending an entire day on the road."
},
{
name: "AC 14 Seater Tempo Traveller Pune",
description: "AC 14 Seater Tempo Traveller Pune combines additional seating capacity with air-conditioned travel comfort. The vehicle is suitable for group holidays, sightseeing tours, wedding transportation, corporate outings, and outstation journeys from Pune."
},
{
name: "Luxury AC Traveller Rental Pune",
description: "Luxury AC Traveller Rental Pune provides a premium transportation option for passengers who prefer enhanced comfort during group journeys. It can be arranged for special occasions, family vacations, executive travel, corporate programs, and extended sightseeing trips."
},
{
name: "12 Seater Traveller for Outstation Pune",
description: "12 Seater Traveller for Outstation Pune is designed for small group journeys to destinations outside Pune. Families, friends, and corporate teams can use the vehicle for one-day or multi-day travel according to their route, itinerary, passenger count, and preferred comfort level."
},
{
name: "14 Seater Traveller for Outstation Pune",
description: "14 Seater Traveller for Outstation Pune provides additional capacity for groups planning long-distance travel from Pune. It is useful for holiday tours, pilgrimages, family functions, corporate trips, and sightseeing programs requiring dedicated transportation."
},
{
name: "12 Seater Traveller for Family Trip Pune",
description: "12 Seater Traveller for Family Trip Pune offers a convenient way for relatives and family members to travel together without using several private cars. The vehicle can accommodate a planned family itinerary for sightseeing, holidays, religious visits, and special occasions."
},
{
name: "14 Seater Traveller for Family Trip Pune",
description: "14 Seater Traveller for Family Trip Pune is suitable for larger family groups requiring comfortable shared transportation. It can be arranged for weekend holidays, multi-day vacations, pilgrimage tours, family celebrations, and sightseeing journeys."
},
{
name: "12 Seater Traveller for Group Travel Pune",
description: "12 Seater Traveller for Group Travel Pune provides dedicated transportation for friends, colleagues, social groups, and organized tour groups. A single traveller keeps the group together while making it easier to coordinate departure times, stops, sightseeing, and return travel."
},
{
name: "14 Seater Traveller for Group Travel Pune",
description: "14 Seater Traveller for Group Travel Pune offers suitable seating for medium-sized groups traveling together. It is useful for tourist tours, weekend trips, corporate outings, family programs, and other journeys where a larger traveller is more convenient than multiple cars."
},
{
name: "12 Seater Traveller for Wedding Pune",
description: "12 Seater Traveller for Wedding Pune helps transport relatives and wedding guests between homes, hotels, ceremony venues, reception locations, and other planned destinations. Dedicated group transportation makes wedding-day movement easier to coordinate around different functions."
},
{
name: "14 Seater Traveller for Wedding Pune",
description: "14 Seater Traveller for Wedding Pune provides additional capacity for transporting wedding guests and family members together. It can be useful for multiple ceremonies, guest transfers, venue transportation, hotel movements, and other wedding-related travel requirements."
},
{
name: "12 Seater Traveller for Corporate Travel Pune",
description: "12 Seater Traveller for Corporate Travel Pune is suitable for executives, employees, project teams, business visits, meetings, and small corporate groups. The vehicle provides dedicated transportation between offices, hotels, airports, event venues, and outstation business locations."
},
{
name: "14 Seater Traveller for Corporate Travel Pune",
description: "14 Seater Traveller for Corporate Travel Pune offers a practical group transportation solution for companies with medium-sized teams. It can support conferences, meetings, employee outings, training programs, airport transfers, and corporate travel outside Pune."
},
{
name: "Affordable Luxury Traveller Pune",
description: "Affordable Luxury Traveller Pune provides a balance between premium group travel comfort and practical transportation planning. Selecting the appropriate 12 or 14 seater vehicle according to passenger strength can help groups enjoy a comfortable journey while managing overall travel costs."
}
],
tableData: [
["Luxury 12 Seater Tempo Traveller Pune", "Luxury 14 Seater Tempo Traveller Pune"],
["12 Seater Tempo Traveller on Rent Pune", "14 Seater Tempo Traveller on Rent Pune"],
["12 Seater Traveller Hire Pune", "14 Seater Traveller Hire Pune"],
["12 Seater Traveller Booking Pune", "14 Seater Traveller Booking Pune"],
["AC 12 Seater Tempo Traveller Pune", "AC 14 Seater Tempo Traveller Pune"],
["Luxury AC Traveller Rental Pune", "12 Seater Traveller for Outstation Pune"],
["14 Seater Traveller for Outstation Pune", "12 Seater Traveller for Family Trip Pune"],
["14 Seater Traveller for Family Trip Pune", "12 Seater Traveller for Group Travel Pune"],
["14 Seater Traveller for Group Travel Pune", "12 Seater Traveller for Wedding Pune"],
["14 Seater Traveller for Wedding Pune", "12 Seater Traveller for Corporate Travel Pune"],
["14 Seater Traveller for Corporate Travel Pune", "Affordable Luxury Traveller Pune"]
],
whychoose: [
{
WhyChooseheading: "Premium Group Travel Comfort",
WhyChoosedescription: "Luxury Tempo Travellers are a convenient choice for groups that want more comfort than traveling in several smaller cars. The 12 and 14 seater options provide dedicated group transportation for local sightseeing, holidays, family functions, and outstation journeys."
},
{
WhyChooseheading: "Choice Between 12 and 14 Seats",
WhyChoosedescription: "Different groups require different seating capacities, which is why both 12-seater and 14-seater options can be considered. Selecting the vehicle according to the actual passenger count helps provide practical space without unnecessarily choosing a larger vehicle."
},
{
WhyChooseheading: "Comfortable AC Journeys",
WhyChoosedescription: "Long road journeys and full-day sightseeing programs become more convenient when passengers can travel in an air-conditioned environment. AC traveller options are suitable for families, tourists, corporate teams, wedding groups, and friends."
},
{
WhyChooseheading: "Suitable for Outstation Holidays",
WhyChoosedescription: "The traveller format works well for destinations such as hill stations, pilgrimage locations, coastal holidays, and long-distance tours from Pune. Dedicated transportation allows the group to travel together throughout the planned itinerary."
},
{
WhyChooseheading: "Ideal for Family Vacations",
WhyChoosedescription: "Family groups can avoid the inconvenience of coordinating multiple private vehicles during a holiday. A 12 or 14 seater traveller provides shared transportation for relatives while allowing the group to follow a common schedule and sightseeing plan."
},
{
WhyChooseheading: "Professional Corporate Travel",
WhyChoosedescription: "Corporate teams can use luxury travellers for meetings, conferences, business visits, airport transfers, team outings, and official travel. A dedicated vehicle provides organized movement between offices, hotels, event venues, and business destinations."
},
{
WhyChooseheading: "Convenient Wedding Transportation",
WhyChoosedescription: "Wedding schedules often involve multiple venues and timed guest movements throughout the day. A dedicated traveller can transport relatives and guests between hotels, homes, ceremony locations, and reception venues with easier group coordination."
},
{
WhyChooseheading: "Practical Luxury at a Group-Friendly Cost",
WhyChoosedescription: "Luxury group travel does not always require a large bus when the passenger count fits a 12 or 14 seater vehicle. Choosing the appropriate traveller capacity can provide premium comfort while keeping the transportation arrangement practical for the group."
}
]
};









const faqData = [
{
question: "What is a luxury 12 or 14 seater Tempo Traveller in Pune?",
answer: "A luxury 12 or 14 seater Tempo Traveller is a premium group travel vehicle designed for families, friends, corporate teams, and small tour groups. Ruturaj Enterprises provides suitable rental options for local sightseeing, outstation journeys, holidays, pilgrimage tours, weddings, and other group travel requirements."
},
{
question: "Who should hire a 12 or 14 seater luxury Tempo Traveller?",
answer: "The 12 and 14 seater options are well suited for groups that are too large for a regular car but do not require a large bus. Families, friends, corporate teams, wedding parties, and small tour groups can choose these vehicles for convenient travel with everyone seated together."
},
{
question: "Can I hire a luxury Tempo Traveller for an outstation trip from Pune?",
answer: "A luxury Tempo Traveller can be hired for outstation holidays, weekend trips, sightseeing tours, pilgrimage journeys, and long-distance group travel from Pune. Ruturaj Enterprises can arrange the vehicle according to your passenger count, destination, travel dates, and planned itinerary."
},
{
question: "Is a 12 or 14 seater Tempo Traveller suitable for family tours?",
answer: "Families can use these seating configurations for vacations, reunions, destination visits, and pilgrimage tours where everyone wants to travel together. A dedicated vehicle makes it easier to coordinate family members, luggage, sightseeing stops, and departure and return timings."
},
{
question: "Can corporate groups rent a luxury 12 or 14 seater Tempo Traveller?",
answer: "Corporate teams can choose a luxury Tempo Traveller for business visits, employee outings, conferences, team-building activities, and company travel. A smaller premium group vehicle can be particularly practical when the team size does not justify hiring a full-size bus."
},
{
question: "Can I book a 12 or 14 seater Tempo Traveller for a wedding?",
answer: "Wedding families can hire these vehicles to transport relatives and guests between hotels, marriage venues, pickup points, and other locations. The compact seating capacity is useful for smaller groups that need dedicated transportation during wedding functions and celebrations."
},
{
question: "Can the luxury Tempo Traveller be used for Pune sightseeing?",
answer: "The vehicle can be used for private sightseeing around Pune and nearby destinations. Groups can plan multiple attractions in one itinerary without arranging separate cars, making the 12 or 14 seater option convenient for family outings, visiting groups, and organized tours."
},
{
question: "What is the difference between a 12 seater and 14 seater Tempo Traveller?",
answer: "The main difference is passenger capacity. A 12 seater can be suitable for a smaller group that wants more room within the available seating arrangement, while a 14 seater can accommodate additional travelers. Ruturaj Enterprises can help select the option that best matches your group size and luggage needs."
},
{
question: "Can I hire a luxury 12 or 14 seater Tempo Traveller for a round trip?",
answer: "Round-trip rentals can be arranged for groups traveling from Pune to another destination and returning after completing their itinerary. The vehicle schedule can be coordinated with the trip duration, sightseeing plans, overnight stays, pickup location, and preferred return time."
},
{
question: "Why choose Ruturaj Enterprises for a luxury 12,14 seater Tempo Traveller in Pune?",
answer: "Ruturaj Enterprises offers group travel solutions for customers looking for a premium and practical alternative to multiple cars or a larger bus. Vehicle selection can be planned around passenger strength, destination, luggage, journey duration, and the specific requirements of your trip."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Aditya Joshi",
feedback:
"We hired a luxury 14 seater Tempo Traveller from Ruturaj Enterprises for our family trip from Pune. The vehicle size was suitable for our group, and traveling together made the entire journey much easier to coordinate. It was a practical choice for our outstation tour.",
rating: 5
},
{
id: 2,
name: "Miss. Tanvi Deshpande",
feedback:
"Our group selected a 12 seater Tempo Traveller for an outstation trip from Pune. We wanted a dedicated vehicle instead of using multiple cars, and the arrangement worked well for our travel plans. Ruturaj Enterprises made the group transportation process simple and convenient.",
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
  "name": "Luxury 12,14 Seater Tempo Traveller in Pune",
  "image": "https://ruturajenterprises.com/assets/images/luxury-12-14-seater-tempo-traveller-in-pune.webp",
  "description":
    "Luxury 12,14 Seater Tempo Traveller in Pune for family holidays, group tours, corporate travel, weddings, airport transfers, religious trips, and outstation journeys. Ruturaj Enterprises offers comfortable 12 seater and 14 seater luxury Tempo Traveller options with spacious interiors, air conditioning, experienced drivers, convenient pickup arrangements, and flexible rental plans for local sightseeing as well as long-distance travel from Pune.",
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
    "url": "https://ruturajenterprises.com/luxury-12-14-seater-tempo-traveller-in-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Luxury 12,14 Seater Tempo Traveller in Pune | 12 & 14 Seater Tempo Traveller | +91 9763381382
  </title>

  <meta
    name="description"
    content="Luxury 12,14 Seater Tempo Traveller in Pune for family trips, group tours, corporate travel, weddings, airport transfers and outstation journeys. Hire comfortable 12 seater and 14 seater luxury Tempo Travellers with flexible rental options."
  />

  <meta
    name="keywords"
    content="Luxury 12 Seater Tempo Traveller Pune, Luxury 14 Seater Tempo Traveller Pune, 12 Seater Tempo Traveller on Rent Pune, 14 Seater Tempo Traveller on Rent Pune, 12 Seater Luxury Tempo Traveller Pune, 14 Seater Luxury Tempo Traveller Pune, 12 Seater Tempo Traveller Rental Pune, 14 Seater Tempo Traveller Rental Pune, 12 Seater Tempo Traveller Hire Pune, 14 Seater Tempo Traveller Hire Pune, 12 Seater Tempo Traveller Booking Pune, 14 Seater Tempo Traveller Booking Pune, 12 Seater AC Tempo Traveller Pune, 14 Seater AC Tempo Traveller Pune, Luxury Tempo Traveller on Rent Pune, Luxury Tempo Traveller Rental Pune, Luxury Tempo Traveller Hire Pune, Luxury Tempo Traveller Booking Pune, 12 Seater Tempo Traveller for Outstation Pune, 14 Seater Tempo Traveller for Outstation Pune, 12 Seater Tempo Traveller for Family Trip Pune, 14 Seater Tempo Traveller for Family Trip Pune, 12 Seater Tempo Traveller for Group Travel Pune, 14 Seater Tempo Traveller for Group Travel Pune, 12 Seater Tempo Traveller for Corporate Travel Pune, 14 Seater Tempo Traveller for Corporate Travel Pune, 12 Seater Tempo Traveller for Wedding Pune, 14 Seater Tempo Traveller for Wedding Pune, 12 Seater Tempo Traveller for Airport Pickup Pune, 14 Seater Tempo Traveller for Airport Pickup Pune, 12 Seater Tempo Traveller for Pune Darshan, 14 Seater Tempo Traveller for Pune Darshan, 12 Seater Tempo Traveller for Local Sightseeing Pune, 14 Seater Tempo Traveller for Local Sightseeing Pune, 12 Seater Tempo Traveller for Picnic Pune, 14 Seater Tempo Traveller for Picnic Pune, 12 Seater Tempo Traveller for Religious Tour Pune, 14 Seater Tempo Traveller for Religious Tour Pune, 12 Seater Tempo Traveller for One Day Trip Pune, 14 Seater Tempo Traveller for One Day Trip Pune, 12 Seater Tempo Traveller for Multi Day Trip Pune, 14 Seater Tempo Traveller for Multi Day Trip Pune, 12 Seater Tempo Traveller Pune to Goa, 14 Seater Tempo Traveller Pune to Goa, 12 Seater Tempo Traveller Pune to Mumbai, 14 Seater Tempo Traveller Pune to Mumbai, 12 Seater Tempo Traveller Pune to Shirdi, 14 Seater Tempo Traveller Pune to Shirdi, 12 Seater Tempo Traveller Pune to Mahabaleshwar, 14 Seater Tempo Traveller Pune to Mahabaleshwar, 12 Seater Tempo Traveller Pune to Nashik, 14 Seater Tempo Traveller Pune to Nashik, 12 Seater Tempo Traveller Pune to Lonavala, 14 Seater Tempo Traveller Pune to Lonavala, Affordable 12 Seater Tempo Traveller Pune, Affordable 14 Seater Tempo Traveller Pune, 12 Seater AC Luxury Tempo Traveller Pune, 14 Seater AC Luxury Tempo Traveller Pune, Ruturaj Enterprises 12 Seater Tempo Traveller Pune, Ruturaj Enterprises 14 Seater Tempo Traveller Pune"
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
                            <img src='/images/keyword/36.jpg' alt='img' className='img-fluid' />
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

export default Luxuryonetwo ;