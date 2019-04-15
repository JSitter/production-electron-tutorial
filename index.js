const { app, BrowserWindow } = require('electron');

function newWindow () {
  // Create new Chromium browser window.
  let window = new BrowserWindow({ width: 800, height: 600 });

  // Load index.html into new browser window.
  window.loadFile('index.html');
}

app.on('ready', newWindow);
console.log("I am special");