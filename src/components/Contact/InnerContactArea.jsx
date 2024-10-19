import React from "react";
import InnerContactForm from "./InnerContactForm";
import InnerContactInfo from "./InnerContactInfo";

const InnerContactArea = () => {
  return (
    <section className="inner-contact-area">
      <div className="container">
        <div className="inner-contact-wrap">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <div className="section-title title-style-two mb-50">
                <h2 className="title">
                  Have a <span>Cool Project?</span> Get in touch!
                </h2>
              </div>

              <div className="inner-contact-form-wrap">
                <InnerContactForm />
              </div>

              <div id="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96811.54759587669!2d-74.01263924803828!3d40.6880494567041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1636195194646!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="inner-contact-info">
                <InnerContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerContactArea;
