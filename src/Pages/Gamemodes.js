import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'

const Gamemodes = () => {
    const [gamemodes, setGamemodes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://valorant-api.com/v1/gamemodes')
        .then((res) => res.json())
        .then((data) => {
            setGamemodes(data.data)
            setLoading(false)
        })
        .catch((error) => {
            setError(error)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    
  return (
    <div>
        <Header />
        <h1>Gamemodes</h1>
        <div className='gamemodesList'>
            {gamemodes.map((gamemode) => (
                <div className='gamemodes' key={gamemode.uuid}>
                    <h2>{gamemode.displayName}</h2>
                    <p>{gamemode.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Gamemodes