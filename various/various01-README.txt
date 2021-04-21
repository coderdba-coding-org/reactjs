=======
NVM
=======
I guess this was installed with nvm v14.15.4
But, npm start is working for both nvm v12.14.0 and v14.15.4

==========================
CREATE PROJECT 'various01'
==========================
$ npx create-react-app various01

==========================
ENVIRONMENT
==========================
Source .env file with these settings in it
export FAST_REFRESH=false --> Needed to allow auto refresh upon program save
export REACT_APP_ENV=dev


============
TO TRY
============

---------------
D3
---------------
D3 Force doc: https://d3-wiki.readthedocs.io/zh_CN/master/Force-Layout/

D3 Force - with mouseover  - simple with fixed width, no drag:
http://bl.ocks.org/mbostock/2706022

D3: Time Series Charts with React, Redux and D3
https://blog.serverdensity.com/time-series-charts-react-redux-d3/

D3: How to create a dynamic and responsive time series graph with D3 and React
https://smartcar.com/blog/graph-d3-and-react/ --> Dynamic - watches for changes in data

D3: with input data file
- Tutorial: https://levelup.gitconnected.com/creating-a-force-graph-using-react-and-d3-6579bcd9628c
- Code download: https://onedrive.live.com/?authkey=%21AL75phd8K0DQDgs&id=CC807E0FCC4169F4%2137080&cid=CC807E0FCC4169F4
- Code: https://gist.github.com/gilf

D3: Heirarchy
https://observablehq.com/@d3/d3-hierarchy#:~:text=A%20d3.,or%20more%20child%20nodes%20(node.&text=To%20visualize%20a%20hierarchy%2C%20you,tidy%20tree%2C%20treemap%20or%20sunburst.

React-Vis: example
https://crubier.github.io/react-graph-vis/
- https://visjs.org/
- https://github.com/crubier/react-graph-vis/tree/master/example

----------------------
TIME SERIES CHARTS - non d3
----------------------
react-timeseries-charts: https://www.npmjs.com/package/react-timeseries-charts
	- Barchart example: https://codesandbox.io/s/3j0540mo5?file=/index.js:0-27
	
react-chartjs-2:

======================
INSTALLS DONE
======================
npm install react-timeseries-charts
npm install pondjs
