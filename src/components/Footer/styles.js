import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  padding: 2.4rem 2rem;
  background: var(--primary);
  color: var(--neutralLight);
  .footer-content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social-media {
      display: flex;
      gap: 1.6rem;
      margin-bottom: 1.6rem;
      a {
        font-size: 3.2rem;
        color: var(--neutralLight);
        transition: color 0.3s ease-in-out;
        &:hover {
          color: var(--secondary);
        }
      }
    }
  }
`;
