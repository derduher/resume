import styled from "@emotion/styled";

export const ContactSection = styled.section`
  .contact {
    text-decoration: none;
    font-style: normal;
    &:hover,
    &:focus {
      color: hsla(0, 0%, 5%, 1);
    }

    > * {
      margin-bottom: 0;
    }

    a {
      color: hsla(0, 0%, 19%, 1);
    }
  }
  #Contact {
    display: none;
  }
  @media print {
    display: none;
  }
`;
