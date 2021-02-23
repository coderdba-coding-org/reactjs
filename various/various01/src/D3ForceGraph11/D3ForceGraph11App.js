//Reference: https://www.d3indepth.com/force-layout/
//Other Reference: https://observablehq.com/@d3/force-directed-graph
//https://bl.ocks.org/d3indepth/c48022f55ebc76e6adafa77cf466da35

import React from 'react'
import * as d3 from 'd3'

var width = 300, height = 300
var nodes = [{}, {}, {}, {}, {}]

var simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(width / 2, height / 2))
  .on('tick', ticked);

function ticked() {
  var u = d3.select('svg')
    .selectAll('circle')
    .data(nodes)

  u.enter()
    .append('circle')
    .attr('r', 5)
    .merge(u)
    .attr('cx', function(d) {
      return d.x
    })
    .attr('cy', function(d) {
      return d.y
    })

  u.exit().remove()
}



