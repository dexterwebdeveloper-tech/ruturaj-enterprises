import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Bookbusonrentinpune() {


const cardData = {
keyword: "Book Bus On Rent in Pune",
headingDescription: "Ruturaj Enterprises makes it convenient to book a bus on rent in Pune for local travel, outstation tours, family holidays, weddings, corporate programs, school excursions, picnics and special events. Different bus options including AC, non-AC, luxury, mini and tourist buses can be selected according to group size, comfort requirements and journey type. Whether you need transportation for a few hours within Pune or a multi-day trip to another destination, our group bus rental services help keep passengers together with a convenient and organized travel arrangement.",
topPlaces: [
{
title: "Rajmachi",
description: "Rajmachi is a scenic destination surrounded by the Sahyadri ranges and is popular for trekking, nature trips and weekend excursions. Renting a bus from Pune is useful for groups carrying backpacks and other travel essentials while traveling together."
},
{
title: "Alibaug",
description: "Alibaug is a popular coastal destination for family vacations, corporate outings, wedding groups and weekend holidays. A rented bus provides convenient shared transportation for groups that want to travel together and explore multiple locations around the destination."
},
{
title: "Shirdi",
description: "Shirdi attracts devotees and family groups throughout the year and is a popular pilgrimage route from Pune. A dedicated rental bus allows passengers to stay together throughout the journey while providing practical space for luggage and personal belongings."
},
{
title: "Bhandardara",
description: "Bhandardara offers lakes, waterfalls, mountains and peaceful natural surroundings for weekend group trips. A bus on rent from Pune is a convenient choice for families, friends and corporate groups planning a full-day or multi-day excursion."
},
{
title: "Panchgani",
description: "Panchgani is known for its viewpoints, valleys, pleasant climate and family-friendly attractions. Groups can hire a comfortable bus from Pune to enjoy a coordinated hill-station tour without needing to arrange several individual vehicles."
},
{
title: "Nashik",
description: "Nashik combines religious sites, vineyards, temples and scenic attractions, making it suitable for family tours and group sightseeing. Bus rental from Pune allows travelers to follow a planned itinerary while keeping the complete group together."
},
{
title: "Kashid",
description: "Kashid is known for its beach, coastal scenery and relaxed holiday atmosphere, making it suitable for group vacations and weekend trips. A rented bus offers a comfortable transportation solution for passengers carrying luggage and planning stops along the coastal route."
},
{
title: "Bhimashankar",
description: "Bhimashankar is a popular pilgrimage and nature destination surrounded by the Western Ghats. A rental bus is practical for families, devotees and organized groups who want to travel together from Pune for a one-day or extended visit."
},
{
title: "Kolhapur",
description: "Kolhapur is a popular destination for pilgrimage, heritage, food and cultural tourism. Hiring a bus from Pune makes long-distance group travel easier for families, friends, corporate groups and tour organizers."
},
{
title: "Kamshet",
description: "Kamshet is suitable for adventure trips, lakeside outings, camping and group picnics near Pune. A mini or full-size rental bus can provide convenient transportation for groups traveling with bags, equipment and picnic supplies."
}
],
services: [
{
name: "Bus Booking Pune",
description: "Bus booking in Pune can be arranged for local transportation, sightseeing, events, family functions and outstation journeys. Ruturaj Enterprises helps groups select an appropriate vehicle according to passenger strength, route, trip duration and comfort requirements."
},
{
name: "Bus Rental Pune",
description: "Bus rental services in Pune provide convenient transportation for groups planning short trips as well as longer journeys. Options can support weddings, corporate events, school excursions, family vacations, picnics and tourist tours."
},
{
name: "Bus Hire Pune",
description: "Bus hire in Pune is a practical solution when a group wants to travel together without coordinating multiple cars. The service can be used for local transfers, sightseeing, celebrations, airport transportation and outstation travel."
},
{
name: "Bus on Rent Pune",
description: "A bus on rent in Pune can be arranged for hourly, full-day or extended travel requirements depending on the planned itinerary. It is suitable for family groups, tourists, schools, offices, wedding parties and event organizers."
},
{
name: "AC Bus on Rent Pune",
description: "AC buses on rent in Pune are suitable for travelers who prioritize a comfortable interior, especially during warm weather and long road journeys. They can be used for family tours, corporate programs, weddings, sightseeing and outstation travel."
},
{
name: "Non AC Bus Rental Pune",
description: "Non AC bus rental in Pune offers a practical transportation choice for budget-conscious group travel and selected shorter routes. It can be useful for school trips, picnics, local events, group transfers and other planned journeys."
},
{
name: "Luxury Bus Rental Pune",
description: "Luxury bus rental in Pune is designed for groups looking for a more premium travel experience during corporate events, weddings, special tours and long-distance journeys. Comfortable interiors make it suitable for passengers who want to travel together with added convenience."
},
{
name: "Mini Bus Booking Pune",
description: "Mini bus booking in Pune is ideal for smaller groups that require more seating than multiple cars but do not need a full-size bus. It works well for family outings, corporate transfers, airport pickup, sightseeing, school activities and local events."
},
{
name: "Tourist Bus Booking Pune",
description: "Tourist bus booking in Pune provides organized transportation for sightseeing tours, holiday groups and destination-based travel. Groups can use a dedicated bus to follow a planned itinerary and visit multiple attractions without arranging separate vehicles."
},
{
name: "Outstation Bus Booking Pune",
description: "Outstation bus booking from Pune is suitable for trips to hill stations, pilgrimage destinations, beaches, heritage cities and other popular routes. The service supports one-day tours, weekend journeys and multi-day group travel."
},
{
name: "Wedding Bus Booking Pune",
description: "Wedding bus booking in Pune helps families manage transportation for guests traveling between homes, hotels, ceremony venues and reception locations. Dedicated buses simplify guest movement and can be arranged for both local and destination wedding functions."
},
{
name: "Corporate Bus Booking Pune",
description: "Corporate bus booking in Pune supports employee transportation for meetings, conferences, exhibitions, team outings, seminars and company events. A dedicated vehicle can be used for transfers between offices, hotels, airports and event venues."
},
{
name: "School Trip Bus Booking Pune",
description: "School trip bus booking in Pune provides organized transportation for students, teachers and accompanying staff. Buses are useful for educational visits, historical tours, nature excursions, museums, recreational destinations and school picnics."
},
{
name: "Picnic Bus Booking Pune",
description: "Picnic bus booking from Pune is convenient for families, colleges, schools, offices and social groups planning day outings. Passengers can travel together with food, bags and picnic equipment while maintaining a coordinated travel schedule."
},
{
name: "Event Bus Booking Pune",
description: "Event bus booking in Pune can support transportation for exhibitions, concerts, conferences, cultural programs, private functions and large gatherings. Group transportation helps move attendees between parking areas, hotels, venues and other planned locations."
},
{
name: "Family Trip Bus Booking Pune",
description: "Family trip bus booking in Pune is useful when relatives and extended family members want to travel together for holidays, pilgrimages and weekend vacations. A dedicated bus provides shared transportation with practical seating and luggage space."
},
{
name: "Group Travel Bus Booking Pune",
description: "Group travel bus booking in Pune makes transportation easier for friends, relatives, community groups, tour groups and organizations. Everyone can follow the same route and schedule while avoiding the coordination challenges associated with multiple private vehicles."
},
{
name: "Airport Pickup Bus Booking Pune",
description: "Airport pickup bus booking in Pune is useful for large families, corporate teams and tour groups arriving together with multiple bags. A suitable bus can simplify transfers between Pune Airport, hotels, offices, residences and other destinations."
},
{
name: "Affordable Bus Rental Pune",
description: "Affordable bus rental in Pune gives groups a practical way to manage transportation costs while traveling together. Choosing a suitable capacity and vehicle category can help avoid unnecessary expenses associated with arranging several separate cars."
},
{
name: "Online Bus Booking Pune",
description: "Online bus booking in Pune provides a convenient way to plan group transportation before the travel date. Customers can consider the passenger count, destination, trip duration and required vehicle category while organizing their travel requirements."
},
{
name: "Bus Rental Service Pune",
description: "The bus rental service in Pune supports local and outstation requirements for families, tourists, schools, companies, wedding groups and event organizers. Vehicle selection can be planned according to the size and purpose of each group."
},
{
name: "Bus Hire Near Me Pune",
description: "People searching for bus hire near them in Pune can choose a suitable group transportation option based on route, passenger count and travel purpose. Ruturaj Enterprises supports arrangements for local travel, airport transfers, sightseeing, events and outstation journeys."
}
],
tableData: [
["Bus Booking Pune", "Bus Rental Pune"],
["Bus Hire Pune", "Bus on Rent Pune"],
["AC Bus on Rent Pune", "Non AC Bus Rental Pune"],
["Luxury Bus Rental Pune", "Mini Bus Booking Pune"],
["Tourist Bus Booking Pune", "Outstation Bus Booking Pune"],
["Wedding Bus Booking Pune", "Corporate Bus Booking Pune"],
["School Trip Bus Booking Pune", "Picnic Bus Booking Pune"],
["Event Bus Booking Pune", "Family Trip Bus Booking Pune"],
["Group Travel Bus Booking Pune", "Airport Pickup Bus Booking Pune"],
["Affordable Bus Rental Pune", "Online Bus Booking Pune"],
["Bus Rental Service Pune", "Bus Hire Near Me Pune"]
],
whychoose: [
{
WhyChooseheading: "Easy Group Transportation",
WhyChoosedescription: "A dedicated rental bus keeps the entire group together throughout the journey and makes travel coordination much simpler. This is particularly helpful for families, schools, offices, wedding groups and organized tours."
},
{
WhyChooseheading: "Local and Outstation Options",
WhyChoosedescription: "Bus rental arrangements can cover Pune city travel as well as longer routes to destinations across Maharashtra and beyond. This flexibility makes the service useful for both short local requirements and multi-day tours."
},
{
WhyChooseheading: "Multiple Vehicle Categories",
WhyChoosedescription: "Travelers can consider AC, non-AC, luxury, mini and tourist bus options depending on passenger count and comfort preferences. Selecting the right category helps create a practical transportation plan for the trip."
},
{
WhyChooseheading: "Ideal for Special Events",
WhyChoosedescription: "Weddings, corporate functions, school programs, picnics and private events often require coordinated group movement. Hiring a dedicated bus provides an organized way to transport passengers between multiple locations."
},
{
WhyChooseheading: "Comfort for Longer Journeys",
WhyChoosedescription: "For outstation travel, having everyone seated in one suitable vehicle can make the road journey more convenient and relaxed. AC and premium options can be considered when additional comfort is important."
},
{
WhyChooseheading: "Suitable for Different Group Sizes",
WhyChoosedescription: "From smaller groups needing a mini bus to larger parties requiring a tourist bus, vehicle selection can be matched with the number of passengers. This helps avoid both overcrowding and unnecessary vehicle capacity."
},
{
WhyChooseheading: "Convenient for Planned Tours",
WhyChoosedescription: "A rented bus is useful when the itinerary includes several sightseeing stops, hotels, venues or destinations. Group transportation allows everyone to follow the same schedule and simplifies movement throughout the tour."
},
{
WhyChooseheading: "Practical Travel Solution in Pune",
WhyChoosedescription: "Ruturaj Enterprises provides a flexible option for people looking to organize group transportation from Pune. Whether the requirement is for a family holiday, airport transfer, local event or outstation tour, bus rental can make the overall journey easier to coordinate."
}
]
};







const faqData = [
{
question: "How can I book a bus on rent in Pune?",
answer: "Booking a bus on rent in Pune starts with sharing details such as passenger count, travel date, destination, pickup location, and trip duration. Ruturaj Enterprises can then help identify a suitable bus according to the group's transportation needs, itinerary, luggage, and preferred comfort level."
},
{
question: "Can I book a private bus for local travel in Pune?",
answer: "A private bus can be arranged for local sightseeing, family outings, weddings, school trips, corporate programs, events, and other group activities in Pune. Having one dedicated vehicle makes it easier to coordinate passengers, pickup points, planned stops, and return timings."
},
{
question: "Can I book a bus on rent from Pune for an outstation trip?",
answer: "Outstation bus rental is suitable for groups traveling from Pune to destinations such as Mumbai, Goa, Mahabaleshwar, Lonavala, Nashik, Shirdi, Kolhapur, Aurangabad, and other locations. The vehicle can be selected based on passenger capacity, travel distance, luggage, and duration."
},
{
question: "What information is required to book a bus in Pune?",
answer: "For a smooth booking process, travelers should provide the approximate number of passengers, pickup point, destination, travel date, expected departure and return timings, and whether the trip is local or outstation. Additional itinerary details can help determine the most suitable transportation option."
},
{
question: "Can families book a bus on rent in Pune?",
answer: "Family groups can reserve a private bus when traveling with several relatives, children, or senior members. One dedicated vehicle keeps the group together and provides a convenient way to manage luggage, sightseeing stops, meal breaks, and travel schedules during the journey."
},
{
question: "Can I book an AC bus on rent in Pune?",
answer: "Passengers who prefer enhanced comfort can request an AC bus depending on availability and trip requirements. Ruturaj Enterprises can help select a suitable option by considering the group size, journey duration, route, luggage, and desired level of comfort."
},
{
question: "Can corporate companies book buses on rent in Pune?",
answer: "Corporate organizations can arrange rented buses for employee transportation, team outings, conferences, meetings, training programs, company events, and group travel. A dedicated bus helps employees travel together while keeping pickup and destination schedules coordinated."
},
{
question: "What seating capacity is available when booking a bus in Pune?",
answer: "Bus capacity should be chosen according to the number of passengers traveling together and the luggage they will carry. Smaller groups can select an appropriate lower-capacity vehicle, while larger groups can consider higher-capacity buses based on comfort and itinerary requirements."
},
{
question: "Can I book a bus for a wedding or special event in Pune?",
answer: "Bus rental is useful for transporting guests between homes, hotels, wedding venues, reception locations, and other event destinations. A dedicated vehicle makes group movement easier to coordinate and can be scheduled around the timings and locations of the function."
},
{
question: "Why choose Ruturaj Enterprises to book a bus on rent in Pune?",
answer: "Ruturaj Enterprises offers group transportation for local trips, outstation tours, family journeys, corporate programs, weddings, sightseeing, and events. The bus selection can be planned according to passenger count, route, luggage, travel duration, and the specific requirements of the group."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Nitin Kumbhar",
feedback:
"We needed a private bus in Pune for a family outstation trip and booked through Ruturaj Enterprises. The vehicle was suitable for our group, and having everyone travel together made the journey much easier to manage. The overall booking and travel arrangement was convenient.",
rating: 5
},
{
id: 2,
name: "Miss. Shweta Gaikwad",
feedback:
"Our group required a bus for an event in Pune, and Ruturaj Enterprises helped us arrange the transportation according to our schedule. The dedicated bus made it simple to move everyone together between the pickup location and venue. We had a smooth experience overall.",
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
  "name": "Book Bus On Rent in Pune",
  "image": "https://ruturajenterprises.com/assets/images/book-bus-on-rent-in-pune.webp",
  "description":
    "Book Bus On Rent in Pune for local travel, outstation journeys, family trips, group tours, weddings, corporate events, school trips, picnics, sightseeing and special occasions. Ruturaj Enterprises offers AC, non AC, luxury, mini and tourist bus options with comfortable seating, experienced drivers, convenient pickup arrangements and flexible rental plans for short and long-distance travel from Pune.",
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
    "url": "https://ruturajenterprises.com/book-bus-on-rent-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Book Bus On Rent in Pune | Bus Booking Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Book Bus On Rent in Pune for local and outstation travel, family trips, group tours, weddings, corporate events, school trips and sightseeing. Choose AC, Non AC, luxury, mini and tourist buses from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Bus Booking Pune, Bus Rental Pune, Bus Hire Pune, Bus on Rent Pune, AC Bus on Rent Pune, Non AC Bus Rental Pune, Luxury Bus Rental Pune, Mini Bus Booking Pune, Tourist Bus Booking Pune, Outstation Bus Booking Pune, Wedding Bus Booking Pune, Corporate Bus Booking Pune, Local Bus Booking Pune, Local Bus on Rent Pune, Outstation Bus on Rent Pune, AC Bus Rental Pune, AC Bus Hire Pune, Non AC Bus Hire Pune, Luxury Bus Hire Pune, Mini Bus Rental Pune, Mini Bus Hire Pune, Tourist Bus Rental Pune, Tourist Bus Hire Pune, Bus for Family Trip Pune, Bus for Group Travel Pune, Bus for Wedding Pune, Bus for Corporate Events Pune, Bus for School Trips Pune, Bus for Picnic Pune, Bus for Local Sightseeing Pune, Bus for Pune Darshan, Bus for Airport Pickup Pune, Bus for Airport Drop Pune, Bus for Outstation Tour Pune, Bus for Family Tour Pune, Bus for Group Tour Pune, Bus for Corporate Travel Pune, Bus for Wedding Guests Pune, Wedding Guest Bus Hire Pune, Bus for Marriage Function Pune, Corporate Bus Rental Pune, Corporate Staff Transportation Bus Pune, School Trip Bus Rental Pune, School Picnic Bus Hire Pune, Picnic Bus Rental Pune, Outstation Bus Rental Service Pune, Local Bus Rental Service Pune, Bus Hire Service Pune, Bus Rental Service Pune, Bus Booking Service Pune, Bus Rental Near Me Pune, Bus Hire Near Me Pune, Affordable Bus Rental Pune, Comfortable Bus Rental Pune, Premium Bus Rental Pune, Bus Rental for One Day Trip Pune, Bus Rental for Multi Day Trip Pune, Bus for Religious Tour Pune, Bus for Temple Tour Pune, Bus for Maharashtra Tour Pune, Bus for Goa Trip Pune, Bus for Mumbai Trip Pune, Bus for Lonavala Trip Pune, Bus for Mahabaleshwar Trip Pune, Bus for Nashik Trip Pune, Bus for Shirdi Trip Pune, Bus for Kolhapur Trip Pune, Bus for Konkan Trip Pune, Ruturaj Enterprises Bus Rental Pune"
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
                            <img src='/images/keyword/46.jpg' alt='img' className='img-fluid' />
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

export default Bookbusonrentinpune ;