import React from "react"

import HeroBackground from "../components/heroBackground"
import Navbar from "../components/navbar"
import Title from "../components/title"

export default function Home() {
  return (
    <div>
      <HeroBackground />

      <Navbar />
      <Title />
    </div>
  )
}
