// Reference: https://observablehq.com/@d3/force-directed-graph
// Docs: https://github.com/d3/d3-force/blob/v2.1.1/README.md#forceSimulation

import React from 'react'
import * as d3 from 'd3'
import data from './data.json'
import styles from './styles.css'

export function ForceGraph02(container) {
  const links = data.links
  const nodes = data.nodes

  const height = 600
  const width = 600

  const color = '#f6c3d0'

  // d3.forceManyBody() - without parameters uses defaults
  // d3.forceCenter() - center of the force - defaults to 0,0
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3.forceLink(links).id((d) => d.id)
    )
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))

  const drag = (simulation) => {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    }

    function dragged(event) {
      event.subject.fx = event.x
      event.subject.fy = event.y
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0)
      event.subject.fx = null
      event.subject.fy = null
    }

    return d3
      .drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended)
  }

  /* original code from reference
//--> initially commented the line 'select.container' as we did have a container defined as in ForceGraph01
const svg = d3.create("svg")
.attr("viewBox", [0, 0, width, height]);
//.select(container) 
*/

  // taken from the other example
  const svg = d3
    .select(container)
    .append('svg')
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .call(
      d3.zoom().on('zoom', function (event) {
        svg.attr('transform', event.transform)
      })
    )

  // configure links with opacity, width etc
  // https://github.com/d3/d3-selection --> for selectAll and join
  // https://observablehq.com/@d3/selection-join --> for selectAll and join
  const link = svg
    .append('g')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke-width', (d) => Math.sqrt(d.value))

  // configure nodes - joining 'circle' shapes
  const node = svg
    .append('g')
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', 5)
    .attr('fill', color)
    .call(drag(simulation))

  // title for the nodes
  node.append('title').text((d) => d.id)

  // simulation
  simulation.on('tick', () => {
    link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)

    node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
  })

  //const invalidation = invalidation.then(() => simulation.stop());

  // original
  // return svg.node();

  // taken from other example
  return {
    destroy: () => {
      simulation.stop()
    },
    nodes: () => {
      return svg.node()
    },
  }
}
