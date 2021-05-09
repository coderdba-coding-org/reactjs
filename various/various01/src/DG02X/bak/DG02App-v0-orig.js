import React, { useRef } from 'react'
import { DG02 } from './DG02'

export function DG02App() {

    const containerRef = React.useRef("someArbitraryRef")

    React.useEffect(() => {DG02(containerRef.current) }, [])
    
    return <div ref={containerRef} />
}
