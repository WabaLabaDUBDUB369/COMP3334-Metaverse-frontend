// import {
  
// } from "../assets";
const isLoggedIn = window.localStorage.getItem("loggedIn");

export const navLinks = 
  [isLoggedIn == "true" ?
  {
    id: "signed-in",
    title: "Signed In",
  } :
  {
    id: "sign-in",
    title: "Sign In",
  },
  {
    id: "users",
    title: "All Users"
  },
  {
    id: "aboutus",
    title: "About Us",
  }
  ]


export {};
