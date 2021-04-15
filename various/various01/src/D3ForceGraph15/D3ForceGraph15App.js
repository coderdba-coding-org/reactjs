import React, { useRef } from 'react'
import { D3ForceGraph15 } from './D3ForceGraph15'

export function D3ForceGraph15App() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {D3ForceGraph15(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}