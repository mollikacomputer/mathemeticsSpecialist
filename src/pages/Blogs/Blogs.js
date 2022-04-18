import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs, "blog data here");
  return (
    <div>
      <h2> All blogs</h2>
      <div className="container blog-container">
      <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
};

export default Blogs;
