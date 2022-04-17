import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="banner-desc text-white">
            <h5> Make easyly friendship with my student </h5>
            <p> I know kids mindset. So I can make friendship quickly to learn homework </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="banner-desc text-white" >
            <h5 > I learn with mother's love </h5>
            <p> I care handwritten for my student. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="banner-desc text-white">
            <h5> Enjoyfull learning is good havit </h5>
            <p>
              Baby learn count quickly when he count animals. Then I help internet animals
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
