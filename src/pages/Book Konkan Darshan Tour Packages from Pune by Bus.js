import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Bookkonkandarsha() {


const cardData = {
keyword: "Book Konkan Darshan Tour Packages from Pune by Bus",
headingDescription: "Ruturaj Enterprises offers comfortable and convenient Konkan Darshan Tour Packages from Pune by Bus for families, friends, corporate groups, and large travel parties. A dedicated bus can be arranged for exploring the scenic Konkan region, including Ratnagiri, Ganpatipule, Sindhudurg, beaches, forts, temples, and coastal attractions. With suitable AC and luxury bus options, flexible one-way or round-trip planning, and practical sightseeing arrangements, groups can enjoy a well-coordinated Konkan road trip from Pune.",
topPlaces: [
{
title: "Ganpatipule",
description: "Ganpatipule is a popular Konkan destination known for its scenic coastline and the revered Ganpatipule Temple. A dedicated bus from Pune makes it convenient for families and pilgrimage groups to combine the temple visit with nearby beaches and coastal sightseeing."
},
{
title: "Ratnagiri",
description: "Ratnagiri offers a combination of beautiful beaches, historic landmarks, coastal scenery, and local Konkan culture. Groups traveling from Pune can use a dedicated bus to explore Ratnagiri and connect it with other destinations during a longer Konkan itinerary."
},
{
title: "Sindhudurg Fort",
description: "Sindhudurg Fort is a prominent historic attraction situated along the Konkan coast near Malvan. A group bus provides practical transportation for travelers who want to include the fort, surrounding coastal areas, and other Malvan attractions in their holiday plan."
},
{
title: "Malvan",
description: "Malvan is known for its beaches, seafood, coastal culture, and access to several popular attractions around Sindhudurg. Families and groups can include Malvan in a multi-day Konkan tour while traveling comfortably together from Pune."
},
{
title: "Tarkarli",
description: "Tarkarli is a scenic coastal destination known for its beaches, clear waters, and relaxed holiday atmosphere. A dedicated tourist bus is useful for families and larger groups planning beach-focused sightseeing along the southern Konkan coast."
},
{
title: "Dapoli",
description: "Dapoli is a popular coastal getaway featuring beaches, temples, scenic viewpoints, and peaceful surroundings. Its location makes it a convenient addition to a Konkan road-trip itinerary for groups traveling from Pune by dedicated bus."
},
{
title: "Harihareshwar",
description: "Harihareshwar combines a peaceful coastal setting with an important temple destination, making it suitable for both leisure and pilgrimage travel. Families and devotional groups can include the location in a broader Konkan itinerary with coordinated bus transportation."
},
{
title: "Alibaug",
description: "Alibaug is a well-known coastal destination near Mumbai, offering beaches, forts, and relaxed weekend-trip experiences. It can be included as an early or additional stop on a Konkan tour from Pune, especially for groups looking for a flexible coastal itinerary."
},
{
title: "Guhagar",
description: "Guhagar is appreciated for its peaceful beach environment, traditional coastal surroundings, and relatively relaxed holiday atmosphere. A dedicated bus allows groups to reach the destination together and combine it with Ratnagiri or other Konkan locations."
},
{
title: "Vijaydurg Fort",
description: "Vijaydurg Fort is a historic coastal fortification and an interesting stop for travelers exploring the heritage side of Konkan. Including it in a group itinerary gives visitors a chance to combine historical sightseeing with the beaches and coastal attractions of the surrounding region."
}
],
services: [
{
name: "Konkan Darshan Bus Package Pune",
description: "The Konkan Darshan Bus Package Pune is designed for families, friends, and organized groups planning a scenic coastal journey from Pune. Ruturaj Enterprises can arrange suitable transportation around the selected destinations, number of travel days, sightseeing requirements, and passenger capacity."
},
{
name: "Konkan Tour Package from Pune by Bus",
description: "A Konkan Tour Package from Pune by Bus provides a convenient shared transportation option for exploring multiple coastal destinations. The itinerary can be planned around beaches, temples, forts, local attractions, overnight stays, and the group's preferred travel schedule."
},
{
name: "Konkan Darshan Bus Booking Pune",
description: "Konkan Darshan Bus Booking Pune allows groups to arrange dedicated transportation before starting their coastal holiday. Vehicle capacity, AC requirements, pickup points, travel dates, sightseeing route, and return arrangements can be discussed according to the group's requirements."
},
{
name: "Konkan Darshan Bus Hire Pune",
description: "Groups can choose Konkan Darshan Bus Hire Pune when they need a dedicated vehicle for a family trip, beach tour, pilgrimage, or sightseeing journey. The bus can be planned for the complete route so travelers do not have to coordinate several vehicles between Konkan destinations."
},
{
name: "Konkan Tour Bus Rental Pune",
description: "Konkan Tour Bus Rental Pune provides flexible group transportation for travelers planning short or extended coastal holidays. The rental arrangement can be structured according to passenger count, selected destinations, number of days, luggage requirements, and preferred level of travel comfort."
},
{
name: "Pune Konkan Darshan Package",
description: "The Pune Konkan Darshan Package is suitable for groups looking to explore the beaches, temples, forts, and cultural attractions of the Konkan region. Ruturaj Enterprises can coordinate the transportation plan around the group's preferred route and sightseeing schedule."
},
{
name: "Konkan Group Tour Bus Pune",
description: "Konkan Group Tour Bus Pune services are ideal for friends, relatives, community groups, and organized travel parties. A dedicated bus keeps the group together during long coastal journeys and simplifies transportation between multiple sightseeing locations."
},
{
name: "Konkan Family Tour Bus Pune",
description: "Families planning a Konkan holiday can select a Konkan Family Tour Bus Pune according to their group size and itinerary. Comfortable shared transportation makes it easier for children, adults, and senior family members to travel together while visiting several coastal destinations."
},
{
name: "Konkan AC Bus Tour Pune",
description: "The Konkan AC Bus Tour Pune option offers a comfortable travel environment for groups covering multiple coastal destinations. AC transportation can be particularly useful during extended road journeys when the itinerary includes several sightseeing stops and long travel hours."
},
{
name: "Luxury Bus for Konkan Tour Pune",
description: "Travelers seeking enhanced comfort can choose a Luxury Bus for Konkan Tour Pune for their coastal journey. Spacious interiors and premium travel arrangements can make extended road travel more convenient for families, corporate groups, and special tour parties."
},
{
name: "Pune Konkan Sightseeing Bus",
description: "A Pune Konkan Sightseeing Bus is useful for groups planning to explore several attractions without arranging separate transportation for each destination. The bus can support a customized route covering beaches, temples, forts, viewpoints, and other preferred sightseeing locations."
},
{
name: "Konkan Beach Tour Bus from Pune",
description: "The Konkan Beach Tour Bus from Pune is suitable for families and groups planning a coastal holiday around destinations such as Ganpatipule, Tarkarli, Dapoli, Guhagar, and other beaches. Dedicated transportation allows the group to travel together between multiple coastal stops."
},
{
name: "Pune to Ratnagiri Bus Tour",
description: "The Pune to Ratnagiri Bus Tour provides dedicated group transportation for travelers exploring Ratnagiri and nearby Konkan attractions. The itinerary can include beaches, temples, forts, local sightseeing, and onward travel to other destinations based on the group's plan."
},
{
name: "Pune to Ganpatipule Bus Tour",
description: "Pune to Ganpatipule Bus Tour services are suitable for families, devotees, and tourist groups visiting the temple and coastal attractions. A dedicated bus provides convenient transportation from Pune and can also be incorporated into a longer Ratnagiri or Konkan circuit."
},
{
name: "Pune to Sindhudurg Bus Tour",
description: "The Pune to Sindhudurg Bus Tour is designed for groups traveling toward the southern Konkan region and its historic coastal attractions. The journey can be extended to include Malvan, Tarkarli, Vijaydurg, and other preferred destinations."
},
{
name: "Pune Konkan Round Trip Bus",
description: "Pune Konkan Round Trip Bus services are convenient for groups that need transportation for both the onward and return journey. A planned round trip can simplify logistics for families and tour parties returning to Pune after completing their Konkan sightseeing itinerary."
},
{
name: "Affordable Konkan Tour Bus Pune",
description: "Affordable Konkan Tour Bus Pune provides a practical way for groups to manage transportation costs while traveling together. Selecting a bus according to the actual passenger count can help maintain a useful balance between comfort, capacity, and overall holiday expenses."
},
{
name: "Konkan Holiday Bus Package Pune",
description: "The Konkan Holiday Bus Package Pune is suitable for families and groups planning a leisure trip along the Maharashtra coast. The package can be structured around beaches, heritage sites, temples, sightseeing stops, overnight stays, and the preferred duration of the holiday."
},
{
name: "Konkan Tourist Bus Rental Pune",
description: "Konkan Tourist Bus Rental Pune offers dedicated group transportation for sightseeing and holiday trips across the coastal region. Ruturaj Enterprises can arrange a suitable bus according to the number of passengers, route length, travel days, luggage requirements, and itinerary."
},
{
name: "Pune Konkan Group Transportation",
description: "Pune Konkan Group Transportation is designed for larger families, friends, corporate groups, community organizations, and organized tour parties. One dedicated vehicle can simplify passenger coordination and provide shared transportation throughout the complete Konkan journey."
},
{
name: "Konkan Darshan Bus Package Price Pune",
description: "The Konkan Darshan Bus Package Price Pune can vary according to bus category, passenger capacity, travel duration, route distance, sightseeing requirements, and the number of destinations included. Ruturaj Enterprises can help groups select a transportation package according to their itinerary and budget."
},
{
name: "Konkan Yatra Bus Booking Pune",
description: "Konkan Yatra Bus Booking Pune is suitable for devotees and families planning a spiritual and coastal journey across the Konkan region. Dedicated group transportation can be arranged around temple visits, sightseeing stops, travel duration, and the preferred return schedule."
}
],
tableData: [
["Konkan Darshan Bus Package Pune", "Konkan Tour Package from Pune by Bus"],
["Konkan Darshan Bus Booking Pune", "Konkan Darshan Bus Hire Pune"],
["Konkan Tour Bus Rental Pune", "Pune Konkan Darshan Package"],
["Konkan Group Tour Bus Pune", "Konkan Family Tour Bus Pune"],
["Konkan AC Bus Tour Pune", "Luxury Bus for Konkan Tour Pune"],
["Pune Konkan Sightseeing Bus", "Konkan Beach Tour Bus from Pune"],
["Pune to Ratnagiri Bus Tour", "Pune to Ganpatipule Bus Tour"],
["Pune to Sindhudurg Bus Tour", "Pune Konkan Round Trip Bus"],
["Affordable Konkan Tour Bus Pune", "Konkan Holiday Bus Package Pune"],
["Konkan Tourist Bus Rental Pune", "Pune Konkan Group Transportation"],
["Konkan Darshan Bus Package Price Pune", "Konkan Yatra Bus Booking Pune"]
],
whychoose: [
{
WhyChooseheading: "Comfortable Coastal Group Travel",
WhyChoosedescription: "Konkan journeys often involve multiple road transfers between beaches, temples, forts, and coastal towns. Ruturaj Enterprises provides dedicated group transportation options that help travelers move between these destinations together with greater convenience."
},
{
WhyChooseheading: "Ideal for Family Holidays",
WhyChoosedescription: "A dedicated bus is a convenient choice for families traveling with children, senior members, and relatives in larger numbers. Everyone can remain together throughout the trip instead of coordinating several cars along the coastal route."
},
{
WhyChooseheading: "AC Options for Longer Routes",
WhyChoosedescription: "Multi-day Konkan tours can involve considerable travel between northern and southern coastal destinations. AC bus options provide a more comfortable environment during extended road journeys and between sightseeing stops."
},
{
WhyChooseheading: "Flexible Konkan Itineraries",
WhyChoosedescription: "Travelers can create an itinerary around destinations such as Ratnagiri, Ganpatipule, Malvan, Tarkarli, Dapoli, Guhagar, or other preferred locations. The transportation plan can be adjusted according to the number of days and sightseeing priorities."
},
{
WhyChooseheading: "Suitable for Beach and Temple Tours",
WhyChoosedescription: "Konkan offers a combination of coastal attractions and important religious destinations, making it suitable for both leisure and pilgrimage trips. A dedicated bus allows groups to combine beaches, temples, forts, and local attractions within one journey."
},
{
WhyChooseheading: "Convenient for Large Groups",
WhyChoosedescription: "Friends, relatives, corporate teams, community groups, and organized tour parties can benefit from shared group transportation. One bus makes passenger coordination easier during departures, sightseeing transfers, meal stops, and the return journey."
},
{
WhyChooseheading: "One-Way and Round-Trip Options",
WhyChoosedescription: "Different travelers have different route requirements, so transportation can be arranged according to one-way or round-trip plans. The schedule can also accommodate extended holidays with multiple overnight stops and sightseeing destinations."
},
{
WhyChooseheading: "Planned Pune Pickup and Return",
WhyChoosedescription: "Starting a Konkan tour with organized transportation helps the group manage the journey more smoothly from the beginning. Ruturaj Enterprises can coordinate the bus requirement around the Pune pickup location, passenger count, selected route, travel duration, and expected return."
}
]
};











const faqData = [
{
question: "What is a Konkan Darshan tour package from Pune by bus?",
answer: "A Konkan Darshan tour package from Pune by bus is a group travel arrangement designed to explore the scenic coastal destinations of Maharashtra. Ruturaj Enterprises can arrange a suitable bus for families, friends, corporate groups, and other travelers based on their preferred itinerary, passenger count, and tour duration."
},
{
question: "Which places can be covered in a Konkan Darshan tour from Pune?",
answer: "A Konkan tour can include destinations such as Ratnagiri, Ganpatipule, Harihareshwar, Dapoli, Alibaug, Murud, Tarkarli, Malvan, Sindhudurg, and other coastal attractions. The actual route can be customized according to the group's sightseeing preferences and available travel days."
},
{
question: "Is traveling by bus convenient for a Konkan Darshan tour?",
answer: "A dedicated bus allows the entire group to travel together while carrying luggage comfortably and following one coordinated schedule. It is particularly useful for multi-destination Konkan tours where passengers need transportation between beaches, temples, forts, towns, and other sightseeing locations."
},
{
question: "Can families book a Konkan Darshan bus package from Pune?",
answer: "Families can arrange a private bus for a Konkan vacation, family gathering, temple visit, or extended holiday. Traveling together reduces the need to coordinate multiple cars and allows relatives of different age groups to remain together throughout the Pune to Konkan journey."
},
{
question: "Can a corporate group book a Konkan Darshan tour by bus?",
answer: "Corporate teams can use a dedicated bus for employee outings, team trips, annual tours, and recreational travel to Konkan. Group transportation helps maintain a common schedule and makes it easier to coordinate sightseeing, meal breaks, hotel transfers, and return travel."
},
{
question: "Can the Konkan Darshan itinerary be customized?",
answer: "The tour route can be planned according to the group's preferred destinations, number of days, sightseeing interests, pickup point, and return schedule. Ruturaj Enterprises can organize the bus transportation around a customized itinerary rather than limiting the group to a fixed sightseeing route."
},
{
question: "How many passengers can travel in a Konkan Darshan tour bus?",
answer: "The suitable bus capacity depends on the size of the travel group and luggage requirements. Ruturaj Enterprises can help select an appropriate vehicle for small family groups as well as larger parties, corporate teams, social organizations, and other groups traveling from Pune."
},
{
question: "Can we include temple visits during a Konkan Darshan bus tour?",
answer: "Temple visits can be included in the itinerary along with beaches, forts, coastal towns, and other attractions. Destinations such as Ganpatipule and Harihareshwar can be incorporated depending on the group's preferred route and the number of days available for the Konkan Darshan tour."
},
{
question: "Is a round-trip bus available for Konkan Darshan from Pune?",
answer: "A round-trip arrangement can be planned for groups that want to start in Pune, explore multiple Konkan destinations, and return to Pune after completing the tour. The bus schedule can be coordinated with sightseeing stops, overnight stays, meal breaks, and the group's preferred return date."
},
{
question: "Why choose Ruturaj Enterprises for Konkan Darshan tour packages from Pune?",
answer: "Ruturaj Enterprises offers dedicated group transportation for travelers planning Konkan tours from Pune. Vehicle selection can be matched with passenger capacity, itinerary, travel duration, and luggage requirements, helping families, friends, corporate teams, and larger groups enjoy a more organized coastal road trip."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Sandeep More",
feedback:
"Our family planned a Konkan Darshan trip from Pune covering several coastal destinations and temple visits. We selected Ruturaj Enterprises for the bus arrangement so everyone could travel together. The dedicated vehicle made moving between different locations much easier and kept our entire group on the same schedule.",
rating: 5
},
{
id: 2,
name: "Miss. Megha Sawant",
feedback:
"We organized a Konkan tour with our friends and wanted one bus for the complete journey from Pune. Ruturaj Enterprises provided a convenient group travel arrangement for our itinerary. Exploring the beaches, temples, and scenic locations together made the road trip enjoyable and well organized.",
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
  "name": "Book Konkan Darshan Tour Packages from Pune by Bus",
  "image": "https://ruturajenterprises.com/assets/images/book-konkan-darshan-tour-packages-from-pune-by-bus.webp",
  "description":
    "Book Konkan Darshan Tour Packages from Pune by Bus for family holidays, group tours, temple visits, beach trips, and multi-day sightseeing journeys across the beautiful Konkan region. Ruturaj Enterprises provides comfortable bus rental options from Pune with suitable seating capacities, experienced drivers, flexible tour plans, and convenient transportation for destinations such as Ratnagiri, Ganpatipule, Sindhudurg, Tarkarli, Malvan, and other popular Konkan locations.",
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
    "url": "https://ruturajenterprises.com/book-konkan-darshan-tour-packages-from-pune-by-bus"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Book Konkan Darshan Tour Packages from Pune by Bus | Konkan Tour Bus | +91 9763381382
  </title>

  <meta
    name="description"
    content="Book Konkan Darshan Tour Packages from Pune by Bus for family trips, group tours, beach holidays, temple visits and sightseeing. Enjoy comfortable bus travel to Ratnagiri, Ganpatipule, Malvan, Tarkarli, Sindhudurg and other Konkan destinations."
  />

  <meta
    name="keywords"
    content="Konkan Darshan Bus Package Pune, Konkan Tour Package from Pune by Bus, Konkan Darshan Bus Booking Pune, Konkan Darshan Bus Hire Pune, Konkan Tour Bus Rental Pune, Pune Konkan Darshan Package, Konkan Group Tour Bus, Konkan Darshan Tour Packages from Pune, Konkan Tour Package Pune, Pune to Konkan Tour Bus, Pune to Konkan Bus Rental, Pune to Konkan Bus Hire, Pune Konkan Bus Booking, Konkan Darshan Tourist Bus Pune, Konkan Sightseeing Bus Package Pune, Konkan Family Tour Bus from Pune, Konkan Group Tour Package Pune, Konkan Family Tour Package Pune, Konkan Beach Tour Bus from Pune, Konkan Temple Tour Bus Pune, Konkan Holiday Bus Package Pune, Konkan Outstation Bus Rental Pune, AC Bus for Konkan Tour Pune, Luxury Bus for Konkan Tour Pune, 20 Seater Bus for Konkan Tour Pune, 32 Seater Bus for Konkan Tour Pune, 35 Seater Bus for Konkan Tour Pune, 45 Seater Bus for Konkan Tour Pune, 50 Seater Bus for Konkan Tour Pune, Pune to Ratnagiri Bus Tour, Pune to Ganpatipule Bus Tour, Pune to Malvan Bus Tour, Pune to Tarkarli Bus Tour, Pune to Sindhudurg Bus Tour, Pune to Konkan Family Trip Bus, Pune to Konkan Group Travel Bus, Pune to Konkan Tourist Bus Rental, Konkan Darshan One Day Tour from Pune, Konkan Darshan Multi Day Tour from Pune, Affordable Konkan Tour Bus Pune, Ruturaj Enterprises Konkan Tour Bus Service"
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
                            <img src='/images/keyword/30.jpg' alt='img' className='img-fluid' />
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

export default Bookkonkandarsha;