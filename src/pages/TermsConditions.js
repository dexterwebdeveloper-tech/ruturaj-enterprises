import React from "react";
import { Helmet } from "react-helmet";
import "../css/TermsConditions.css";

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>Ruturaj Enterprises | Terms & Conditions</title>

        <meta
          name="description"
          content="Terms & Conditions for Ruturaj Enterprises including cab services, taxi booking, local rides, airport transfers, outstation trips, tempo traveller rentals, bus rentals, and corporate travel."
        />
      </Helmet>

      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/img/bg/breadcrumb-bg.jpg')",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 1,
          }}
        ></div>

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
                      Terms & Conditions
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <section className="terms-section">
        <div className="container">
          <div className="row g-0">

            <img
              src="/images/term.webp"
              alt="Terms and Conditions - Ruturaj Enterprises"
            />

            <div className="col-md-12">
              <div className="terms-content">

                <p>
                  <b className="highlight">1. Booking Confirmation:</b>
                  <br />
                  All bookings with Ruturaj Enterprises are subject to vehicle
                  availability. A booking is confirmed only after receiving
                  confirmation from our booking team or support team.
                </p>

                <p>
                  <b className="highlight">2. Service Usage:</b>
                  <br />
                  Ruturaj Enterprises provides transportation services for
                  passengers. Carrying illegal, hazardous, or restricted items
                  is strictly prohibited.
                </p>

                <p>
                  <b className="highlight">3. Payment Policy:</b>
                  <br />
                  Payments may be made through available payment methods
                  including UPI, cards, net banking, wallets, or cash.
                  Advance payment may be required for certain airport,
                  outstation, rental, group travel, or special bookings.
                </p>

                <p>
                  <b className="highlight">4. Cancellation & Rescheduling:</b>
                  <br />
                  Customers should request cancellations or rescheduling as
                  early as possible. Cancellation or rescheduling charges may
                  apply depending on the booking type and timing.
                </p>

                <p>
                  <b className="highlight">5. Customer Responsibility:</b>
                  <br />
                  Customers are responsible for providing accurate pickup,
                  drop-off, travel date, passenger, and contact information.
                  Incorrect or incomplete information may result in delays,
                  additional charges, or difficulties in providing the service.
                </p>

                <p>
                  <b className="highlight">6. Seating & Luggage:</b>
                  <br />
                  Passengers must not exceed the permitted seating capacity of
                  the selected vehicle. Luggage should be within the available
                  vehicle capacity. Excess luggage may require a larger vehicle
                  or may result in additional charges.
                </p>

                <p>
                  <b className="highlight">7. Driver Duty Hours:</b>
                  <br />
                  Driver working hours are subject to applicable transportation
                  rules and safety requirements. Long-distance or multi-day
                  journeys may include additional driver allowance or related
                  charges.
                </p>

                <p>
                  <b className="highlight">8. Safety Guidelines:</b>
                  <br />
                  Passengers must follow applicable safety instructions and
                  should not damage, misuse, or interfere with the operation of
                  the vehicle.
                </p>

                <p>
                  <b className="highlight">9. Right to Refuse Service:</b>
                  <br />
                  Ruturaj Enterprises reserves the right to refuse or terminate
                  a service in cases involving unsafe conditions, abusive
                  behavior, illegal activities, harassment, or behavior that
                  may put the driver, passengers, or vehicle at risk.
                </p>

                <p>
                  <b className="highlight">10. Fare Policy:</b>
                  <br />
                  Fare estimates may vary depending on the selected vehicle,
                  distance, route, waiting time, toll charges, parking fees,
                  state taxes, route changes, additional stops, or other
                  customer requests.
                </p>

                <p>
                  <b className="highlight">11. Jurisdiction:</b>
                  <br />
                  Any disputes relating to the services provided by Ruturaj
                  Enterprises will be subject to the applicable jurisdiction of
                  Pune, Maharashtra, unless otherwise required by applicable law.
                </p>

                {/* Rental Policy */}
                <h3>Rental Policy</h3>

                <p>
                  <b className="highlight">Services Offered:</b>
                  <br />
                  Ruturaj Enterprises provides cab and taxi services, local
                  rides, airport transfers, outstation trips, sightseeing
                  services, tempo traveller rentals, bus rentals, corporate
                  travel, and customized transportation solutions.
                </p>

                <p>
                  <b className="highlight">Vehicle Allocation:</b>
                  <br />
                  Vehicles are assigned according to availability and booking
                  requirements. In certain situations, an equivalent or
                  upgraded vehicle may be provided.
                </p>

                <p>
                  <b className="highlight">Toll, Parking & Taxes:</b>
                  <br />
                  Toll charges, parking fees, state taxes, permits, and other
                  applicable charges are payable by the customer unless
                  specifically included in the agreed package or quotation.
                </p>

                <p>
                  <b className="highlight">Minimum Running:</b>
                  <br />
                  For applicable daily rental and outstation bookings, a
                  minimum running of 300 kilometers per day may apply. The
                  applicable minimum kilometers and fare will be communicated
                  at the time of booking.
                </p>

                <p>
                  <b className="highlight">Driver Food & Allowance:</b>
                  <br />
                  Driver food, daily allowance, or overnight charges may be
                  applicable for outstation and multi-day trips unless
                  specifically included in the agreed package.
                </p>

                <p>
                  <b className="highlight">Night Charges:</b>
                  <br />
                  Additional charges may apply for rides or services during
                  late-night or early-morning hours, depending on the trip and
                  vehicle type.
                </p>

                {/* Refund Policy */}
                <h3>Refund Policy</h3>

                <p>
                  <b className="highlight">Refund Eligibility:</b>
                  <br />
                  Refund eligibility depends on the cancellation time, booking
                  type, payment terms, and applicable cancellation policy.
                </p>

                <p>
                  <b className="highlight">Processing Time:</b>
                  <br />
                  Approved refunds are generally processed within 5–7 business
                  days, subject to the payment method and banking process.
                </p>

                <p>
                  <b className="highlight">Non-Refundable Charges:</b>
                  <br />
                  Certain convenience fees, advance booking charges,
                  promotional offers, or other specified charges may be
                  non-refundable.
                </p>

                <p>
                  <b className="highlight">No-Show Policy:</b>
                  <br />
                  Refunds may not be provided for missed pickups or no-shows,
                  depending on the booking terms and vehicle allocation.
                </p>

              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Ruturaj Enterprises</h2>

            <p>
              For booking support, cancellation requests, or any queries,
              please contact Ruturaj Enterprises:
            </p>

            <ul>
              <li>
                <b>Phone:</b>{" "}
                <a href="tel:+919763381382">
                  +91 9763381382
                </a>
              </li>

             <li>
                <b>Email:</b>{" "}
                <a href="mailto:booking@ruturajenterprises.com">
                  booking@ruturajenterprises.com
                </a>
              </li>

               <li>
                <b>Address:</b>
                <br />
                Ruturaj Enterprises,<br />
                Nandini Takle Nagar, <br />Pune - Solapur Road Manjri <br />Bk Hadapsar, Pune, Maharashtra 412307


              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
