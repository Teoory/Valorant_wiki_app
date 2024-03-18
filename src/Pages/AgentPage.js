import React, { useState } from 'react'

const AgentPage = () => {
    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(true)
    return (
        <div>
            <h1>Agents</h1>
        </div>  
    )
}

export default AgentPage