import React, { Component, useEffect, useState } from 'react';

import UserHome from '../components/userHome';

export default function UserDetails() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
      console.log("request", request);
      fetch('http://localhost:3000/my-assets',
        {
          method: "GET",
        }
      ).then((response) => response.json())
      .then((data) => {
        console.log(data, 'userData');
        setUserData(data.data);
      });
    }, []);

  return <UserHome userData={userData} />;
}
