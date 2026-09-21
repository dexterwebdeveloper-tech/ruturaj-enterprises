
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import AboutUs from './components/AboutSection';
import ContactAddress from './pages/ContactAddress';
import Enquiry from './pages/Enquiry';
import Career from './components/Career';
import Gallery from './pages/Gallery';
import OurFleets from './pages/OurFleets.';
import Footer from './components/Footer';
import Tempotravelleronrentinpune from './pages/Tempo Traveller On Rent in Pune';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Service from './pages/Service';
import Packages from './pages/Packages';
import VehicleBooking from './pages/VehicleBooking';
import ScrollToTop from './components/ScrollToTop';
import Punetoshirditempo from './pages/Pune to Shirdi Tempo Traveller on Rent';
import Punetomahabaleshwartempo from './pages/Pune to Mahabaleshwar Tempo Traveller on Rent';
import Punetogoatempotraveller from './pages/Pune to Goa Tempo Traveller';
import Punetomumbaitempotraveller from './pages/Pune to Mumbai Tempo Traveller on Rent';
import Punetokonkantempo from './pages/Pune to Konkan Tempo Traveller';
import Punetonashiktempo from './pages/Pune to Nashik Tempo Traveller On Rent';
import Punedarshantempo from './pages/Pune Darshan Tempo Traveller On Rent';
import Minibusonrentpune from './pages/Mini Bus On Rent in Pune';
import Onethreetempo from './pages/13 Seater Tempo Traveller on Rent';
import Onesevantempo from './pages/17 Seater Tempo Traveller on Rent in Pune';
import Twozeroseater from './pages/20 Seater Bus on Rent in Pune';
import Twosixseater from './pages/26 Seater Tempo Traveller on Rent in Pune';
import Threetwoseater from './pages/32 Seater Bus Rent in Pune';
import Threeffiveseater from './pages/35 Seater Bus on Rent in Pune';
import Fourseaterfive from './pages/45 Seater Bus on Rent in Pune';
import Fivezeroseatterbus from './pages/50 Seater Bus On Rent in Pune';
import Busrentalforschool from './pages/Bus Rentals For School Trips in Pune';
import Busbookingforwedding from './pages/Bus booking for wedding in Pune';
import Busbookingformarriage from './pages/Bus Booking for Marriage';
import Busserviceforcorporatepune from './pages/Bus Service for Corporate Pune';
import Busonrentforevetsinpune from './pages/Bus on Rent For Event in Pune';
import Bushireforoutstation from './pages/Bus Hire for Outstation';
import Acbusonrentinpune from './pages/AC Bus On Rent in Pune';
import Punebushirerentalservice from './pages/Pune Bus Hire Rental Service';
import Nonacbusrentalservice from './pages/Non Ac Bus Rental Service in Pune';
import Busserviceforpicnicinpune from './pages/Bus Service for Picnic in Pune';
import Punetoaurangabadtempo from './pages/Pune to Aurangabad Tempo Traveller on Rent';
import Ashtavinayakdarshantourbus from './pages/Ashtavinayak Darshan Tour Bus Package From Pune';
import Punetorajsthanbustrippackage from './pages/Pune to Rajasthan Bus Trip Package';
import Punetogujratbushire from './pages/Pune to Gujarat Bus Hire';
import Goatourpackagefrom from './pages/Goa Tour Package from Pune by Bus';
import Punetouttarpradeshbus from './pages/Pune to Uttar Pradesh bus on rent';
import Bookkonkandarsha from './pages/Book Konkan Darshan Tour Packages from Pune by Bus';
import Tempotravelleronrent from './pages/Tempo Traveller On Rent';
import Busserviceforcorporateinpune from './pages/Bus services for corporate in Pune';
import Localbushireinpune from './pages/Local Bus Hire In Pune';
import Punetolonavalabustour from './pages/Pune to Lonavala Bus Tour Package';
import Punetonshikbusonrent from './pages/Pune to Nashik Bus on Rent Packages';
import Luxuryonetwo from './pages/Luxury 12,14 Seater Tempo Traveller in Pune';
import Busfortouristinpune from './pages/Bus for Tourist in Pune';
import Punetosinhghadfort from './pages/Pune to Sinhagad Fort Bus on rent in Pune';
import Punetobhimashankarjyotilinga from './pages/Pune to Bhimashankar Jyotirlinga bus on Rent';
import Punetokolhapurtempo from './pages/Pune to Kolhapur Tempo Traveller Rent';
import Punetomumbaibushire from './pages/Pune to Mumbai Bus Hire for Tour Package From Pune';
import Sadeteenshaktipeeth from './pages/Sadeteenshaktipeeth tour from pune by bus';
import Puneromatherantempo from './pages/Pune To Matheran Tempo Traveller Hire On Rent';
import Actempotraveller from './pages/Ac Tempo Traveller Rent Pune';
import Bushireinpuneforoutstationandlocal from './pages/Bus Hire in Pune For Outstation and Local';
import Bookbusonrentinpune from './pages/Book Bus On Rent in Pune';
import Bharatbenzbusonrentpune from './pages/Bharat Benz bus on Rent Pune';
import Eicherbusonrentpune from './pages/Eicher Bus on Rent in Pune';
import Punetomahabaleshwarcab from './pages/Pune to Mahabaleshwar Cab';
import Punetobhimashanakar from './pages/Pune to Bhimashankar Cab';
import Punetokonkandarshan from './pages/Pune to Konkan Darshan Cab';
import Onlinecabbookingpune from './pages/Online Cab Booking Pune';
import Innovacrystacabbooking from './pages/Innova Crysta Cab Booking';
import Ashtavinayakdarshancab from './pages/Ashtavinayak Darshan Cab';
import Punetolonavalacab from './pages/Pune to Lonavala Cab';
import Punetooutstaioncab from './pages/Pune to outstation cab';
import Ertigacab from './pages/Ertiga Cab';
import Carhireinpune from './pages/Car Hire in Pune';
import Swiftdzireonrentpune from './pages/Swift Dzire On Rent Pune';
import Sedancabserviceinpune from './pages/Sedan Cab Service in Pune';
import Sevanseatercaronrent from './pages/7 Seater car on rent in Pune';
import Etioncabforout from './pages/Etios Cab for Outstation in Pune';
import Puunetojejuricab from './pages/Pune to Jejuri Cab';
import Punedarshanpackage from './pages/Pune Darshan Package';
import Punnetoindorecab from './pages/Pune to Indore Cab';
import Punetogujratcab from './pages/Pune to Gujarat Cab';
import Punetorajthancab from './pages/Pune to Rajasthan Cab';
import Punetobanglorecab from './pages/Pune to Bangalore Cab';
import Punetoshirdicab from './pages/Pune to Shirdi Cab';
import Booktaxiinpune from './pages/Book taxi in Pune';
import Punetomahabaleshwar from './pages/Pune to Mahabaleshwar Taxi';
import Punetogoacaab from './pages/Pune to Goa Cab';
import Punetomumbaicab from './pages/Pune to Mumbai Cab';
import Punetoaurangabadcab from './pages/Pune to Aurangabad Cab';
import Croporatecabserviceinpune from './pages/Corporate Cab Services in Pune';
import Weddingcarrenttalpune from './pages/Wedding Car Rental Pune';
import Cabserviceinpimprichichwad from './pages/Cab Service in Pimpri Chinchwad';
import Panindiabusandcab from './pages/Pan India Bus & Cab Service Pune';
import Punetomysoreooty from './pages/Pune to Mysore Ooty Bus Tour Package';
import Punetomadhyapradesh from './pages/Pune to Madhya Pradesh Bus for Trip';
import ContactButtons from './components/ContactButtons';
import Busonrentpune from './pages/Bus On Rent Pune';
import Punebushire from './pages/Pune Bus Hire';
import Bushireinpune from './pages/Bus Hire in Pune';
import Busservicepune from './pages/Bus Service Pune';
import Rentabuspune from './pages/Rent a Bus Pune';
import Fourzeroseaterbus from './pages/40 Seater Bus On Rent in Pune';
import Twofiveseaterbusonrent from './pages/25 Seater Bus On Rent in Pune';
import Minibusrentalpune from './pages/Mini Bus Rental Pune';
import Urbaniaonrentinpune from './pages/Urbania On Rent in Pune';
import Urbaniaonrentpune from './pages/Urbania On Rent Pune';
import Tempotravellerrentalpune from './pages/Tempo Traveller Rental Pune';
import Busrentalforcorporateevets from './pages/Bus Rentals for Corporate Events';
import Twozeroseatertempo from './pages/20 Seater Tempo Traveller On Rent in Pune';
import Twosixseaterbus from './pages/26 Seater Bus On Rent in Pune';
import Urbaniaonrentpipri from './pages/Urbania On Rent in Pimpri Chinchwad';
import Innovacrystaonrentpune from './pages/Innova Crysta On Rent in Pune';
import Minibushirepune from './pages/Mini Bus Hire in Pune';
import Tempootravelleronrent from './pages/Tempo Traveller On Rent in Pimpri Chinchwad';
import Busrentalforcorporateevetsinpune from './pages/Bus Rental for Corporate Events in Pune';
import Weddingbusrental from './pages/Wedding Bus Rental Services in Pune';
import Busrentalpune from './pages/Bus Rental Pune';
import Minibusrentalpunee from './pages/Mini Bus Rentals Pune';
import Innovaonrentinpune from './pages/Innova On Rent in Pune';
import Urbaniahireforcorporateeverts from './pages/Urbania Hire for Corporate Events in Pune';
import Onesevanseaterurbania from './pages/17 Seater Urbania on Rent in Pune';
import Onefourseater from './pages/14 Seater Urbania on Rent in Pune';
import Urbaniaonrentinkharadi from './pages/Urbania on Rent in Kharadi';
import Urbaniaonrentinhadapsar from './pages/Urbania on Rent in Hadapsar';
import Urbaniaonrentinkothrud from './pages/Urbania on Rent in Kothrud';
import Urbaniaonrentinkoregaon from './pages/Urbania on Rent in Koregaon Park';
import Urbaniaforwedding from './pages/Urbania for Wedding Events in Pune';
import Urbaniaforpune from './pages/Urbania for Pune to Mahabaleshwar Hire';
import Urbaniaforpunetogoa from './pages/Urbania for Pune to Goa Tour Package';
import Punetoshirdiurbania from './pages/Pune to Shirdi Urbania On Rent';
import Luxuryforceurbania from './pages/Luxury Force Urbania On Rent in Pune';
import Urbaniahireforpicnic from './pages/Urbania Hire for Picnic in Pune';

function App() {
  return (
    <Router>
     <Header/>
      <ContactButtons />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<VehicleBooking />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-fleet" element={<OurFleets />} />
        <Route path="/contact-us" element={<ContactAddress />} />
        
        <Route path="/Tempo-Traveller-On-Rent-in-Pune" element={<Tempotravelleronrentinpune />} />
        <Route path="/Pune-to-Shirdi-Tempo-Traveller-on-Rent" element={<Punetoshirditempo />} />

<Route path="/Pune-to-Mahabaleshwar-Tempo-Traveller-on-Rent" element={<Punetomahabaleshwartempo />} />
<Route path="/Pune-to-Goa-Tempo-Traveller" element={<Punetogoatempotraveller />} />
<Route path="/Pune-to-Mumbai-Tempo-Traveller-on-Rent" element={<Punetomumbaitempotraveller />} />
<Route path="/Pune-to-Konkan-Tempo-Traveller" element={<Punetokonkantempo />} />
<Route path="/Pune-to-Nashik-Tempo-Traveller-On-Rent" element={<Punetonashiktempo />} />
<Route path="/Pune-Darshan-Tempo-Traveller-On-Rent" element={<Punedarshantempo />} />
<Route path="/Mini-Bus-On-Rent-in-Pune" element={<Minibusonrentpune />} />
<Route path="/13-Seater-Tempo-Traveller-on-Rent" element={<Onethreetempo />} />
<Route path="/17-Seater-Tempo-Traveller-on-Rent-in-Pune" element={<Onesevantempo />} />
<Route path="/20-Seater-Bus-on-Rent-in-Pune" element={<Twozeroseater />} />
<Route path="/26-Seater-Tempo-Traveller-on-Rent-in-Pune" element={<Twosixseater />} />
<Route path="/32-Seater-Bus-Rent-in-Pune" element={<Threetwoseater />} />
<Route path="/35-Seater-Bus-on-Rent-in-Pune" element={<Threeffiveseater />} />
<Route path="/45-Seater-Bus-on-Rent-in-Pune" element={<Fourseaterfive />} />
<Route path="/50-Seater-Bus-On-Rent-in-Pune" element={<Fivezeroseatterbus />} />
<Route path="/Bus-Rentals-For-School-Trips-in-Pune" element={<Busrentalforschool />} />
<Route path="/Bus-booking-for-wedding-in-Pune" element={<Busbookingforwedding />} />
<Route path="/Bus-Booking-for-Marriage" element={<Busbookingformarriage />} />
<Route path="/Bus-Service-for-Corporate-Pune" element={<Busserviceforcorporatepune />} />
<Route path="/Bus-on-Rent-For-Event-in-Pune" element={<Busonrentforevetsinpune />} />
<Route path="/Bus-Hire-for-Outstation" element={<Bushireforoutstation />} />
<Route path="/AC-Bus-On-Rent-in-Pune" element={<Acbusonrentinpune />} />
<Route path="/Pune-Bus-Hire-Rental-Service" element={<Punebushirerentalservice />} />
<Route path="/Non-Ac-Bus-Rental-Service-in-Pune" element={<Nonacbusrentalservice />} />
<Route path="/Bus-Service-for-Picnic-in-Pune" element={<Busserviceforpicnicinpune />} />
<Route path="/Pune-to-Aurangabad-Tempo-Traveller-on-Rent" element={<Punetoaurangabadtempo />} />


<Route path="/Ashtavinayak-Darshan-Tour-Bus-Package-From-Pune" element={<Ashtavinayakdarshantourbus />} />
<Route path="/Pune-to-Rajasthan-Bus-Trip-Package" element={<Punetorajsthanbustrippackage />} />
<Route path="/Pune-to-Gujarat-Bus-Hire" element={<Punetogujratbushire />} />
<Route path="/Goa-Tour-Package-from-Pune-by-Bus" element={<Goatourpackagefrom />} />
<Route path="/Pune-to-Uttar-Pradesh-bus-on-rent" element={<Punetouttarpradeshbus />} />
<Route path="/Book-Konkan-Darshan-Tour-Packages-from-Pune-by-Bus" element={<Bookkonkandarsha />} />
<Route path="/Tempo-Traveller-On-Rent" element={<Tempotravelleronrent />} />
<Route path="/Bus-services-for-corporate-in-Pune" element={<Busserviceforcorporateinpune />} />
<Route path="/Local-Bus-Hire-In-Pune" element={<Localbushireinpune />} />
<Route path="/Pune-to-Lonavala-Bus-Tour-Package" element={<Punetolonavalabustour />} />
<Route path="/Pune-to-Nashik-Bus-on-Rent-Packages" element={<Punetonshikbusonrent />} />
<Route path="/Luxury-12-14-Seater-Tempo-Traveller-in-Pune" element={<Luxuryonetwo />} />
<Route path="/Bus-for-Tourist-in-Pune" element={<Busfortouristinpune />} />
<Route path="/Pune-to-Sinhagad-Fort-Bus-on-rent-in-Pune" element={<Punetosinhghadfort />} />
<Route path="/Pune-to-Bhimashankar-Jyotirlinga-bus-on-Rent" element={<Punetobhimashankarjyotilinga />} />
<Route path="/Pune-to-Kolhapur-Tempo-Traveller-Rent" element={<Punetokolhapurtempo />} />
<Route path="/Pune-to-Mumbai-Bus-Hire-for-Tour-Package-From-Pune" element={<Punetomumbaibushire />} />
<Route path="/Sadeteenshaktipeeth-tour-from-pune-by-bus" element={<Sadeteenshaktipeeth />} />
<Route path="/Pune-To-Matheran-Tempo-Traveller-Hire-On-Rent" element={<Puneromatherantempo />} />
<Route path="/Ac-Tempo-Traveller-Rent-Pune" element={<Actempotraveller />} />
<Route path="/Bus-Hire-in-Pune-For-Outstation-and-Local" element={<Bushireinpuneforoutstationandlocal />} />
<Route path="/Book-Bus-On-Rent-in-Pune" element={<Bookbusonrentinpune />} />
<Route path="/Bharat-Benz-bus-on-Rent-Pune" element={<Bharatbenzbusonrentpune />} />
<Route path="/Eicher-Bus-on-Rent-in-Pune" element={<Eicherbusonrentpune />} />
<Route path="/Pune-to-Mahabaleshwar-Cab" element={<Punetomahabaleshwarcab />} />
<Route path="/Pune-to-Bhimashankar-Cab" element={<Punetobhimashanakar />} />
<Route path="/Pune-to-Konkan-Darshan-Cab" element={<Punetokonkandarshan />} />
<Route path="/Online-Cab-Booking-Pune" element={<Onlinecabbookingpune />} />


<Route path="/Innova-Crysta-Cab-Booking" element={<Innovacrystacabbooking />} />
<Route path="/Ashtavinayak-Darshan-Cab" element={<Ashtavinayakdarshancab />} />
<Route path="/Pune-to-Lonavala-Cab" element={<Punetolonavalacab />} />
<Route path="/Pune-to-outstation-cab" element={<Punetooutstaioncab />} />
<Route path="/Ertiga-Cab" element={<Ertigacab />} />
<Route path="/Car-Hire-in-Pune" element={<Carhireinpune />} />
<Route path="/Swift-Dzire-On-Rent-Pune" element={<Swiftdzireonrentpune />} />
<Route path="/Sedan-Cab-Service-in-Pune" element={<Sedancabserviceinpune />} />
<Route path="/7-Seater-car-on-rent-in-Pune" element={<Sevanseatercaronrent />} />
<Route path="/Etios-Cab-for-Outstation-in-Pune" element={<Etioncabforout />} />
<Route path="/Pune-to-Jejuri-Cab" element={<Puunetojejuricab />} />
<Route path="/Pune-Darshan-Package" element={<Punedarshanpackage />} />
<Route path="/Pune-to-Indore-Cab" element={<Punnetoindorecab />} />
<Route path="/Pune-to-Gujarat-Cab" element={<Punetogujratcab />} />
<Route path="/Pune-to-Rajasthan-Cab" element={<Punetorajthancab />} />
<Route path="/Pune-to-Bangalore-Cab" element={<Punetobanglorecab />} />
<Route path="/Pune-to-Shirdi-Cab" element={<Punetoshirdicab />} />
<Route path="/Book-taxi-in-Pune" element={<Booktaxiinpune />} />
<Route path="/Pune-to-Mahabaleshwar-Taxi" element={<Punetomahabaleshwar />} />
<Route path="/Pune-to-Goa-Cab" element={<Punetogoacaab />} />
<Route path="/Pune-to-Mumbai-Cab" element={<Punetomumbaicab />} />
<Route path="/Pune-to-Aurangabad-Cab" element={<Punetoaurangabadcab />} />
<Route path="/Corporate-Cab-Services-in-Pune" element={<Croporatecabserviceinpune />} />
<Route path="/Wedding-Car-Rental-Pune" element={<Weddingcarrenttalpune />} />
<Route path="/Cab-Service-in-Pimpri-Chinchwad" element={<Cabserviceinpimprichichwad />} />
<Route path="/Pan-India-Bus-Cab-Service-Pune" element={<Panindiabusandcab />} />
<Route path="/Pune-to-Mysore-Ooty-Bus-Tour-Package" element={<Punetomysoreooty />} />
<Route path="/Pune-to-Madhya-Pradesh-Bus-for-Trip" element={<Punetomadhyapradesh />} />
<Route path="/Bus-On-Rent-Pune" element={<Busonrentpune />} />

<Route path="/Pune-Bus-Hire" element={<Punebushire />} />
<Route path="/Bus-Hire-in-Pune" element={<Bushireinpune />} />
<Route path="/Bus-Service-Pune" element={<Busservicepune />} />
<Route path="/Rent-a-Bus-Pune" element={<Rentabuspune />} />
<Route path="/40-Seater-Bus-On-Rent-in-Pune" element={<Fourzeroseaterbus />} />
<Route path="/25-Seater-Bus-On-Rent-in-Pune" element={<Twofiveseaterbusonrent />} />
<Route path="/Mini-Bus-Rental-Pune" element={<Minibusrentalpune />} />
<Route path="/Urbania-On-Rent-in-Pune" element={<Urbaniaonrentinpune />} />
<Route path="/Urbania-On-Rent-Pune" element={<Urbaniaonrentpune />} />
<Route path="/Tempo-Traveller-Rental-Pune" element={<Tempotravellerrentalpune />} />
<Route path="/Bus-Rentals-for-Corporate-Events" element={<Busrentalforcorporateevets />} />
<Route path="/20-Seater-Tempo-Traveller-On-Rent-in-Pune" element={<Twozeroseatertempo />} />
<Route path="/26-Seater-Bus-On-Rent-in-Pune" element={<Twosixseaterbus />} />
<Route path="/Urbania-On-Rent-in-Pimpri-Chinchwad" element={<Urbaniaonrentpipri />} />
<Route path="/Innova-Crysta-On-Rent-in-Pune" element={<Innovacrystaonrentpune />} />
<Route path="/Mini-Bus-Hire-in-Pune" element={<Minibushirepune />} />
<Route path="/Tempo-Traveller-On-Rent-in-Pimpri-Chinchwad" element={<Tempootravelleronrent />} />
<Route path="/Bus-Rental-for-Corporate-Events-in-Pune" element={<Busrentalforcorporateevetsinpune />} />
<Route path="/Wedding-Bus-Rental-Services-in-Pune" element={<Weddingbusrental />} />
<Route path="/Bus-Rental-Pune" element={<Busrentalpune />} />
<Route path="/Mini-Bus-Rentals-Pune" element={<Minibusrentalpunee />} />
<Route path="/Innova-On-Rent-in-Pune" element={<Innovaonrentinpune />} />


<Route path="/Urbania-Hire-for-Corporate-Events-in-Pune" element={<Urbaniahireforcorporateeverts />} />
<Route path="/17-Seater-Urbania-on-Rent-in-Pune" element={<Onesevanseaterurbania />} />
<Route path="/14-Seater-Urbania-on-Rent-in-Pune" element={<Onefourseater />} />
<Route path="/Urbania-on-Rent-in-Kharadi" element={<Urbaniaonrentinkharadi />} />
<Route path="/Urbania-on-Rent-in-Hadapsar" element={<Urbaniaonrentinhadapsar />} />
<Route path="/Urbania-on-Rent-in-Kothrud" element={<Urbaniaonrentinkothrud />} />
<Route path="/Urbania-on-Rent-in-Koregaon-Park" element={<Urbaniaonrentinkoregaon />} />
<Route path="/Urbania-for-Wedding-Events-in-Pune" element={<Urbaniaforwedding />} />
<Route path="/Urbania-for-Pune-to-Mahabaleshwar-Hire" element={<Urbaniaforpune />} />
<Route path="/Urbania-for-Pune-to-Goa-Tour-Package" element={<Urbaniaforpunetogoa />} />
<Route path="/Pune-to-Shirdi-Urbania-On-Rent" element={<Punetoshirdiurbania />} />
<Route path="/Luxury-Force-Urbania-On-Rent-in-Pune" element={<Luxuryforceurbania />} />
<Route path="/Urbania-Hire-for-Picnic-in-Pune" element={<Urbaniahireforpicnic />} />

      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
