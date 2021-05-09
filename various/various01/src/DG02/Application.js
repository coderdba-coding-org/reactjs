// Return everything that needs to be displayed
// - One or more components

import React, { useRef }  from 'react'

import { NetworkGraph } from './NetworkGraph'

export function Application() {

  console.log("In 'Application'")
  const containerRef = React.useRef("someArbitraryRef")
  React.useEffect(() => {NetworkGraph(containerRef.current) }, [])

  return (
        <div ref={containerRef} />
  )
}