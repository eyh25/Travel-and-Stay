import React, { useEffect } from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assests/image (7).jpg";
import img2 from "../../Assests/image (8).jpg";
import img3 from "../../Assests/image (9).jpg";
import img4 from "../../Assests/image (10).jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Posts = [
  {
    id: 1,
    postImage: img,
    title: "Beautiful Morocco, let's travel!",
    desc: "The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic ocean and Mediterranean Sea.",
  },

  {
    id: 2,
    postImage: img2,
    title: "Romantic moments under the Eiffel Tower",
    desc: "With vast patches of desert in the east and the west, and the rich Nile River Valley at its heart, it is home to one of the world's earliest and greatest citilizations of all time.",
  },
  {
    id: 3,
    postImage: img3,
    title: "Let's have an adventure outside Tunisia",
    desc: "Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism throughtout the region.",
  },
  {
    id: 4,
    postImage: img4,
    title: "Best Country in East Africa",
    desc: "When Kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the most incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="flex"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                >
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
