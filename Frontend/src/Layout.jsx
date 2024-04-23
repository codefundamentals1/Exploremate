
import React, { createContext, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import IternaryDataContext from './IternaryDataContext';

function Layout() {
  const iternaryData = useRef(null);

  return (
    <>
    <Navbar></Navbar>
      <IternaryDataContext.Provider value={iternaryData}>
        <Outlet/>
      </IternaryDataContext.Provider>
    <Footer></Footer>
    </>
  )
}

export default Layout