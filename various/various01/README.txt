-- ENVIRONMENT
Source .env file with these settings in it
export FAST_REFRESH=false --> Needed to allow auto refresh upon program save
export REACT_APP_ENV=dev

-- NVM
-- I guess this was installed with nvm v14.15.4
-- But, npm start is working for both nvm v12.14.0 and v14.15.4

-- Needs some kind of fix
found 1356 vulnerabilities (1343 low, 10 moderate, 3 high)
  run `npm audit fix` to fix them, or `npm audit` for details

-- react-chart-js-2
https://github.com/reactchartjs/react-chartjs-2

Install:
https://www.npmjs.com/package/react-chartjs-2
npm install --save react-chartjs-2 chart.js

Line chart:
https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/components/line.js
https://codepen.io/swatijn28/pen/KByQQq

Multiline Charts:
https://mdbootstrap.com/docs/react/advanced/charts/ --> Using this one
https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/components/mix.js

Time Axis:
https://stackoverflow.com/questions/59734992/using-epoch-as-time-series-on-x-axis-in-react-chartjs-2-not-showing-correct-date
https://codesandbox.io/s/react-chartjs-2-timeline-example-w2b9l?file=/src/TimelineChart.jsx

-- react-timeseries-charts
https://www.npmjs.com/package/react-timeseries-charts
https://software.es.net/react-timeseries-charts/#/example/trend

multiline 'chartrow': https://software.es.net/react-timeseries-charts/#/api/charts/ChartRow
multiline with realtime: https://software.es.net/react-timeseries-charts/#/example/realtime
multiline trend: https://software.es.net/react-timeseries-charts/#/example/trend

tutorial: https://medium.com/wolox/creating-a-chart-assembly-line-with-react-chartjs-2-7f0b07fd53e5
tutorial: https://www.newline.co/@dmitryrogozhny/quick-introduction-to-displaying-charts-in-react-with-chartjs-and-react-chartjs-2--a85b4e2e

- D3
select, add text etc: https://www.d3indepth.com/selections/
force directed graph with labels: https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8 (TRY THIS)

- AXIOS
https://jasonwatmore.com/post/2020/07/17/react-axios-http-get-request-examples (TRY THIS - MANY MANY EXAMPLES)
https://www.digitalocean.com/community/tutorials/react-axios-react (used in ReactChart01/components/AxiosList01.js)
https://medium.com/@brettcelestre/storing-json-data-in-react-with-setstate-3b588b74dcce
https://stackoverflow.com/questions/41194866/how-to-set-state-of-response-from-axios-in-react
--  https://codesandbox.io/s/rm4pyq9m0o 
https://rapidapi.com/blog/axios-react-api-tutorial/ (TRY THIS)
https://javascript.plainenglish.io/what-is-axios-and-how-to-use-it-with-react-1470d19e1b83 (TRY THIS)
https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/ (TRY THIS)
https://designrevision.com/react-axios/ (TRY THIS)

- JSON re-mapping
https://stackoverflow.com/questions/52961988/mapping-a-json-const-in-react-js
https://www.pluralsight.com/guides/convert-a-json-file-to-an-array-in-react
https://stackoverflow.com/questions/57008672/react-how-to-convert-json-object-to-array-and-render-it --> convert to array
https://reactjs.org/docs/lists-and-keys.html
https://www.codegrepper.com/code-examples/javascript/convert+json+object+to+array+js 
https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state --> concat
https://www.robinwieruch.de/react-add-item-to-list --> 'concat' - add an item to a list (very good)
https://kirstyburgoine.wordpress.com/2018/01/21/iterating-through-json-data-in-react/ --> looping through json
https://javascript.plainenglish.io/how-to-loop-through-arrays-in-react-3eaa8a14445 --> looping through array

- D3 add remove node: http://bl.ocks.org/tgk/6068367
- D3 force graph - changing repulsion strength: https://stackoverflow.com/questions/39379299/how-do-you-customize-the-d3-link-strength-as-a-function-of-the-links-and-nodes-c
- D3 To make nodes as square/rectangle: https://stackoverflow.com/questions/17853985/how-do-i-change-nodes-to-be-rectangles-instead-of-circles-in-a-d3-force-layout

- D3 doc force(): https://d3-wiki.readthedocs.io/zh_CN/master/Force-Layout/
