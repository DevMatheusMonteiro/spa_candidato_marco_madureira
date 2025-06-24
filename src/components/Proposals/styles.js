import styled from "styled-components";

export const Container = styled.section`
  padding: 2.4rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    text-align: center;
    font-size: 2.4rem;
    color: var(--primary);
  }
  .proposals-content {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .proposal-card {
    background: var(neutralLight);
    border: 2px solid var(--primary);
    border-radius: 0.8rem;
    padding: 1rem;
    text-align: center;
    svg {
      font-size: 4rem;
      color: var(--primary);
    }
  }
  ul {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    font-size: 2rem;
    li {
      padding: 0.25rem 0;
    }
  }
`;
