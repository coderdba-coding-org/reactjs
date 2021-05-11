import React, { useRef } from 'react'
import AxiosGraph02Func from './AxiosGraph02-v00-Func'

export default function AxiosGraph02FuncApp(nodeName) {

    const containerRef = React.useRef("someArbitraryRef")

    console.log("DGApp(): App is: ", nodeName)

    React.useEffect(() => {AxiosGraph02Func(containerRef.current, nodeName) }, [])
    
    return (<div ref={containerRef} />)
}