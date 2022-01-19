// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu  } = require('electron')
const applicationMenu = require('./application-menu');
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    maximizable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')
  mainWindow.loadURL('https://agendamentotestecovid.saude.rj.gov.br/login');

  // Maximize Window
  mainWindow.maximize();
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  //const main = mainWindow.webContents.downloadURL('https://agendamentotestecovid.saude.rj.gov.br/administrativo/agenda-do-dia');
  //console.log(main)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(() => {
  Menu.setApplicationMenu(applicationMenu);
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.
