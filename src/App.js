import About from './About';
import Contact from './Contact';
import Facts from './Facts';
import Home from './Home';
import NavBar from "./NavBar";
import NotFound from './NotFound';
import SignUp from './SignUp';
import TripDetails from './TripDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/trips/:id" element={<TripDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
