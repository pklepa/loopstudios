import React from "react"

// import HeroBackground from "../components/heroBackground"
import HeroSection from "../components/heroSection"
import Navbar from "../components/navbar"
import Title from "../components/title"

export default function Home() {
  return (
    <div>
      <HeroSection>
        <Navbar />
        <Title />
      </HeroSection>
    </div>
  )
}
