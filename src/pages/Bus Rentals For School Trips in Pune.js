import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Busrentalforschool() {


const cardData = {
keyword: "Bus Rentals For School Trips in Pune",
headingDescription: "Ruturaj Enterprises provides dependable Bus Rentals For School Trips in Pune for educational excursions, school picnics, annual trips, local sightseeing programs, student activities, cultural visits, and longer educational tours. With different seating capacities and AC travel options, schools and educational groups can plan organized transportation according to student strength, teachers, staff, destination, journey duration, and itinerary requirements while keeping the entire group together.",
topPlaces: [
{
title: "Aga Khan Palace",
description: "Aga Khan Palace is an important historical attraction in Pune and can be a useful destination for educational and heritage-focused school visits. Organized school transportation makes it easier for students, teachers, and accompanying staff to travel together according to a planned excursion schedule."
},
{
title: "Sinhagad Fort",
description: "Sinhagad Fort provides an opportunity for students to explore Maharashtra's history while experiencing the surrounding hill landscapes. A dedicated school trip bus can help larger groups coordinate their journey, belongings, teachers, and planned sightseeing activities."
},
{
title: "Rajgad Fort",
description: "Rajgad is a historically significant fort surrounded by the scenic Sahyadri ranges and can be considered for educational and adventure-oriented group excursions. Schools can arrange suitable bus transportation for students and staff traveling together for a planned outdoor learning experience."
},
{
title: "Kaas Plateau",
description: "Kaas Plateau is known for its seasonal flowering landscapes and natural biodiversity, making it interesting for educational nature excursions. A school group bus provides organized transportation for students, teachers, and staff while allowing the group to follow a common travel schedule."
},
{
title: "Lonavala",
description: "Lonavala is a popular destination for school picnics, nature trips, educational excursions, and recreational programs. Schools can use a dedicated bus to transport students and accompanying staff together while visiting scenic locations and planned attractions."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar offers viewpoints, forests, natural landscapes, and several attractions suitable for school tours and educational outings. A larger bus is useful for transporting students and teachers together on a day trip or multi-day school excursion from Pune."
},
{
title: "Matheran",
description: "Matheran provides a peaceful hill environment that can be suitable for school nature trips, recreational excursions, and group learning activities. Dedicated bus transportation from Pune helps organize the initial and return journey for students, teachers, and accompanying staff."
},
{
title: "Nashik",
description: "Nashik offers historical, cultural, religious, and geographical attractions that can be included in an educational tour itinerary. A school group can travel in a dedicated bus from Pune, making it easier to coordinate students, teachers, luggage, meals, and scheduled sightseeing."
},
{
title: "Ajanta Caves",
description: "The Ajanta Caves provide an important heritage and educational experience through their ancient rock-cut architecture and artistic history. A suitable school tour bus can help larger student groups travel together from Pune while following a structured educational itinerary."
},
{
title: "Ellora Caves",
description: "Ellora Caves are a major heritage attraction featuring remarkable rock-cut architecture and historical significance. School groups can arrange dedicated transportation for an educational excursion, allowing students, teachers, and staff to remain together during the journey."
}
],
services: [
{
name: "School Bus Rental Pune",
description: "Ruturaj Enterprises provides School Bus Rental Pune services for educational institutions planning excursions, picnics, annual trips, cultural visits, nature tours, and other student activities. Transportation can be arranged according to group size, destination, journey duration, pickup points, and the school's planned itinerary."
},
{
name: "School Trip Bus Hire Pune",
description: "School Trip Bus Hire Pune offers a convenient transportation option for students, teachers, coordinators, and accompanying staff traveling together. Dedicated bus arrangements can support local educational visits as well as longer school tours requiring scheduled stops and coordinated group movement."
},
{
name: "School Picnic Bus Rental Pune",
description: "School Picnic Bus Rental Pune is suitable for recreational outings, nature visits, amusement destinations, educational parks, and group picnic programs. A dedicated bus allows students and staff to travel together while carrying bags, food, activity materials, and other picnic essentials."
},
{
name: "School Tour Bus Booking Pune",
description: "School Tour Bus Booking Pune can be planned for one-day excursions, multi-day educational tours, heritage visits, science trips, nature programs, and cultural journeys. Advance arrangements help schools coordinate passenger numbers, pickup locations, destinations, schedules, luggage, and teacher or staff requirements."
},
{
name: "AC Bus for School Trip Pune",
description: "AC Bus for School Trip Pune provides an air-conditioned transportation option for educational groups traveling during warmer weather or on longer routes. It can be arranged for school excursions, annual trips, educational tours, sightseeing programs, and multi-day journeys from Pune."
},
{
name: "32 Seater Bus for School Trip Pune",
description: "32 Seater Bus for School Trip Pune is suitable for schools and educational groups with a moderate number of students and accompanying staff. The seating capacity can support organized travel for educational excursions, picnics, local sightseeing, nature trips, and destination-based school programs."
},
{
name: "35 Seater Bus for School Trip Pune",
description: "35 Seater Bus for School Trip Pune provides a practical option for school groups requiring additional seating capacity for students, teachers, and staff. It can be used for educational tours, historical visits, recreational outings, school picnics, and longer excursions from Pune."
},
{
name: "45 Seater Bus for School Trip Pune",
description: "45 Seater Bus for School Trip Pune is designed for larger student groups traveling together for educational and recreational programs. It is suitable for historical tours, nature excursions, annual trips, school picnics, cultural visits, and longer-distance educational journeys."
},
{
name: "50 Seater Bus for School Trip Pune",
description: "50 Seater Bus for School Trip Pune is a high-capacity transportation solution for schools organizing trips with a substantial number of students and accompanying staff. A larger bus can help keep the group together during educational tours, annual excursions, sightseeing programs, and multi-day school journeys."
},
{
name: "Safe Bus Rental for School Trips Pune",
description: "Safe Bus Rental for School Trips Pune focuses on providing organized group transportation for students, teachers, and school staff. Schools can plan dedicated travel according to their approved itinerary, pickup locations, destination, passenger count, journey duration, and accompanying supervision requirements."
},
{
name: "School Group Transportation Pune",
description: "School Group Transportation Pune supports the movement of students, teachers, coordinators, and staff for educational excursions, sports activities, cultural programs, picnics, competitions, and school events. A dedicated bus can simplify group coordination and keep participants together during scheduled travel."
},
{
name: "School Excursion Bus Rental Pune",
description: "School Excursion Bus Rental Pune is suitable for educational visits to museums, historical sites, science centers, nature destinations, cultural attractions, and other learning locations. Transportation can be planned around the school's schedule to support organized departure, sightseeing, breaks, and return travel."
},
{
name: "Educational Tour Bus Pune",
description: "Educational Tour Bus Pune provides group transportation for students visiting destinations selected for academic, historical, environmental, cultural, or scientific learning. Ruturaj Enterprises can support different group sizes and travel requirements for one-day and longer educational programs."
},
{
name: "Affordable School Bus Rental Pune",
description: "Affordable School Bus Rental Pune offers a practical transportation solution for schools that need to move groups of students and staff without arranging multiple smaller vehicles. It can be planned for picnics, educational tours, annual trips, local excursions, events, and longer school travel programs."
},
{
name: "School Picnic Bus Hire Pune",
description: "School Picnic Bus Hire Pune is suitable for taking students and staff to recreational destinations, parks, nature locations, educational attractions, and planned picnic venues. A dedicated bus provides shared transportation and useful space for school bags, food, activity materials, and other essentials."
},
{
name: "School Annual Trip Bus Rental Pune",
description: "School Annual Trip Bus Rental Pune can be arranged for yearly school excursions involving larger groups of students, teachers, and staff. Transportation can support short or multi-day programs with planned routes, sightseeing stops, meal breaks, destination visits, and return schedules."
},
{
name: "School Outstation Bus Booking Pune",
description: "School Outstation Bus Booking Pune is suitable for educational institutions planning longer journeys to destinations outside Pune. Schools can arrange suitable bus capacity for students and staff traveling together while coordinating pickup points, overnight stays, sightseeing, scheduled breaks, and return travel."
},
{
name: "School Student Transportation Pune",
description: "School Student Transportation Pune provides a dedicated group travel solution for students participating in educational programs, excursions, sports activities, competitions, cultural events, and special school outings. Transportation planning can be aligned with the institution's passenger requirements and scheduled activities."
},
{
name: "School Event Bus Rental Pune",
description: "School Event Bus Rental Pune is useful for transporting students and staff to annual functions, competitions, cultural programs, sports events, exhibitions, educational activities, and inter-school gatherings. A dedicated bus can simplify movement between the school, accommodation, event venue, and return location."
},
{
name: "School Tour Transportation Pune",
description: "School Tour Transportation Pune supports organized student travel for local sightseeing, educational excursions, historical tours, nature programs, and multi-day school trips. Schools can select an appropriate seating capacity according to the number of students, teachers, and staff traveling together."
},
{
name: "AC School Bus Hire Pune",
description: "AC School Bus Hire Pune provides an air-conditioned travel option for students and accompanying staff during longer educational journeys and warm-weather excursions. It can be considered for school tours, annual trips, heritage visits, nature excursions, picnics, and outstation educational programs."
},
{
name: "School Group Travel Bus Pune",
description: "School Group Travel Bus Pune is suitable for larger student groups traveling together for academic, recreational, cultural, sporting, and educational activities. A dedicated bus makes it easier to coordinate students, teachers, staff, luggage, pickup points, scheduled stops, and return arrangements."
}
],
tableData: [
["School Bus Rental Pune", "School Trip Bus Hire Pune"],
["School Picnic Bus Rental Pune", "School Tour Bus Booking Pune"],
["AC Bus for School Trip Pune", "32 Seater Bus for School Trip Pune"],
["35 Seater Bus for School Trip Pune", "45 Seater Bus for School Trip Pune"],
["50 Seater Bus for School Trip Pune", "Safe Bus Rental for School Trips Pune"],
["School Group Transportation Pune", "School Excursion Bus Rental Pune"],
["Educational Tour Bus Pune", "Affordable School Bus Rental Pune"],
["School Picnic Bus Hire Pune", "School Annual Trip Bus Rental Pune"],
["School Outstation Bus Booking Pune", "School Student Transportation Pune"],
["School Event Bus Rental Pune", "School Tour Transportation Pune"],
["AC School Bus Hire Pune", "School Group Travel Bus Pune"]
],
whychoose: [
{
WhyChooseheading: "Organized Transportation for Students",
WhyChoosedescription: "School excursions involve students, teachers, coordinators, and staff traveling according to a fixed itinerary. A dedicated bus provides a centralized transportation arrangement that helps the group move between the school, destination, activity locations, and return point together."
},
{
WhyChooseheading: "Multiple Seating Capacities",
WhyChoosedescription: "Every school trip has a different number of participants, so choosing the right vehicle capacity is important. Ruturaj Enterprises supports requirements ranging from 32 seater and 35 seater buses to larger 45 seater and 50 seater options for bigger school groups."
},
{
WhyChooseheading: "Suitable for Educational Excursions",
WhyChoosedescription: "Educational trips can include museums, forts, heritage sites, science attractions, nature destinations, and cultural locations. Dedicated bus transportation helps schools maintain a common schedule while moving students and accompanying staff between planned destinations."
},
{
WhyChooseheading: "Useful for School Picnics",
WhyChoosedescription: "Picnics require transportation for students along with school bags, food, activity materials, and other essentials. A suitable-capacity bus allows the group to travel together and makes it easier to coordinate departure, arrival, activities, breaks, and the return journey."
},
{
WhyChooseheading: "Options for Longer School Tours",
WhyChoosedescription: "Multi-day educational programs may involve several destinations and scheduled overnight stays. A dedicated bus can support longer itineraries by keeping students and teachers together while simplifying movement between hotels, attractions, meal stops, and educational sites."
},
{
WhyChooseheading: "AC Travel for Added Comfort",
WhyChoosedescription: "Long school journeys can be more comfortable when an air-conditioned bus is selected according to the group's requirements. AC options are useful for annual trips, outstation excursions, heritage tours, and educational programs conducted during warmer months."
},
{
WhyChooseheading: "Convenient Group Coordination",
WhyChoosedescription: "Using one suitable bus can reduce the coordination involved in managing multiple cars or smaller vehicles. Teachers and trip coordinators can work with a common transportation schedule covering pickup points, planned stops, sightseeing locations, and return arrangements."
},
{
WhyChooseheading: "Flexible School Trip Planning",
WhyChoosedescription: "Ruturaj Enterprises supports school transportation requirements for picnics, educational tours, annual trips, student events, local excursions, sports programs, cultural activities, and longer journeys from Pune. Travel planning can be adjusted according to student strength, staff requirements, destination, duration, and itinerary."
}
]
};









const faqData = [
{
question: "Why choose Ruturaj Enterprises for bus rentals for school trips in Pune?",
answer: "Ruturaj Enterprises offers group bus rental solutions for schools planning educational tours, picnics, excursions, industrial visits, cultural programs, and recreational trips from Pune. A dedicated bus helps students, teachers, and coordinators travel together according to the planned itinerary."
},
{
question: "What type of school trips can use bus rentals in Pune?",
answer: "School buses can be arranged for educational excursions, historical site visits, science and industrial tours, nature trips, annual picnics, sports events, cultural programs, and inter-school activities. The transportation can be planned around the destination, group size, and duration of the trip."
},
{
question: "Can schools rent buses for outstation educational trips from Pune?",
answer: "Schools can arrange bus rentals from Pune for outstation educational journeys to destinations such as Mahabaleshwar, Lonavala, Nashik, Shirdi, Kolhapur, Mumbai, and other suitable locations. The route and travel schedule can be organized according to the school's tour plan."
},
{
question: "What bus seating capacity is suitable for a school trip?",
answer: "The appropriate bus size depends on the number of students, teachers, and accompanying staff traveling on the trip. Ruturaj Enterprises can arrange larger-capacity options such as 20, 26, 32, 35, 45, or 50 Seater Buses depending on the group's transportation requirements."
},
{
question: "Can teachers and students travel together in the same rental bus?",
answer: "A dedicated rental bus allows students, teachers, coordinators, and accompanying staff to travel together during the school tour. This makes attendance coordination, scheduled stops, route management, and movement between different destinations more convenient."
},
{
question: "Are bus rentals suitable for school picnics in Pune?",
answer: "School picnics involving larger groups can benefit from a dedicated bus rental. Whether the destination is within Pune or in a nearby tourist area, group transportation allows students and staff to follow a common departure, sightseeing, meal, and return schedule."
},
{
question: "Can schools hire a bus for industrial and educational visits?",
answer: "Industrial visits, museum tours, science-center programs, agricultural visits, and other educational activities can be supported with a suitable rental bus. Having dedicated transportation helps the school organize the group's journey around fixed visit timings and planned activities."
},
{
question: "Can Ruturaj Enterprises arrange buses for college and student groups too?",
answer: "Student groups from colleges and educational organizations can also consider bus rental services for educational tours, study visits, seminars, sports events, cultural programs, and recreational outings. The vehicle size can be selected according to the number of participants traveling together."
},
{
question: "Can a school bus rental be used for multi-day educational tours?",
answer: "Multi-day school tours can be planned with a suitable rental bus when the itinerary includes several destinations and overnight stays. A dedicated group vehicle can support transportation between sightseeing locations, accommodation, educational venues, and scheduled return points."
},
{
question: "How can a school book a bus rental for a trip in Pune?",
answer: "Schools can contact Ruturaj Enterprises with details such as the number of students and staff, pickup location, destination, travel dates, trip duration, and planned route. These details help determine a suitable bus capacity and organize transportation around the school's itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Amit Deshpande",
feedback:
"We arranged a bus from Ruturaj Enterprises for our school's educational trip. The entire student group and teachers could travel together, which made attendance and coordination much easier during the tour. The transportation arrangement fitted well with our planned schedule.",
rating: 5
},
{
id: 2,
name: "Miss. Kavita Joshi",
feedback:
"Our school hired a bus from Ruturaj Enterprises for a picnic outside Pune. Managing a large group of students was much simpler when everyone had a common vehicle and itinerary. The overall bus rental arrangement made the travel planning more convenient for our staff.",
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
  "name": "Bus Rentals For School Trips in Pune",
  "image": "https://ruturajenterprises.com/assets/images/bus-rentals-for-school-trips-in-pune.webp",
  "description":
    "Bus Rentals For School Trips in Pune from Ruturaj Enterprises are designed for schools, educational institutions, colleges, teachers and organized student groups requiring convenient transportation for picnics, educational tours, excursions, industrial visits, sports events and intercity school programs. School Bus Rental Pune provides a practical solution for moving students and accompanying staff together in a dedicated vehicle, helping simplify pickup, drop and trip coordination. School Trip Bus Hire Pune can be arranged for local Pune excursions as well as outstation educational journeys based on the group size, destination, travel dates and itinerary. School Picnic Bus Rental Pune is suitable for day trips to nature parks, museums, historical locations, adventure destinations, resorts, educational attractions and recreational venues around Pune and Maharashtra. School Tour Bus Booking Pune can be planned in advance for one-day programs, weekend excursions, multi-day educational tours and annual school trips. AC Bus for School Trip Pune offers a comfortable travel environment for longer journeys and warm-weather travel. Different seating capacities can be selected according to the number of students, teachers and staff, including 32 Seater Bus for School Trip Pune, 35 Seater Bus for School Trip Pune, 45 Seater Bus for School Trip Pune and 50 Seater Bus for School Trip Pune. Safe Bus Rental for School Trips focuses on organized group transportation with experienced drivers and planned routes, while schools can coordinate convenient boarding and drop-off points according to their requirements. These buses can be used for school picnics, educational tours, science visits, museum trips, historical tours, sports competitions, cultural programs, college visits, industrial visits and intercity student excursions. Popular destinations from Pune can include Lonavala, Khandala, Mahabaleshwar, Panchgani, Matheran, Alibaug, Lavasa, Nashik, Shirdi, Satara, Kolhapur, Konkan destinations and other educational or recreational locations across Maharashtra. Local pickup arrangements can be planned from Kothrud, Baner, Aundh, Wakad, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, Kondhwa, Katraj, Shivajinagar, Swargate, Pimpri, Chinchwad, Talegaon, Moshi, Bhosari and surrounding Pune areas. Ruturaj Enterprises supports full-day, weekend, multi-day and outstation bus rental requirements for schools and educational groups, with travel plans customized around the school's schedule, passenger capacity, route and destination.",
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
    "url": "https://ruturajenterprises.com/bus-rentals-for-school-trips-in-pune"
  }
};





    return (
        <div>
<Helmet>
  <title>Bus Rentals For School Trips in Pune | School Bus Rental Pune | +91 9763381382</title>

  <meta
    name="description"
    content="Bus Rentals For School Trips in Pune for school picnics, educational tours, excursions, industrial visits and student group travel with 32, 35, 45 and 50 seater buses."
  />

  <meta
    name="keywords"
    content="School Bus Rental Pune, School Trip Bus Hire Pune, School Picnic Bus Rental Pune, School Tour Bus Booking Pune, AC Bus for School Trip Pune, 32 Seater Bus for School Trip Pune, 35 Seater Bus for School Trip Pune, 45 Seater Bus for School Trip Pune, 50 Seater Bus for School Trip Pune, Safe Bus Rental for School Trips, Bus Rentals For School Trips in Pune, School Bus on Rent Pune, School Bus Hire Pune, School Bus Booking Pune, School Trip Bus Rental Pune, School Trip Bus Booking Pune, School Picnic Bus Hire Pune, School Picnic Bus Booking Pune, School Tour Bus Rental Pune, School Tour Bus Hire Pune, School Excursion Bus Rental Pune, Educational Tour Bus Rental Pune, Educational Trip Bus Hire Pune, Student Group Bus Rental Pune, Student Transportation Bus Pune, School Transportation Bus Pune, School Event Bus Rental Pune, School Function Bus Rental Pune, School Sports Trip Bus Pune, School Competition Bus Rental Pune, School Industrial Visit Bus Pune, School Museum Trip Bus Pune, School Science Trip Bus Pune, School Historical Tour Bus Pune, School Annual Trip Bus Rental Pune, School Outstation Bus Rental Pune, School Outstation Trip Bus Pune, School Bus Rental with Driver Pune, Private School Bus Rental Pune, AC School Bus Rental Pune, Luxury Bus for School Trip Pune, Comfortable Bus for School Trip Pune, Safe School Bus Hire Pune, Reliable School Bus Rental Pune, Affordable School Bus Rental Pune, 32 Seater School Bus Rental Pune, 32 Seater School Trip Bus Pune, 32 Seater Bus Hire for School Trip Pune, 32 Seater Bus Booking for School Trip Pune, 35 Seater School Bus Rental Pune, 35 Seater School Trip Bus Pune, 35 Seater Bus Hire for School Trip Pune, 35 Seater Bus Booking for School Trip Pune, 45 Seater School Bus Rental Pune, 45 Seater School Trip Bus Pune, 45 Seater Bus Hire for School Trip Pune, 45 Seater Bus Booking for School Trip Pune, 50 Seater School Bus Rental Pune, 50 Seater School Trip Bus Pune, 50 Seater Bus Hire for School Trip Pune, 50 Seater Bus Booking for School Trip Pune, School Bus for Group Travel Pune, School Bus for Large Group Pune, School Bus for Students and Teachers Pune, School Bus for Educational Tour Pune, School Bus for Picnic Pune, School Bus for Excursion Pune, School Bus for College Visit Pune, School Bus for Industrial Visit Pune, School Bus for Sports Event Pune, School Bus for Cultural Event Pune, School Bus for Intercity Trip Pune, School Bus for Maharashtra Tour Pune, School Bus for Lonavala Trip Pune, School Bus for Khandala Trip Pune, School Bus for Mahabaleshwar Trip Pune, School Bus for Panchgani Trip Pune, School Bus for Matheran Trip Pune, School Bus for Alibaug Trip Pune, School Bus for Lavasa Trip Pune, School Bus for Nashik Trip Pune, School Bus for Shirdi Trip Pune, School Bus for Satara Trip Pune, School Bus for Kolhapur Trip Pune, School Bus for Konkan Trip Pune, School Bus for One Day School Trip Pune, School Bus for Multi Day Trip Pune, School Bus Full Day Rental Pune, School Bus Weekend Rental Pune, School Bus Outstation Rental Pune, School Bus Near Pune, School Bus Rental Pimpri Chinchwad, School Bus Rental Wakad, School Bus Rental Hinjewadi, School Bus Rental Kothrud, School Bus Rental Baner, School Bus Rental Aundh, School Bus Rental Viman Nagar, School Bus Rental Kharadi, School Bus Rental Hadapsar, School Bus Rental Kondhwa, School Bus Rental Katraj, School Bus Rental Shivajinagar, School Bus Rental Swargate, School Bus Rental Pimpri, School Bus Rental Chinchwad, School Bus Rental Talegaon, School Bus Rental Moshi, School Bus Rental Bhosari"
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
                            <img src='/images/keyword/16.jpg' alt='img' className='img-fluid' />
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

export default Busrentalforschool ;