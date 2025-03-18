"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/banner1.JPG"
            alt="First slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/banner2.JPG"
            alt="Second slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/banner3.JPG"
            alt="Third slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/banner4.JPG"
            alt="Fourth slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/banner5.JPG"
            alt="Fifth slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/banner6.JPG"
            alt="sixth slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
