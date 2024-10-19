import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";

const TestimonialArea = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: function (currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      title: "Davis Levin",
      designation: "CEO Kawasaki Inc.",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “`,
      src: 1,
    },
    {
      title: "Davis Levin",
      designation: "CEO Kawasaki Inc.",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “`,
      src: 2,
    },
    {
      title: "Davis Levin",
      designation: "CEO Kawasaki Inc.",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “`,
      src: 3,
    },
    {
      title: "Davis Levin",
      designation: "CEO Kawasaki Inc.",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “`,
      src: 1,
    },
    {
      title: "Davis Levin",
      designation: "CEO Kawasaki Inc.",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “`,
      src: 4,
    },
    {
      title: "Davis Levin",
      designation: "CEO Kawasaki Inc.",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “`,
      src: 1,
    },
    {
      title: "Davis Levin",
      designation: "CEO Kawasaki Inc.",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “`,
      src: 3,
    },
  ];

  return (
    <section className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Testimonials</span>
              <h2 className="title">Shat Our Customer Say About Us</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-item-wrap">
          <div className="row testimonial-active">
            <SlickSlider settings={slick_settings}>
              {slider_items.map((x, index) => (
                <div
                  key={index}
                  className={cn(
                    "col-lg-3",
                    index % 2 === 0 && "testimonial-item-wrap-item-even"
                  )}
                >
                  <TestimonialAreaItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
