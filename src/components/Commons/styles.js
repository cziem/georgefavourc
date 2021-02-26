import styled from "styled-components"
import { Link as Linked } from "gatsby"

export const NavList = styled("ul")`
  margin: 0;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
`

export const ListItem = styled("li")`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Link = styled(Linked)`
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  border-radius: 3.5px;
  transition: background-color 0.5s ease-in-out;

  svg {
    color: #eee; // #888
    -webkit-text-stroke-color: #888;
    transition: color 0.2s ease-in-out;

    path {
      stroke: #eee; //#757575
      transition: color 0.2s ease-in-out;
    }
  }

  :hover {
    background-color: #ddd;

    svg,
    path {
      color: #3c3c3c;
      stroke: #3c3c3c;
    }
  }
`

export const Anchor = styled("a")`
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  border-radius: 3.5px;
  transition: background-color 0.5s ease-in-out;

  svg {
    color: #eee;
    transition: color 0.2s ease-in-out;

    path {
      stroke: #eee; //#757575
      transition: color 0.2s ease-in-out;
    }
  }

  :hover {
    background-color: #ddd;

    svg,
    path {
      color: #3c3c3c;
      stroke: #3c3c3c;
    }
  }
`
