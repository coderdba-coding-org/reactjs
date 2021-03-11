import React, { useRef } from 'react'
import { D3ForceGraph13 } from './D3ForceGraph13'

export function D3ForceGraph13App() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {D3ForceGraph13(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}