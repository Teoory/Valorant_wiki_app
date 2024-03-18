import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Agents from '../Pages/Agents'
import Gamemodes from '../Pages/Gamemodes'
import Maps from '../Pages/Maps'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/gamemodes" element={<Gamemodes />} />
        <Route path="/maps" element={<Maps />} />
    </Routes>
  )
}

export default AppRouter