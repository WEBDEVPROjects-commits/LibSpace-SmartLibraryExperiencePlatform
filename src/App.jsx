import './App.css'
import { HomeContext } from '../Context/Context.jsx'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import HomePage from '../HomePageComponents/HomePage.jsx'
function App() {
  return (
    <>
    <HomeContext.Provider value="hello">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          {/* <Route path='/Login' element={<HomePage/>}></Route> */}
          {/* <Route path='/Dashboard' element={<Dashboard/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </HomeContext.Provider>
    </>
  )
}

export default App
