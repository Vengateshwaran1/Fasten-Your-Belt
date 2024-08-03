import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Booking.jsx";
import Home from "./Home.jsx";
import Publish from "./Publish.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import About from "./About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;