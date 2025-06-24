import styled from "styled-components";

export const Container = styled.section`
  padding: 2.4rem 2rem;
  background-color: var(--neutralLight);
  color: var(--neutralDark);
  h2 {
    text-align: center;
    font-size: 2.4rem;
    color: var(--primary);
    margin-top: 2rem;
  }

  .biography-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    img {
      margin-top: 1.6rem;
      border-radius: 50%;
      object-fit: cover;
      width: 100%;
      max-width: 400px;
      aspect-ratio: 1/1;
    }
    .biography-text {
      p {
        font-size: 1.6rem;
        line-height: 1.6;
        text-align: justify;
        max-width: 800px;
      }
      p + p {
        margin-top: 1.6rem;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      .biography-text {
        max-width: 600px;
      }
    }
  }
`;
