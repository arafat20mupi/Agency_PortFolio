import React from "react";
import InnerServicesAreaItem from "./InnerServicesAreaItem";

const InnerServicesArea = () => {
  const inner_services = [
    {
      src: "/img/icon/inner_services_icon01.png",
      url: "/services-details",
      title: "Advertising",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: "/img/icon/inner_services_icon02.png",
      url: "/services-details",
      title: "Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: "/img/icon/inner_services_icon03.png",
      url: "/services-details",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: "/img/icon/inner_services_icon04.png",
      url: "/services-details",
      title: "Product Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: "/img/icon/inner_services_icon05.png",
      url: "/services-details",
      title: "Software",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: "/img/icon/inner_services_icon06.png",
      url: "/services-details",
      title: "Marketing",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: "/img/icon/inner_services_icon07.png",
      url: "/services-details",
      title: "Cinematography",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "Strategy Services",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <section className="inner-services-area pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two text-center mb-60">
              <span className="sub-title">Graphic Service</span>
              <h2 className="title">Creative & Branding Design</h2>
            </div>
          </div>
        </div>

        <div className="inner-services-item-wrap">
          <div className="row justify-content-center">
            {inner_services.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <InnerServicesAreaItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesArea;
