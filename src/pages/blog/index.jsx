import { graphql, Link } from "gatsby";
import React, { useEffect, useState } from "react";

const BlogPage = ({ data }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data.allMarkdownRemark);
  }, [data]);

  console.log(data);
  return (
    <div>
      <h3>Hallo, kalian bisa baca blog disini</h3>
      {blogs?.nodes?.map((blog, idx) => (
        <div key={idx}>
          <Link to={blog.frontmatter.path}>
            <p>{blog.frontmatter.title}</p>
            <span>{blog.frontmatter.date}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

export const blogQuery = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          path
        }
      }
    }
  }
`;
