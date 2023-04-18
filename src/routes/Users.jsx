import React, { Component, useEffect, useState } from 'react';

export default function Users() {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    fetch(import.meta.env.VITE_BACKEND_URL + '/api/users/all-users', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  };

  useEffect(() => {
    console.log('call userData');
    console.log(userData);
  }, [userData]);

  return (
    <div class="h-screen 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div class="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col content-center items-center">
          <h3 class="text-3xl font-bold leading-none text-gray-900 dark:text-white">
            Public Dashboard
          </h3>
          <button
            onClick={() => getUserData()}
            className="mt-[30px] px-[20px] py-[5px] border-[1px] border-solid border-black text-black"
          >
            update dashboard
          </button>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {userData?.map((item, index) => {
              return (
                <li class="py-3 sm:py-4" key={index}>
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="my-3 text-2xl lg:text-2xl font-bold ">
                        Username
                      </p>
                      <p class="text-sm font-small text-gray-500 truncate dark:text-gray-400 px-4 ">
                        {item?.username}
                      </p>
                      <p class="my-3 text-2xl lg:text-2xl font-bold ">
                        Properties Owned
                      </p>
                      <p class="text-sm font-small text-gray-500 truncate dark:text-gray-400">
                        {item?.realEstateOwned.map((item, index) => {
                          return (
                            <li
                              class=" border-none w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
                              key={index}
                            >
                              {item?.realEstateType}
                            </li>
                          );
                        })}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {'$' + item?.money}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
