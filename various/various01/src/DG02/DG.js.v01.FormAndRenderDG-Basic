//  Force graph with labels: https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8
//    Same as: https://observablehq.com/@garciaguillermoa/force-directed-graph
//Also check: https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8

import * as d3 from 'd3'
import { useState } from 'react';
//import axios from 'axios'

//import data from './data/data1.json'
//import dataNodes from './data/data1Nodes.json'
import dataLinks from './data/data1Links.json'

export function DG(container, app){

    const height = 600  //600
    const width  = 800  //600

    // Hardcoded color
    const color = '#f6c3d0'
    //const color = '#ff0000'

    // obtain dataNodes by calling API that generates nodes with metrics
    let dataNodesFromApi
    console.log('Calling http://localhost:808X/<to get network metric> ')

    const request = async () => {

    const response = await fetch('http://localhost:8081/network/' + app);
    const responseJson = await response.json();
    console.log(responseJson);

    let dataNodes = responseJson
    //const links = data.links.map(d => Object.create(d));
    //const nodes = data.nodes.map(d => Object.create(d));
    const links = dataLinks.links.map(d => Object.create(d));
    const nodes = dataNodes.nodes.map(d => Object.create(d));

    const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("charge", d3.forceManyBody().strength(-800)) // to add repulsion strength
    .force("center", d3.forceCenter(width / 2, height / 4));

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
          //event.subject.fx = null;
          //event.subject.fy = null;

          // to retain dragged position
          event.subject.fx = event.x;
          event.subject.fy = event.y;

        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    // Mouseover function
    function mouseover() {
      d3.select(this).select("text").transition()
          .duration(750)
          .text(function(d) {
            return d.id + ", metric(baseline):" + d.value + "(" + d.baseline + ")" + " ---- Is it OK?";
          })
     }

    function mouseover1() {
      d3.select(this).select("rect").transition()
          .duration(750)
          .attr("width", 15)
          .attr("height", 15)
     }
    
     // Mouseout function
     function mouseout() {
      d3.select(this).select("text").transition()
          .duration(750)
          .text(function(d) {
            return d.id + ", metric(baseline):" + d.value + "(" + d.baseline + ")";
          })
     }

     function mouseout1() {
      d3.select(this).select("rect").transition()
          .duration(750)
          .attr("width", 5)
          .attr("height", 5)
     }

     // mouse on-click
     function mouseclick() {

      var width  = 30
      var height = 30

      //console.log("d3 this attr width: " + d3.select(this.firstChild).attr("width"))

      if (d3.select(this.firstChild).attr("width") == 20) {
        width  = 20
        height = 20
      } else {
      
        if (d3.select(this.firstChild).attr("width") == 15) {
          width  = 5
          height = 5
        } else {
           width  = 15
          height = 15
        }
      }

      d3.select(this).select("rect").transition()
          .duration(750)
          .attr("width", width)
          .attr("height", height)
     }

     function mouseclickOrig() {
      d3.select(this).select("rect").transition()
          .duration(750)
          .attr("width", 15)
          .attr("height", 15)
     }

     // Mouseout function
     function mouseout() {
      d3.select(this).select("text").transition()
          .duration(750)
          .text(function(d) {
            return d.id + ", metric(baseline):" + d.value + "(" + d.baseline + ")";
          })
     }

   const svg = d3
   .select(container)
   .append("svg")
   .attr("viewBox", [0, 0, width, height])
   .attr("fill", "steelblue");

   const link = svg.append("g")
   .attr("stroke", "#999")
   .attr("stroke-opacity", 0.6)
   .selectAll("line")
   .data(links)
   .join("line");
   //.attr("stroke-width", d => Math.sqrt(d.value)); // commented this as this behavior is not needed

   // both .node and circle work here
   // comment out drag call to make the nodes not draggable
   const node = svg.append("g")
   .selectAll(".node")
   //.selectAll("circle") //will use rect down below instead of circle
   .data(nodes)
   .join("g")
   .attr('class', 'node')
   .call(drag(simulation))
   .on("mouseover", mouseover)
   .on("mouseout", mouseout)
   .on("click", mouseclick);

  // make the nodes show as rectangles (works)
  node
  .append("rect")
  .attr("width", function(d) {if (d.group == 0) {return 20} else {return 5}})
  .attr("height", function(d) {if (d.group == 0) {return 20} else {return 5}})
  .attr("fill", function(d) {if (d.value > d.baseline) {return '#ff0000'} })
  //.attr("fill", color)

  node
   .append("text")
   .text(function(d) {
     return d.id + ", metric(baseline):" + d.value + "(" + d.baseline + ")";
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
  request();
}