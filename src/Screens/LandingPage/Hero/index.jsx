import React from "react"
import { HeroStyles } from "./styles"
import Img from "gatsby-image"
import HeroImage from "../../../images/george-pics/portfolio-1.png"

const Hero = () => {
  return (
    <HeroStyles>
      <div className="hero-box__overlay" />

      <div className="hero-image">
        <img src={HeroImage} />
        {/* <Img fluid={HeroImage} /> */}
      </div>

      <div className="hero-box">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-author">George Favour</span>
        </h1>
        <p className="lead">
          I design, develop and build web-based software solutions
        </p>

        <footer>
          {/* The goal here is to give the user a little gaming experience, the only way to catch the button is to hold down the ctrl key. There's a mobile experience too, but will be developed later */}
          <button>Catch me if you can</button>
        </footer>
      </div>
    </HeroStyles>
  )
}

export default Hero
