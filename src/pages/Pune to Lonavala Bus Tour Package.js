import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetolonavalabustour() {


const cardData = {
keyword: "Pune to Lonavala Bus Tour Package",
headingDescription: "Ruturaj Enterprises offers Pune to Lonavala Bus Tour Package services for families, friends, corporate teams, school groups, wedding parties, and large tourist groups planning a comfortable journey from Pune to Lonavala. AC and luxury buses can be arranged for one-day trips, weekend holidays, sightseeing programs, picnics, and round trips, with transportation planned around passenger strength and itinerary requirements. From convenient Pune pickup points to Lonavala sightseeing and return travel, the journey can be organized as a complete group transportation solution.",
topPlaces: [
{
title: "Lonavala Lake",
description: "Lonavala Lake is a popular seasonal attraction surrounded by green landscapes and peaceful views, especially during the monsoon. A dedicated bus makes it convenient for families and larger groups to include the lake in a one-day Lonavala itinerary along with other nearby attractions."
},
{
title: "Tiger Point",
description: "Tiger Point is one of the well-known viewpoints around Lonavala, offering expansive valley scenery and a refreshing hill-station atmosphere. Group bus travel allows families, friends, and tourist groups to reach the viewpoint together while continuing to other sightseeing locations."
},
{
title: "Bhushi Dam",
description: "Bhushi Dam is a popular recreational destination near Lonavala, particularly during the rainy season. A bus tour from Pune can provide convenient transportation for groups visiting the dam as part of a planned picnic or one-day sightseeing program."
},
{
title: "Karla Caves",
description: "Karla Caves are an important historical and architectural attraction located near Lonavala. They can be included in a group tour itinerary along with other nearby destinations, allowing passengers to travel together between Pune and the surrounding heritage sites."
},
{
title: "Lohagad Fort",
description: "Lohagad Fort is a popular destination for history enthusiasts, trekking groups, families, and weekend travelers. A dedicated tourist bus can make group transportation easier when the itinerary combines the fort with other Lonavala and surrounding attractions."
},
{
title: "Pawna Lake",
description: "Pawna Lake is known for its scenic surroundings, open landscapes, and relaxing atmosphere near the Lonavala region. Groups traveling from Pune can include Pawna Lake in a picnic, weekend, or overnight itinerary with planned bus transportation."
},
{
title: "Rajmachi Fort",
description: "Rajmachi is a well-known destination for travelers interested in forts, hills, and nature experiences around Lonavala. A group bus can support transportation from Pune to the surrounding area, making it easier to coordinate travel for friends and organized groups."
},
{
title: "Duke's Nose",
description: "Duke's Nose is a prominent hill viewpoint near Khandala and is popular for scenic views and outdoor activities. It can be included in a Pune-Lonavala sightseeing route when groups want to explore several attractions during their trip."
},
{
title: "Khandala",
description: "Khandala is a scenic hill destination located close to Lonavala and is commonly included in weekend and sightseeing itineraries. A dedicated bus provides convenient group movement between Khandala, Lonavala, and other nearby attractions."
},
{
title: "Ekvira Devi Temple",
description: "Ekvira Devi Temple near Karla is an important religious destination visited by devotees and tourists throughout the year. Groups can include the temple in a Pune-to-Lonavala tour itinerary while traveling comfortably together in a dedicated bus."
}
],
services: [
{
name: "Pune to Lonavala Bus Tour Package",
description: "Pune to Lonavala Bus Tour Package provides organized group transportation for families, friends, corporate teams, school groups, and tourists. The package can be planned around selected pickup points in Pune, sightseeing destinations in Lonavala, trip duration, and return schedule."
},
{
name: "Pune Lonavala Bus Rental",
description: "Pune Lonavala Bus Rental is suitable for groups looking for a dedicated vehicle for a one-day trip, weekend journey, picnic, or sightseeing tour. Bus selection can be based on passenger count, preferred comfort level, travel duration, and itinerary requirements."
},
{
name: "Pune Lonavala Bus Hire",
description: "Pune Lonavala Bus Hire provides convenient transportation for groups traveling from Pune to Lonavala and nearby destinations. A dedicated bus keeps passengers together and can accommodate planned sightseeing stops, family activities, or group events during the journey."
},
{
name: "Pune Lonavala Bus Booking",
description: "Pune Lonavala Bus Booking allows travelers to plan group transportation before their selected travel date. Requirements such as passenger capacity, AC or luxury preference, pickup location, sightseeing plan, trip duration, and return schedule can be considered while arranging the bus."
},
{
name: "Lonavala Tour Package from Pune by Bus",
description: "Lonavala Tour Package from Pune by Bus is designed for travelers who want convenient transportation and an organized group itinerary. The journey can include popular attractions such as viewpoints, lakes, forts, caves, and nearby Khandala locations according to the planned tour."
},
{
name: "Pune Lonavala AC Bus Rental",
description: "Pune Lonavala AC Bus Rental provides a comfortable travel option for groups traveling between Pune and Lonavala. Air-conditioned buses are suitable for families, corporate teams, tourists, wedding groups, and passengers planning a full-day or extended sightseeing journey."
},
{
name: "Luxury Bus for Lonavala Tour Pune",
description: "Luxury Bus for Lonavala Tour Pune is suitable for premium family trips, corporate outings, special celebrations, and organized tourist groups. Spacious interiors and enhanced travel comfort can make the road journey more enjoyable when the group is spending an entire day or weekend together."
},
{
name: "Pune to Lonavala Tourist Bus",
description: "Pune to Lonavala Tourist Bus services are useful for sightseeing groups visiting Lonavala's viewpoints, forts, lakes, temples, and nearby attractions. A dedicated tourist bus allows the group to follow a planned route without repeatedly arranging separate vehicles."
},
{
name: "Lonavala Sightseeing Bus from Pune",
description: "Lonavala Sightseeing Bus from Pune is ideal for travelers planning multiple sightseeing stops during a single trip. The bus can support an itinerary covering popular destinations around Lonavala and Khandala while keeping the group together throughout the tour."
},
{
name: "Pune Lonavala Group Tour Bus",
description: "Pune Lonavala Group Tour Bus provides convenient transportation for large groups traveling together for holidays, picnics, college trips, corporate outings, or social gatherings. Vehicle capacity can be selected according to the number of passengers and overall travel requirements."
},
{
name: "Pune Lonavala Family Tour Bus",
description: "Pune Lonavala Family Tour Bus is suitable for family outings, reunions, celebrations, and weekend vacations. Families can travel together from selected Pune pickup locations and include multiple Lonavala attractions in a comfortable group itinerary."
},
{
name: "Pune Lonavala One Day Tour Bus",
description: "Pune Lonavala One Day Tour Bus is designed for groups planning a same-day return journey from Pune. The itinerary can be arranged around departure time, sightseeing stops, meal breaks, leisure activities, and a convenient return schedule."
},
{
name: "Pune Lonavala Weekend Tour Bus",
description: "Pune Lonavala Weekend Tour Bus is a practical option for families, friends, and corporate teams planning a short weekend escape. The bus can be arranged for a flexible itinerary covering Lonavala, Khandala, Pawna Lake, forts, viewpoints, and other selected destinations."
},
{
name: "Pune Lonavala Round Trip Bus",
description: "Pune Lonavala Round Trip Bus provides transportation for the complete journey from Pune to Lonavala and back. It is suitable for one-day sightseeing, family trips, picnics, corporate outings, and group holidays where return transportation needs to be coordinated in advance."
},
{
name: "Affordable Lonavala Bus Tour Pune",
description: "Affordable Lonavala Bus Tour Pune offers a practical group transportation solution for travelers looking to manage the cost of their trip. Selecting the right vehicle capacity and planning a suitable route can help maintain a balance between travel comfort and overall tour expenses."
},
{
name: "Pune Lonavala Picnic Bus Rental",
description: "Pune Lonavala Picnic Bus Rental is suitable for schools, families, companies, friends, and community groups planning a recreational outing. The bus can transport the entire group from Pune to selected picnic locations around Lonavala and provide convenient return travel."
},
{
name: "Lonavala Group Travel Bus Pune",
description: "Lonavala Group Travel Bus Pune provides dedicated transportation for large groups visiting Lonavala for sightseeing, leisure, celebrations, and weekend programs. Group members can travel together while the bus follows the planned route and scheduled sightseeing stops."
},
{
name: "Pune Lonavala Outstation Bus Hire",
description: "Pune Lonavala Outstation Bus Hire is suitable for groups traveling beyond the regular city limits for a planned hill-station journey. The service can accommodate one-day or extended travel programs according to passenger strength, itinerary, vehicle type, and return requirements."
},
{
name: "Lonavala Holiday Bus Package Pune",
description: "Lonavala Holiday Bus Package Pune provides organized transportation for families, friends, tourist groups, and corporate teams planning a relaxing getaway. Travel arrangements can be structured around accommodation schedules, sightseeing plans, leisure activities, and the preferred duration of the holiday."
},
{
name: "Pune to Lonavala AC Bus Hire",
description: "Pune to Lonavala AC Bus Hire provides a comfortable option for groups traveling on the Pune-Lonavala route. It is suitable for family holidays, corporate outings, school groups, tourist programs, and other journeys where passengers prefer an air-conditioned travel environment."
},
{
name: "Lonavala Tour Bus Booking Pune",
description: "Lonavala Tour Bus Booking Pune helps groups reserve suitable transportation for planned sightseeing and holiday programs. The booking requirement can be organized according to passenger count, travel date, pickup point, selected destinations, vehicle category, and expected journey duration."
},
{
name: "Pune Lonavala Travel Bus Service",
description: "Pune Lonavala Travel Bus Service supports group journeys between Pune and Lonavala for tourism, family outings, picnics, corporate trips, events, and weekend travel. Ruturaj Enterprises can arrange transportation around the group's preferred schedule, route, passenger capacity, and sightseeing requirements."
}
],
tableData: [
["Pune to Lonavala Bus Tour Package", "Pune Lonavala Bus Rental"],
["Pune Lonavala Bus Hire", "Pune Lonavala Bus Booking"],
["Lonavala Tour Package from Pune by Bus", "Pune Lonavala AC Bus Rental"],
["Luxury Bus for Lonavala Tour Pune", "Pune to Lonavala Tourist Bus"],
["Lonavala Sightseeing Bus from Pune", "Pune Lonavala Group Tour Bus"],
["Pune Lonavala Family Tour Bus", "Pune Lonavala One Day Tour Bus"],
["Pune Lonavala Weekend Tour Bus", "Pune Lonavala Round Trip Bus"],
["Affordable Lonavala Bus Tour Pune", "Pune Lonavala Picnic Bus Rental"],
["Lonavala Group Travel Bus Pune", "Pune Lonavala Outstation Bus Hire"],
["Lonavala Holiday Bus Package Pune", "Pune to Lonavala AC Bus Hire"],
["Lonavala Tour Bus Booking Pune", "Pune Lonavala Travel Bus Service"]
],
whychoose: [
{
WhyChooseheading: "Dedicated Pune to Lonavala Group Travel",
WhyChoosedescription: "A dedicated bus allows the entire group to travel together from Pune to Lonavala without coordinating multiple cars or separate transport arrangements. Pickup points, departure timings, sightseeing stops, and return travel can be planned around the group's itinerary."
},
{
WhyChooseheading: "Ideal for One-Day Excursions",
WhyChoosedescription: "Lonavala is well suited for short trips from Pune, making it a popular choice for same-day group outings. Transportation can be organized around an early departure, multiple sightseeing locations, leisure time, and a scheduled return."
},
{
WhyChooseheading: "Comfort for Weekend Holidays",
WhyChoosedescription: "Weekend journeys often involve extended travel and several sightseeing stops around Lonavala and Khandala. AC and comfortable bus options provide a convenient environment for families, friends, corporate teams, and tourist groups throughout the trip."
},
{
WhyChooseheading: "Flexible Sightseeing Plans",
WhyChoosedescription: "Different groups may prefer different Lonavala attractions, from forts and caves to lakes and viewpoints. The bus journey can be coordinated with a customized sightseeing plan so passengers can visit selected destinations according to their available time."
},
{
WhyChooseheading: "Suitable for Families and Large Groups",
WhyChoosedescription: "Family gatherings, reunions, college groups, and social trips can involve many passengers traveling on the same day. Selecting an appropriate bus capacity helps keep everyone together and simplifies transportation between Pune, Lonavala, and nearby attractions."
},
{
WhyChooseheading: "Useful for Corporate Outings",
WhyChoosedescription: "Corporate teams frequently choose nearby hill destinations for team outings, informal meetings, and recreational programs. Dedicated bus transportation provides organized movement for employees between Pune offices, hotels, activity locations, and sightseeing destinations."
},
{
WhyChooseheading: "AC and Premium Travel Choices",
WhyChoosedescription: "Travel preferences can differ depending on the type of group and occasion. AC and luxury bus categories provide options for passengers who want additional comfort during the Pune-Lonavala journey, especially for full-day or weekend programs."
},
{
WhyChooseheading: "Complete Round-Trip Convenience",
WhyChoosedescription: "Planning both onward and return transportation together makes a day tour easier to coordinate. A dedicated round-trip bus can remain available according to the planned itinerary, allowing the group to complete sightseeing and return to Pune without arranging separate transport."
}
]
};















const faqData = [
{
question: "What is a Pune to Lonavala bus tour package?",
answer: "A Pune to Lonavala bus tour package is a convenient group travel arrangement for families, friends, schools, corporate teams, and other groups visiting Lonavala. Ruturaj Enterprises can arrange a suitable bus according to the number of passengers, sightseeing plan, travel date, and preferred trip duration."
},
{
question: "Which places can be covered in a Pune to Lonavala bus tour?",
answer: "A Lonavala tour can include popular attractions such as Bhushi Dam, Tiger Point, Rajmachi Point, Lion's Point, Karla Caves, Bhaja Caves, and nearby sightseeing locations. The itinerary can be adjusted according to the group's available time and preferred places to visit."
},
{
question: "Is a bus suitable for a family trip from Pune to Lonavala?",
answer: "Families can enjoy traveling together in a dedicated bus instead of managing multiple cars. A group vehicle makes it easier to keep children, senior citizens, and relatives together while carrying luggage and following a common sightseeing schedule throughout the Lonavala trip."
},
{
question: "Can friends book a Pune to Lonavala bus tour package?",
answer: "Friends can hire a private bus for a weekend outing, birthday celebration, group vacation, or sightseeing trip to Lonavala. Traveling together allows the group to coordinate departure times, sightseeing stops, meals, and the return journey more easily."
},
{
question: "Can corporate teams hire a bus for a Lonavala trip from Pune?",
answer: "Corporate groups can arrange dedicated buses for team outings, employee picnics, team-building activities, annual gatherings, and company events in Lonavala. A common vehicle helps employees travel together and makes the overall event transportation easier to coordinate."
},
{
question: "How many passengers can travel in a bus from Pune to Lonavala?",
answer: "The required bus capacity depends on the size of the group and the amount of luggage being carried. Ruturaj Enterprises can help select a suitable vehicle for smaller groups as well as larger family, corporate, school, and social groups traveling to Lonavala."
},
{
question: "Can we customize the Pune to Lonavala tour itinerary?",
answer: "The sightseeing schedule can be planned according to the group's preferred attractions, departure time, number of passengers, trip duration, and return requirements. This makes it possible to create a flexible Lonavala itinerary rather than following a fixed sightseeing pattern."
},
{
question: "Can I book a round-trip bus from Pune to Lonavala?",
answer: "Round-trip bus booking is a convenient choice for groups starting their journey in Pune and returning after completing their Lonavala sightseeing. The transportation schedule can be coordinated with the group's planned departure, sightseeing duration, meal breaks, and return timing."
},
{
question: "Is a one-day Pune to Lonavala bus tour possible?",
answer: "A one-day Lonavala trip is suitable for groups that want to explore major attractions and return to Pune on the same day. The itinerary can be arranged around the available hours so the group can cover selected sightseeing locations without having to arrange separate transportation."
},
{
question: "Why choose Ruturaj Enterprises for a Pune to Lonavala bus tour package?",
answer: "Ruturaj Enterprises offers group bus transportation for travelers planning Lonavala tours from Pune. Vehicle selection can be matched with passenger strength, itinerary, luggage, and travel schedule, making the journey convenient for families, friends, corporate teams, schools, and other groups."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Kunal Shinde",
feedback:
"We arranged a Pune to Lonavala trip with a large group of friends and decided to hire a dedicated bus. Ruturaj Enterprises made the transportation arrangement convenient for us. Everyone traveled together, and managing our sightseeing schedule was much easier than coordinating several cars.",
rating: 5
},
{
id: 2,
name: "Miss. Priya Khot",
feedback:
"Our family planned a one-day Lonavala outing from Pune and needed transportation for everyone. The bus arrangement through Ruturaj Enterprises worked very well for our group. We could visit multiple sightseeing spots together and return to Pune according to our planned schedule.",
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
  "name": "Pune to Lonavala Bus Tour Package",
  "image": "https://ruturajenterprises.com/assets/images/pune-to-lonavala-bus-tour-package.webp",
  "description":
    "Pune to Lonavala Bus Tour Package for family holidays, group outings, weekend trips, corporate tours, and one-day sightseeing. Ruturaj Enterprises provides comfortable AC and luxury buses from Pune to Lonavala with suitable seating capacities, experienced drivers, convenient pickup options, and flexible tour arrangements. The service is suitable for Lonavala sightseeing and visits to popular attractions around Khandala, Bhushi Dam, Tiger Point, Rajmachi, and nearby destinations.",
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
    "url": "https://ruturajenterprises.com/pune-to-lonavala-bus-tour-package"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Pune to Lonavala Bus Tour Package | Pune Lonavala Bus Rental | +91 9763381382
  </title>

  <meta
    name="description"
    content="Pune to Lonavala Bus Tour Package for one-day trips, weekend holidays, family outings, group tours and corporate travel. Hire AC and luxury buses from Pune for comfortable Lonavala sightseeing and local travel."
  />

  <meta
    name="keywords"
    content="Pune to Lonavala Bus Tour Package, Pune Lonavala Bus Rental, Pune Lonavala Bus Hire, Pune Lonavala Bus Booking, Lonavala Tour Package from Pune by Bus, Pune Lonavala AC Bus Rental, Luxury Bus for Lonavala Tour Pune, Pune to Lonavala Tourist Bus, Lonavala Sightseeing Bus from Pune, Pune Lonavala Group Tour Bus, Pune Lonavala Family Tour Bus, Pune Lonavala One Day Tour Bus, Pune Lonavala Weekend Tour Bus, Pune to Lonavala Bus Rental, Pune to Lonavala Bus Hire, Pune to Lonavala Bus Booking, Pune to Lonavala AC Bus Rental, Pune to Lonavala Luxury Bus Rental, Pune to Lonavala Group Bus Rental, Pune to Lonavala Family Bus Rental, Pune to Lonavala One Day Bus Rental, Pune to Lonavala Weekend Bus Rental, Pune Lonavala Tourist Bus Rental, Pune Lonavala Tour Bus Service, Pune Lonavala Sightseeing Bus Rental, Lonavala Bus Tour Package Pune, Lonavala Bus Rental from Pune, Lonavala Bus Hire from Pune, Lonavala Bus Booking from Pune, Lonavala Holiday Bus Package Pune, Lonavala Family Tour Package Pune, Lonavala Group Tour Package Pune, Lonavala Weekend Trip Bus Pune, Lonavala One Day Trip Bus Pune, Lonavala Picnic Bus Rental Pune, Lonavala Corporate Tour Bus Pune, Lonavala Corporate Outing Bus Pune, Lonavala Wedding Group Bus Pune, Pune to Lonavala Bus for Picnic, Pune to Lonavala Bus for Family Trip, Pune to Lonavala Bus for Group Travel, Pune to Lonavala Bus for Corporate Trip, Pune to Lonavala Bus for College Trip, Pune to Lonavala Bus for School Trip, Pune to Lonavala Tourist Bus Hire, Pune to Lonavala Outstation Bus Rental, AC Bus on Rent Pune to Lonavala, Luxury Bus on Rent Pune to Lonavala, 20 Seater Bus Pune to Lonavala, 32 Seater Bus Pune to Lonavala, 35 Seater Bus Pune to Lonavala, 45 Seater Bus Pune to Lonavala, 50 Seater Bus Pune to Lonavala, Pune to Lonavala Khandala Bus Tour, Pune Lonavala Bhushi Dam Tour Bus, Pune Lonavala Tiger Point Tour Bus, Pune Lonavala Rajmachi Tour Bus, Affordable Pune to Lonavala Bus Rental, Ruturaj Enterprises Pune Lonavala Bus Service"
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
                            <img src='/images/keyword/34.jpg' alt='img' className='img-fluid' />
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

export default Punetolonavalabustour;