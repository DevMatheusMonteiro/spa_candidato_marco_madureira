import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  background-color: var(--primary);
  color: var(--neutralLight);
  padding: 0 2rem;
  height: 8rem;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .hidden {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  nav {
    position: absolute;
    right: 1rem;
    bottom: -11rem;
    background-color: var(--primary);
    padding: 1rem;
    border-radius: 0 0 0.5rem 0.5rem;
    @media (min-width: 768px) {
      position: static;
      background-color: none;
      padding: 0;
      border-radius: 0;
    }
  }
  nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    a {
      color: var(--neutralLight);
      padding: 0.5rem 1rem;
      transition: background-color 0.3s ease;
      border-radius: 0.5rem;

      &:hover {
        background-color: var(--secondary);
      }
    }
  }
  .menu-icon {
    background: none;
    border: none;
    color: var(--neutralLight);
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: var(--secondary);
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
