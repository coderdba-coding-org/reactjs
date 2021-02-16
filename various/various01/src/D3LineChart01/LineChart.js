import React, { useEffect } from 'react'
import * as d3 from 'd3'

import './index.scss'

export function LineChart(props) {
  // this is equivalent to "const data = props.data" and so on
  const { data, width, height } = props

  // useEffect to call the function drawChart (which itself is called in an arrow-function)
  // - and, to fire upon changes to 'data' -> see second argument
  useEffect(() => {
    drawChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  // maybe, define drawChart() in another file for clarity
  function drawChart() {
    // wipe off the old chart before plotting the new chart with the new data.
    // So add this to the top of your drawChart() function:

    d3.select('#container').select('svg').remove()

    d3.select('#container').select('.tooltip').remove()

    const margin = { top: 50, right: 50, bottom: 50, left: 50 }

    // y axis is values
    // choose min and max from 'data' iterating on data-element.value
    const yMinValue = d3.min(data, (d) => d.value)
    const yMaxValue = d3.max(data, (d) => d.value)

    // x axis is labels
    // choose min and max from 'data' iterating on data-element.value
    const xMinValue = d3.min(data, (d) => d.label)
    const xMaxValue = d3.max(data, (d) => d.label)

    // Add SVG element
    // We select the #container element and append an SVG inside it
    // and a g element to group other SVG elements,
    // and translate it, leaving the left and top margins.
    // We also append a div element which will contain our tooltipContent .
    const svg = d3
      .select('#container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Tooltip: We will be adding a circle marker for the point we are
    // hovering over and a tooltip box. Initially, the opacity of the
    // tooltip will be set to 0 and the circle marker will also
    // not be displayed unless some mouse event happens.
    /* Commenting this - as this is re-defined further below
    const tooltip = d3
      .select('#container')
      .append('div')
      .attr('class', 'tooltip');
      //.style('opacity',0)
    */

    // Let us define the axes scales and the line/path generator next:
    // x axis scale
    const xScale = d3
      .scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width])

    // y axis scale
    // using yMinValue did not produce scale grid properly
    const yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue])

    // the line graph
    const line = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX)

    // grid horizontal lines
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(''))

    // grid vertical lines
    svg
      .append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(''))

    // grid x axis
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom().scale(xScale).tickSize(15))

    // grid y axies
    svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale))

    // to svg, append a 'path' to trace with type ('d', line)
    // where line is defined earlier abobe
    // using data in datum(data)
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#f6c3d0')
      .attr('stroke-width', 4)
      .attr('class', 'line')
      .attr('d', line)

    // a new tooltip?
    // Adding the Tooltip
    // We will be adding a circle marker for the point we are
    // hovering over and a tooltip box.
    // Initially, the opacity of the tooltip will be set to 0
    // and the circle marker will also not be displayed unless
    // some mouse event happens
    const focus = svg
      .append('g')
      .attr('class', 'focus')
      .style('display', 'none')

    focus.append('circle').attr('r', 5).attr('class', 'circle')

    const tooltip = d3
      .select('#container')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)

    // an invisible (if opacity is set to 0) rectangle to capture mouse events
    svg
      .append('rect')
      .attr('class', 'overlay')
      .attr('width', width)
      .attr('height', height)
      .style('opacity', 0.2)
      .on('mouseover', () => {
        focus.style('display', null)
      })
      .on('mouseout', () => {
        tooltip.transition().duration(300).style('opacity', 0)
      })
      .on('mousemove', mousemove)

    // mousemove function will find the point on
    // the line chart graph nearest to the mouse
    // and display its coordinates
    function mousemove(event) {
      //
      const bisect = d3.bisector((d) => d.label).left
      // d3.mouse is deprecated in d3 v6 - use 'pointer' instead
      //const xPos = d3.mouse(this)[0];
      const xPos = d3.pointer(event, this)[0]
      const x0 = bisect(data, xScale.invert(xPos))
      const d0 = data[x0]
      focus.attr(
        'transform',
        `translate(${xScale(d0.label)},${yScale(d0.value)})`
      )
      tooltip.transition().duration(300).style('opacity', 0.9)
      tooltip
        .html(d0.tooltipContent || d0.label)
        .style(
          'transform',
          `translate(${xScale(d0.label) + 30}px,${yScale(d0.value) - 30}px)`
        )
    }
  }

  return <div id="container" />
}
