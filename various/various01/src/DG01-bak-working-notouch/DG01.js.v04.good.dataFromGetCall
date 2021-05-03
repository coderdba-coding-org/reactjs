import React, { useRef } from 'react'
import { DG01 } from './DG01'

export function DG01App() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {DG01(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}
