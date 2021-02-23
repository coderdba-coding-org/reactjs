import React, { useRef } from 'react'
import { ForceGraph02a } from './ForceGraph02a'

export function ForceGraph02aApp() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {ForceGraph02a(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}