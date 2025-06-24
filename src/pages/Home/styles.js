import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 2fr max-content;
  grid-template-areas: "header" "main" "footer";
  height: 100vh;
`;

export const Main = styled.main`
  grid-area: main;
  overflow: auto;
`;
