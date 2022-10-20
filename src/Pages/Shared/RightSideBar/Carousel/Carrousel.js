import React from "react";
import Carousel from "react-bootstrap/Carousel";
import a from '../../../../assets/brands/a.jpg';
import b from '../../../../assets/brands/b.jpg';
import c from '../../../../assets/brands/c.jpg';
import './Carousel.css'

const Carrousel = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First</h3>
          <p>Nulla vitae</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={a}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second</h3>
          <p>Lorem ipsum</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third</h3>
          <p>
            Praesent commodo
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
