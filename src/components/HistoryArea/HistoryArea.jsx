import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-45">
              <span className="sub-title">Our Company</span>
              <h2 className="title">Company History</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
            <img src="/img/images/history_img.jpg" alt="" />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                  The Intention was to Establish The Company
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, sed nulla ante amet, elementum
                  tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac
                  scelerisque nibh dolores consectetuer, nulla aptent est pede.
                  Scelerisque euismod varius mi,
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="far fa-check"></i>Everyone can design at low
                    cost
                  </li>
                  <li>
                    <i className="far fa-check"></i>Designing in a different way
                  </li>
                  <li>
                    <i className="far fa-check"></i>Our designs sill be world
                    wide best designs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* road map */}
        <HistoryAreaRoadmap />
      </div>

      <div className="history-shape-wrap">
        <img src="/img/images/history_shape01.png" alt="" />
        <img src="/img/images/history_shape02.png" alt="" />
      </div>
    </section>
  );
};

export default HistoryArea;
