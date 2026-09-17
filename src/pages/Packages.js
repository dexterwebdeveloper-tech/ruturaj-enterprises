
import React from 'react';
import BusRatesTable from './BusRatesTable';


const Packages = () => {
  return (
   <div>

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
                    Packages
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



 

       



    {/* <CabRatesTable/> */}
<BusRatesTable/>

<div
  className="rules-guidelines container my-5"
  style={{
    maxWidth: "1000px",
  }}
>
  <div
    style={{
      background: "#fff",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
      border: "1px solid #e8e8e8",
    }}
  >
    {/* Header */}
    <div
      style={{
        background:
          "linear-gradient(135deg, #1E355E 0%, #294A82 50%, #F47C20 100%)",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#fff",
          margin: 0,
          fontWeight: "700",
          letterSpacing: "0.5px",
        }}
      >
        <i className="fas fa-clipboard-list me-2"></i>
        Rules & Guidelines
      </h2>

      <p
        style={{
          color: "#f5f5f5",
          marginTop: "8px",
          marginBottom: 0,
        }}
      >
        Please read the following terms before booking.
      </p>
    </div>

    {/* Body */}
    <div
      style={{
        padding: "35px",
        background: "#fff",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {[
  "Full tolls, parking charges, passenger tax, GST, and the cost of special permits are to be paid by the party.",
  
  "Taxes applicable in other states outside Maharashtra are to be paid by the party as per the respective state rules.",
  
  "The time and meter readings for parking will be noted before and after the journey.",
  
  "For a trip, the average daily distance allowed is 300 km. Different rates may apply for the Mumbai-Mahabaleshwar route, where the Mumbai package allows up to 350 km per day.",
  
  "A list of passengers' names and travel destinations must be provided and submitted to our office at least four days before departure.",
  
  "The bus service will be available from 6:00 AM to 12:00 midnight.",
  
  "If bus usage extends beyond 12:00 midnight, an additional charge of ₹400 per subsequent hour will apply until 2:00 AM. After 2:00 AM, the full 300 km rate will be charged for the next day.",
  
  "For the use of air conditioning in the bus, an additional charge of ₹500 per hour will apply.",
  
  "At the time of booking, 50% of the total amount along with the security deposit must be paid at least 2 days before the trip.",
  
  "In case of sudden cancellation of the booking, 50% of the total booking amount will be charged as a cancellation fee.",
  
  "The quoted rates are based on the current diesel price of ₹100 per litre and are subject to change according to prevailing RTO taxes and applicable government regulations.",
  
  "Bus toll charges will be deducted through FASTag, and the entire applicable toll amount must be paid by the party at the time of final payment.",
  
  "We strive to provide the best service with clean and well-maintained vehicles and responsible drivers. Drivers are strictly expected not to consume alcohol while on duty. For any complaint regarding the driver or service, please contact us immediately at +91 9763381382.",
  
  "There are no hidden or additional charges apart from the charges mentioned above and applicable government taxes."

        ].map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "15px",
              padding: "16px 0",
              borderBottom:
                index !== 6 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <div
              style={{
                minWidth: "35px",
                height: "35px",
                borderRadius: "50%",
                background: "#F47C20",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              {index + 1}
            </div>

            <span
              style={{
                color: "#333",
                fontSize: "16px",
                lineHeight: "28px",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Footer */}
    <div
      style={{
        background: "#f8f9fb",
        padding: "18px",
        textAlign: "center",
        borderTop: "1px solid #eee",
      }}
    >
      <span
        style={{
          color: "#1E355E",
          fontWeight: "600",
        }}
      >
        🚖 Risinng Cab – Safe, Reliable & Affordable Travel
      </span>
    </div>
  </div>
</div>

   </div>
  );
};

export default Packages;
