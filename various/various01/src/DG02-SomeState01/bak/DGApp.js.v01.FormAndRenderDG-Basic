import React, { useRef } from 'react'
import { DG } from './DG'

export function DGApp(app) {

    const containerRef = React.useRef("someArbitraryRef")

    console.log("DGApp(): App is: ", app)

    React.useEffect(() => {DG(containerRef.current, app) }, [])
    
    return (<div ref={containerRef} />)
}