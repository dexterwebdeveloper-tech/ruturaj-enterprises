import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetouttarpradeshbus() {


const cardData = {
keyword: "Pune to Uttar Pradesh bus on rent",
headingDescription: "Ruturaj Enterprises offers comfortable and dependable Pune to Uttar Pradesh bus on rent services for families, friends, corporate groups, pilgrimage parties, and large tour groups. Long-distance journeys from Pune to Uttar Pradesh can be arranged with suitable AC and luxury buses for destinations such as Varanasi, Ayodhya, Lucknow, Prayagraj, and other preferred locations. Whether the requirement is for a religious yatra, family holiday, group tour, sightseeing trip, or round-trip journey, the transportation plan can be organized around passenger capacity, travel duration, route, luggage requirements, and sightseeing schedule.",
topPlaces: [
{
title: "Varanasi",
description: "Varanasi is one of India's most prominent spiritual and cultural destinations, attracting travelers to its temples, ghats, and historic areas. A dedicated bus from Pune allows families and pilgrimage groups to travel together while exploring the city and nearby attractions at their preferred pace."
},
{
title: "Ayodhya",
description: "Ayodhya is a major pilgrimage destination known for its religious significance, temples, and spiritual atmosphere. Groups traveling from Pune can choose dedicated bus transportation to coordinate temple visits and combine Ayodhya with other important destinations across Uttar Pradesh."
},
{
title: "Lucknow",
description: "Lucknow is known for its rich heritage, historic monuments, traditional cuisine, and distinctive cultural character. A group bus provides convenient transportation for families, corporate groups, and tourists planning to include Lucknow in a wider Uttar Pradesh itinerary."
},
{
title: "Prayagraj",
description: "Prayagraj is an important pilgrimage and cultural destination associated with the confluence of the Ganga, Yamuna, and Saraswati rivers. Dedicated group transportation makes it easier for families and religious groups to include Prayagraj in a multi-city journey from Pune."
},
{
title: "Mathura",
description: "Mathura is closely associated with Lord Krishna and attracts devotees and tourists throughout the year. Travelers can include Mathura in an extended Uttar Pradesh pilgrimage or family tour while using a dedicated bus for convenient group transportation."
},
{
title: "Vrindavan",
description: "Vrindavan is a popular spiritual destination known for its temples and Krishna-related religious heritage. A dedicated bus is particularly useful for families and devotional groups visiting multiple temples together and continuing onward to nearby pilgrimage locations."
},
{
title: "Agra",
description: "Agra is a major tourist destination famous for the Taj Mahal, historic forts, and Mughal-era heritage. Groups traveling from Pune can add Agra to their Uttar Pradesh itinerary and use one dedicated bus for sightseeing and transfers between cities."
},
{
title: "Chitrakoot",
description: "Chitrakoot is an important spiritual destination surrounded by temples, sacred sites, and locations associated with religious traditions. It can be included in a longer pilgrimage itinerary for groups looking for a dedicated transportation arrangement from Pune."
},
{
title: "Sarnath",
description: "Sarnath, located near Varanasi, is a significant Buddhist and historical destination known for its ancient sites and peaceful surroundings. Groups visiting Varanasi can conveniently add Sarnath to their itinerary when planning a broader sightseeing or pilgrimage trip."
},
{
title: "Vindhyachal",
description: "Vindhyachal is a prominent pilgrimage destination known for its religious importance and temple circuit. Families and devotional groups can include the area in a wider Uttar Pradesh yatra and travel between pilgrimage locations using coordinated bus transportation."
}
],
services: [
{
name: "Pune to Uttar Pradesh Bus Rental",
description: "Pune to Uttar Pradesh Bus Rental provides a dedicated transportation solution for groups planning a long-distance journey. Ruturaj Enterprises can arrange a suitable bus according to passenger count, AC requirements, luggage space, travel duration, sightseeing plans, and selected destinations."
},
{
name: "Pune to Uttar Pradesh Bus Hire",
description: "Groups can choose Pune to Uttar Pradesh Bus Hire for family vacations, pilgrimages, corporate journeys, educational trips, and organized tours. The bus can be planned for the complete itinerary so passengers have a shared transportation solution throughout the trip."
},
{
name: "Pune Uttar Pradesh Bus Booking",
description: "Pune Uttar Pradesh Bus Booking allows travelers to arrange their long-distance group transportation in advance. During planning, the vehicle capacity, preferred bus category, pickup location, travel dates, route, sightseeing requirements, and return schedule can be discussed."
},
{
name: "Pune UP Bus on Rent",
description: "Pune UP Bus on Rent is suitable for groups requiring a dedicated vehicle for an extended Uttar Pradesh journey. The rental arrangement can be customized around the number of passengers, number of travel days, selected destinations, and whether the trip is one-way or round-trip."
},
{
name: "Uttar Pradesh Tour Bus from Pune",
description: "An Uttar Pradesh Tour Bus from Pune offers a practical way for families and larger groups to explore several destinations during one journey. Dedicated transportation can be coordinated around a customized route covering cities, temples, heritage sites, sightseeing attractions, and planned overnight stops."
},
{
name: "Pune to Uttar Pradesh Tourist Bus",
description: "The Pune to Uttar Pradesh Tourist Bus service is useful for families, friends, institutions, and organized tour groups traveling over a long distance. A dedicated tourist bus keeps the group together and simplifies transportation between multiple destinations during the trip."
},
{
name: "Pune UP Group Travel Bus",
description: "Pune UP Group Travel Bus services are designed for larger parties that want to travel together from Pune to Uttar Pradesh. Community groups, friends, relatives, corporate teams, and tour organizers can select transportation according to their group size and itinerary."
},
{
name: "Pune UP Family Tour Bus",
description: "Families planning a Uttar Pradesh holiday or pilgrimage can choose a Pune UP Family Tour Bus based on their passenger requirement. Comfortable group transportation provides a convenient way for children, adults, and senior family members to remain together throughout the long journey."
},
{
name: "Pune to Varanasi Bus Hire",
description: "Pune to Varanasi Bus Hire provides dedicated transportation for families and pilgrimage groups heading toward Varanasi. The service can also be included in a broader route covering Sarnath, Ayodhya, Prayagraj, or other destinations according to the group's travel plan."
},
{
name: "Pune to Ayodhya Bus Hire",
description: "Travelers planning a religious journey can select Pune to Ayodhya Bus Hire for convenient group transportation. A dedicated bus allows families and devotional groups to travel together and can be planned as part of a wider Uttar Pradesh pilgrimage circuit."
},
{
name: "Pune to Lucknow Bus Hire",
description: "Pune to Lucknow Bus Hire is suitable for tourists, families, business groups, and organizations traveling toward Lucknow. The dedicated bus can support both direct travel and extended itineraries that include additional Uttar Pradesh destinations."
},
{
name: "Pune to Prayagraj Bus Hire",
description: "Pune to Prayagraj Bus Hire offers a convenient group travel option for pilgrimage parties and tourists visiting Prayagraj. The journey can be coordinated around temple visits, sightseeing requirements, additional destinations, and the preferred return schedule."
},
{
name: "Pune Uttar Pradesh AC Bus Rental",
description: "Pune Uttar Pradesh AC Bus Rental provides a comfortable option for groups covering the long road distance between Pune and Uttar Pradesh. Air-conditioned group transportation can make extended travel more convenient, particularly when the itinerary includes several days and multiple sightseeing stops."
},
{
name: "Luxury Bus for Uttar Pradesh Tour Pune",
description: "A Luxury Bus for Uttar Pradesh Tour Pune is an option for groups looking for enhanced comfort during an extended road journey. Premium travel arrangements can be suitable for families, corporate groups, wedding parties, and travelers planning a higher-comfort multi-city tour."
},
{
name: "Pune UP Outstation Bus Rental",
description: "Pune UP Outstation Bus Rental provides dedicated transportation for groups traveling outside Pune for several days. The rental plan can be structured according to the complete route, number of passengers, sightseeing schedule, travel duration, and expected return to Pune."
},
{
name: "Uttar Pradesh Pilgrimage Bus from Pune",
description: "The Uttar Pradesh Pilgrimage Bus from Pune service is suitable for devotees planning visits to destinations such as Varanasi, Ayodhya, Prayagraj, Mathura, Vrindavan, and other religious locations. Dedicated group transportation helps keep pilgrims together and simplifies travel between multiple temples and sacred places."
},
{
name: "Pune UP Round Trip Bus",
description: "Pune UP Round Trip Bus services are ideal for groups that require transportation for both the onward and return portions of their journey. A planned round-trip arrangement can make logistics easier when the group intends to return to Pune after completing its Uttar Pradesh tour."
},
{
name: "Affordable Uttar Pradesh Bus Rental Pune",
description: "Affordable Uttar Pradesh Bus Rental Pune gives groups a practical option for managing long-distance transportation costs. Sharing one dedicated bus among multiple passengers can help reduce the need for several smaller vehicles while maintaining convenient group travel."
},
{
name: "Uttar Pradesh Sightseeing Bus Pune",
description: "Uttar Pradesh Sightseeing Bus Pune is suitable for groups planning to explore several cities, temples, monuments, and cultural attractions during one trip. A dedicated bus can be used for intercity transfers and local sightseeing according to the selected itinerary."
},
{
name: "Pune to UP Group Bus Booking",
description: "Pune to UP Group Bus Booking is designed for large families, friends, religious organizations, corporate teams, and organized tour groups. Travelers can discuss passenger capacity, preferred bus type, pickup arrangements, travel dates, sightseeing plans, and return requirements before finalizing the booking."
},
{
name: "UP Tour Package by Bus from Pune",
description: "The UP Tour Package by Bus from Pune provides a convenient group transportation solution for travelers planning a multi-destination Uttar Pradesh journey. The package can be structured around the chosen cities, pilgrimage sites, sightseeing attractions, number of travel days, and preferred level of comfort."
},
{
name: "Pune Uttar Pradesh Travel Bus",
description: "Pune Uttar Pradesh Travel Bus services provide a dedicated vehicle for groups undertaking long-distance travel between Pune and Uttar Pradesh. The transportation arrangement can be planned around passenger strength, luggage requirements, route preferences, sightseeing stops, and one-way or round-trip travel needs."
}
],
tableData: [
["Pune to Uttar Pradesh Bus Rental", "Pune to Uttar Pradesh Bus Hire"],
["Pune Uttar Pradesh Bus Booking", "Pune UP Bus on Rent"],
["Uttar Pradesh Tour Bus from Pune", "Pune to Uttar Pradesh Tourist Bus"],
["Pune UP Group Travel Bus", "Pune UP Family Tour Bus"],
["Pune to Varanasi Bus Hire", "Pune to Ayodhya Bus Hire"],
["Pune to Lucknow Bus Hire", "Pune to Prayagraj Bus Hire"],
["Pune Uttar Pradesh AC Bus Rental", "Luxury Bus for Uttar Pradesh Tour Pune"],
["Pune UP Outstation Bus Rental", "Uttar Pradesh Pilgrimage Bus from Pune"],
["Pune UP Round Trip Bus", "Affordable Uttar Pradesh Bus Rental Pune"],
["Uttar Pradesh Sightseeing Bus Pune", "Pune to UP Group Bus Booking"],
["UP Tour Package by Bus from Pune", "Pune Uttar Pradesh Travel Bus"]
],
whychoose: [
{
WhyChooseheading: "Built for Long-Distance Group Journeys",
WhyChoosedescription: "Traveling from Pune to Uttar Pradesh requires substantial road travel, making the right group vehicle important for comfort and coordination. Ruturaj Enterprises helps groups select transportation according to passenger count, luggage needs, travel duration, and itinerary."
},
{
WhyChooseheading: "Suitable for Pilgrimage Groups",
WhyChoosedescription: "Uttar Pradesh includes several important spiritual destinations such as Varanasi, Ayodhya, Prayagraj, Mathura, and Vrindavan. Dedicated bus transportation allows devotees to remain together while moving between multiple religious destinations."
},
{
WhyChooseheading: "Comfortable AC Bus Options",
WhyChoosedescription: "Long road journeys can be tiring when the group has to travel for many hours between destinations. AC bus options provide a more comfortable environment for passengers to relax during extended travel and continue the itinerary with greater convenience."
},
{
WhyChooseheading: "Flexible Multi-City Routes",
WhyChoosedescription: "A Uttar Pradesh tour may cover one destination or several cities depending on the group's interests. Transportation can be planned around routes connecting Varanasi, Ayodhya, Lucknow, Prayagraj, Mathura, Agra, and other selected locations."
},
{
WhyChooseheading: "Convenient for Families",
WhyChoosedescription: "Family trips often include children, adults, and senior members who benefit from traveling in one dedicated vehicle. Shared bus transportation reduces the inconvenience of coordinating multiple cars throughout a long-distance holiday or pilgrimage."
},
{
WhyChooseheading: "Useful for Large Groups",
WhyChoosedescription: "Religious communities, friends, corporate teams, educational groups, and organized tour parties can use dedicated buses for coordinated travel. Keeping passengers together makes departure planning, sightseeing transfers, and return travel easier to manage."
},
{
WhyChooseheading: "One-Way and Round-Trip Planning",
WhyChoosedescription: "Different travelers have different schedules, so the journey can be arranged according to one-way or round-trip requirements. The transportation plan can also consider the number of days, overnight stays, sightseeing stops, and preferred return date."
},
{
WhyChooseheading: "Organized Pune Pickup Arrangements",
WhyChoosedescription: "A long journey becomes easier to manage when the starting arrangements are coordinated in advance. Ruturaj Enterprises can plan the bus requirement around the group's Pune pickup point, passenger strength, route, travel schedule, and final return requirements."
}
]
};












const faqData = [
{
question: "Why hire a bus from Pune to Uttar Pradesh?",
answer: "A dedicated bus is a practical choice for families, wedding groups, corporate teams, religious groups, and large travel parties journeying from Pune to Uttar Pradesh. Ruturaj Enterprises provides group transportation options that allow passengers to travel together with a planned route and coordinated schedule."
},
{
question: "Which cities in Uttar Pradesh can be covered from Pune by bus?",
answer: "A Pune to Uttar Pradesh bus journey can be planned for destinations such as Lucknow, Varanasi, Ayodhya, Prayagraj, Agra, Kanpur, Mathura, Vrindavan, and other cities according to the group's requirements. The route can be organized around the preferred destinations and overall itinerary."
},
{
question: "Can I rent a bus from Pune to Uttar Pradesh for a round trip?",
answer: "Round-trip bus rental can be arranged for groups traveling from Pune to Uttar Pradesh and returning to Pune after completing their journey. The transportation schedule can be coordinated with sightseeing, family functions, religious visits, overnight stays, and the preferred return date."
},
{
question: "Is a Pune to Uttar Pradesh rental bus suitable for family travel?",
answer: "Families traveling with relatives and children can benefit from having one dedicated vehicle for a long-distance journey. Everyone can remain together while carrying luggage and following a common travel schedule, which can be more convenient than coordinating several private vehicles."
},
{
question: "Can we hire a bus from Pune to Uttar Pradesh for a wedding?",
answer: "Wedding groups can arrange dedicated bus transportation for guests traveling from Pune to Uttar Pradesh for marriage functions and related ceremonies. A rental bus helps keep guests together and makes transportation between the starting point, destination, hotels, venues, and return journey easier to coordinate."
},
{
question: "Can a religious group book a bus from Pune to Uttar Pradesh?",
answer: "Religious groups can hire a bus for pilgrimage and spiritual tours covering destinations such as Varanasi, Ayodhya, Prayagraj, Mathura, and Vrindavan. A dedicated vehicle allows devotees to follow a coordinated itinerary and travel together between multiple religious destinations."
},
{
question: "What bus capacity is suitable for a Pune to Uttar Pradesh trip?",
answer: "The ideal bus size depends on the number of passengers, luggage, journey duration, and itinerary. Ruturaj Enterprises can help groups select an appropriate seating capacity for small family parties as well as larger wedding groups, corporate teams, religious organizations, and social groups."
},
{
question: "Can the Pune to Uttar Pradesh bus be used for multiple-city travel?",
answer: "A dedicated rental bus is useful for multi-city Uttar Pradesh tours because the same group can travel between different destinations without arranging separate vehicles at each location. The itinerary can include sightseeing, religious places, family functions, and overnight halts according to the group's plans."
},
{
question: "How early should I book a bus from Pune to Uttar Pradesh?",
answer: "Advance booking is recommended for this long-distance route, particularly during holidays, wedding seasons, festivals, and pilgrimage periods. Sharing the travel date, passenger count, destination cities, and expected duration early helps Ruturaj Enterprises plan a suitable bus for the complete journey."
},
{
question: "Why choose Ruturaj Enterprises for Pune to Uttar Pradesh bus rental?",
answer: "Ruturaj Enterprises offers dedicated group transportation solutions for long-distance journeys from Pune to Uttar Pradesh. The vehicle can be selected according to passenger strength, luggage requirements, route, trip duration, and itinerary, making the travel arrangement suitable for families, groups, companies, and religious travelers."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Vinod Shinde",
feedback:
"Our family group traveled from Pune to Uttar Pradesh for a religious trip covering multiple destinations. We preferred one dedicated bus so everyone could stay together throughout the journey. Ruturaj Enterprises helped us arrange suitable group transportation, making the long road trip easier to coordinate.",
rating: 5
},
{
id: 2,
name: "Miss. Aarti Tiwari",
feedback:
"We needed a bus for a large family group traveling from Pune to Uttar Pradesh for a wedding function. Having one vehicle for the group made the travel arrangements much simpler, especially with luggage and different family members. Ruturaj Enterprises provided a convenient option for our journey.",
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
  "name": "Pune to Uttar Pradesh bus on rent",
  "image": "https://ruturajenterprises.com/assets/images/pune-to-uttar-pradesh-bus-on-rent.webp",
  "description":
    "Pune to Uttar Pradesh bus on rent for family tours, group journeys, religious trips, corporate travel, and long-distance sightseeing. Ruturaj Enterprises provides comfortable bus rental options from Pune to Varanasi, Ayodhya, Lucknow, Prayagraj, and other Uttar Pradesh destinations with suitable seating capacities, experienced drivers, flexible travel plans, and dependable service for one-way, round-trip, and multi-day tours.",
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
    "url": "https://ruturajenterprises.com/pune-to-uttar-pradesh-bus-on-rent"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Pune to Uttar Pradesh bus on rent | Pune Uttar Pradesh Bus Service | +91 9763381382
  </title>

  <meta
    name="description"
    content="Pune to Uttar Pradesh bus on rent for family tours, group travel, religious yatras, corporate journeys and sightseeing. Hire comfortable buses from Pune to Varanasi, Ayodhya, Lucknow, Prayagraj and other UP destinations with flexible rental options."
  />

  <meta
    name="keywords"
    content="Pune to Uttar Pradesh Bus Rental, Pune to Uttar Pradesh Bus Hire, Pune Uttar Pradesh Bus Booking, Pune UP Bus on Rent, Uttar Pradesh Tour Bus from Pune, Pune to Uttar Pradesh Tourist Bus, Pune UP Group Travel Bus, Pune UP Family Tour Bus, Pune to Varanasi Bus Hire, Pune to Ayodhya Bus Hire, Pune to Lucknow Bus Hire, Pune to Prayagraj Bus Hire, Pune to Prayagraj Bus Rental, Pune to Prayagraj Tourist Bus, Pune to Uttar Pradesh Group Tour Bus, Pune to Uttar Pradesh Family Tour Bus, Pune to Uttar Pradesh AC Bus Rental, Pune to Uttar Pradesh Luxury Bus Rental, Pune to Uttar Pradesh Bus Booking Service, Pune UP Outstation Bus Rental, Pune UP Outstation Bus Hire, Pune Uttar Pradesh Tour Package by Bus, Uttar Pradesh Religious Tour Bus from Pune, Pune to Varanasi Tour Bus, Pune to Ayodhya Tour Bus, Pune to Lucknow Tour Bus, Pune to Prayagraj Tour Bus, Pune to Mathura Bus Hire, Pune to Vrindavan Bus Hire, Pune to Agra Bus Hire, Pune to Kanpur Bus Hire, Pune to Gorakhpur Bus Hire, Pune to Uttar Pradesh Bus for Family Trip, Pune to Uttar Pradesh Bus for Group Travel, Pune to Uttar Pradesh Bus for Religious Tour, Pune to Uttar Pradesh Bus for Senior Citizens, Pune to Uttar Pradesh Bus for Corporate Tour, Pune to Uttar Pradesh Tourist Bus Rental, Affordable Pune to Uttar Pradesh Bus Rental, AC Bus on Rent Pune to Uttar Pradesh, Luxury Bus on Rent Pune to Uttar Pradesh, 20 Seater Bus Pune to Uttar Pradesh, 32 Seater Bus Pune to Uttar Pradesh, 35 Seater Bus Pune to Uttar Pradesh, 45 Seater Bus Pune to Uttar Pradesh, 50 Seater Bus Pune to Uttar Pradesh, Ruturaj Enterprises Pune Uttar Pradesh Bus Service"
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
                            <img src='/images/keyword/29.jpg' alt='img' className='img-fluid' />
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

export default Punetouttarpradeshbus;