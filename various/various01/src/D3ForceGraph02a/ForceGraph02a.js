import * as d3 from 'd3'
import data from './data.json'

export function ForceGraph02a(container){

  const links = data.links
  const nodes = data.nodes

  const height = 200
  const width = 200
  
  //const color = '#f6c3d0'
  const color = '#d6d3d0'

  // the simulation
  const simulation = d3
                        .forceSimulation(nodes)
                        .force('link', d3.forceLink(links).id((d) => d.id))
                        .force('charge', d3.forceManyBody())
                        .force('center', d3.forceCenter(width / 2, height / 2))

  // drag behaviour
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
    
  // ADD SVG: define an svg for the 'container' ref in the <div>
  // taken from the other example (D3ForceGraph01)
  const svg = d3
                  .select(container)
                  .append('svg')
                  .attr('viewBox', [-width / 10, -height / 10, width, height])
                  //.attr('viewbox', [20,20,200,200])
                  .call(
                          d3.zoom().on('zoom', function (event) {
                          svg.attr('transform', event.transform)
                          })
                      )

  // ADD LINKS TO SVG: configure links with opacity, width etc
  // https://github.com/d3/d3-selection --> for selectAll and join
  // https://observablehq.com/@d3/selection-join --> for selectAll and join
  // more legible and intutive code
  const link = svg
                    .append('g')
                    .selectAll('line')
                    .data(links)
                    .join('line')
                    .attr('stroke', '#999')
                    .attr('stroke-opacity', 1.0)
                    .attr('stroke-width', (d) => Math.sqrt(d.value))

  /* Original code
  const link = svg
                    .append('g')
                    .attr('stroke', '#999')
                    .attr('stroke-opacity', 1.0)
                    .selectAll('line')
                    .data(links)
                    .join('line')
                    .attr('stroke-width', (d) => Math.sqrt(d.value))
  */

  // ADD NODES TO SVG: configure nodes - joining 'circle' shapes
  // more legible code
  const node = svg
                    .append('g')
                    .selectAll('circle')
                    .data(nodes)
                    .join('circle')
                    .attr('r', 5)
                    .attr('fill', color)
                    .attr('stroke', '#aaa')
                    .attr('stroke-width', 1.5)
                    .call(drag(simulation))

  /* Original code
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
  */

  // title for the nodes
  node.append('title').text((d) => d.id)
  
  // start the simulation

  // this places all nodes one over the other
  //simulation.on('tick', () => {})

  // This positions the nodes with link's two ends with coordinates x1, y1 and x2, y2 
  simulation.on('tick', () => {
    
      link
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y)

      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
  })

                    
}