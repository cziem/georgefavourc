import styled from "styled-components"

export const HeroStyles = styled("div")`
  background-color: red;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6a2337;
  position: relative;

  .hero-image {
    position: absolute;
    bottom: -8px;
    left: 5rem;

    img {
      margin: 0;
      object-fit: cover;
      height: 100%;
    }
  }
`
