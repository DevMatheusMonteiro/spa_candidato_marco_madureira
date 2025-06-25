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

  ul {
    margin-top: 2rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }
`;
