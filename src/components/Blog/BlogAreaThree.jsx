import React from "react";
import BlogAreaThreeItem from "./BlogAreaThreeItem";
import { Link } from "react-router-dom";

const BlogAreaThree = () => {
  const blog_items = [
    {
      src: "/img/blog/h2_blog_img01.jpg",
      url: "/blog-details",
      author: "Admin",
      date: "February 10, 2022",
      title: "How To Create JavaScript Vanilla Gantt Chart: Adding",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`,
    },
    {
      src: "/img/blog/h2_blog_img02.jpg",
      url: "/blog-details",
      author: "Admin",
      date: "February 10, 2022",
      title: "How To Create JavaScript Vanilla Gantt Chart: Adding",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`,
    },
    {
      src: "/img/blog/h2_blog_img03.jpg",
      url: "/blog-details",
      author: "Admin",
      date: "February 10, 2022",
      title: "How To Create JavaScript Vanilla Gantt Chart: Adding",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`,
    },
  ];

  return (
    <section className="blog-area-two blog-area-three pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two text-center mb-60">
              <span className="sub-title">Blog & Article</span>
              <h2 className="title">Recent blog post</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_items.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <BlogAreaThreeItem item={x} />
            </div>
          ))}
        </div>

        <div className="read-more-btn text-center mt-30">
          <Link to="/blog" className="btn">
            Read More <span></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaThree;
