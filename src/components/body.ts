import styled from "styled-components";

export const Body = styled.div`
  position: relative;
  padding: 1rem;
  max-width: 1024px;
  font-family: "Open Sans", sans-serif;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  section {
    margin-bottom: 2rem;
  }
  .hash:first-child {
    display: none;
  }

  /** headers */
  h1,
  h2,
  h3 {
    font-family: "Oxygen", sans-serif;
    font-weight: bold;
  }

  /** Name */
  h1 {
    font-size: 50pt;
    color: hsla(0, 0%, 37%, 1);
    margin-bottom: 0.5rem;
  }
  h2,
  h3 {
    a {
      text-decoration: none;
      color: inherit;
    }
    .hash {
      color: hsla(0, 0%, 19%, 0);
      transition: color 0.2s ease;
    }
    &:hover .hash,
    a:focus .hash {
      color: hsla(0, 0%, 19%, 1);
    }
  }
  h2 {
    font-size: 14pt;
    font-weight: normal;
    border-bottom: 1px solid #a6a6a6;
    padding-bottom: 5px;
    padding-left: 0.5rem;
  }
  h3 {
    font-size: 12pt;
  }
  .title {
    border-bottom: none;
    font-size: 13pt;
  }

  /** content */
  p,
  li,
  h2,
  h3 {
    color: hsla(0, 0%, 19%, 1);
  }
  main {
    display: grid;
    grid-template-areas: "primary" "side";
    grid-gap: 1rem;
    @media screen and (min-width: 768px) {
      grid-template-columns: 2fr 10fr;
      grid-template-areas: "side primary";
    }
    @media screen and (min-width: 768px) {
      > * {
        padding-top: 1rem;
      }
    }
  }
  .contact,
  #Objective {
    margin-top: 0;
  }
  ul {
    list-style-type: "–   ";
    padding-left: 1.5rem;
    @media screen and (min-width: 768px) {
      list-style-type: "– ";
      padding-left: 40px;
    }
  }
  aside {
    grid-area: side;

    @media screen and (min-width: 768px) {
      text-align: right;
      padding-right: 1rem;
      border-right: 1px solid #a6a6a6;
    }
    ul,
    .education,
    p,
    address {
      margin: 0;
      padding-left: 0.5rem;
      @media screen and (min-width: 768px) {
        padding: 0;
      }
    }
    li {
      list-style-type: none;
    }
    .hash:first-child {
      display: none;
    }
    @media screen and (min-width: 768px) {
      .hash:last-child {
        display: none;
      }
      .hash:first-child {
        display: inline;
      }
    }
  }
  .primary {
    grid-area: primary;
    .position {
      padding-left: 0.5rem;
    }
  }

  .details,
  h3,
  p,
  ul {
    margin-top: 0;
  }
  .details,
  h3,
  p {
    margin-bottom: 0.5rem;
  }
  .objective p {
    padding-left: 0.5rem;
  }
`;
