import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Booking.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;