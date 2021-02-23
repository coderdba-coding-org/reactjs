import React from 'react'
import { runForceGraph } from './forceGraphGenerator'
import styles from './forceGraph.module.css'

export function ForceGraph({ linksData, nodesData, nodeHoverTooltip }) {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    let destroyFn

    if (containerRef.current) {
      // { destroy } is used instead of just "destroy" - per ES6
      // also, as the function runForceGraph returns two values, to capture one or both - enclose in {}
      const { destroy } = runForceGraph(
        containerRef.current,
        linksData,
        nodesData,
        nodeHoverTooltip
      )
      destroyFn = destroy
    }

    return destroyFn
  }, [])

  return <div ref={containerRef} className={styles.container} />
}
