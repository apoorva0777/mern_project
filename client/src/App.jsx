import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";

const App=()=>{
  return <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/about" element= {<About/>} />
    <Route path="/contact" element= {<Contact/>} />
    <Route path="/login" element= {<Login/>} />
    <Route path="/register" element= {<Register/>} />
  </Routes>

  </BrowserRouter>
  </>
};

export default App;