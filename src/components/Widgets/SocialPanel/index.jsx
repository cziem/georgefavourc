import React from "react"
import {
  AiFillGithub as GitHubIcon,
  AiFillGitlab as GitLabIcon,
  AiOutlineTwitter as TwitterIcon,
} from "react-icons/ai"
import { FaDev as DevToIcon } from "react-icons/fa"
import { RiLinkedinFill as LinkedInIcon } from "react-icons/ri"
import { Anchor, ListItem, NavList } from "../../Commons/styles"
import { SocialPanelStyles } from "./styles"

const SocialPanel = () => {
  return (
    <SocialPanelStyles>
      <NavList direction="column" align="center">
        <ListItem>
          <Anchor
            href="https://linkedin.com/in/georgefavourc"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            href="https://twitter.com/georgefavourc"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            href="https://github.com/phavor"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            href="https://gitlab.com/phayVor"
            target="_blank"
            rel="noreferrer"
          >
            <GitLabIcon />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="https://dev.to/phavor" target="_blank" rel="noreferrer">
            <DevToIcon />
          </Anchor>
        </ListItem>
      </NavList>
    </SocialPanelStyles>
  )
}

export default SocialPanel
