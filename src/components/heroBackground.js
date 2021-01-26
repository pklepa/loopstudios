import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function HeroBackground() {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "image-hero.jpg" }) {
        id
        childImageSharp {
          fixed(width: 1920) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div
      style={{
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Img fluid={data.image.childImageSharp.fluid} />
    </div>
  )
}

export default HeroBackground
