import React from "react"
import {
  AiFillHome as HomeIcon,
  AiFillProject as ProjectIcon,
} from "react-icons/ai"
import {
  GrBlog as BlogIcon,
  GrTechnology as TechStackIcon,
} from "react-icons/gr"
import { RiUserFollowFill as AboutMeIcon } from "react-icons/ri"
import { Link, ListItem, NavList } from "../../Commons/styles"
import { NavBarStyles } from "./styles"

const NavBar = () => {
  return (
    <NavBarStyles>
      <nav>
        <NavList direction="column" align="center">
          <ListItem>
            <Link href="/home">
              <HomeIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/about">
              <AboutMeIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/projects">
              <ProjectIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/stack">
              <TechStackIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/blog">
              <BlogIcon />
            </Link>
          </ListItem>
        </NavList>
      </nav>
    </NavBarStyles>
  )
}

export default NavBar
