import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'

const Maps = () => {
    const [maps, setMaps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://valorant-api.com/v1/maps')
        .then((res) => res.json())
        .then((data) => {
            setMaps(data.data)
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
        <h1>Maps</h1>
        <div className='mapsList'>
            {maps.map((map) => (
                <>
                {map.narrativeDescription === null ? '' : 
                <div className='maps' key={map.uuid}>
                    <h2>{map.displayName}</h2>
                    <img src={map.displayIcon} alt={map.displayName} />
                    <p>{map.description}</p>
                </div>
                }
                </>
            ))}
        </div>
    </div>
  )
}

export default Maps