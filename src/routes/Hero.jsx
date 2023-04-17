import React, { useEffect, useState } from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles/styles';
import { ApartmentCanvas } from '../components/canvas';
import { TallApartmentCanvas } from '../components/canvas';
import { HouseCanvas } from '../components/canvas';
import { LuxuryHouseCanvas } from '../components/canvas';
import { MansionCanvas } from '../components/canvas';

const Hero = () => {
  const [userData, setUserData] = useState('');
  const isLoggedIn = window.localStorage.getItem('loggedIn');

  useEffect(() => {
    fetch('http://localhost:5000/userData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userData');
        setUserData(data.data);

        if (data.data == 'token expired') {
          alert('Token expired login again');
          window.localStorage.clear();
          window.location.href = './sign-in';
        }
      });
  }, [isLoggedIn, userData]);

  const handleRent = (property) => {
    var myObj = new Object();
    myObj[property] = 1;

    fetch('http://localhost:5000/login-user', {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(myObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
        if (data.status == 'ok') {
          alert('Property Rented Successfully');
          window.location.href = '/';
        }
      });
  };

  const handleBuy = (property) => {
    var myObj = new Object();
    myObj[property] = 1;

    fetch('http://localhost:5000/login-user', {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(myObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
        if (data.status == 'ok') {
          alert('Property Bought Successfully');
          window.location.href = '/';
        }
      });
  };

  const handleSell = (propertyOwned, propertyRented) => {
    var myObj = new Object();
    myObj[propertyOwned] = 0;
    myObj[propertyRented] = 0;

    fetch('http://localhost:5000/login-user', {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(myObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
        if (data.status == 'ok') {
          alert('Property Sold Successfully');
          window.location.href = '/';
        }
      });
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Studio Apartment
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            You can buy this studio apartment here{' '}
            <br className="sm:block hidden" />
            in 1771 Lowndes Hill Park Road
          </p>
        </div>
      </div>

      <ApartmentCanvas />

      <div className="w-full flex justify-center items-center bg-primary pb-10">
        <div className="w-[70px] h-[35px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              x: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </div>

      <div className="p-20 bg-tertiary bg-cover bg-repeat">
        <div>
          <div>
            <p className={styles.sectionSubText}>Building Description</p>
            <h2 className={styles.sectionHeadText}>Riverwalk Residences</h2>
          </div>

          <p className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Charming and cozy studio apartments available for sale! This
            self-contained unit features a combined living and sleeping area, a
            fully equipped kitchenette, and a bathroom with a walk-in shower.
            The unit is located on the Xth floor of a well-maintained building
            with 24-hour security and an elevator. With its compact size, this
            apartment is perfect for a young professional or a student looking
            for a convenient and affordable living space in the heart of the
            city. Don't miss this opportunity to own a piece of the city
            skyline!
          </p>
          {userData && isLoggedIn ? (
            userData.propertyOwned1 == '1' ? (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleRent('propertyRented1');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    {userData.propertyRented1 == '1'
                      ? 'Property being rented'
                      : 'Rent Property'}
                    <img
                      src="src/assets/hand-over.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleSell('propertyOwned1', 'propertyRented1');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Sell Property
                    <img
                      src="src/assets/payment-method.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            ) : (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleBuy('propertyOwned1');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Buy Property
                    <img
                      src="src/assets/shopping-cart.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            )
          ) : (
            <div className="mt-3 flex flex-wrap gap-10">
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Rent Property
                  <img
                    src="src/assets/hand-over.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Buy Property
                  <img
                    src="src/assets/shopping-cart.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Sell Property
                  <img
                    src="src/assets/payment-method.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
            </div>
          )}
        </div>
      </div>
      {/* DIVIDER */}

      <div className="bg-hero-pattern">
        <div
          className={`inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-10`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Duplex apartment
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              You can buy this taller apartment here{' '}
              <br className="sm:block hidden" />
              in 1235 Geneva Street
            </p>
          </div>
        </div>
        <div className="w-full h-[500px] pb-20">
          <TallApartmentCanvas />
        </div>
      </div>

      <div className="p-20 bg-tertiary bg-cover bg-repeat">
        <div>
          <div>
            <p className={styles.sectionSubText}>Building Description</p>
            <h2 className={styles.sectionHeadText}>Summit Towers</h2>
          </div>

          <p className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Fantastic opportunity to own a beautiful duplex apartment in a
            highly desirable location! This spacious unit features two levels of
            living space, with a spacious living room, dining area, and kitchen
            on the first floor, and two well-appointed bedrooms and a full
            bathroom on the second floor. The unit boasts plenty of natural
            light, hardwood floors, and modern finishes throughout. With its
            prime location and ample living space, this duplex apartment is
            perfect for families or professionals looking for a comfortable and
            convenient living space. Don't miss out on this unique opportunity
            to own a stunning duplex apartment in a sought-after neighborhood!
          </p>
          {userData && isLoggedIn ? (
            userData.propertyOwned2 == '1' ? (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleRent('propertyRented2');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    {userData.propertyRented2 == '1'
                      ? 'Property being rented'
                      : 'Rent Property'}
                    <img
                      src="src/assets/hand-over.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleSell('propertyOwned2', 'propertyRented2');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Sell Property
                    <img
                      src="src/assets/payment-method.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            ) : (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleBuy('propertyOwned2');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Buy Property
                    <img
                      src="src/assets/shopping-cart.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            )
          ) : (
            <div className="mt-3 flex flex-wrap gap-10">
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Rent Property
                  <img
                    src="src/assets/hand-over.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Buy Property
                  <img
                    src="src/assets/shopping-cart.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Sell Property
                  <img
                    src="src/assets/payment-method.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
            </div>
          )}
        </div>
      </div>

      {/* DIVIDER */}

      <div className="bg-hero-pattern">
        <div
          className={`inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-10`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Single-family home
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              You can buy this House <br className="sm:block hidden" />
              in 2448 Berkley Street
            </p>
          </div>
        </div>
        <div className="w-full h-[500px] pb-20">
          <HouseCanvas />
        </div>
      </div>

      <div className="p-20 bg-tertiary bg-cover bg-repeat">
        <div>
          <div>
            <p className={styles.sectionSubText}>Building Description</p>
            <h2 className={styles.sectionHeadText}>Sunflower Suite</h2>
          </div>

          <p className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Welcome to your dream home! This beautiful single family house
            boasts 3 bedrooms, 2.5 bathrooms, and ample living space for your
            family to enjoy. The main floor features a spacious living room, an
            updated kitchen with stainless steel appliances and granite
            countertops, a cozy family room with a fireplace, and a dining room
            that opens up to a large deck overlooking the lush backyard. The
            upper level includes a master suite with a walk-in closet and an
            updated bathroom, as well as two additional bedrooms and a full
            bathroom. The lower level offers a finished basement with a
            recreation room and plenty of storage space. The house is located in
            a quiet neighborhood with excellent schools, parks, and shopping
            nearby. Don't miss this opportunity to make this stunning house your
            forever home!
          </p>
          {userData && isLoggedIn ? (
            userData.propertyOwned3 == '1' ? (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleRent('propertyRented3');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    {userData.propertyRented3 == '1'
                      ? 'Property being rented'
                      : 'Rent Property'}
                    <img
                      src="src/assets/hand-over.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleSell('propertyOwned3', 'propertyRented3');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Sell Property
                    <img
                      src="src/assets/payment-method.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            ) : (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleBuy('propertyOwned3');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Buy Property
                    <img
                      src="src/assets/shopping-cart.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            )
          ) : (
            <div className="mt-3 flex flex-wrap gap-10">
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Rent Property
                  <img
                    src="src/assets/hand-over.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Buy Property
                  <img
                    src="src/assets/shopping-cart.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Sell Property
                  <img
                    src="src/assets/payment-method.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
            </div>
          )}
        </div>
      </div>

      {/* DIVIDER */}

      <div className="bg-hero-pattern">
        <div
          className={`inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-10`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Luxury House
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              You can buy this Luxury House <br className="sm:block hidden" />
              in 997 Junior Avenue
            </p>
          </div>
        </div>
        <div className="w-full h-[500px] pb-20">
          <LuxuryHouseCanvas />
        </div>
      </div>

      <div className="p-20 bg-tertiary bg-cover bg-repeat">
        <div>
          <div>
            <p className={styles.sectionSubText}>Building Description</p>
            <h2 className={styles.sectionHeadText}>Homestead Villa</h2>
          </div>
          <p className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Indulge in the epitome of luxury living with this breathtaking
            mansion that boasts over 10,000 square feet of living space. This
            stunning home features 7 bedrooms, 10 bathrooms, a grand living room
            with soaring ceilings and marble floors, an opulent dining room, a
            gourmet chef's kitchen with top-of-the-line appliances, a home
            theater, a wine cellar, and a gym. The luxurious master suite
            features a sitting area, two walk-in closets, and a spa-like
            bathroom with a soaking tub and a steam shower. The house also
            includes a private elevator, a game room, a swimming pool, a hot
            tub, and a spacious outdoor terrace with stunning views of the city.
            Located in a prestigious neighborhood, this mansion offers
            unparalleled privacy and sophistication. Don't miss this opportunity
            to own a truly exceptional and luxurious home!
          </p>
          {userData && isLoggedIn ? (
            userData.propertyOwned4 == '1' ? (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleRent('propertyRented4');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    {userData.propertyRented4 == '1'
                      ? 'Property being rented'
                      : 'Rent Property'}
                    <img
                      src="src/assets/hand-over.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleSell('propertyOwned4', 'propertyRented4');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Sell Property
                    <img
                      src="src/assets/payment-method.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            ) : (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleBuy('propertyOwned4');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Buy Property
                    <img
                      src="src/assets/shopping-cart.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            )
          ) : (
            <div className="mt-3 flex flex-wrap gap-10">
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Rent Property
                  <img
                    src="src/assets/hand-over.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Buy Property
                  <img
                    src="src/assets/shopping-cart.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Sell Property
                  <img
                    src="src/assets/payment-method.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
            </div>
          )}
        </div>
      </div>

      {/* DIVIDER */}

      <div className="bg-hero-pattern">
        <div
          className={`inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-10`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Mansion</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              You can buy this Mansion <br className="sm:block hidden" />
              in 2765 Echo Lane
            </p>
          </div>
        </div>
        <div className="w-full h-[500px] pb-20">
          <MansionCanvas />
        </div>
      </div>

      <div className="p-20 bg-tertiary bg-cover bg-repeat">
        <div>
          <div>
            <p className={styles.sectionSubText}>Building Description</p>
            <h2 className={styles.sectionHeadText}>Highcliff Manor</h2>
          </div>
          <p className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Welcome to this magnificent estate that offers grandeur, luxury, and
            elegance all in one. This sprawling mansion boasts over 15,000
            square feet of living space with 10 bedrooms, 12 bathrooms, multiple
            living areas, a formal dining room, a gourmet kitchen with
            top-of-the-line appliances, a home theater, a gym, and a wine
            cellar. The opulent master suite features a sitting area, a
            fireplace, a luxurious bathroom, and a private balcony overlooking
            the picturesque grounds. The mansion also includes an indoor pool, a
            sauna, a game room, a home office, a library, and a spacious outdoor
            terrace with breathtaking views of the surrounding landscape. Set on
            several acres of manicured gardens, this estate offers unparalleled
            privacy and tranquility, yet is conveniently located just minutes
            away from shopping, dining, and entertainment. Don't miss this
            opportunity to own a truly remarkable and luxurious mansion that
            exudes sophistication and grandeur!
          </p>
          {userData && isLoggedIn ? (
            userData.propertyOwned5 == '1' ? (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleRent('propertyRented5');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    {userData.propertyRented5 == '1'
                      ? 'Property being rented'
                      : 'Rent Property'}
                    <img
                      src="src/assets/hand-over.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleSell('propertyOwned5', 'propertyRented5');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Sell Property
                    <img
                      src="src/assets/payment-method.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            ) : (
              <div className="mt-3 flex flex-wrap gap-10">
                <Tilt className="xs:w-[250px] w-full">
                  <button
                    onClick={() => {
                      handleBuy('propertyOwned5');
                      setUserData('');
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card"
                  >
                    Buy Property
                    <img
                      src="src/assets/shopping-cart.png"
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                  </button>
                </Tilt>
              </div>
            )
          ) : (
            <div className="mt-3 flex flex-wrap gap-10">
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Rent Property
                  <img
                    src="src/assets/hand-over.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Buy Property
                  <img
                    src="src/assets/shopping-cart.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
              <Tilt className="xs:w-[250px] w-full">
                <button className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border shadow-card">
                  Sell Property
                  <img
                    src="src/assets/payment-method.png"
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </Tilt>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
