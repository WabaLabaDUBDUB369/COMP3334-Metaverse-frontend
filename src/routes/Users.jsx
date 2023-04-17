import React, { Component, useEffect, useState } from 'react';

export default function Users() {
    const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allUsers ', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, []);

    return (
        <div class="mt-20 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex content-center justify-center">
                <h3 class="text-3xl font-bold leading-none text-gray-900 dark:text-white">User Information</h3>
            </div>
            <div class="flow-root">
                {console.log("The username is: ", userData)}
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">

                        {
                            userData.map((item, index) => {
                                return(
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="my-3 text-2xl lg:text-2xl font-bold ">
                                                    Username
                                                </p>
                                                <p class="text-sm font-small text-gray-500 truncate dark:text-gray-400 px-4 ">
                                                    {item.username}
                                                </p>
                                                <p class="my-3 text-2xl lg:text-2xl font-bold ">
                                                    Properties Owned
                                                </p>
                                                <p class="text-sm font-small text-gray-500 truncate dark:text-gray-400">
                                                    {
                                                        item.realEstateOwned.map((item, index)=> { return(<li class=" border-none w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">{item.realEstateType}</li>) })
                                                    }
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {'$' + item.money}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
            </div>
        </div>
        </div>
    );
}
