import React from "react"
import Container from "./container"

import s from "./title.module.scss"

function Title() {
  return (
    <Container>
      <h1 className={s.title}>Immersive Experiences That Deliver</h1>
    </Container>
  )
}

export default Title
