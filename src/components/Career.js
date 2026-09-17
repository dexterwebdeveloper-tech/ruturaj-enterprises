



// import React from "react";
// import { FaCar, FaUserTie, FaHandshake, FaHeadset, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const Career = () => {
//   return (
//     <>
//       {/* Breadcrumb */}


//           <div
//       className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
//       style={{ backgroundImage: "url('/img/bg/9.jpg')" }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
//               <div className="section-title-area ltn__section-title-2">
//                 <h6 className="section-subtitle ltn__secondary-color">
//                   // Welcome to Ruturaj Enterprises
//                 </h6>

//                 <h1 className="section-title white-color">
//                   Career
//                 </h1>
//               </div>

            
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//       {/* Career Section */}
//       <section className="career-section">
//         <div className="career-container">

//           {/* Header */}
//           <div className="career-header">
//             <h2>
//               Career at <span>Shambhu Cabs</span>
//             </h2>
//             <p>
//               Join Shambhu Cabs as a Partner, Driver, Agent, or Back Office
//               professional and grow with a trusted cab service brand.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="career-grid">

//             {/* Partner */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaHandshake />
//               </div>
//               <h4>Business Partner</h4>
//               <p>
//                 Partner with Shambhu Cabs and expand your transport business
//                 with guaranteed support and growth opportunities.
//               </p>
//               <ul>
//                 <li>Fleet Partnership</li>
//                 <li>Long-Term Association</li>
//                 <li>High Revenue Potential</li>
//               </ul>
//             </div>

//             {/* Driver */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaCar />
//               </div>
//               <h4>Driver Partner</h4>
//               <p>
//                 Drive with Shambhu Cabs and earn a stable income with flexible
//                 working hours.
//               </p>
//               <ul>
//                 <li>Valid Driving License</li>
//                 <li>Commercial Vehicle</li>
//                 <li>Daily / Monthly Earnings</li>
//               </ul>
//             </div>

//             {/* Agent */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaUserTie />
//               </div>
//               <h4>Booking Agent</h4>
//               <p>
//                 Work as a booking agent and manage customer inquiries,
//                 reservations, and coordination.
//               </p>
//               <ul>
//                 <li>Attractive Commission</li>
//                 <li>Booking Management</li>
//                 <li>Work from Office / Remote</li>
//               </ul>
//             </div>

//             {/* Back Office */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaHeadset />
//               </div>
//               <h4>Back Office Executive</h4>
//               <p>
//                 Handle backend operations including bookings, billing, and
//                 customer support.
//               </p>
//               <ul>
//                 <li>Office-Based Job</li>
//                 <li>Day / Night Shifts</li>
//                 <li>Career Growth</li>
//               </ul>
//             </div>

//           </div>

//           {/* Contact Section */}
//           <div className="career-contact">
//             <h3>Contact for Career Opportunities</h3>
//             <p>
//               <FaPhoneAlt />{" "}
//               <a href="tel:+919819399797">+91 9819399797</a>
//             </p>
//             <p>
//               <FaEnvelope />{" "}
//               <a href="mailto:booking@shambhucab.com">
//                 booking@shambhucab.com
//               </a>
//             </p>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Career;


import React, { useState } from "react";
import {
  FaCar,
  FaUserTie,
  FaHandshake,
  FaHeadset,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
*Career Application - Ruturaj Enterprises*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Position: ${formData.position}
Experience: ${formData.experience}

Message:
${formData.message}
    `;

    const whatsappUrl = `https://wa.me/919763381382?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2
        ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        style={{ backgroundImage: "url('/img/bg/9.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ruturaj-orange">
                    // Welcome to Ruturaj Enterprises
                  </h6>

                  <h1 className="section-title white-color">
                    Career
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <section className="career-section">
        <div className="career-container">

          {/* Logo */}
          
          {/* Header */}
          <div className="career-header">
            <span className="career-small-title">
              JOIN OUR TEAM
            </span>

            <h2>
              Career at <span>Ruturaj Enterprises</span>
            </h2>

            <p>
              Build your career with Ruturaj Enterprises. We are always
              looking for dedicated, hardworking and talented people to join
              our growing team.
            </p>
          </div>

          {/* Career Cards */}
          <div className="career-grid">

            {/* Business Partner */}
            <div className="career-card">
              <div className="career-icon">
                <FaHandshake />
              </div>

              <h4>Business Partner</h4>

              <p>
                Join hands with Ruturaj Enterprises and grow your business
                with our trusted brand and professional support.
              </p>

              <ul>
                <li>
                  <FaCheckCircle /> Business Partnership
                </li>
                <li>
                  <FaCheckCircle /> Long-Term Association
                </li>
                <li>
                  <FaCheckCircle /> Growth Opportunities
                </li>
              </ul>
            </div>

            {/* Driver */}
            <div className="career-card">
              <div className="career-icon">
                <FaCar />
              </div>

              <h4>Driver Partner</h4>

              <p>
                Become a driver partner with Ruturaj Enterprises and enjoy
                reliable work opportunities and attractive earnings.
              </p>

              <ul>
                <li>
                  <FaCheckCircle /> Valid Driving License
                </li>
                <li>
                  <FaCheckCircle /> Commercial Vehicle
                </li>
                <li>
                  <FaCheckCircle /> Stable Income
                </li>
              </ul>
            </div>

            {/* Agent */}
            <div className="career-card">
              <div className="career-icon">
                <FaUserTie />
              </div>

              <h4>Booking Agent</h4>

              <p>
                Manage customer bookings, inquiries and coordination while
                building valuable experience with our team.
              </p>

              <ul>
                <li>
                  <FaCheckCircle /> Attractive Commission
                </li>
                <li>
                  <FaCheckCircle /> Customer Handling
                </li>
                <li>
                  <FaCheckCircle /> Flexible Opportunities
                </li>
              </ul>
            </div>

            {/* Back Office */}
            <div className="career-card">
              <div className="career-icon">
                <FaHeadset />
              </div>

              <h4>Back Office Executive</h4>

              <p>
                Support our daily operations by handling customer support,
                documentation, bookings and administrative activities.
              </p>

              <ul>
                <li>
                  <FaCheckCircle /> Office-Based Job
                </li>
                <li>
                  <FaCheckCircle /> Customer Support
                </li>
                <li>
                  <FaCheckCircle /> Career Growth
                </li>
              </ul>
            </div>

          </div>

          {/* Application Form */}
          <div className="career-application">

            <div className="application-heading">
              <span>APPLY NOW</span>
              <h3>Join Ruturaj Enterprises</h3>
              <p>
                Fill in your details and our team will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Apply For *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Position</option>
                    <option value="Business Partner">
                      Business Partner
                    </option>
                    <option value="Driver Partner">
                      Driver Partner
                    </option>
                    <option value="Booking Agent">
                      Booking Agent
                    </option>
                    <option value="Back Office Executive">
                      Back Office Executive
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label>Experience</label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Example: 2 Years"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us something about yourself..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="career-submit-btn">
                Submit Application
                <FaPhoneAlt />
              </button>

              <p className="whatsapp-note">
                Your application will be sent directly to
                <strong> +91 9763381382</strong>.
              </p>

            </form>
          </div>

          {/* Contact Section */}
          <div className="career-contact">

            <div>
              <h3>Have Questions?</h3>
              <p>
                Contact our team for career opportunities at Ruturaj
                Enterprises.
              </p>
            </div>

            <div className="career-contact-details">
              <a href="tel:+919763381382">
                <FaPhoneAlt />
                +91 9763381382
              </a>

              <a href="mailto:info@ruturajenterprises.com">
                <FaEnvelope />
                Contact Us
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Career;
