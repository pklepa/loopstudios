import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./heroSection.module.scss"

function HeroSection({ children }) {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "image-hero.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(children)
  return (
    <BackgroundImage
      Tag="section"
      className={styles.background_img}
      fluid={data.image.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

export default HeroSection
