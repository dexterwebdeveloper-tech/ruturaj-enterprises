import React, { useEffect, useRef, useState } from "react";

const CounterItem = ({ number, suffix = "", letter = "", title }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animate);
  }, [started, number]);

  return (
    <div
      ref={counterRef}
      className="col-lg-2 col-md-3 col-sm-6 align-self-center"
    >
      <div className="ltn__counterup-item-3 text-color-white">

        <div className="counter-icon">
          //
        </div>

        <h1>
          <span className="counter">
            {count}
          </span>

          {letter && (
            <span className="counterUp-letter">
              {letter}
            </span>
          )}

          <span className="counterUp-icon">
            {suffix}
          </span>
        </h1>

        <h6>{title}</h6>

      </div>
    </div>
  );
};


const CounterSection = () => {
  return (
    <div
      className="ltn__counterup-area bg-image bg-overlay-theme-black-80 py-5"
      style={{
        backgroundImage: "url('/images/bg/5.jpg')",
      }}
    >
      <div className="container">
        <div className="row">

          {/* TITLE */}
          <div className="col-lg-4 col-md-12">
            <div className="section-title-area ltn__section-title-2">
              <h6 className="section-subtitle white-color">
                // ACTIVITY
              </h6>

              <h1 className="section-title white-color">
                It's Our
                <br />
                Journey<span>.</span>
              </h1>
            </div>
          </div>

          {/* ACTIVE CLIENTS */}
        <CounterItem
  number={1000}
  suffix="+"
  title="Happy Clients"
/>

<CounterItem
  number={126}
  suffix="+"
  title="Expert Drivers"
/>

<CounterItem
  number={200}
  suffix="+"
  title="Available Fleets"
/>

<CounterItem
  number={1364}
  suffix="+"
  title="Road Trips"
/>


        </div>
      </div>
    </div>
  );
};

export default CounterSection;
