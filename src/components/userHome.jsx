import React, { Component, useEffect, useState } from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <section>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Account Details
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                          <input disabled value={userData.username} type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      </div>
                      <div>
                          <label for="money" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Money Remaining</label>
                          <input disabled value={userData.myMoney} type="text" name="money" id="money" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      </div>
                      <div>
                          <label for="realestate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Properties Owned</label>
                          <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {
                                  userData.myRealEstate.map((item)=> { <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">{item.realEstateType}</li> })
                                }
                          </ul>
                      </div>
                      <button onClick={logOut} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-500 hover:bg-sky-700 rounded px-3">Log Out</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
}
