import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
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

export default Header