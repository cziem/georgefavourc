import React from "react"
import { FooterStyles } from "./styles"

const Footer = () => {
  return (
    <FooterStyles>
      <footer>
        © {new Date().getFullYear()}, made with ❤️ by George Favour
        {` `}
      </footer>
    </FooterStyles>
  )
}

export default Footer
