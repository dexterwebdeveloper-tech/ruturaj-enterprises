import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Busfortouristinpune() {


const cardData = {
keyword: "Bus for Tourist in Pune",
headingDescription: "Ruturaj Enterprises provides Bus for Tourist in Pune for families, friends, school groups, corporate teams, pilgrimage groups, and organized tourists planning local sightseeing or journeys across Maharashtra and beyond. Comfortable AC and luxury tourist buses can be arranged according to group size, destination, itinerary, travel duration, and luggage requirements. Whether the plan involves Pune Darshan, a temple tour, Maharashtra sightseeing, a family holiday, picnic, wedding function, or an outstation tour, dedicated group transportation makes the journey easier to coordinate.",
topPlaces: [
{
title: "Shaniwar Wada",
description: "Shaniwar Wada is one of Pune's most prominent historical landmarks and an important stop for visitors exploring the city's heritage. A dedicated tourist bus makes it convenient for families and larger groups to include the fort in a planned Pune sightseeing itinerary."
},
{
title: "Aga Khan Palace",
description: "Aga Khan Palace is a significant historical attraction and a popular destination for tourists visiting Pune. Groups can use dedicated bus transportation to reach the palace comfortably and combine the visit with other historical and cultural locations around the city."
},
{
title: "Sinhagad Fort",
description: "Sinhagad Fort is a popular destination for tourists, families, students, and outdoor enthusiasts traveling from Pune. A tourist bus can provide convenient group transportation for a day excursion while allowing the itinerary to include nearby attractions and scenic stops."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a popular hill station known for viewpoints, greenery, pleasant surroundings, and tourist attractions. A comfortable tourist bus is suitable for families and larger groups traveling from Pune for one-day or multi-day holiday programs."
},
{
title: "Lonavala",
description: "Lonavala attracts tourists throughout the year with its hill views, lakes, forts, waterfalls, and recreational destinations. Group bus transportation from Pune allows travelers to visit several attractions together without managing multiple private vehicles."
},
{
title: "Shirdi",
description: "Shirdi is an important pilgrimage destination that attracts families and devotees from Pune and other regions. A dedicated tourist bus provides convenient transportation for religious groups planning temple visits and additional sightseeing around the route."
},
{
title: "Nashik",
description: "Nashik offers a combination of temples, historical attractions, scenic destinations, and cultural experiences. Tourist groups can travel from Pune in a dedicated bus and follow an itinerary covering selected attractions according to their available time."
},
{
title: "Alibaug",
description: "Alibaug is a popular coastal destination for family holidays, weekend trips, picnics, and group tours. A tourist bus provides comfortable transportation from Pune while allowing the group to coordinate beach visits and other attractions in the surrounding region."
},
{
title: "Kolhapur",
description: "Kolhapur is known for its temples, heritage attractions, local culture, and food traditions, making it an appealing destination for tourist groups. A dedicated bus can support family tours, pilgrimage programs, and Maharashtra sightseeing itineraries from Pune."
},
{
title: "Ganpatipule",
description: "Ganpatipule is a popular coastal and pilgrimage destination known for its temple and scenic surroundings. Tourist groups can use dedicated bus transportation from Pune for an extended holiday or religious itinerary covering Ganpatipule and nearby Konkan destinations."
}
],
services: [
{
name: "Tourist Bus Rental Pune",
description: "Tourist Bus Rental Pune provides dedicated transportation for families, friends, corporate teams, school groups, and organized tourist parties. Bus capacity can be selected according to passenger count, destination, trip duration, luggage requirements, and preferred comfort level."
},
{
name: "Tourist Bus Hire Pune",
description: "Tourist Bus Hire Pune is suitable for sightseeing programs, holidays, pilgrimages, picnics, weddings, and group tours. A dedicated bus allows passengers to travel together while following a planned route with convenient stops and scheduled return travel."
},
{
name: "Tourist Bus Booking Pune",
description: "Tourist Bus Booking Pune allows groups to arrange transportation in advance for their planned travel date and itinerary. Requirements such as passenger capacity, AC preference, pickup location, destinations, travel duration, and one-way or round-trip requirements can be considered."
},
{
name: "Tourist Bus on Rent Pune",
description: "Tourist Bus on Rent Pune offers a practical solution for groups requiring transportation for local or outstation travel. The bus can be arranged for one-day sightseeing, weekend holidays, multi-day tours, religious journeys, and organized group programs."
},
{
name: "AC Tourist Bus Pune",
description: "AC Tourist Bus Pune provides a comfortable environment for sightseeing and longer road journeys. Air-conditioned buses are suitable for families, tourists, corporate teams, school groups, and pilgrimage travelers spending several hours on the road."
},
{
name: "Luxury Tourist Bus Pune",
description: "Luxury Tourist Bus Pune is suitable for travelers looking for a premium group transportation experience during holidays, corporate tours, family functions, and special occasions. Spacious interiors and enhanced comfort can make extended sightseeing and road journeys more convenient."
},
{
name: "Tourist Bus for Local Sightseeing Pune",
description: "Tourist Bus for Local Sightseeing Pune is ideal for visitors exploring Pune's historical, cultural, religious, and recreational attractions. A dedicated bus can cover multiple locations during the day while keeping the entire group together and reducing transportation coordination."
},
{
name: "Tourist Bus for Outstation Pune",
description: "Tourist Bus for Outstation Pune provides dedicated transportation for groups traveling to destinations outside the city. It is suitable for Maharashtra tours, pilgrimage trips, family holidays, corporate journeys, and multi-day tourist itineraries."
},
{
name: "Tourist Bus for Family Tour Pune",
description: "Tourist Bus for Family Tour Pune allows relatives and family members to travel together during holidays, reunions, temple visits, and sightseeing programs. Vehicle capacity can be selected according to the size of the family group and overall itinerary."
},
{
name: "Tourist Bus for Group Tour Pune",
description: "Tourist Bus for Group Tour Pune is designed for large groups of friends, colleagues, students, tourists, and community members traveling together. Dedicated group transportation simplifies travel coordination and provides a common vehicle for the complete tour."
},
{
name: "Tourist Bus for Pune Darshan",
description: "Tourist Bus for Pune Darshan provides organized transportation for visitors exploring Pune's historical and religious attractions. The itinerary can include selected temples, monuments, museums, cultural landmarks, and other city destinations according to the group's schedule."
},
{
name: "Tourist Bus for Maharashtra Tour Pune",
description: "Tourist Bus for Maharashtra Tour Pune is suitable for groups planning journeys across Maharashtra's hill stations, coastal destinations, forts, temples, and cultural attractions. A dedicated bus allows travelers to follow a multi-destination itinerary without arranging separate vehicles at every location."
},
{
name: "Tourist Bus for Temple Tour Pune",
description: "Tourist Bus for Temple Tour Pune provides convenient group transportation for religious journeys covering temples around Pune and other destinations. Families and pilgrimage groups can plan multiple temple visits while traveling together in a dedicated bus."
},
{
name: "Tourist Bus for Holiday Trip Pune",
description: "Tourist Bus for Holiday Trip Pune is suitable for families, friends, and organized groups planning short or extended vacations. Transportation can be arranged according to the destination, sightseeing plan, number of passengers, luggage, and preferred travel duration."
},
{
name: "Tourist Bus for Picnic Pune",
description: "Tourist Bus for Picnic Pune provides convenient transportation for families, schools, companies, friends, and social groups planning recreational outings. The bus can accommodate the group and follow a planned route between the pickup point, picnic destination, and return location."
},
{
name: "Tourist Bus for Corporate Tour Pune",
description: "Tourist Bus for Corporate Tour Pune supports employee outings, team-building programs, business visits, training trips, conferences, and company holidays. A dedicated bus helps organizations coordinate employee transportation between offices, hotels, venues, and tourist destinations."
},
{
name: "Tourist Bus for Wedding Pune",
description: "Tourist Bus for Wedding Pune is useful for transporting relatives and guests between homes, hotels, wedding venues, reception halls, and other function locations. Dedicated group transportation helps wedding organizers manage guest movement according to ceremony timings."
},
{
name: "Tourist Bus Near Me Pune",
description: "Tourist Bus Near Me Pune is useful for travelers searching for convenient group transportation close to their preferred pickup location. Bus arrangements can be coordinated according to passenger count, travel date, destination, vehicle type, and planned sightseeing schedule."
},
{
name: "Affordable Tourist Bus Rental Pune",
description: "Affordable Tourist Bus Rental Pune provides a practical option for groups looking to manage transportation costs while traveling together. Selecting a suitable bus capacity and planning an efficient route can help balance budget considerations with comfort and convenience."
},
{
name: "Tourist Group Transportation Pune",
description: "Tourist Group Transportation Pune provides dedicated mobility for organized tourist groups traveling within Pune or to destinations across Maharashtra and beyond. The transportation plan can be structured around group size, itinerary, pickup points, sightseeing stops, and return requirements."
},
{
name: "Pune Sightseeing Bus Hire",
description: "Pune Sightseeing Bus Hire is suitable for visitors who want to explore multiple attractions across the city in one organized journey. A dedicated bus can connect historical landmarks, temples, museums, recreational destinations, and other selected sightseeing locations."
},
{
name: "Pune Tour Bus Rental Service",
description: "Pune Tour Bus Rental Service provides flexible group transportation for city tours, Maharashtra holidays, pilgrimages, picnics, family trips, corporate outings, weddings, and tourist programs. Vehicle selection and travel planning can be coordinated according to passenger strength, destination, and itinerary."
}
],
tableData: [
["Tourist Bus Rental Pune", "Tourist Bus Hire Pune"],
["Tourist Bus Booking Pune", "Tourist Bus on Rent Pune"],
["AC Tourist Bus Pune", "Luxury Tourist Bus Pune"],
["Tourist Bus for Local Sightseeing Pune", "Tourist Bus for Outstation Pune"],
["Tourist Bus for Family Tour Pune", "Tourist Bus for Group Tour Pune"],
["Tourist Bus for Pune Darshan", "Tourist Bus for Maharashtra Tour Pune"],
["Tourist Bus for Temple Tour Pune", "Tourist Bus for Holiday Trip Pune"],
["Tourist Bus for Picnic Pune", "Tourist Bus for Corporate Tour Pune"],
["Tourist Bus for Wedding Pune", "Tourist Bus Near Me Pune"],
["Affordable Tourist Bus Rental Pune", "Tourist Group Transportation Pune"],
["Pune Sightseeing Bus Hire", "Pune Tour Bus Rental Service Pune"]
],
whychoose: [
{
WhyChooseheading: "Dedicated Tourist Group Travel",
WhyChoosedescription: "Traveling together in one dedicated bus makes sightseeing and holiday planning easier for large groups. Passengers can follow common departure times, planned stops, and return schedules without coordinating several separate vehicles."
},
{
WhyChooseheading: "Suitable for Local and Outstation Tours",
WhyChoosedescription: "Tourist groups may need transportation for a short Pune Darshan or a multi-day Maharashtra journey. Bus arrangements can be planned according to the destination, itinerary, passenger count, and duration of the trip."
},
{
WhyChooseheading: "Comfortable AC Options",
WhyChoosedescription: "Long sightseeing programs and extended road journeys are more convenient when passengers have a comfortable travel environment. AC tourist buses are suitable for families, corporate teams, school groups, and tourists traveling for several hours."
},
{
WhyChooseheading: "Multiple Destination Itineraries",
WhyChoosedescription: "Tour programs often include several attractions rather than a single destination. A dedicated bus allows groups to move between temples, forts, viewpoints, historical landmarks, beaches, and other attractions according to a planned route."
},
{
WhyChooseheading: "Ideal for Family Holidays",
WhyChoosedescription: "Family groups can travel together without splitting into several cars during a holiday or pilgrimage. Suitable bus capacity provides shared transportation for relatives while making luggage and itinerary coordination more convenient."
},
{
WhyChooseheading: "Convenient Corporate Tours",
WhyChoosedescription: "Corporate teams can use tourist buses for employee outings, conferences, training programs, team activities, and business travel. Dedicated transportation helps companies coordinate movement between offices, hotels, venues, and selected destinations."
},
{
WhyChooseheading: "Useful for Weddings and Events",
WhyChoosedescription: "Large events frequently require transportation for guests moving between multiple venues. A dedicated tourist bus can simplify transfers for wedding parties, event attendees, family groups, and guests according to the function schedule."
},
{
WhyChooseheading: "Practical Group Transportation",
WhyChoosedescription: "Hiring one appropriately sized tourist bus can make group travel easier to manage than arranging numerous individual vehicles. Passenger capacity, route requirements, travel duration, sightseeing plans, and comfort preferences can all be considered while planning the journey."
}
]
};










const faqData = [
{
question: "What is a tourist bus service in Pune?",
answer: "A tourist bus service in Pune provides dedicated group transportation for sightseeing, holidays, local excursions, and outstation tours. Ruturaj Enterprises offers suitable bus rental options for families, friends, corporate groups, school parties, and tourists who want to explore destinations together."
},
{
question: "Can tourists hire a private bus in Pune for sightseeing?",
answer: "Tourists can hire a private bus for exploring Pune and nearby attractions according to their preferred itinerary. Having a dedicated vehicle allows the group to visit multiple locations without depending on public transportation or coordinating several separate cars."
},
{
question: "Which destinations can tourists visit by bus from Pune?",
answer: "A tourist bus from Pune can be used for trips to destinations such as Lonavala, Khandala, Mahabaleshwar, Panchgani, Nashik, Alibaug, Goa, Mumbai, and other popular locations. The route can be planned according to the group's interests, travel duration, and sightseeing requirements."
},
{
question: "Is a tourist bus suitable for family vacations?",
answer: "Families can benefit from a dedicated tourist bus when traveling with several relatives, children, or senior members. Everyone can remain together throughout the trip while luggage, sightseeing stops, meal breaks, and departure timings can be coordinated more easily."
},
{
question: "Can foreign or out-of-city tourists hire a bus in Pune?",
answer: "Visitors arriving in Pune can arrange a private bus for group sightseeing and travel to nearby destinations. A dedicated vehicle can be useful for groups that want to follow a planned itinerary covering multiple attractions rather than relying on separate local transportation options."
},
{
question: "What seating capacities are available for tourist bus rental in Pune?",
answer: "The ideal seating capacity depends on the size of the travel group. Ruturaj Enterprises can help select a suitable bus for smaller tourist groups as well as larger parties, considering passenger count, luggage, route distance, sightseeing plans, and trip duration."
},
{
question: "Can corporate tourists book a bus for an outing from Pune?",
answer: "Corporate teams can hire tourist buses for employee outings, team-building trips, conferences, company tours, and recreational travel. A dedicated bus helps the entire group travel together while making it easier to follow a common itinerary and coordinated schedule."
},
{
question: "Can a tourist bus be hired for a one-day trip from Pune?",
answer: "One-day tourist bus rentals are suitable for nearby destinations and local sightseeing programs. The itinerary can be organized around the available travel hours, allowing groups to visit selected attractions and return to Pune on the same day without arranging multiple vehicles."
},
{
question: "Can I hire a tourist bus for a multi-day tour from Pune?",
answer: "Multi-day bus rental is useful for extended holidays, pilgrimage tours, state-wide sightseeing, and destination tours. Ruturaj Enterprises can plan the transportation according to the number of travelers, destinations, overnight halts, sightseeing schedule, and expected return date."
},
{
question: "Why choose Ruturaj Enterprises for a tourist bus in Pune?",
answer: "Ruturaj Enterprises provides dedicated group transportation for tourists planning local and outstation journeys from Pune. Bus selection can be matched with group size, route, luggage, sightseeing itinerary, and trip duration, helping travelers enjoy a more organized and convenient tour experience."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Vivek Bhandari",
feedback:
"We hired a tourist bus from Ruturaj Enterprises for a family sightseeing trip from Pune. Having one dedicated vehicle made it much easier to keep everyone together and visit multiple places according to our plan. The overall arrangement was convenient for our group.",
rating: 5
},
{
id: 2,
name: "Miss. Nisha Kulkarni",
feedback:
"Our group was visiting Pune and nearby destinations and needed a private bus for sightseeing. Ruturaj Enterprises helped us arrange suitable transportation for the trip. We could follow our itinerary comfortably without worrying about arranging separate vehicles for each location.",
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
  "name": "Bus for Tourist in Pune",
  "image": "https://ruturajenterprises.com/assets/images/bus-for-tourist-in-pune.webp",
  "description":
    "Bus for Tourist in Pune for local sightseeing, family holidays, group tours, religious journeys, Maharashtra trips, corporate outings, and long-distance travel. Ruturaj Enterprises provides comfortable AC, non-AC, and luxury tourist buses in multiple seating capacities with experienced drivers, convenient pickup arrangements, flexible rental durations, and dependable transportation for Pune sightseeing as well as outstation tours.",
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
    "url": "https://ruturajenterprises.com/bus-for-tourist-in-pune"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Bus for Tourist in Pune | Tourist Bus Rental Pune | +91 9763381382
  </title>

  <meta
    name="description"
    content="Bus for Tourist in Pune for local sightseeing, family tours, group trips, Pune Darshan, Maharashtra tours, temple visits and outstation holidays. Hire comfortable AC and luxury tourist buses with flexible rental options."
  />

  <meta
    name="keywords"
    content="Tourist Bus Rental Pune, Tourist Bus Hire Pune, Tourist Bus Booking Pune, Tourist Bus on Rent Pune, AC Tourist Bus Pune, Luxury Tourist Bus Pune, Tourist Bus for Local Sightseeing Pune, Tourist Bus for Outstation Pune, Tourist Bus for Family Tour Pune, Tourist Bus for Group Tour Pune, Tourist Bus for Pune Darshan, Tourist Bus for Maharashtra Tour Pune, Tourist Bus for Temple Tour Pune, Tourist Bus for Holiday Trip Pune, Tourist Bus Service Pune, Tourist Bus Rental Service Pune, Tourist Bus Hire Service Pune, Tourist Bus Booking Service Pune, Pune Tourist Bus Rental, Pune Tourist Bus Hire, Pune Tourist Bus Booking, Pune Tourism Bus Rental, Pune Sightseeing Bus Rental, Pune Sightseeing Bus Hire, Pune Local Tour Bus Pune, Pune City Tour Tourist Bus, Pune Darshan Tourist Bus Rental, Pune Darshan Tourist Bus Hire, Maharashtra Tourist Bus Rental Pune, Maharashtra Tour Bus Hire Pune, Maharashtra Tour Bus Package Pune, Tourist Bus for Family Trip Pune, Tourist Bus for Group Travel Pune, Tourist Bus for Friends Trip Pune, Tourist Bus for Corporate Tour Pune, Tourist Bus for Corporate Outing Pune, Tourist Bus for Wedding Pune, Tourist Bus for Marriage Function Pune, Tourist Bus for Picnic Pune, Tourist Bus for School Trip Pune, Tourist Bus for College Trip Pune, Tourist Bus for Religious Tour Pune, Tourist Bus for Pilgrimage Pune, Tourist Bus for Temple Tour from Pune, Tourist Bus for Weekend Trip Pune, Tourist Bus for One Day Trip Pune, Tourist Bus for Multi Day Tour Pune, Tourist Bus for Airport Transfer Pune, Tourist Bus for Hotel Transfer Pune, AC Tourist Bus Rental Pune, AC Tourist Bus Hire Pune, Luxury Tourist Bus Rental Pune, Luxury Tourist Bus Hire Pune, Non AC Tourist Bus Rental Pune, Tourist Mini Bus Rental Pune, Tourist Mini Bus Hire Pune, 20 Seater Tourist Bus Pune, 32 Seater Tourist Bus Pune, 35 Seater Tourist Bus Pune, 45 Seater Tourist Bus Pune, 50 Seater Tourist Bus Pune, Tourist Bus for Goa Tour Pune, Tourist Bus for Mumbai Tour Pune, Tourist Bus for Lonavala Tour Pune, Tourist Bus for Mahabaleshwar Tour Pune, Tourist Bus for Nashik Tour Pune, Tourist Bus for Shirdi Tour Pune, Tourist Bus for Konkan Tour Pune, Tourist Bus for Rajasthan Tour Pune, Tourist Bus for Gujarat Tour Pune, Affordable Tourist Bus Rental Pune, Tourist Bus Rental Near Me Pune, Ruturaj Enterprises Tourist Bus Service Pune"
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
                            <img src='/images/keyword/37.jpg' alt='img' className='img-fluid' />
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

export default Busfortouristinpune ;