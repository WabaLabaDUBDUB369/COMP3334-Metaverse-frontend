import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Hero from './routes/Hero';
import Login from './routes/Login';
import SignUp from './routes/Signup';
import UserDetails from './routes/userDetails';
import AboutUs from './routes/AboutUs';
import Users from './routes/Users';

import GeneralLayout from './layouts/GeneralLayout';
import { AuthProvider } from './context/AuthContext';
import { AuthContext } from './context/AuthContext';

import Cookies from 'js-cookie';
const App = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    let token = Cookies.get('token');
    console.log('token to send: ' + token);
    // handle page refresh, by sending httpOnly cookie to verifyToken API, getting user data back from DB.
    fetch(import.meta.env.VITE_BACKEND_URL + '/api/auth/authenticate', {
      method: 'GET',
      headers: {
        'my-jwt': token, // Add this line
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return;
        }
      })
      .then((data) => {
        setUser(data.user);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-repeat">
          <GeneralLayout>
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/users" element={<Users />} />
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
