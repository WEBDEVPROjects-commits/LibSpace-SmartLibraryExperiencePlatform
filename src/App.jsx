import "./App.css";
import { HomeContext } from "../Context/Context.jsx";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from "../HomePageComponents/HomePage.jsx";
import Login from "../SignupLoginComponents/Login.jsx";
import Signup from "../SignupLoginComponents/Signup.jsx";
import { useEffect, useState, useMemo } from "react";
import Dashboard from "../DashboardComponents/Dashboard.jsx";
import { Navigate } from "react-router-dom";
import ProtectedRoute2 from "../ProtectedRoute/ProtectedRoute2.jsx";
import ProtectedRoute1 from "../ProtectedRoute/ProtectedRoute1.jsx";
import Books from "../DashboardComponents/Books.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [searchedBook, setsearchedBook] = useState("");
  const [api, setApi] = useState([]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const fetches = async (searchedBook) => {
    // const resp=await fetch('https://openlibrary.org/search.json');
    try{
      const resp = await fetch(
        `https://openlibrary.org/search.jsonq=${searchedBook.replace(" ", "+")}`,
      );  
      if(!resp.ok){
        throw new Error("Failed to fetch books");
      }
      const data = await resp.json();
      console.log(data);
      setApi(data.docs);
    }
    catch(error){
      console.log(error);
    }
  };

  //  const Contextvalue= useMemo(() => {
  //     return {
  //       isLoggedIn,
  //       setIsLoggedIn
  //     }
  //   })
  return (
    <>
      <HomeContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          searchedBook,
          setsearchedBook,
          api,
          fetches,
          setApi,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute1 />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Login" element={<Login />}>
                {/* <Route path="/" element={isLoggedIn?<Navigate to="/Dashboard" replace/>:<HomePage />}/>
            <Route path="/Login" element={isLoggedIn?<Navigate to="/Dashboard" replace/>:<Login/>}> */}
              </Route>
            </Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route element={<ProtectedRoute2 />}>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HomeContext.Provider>
    </>
  );
}

export default App;
