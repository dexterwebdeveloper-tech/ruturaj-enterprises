import React, { useEffect, useState } from "react";

const CallToAction = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-12-01T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="ltn__call-to-action-area ltn__call-to-action-4 ltn__call-to-action-4-2 bg-overlay-black-50 bg-image pt-110 pb-120"
      style={{
        backgroundImage: "url('/images/download.webp')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="call-to-action-inner call-to-action-inner-4 text-color-white text-center">

              <h2 className="ltn__secondary-color">
                Hurry Up!
              </h2>

              <h1 className="h1 fw-bold">
                For reservations or inquiries, <br/>
please reach out to Ruturaj Enterprises
              </h1>

              <p className="fw-bold">
                Join us on our journey to provide exceptional transportation services,



                <br />
                and let us take you wherever you need to go.
              </p>

              {/* <div
                className="ltn__countdown ltn__countdown-3 bg-white--"
              >
                <span>
                  {String(timeLeft.days).padStart(2, "0")} Days
                </span>

                <span>
                  {String(timeLeft.hours).padStart(2, "0")} Hours
                </span>

                <span>
                  {String(timeLeft.minutes).padStart(2, "0")} Minutes
                </span>

                <span>
                  {String(timeLeft.seconds).padStart(2, "0")} Seconds
                </span>
              </div> */}

              <div className="btn-wrapper animated ">
                <a
                  href="/packages"
                  className="theme-btn-1 btn btn-effect-1 text-uppercase bgh"
                >
                  Our Packages
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="ltn__call-to-4-img-1">
        <img
          src="/images/7.webp"
          alt="#"
        />
      </div>

      <div className="ltn__call-to-4-img-2">
        <img
          src="/images/11.png"
          alt="#"
        />
      </div>
    </div>
  );
};

export default CallToAction;
