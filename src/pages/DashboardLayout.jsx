import React, { use } from 'react'
import { Outlet } from 'react-router-dom'
import {BigSidebar, SmallSidebar, Navbar} from '../components/index.js'
import Wrapper from '../assets/wrappers/Dashboard.js'
import { createContext,useState,useContext } from 'react';
const DashboardContext = createContext();
const DashboardLayout = () => {
  const [user,setUser] = useState({name:'John Doe'});
  const [showSideBar,setShowSidebar] = useState(true); 
  const [isDarkTheme,setIsDarkTheme] = useState(false);  
  
  const logoutUser = () => {
    setUser(null);
  }
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  }

  return (
    <DashboardContext.Provider value={{user,showSideBar,isDarkTheme,toggleSidebar,toggleDarkTheme}}>
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        <SmallSidebar />
        <div>
          <Navbar/>
          <div className='dashboard-page'>
            <Outlet /> 
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout
