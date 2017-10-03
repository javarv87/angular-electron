const { app, BrowserWindow } = require('electron');
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        heigh: 600,
        backgroundColor: '#FFFFFF',
        icon: `file://${__dirname}/dist/assets/logon.png`
    });
    win.loadURL(`file://${__dirname}/dist/index.html`);
    win.on('closed', function() {
        win = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function() {
    if(win === null) {
        createWindow();
    }
});