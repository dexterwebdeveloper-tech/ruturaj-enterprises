


import React, { useState } from "react";

const gallery = [
  {
    image: "/images/gallery/1.webp",
    title: "Gallery Image 1",
  },
  {
    image: "/images/gallery/2.webp",
    title: "Gallery Image 2",
  },
  {
    image: "/images/gallery/3.webp",
    title: "Gallery Image 3",
  },
  {
    image: "/images/gallery/4.webp",
    title: "Gallery Image 4",
  },
  {
    image: "/images/gallery/5.webp",
    title: "Gallery Image 5",
  },
  {
    image: "/images/gallery/6.webp",
    title: "Gallery Image 6",
  },
  {
    image: "/images/gallery/7.webp",
    title: "Gallery Image 7",
  },
  {
    image: "/images/gallery/8.webp",
    title: "Gallery Image 8",
  },
  {
    image: "/images/gallery/9.webp",
    title: "Gallery Image 9",
  },
  {
    image: "/images/gallery/10.webp",
    title: "Gallery Image 10",
  },
  {
    image: "/images/gallery/11.webp",
    title: "Gallery Image 11",
  },
  {
    image: "/images/gallery/12.webp",
    title: "Gallery Image 12",
  },
  {
    image: "/images/gallery/13.webp",
    title: "Gallery Image 13",
  },
  {
    image: "/images/gallery/14.webp",
    title: "Gallery Image 14",
  },
  {
    image: "/images/gallery/15.webp",
    title: "Gallery Image 15",
  },
  {
    image: "/images/gallery/16.webp",
    title: "Gallery Image 16",
  },
  {
    image: "/images/gallery/17.webp",
    title: "Gallery Image 17",
  },
  {
    image: "/images/gallery/18.webp",
    title: "Gallery Image 18",
  },
  {
    image: "/images/gallery/19.webp",
    title: "Gallery Image 19",
  },
  {
    image: "/images/gallery/20.webp",
    title: "Gallery Image 20",
  },
  {
    image: "/images/gallery/21.webp",
    title: "Gallery Image 21",
  },
  {
    image: "/images/gallery/22.webp",
    title: "Gallery Image 22",
  },
  {
    image: "/images/gallery/23.webp",
    title: "Gallery Image 23",
  },
  {
    image: "/images/gallery/24.webp",
    title: "Gallery Image 24",
  },
  {
    image: "/images/gallery/25.webp",
    title: "Gallery Image 25",
  },
  {
    image: "/images/gallery/26.webp",
    title: "Gallery Image 26",
  },
  {
    image: "/images/gallery/27.webp",
    title: "Gallery Image 27",
  },
];
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
       


        <div
      className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
      style={{ backgroundImage: "url('/img/bg/9.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  // Welcome to Ruturaj Enterprises
                </h6>

                <h1 className="section-title white-color">
                  Gallery
                </h1>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>


      <div className="container py-5">
        <div className="row">
          {gallery.map((item, index) => (
         
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
  <div className="fleetCard" onClick={() => openImage(index)}>

    <div className="fleetBadge">
      Ruturaj 
    </div>

    <div className="fleetImage">
      <img src={item.image} alt={item.name} />
    </div>

    <div className="fleetContent">
      <h4>{item.name}</h4>

      <div className="fleetBottom">
        <span>Comfort Ride</span>

        <button>
          View
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

  </div>
</div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {currentIndex !== null && (
        <div className="lightbox">
          <span className="close darkcolorrrr" onClick={closeImage}>✖</span>

          <span className="prev" onClick={prevImage}>❮</span>
          <img
            src={gallery[currentIndex].image}
            alt="preview"
            className="lightbox-img "
          />
          <span className="next" onClick={nextImage}>❯</span>
        </div>
      )}
    </>
  );
};

export default Gallery;