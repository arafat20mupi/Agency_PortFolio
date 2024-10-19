import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = () => {
  const services_area_list = [
    {
      title: "UIUX Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "/services-details",
      delay_time: 2,
    },
    {
      title: "Product Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "/services-details",
      delay_time: 4,
    },
    {
      title: "Website Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "/services-details",
      delay_time: 6,
    },
    {
      title: "Branding Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "/services-details",
      delay_time: 8,
    },
  ];

  return (
    <section className="services-area pt-35 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          {services_area_list.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <ServicesAreaItem index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
