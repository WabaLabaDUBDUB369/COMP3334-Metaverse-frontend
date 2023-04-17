import React, { Component, useEffect, useState } from "react";

export default function AboutUs() {
  return (
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
            <div class="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Welcome! We are a dedicated team of real estate professionals with a passion for helping our clients find their dream properties. With years of experience in the industry, we have built a reputation for providing exceptional service, market insights, and expert guidance throughout the buying and selling process. Our goal is to make every real estate transaction a seamless and enjoyable experience for our clients. Contact us today at <span style={{backgroundColor: '#167bff', borderRadius: 2, padding: 2}}>thepropertypalace@gmail.com</span> to learn more about how we can help you achieve your real estate goals.</p>
            </div>
            <div class="w-full lg:w-8/12">
                <img class="w-full h-full mt-5" src="../real_estate.jpg" alt="A group of People" />
            </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div class="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Our real estate business began with a simple yet powerful mission: to provide exceptional service and guidance to clients looking to buy or sell real estate. We started as a small team of passionate real estate agents, driven by a desire to help people find their dream homes. Over time, our business grew, and we expanded our services to include property management, investment, and development. Today, we are proud to be one of the most trusted and respected real estate firms in the region, with a reputation for excellence, integrity, and customer satisfaction. We remain committed to our mission of providing personalized and professional real estate services to clients of all backgrounds and needs, and we look forward to helping many more people achieve their real estate goals in the years to come.</p>
            </div>
            <div class="w-full lg:w-8/12 lg:pt-8">
                <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                        <img class="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Alexa</p>
                    </div>
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                        <img class="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Olivia</p>
                    </div>
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                        <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Liam</p>
                    </div>
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                        <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Elijah</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}