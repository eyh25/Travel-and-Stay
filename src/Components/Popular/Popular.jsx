import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

//  Import the images
// import img from "../../Assests/image (1).jpg";
import img2 from "../../Assests/image (2).jpg";
import img3 from "../../Assests/image (3).jpg";
import img4 from "../../Assests/image (4).jpg";
import img5 from "../../Assests/image (5).jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX ",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX ",
  },

  {
    id: 3,
    imgSrc: img4,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX ",
  },

  {
    id: 4,
    imgSrc: img5,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX ",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From historical cities to natural wonders, come see the best
              places in the world!
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image oio title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}.</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>
                </div>

                <div className="destText flex">
                  <h6>{location}</h6>
                  <span className="flex">
                    <span className="dot">
                      <BsDot className="icon" />
                    </span>
                    Dot
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
