import React, { useRef } from 'react'
import { ForceGraph02 } from './ForceGraph02'

export function ForceGraph02App() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {ForceGraph02(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}