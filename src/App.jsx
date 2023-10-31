import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Particle from './components/Particle/Particle'
import WebCursor from './components/WebCursor/WebCursor'
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import AboutUs from './components/AboutUs/AboutUs'
import ProjDom from './components/ProjDom/ProjDom'
import Gallery from './components/Gallery/Gallery'
import UnderBuild from './components/UnderBuild/UnderBuild'
import Login from './components/Login/Login'
import DownApp from './components/DownApp/DownApp'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <Particle />
        <WebCursor />
        <Nav />
          <Routes>
            <Route path = "/" element={
              <>
                <Landing />
                <AboutUs />
                <ProjDom />
                <Gallery/>
              </>
            } />
            <Route path = "/underConstruction" element={
              <UnderBuild />
            } />
            <Route path = "/login" element={
              <Login />
            } />
            <Route path = "/register" element={
              <UnderBuild />
            }/>
            <Route path = "/download-app" element={
              <DownApp />
            } />
            <Route path = "/about-us-more" element={
              <UnderBuild />
            }/>
            <Route path = "/team" element={
              <UnderBuild />
            }/>
            <Route path = "/contact-us" element={
              <UnderBuild />
            }/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
