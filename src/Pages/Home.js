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
        {/* valorant info */}
        <div className="valorantInfo">
          <h2>Valorant</h2>
          <p>Valorant is a free-to-play multiplayer first-person shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by official release on June 2, 2020.</p>
          <p>Valorant is a team-based tactical shooter and first person shooter set in the near future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities and use an economic system to purchase their abilities and weapons.</p>
          <p>Valorant is a game that is heavily based on strategy and teamwork. It is a game that is heavily based on strategy and teamwork. It is a game that is heavily based on strategy and teamwork. It is a game that is heavily based on strategy and teamwork.</p>
        </div>

        {/* newest valorant */}
        <div className="newestValorant">
          <h2>Newest Valorant</h2>
          <p>Valorant Episode 3 Act 1 is here and it brings a new agent, a new battle pass, and a new map. The new agent is KAY/O, a robot that can suppress enemy abilities and self-destruct. The new map is Breeze, a tropical island map with open spaces and tight corridors. The new battle pass includes new weapon skins, gun buddies, and sprays. The new agent, map, and battle pass are available now in Valorant.</p>
        </div>
    </div>
    </>
  )
}

export default Home