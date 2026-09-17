import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punedarshanpackage() {


const cardData = {
keyword: "Pune Darshan Package",
headingDescription: "Ruturaj Enterprises offers Pune Darshan Package services for tourists, families, couples, senior citizens, corporate guests, students, and groups who want to explore the cultural, historical, religious, and scenic attractions of Pune in a comfortable private vehicle. A customized Pune Darshan journey can cover heritage landmarks, famous temples, museums, forts, gardens, viewpoints, and other city attractions according to the available time. Travelers can choose AC, luxury, affordable, family, group, one-day, sightseeing, and customized cab options with convenient pickup and drop arrangements across Pune.",


topPlaces: [
    {
        title: "Shaniwar Wada",
        description: "Shaniwar Wada is one of Pune's most recognized historical landmarks and an important attraction for visitors interested in Maratha-era heritage. A private sightseeing cab makes it convenient to include this iconic location along with other historical attractions during a Pune city tour."
    },
    {
        title: "Aga Khan Palace",
        description: "Aga Khan Palace is a significant heritage site with beautiful architecture, landscaped surroundings, and an important place in India's freedom movement history. Visitors can comfortably include it in a Pune Darshan itinerary along with nearby cultural and historical attractions."
    },
    {
        title: "Dagdusheth Halwai Ganpati Temple",
        description: "Dagdusheth Halwai Ganpati Temple is a famous religious attraction in central Pune and is visited by devotees and tourists throughout the year. A private cab allows families and groups to conveniently include temple darshan within a broader city sightseeing plan."
    },
    {
        title: "Sinhagad Fort",
        description: "Sinhagad Fort offers a combination of history, mountain scenery, and a popular excursion experience near Pune. Travelers can include the fort in a customized Darshan or sightseeing itinerary when they want to explore attractions beyond the central city."
    },
    {
        title: "Pataleshwar Cave Temple",
        description: "Pataleshwar Cave Temple is an ancient rock-cut temple located in the heart of Pune and provides an interesting combination of spirituality and heritage. It can be included as a convenient stop during a city-focused Pune Darshan tour."
    },
    {
        title: "Raja Dinkar Kelkar Museum",
        description: "Raja Dinkar Kelkar Museum houses a wide collection of traditional Indian art, artifacts, decorative objects, and cultural exhibits. A private sightseeing cab provides an easy way for tourists and families to include the museum in their Pune city itinerary."
    },
    {
        title: "Parvati Hill",
        description: "Parvati Hill is a well-known Pune attraction offering city views along with historic temples and a peaceful hilltop setting. Visitors can add the location to their sightseeing schedule while exploring the city's religious and scenic attractions."
    },
    {
        title: "Saras Baug",
        description: "Saras Baug is a popular urban garden and leisure attraction in Pune, known for its greenery and temple area. Families and tourists can include it as a relaxing stop between visits to Pune's historical and religious landmarks."
    },
    {
        title: "Rajiv Gandhi Zoological Park",
        description: "Rajiv Gandhi Zoological Park is a popular destination for families and children and offers an enjoyable addition to a Pune sightseeing itinerary. A private cab makes the journey convenient for families who want to combine the zoo with other city attractions."
    },
    {
        title: "Lal Mahal",
        description: "Lal Mahal is an important historical site associated with Chhatrapati Shivaji Maharaj and the heritage of Pune. Its central location makes it convenient to combine with other nearby historical and religious attractions during a city Darshan tour."
    }
],

services: [
    {
        name: "Pune Darshan Cab Package",
        description: "Pune Darshan Cab Package provides private transportation for visitors who want to explore major attractions across the city in a planned itinerary. The package can be customized according to sightseeing preferences, available time, pickup location, and number of passengers."
    },
    {
        name: "Pune Darshan Taxi Package",
        description: "Pune Darshan Taxi Package offers convenient private transportation for tourists, families, and groups exploring Pune. Passengers can cover multiple attractions during the day without depending on fixed public transport routes or schedules."
    },
    {
        name: "Pune Darshan Tour Package",
        description: "Pune Darshan Tour Package is suitable for travelers looking to experience the city's historical, cultural, religious, and scenic attractions. The itinerary can be planned around famous landmarks, temples, museums, forts, gardens, and other points of interest."
    },
    {
        name: "Pune City Darshan Cab",
        description: "Pune City Darshan Cab provides private transportation for exploring important attractions within Pune. It is useful for visitors, families, corporate guests, and local residents who want a convenient vehicle for a customized city tour."
    },
    {
        name: "Pune Sightseeing Cab Package",
        description: "Pune Sightseeing Cab Package allows travelers to visit multiple attractions using one dedicated private vehicle. The service is suitable for one-day sightseeing, family outings, tourist visits, and customized city exploration."
    },
    {
        name: "Pune Darshan Car Rental",
        description: "Pune Darshan Car Rental provides a private car for travelers who want flexibility during their city sightseeing schedule. Customers can plan attraction visits, breaks, pickup points, and drop locations according to their preferred itinerary."
    },
    {
        name: "Pune Darshan Taxi Booking",
        description: "Pune Darshan Taxi Booking makes it convenient to arrange a taxi before a planned Pune sightseeing tour. Travelers can coordinate their pickup location, travel duration, passenger requirements, sightseeing preferences, and return arrangements."
    },
    {
        name: "Pune Darshan Cab Booking",
        description: "Pune Darshan Cab Booking provides an advance reservation option for tourists, families, and groups planning to explore Pune. A dedicated cab helps simplify transportation between historical landmarks, temples, museums, gardens, and other attractions."
    },
    {
        name: "Pune Darshan AC Cab",
        description: "Pune Darshan AC Cab offers an air-conditioned private travel option for comfortable city sightseeing. It is particularly useful for families, senior citizens, tourists, and groups spending several hours visiting multiple attractions."
    },
    {
        name: "Pune Darshan Luxury Car",
        description: "Pune Darshan Luxury Car provides a premium transportation choice for corporate guests, special visitors, families, and travelers who prefer an enhanced sightseeing experience. The vehicle can be arranged for city tours, special occasions, and customized itineraries."
    },
    {
        name: "Pune Darshan One Day Tour",
        description: "Pune Darshan One Day Tour is designed for travelers who want to explore several important attractions within a single day. The itinerary can combine historical places, temples, museums, gardens, and other landmarks according to the available time."
    },
    {
        name: "Pune Darshan Family Tour",
        description: "Pune Darshan Family Tour provides private transportation for parents, children, relatives, and senior family members exploring the city together. A dedicated cab makes it easier to manage stops, breaks, luggage, and sightseeing preferences."
    },
    {
        name: "Pune Darshan Group Tour",
        description: "Pune Darshan Group Tour is suitable for friends, relatives, students, colleagues, and small travel groups visiting Pune attractions together. Private transportation helps keep the group coordinated while covering multiple destinations in one itinerary."
    },
    {
        name: "Pune Darshan Tourist Cab",
        description: "Pune Darshan Tourist Cab provides private transportation for visitors exploring Pune's heritage, religious, cultural, and leisure attractions. Tourists can customize their sightseeing sequence and spend suitable time at each selected destination."
    },
    {
        name: "Pune Local Sightseeing Taxi",
        description: "Pune Local Sightseeing Taxi provides convenient transportation for exploring attractions within the city and nearby areas. It can be used for short sightseeing plans, full-day tours, family outings, and customized local travel."
    },
    {
        name: "Pune Historical Places Cab Tour",
        description: "Pune Historical Places Cab Tour is ideal for visitors interested in the city's forts, palaces, museums, monuments, and Maratha-era heritage. A private cab provides flexible transportation between selected historical locations throughout the tour."
    },
    {
        name: "Pune Temple Darshan Cab",
        description: "Pune Temple Darshan Cab provides private transportation for devotees visiting famous temples across Pune. Families and senior citizens can plan a comfortable temple route with multiple stops according to their religious itinerary."
    },
    {
        name: "Pune City Tour Taxi",
        description: "Pune City Tour Taxi offers a convenient private vehicle for travelers wanting to explore different parts of Pune in one planned journey. The service can cover historical, religious, cultural, recreational, and scenic attractions."
    },
    {
        name: "Affordable Pune Darshan Package",
        description: "Affordable Pune Darshan Package provides a practical sightseeing option for travelers who want to explore Pune while managing their overall travel budget. The itinerary can be adjusted according to the available time, selected attractions, and passenger requirements."
    },
    {
        name: "Pune Darshan Car Hire",
        description: "Pune Darshan Car Hire provides a dedicated vehicle for tourists, families, groups, and corporate visitors exploring Pune. Private transportation offers greater control over pickup locations, sightseeing stops, travel timing, and final drop-off."
    },
    {
        name: "Pune Darshan Outstation Package",
        description: "Pune Darshan Outstation Package is suitable for travelers who want to combine Pune sightseeing with destinations outside the city. The travel plan can be extended to nearby attractions and intercity locations according to the group's itinerary and available time."
    },
    {
        name: "Pune Darshan Travel Service",
        description: "Pune Darshan Travel Service provides flexible transportation support for customized city tours, temple visits, historical sightseeing, family outings, and tourist itineraries. Travelers can choose a suitable private cab arrangement based on passenger count, schedule, and sightseeing requirements."
    }
],

tableData: [
    ["Pune Darshan Cab Package", "Private cab package for exploring major Pune attractions."],
    ["Pune Darshan Taxi Package", "Taxi package for convenient multi-location Pune sightseeing."],
    ["Pune Darshan Tour Package", "Customized tour package covering historical, religious, and cultural attractions."],
    ["Pune City Darshan Cab", "Private cab for exploring important attractions throughout Pune."],
    ["Pune Sightseeing Cab Package", "Dedicated sightseeing cab for families, tourists, and groups."],
    ["Pune Darshan Car Rental", "Private car rental for flexible city sightseeing itineraries."],
    ["Pune Darshan Taxi Booking", "Advance taxi booking for planned Pune Darshan tours."],
    ["Pune Darshan Cab Booking", "Cab booking service for customized Pune sightseeing."],
    ["Pune Darshan AC Cab", "Air-conditioned cab for comfortable full-day city exploration."],
    ["Pune Darshan Luxury Car", "Premium car option for special visitors and luxury sightseeing."],
    ["Pune Darshan One Day Tour", "One-day sightseeing itinerary covering selected Pune attractions."],
    ["Pune Darshan Family Tour", "Family-friendly private tour for parents, children, and relatives."],
    ["Pune Darshan Group Tour", "Group transportation for friends, colleagues, students, and relatives."],
    ["Pune Darshan Tourist Cab", "Private tourist cab for exploring Pune's major attractions."],
    ["Pune Local Sightseeing Taxi", "Taxi service for local Pune sightseeing and city transfers."],
    ["Pune Historical Places Cab Tour", "Cab tour focused on Pune's historical landmarks and heritage sites."],
    ["Pune Temple Darshan Cab", "Private cab for visiting important temples across Pune."],
    ["Pune City Tour Taxi", "Taxi service for customized Pune city tours."],
    ["Affordable Pune Darshan Package", "Budget-conscious private sightseeing package for Pune attractions."],
    ["Pune Darshan Car Hire", "Dedicated car hire for flexible Pune sightseeing and travel."],
    ["Pune Darshan Outstation Package", "Extended package combining Pune Darshan with nearby destinations."],
    ["Pune Darshan Travel Service", "Flexible travel service for city tours, temples, heritage, and sightseeing."]
],

whychoose: [
    {
        WhyChooseheading: "Explore Pune in One Planned Journey",
        WhyChoosedescription: "A dedicated Pune Darshan cab makes it easier to cover multiple attractions during the same outing. Travelers can organize historical landmarks, temples, museums, gardens, and scenic locations according to their available time."
    },
    {
        WhyChooseheading: "Customized Sightseeing Itinerary",
        WhyChoosedescription: "Every traveler may have different sightseeing priorities, so the journey can be arranged around selected attractions. Families, tourists, and groups can create an itinerary that matches their preferred destinations and schedule."
    },
    {
        WhyChooseheading: "Comfortable Private Transportation",
        WhyChoosedescription: "Private cab travel provides a more convenient alternative to changing between multiple public transportation options. Passengers can travel together, carry their belongings, and move between attractions with greater flexibility."
    },
    {
        WhyChooseheading: "Suitable for Families and Seniors",
        WhyChoosedescription: "Families traveling with children or senior citizens can benefit from direct transportation and flexible sightseeing breaks. The vehicle can remain available throughout the planned tour, making it easier to manage a relaxed itinerary."
    },
    {
        WhyChooseheading: "Ideal for Tourists",
        WhyChoosedescription: "Visitors unfamiliar with Pune can use a private sightseeing cab to connect important historical, religious, cultural, and recreational attractions. The arrangement makes it easier to cover more places during a limited stay."
    },
    {
        WhyChooseheading: "AC and Premium Options",
        WhyChoosedescription: "Travelers can select an air-conditioned or premium vehicle according to their comfort preferences and occasion. These options are useful for full-day sightseeing, corporate guests, special visitors, and family tours."
    },
    {
        WhyChooseheading: "Convenient for Group Tours",
        WhyChoosedescription: "Friends, relatives, colleagues, and small groups can travel together instead of arranging separate vehicles for each passenger. A common cab also simplifies coordination between different sightseeing stops."
    },
    {
        WhyChooseheading: "Flexible Full-Day Travel",
        WhyChoosedescription: "Pune Darshan plans can be structured around a short local visit or a longer one-day sightseeing schedule. Travelers can prioritize attractions, include suitable breaks, and plan the final drop according to their itinerary."
    }
]


};









const faqData = [
{
question: "What is included in a Pune Darshan Package?",
answer: "A Pune Darshan Package can be planned around visits to popular historical, cultural, religious, and tourist attractions in Pune. Ruturaj Enterprises can arrange private transportation according to the selected sightseeing places, number of passengers, preferred timing, and overall itinerary."
},
{
question: "How can I book a Pune Darshan Package?",
answer: "The package can be arranged by sharing your preferred travel date, pickup location, number of travelers, sightseeing requirements, and expected duration. Ruturaj Enterprises can help coordinate the cab and organize the sightseeing schedule according to the places you wish to visit."
},
{
question: "Which places can be covered in a Pune Darshan Package?",
answer: "A Pune sightseeing itinerary can include places such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Pataleshwar Cave Temple, Dagdusheth Halwai Ganpati Temple, Lal Mahal, Saras Baug, and other attractions. The final route can be customized according to available time and visitor preferences."
},
{
question: "Is a private cab available for Pune Darshan?",
answer: "Private cab transportation is a convenient option for Pune Darshan because travelers can move between multiple attractions without arranging separate transportation. The sightseeing plan can include flexible departure times, planned stops, breaks, and convenient pickup and drop-off locations."
},
{
question: "Can families book a Pune Darshan Package?",
answer: "Families can choose a private Pune Darshan Package for a comfortable sightseeing experience. The vehicle can be selected according to the number of family members and luggage, while the itinerary can be adjusted to include religious, historical, cultural, and recreational locations."
},
{
question: "Can senior citizens travel comfortably on a Pune Darshan Package?",
answer: "A private sightseeing cab can make Pune Darshan more manageable for senior citizens by reducing the need to change between different modes of transportation. Rest breaks and the pace of the itinerary can be planned according to the group's convenience and travel requirements."
},
{
question: "Can I book Pune Darshan for a group?",
answer: "Group sightseeing can be arranged by selecting a vehicle according to the number of travelers. Smaller groups may prefer a sedan or SUV, while larger groups can consider spacious vehicles such as an Ertiga, Innova, Innova Crysta, or other suitable travel options."
},
{
question: "How much time is required for a Pune Darshan Package?",
answer: "The required duration depends on the number of attractions selected, their locations, visiting time, traffic, and the pace preferred by the travelers. A shorter itinerary can focus on selected highlights, while a longer schedule can cover more historical, religious, and sightseeing destinations."
},
{
question: "Can I customize the Pune Darshan Package?",
answer: "A customized Pune Darshan itinerary can be created around the attractions you want to visit and the time available for sightseeing. Travelers can discuss preferred locations, pickup points, vehicle requirements, and planned breaks with Ruturaj Enterprises while arranging the package."
},
{
question: "Why choose Ruturaj Enterprises for a Pune Darshan Package?",
answer: "Ruturaj Enterprises can arrange private transportation for Pune Darshan trips covering historical landmarks, temples, forts, cultural attractions, and other sightseeing locations. The travel plan can be organized around the group size, vehicle preference, pickup location, sightseeing list, and preferred schedule."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Sachin Kulkarni",
feedback:
"I planned a Pune Darshan outing with relatives and arranged the transportation through Ruturaj Enterprises. Having a private cab helped us visit several places comfortably without worrying about changing vehicles. The sightseeing schedule was convenient for our group and the overall experience was enjoyable.",
rating: 5
},
{
id: 2,
name: "Miss. Anjali Deshmukh",
feedback:
"Our family wanted to explore Pune's historical and religious attractions in one day, so we chose a Pune Darshan Package from Ruturaj Enterprises. The private cab made it easier to manage the different stops and travel together. The complete sightseeing experience was comfortable and well organized.",
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
  "name": "Pune Darshan Package",
  "image": "https://ruturajenterprises.com/assets/images/pune-darshan-package.webp",
  "description":
    "Pune Darshan Package for exploring the city's historic landmarks, cultural attractions, temples, museums and popular sightseeing locations in a comfortable private cab. Ruturaj Enterprises offers Pune Darshan cab and taxi packages for families, couples, senior citizens, corporate visitors and groups, with convenient pickup, experienced drivers and flexible sightseeing plans. One-day Pune sightseeing tours can be arranged with comfortable AC vehicles and customized routes based on the places you want to visit.",
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
    "url": "https://ruturajenterprises.com/pune-darshan-package"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Pune Darshan Package | Pune Darshan Cab Package | +91 9763381382
  </title>

  <meta
    name="description"
    content="Pune Darshan Package for comfortable city sightseeing, temples, historical attractions and cultural places. Choose private cab and taxi packages with flexible Pune Darshan tours from Ruturaj Enterprises."
  />

  <meta
    name="keywords"
    content="Pune Darshan Cab Package, Pune Darshan Taxi Package, Pune Darshan Tour Package, Pune Darshan Package, Pune Darshan Cab Booking, Pune Darshan Taxi Booking, Pune Darshan Cab Hire, Pune Darshan Taxi Hire, Pune Darshan Cab Rental, Pune Darshan Taxi Rental, Pune Darshan Tour Cab, Pune Darshan Tour Taxi, Pune Sightseeing Cab Package, Pune Sightseeing Taxi Package, Pune Sightseeing Tour Package, Pune City Tour Cab, Pune City Tour Taxi, Pune City Tour Package, Pune Local Sightseeing Cab, Pune Local Sightseeing Taxi, Pune Local Tour Package, Pune One Day Darshan Package, Pune One Day Tour Package, Pune One Day Sightseeing Cab, Pune One Day Sightseeing Taxi, Pune One Day Cab Package, Pune One Day Taxi Package, Pune Darshan AC Cab, Pune Darshan AC Taxi, Pune Darshan Luxury Cab, Pune Darshan Private Cab, Pune Darshan Private Taxi, Pune Darshan Cab with Driver, Pune Darshan Taxi with Driver, Pune Darshan Family Tour Package, Pune Darshan Family Cab, Pune Darshan Group Tour Package, Pune Darshan Group Cab, Pune Darshan Corporate Tour, Pune Darshan Corporate Cab, Pune Darshan Temple Tour, Pune Temple Tour Cab, Pune Temple Tour Taxi, Pune Historical Places Tour Cab, Pune Historical Tour Package Pune, Pune Tourist Places Cab, Pune Tourist Places Taxi, Pune Tourist Cab Service, Pune Tourist Taxi Service, Pune Darshan Booking Service, Pune Darshan Rental Car, Pune Darshan Car Rental, Pune Darshan Car Hire, Pune Darshan Car Booking, Affordable Pune Darshan Package, Pune Darshan Cab Near Me, Pune Darshan Taxi Near Me, Pune Darshan Tour with Driver, Pune Darshan Sightseeing Package, Pune Darshan Weekend Package, Pune Darshan Holiday Package, Pune Darshan Custom Tour Package, Pune Darshan Full Day Cab, Pune Darshan Full Day Taxi, Pune Darshan Local Cab Rental, Pune Darshan Local Taxi Rental, Pune Darshan Tour Operator Cab, Ruturaj Enterprises Pune Darshan Package"
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
                            <img src='/images/keyword/64.jpg' alt='img' className='img-fluid' />
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

export default Punedarshanpackage;