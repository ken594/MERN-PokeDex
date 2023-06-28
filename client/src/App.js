import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/:pokemon" element={ <Main /> } />
      </Routes>
    </>
  );
}

export default App;
