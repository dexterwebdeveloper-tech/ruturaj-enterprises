// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isSearchOpen] = useState(false);

//   const location = useLocation();

//   // Close mobile menu whenever route changes
//   useEffect(() => {
//     setIsNavOpen(false);
//   }, [location]);

//   const closeMenu = () => {
//     setIsNavOpen(false);
//   };

//   return (
//     <header>
//       {/* Header Top */}
//       <div className="header-top bgg-darkk">
//         <div className="container">
//           <div className="row justify-content-center justify-content-xl-between align-items-center">
//             <div className="col-auto">
//               <div className="header-top-contact">
//                 <ul className="anchor d-md-flex align-items-center">
//                   <li className="px-md-5 fw-bold">
//                     <a
//                       className="text-white"
//                       href="tel:+919763381382"
//                     >
//                       <i className="fas fa-phone-volume text-white"></i>{" "}
//                       +91 9763381382
//                     </a>
//                   </li>


                 

//                   <li className="px-md-5">
//                     <a
//                       className="text-white"
//                       href="mailto:booking@ruturajenterprises.com"
//                     >
//                       <i className="far fa-envelope text-white"></i>
//                       <span className="text-white fw-bold">
//                         {" "}
//                         booking@ruturajenterprises.com
//                       </span>
//                     </a>
//                   </li>

//                   <li className="d-flex gap-3">
//                     <a
//                       href="https://www.instagram.com/ruturajenterprises29/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-instagram text-white"></i>
//                     </a>

//                     <a
//                       href="https://www.facebook.com/profile.php?id=61593885995168"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-facebook-f text-white"></i>
//                     </a>

//                     <a
//                       href="https://x.com/ruturaj_travels"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-twitter text-white"></i>
//                     </a>

//                     <a
//                       href="https://in.pinterest.com/ruturajenterprises/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-pinterest-p text-white"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="main-navigation">
//         <Navbar
//           expand="lg"
//           expanded={isNavOpen}
//           onToggle={(expanded) => setIsNavOpen(expanded)}
//         >
//           <Container>
//             <Link to="/" onClick={closeMenu}>
//               <img
//                 src="/images/logo.webp"
//                 className="logoo"
//                 alt="logo"
//               />
//             </Link>

          

//             <Navbar.Toggle aria-controls="main_nav">
//               <i className="fas fa-bars darkcolorr"></i>
//             </Navbar.Toggle>

//             <Navbar.Collapse id="main_nav">
//               <Nav className="mx-auto">

//                 <Nav.Link
//                   as={Link}
//                   to="/"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </Nav.Link>

//                 <NavDropdown
//                   title="About Us"
//                   id="about-us-dropdown"
//                   className="fw-bold"
//                 >
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/about-us"
//                     onClick={closeMenu}
//                   >
//                     About Us
//                   </NavDropdown.Item>

//                   <NavDropdown.Item
//                     as={Link}
//                     to="/term-condition"
//                     onClick={closeMenu}
//                   >
//                     Term & Condition
//                   </NavDropdown.Item>

//                   <NavDropdown.Item
//                     as={Link}
//                     to="/privacy-policy"
//                     onClick={closeMenu}
//                   >
//                     Privacy Policy
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 <Nav.Link
//                   as={Link}
//                   to="/services"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                   Services
//                 </Nav.Link>

//                 <Nav.Link
//                   as={Link}
//                   to="/our-fleet"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                   Our Fleet
//                 </Nav.Link>

//                 <Nav.Link
//                   as={Link}
//                   to="/packages"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                   Packages
//                 </Nav.Link>

//     {/* <NavDropdown title="Mumbai Airport" id="contact-dropdown" className='fw-bold'>
                  
//                   <NavDropdown.Item href="/Mumbai-Airport-Cab-Service" className='fw-bold'>Mumbai Airport Cabs</NavDropdown.Item>
//                   <NavDropdown.Item href="/Navi-Mumbai-Airport-Cab" className='fw-bold nav-item'>Navi Mumbai Airport Cab</NavDropdown.Item>
//                 </NavDropdown> */}

//                 {/* <Nav.Link
//                   as={Link}
//                   to="/our-network"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                   Our Network
//                 </Nav.Link> */}

//                 <Nav.Link
//                   as={Link}
//                   to="/booking"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                 Online Booking
//                 </Nav.Link>

//                 <Nav.Link
//                   as={Link}
//                   to="/gallery"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                   Gallery
//                 </Nav.Link>

//                 <Nav.Link
//                   as={Link}
//                   to="/career"
//                   className="fw-bold nav-item"
//                   onClick={closeMenu}
//                 >
//                   Career
//                 </Nav.Link>

//                 <NavDropdown
//                   title="Contact Us"
//                   id="contact-dropdown"
//                   className="fw-bold "
//                 >
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/contact-us"
//                     onClick={closeMenu}
//                   >
//                     Contact Us
//                   </NavDropdown.Item>

//                   <NavDropdown.Item
//                     as={Link}
//                     to="/enquiry"
//                     onClick={closeMenu}
//                   >
//                     Enquiry
//                   </NavDropdown.Item>
//                 </NavDropdown>

//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>

//       {/* Search Area */}
//       {isSearchOpen && (
//         <div className="search-area">
//           <form action="#">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type Keyword..."
//               />

//               <button
//                 type="submit"
//                 className="search-icon-btn"
//               >
//                 <i className="far fa-search"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  // WhatsApp Booking
  const whatsappNumber = "919763381382";

  const whatsappMessage =
    "Hello Ruturaj Enterprises Team, I want to book a vehicle for my upcoming trip. Please share vehicle availability, rate details and booking information. Thank you!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <header>

      {/* ================= HEADER TOP ================= */}
      <div className="header-top bgg-darkk">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">

            <div className="col-auto">
              <div className="header-top-contact">

                <ul className="anchor d-md-flex align-items-center">

                  {/* Phone */}
                  <li className="px-md-5 fw-bold">
                    <a
                      className="text-white"
                      href="tel:+919763381382"
                    >
                      <i className="fas fa-phone-volume text-white"></i>{" "}
                      +91 9763381382
                    </a>
                  </li>

                  {/* Email */}
                  <li className="px-md-5">
                    <a
                      className="text-white"
                      href="mailto:booking@ruturajenterprises.com"
                    >
                      <i className="far fa-envelope text-white"></i>

                      <span className="text-white fw-bold">
                        {" "}
                        booking@ruturajenterprises.com
                      </span>
                    </a>
                  </li>

                  {/* Social Media */}
                  <li className="d-flex gap-3">

                    <a
                      href="https://www.instagram.com/ruturajenterprises29/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram text-white"></i>
                    </a>

                    <a
                      href="https://www.facebook.com/profile.php?id=61593885995168"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>

                    <a
                      href="https://x.com/ruturaj_travels"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter text-white"></i>
                    </a>

                    <a
                      href="https://in.pinterest.com/ruturajenterprises/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-pinterest-p text-white"></i>
                    </a>

                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ================= MAIN NAVIGATION ================= */}

      <div className="main-navigation">

        <Navbar
          expand="lg"
          expanded={isNavOpen}
          onToggle={(expanded) => setIsNavOpen(expanded)}
        >

          <Container>

            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
              <img
                src="/images/logo.webp"
                className="logoo"
                alt="Ruturaj Enterprises"
              />
            </Link>


            {/* Mobile Toggle */}
            <Navbar.Toggle aria-controls="main_nav">
              <i className="fas fa-bars darkcolorr"></i>
            </Navbar.Toggle>


            <Navbar.Collapse id="main_nav">

              <Nav className="mx-auto">

                {/* Home */}
                <Nav.Link
                  as={Link}
                  to="/"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Home
                </Nav.Link>


                {/* About */}
                <NavDropdown
                  title="About Us"
                  id="about-us-dropdown"
                  className="fw-bold"
                >

                  <NavDropdown.Item
                    as={Link}
                    to="/about-us"
                    onClick={closeMenu}
                  >
                    About Us
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/term-condition"
                    onClick={closeMenu}
                  >
                    Term & Condition
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/privacy-policy"
                    onClick={closeMenu}
                  >
                    Privacy Policy
                  </NavDropdown.Item>

                </NavDropdown>


                {/* Services */}
                <Nav.Link
                  as={Link}
                  to="/services"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Services
                </Nav.Link>


                {/* Fleet */}
                <Nav.Link
                  as={Link}
                  to="/our-fleet"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Our Fleet
                </Nav.Link>


                {/* Packages */}
                <Nav.Link
                  as={Link}
                  to="/packages"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Packages
                </Nav.Link>


                {/* Online Booking */}
                <Nav.Link
                  as={Link}
                  to="/booking"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Online Booking
                </Nav.Link>


                {/* Gallery */}
                <Nav.Link
                  as={Link}
                  to="/gallery"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Gallery
                </Nav.Link>


                {/* Career */}
                {/* <Nav.Link
                  as={Link}
                  to="/career"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Career
                </Nav.Link> */}





                {/* Contact */}
                <NavDropdown
                  title="Contact Us"
                  id="contact-dropdown"
                  className="fw-bold"
                >

                  <NavDropdown.Item
                    as={Link}
                    to="/contact-us"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </NavDropdown.Item>

                  
                  <NavDropdown.Item
                    as={Link}
                    to="/career"
                    onClick={closeMenu}
                  >
                    Career
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/enquiry"
                    onClick={closeMenu}
                  >
                    Enquiry
                  </NavDropdown.Item>

                </NavDropdown>

              </Nav>


              {/* ================= WHATSAPP BOOK NOW ================= */}

            <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="header-book-now-btn"
>
  BOOK NOW
  <i className="far fa-paper-plane"></i>
</a>
            </Navbar.Collapse>

          </Container>

        </Navbar>

      </div>


      {/* ================= SEARCH AREA ================= */}

      {isSearchOpen && (

        <div className="search-area">

          <form action="#">

            <div className="form-group">

              <input
                type="text"
                className="form-control"
                placeholder="Type Keyword..."
              />

              <button
                type="submit"
                className="search-icon-btn"
              >
                <i className="far fa-search"></i>
              </button>

            </div>

          </form>

        </div>

      )}

    </header>
  );
};

export default Header;