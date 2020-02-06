const { resolve } = require('path');
const { app, Menu, Tray } = require('electron');

let mainTray = {};

if (app.dock) {
  app.dock.hide();
}

function render(tray = mainTray) {
  const contextMenu = Menu.buildFromTemplate([
    {
      type: 'normal',
      label: 'Fechar',
      role: 'quit',
      enabled: true,
    },
  ]);

  tray.setContextMenu(contextMenu);

  tray.on('click', tray.popUpContextMenu);
}

app.on('ready', () => {
  mainTray = new Tray(resolve(__dirname, 'assets', 'iconTemplate.png'));

  render(mainTray);
});
