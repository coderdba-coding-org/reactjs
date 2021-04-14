import React, { useRef } from 'react'
import { D3ForceGraph14 } from './D3ForceGraph14'

export function D3ForceGraph14App() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {D3ForceGraph14(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}