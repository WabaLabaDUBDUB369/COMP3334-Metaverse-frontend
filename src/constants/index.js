// import {
  
// } from "../assets";
const isLoggedIn = window.localStorage.getItem("loggedIn");

export const navLinks = 
  isLoggedIn == "true" ?
  [{
    id: "signed-in",
    title: "Signed In",
  },
  {
    id: "aboutus",
    title: "About Us",
  }]
  :
  [{
    id: "sign-in",
    title: "Sign In",
  },
  {
    id: "aboutus",
    title: "About Us",
  }]



export {};
