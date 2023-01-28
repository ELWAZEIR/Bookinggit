import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./pages/all/All.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Hotel } from "./pages/hotel/Hotel.jsx";
import { List } from "./pages/list/List.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/register.jsx";
import About from "./pages/about/About.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import ContactUs from "./pages/contact/Contact.jsx";
import "./styles/public.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all" element={<All />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
