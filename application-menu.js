const { Menu } = require('electron');

const template = [
{
    label: 'Sistema',
    submenu: [
    {
        label: 'Login',
        accelerator: 'CommandOrControl+L',
        click(item, focusedWindow) {
            focusedWindow.webContents.loadURL('https://agendamentotestecovid.saude.rj.gov.br/login');
        },
    },
    {
        label: 'Agendamento COVID',
        accelerator: 'CommandOrControl+A',
        click(item, focusedWindow) {
            focusedWindow.webContents.loadURL('https://agendamentotestecovid.saude.rj.gov.br/administrativo');
        },
    },
    {
        label: 'Chamar Paciente',
        accelerator: 'CommandOrControl+C',
        click(item, focusedWindow) {
            focusedWindow.webContents.loadURL('http://10.42.112.5/intranet/ATEND/chamada');
        },
    },
    {
        label: 'Painel',
        accelerator: 'CommandOrControl+C',
        click(item, focusedWindow) {
            focusedWindow.webContents.loadURL('http://10.42.112.5/intranet/ATEND/chamada/painel.php');
        },
    },
    {
        label: 'Atualiza Base de Chamada',
        accelerator: 'CommandOrControl+S',
        click(item, focusedWindow) {
            focusedWindow.webContents.downloadURL('https://agendamentotestecovid.saude.rj.gov.br/administrativo/agenda-do-dia');
        },
    },
    ],
},
{
    label: 'Janela',
    submenu: [
    {
        label: 'Maximizar',
        accelerator: 'CommandOrControl+N',
        role: 'maximize',
    },
    {
        label: 'Minimizar',
        accelerator: 'CommandOrControl+M',
        role: 'minimize',
    },
    {
        label: 'Sair',
        accelerator: 'CommandOrControl+W',
        role: 'close',
    },
    ],
},
{
    label: 'Ajuda',
    role: 'help',
    submenu: [
      {
        label: 'Visit Website',
        click() { /* To be implemented */ }
      },
      {
        label: 'Toggle Developer Tools',
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools();
        }
      }
    ],
  }
];
  
if (process.platform === 'darwin') {
  const name = 'Agendamento Covid';
  template.unshift({ label: name });
}

module.exports = Menu.buildFromTemplate(template);
