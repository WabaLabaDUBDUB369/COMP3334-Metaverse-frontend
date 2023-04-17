import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero, Navbar } from './components';

import Login from './routes/Login';
import SignUp from './routes/Signup';
import UserDetails from './routes/userDetails';
import AboutUs from './routes/AboutUs';

import GeneralLayout from './layouts/GeneralLayout';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-repeat">
          <GeneralLayout>
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
          </GeneralLayout>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
