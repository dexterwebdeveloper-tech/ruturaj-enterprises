






// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const BusRatesTable = () => {
//   const whatsappNumber = "919763381382";

//   const outstationRates = [
//     {
//       vehicle: "Aura / Dzire",
//       perKm: "₹12",
//       minAvg: "300 Km",
//       extraKm: "₹12",
//       toll: "Extra",
//       da: "₹300",
//     },
//     {
//       vehicle: "Ertiga",
//       perKm: "₹15",
//       minAvg: "300 Km",
//       extraKm: "₹15",
//       toll: "Extra",
//       da: "₹300",
//     },
//     {
//       vehicle: "Innova Crysta",
//       perKm: "₹20",
//       minAvg: "300 Km",
//       extraKm: "₹20",
//       toll: "Extra",
//       da: "₹300",
//     },
//     {
//       vehicle: "Innova Hycross",
//       perKm: "₹22",
//       minAvg: "300 Km",
//       extraKm: "₹22",
//       toll: "Extra",
//       da: "₹300",
//     },
 
//   ];

//   const localCharges = [
//     {
//       vehicle: "Aura / Dzire",
//       package: "8 Hrs / 80 Km",
//       price: "₹2400",
//       extraKm: "₹14",
//     },
//     {
//       vehicle: "Ertiga",
//       package: "8 Hrs / 80 Km",
//       price: "₹3200",
//       extraKm: "₹16",
//     },
//     {
//       vehicle: "Innova Crysta",
//       package: "8 Hrs / 80 Km",
//       price: "₹4500",
//       extraKm: "₹22",
//     },
//     {
//       vehicle: "Innova Hycross",
//       package: "8 Hrs / 80 Km",
//       price: "₹5000",
//       extraKm: "₹24",
//     },
//   ];

//   const pickupDropCharges = [
//     {
//       vehicle: "Aura / Dzire",
//       charge: "₹2800",
//       details: "Toll Included",
//     },
//     {
//       vehicle: "Ertiga",
//       charge: "₹3500",
//       details: "Toll Included",
//     },
//     {
//       vehicle: "Innova Crysta",
//       charge: "₹5000",
//       details: "Toll Included",
//     },
//     {
//       vehicle: "Innova Hycross",
//       charge: "₹6000",
//       details: "Toll Included",
//     },
//   ];

//   const handleWhatsAppClick = (vehicle) => {
//     const message = `Hello Rising Cab Service, I would like to book ${vehicle}. Please share availability and pricing details.`;

//     window.open(
//       `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   const cardStyle = {
//     background: "#fff",
//     borderRadius: "20px",
//     overflow: "hidden",
//     boxShadow: "0 10px 35px rgba(0,0,0,.08)",
//     marginBottom: "35px",
//   };

//   const headerStyle = {
//     background: "linear-gradient(135deg,#0A2F66,#FF681A)",
//     color: "#fff",
//     padding: "16px 20px",
//     fontSize: "22px",
//     fontWeight: "700",
//   };

//   const bookBtn = {
//     background: "#25D366",
//     color: "#fff",
//     border: "none",
//     padding: "8px 18px",
//     borderRadius: "30px",
//     cursor: "pointer",
//     fontWeight: "600",
//   };

//   return (
//     <div className="container my-5">
//       {/* OUTSTATION CHARGES */}

//       <div style={cardStyle}>
//         <div style={headerStyle}>
//           🚖 Outstation Per KM Charges
//         </div>

//         <div className="table-responsive">
//           <table className="table mb-0 align-middle">
//             <thead>
//               <tr>
//                 <th>Vehicle</th>
//                 <th>Per KM</th>
//                 <th>Min Avg / Day</th>
//                 <th>Extra KM</th>
//                 <th>Toll Tax</th>
//                 <th>DA</th>
//                 <th>Book</th>
//               </tr>
//             </thead>

//             <tbody>
//               {outstationRates.map((item, index) => (
//                 <tr key={index}>
//                   <td className="fw-bold">{item.vehicle}</td>

//                   <td
//                     className="fw-bold"
//                     style={{ color: "#FF681A" }}
//                   >
//                     {item.perKm}
//                   </td>

//                   <td>{item.minAvg}</td>

//                   <td>{item.extraKm}</td>

//                   <td>{item.toll}</td>

//                   <td>{item.da}</td>

//                   <td>
//                     <button
//                       style={bookBtn}
//                       onClick={() =>
//                         handleWhatsAppClick(item.vehicle)
//                       }
//                     >
//                       Book Now
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* LOCAL CHARGES */}

//       <div style={cardStyle}>
//         <div style={headerStyle}>
//           📍 Local Charges
//         </div>

//         <div className="table-responsive">
//           <table className="table mb-0 align-middle">
//             <thead>
//               <tr>
//                 <th>Vehicle</th>
//                 <th>Package</th>
//                 <th>Price</th>
//                 <th>Extra Per KM</th>
//                 <th>Book</th>
//               </tr>
//             </thead>

//             <tbody>
//               {localCharges.map((item, index) => (
//                 <tr key={index}>
//                   <td className="fw-bold">
//                     {item.vehicle}
//                   </td>

//                   <td>{item.package}</td>

//                   <td
//                     className="fw-bold"
//                     style={{ color: "#FF681A" }}
//                   >
//                     {item.price}
//                   </td>

//                   <td>{item.extraKm}</td>

//                   <td>
//                     <button
//                       style={bookBtn}
//                       onClick={() =>
//                         handleWhatsAppClick(item.vehicle)
//                       }
//                     >
//                       Book Now
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* PICKUP DROP */}

//       <div style={cardStyle}>
//         <div style={headerStyle}>
//           🌉 Mumbai - Pune Pickup / Drop Charges
//         </div>

//         <div className="table-responsive">
//           <table className="table mb-0 align-middle">
//             <thead>
//               <tr>
//                 <th>Vehicle</th>
//                 <th>Charges</th>
//                 <th>Details</th>
//                 <th>Book</th>
//               </tr>
//             </thead>

//             <tbody>
//               {pickupDropCharges.map((item, index) => (
//                 <tr key={index}>
//                   <td className="fw-bold">
//                     {item.vehicle}
//                   </td>

//                   <td
//                     className="fw-bold"
//                     style={{
//                       color: "#FF681A",
//                       fontSize: "18px",
//                     }}
//                   >
//                     {item.charge}
//                   </td>

//                   <td>{item.details}</td>

//                   <td>
//                     <button
//                       style={bookBtn}
//                       onClick={() =>
//                         handleWhatsAppClick(item.vehicle)
//                       }
//                     >
//                       Book Now
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* NOTE */}

//       <div
//         style={{
//           background: "#FFF4EC",
//           borderLeft: "5px solid #FF681A",
//           padding: "18px",
//           borderRadius: "10px",
//         }}
//       >
//         <h6 className="mb-2">
//           Important Information
//         </h6>

//         <ul className="mb-0">
//           <li>
//             Driver allowance (DA) ₹300/day extra.
//           </li>
//           <li>
//             Toll, Parking, Permit & State Tax extra.
//           </li>
//           <li>
//             Minimum 300 Km average applicable for
//             outstation trips.
//           </li>
//           <li>
//             Local package includes 8 Hours / 80 Km.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BusRatesTable;










import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BusRatesTable = () => {
  const whatsappNumber = "919763381382";

  /* =====================================================
     CAR - OUTSTATION
  ===================================================== */

  // const outstationRates = [
  //   {
  //     vehicle: "Aura / Dzire",
  //     perKm: "₹12",
  //     minAvg: "300 Km",
  //     extraKm: "₹12",
  //     toll: "Extra",
  //     da: "₹300",
  //   },
  //   {
  //     vehicle: "Ertiga",
  //     perKm: "₹15",
  //     minAvg: "300 Km",
  //     extraKm: "₹15",
  //     toll: "Extra",
  //     da: "₹300",
  //   },
  //   {
  //     vehicle: "Innova Crysta",
  //     perKm: "₹20",
  //     minAvg: "300 Km",
  //     extraKm: "₹20",
  //     toll: "Extra",
  //     da: "₹300",
  //   },
  //   {
  //     vehicle: "Innova Hycross",
  //     perKm: "₹22",
  //     minAvg: "300 Km",
  //     extraKm: "₹22",
  //     toll: "Extra",
  //     da: "₹300",
  //   },
  // ];


  /* =====================================================
     CAR - LOCAL
  ===================================================== */

  // const localCharges = [
  //   {
  //     vehicle: "Aura / Dzire",
  //     package: "8 Hrs / 80 Km",
  //     price: "₹2400",
  //     extraKm: "₹14",
  //   },
  //   {
  //     vehicle: "Ertiga",
  //     package: "8 Hrs / 80 Km",
  //     price: "₹3200",
  //     extraKm: "₹16",
  //   },
  //   {
  //     vehicle: "Innova Crysta",
  //     package: "8 Hrs / 80 Km",
  //     price: "₹4500",
  //     extraKm: "₹22",
  //   },
  //   {
  //     vehicle: "Innova Hycross",
  //     package: "8 Hrs / 80 Km",
  //     price: "₹5000",
  //     extraKm: "₹24",
  //   },
  // ];


  /* =====================================================
     MUMBAI - PUNE PICKUP / DROP
  ===================================================== */

  // const pickupDropCharges = [
  //   {
  //     vehicle: "Aura / Dzire",
  //     charge: "₹2800",
  //     details: "Toll Included",
  //   },
  //   {
  //     vehicle: "Ertiga",
  //     charge: "₹3500",
  //     details: "Toll Included",
  //   },
  //   {
  //     vehicle: "Innova Crysta",
  //     charge: "₹5000",
  //     details: "Toll Included",
  //   },
  //   {
  //     vehicle: "Innova Hycross",
  //     charge: "₹6000",
  //     details: "Toll Included",
  //   },
  // ];


  /* =====================================================
     BUS - AC MUMBAI / MAHABALESHWAR
     DATA FROM PROVIDED RATE CHART
  ===================================================== */

  const acBusRates = [
    {
      vehicle: "13 Seater",
      mumbai: "₹9500",
      mahabaleshwar: "₹9000",
      extraKm: "₹25",
      permit: "₹800",
    },
    {
      vehicle: "17 Seater",
      mumbai: "₹10500",
      mahabaleshwar: "₹10000",
      extraKm: "₹26",
      permit: "₹800",
    },
    {
      vehicle: "20 Seater",
      mumbai: "₹11500",
      mahabaleshwar: "₹10500",
      extraKm: "₹27",
      permit: "₹800",
    },
    {
      vehicle: "26 Seater",
      mumbai: "₹15000",
      mahabaleshwar: "₹14000",
      extraKm: "₹38",
      permit: "₹1000",
    },
    {
      vehicle: "32 Seater",
      mumbai: "₹18000",
      mahabaleshwar: "₹17000",
      extraKm: "₹48",
      permit: "₹1500",
    },
    {
      vehicle: "35 Seater",
      mumbai: "₹19000",
      mahabaleshwar: "₹18000",
      extraKm: "₹50",
      permit: "₹1500",
    },
    {
      vehicle: "45 Seater",
      mumbai: "₹24000",
      mahabaleshwar: "₹22000",
      extraKm: "₹65",
      permit: "₹1500",
    },
  ];


  /* =====================================================
     BUS - NON AC MUMBAI / MAHABALESHWAR
  ===================================================== */

  const nonAcBusRates = [
    {
      vehicle: "13 Seater",
      mumbai: "₹8500",
      mahabaleshwar: "₹8000",
      extraKm: "₹21",
      permit: "₹800",
    },
    {
      vehicle: "17 Seater",
      mumbai: "₹9000",
      mahabaleshwar: "₹8500",
      extraKm: "₹22",
      permit: "₹800",
    },
    {
      vehicle: "20 Seater",
      mumbai: "₹10500",
      mahabaleshwar: "₹9500",
      extraKm: "₹24",
      permit: "₹800",
    },
    {
      vehicle: "26 Seater",
      mumbai: "₹13000",
      mahabaleshwar: "₹12000",
      extraKm: "₹34",
      permit: "₹1000",
    },
    {
      vehicle: "32 Seater",
      mumbai: "₹13500",
      mahabaleshwar: "₹12500",
      extraKm: "₹34",
      permit: "₹1500",
    },
    {
      vehicle: "35 Seater",
      mumbai: "₹14500",
      mahabaleshwar: "₹14500",
      extraKm: "₹45",
      permit: "₹1500",
    },
    {
      vehicle: "45 Seater",
      mumbai: "₹18000",
      mahabaleshwar: "₹17000",
      extraKm: "₹48",
      permit: "₹1500",
    },
  ];


  /* =====================================================
     LOCAL BUS - AC
     8 HOURS / 80 KM
  ===================================================== */

  const localAcBusRates = [
    {
      vehicle: "13 Seater",
      rate: "₹5000",
      extraKm: "₹25",
      extraHr: "₹300",
    },
    {
      vehicle: "17 Seater",
      rate: "₹5500",
      extraKm: "₹26",
      extraHr: "₹300",
    },
    {
      vehicle: "20 Seater",
      rate: "₹6000",
      extraKm: "₹27",
      extraHr: "₹300",
    },
    {
      vehicle: "26 Seater",
      rate: "₹8500",
      extraKm: "₹38",
      extraHr: "₹500",
    },
    {
      vehicle: "32 Seater",
      rate: "₹11000",
      extraKm: "₹48",
      extraHr: "₹700",
    },
    {
      vehicle: "35 Seater",
      rate: "₹12000",
      extraKm: "₹50",
      extraHr: "₹700",
    },
    {
      vehicle: "45 Seater",
      rate: "₹13500",
      extraKm: "₹65",
      extraHr: "₹1000",
    },
  ];


  /* =====================================================
     LOCAL BUS - NON AC
     8 HOURS / 80 KM
  ===================================================== */

  const localNonAcBusRates = [
    {
      vehicle: "13 Seater",
      rate: "₹4500",
      extraKm: "₹21",
      extraHr: "₹300",
    },
    {
      vehicle: "17 Seater",
      rate: "₹5500",
      extraKm: "₹22",
      extraHr: "₹300",
    },
    {
      vehicle: "20 Seater",
      rate: "₹5000",
      extraKm: "₹24",
      extraHr: "₹300",
    },
    {
      vehicle: "26 Seater",
      rate: "₹7000",
      extraKm: "₹32",
      extraHr: "₹500",
    },
    {
      vehicle: "32 Seater",
      rate: "₹5500",
      extraKm: "₹33",
      extraHr: "₹700",
    },
    {
      vehicle: "35 Seater",
      rate: "₹9000",
      extraKm: "₹44",
      extraHr: "₹700",
    },
    {
      vehicle: "45 Seater",
      rate: "₹10000",
      extraKm: "₹48",
      extraHr: "₹1000",
    },
  ];


  /* =====================================================
     WHATSAPP
  ===================================================== */

  const handleWhatsAppClick = (vehicle, service = "") => {
    const message =
      `Hello Ruturaj Enterprises, I would like to book ${vehicle}` +
      `${service ? ` for ${service}` : ""}. ` +
      `Please share availability and complete pricing details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };


  /* =====================================================
     STYLES
  ===================================================== */

  const cardStyle = {
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 30px rgba(0,0,0,.07)",
    marginBottom: "35px",
    border: "1px solid #f1ded5",
  };


  const headerStyle = {
    background:
      "linear-gradient(135deg,#df430b,#f5a623)",
    color: "#fff",
    padding: "16px 20px",
    fontSize: "20px",
    fontWeight: "700",
  };


  const bookBtn = {
    background: "#25D366",
    color: "#fff",
    border: "none",
    padding: "7px 15px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  };


  return (
    <div className="container my-5">


      {/* =================================================
          CAR OUTSTATION
      ================================================= */}

      {/* <div style={cardStyle}>

        <div style={headerStyle}>
          🚖 Outstation Per KM Charges
        </div>

        <div className="table-responsive">

          <table className="table mb-0 align-middle">

            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Per KM</th>
                <th>Min Avg / Day</th>
                <th>Extra KM</th>
                <th>Toll Tax</th>
                <th>DA</th>
                <th>Book</th>
              </tr>
            </thead>

            <tbody>

              {outstationRates.map((item, index) => (

                <tr key={index}>

                  <td className="fw-bold">
                    {item.vehicle}
                  </td>

                  <td
                    className="fw-bold"
                    style={{ color: "#df430b" }}
                  >
                    {item.perKm}
                  </td>

                  <td>{item.minAvg}</td>

                  <td>{item.extraKm}</td>

                  <td>{item.toll}</td>

                  <td>{item.da}</td>

                  <td>
                    <button
                      style={bookBtn}
                      onClick={() =>
                        handleWhatsAppClick(
                          item.vehicle,
                          "Outstation Cab"
                        )
                      }
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div> */}


      {/* =================================================
          CAR LOCAL
      ================================================= */}

      {/* <div style={cardStyle}>

        <div style={headerStyle}>
          📍 Local Car Charges – 8 Hrs / 80 KM
        </div>

        <div className="table-responsive">

          <table className="table mb-0 align-middle">

            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Package</th>
                <th>Price</th>
                <th>Extra Per KM</th>
                <th>Book</th>
              </tr>
            </thead>

            <tbody>

              {localCharges.map((item, index) => (

                <tr key={index}>

                  <td className="fw-bold">
                    {item.vehicle}
                  </td>

                  <td>{item.package}</td>

                  <td
                    className="fw-bold"
                    style={{ color: "#df430b" }}
                  >
                    {item.price}
                  </td>

                  <td>{item.extraKm}</td>

                  <td>
                    <button
                      style={bookBtn}
                      onClick={() =>
                        handleWhatsAppClick(
                          item.vehicle,
                          "Local 8 Hrs / 80 KM Package"
                        )
                      }
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div> */}


      {/* =================================================
          MUMBAI PUNE
      ================================================= */}

      {/* <div style={cardStyle}>

        <div style={headerStyle}>
          🌉 Mumbai - Pune Pickup / Drop Charges
        </div>

        <div className="table-responsive">

          <table className="table mb-0 align-middle">

            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Charges</th>
                <th>Details</th>
                <th>Book</th>
              </tr>
            </thead>

            <tbody>

              {pickupDropCharges.map((item, index) => (

                <tr key={index}>

                  <td className="fw-bold">
                    {item.vehicle}
                  </td>

                  <td
                    className="fw-bold"
                    style={{
                      color: "#df430b",
                      fontSize: "17px",
                    }}
                  >
                    {item.charge}
                  </td>

                  <td>{item.details}</td>

                  <td>
                    <button
                      style={bookBtn}
                      onClick={() =>
                        handleWhatsAppClick(
                          item.vehicle,
                          "Mumbai - Pune Pickup / Drop"
                        )
                      }
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div> */}


      {/* =================================================
          AC BUS
      ================================================= */}

      <div style={cardStyle}>

        <div style={headerStyle}>
          🚌 AC Bus Rates – Mumbai & Mahabaleshwar
        </div>

        <div className="table-responsive">

          <table className="table mb-0 align-middle">

            <thead>
              <tr>
                <th>Bus</th>
                <th>Mumbai Upto 350 KM</th>
                <th>Mahabaleshwar Upto 300 KM</th>
                <th>Extra KM</th>
                <th>Special Permit</th>
                <th>Book</th>
              </tr>
            </thead>

            <tbody>

              {acBusRates.map((item, index) => (

                <tr key={index}>

                  <td className="fw-bold">
                    {item.vehicle}
                  </td>

                  <td
                    className="fw-bold"
                    style={{ color: "#df430b" }}
                  >
                    {item.mumbai}
                  </td>

                  <td className="fw-bold">
                    {item.mahabaleshwar}
                  </td>

                  <td>{item.extraKm}</td>

                  <td>{item.permit}</td>

                  <td>
                    <button
                      style={bookBtn}
                      onClick={() =>
                        handleWhatsAppClick(
                          item.vehicle,
                          "AC Bus"
                        )
                      }
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =================================================
          NON AC BUS
      ================================================= */}

      <div style={cardStyle}>

        <div style={headerStyle}>
          🚌 Non AC Bus Rates – Mumbai & Mahabaleshwar
        </div>

        <div className="table-responsive">

          <table className="table mb-0 align-middle">

            <thead>
              <tr>
                <th>Bus</th>
                <th>Mumbai Upto 350 KM</th>
                <th>Mahabaleshwar Upto 300 KM</th>
                <th>Extra KM</th>
                <th>Special Permit</th>
                <th>Book</th>
              </tr>
            </thead>

            <tbody>

              {nonAcBusRates.map((item, index) => (

                <tr key={index}>

                  <td className="fw-bold">
                    {item.vehicle}
                  </td>

                  <td
                    className="fw-bold"
                    style={{ color: "#df430b" }}
                  >
                    {item.mumbai}
                  </td>

                  <td className="fw-bold">
                    {item.mahabaleshwar}
                  </td>

                  <td>{item.extraKm}</td>

                  <td>{item.permit}</td>

                  <td>
                    <button
                      style={bookBtn}
                      onClick={() =>
                        handleWhatsAppClick(
                          item.vehicle,
                          "Non AC Bus"
                        )
                      }
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =================================================
          LOCAL AC BUS
      ================================================= */}

      <div style={cardStyle}>

        <div style={headerStyle}>
          ❄️ Local AC Bus Rates – 8 Hrs / 80 KM
        </div>

        <div className="table-responsive">

          <table className="table mb-0 align-middle">

            <thead>
              <tr>
                <th>Bus</th>
                <th>Package</th>
                <th>Rate</th>
                <th>Extra KM</th>
                <th>Extra Hour</th>
                <th>Book</th>
              </tr>
            </thead>

            <tbody>

              {localAcBusRates.map((item, index) => (

                <tr key={index}>

                  <td className="fw-bold">
                    {item.vehicle}
                  </td>

                  <td>8 Hrs / 80 KM</td>

                  <td
                    className="fw-bold"
                    style={{ color: "#df430b" }}
                  >
                    {item.rate}
                  </td>

                  <td>{item.extraKm}</td>

                  <td>{item.extraHr}</td>

                  <td>
                    <button
                      style={bookBtn}
                      onClick={() =>
                        handleWhatsAppClick(
                          item.vehicle,
                          "Local AC Bus 8 Hrs / 80 KM"
                        )
                      }
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =================================================
          LOCAL NON AC BUS
      ================================================= */}

      <div style={cardStyle}>

        <div style={headerStyle}>
          🚌 Local Non AC Bus Rates – 8 Hrs / 80 KM
        </div>

        <div className="table-responsive">

          <table className="table mb-0 align-middle">

            <thead>
              <tr>
                <th>Bus</th>
                <th>Package</th>
                <th>Rate</th>
                <th>Extra KM</th>
                <th>Extra Hour</th>
                <th>Book</th>
              </tr>
            </thead>

            <tbody>

              {localNonAcBusRates.map((item, index) => (

                <tr key={index}>

                  <td className="fw-bold">
                    {item.vehicle}
                  </td>

                  <td>8 Hrs / 80 KM</td>

                  <td
                    className="fw-bold"
                    style={{ color: "#df430b" }}
                  >
                    {item.rate}
                  </td>

                  <td>{item.extraKm}</td>

                  <td>{item.extraHr}</td>

                  <td>
                    <button
                      style={bookBtn}
                      onClick={() =>
                        handleWhatsAppClick(
                          item.vehicle,
                          "Local Non AC Bus 8 Hrs / 80 KM"
                        )
                      }
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =================================================
          IMPORTANT INFORMATION
      ================================================= */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#fff1e8,#fff8e5)",
          borderLeft: "5px solid #df430b",
          padding: "20px",
          borderRadius: "12px",
        }}
      >

        <h5
          style={{
            color: "#292929",
            fontWeight: "800",
            marginBottom: "12px",
          }}
        >
          Important Information
        </h5>

        {/* <ul className="mb-0">

          <li>
            Driver allowance (DA) is applicable as
            mentioned in the respective package.
          </li>

          <li>
            Toll, parking, permit and state taxes may
            be charged separately unless specifically
            mentioned as included.
          </li>

          <li>
            Minimum 300 KM average per day applies to
            applicable outstation car packages.
          </li>

          <li>
            Local car and bus packages are calculated
            for 8 Hours / 80 KM.
          </li>

          <li>
            Extra kilometre charges apply after the
            included package limit.
          </li>

          <li>
            Extra hour charges apply when local usage
            exceeds the package duration.
          </li>

          <li>
            Mumbai AC bus rates shown are for journeys
            up to 350 KM.
          </li>

          <li>
            Mahabaleshwar AC and Non-AC bus rates shown
            are for journeys up to 300 KM.
          </li>

          <li>
            Final charges may vary depending on route,
            pickup location, travel date, vehicle
            availability and additional requirements.
          </li>

        </ul> */}

      </div>

    </div>
  );
};

export default BusRatesTable;