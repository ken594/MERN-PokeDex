import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ 
          <>
            {/* <Navbar /> */}
            {/* <Main />  */}
            <UserForm isRegistered={0}/>
          </>
        } />
        <Route path='/register' element={ <UserForm isRegistered={1}/> }  />
        <Route path='/pokemon' element={ <Main /> } />
        {/* <Route path="/:pokemon" element={ <Main /> } /> */}
      </Routes>
    </>
  );
}

export default App;
