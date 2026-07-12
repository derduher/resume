import styled from "@emotion/styled";

export const Body = styled.div`
  position: relative;
  padding: 1rem;
  max-width: 1024px;
  font-family: "Open Sans", sans-serif;
  --cool-gray: rgb(140 140 140/0.2);
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
    border-bottom: 1px solid var(--cool-gray);
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
    grid-gap: 1rem;
    grid-template-columns: 2fr 10fr;
    grid-template-areas: "side primary";
    @media (min-width: 768px) {
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
    padding-left: 1.5rem;
    list-style-type: "– ";
  }
  aside {
    grid-area: side;

    text-align: right;
    padding-right: 1rem;
    border-right: 1px solid var(--cool-gray);
    h2 {
      margin-top: 0;
    }
    ul,
    .education,
    p,
    address {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
    .hash {
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
  p {
    margin-bottom: 0.5rem;
  }
  .objective p {
    padding-left: 0.5rem;
  }

  h3 {
    margin-bottom: 0;
  }
  .details {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
  }
  .position {
    position: relative;
  }
  .multiple-positions {
    padding-left: 1rem;
  }

  .multiple-positions .position:first-of-type::before {
    content: "";
    position: absolute;
    left: calc(-0.5rem - 1px);
    top: 0.3rem;
    height: calc(100% + 4rem);
    width: 1px;
    background-color: var(--cool-gray);
  }
  .printable {
    display: none;
  }
  @media print {
    /* All your print styles go here */
    h1 {
      font-size: 30pt;
      margin-bottom: 0;
      margin-top: 0;
    }
    .printable {
      display: inline;
    }
    .title {
      font-size: 10pt;
      margin-top: 0;
      margin-bottom: 1rem;
      padding: 0;
    }
    main {
      grid-template-columns: 10fr 2fr;
      grid-template-areas: "primary side";
    }
    aside {
      border-left: 1px solid var(--cool-gray);
      border-right: 0;
      text-align: left;
      padding-left: 1rem;
      padding-right: 0;
      li {
        padding-left: 0.2em;
        text-indent: -0.2em;
      }
    }
    h2 {
      padding-left: 0;
    }
    .primary .position {
      padding-left: 0;
    }

    .objective p {
      padding-left: 0;
    }
    section {
      margin-bottom: 1rem;
    }
    .multiple-positions .position:first-of-type::before {
      height: calc(100% + 3rem);
      left: calc(-0.8rem - 1px);
    }
  }
`;
