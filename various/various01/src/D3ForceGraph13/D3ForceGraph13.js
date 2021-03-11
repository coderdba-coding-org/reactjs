//  Force graph with labels: https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8
//    Same as: https://observablehq.com/@garciaguillermoa/force-directed-graph

import * as d3 from 'd3'
import data from './miserables.json'

export function D3ForceGraph13(container){

    const height = 600
    const width  = 600

    /* Original code - does not work
    const color = {
        const scale = d3.scaleOrdinal(d3.schemeCategory10);
        return d => scale(d.group);
    }
    */
    const color = '#f6c3d0'

    const links = data.links.map(d => Object.create(d));
    const nodes = data.nodes.map(d => Object.create(d));

    const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    //.force("charge", d3.forceManyBody().strength(-80)) // to add repulsion strength
    .force("center", d3.forceCenter(width / 2, height / 2));

    const drag = (simulation) => {
  
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }
        
        
        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          // to allow resetting position back
          event.subject.fx = null;
          event.subject.fy = null;

          // to retain dragged position
          //event.subject.fx = event.x;
          //event.subject.fy = event.y;

        }

        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    /* Original code: 'create' does not work here - use append as we need to select the container 
    const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height]);
    */

   const svg = d3
   .select(container)
   .append("svg")
   .attr("viewBox", [0, 0, width, height]);

   const link = svg.append("g")
   .attr("stroke", "#999")
   .attr("stroke-opacity", 0.6)
   .selectAll("line")
   .data(links)
   .join("line")
   .attr("stroke-width", d => Math.sqrt(d.value));

   // both .node and circle work here
   // comment out drag call to make the nodes not draggable
   const node = svg.append("g")
   .selectAll(".node")
   //.selectAll("circle")
   .data(nodes)
   .join("g")
   .attr('class', 'node')
   .call(drag(simulation));

   // make the nodes as circles (works)
   /*
   node.append('circle')
   .attr("r", 5)
   .attr("fill", color);
   */

  // make the nodes show as rectangles (works)
  node
  .append("rect")
  .attr("width", 5)
  .attr("height", 5)
  .attr("fill", color);
  

   node.append("text")
   .text(function(d) {
     return d.id;
   })
   .style('fill', '#000')
   .style('font-size', '12px')
   .attr('x', 6)
   .attr('y', 3);

   simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("transform", d => `translate(${d.x}, ${d.y})`);
   });

   //invalidation.then(() => simulation.stop());

   return svg.node();
}