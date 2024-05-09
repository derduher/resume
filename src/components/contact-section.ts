import styled from "styled-components";

export const ContactSection = styled.section`
  .contact {
    text-decoration: none;
    font-style: normal;
    &:hover,
    &:focus {
      color: hsla(0, 0%, 5%, 1);
    }

    > * {
      margin-bottom: 0.5rem;
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    a {
      @media screen and (min-width: 768px) {
        color: hsla(0, 0%, 19%, 1);
      }
    }
  }
  #Contact {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
