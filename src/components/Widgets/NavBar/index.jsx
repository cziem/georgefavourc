import React from "react"

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <a href="/home">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About Me</li>
          </a>
          <a href="/projects">
            <li>Projects</li>
          </a>
          <a href="/stack">
            <li>Stack</li>
          </a>
          <a href="/blog">
            <li>Blog</li>
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
