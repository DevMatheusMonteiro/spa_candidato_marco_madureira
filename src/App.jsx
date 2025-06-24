import { useState } from "react";
import { Header } from "./components/Header";
import { Biography } from "./components/Biography";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Biography />
    </>
  );
}

export default App;
