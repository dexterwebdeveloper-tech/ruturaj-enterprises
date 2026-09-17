import React from "react";

const skills = [
  {
    name: "Customer-Centric",
    percentage: 92,
  },
  {
    name: "Reliability",
    percentage: 94,
  },
  {
    name: "Safety First",
    percentage: 91,
  },
];

const Skills = () => {
  return (
    <section className="ltn__progress-bar-area before-bg-right pt-115 pb-95">
      <div className="container">
        <div className="row">

          {/* Left Side - Skills */}
          <div className="col-lg-6">
            <div className="ltn__progress-bar-wrap">

              {/* Section Title */}
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  // Values
                </h6>

                <h1 className="section-title">
                  Guided by Principles: Our Core Values<span>.</span>
                </h1>

                <p>
                  Integrity, Safety, and Excellence – The Cornerstones of Our Commitment to You.
                </p>
              </div>

              {/* Progress Bars */}
              <div className="ltn__progress-bar-inner">

                {skills.map((skill, index) => (
                  <div
                    className="ltn__progress-bar-item"
                    key={index}
                  >
                    <p>{skill.name}</p>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${skill.percentage}%`,
                        }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="col-lg-6 align-self-center">
            <div
              className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50-- bg-image ml-30"
              style={{
                backgroundImage: "url('/images/11.webp')",
              }}
            >
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
