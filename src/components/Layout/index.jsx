import React from "react"
import PropTypes from "prop-types"
import Footer from "../Footer"
import NavBar from "../Widgets/NavBar"
import SocialPanel from "../Widgets/SocialPanel"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <SocialPanel />
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
