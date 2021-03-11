import React, { useRef } from 'react'
import { D3ForceGraph12 } from './D3ForceGraph12'

export function D3ForceGraph12App() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {D3ForceGraph12(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}