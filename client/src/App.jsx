import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Booking.jsx";
import Home from "./Home.jsx";
import Publish from "./Publish.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/publish" element={<Publish />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;