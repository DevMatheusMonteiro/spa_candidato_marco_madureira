import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  padding-top: 2.4rem;
  background-color: var(--neutralLight);
  color: var(--neutralDark);
  h2 {
    font-size: 2.4rem;
    color: var(--primary);
    margin-top: 2rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: justify;
    max-width: 800px;
  }
  p:first-of-type {
    margin-top: 2rem;
  }
  p + p {
    margin-top: 1.5rem;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1/1;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
