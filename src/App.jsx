import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './customer/page/HomePage'
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <>

      <Routes>
         <Route path={`/`} element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
