import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Booking.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;