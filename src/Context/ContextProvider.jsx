import {  createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
const stateContext = createContext();

export const AppContext = ({ children }) => {
  const [tour, setTour] = useState([]);
  const [users, setUsers] = useState([]);
  const [contact, setContact] = useState([]);
  const [booking, setBooking] = useState([]);
  const [todoss, setTodoss] = useState([]);

  
// date: "2025-05-23T21:44:51.787Z";
// descrption: "Iyi phone irarenze ndayishaka noaha cyn, woe wayibye yizane hano.";
// itemImage: "src/middlewares/uploads/81d5b26c92a0a81468b616b269eea158";
// itemName: "Samsung S12";
// itemSerial: "IME7384782326328223";
// location: "Nyamirambo";
// ownerEmail: "bohqf9f5i@mozmail.com";
// ownerName: "Vincent";
// ownerPhone: "0787733262";
// status: "lost";

  useEffect(() => {
    const fetchtours = async () => {
      try {
        const response = await axiosClient.get(
          "https://lostandfoundapi.onrender.com/items"
        );
        console.log(response.data);
        setTour(response.data);
      } catch (err) {
        if (err.response) {
          console.log;
          err.response.data;
          console.log;
          err.response.status;
          console.log;
          err.response.headers;
        } else {
          console.log("error: ${err.message}");
        }
      }
    };
    fetchtours();
  }, []);

  let tokenn = localStorage.getItem("token");
  console.log(tokenn);
  useEffect(() => {
    const fetchposts = async () => {
      try {
        const response = await axiosClient.get(
          "https://lostandfoundapi.onrender.com/users",
          {
            headers: {
              Authorization: "Bearer " + tokenn,
            },
          }
        );
        console.log(response.data);

        setUsers(response.data);
      } catch (err) {
        if (err.response) {
          console.log;
          err.response.data;
          console.log;
          err.response.status;
          console.log;
          err.response.headers;
        } else {
          console.log("error: ${err.message}");
        }
      }
    };
    fetchposts();
  }, []);

  useEffect(() => {
    const fetchcontact = async () => {
      try {
        const response = await axiosClient.get(
          "https://lostandfoundapi.onrender.com/contacts",
          {
            headers: {
              Authorization: "Bearer " + tokenn,
            },
          }
        );
        console.log(response.data);

        setContact(response.data);
      } catch (err) {
        if (err.response) {
          console.log;
          err.response.data;
          console.log;
          err.response.status;
          console.log;
          err.response.headers;
        } else {
          console.log("error: ${err.message}");
        }
      }
    };
    fetchcontact();
  }, []);

  // useEffect(() => {
  //   const fetchbook = async () => {
  //     try {
  //       const response = await axiosClient.get(
  //         `https://holiday-planner-4lnj.onrender.com/api/v1/booking/view`,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + tokenn,
  //           },
  //         }
  //       );
  //       console.log(response.data);

  //       setBooking(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log;
  //         err.response.data;
  //         console.log;
  //         err.response.status;
  //         console.log;
  //         err.response.headers;
  //       } else {
  //         console.log("error: ${err.message}");
  //       }
  //     }
  //   };
  //   fetchbook();
  // }, []);

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // const fetchTodos = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://todo-app-api-fkhb.onrender.com/api/todos"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch todos");
  //     }
  //     console.log(response);
  //     setTodoss(response.data);
  //   } catch (error) {
  //     alert(error);
  //     console.error("Error fetching todos:", error);
  //   }
  // };

  return (
    <stateContext.Provider
      value={{
        users,
        setUsers,
        tour,
        setTour,
        contact,
        setContact,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const mycontext = () => useContext(stateContext);
