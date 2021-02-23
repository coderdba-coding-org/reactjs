===========
INSTALLS
===========
npm insall d3
npm install node-sass (to use index.scss like files)
npm install react-vis
npm install react-goole-charts
npm install react-component-component

================
TROUBLESHOOTING
================

-------------------------------------
App.js changes not reloading - on Mac
-------------------------------------
https://stackoverflow.com/questions/43274925/development-server-of-create-react-app-does-not-auto-refresh#:~:text=It%20describes%20a%20few%20common,refresh%20with%20the%20updated%20code.&text=If%20the%20watcher%20doesn't,due%20to%20a%20Webpack%20bug.
If none of the above alternatives works, try adding a .env file in the base path of the project and inside add FAST_REFRESH = false
