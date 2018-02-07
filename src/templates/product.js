import React from "react";

export default ({ data }) => {
  const post = data.allContentfulProducts.edges[0].node;
  console.log(post);
  return <div>
      <h1>{post.name}</h1>
      <h2>{post.tagLine}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.description.description }} />
    </div>;
};

export const query = graphql`
         query ProductQuery($slug: String!) {
           allContentfulProducts(filter: { fields: { slug: { eq: $slug } } }) {
             edges {
               node {
                 name
                 tagLine
                 description {
                   description
                 }
               }
             }
           }
         }
       `;
