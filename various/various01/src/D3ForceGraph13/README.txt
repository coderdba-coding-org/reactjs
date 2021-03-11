Reference:

- Force graph with labels: https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8
    Same as: https://observablehq.com/@garciaguillermoa/force-directed-graph

- To make nodes as square/rectangle: https://stackoverflow.com/questions/17853985/how-do-i-change-nodes-to-be-rectangles-instead-of-circles-in-a-d3-force-layout
- D3 force graph - changing repulsion strength: https://stackoverflow.com/questions/39379299/how-do-you-customize-the-d3-link-strength-as-a-function-of-the-links-and-nodes-c

- Force graph with labels for edge and arrows: http://bl.ocks.org/fancellu/2c782394602a93921faff74e594d1bb1

======================
'drag' function
======================
https://stackoverflow.com/questions/64628771/attempted-import-error-event-is-not-exported-from-d3?noredirect=1&lq=1

- ORIGINAL CODE
- Here, d3. event is deprecated in d3v6
- therefore, code as in the modified program 

    const drag = simulation => {
  
        function dragstarted(d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }
        
        function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        }
        
        function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

- MODIFIED CODE
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
          event.subject.fx = null;
          event.subject.fy = null;
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }