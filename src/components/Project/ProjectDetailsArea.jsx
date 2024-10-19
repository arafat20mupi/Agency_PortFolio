import React from "react";
import CounterWrapFour from "../CounterArea/CounterWrapFour";

const ProjectDetailsArea = () => {
  return (
    <section className="project-details-area pt-40 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-inner">
              <div className="project-details-img">
                <img src="/img/images/project_details_img.jpg" alt="" />
              </div>
              <div className="project-details-content">
                <h2 className="title">Creative Agency</h2>
                <p>
                  Lorem ipsum dolor sit amet, sed nulla ante amet, elementum
                  tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac
                  scelerisque nibh dolores consectetuer, nulla aptent est pede.
                  Scelerisque euismod varius mi, congue eget sed vestibulum,
                  ornare cras sed nec. There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form have suffered alteration in some form.
                </p>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-12">
                  {/* counter wrap four */}
                  <CounterWrapFour />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-shape-wrap">
        <img src="/img/images/services_details_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectDetailsArea;
