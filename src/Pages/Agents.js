import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'

const Agents = () => {
    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents')
        .then((res) => res.json())
        .then((data) => {
            setAgents(data.data)
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
            <h1>Agents</h1>
            <div className='agentList'>
                {agents.map((agent) => (
                    <div className='agents' key={agent.uuid}>
                        <h2>{agent.displayName}</h2>
                        <img src={agent.displayIcon} alt={agent.displayName} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Agents