import Main from "./Views/Main";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import Pokemon from "./Views/Pokemon";

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
        <Route path='/pokemon/:id' element={ <Pokemon /> } />
        {/* <Route path="/:pokemon" element={ <Main /> } /> */}
      </Routes>
    </>
  );
}

export default App;
