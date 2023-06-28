import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ 
          <>
            {/* <Navbar /> */}
            <Main /> 
          </>
        } />
        <Route path="/:pokemon" element={ <Main /> } />
      </Routes>
    </>
  );
}

export default App;
