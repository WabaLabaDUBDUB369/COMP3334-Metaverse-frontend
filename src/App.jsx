import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero, Navbar} from "./components";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-repeat'>
          <Routes>
            <Route
              exact
              path="/"
              element={<div><Navbar/><Hero /></div>}
            />
            <Route path="/sign-in" element={<div><Navbar/><Login /></div>} />
            <Route path="/sign-up" element={<div><Navbar/><SignUp /></div>} />
            <Route path="/aboutus" element={<div><Navbar/><AboutUs /></div>} />
            <Route path="/userDetails" element={<div><Navbar/><UserDetails /></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
