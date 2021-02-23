import React, { useState, useEffect } from 'react'
import { ForceGraph02 } from './ForceGraph02'
import styles from './styles.css'
//import './App.css'

export function ForceGraph02App() {
  /*
    return(
    <div className="App">
      <header className="App-header">Force Graph Example</header>
      <section className="Main">
        <ForceGraph02 />
      </section> 
    </div>
    )
*/

  const containerRef = React.useRef(null)

  React.useEffect(() => {
    let destroyFn

    if (containerRef.current) {
      // { destroy } is used instead of just "destroy" - per ES6
      // also, as the function returns two values, to capture one or both - enclose in {}
      const { destroy } = ForceGraph02(containerRef.current)
      destroyFn = destroy
    }

    return destroyFn
  }, [])

  return <div ref={containerRef} className={styles.container} />
}
