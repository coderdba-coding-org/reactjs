import * as d3 from 'd3'
import data from './data.json'

export function ForceGraph02(container){

    const links = data.links
    const nodes = data.nodes

    const height = 200
    const width = 200
  
    const color = '#f6c3d0'
    //const color = '#d6d3d0'

     // taken from the other example
  const svg = d3
  .select(container)
  .append('svg')
  //.attr('viewBox', [-width / 10, -height / 10, width, height])
  .attr('viewBox', [-50, -50, 200, 200])
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
  .attr('stroke-opacity', 1.0)
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
  //.call(drag(simulation))

// title for the nodes
node.append('title').text((d) => d.id)

// the simulation
const simulation = d3
                    .forceSimulation(nodes)
                    .force('link', d3.forceLink(links).id((d) => d.id))

// start the simulation
//simulation.on('tick', () => {})

simulation.on('tick', () => {
  link
    .attr('x1', (d) => d.source.x)
    .attr('y1', (d) => d.source.y)
    .attr('x2', (d) => d.target.x)
    .attr('y2', (d) => d.target.y)

  node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
})
                    
}