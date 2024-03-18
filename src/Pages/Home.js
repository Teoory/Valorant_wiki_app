import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="topPage">
        <h1>Valorant Wiki</h1>
        <p>Agents-Maps-Gamemodes</p>
    </div>

    <div className="pagesNav">
        <div className='compNavs'>
            <div><Link to={"/agents"}>Agents</Link></div>
            <div><Link to={"/maps"}>Maps</Link></div>
            <div><Link to={"/gamemodes"}>Gamemodes</Link></div>
        </div>
    </div>
    </>
  )
}

export default Home