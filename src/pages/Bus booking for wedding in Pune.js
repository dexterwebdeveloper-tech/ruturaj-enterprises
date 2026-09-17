import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Busbookingforwedding() {


const cardData = {
keyword: "Bus Booking for Wedding in Pune",
headingDescription: "Ruturaj Enterprises provides Bus Booking for Wedding in Pune for transporting wedding guests, family members, relatives, friends, and event teams between homes, hotels, venues, reception halls, and other planned locations. From comfortable AC buses to larger luxury options, wedding transportation can be arranged according to guest count, pickup requirements, venue schedule, ceremony timings, and local or longer-distance travel plans.",
topPlaces: [
{
title: "Koregaon Park",
description: "Koregaon Park is a popular Pune area with hotels, banquet spaces, restaurants, and event venues that may be included in wedding itineraries. Dedicated wedding buses can help move guests between accommodation, ceremony locations, reception venues, and other scheduled stops."
},
{
title: "Kharadi",
description: "Kharadi has numerous hotels, residential communities, and event spaces suitable for wedding-related gatherings and accommodation. Group bus transportation helps families coordinate guest pickups and transfers without requiring individual vehicles for every attendee."
},
{
title: "Baner",
description: "Baner is home to several hotels, restaurants, party venues, and event facilities that can form part of a wedding schedule. A dedicated bus allows wedding guests to travel together between residential areas, hotels, venues, and reception functions according to planned timings."
},
{
title: "Lonavala",
description: "Lonavala is a popular destination for weddings, pre-wedding gatherings, celebrations, and family events because of its scenic surroundings and resort properties. Wedding group transportation from Pune can make it easier to move relatives and guests together for destination functions."
},
{
title: "Khandala",
description: "Khandala offers resorts and scenic venues that are often considered for private celebrations and destination-style wedding functions. A suitable-capacity wedding bus can transport guests from Pune or nearby accommodation locations while keeping the group coordinated throughout the event."
},
{
title: "Lavasa",
description: "Lavasa provides a distinctive setting for private functions, family celebrations, and group events surrounded by hills and lakes. Dedicated wedding transportation can be planned for guest transfers, venue arrivals, accommodation movement, and scheduled return journeys."
},
{
title: "Alibaug",
description: "Alibaug is a well-known destination for weddings and family celebrations, with resorts and event properties suitable for larger gatherings. Wedding buses can provide organized group transportation from Pune for relatives and guests traveling to the venue together."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar offers resorts, hotels, viewpoints, and event properties that can accommodate destination wedding celebrations. A dedicated bus makes longer-distance guest transportation more manageable by keeping family members and wedding guests together during the journey."
},
{
title: "Mulshi",
description: "Mulshi's scenic surroundings and resort properties make it suitable for private celebrations, wedding functions, and family gatherings. Group transportation can be arranged for guests traveling from Pune to the venue, including planned pickup points and return transfers."
},
{
title: "Nashik",
description: "Nashik is a popular destination for weddings and family events, offering hotels, resorts, and event venues across the city and surrounding areas. Wedding bus arrangements from Pune can support coordinated travel for relatives and guests attending ceremonies and receptions."
}
],
services: [
{
name: "Wedding Bus Rental Pune",
description: "Wedding Bus Rental Pune provides dedicated transportation for relatives, friends, family members, and invited guests attending wedding ceremonies and receptions. Ruturaj Enterprises can arrange suitable buses according to guest strength, pickup locations, venue distance, event schedule, and required travel duration."
},
{
name: "Wedding Bus Hire Pune",
description: "Wedding Bus Hire Pune is useful when multiple guests need transportation between their homes, hotels, banquet halls, and wedding venues. A dedicated bus helps keep the guest group together and reduces the need for individual cars during busy wedding schedules."
},
{
name: "Wedding Bus Booking Pune",
description: "Wedding Bus Booking Pune can be planned in advance for ceremonies, receptions, engagement functions, haldi, mehendi, family gatherings, and destination weddings. Vehicle arrangements can be coordinated around guest numbers, pickup points, function timings, venue locations, and return requirements."
},
{
name: "AC Bus for Wedding Pune",
description: "AC Bus for Wedding Pune offers a comfortable transportation option for guests traveling to wedding venues, especially during warm weather or for longer journeys. It can be arranged for hotel transfers, guest pickups, ceremony transportation, reception travel, and destination wedding programs."
},
{
name: "Luxury Bus Rental for Wedding Pune",
description: "Luxury Bus Rental for Wedding Pune is suitable when families want a more premium travel experience for important wedding guests and relatives. These buses can be considered for destination weddings, VIP guest transfers, reception transportation, and longer journeys requiring additional comfort."
},
{
name: "Wedding Guest Transportation Pune",
description: "Wedding Guest Transportation Pune helps families organize centralized travel for guests arriving from different residential areas, hotels, railway stations, or other pickup points. A planned bus service can cover guest transfers to the ceremony and reception venues while following the event schedule."
},
{
name: "Wedding Guest Bus Hire Pune",
description: "Wedding Guest Bus Hire Pune provides a practical way to transport larger groups of relatives and invited guests together. Bus capacity can be selected according to the expected attendance, while pickup and drop arrangements can be coordinated around wedding functions and venue timings."
},
{
name: "Bus for Marriage Function Pune",
description: "Bus for Marriage Function Pune is useful for transporting guests to marriage ceremonies, receptions, engagement events, family functions, and related celebrations. Dedicated group transportation simplifies guest movement between homes, hotels, event halls, and other wedding locations."
},
{
name: "Bus for Wedding Guests Pune",
description: "Bus for Wedding Guests Pune provides organized travel for family members, friends, relatives, and invited attendees. Ruturaj Enterprises can support guest movement between designated pickup points and wedding venues while helping families maintain a coordinated transportation plan."
},
{
name: "Wedding Shuttle Bus Pune",
description: "Wedding Shuttle Bus Pune is ideal for repeated guest transfers between hotels, parking areas, ceremony venues, reception halls, and accommodation facilities. Shuttle arrangements can be scheduled around different wedding functions so guests have convenient transportation throughout the event."
},
{
name: "Bus Rental for Marriage Ceremony Pune",
description: "Bus Rental for Marriage Ceremony Pune supports group travel for traditional marriage functions, receptions, religious ceremonies, and family gatherings. A suitable bus can transport guests together according to the ceremony timing, venue location, pickup points, and planned return schedule."
},
{
name: "Wedding Group Transportation Pune",
description: "Wedding Group Transportation Pune allows larger groups of guests to travel together instead of depending on multiple private vehicles. It can be useful for family gatherings, destination weddings, reception events, pre-wedding functions, and coordinated venue transfers."
},
{
name: "Affordable Wedding Bus Rental Pune",
description: "Affordable Wedding Bus Rental Pune offers a practical group transportation solution for families managing wedding travel requirements and guest logistics. Using an appropriately sized bus can help organize transportation for larger groups while reducing the complexity of arranging numerous individual vehicles."
},
{
name: "Bus Hire for Wedding Events Pune",
description: "Bus Hire for Wedding Events Pune can be arranged for engagement ceremonies, haldi, mehendi, sangeet, wedding ceremonies, receptions, and post-wedding gatherings. Transportation planning can cover guest pickup, venue transfers, waiting requirements, and return journeys according to the event schedule."
},
{
name: "Wedding Party Bus Rental Pune",
description: "Wedding Party Bus Rental Pune is suitable for group celebrations, family gatherings, pre-wedding events, and wedding-related parties where guests need shared transportation. The service can be planned around the group size, route, event location, timing, and duration of travel."
},
{
name: "Wedding Guest Pickup Bus Pune",
description: "Wedding Guest Pickup Bus Pune helps families collect guests from selected residential areas, hotels, railway stations, or meeting points and bring them to the wedding venue. Multiple pickup locations can be incorporated into a planned route depending on the size and requirements of the guest group."
},
{
name: "Wedding Guest Drop Bus Pune",
description: "Wedding Guest Drop Bus Pune is useful after ceremonies and receptions when guests need organized transportation back to hotels, residences, or designated drop points. A dedicated bus helps simplify end-of-event travel and allows guests to return together according to a planned schedule."
},
{
name: "Wedding Venue Transportation Pune",
description: "Wedding Venue Transportation Pune supports movement between guest accommodation, ceremony locations, reception halls, dining venues, and other wedding-related destinations. Dedicated buses can be scheduled around the function itinerary to provide coordinated transportation throughout the celebration."
},
{
name: "Wedding Procession Bus Rental Pune",
description: "Wedding Procession Bus Rental Pune can be considered for transporting family members and guests participating in planned wedding processions and group arrivals. Vehicle arrangements can be coordinated according to the procession route, number of participants, timing, and final venue requirements."
},
{
name: "Wedding Outstation Bus Pune",
description: "Wedding Outstation Bus Pune provides group transportation for families and guests traveling from Pune to wedding destinations outside the city. It is suitable for destination ceremonies, resort weddings, family functions, and longer journeys where keeping the wedding group together is convenient."
},
{
name: "AC Wedding Guest Bus Pune",
description: "AC Wedding Guest Bus Pune provides air-conditioned group transportation for relatives and guests attending weddings, receptions, and destination functions. It can be arranged for local transfers as well as longer routes where comfortable shared travel is an important part of the wedding logistics."
},
{
name: "Luxury Wedding Transportation Pune",
description: "Luxury Wedding Transportation Pune is designed for families seeking a more premium travel arrangement for wedding guests, relatives, and special attendees. Suitable luxury buses can be planned for destination weddings, VIP transfers, reception travel, and important family movements during the celebration."
}
],
tableData: [
["Wedding Bus Rental Pune", "Wedding Bus Hire Pune"],
["Wedding Bus Booking Pune", "AC Bus for Wedding Pune"],
["Luxury Bus Rental for Wedding Pune", "Wedding Guest Transportation Pune"],
["Wedding Guest Bus Hire Pune", "Bus for Marriage Function Pune"],
["Bus for Wedding Guests Pune", "Wedding Shuttle Bus Pune"],
["Bus Rental for Marriage Ceremony Pune", "Wedding Group Transportation Pune"],
["Affordable Wedding Bus Rental Pune", "Bus Hire for Wedding Events Pune"],
["Wedding Party Bus Rental Pune", "Wedding Guest Pickup Bus Pune"],
["Wedding Guest Drop Bus Pune", "Wedding Venue Transportation Pune"],
["Wedding Procession Bus Rental Pune", "Wedding Outstation Bus Pune"],
["AC Wedding Guest Bus Pune", "Luxury Wedding Transportation Pune"]
],
whychoose: [
{
WhyChooseheading: "Convenient Guest Movement",
WhyChoosedescription: "Wedding celebrations often involve guests arriving from different locations and attending several functions. A dedicated bus creates a centralized transportation arrangement for moving relatives and friends between homes, hotels, ceremony venues, reception halls, and other scheduled locations."
},
{
WhyChooseheading: "Suitable for Large Wedding Groups",
WhyChoosedescription: "When a large number of guests need transportation, arranging individual cars can become difficult to coordinate. Choosing a suitable-capacity bus allows families to manage group movement more efficiently while keeping guests together during important wedding functions."
},
{
WhyChooseheading: "Planned Pickup and Drop Service",
WhyChoosedescription: "Guest transportation can involve multiple pickup and drop points before and after the ceremony. Travel arrangements can be organized around selected locations, accommodation properties, event venues, and function timings to make wedding-day transportation easier to manage."
},
{
WhyChooseheading: "Comfortable AC Options",
WhyChoosedescription: "For weddings held during warmer months or at destinations requiring longer travel, an air-conditioned bus can make the journey more comfortable for guests. AC options are suitable for local venue transfers, hotel transportation, destination weddings, and extended family travel."
},
{
WhyChooseheading: "Luxury Travel for Special Guests",
WhyChoosedescription: "Important family members and invited guests may prefer a more premium travel experience during a wedding celebration. Luxury transportation options can be considered for VIP guests, destination functions, reception transfers, and longer wedding journeys."
},
{
WhyChooseheading: "Useful for Destination Weddings",
WhyChoosedescription: "Destination weddings require transportation between cities, hotels, resorts, ceremony locations, and reception venues. A dedicated bus helps families coordinate longer-distance guest travel and maintain a common schedule throughout the wedding itinerary."
},
{
WhyChooseheading: "Transportation for Multiple Functions",
WhyChoosedescription: "Wedding schedules can include engagement ceremonies, haldi, mehendi, sangeet, marriage ceremonies, receptions, and family gatherings. Bus transportation can be planned around these different functions so guests have a reliable shared travel arrangement throughout the celebration."
},
{
WhyChooseheading: "Flexible Wedding Travel Planning",
WhyChoosedescription: "Ruturaj Enterprises supports wedding transportation requirements based on guest count, route, venue location, event timing, pickup points, travel duration, and vehicle preference. This flexibility makes it easier for families to plan transportation for both Pune-based celebrations and longer destination wedding programs."
}
]
};










const faqData = [
{
question: "Why choose Ruturaj Enterprises for bus booking for weddings in Pune?",
answer: "Ruturaj Enterprises offers group transportation solutions for weddings and marriage functions in Pune. A dedicated bus can help families and event organizers move relatives and guests between homes, hotels, wedding venues, reception halls, railway stations, and airports according to the planned function schedule."
},
{
question: "Can I book a bus for wedding guests in Pune?",
answer: "Wedding families can arrange a suitable bus for transporting guests between different locations during the celebrations. Depending on the number of passengers, the vehicle capacity can be selected to make group movement more convenient and reduce the need for multiple smaller vehicles."
},
{
question: "What types of wedding functions can use bus rental services?",
answer: "Bus rentals can be useful for engagement ceremonies, haldi functions, mehendi programs, wedding ceremonies, receptions, sangeet events, and other family gatherings. Transportation can be arranged for guests traveling between accommodation, event venues, and designated pickup points."
},
{
question: "Can I book a large Seater Bus for a wedding in Pune?",
answer: "Large wedding groups can choose higher-capacity buses when many relatives and guests need to travel together. Ruturaj Enterprises can arrange options such as 20, 26, 32, 35, 45, or 50 Seater Buses depending on the expected passenger count and transportation plan."
},
{
question: "Can wedding guests be picked up from Pune Airport or railway station?",
answer: "Airport and railway station transfers can be included in a wedding transportation plan for guests arriving from different cities. A dedicated bus can help bring multiple guests to hotels, residences, marriage halls, or other wedding venues without arranging separate vehicles for each passenger."
},
{
question: "Is bus rental suitable for transporting relatives between hotels and wedding venues?",
answer: "Families hosting weddings can use a rental bus to coordinate guest movement between hotels, guest houses, homes, banquet halls, marriage venues, and reception locations. A common vehicle can make it easier to organize departure times and keep groups together during the functions."
},
{
question: "Can I book a wedding bus for guests coming from outside Pune?",
answer: "Wedding organizers can plan bus transportation for groups arriving from nearby cities or other locations and coordinate their onward travel within Pune. The arrangement can include scheduled pickups and drops based on the wedding itinerary and accommodation locations."
},
{
question: "Can a bus be booked for multiple wedding functions on the same day?",
answer: "A bus rental can be planned around multiple wedding events when the transportation schedule is shared in advance. Providing details about each venue, pickup point, function timing, and expected passenger count helps create a more organized movement plan for the wedding group."
},
{
question: "Can corporate or destination wedding groups hire a bus in Pune?",
answer: "Destination wedding parties, corporate-sponsored events, and large family celebrations can use bus rentals when guests need coordinated transportation between several locations. A suitable vehicle can support travel for ceremonies, sightseeing, accommodation transfers, and other scheduled activities."
},
{
question: "How can I book a bus for a wedding in Pune?",
answer: "To arrange wedding transportation with Ruturaj Enterprises, share the wedding dates, pickup locations, destinations, number of guests, venue details, and required travel timings. Providing the complete itinerary allows the bus rental arrangement to be planned around the wedding functions and guest movements."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rohit Kulkarni",
feedback:
"We booked a bus from Ruturaj Enterprises for our family wedding in Pune. Several relatives were staying at different locations, so having a dedicated bus made it much easier to bring everyone to the wedding and reception venues on time. The group transportation worked very well for our arrangements.",
rating: 5
},
{
id: 2,
name: "Miss. Priya Deshmukh",
feedback:
"Ruturaj Enterprises helped us arrange bus transportation for wedding guests arriving from outside Pune. Coordinating airport and hotel transfers for a large group was much simpler with one dedicated vehicle. It made the guest transportation part of the wedding planning far more convenient.",
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
  "name": "Bus Booking for Wedding in Pune",
  "image": "https://ruturajenterprises.com/assets/images/bus-booking-for-wedding-in-pune.webp",
  "description":
    "Bus Booking for Wedding in Pune from Ruturaj Enterprises provides organized group transportation for wedding guests, family members, relatives, friends, wedding planners and event groups. Wedding Bus Rental Pune is suitable for transporting guests between homes, hotels, marriage halls, banquet venues, resorts, reception locations, railway stations and airports. Wedding Bus Hire Pune can be planned according to the guest count, pickup points, wedding venue, travel schedule and number of functions. Wedding Bus Booking Pune is useful for managing guest movement during engagement ceremonies, haldi, mehendi, sangeet, marriage ceremonies, receptions, destination weddings and related family events. AC Bus for Wedding Pune offers a comfortable option for guest transportation, especially during warm weather and longer journeys, while Luxury Bus Rental for Wedding Pune can be selected for premium guest movement and special wedding arrangements. Wedding Guest Transportation Pune helps families coordinate multiple guests through planned routes and scheduled pickup and drop services, while Wedding Guest Bus Hire Pune can accommodate larger groups travelling together. Bus for Marriage Function Pune and Bus for Wedding Guests Pune are suitable for transporting relatives and invitees between accommodation locations and ceremony venues. Wedding Shuttle Bus Pune can be arranged for repeated transfers between hotels, parking areas, banquet halls and wedding venues throughout the event schedule. Bus Rental for Marriage Ceremony Pune provides a convenient solution for local and outstation guest transportation, while Wedding Group Transportation Pune can support large groups attending weddings in Pune, Pimpri-Chinchwad and nearby destinations. Affordable Wedding Bus Rental Pune can be planned around the duration, route, passenger capacity and number of required transfers. Different seating capacities can be arranged for small and large wedding groups, including 32 Seater, 35 Seater, 45 Seater and 50 Seater buses, depending on availability and travel requirements. Wedding transportation can also be customized for guests travelling from Mumbai, Nashik, Kolhapur, Satara, Sangli, Ahmednagar, Solapur, Goa, Konkan and other Maharashtra destinations to Pune. Airport and railway station pickup can be coordinated from Pune Airport, Pune Railway Station and other convenient meeting points. Local pickup and drop arrangements can cover Kothrud, Baner, Aundh, Wakad, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, Kondhwa, Katraj, Shivajinagar, Swargate, Pimpri, Chinchwad, Talegaon, Moshi, Bhosari and surrounding Pune areas. Ruturaj Enterprises supports wedding guest transfers, marriage ceremony transportation, reception shuttle services, hotel-to-venue transfers and customized multi-point wedding travel plans with professional driver support.",
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
    "url": "https://ruturajenterprises.com/bus-booking-for-wedding-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>Bus Booking for Wedding in Pune | Wedding Bus Rental Pune | +91 9763381382</title>

  <meta
    name="description"
    content="Bus Booking for Wedding in Pune for wedding guests, marriage functions, receptions and shuttle transfers with AC, luxury and large-capacity buses."
  />

  <meta
    name="keywords"
    content="Wedding Bus Rental Pune, Wedding Bus Hire Pune, Wedding Bus Booking Pune, AC Bus for Wedding Pune, Luxury Bus Rental for Wedding Pune, Wedding Guest Transportation Pune, Wedding Guest Bus Hire Pune, Bus for Marriage Function Pune, Bus for Wedding Guests Pune, Wedding Shuttle Bus Pune, Bus Rental for Marriage Ceremony Pune, Wedding Group Transportation Pune, Affordable Wedding Bus Rental Pune, Bus Booking for Wedding in Pune, Wedding Bus on Rent Pune, Wedding Guest Bus Rental Pune, Wedding Guest Bus Booking Pune, Wedding Transportation Bus Pune, Marriage Bus Rental Pune, Marriage Bus Hire Pune, Marriage Bus Booking Pune, Marriage Function Bus Rental Pune, Marriage Ceremony Bus Rental Pune, Wedding Ceremony Bus Rental Pune, Wedding Reception Bus Rental Pune, Reception Bus Rental Pune, Wedding Shuttle Service Pune, Wedding Guest Shuttle Pune, Wedding Hotel Shuttle Bus Pune, Hotel to Wedding Venue Bus Pune, Wedding Venue Transportation Pune, Wedding Hall Bus Rental Pune, Banquet Hall Wedding Bus Pune, Resort Wedding Bus Rental Pune, Destination Wedding Bus Pune, Wedding Event Transportation Pune, Wedding Event Bus Hire Pune, Wedding Guest Transfer Pune, Wedding Guest Pickup Pune, Wedding Guest Drop Pune, Wedding Family Transportation Pune, Wedding Relatives Transportation Pune, Wedding Party Bus Rental Pune, Wedding Group Bus Hire Pune, Wedding Group Bus Booking Pune, Wedding Bus with Driver Pune, Private Wedding Bus Pune, AC Wedding Bus Rental Pune, Luxury Wedding Bus Hire Pune, Premium Wedding Bus Pune, Comfortable Wedding Bus Pune, Reliable Wedding Bus Rental Pune, Large Wedding Bus Rental Pune, 32 Seater Bus for Wedding Pune, 35 Seater Bus for Wedding Pune, 45 Seater Bus for Wedding Pune, 50 Seater Bus for Wedding Pune, 32 Seater Wedding Bus Rental Pune, 35 Seater Wedding Bus Rental Pune, 45 Seater Wedding Bus Rental Pune, 50 Seater Wedding Bus Rental Pune, 32 Seater Wedding Guest Bus Pune, 35 Seater Wedding Guest Bus Pune, 45 Seater Wedding Guest Bus Pune, 50 Seater Wedding Guest Bus Pune, Wedding Bus for Large Group Pune, Wedding Bus for Family Pune, Wedding Bus for Relatives Pune, Wedding Bus for Friends Pune, Wedding Bus for Baraat Pune, Baraat Bus Rental Pune, Wedding Baraat Transportation Pune, Marriage Guest Transportation Pune, Marriage Guest Bus Hire Pune, Marriage Guest Bus Booking Pune, Wedding Airport Transfer Pune, Wedding Airport Pickup Pune, Wedding Airport Drop Pune, Wedding Railway Station Transfer Pune, Wedding Pune Airport Guest Pickup, Wedding Pune Railway Station Guest Pickup, Wedding Hotel Transfer Pune, Wedding Resort Transfer Pune, Wedding Guest Pickup from Hotel Pune, Wedding Guest Drop to Hotel Pune, Wedding Venue Shuttle Pune, Wedding Parking Shuttle Bus Pune, Wedding Ceremony Shuttle Pune, Reception Shuttle Bus Pune, Haldi Function Bus Rental Pune, Mehendi Function Bus Rental Pune, Sangeet Function Bus Rental Pune, Engagement Function Bus Rental Pune, Wedding Reception Transportation Pune, Marriage Reception Bus Rental Pune, Wedding Day Bus Rental Pune, Wedding Full Day Bus Rental Pune, Wedding Multi Day Bus Rental Pune, Wedding Outstation Bus Rental Pune, Wedding Bus for Outstation Pune, Wedding Bus for Maharashtra Pune, Wedding Bus from Mumbai to Pune, Wedding Bus from Nashik to Pune, Wedding Bus from Kolhapur to Pune, Wedding Bus from Satara to Pune, Wedding Bus from Sangli to Pune, Wedding Bus from Solapur to Pune, Wedding Bus from Ahmednagar to Pune, Wedding Bus from Goa to Pune, Wedding Bus from Konkan to Pune, Wedding Bus Rental Near Pune, Wedding Bus Hire Near Pune, Wedding Bus Rental Pimpri Chinchwad, Wedding Bus Rental Wakad, Wedding Bus Rental Hinjewadi, Wedding Bus Rental Kothrud, Wedding Bus Rental Baner, Wedding Bus Rental Aundh, Wedding Bus Rental Viman Nagar, Wedding Bus Rental Kharadi, Wedding Bus Rental Hadapsar, Wedding Bus Rental Kondhwa, Wedding Bus Rental Katraj, Wedding Bus Rental Shivajinagar, Wedding Bus Rental Swargate, Wedding Bus Rental Pimpri, Wedding Bus Rental Chinchwad, Wedding Bus Rental Talegaon, Wedding Bus Rental Moshi, Wedding Bus Rental Bhosari"
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
                            <img src='/images/keyword/17.jpg' alt='img' className='img-fluid' />
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

export default Busbookingforwedding