function generateCSSTheme() {
  const cores = arguments;
    return `
        .hover-bordered-bottom:hover {
            border-bottom: 3px solid ${cores[0]};
        }
        #barra-sistema {
            background-color: ${cores[0]};
        }
        #barra-sistema .botao-sair a:hover {
            background-color: ${cores[1]};
        }
        #painel-usuario .logo > span {
            color: ${cores[0]};
        }
        #painel-usuario .painel-usuario-identificacao span {
            color: ${cores[0]};
        }
        #detalhes-usuario td.detalhes-usuario-nome {
            color: ${cores[0]};
        }
        #detalhes-usuario .acoes-usuario li a:hover,
        #detalhes-usuario .acoes-usuario li a:focus {
            border-bottom: 5px solid ${cores[0]};
        }
        ul#paleta-cores li.cores[0]0,
        ul#paleta-cores-horizontal li.cores[0]0 {
            background-color: ${cores[0]};
        }
        #ufrn-rodape {
            background-color: ${cores[1]};
        }
        #acesso-rapido .carousel-control:hover {
            color: ${cores[0]};
        }
        .menu-lateral > ul > li.selecionado {
            border-left: 4px solid ${cores[0]};
        }
        .search input[type="text"]:focus {
            border: none;
            border-bottom: 0.5px solid ${cores[0]};
        }
        .page-sidebar .sidebar-header-wrapper .searchicon {
            color: ${cores[0]};
        }
        .page-sidebar .sidebar-menu li:before {
            background-color: ${cores[0]};
        }
        .table .acoes a:hover {
            color: ${cores[0]};
        }
        .table > tbody > tr.destaque td {
            background: ${cores[2]} !important;
        }
        .table > tbody > tr.secao td {
            border-bottom: 1px solid ${cores[0]};
        }
        .table > tbody > tr.selecionado td {
            background: ${cores[2]} !important;
        }
        .rich-table .acoes a:hover,
        table.listagem .acoes a:hover {
            color: ${cores[0]};
        }
        .rich-table > tbody > tr.destaque td,
        table.listagem > tbody > tr.destaque td {
            background: ${cores[2]} !important;
        }
        .rich-table > tbody > tr.secao td,
        table.listagem > tbody > tr.secao td {
            border-bottom: 1px solid ${cores[0]};
        }
        .rich-table > tbody > tr.selecionado td,
        table.listagem > tbody > tr.selecionado td {
            background: ${cores[2]} !important;
        }
        .page-header {
            color: ${cores[1]};
        }
        .list-selected .item {
            background-color: ${cores[2]};
        }
        a {
            color: ${cores[0]};
        }
        a:focus,
        a:hover {
            color: ${cores[1]};
        }
        a .bordered-hover:hover {
            border-left: 5px solid ${cores[0]};
        }
        .bg-claro {
            background-color: ${cores[2]} !important;
        }
        #carousel-noticias .box-noticia-conteudo h4 {
            color: ${cores[0]};
        }
        #carousel-noticias .carousel-indicators li.active {
            background-color: ${cores[0]};
        }
        .tabela-selecao-vinculo .check-ativo {
            color: ${cores[0]};
        }
        .tabela-selecao-vinculo tr.selecionado > td {
            background-color: ${cores[2]} !important;
        }
        .sm-blue {
            background: ${cores[0]};
        }
        .sm-blue ul a.highlighted,
        .sm-blue ul a:active,
        .sm-blue ul a:focus,
        .sm-blue ul a:hover {
            border-left: 5px solid ${cores[0]};
        }
        .fc-unthemed .fc-today {
            background: ${cores[2]};
        }
        .fc-toolbar button {
            color: ${cores[0]};
        }
        .btn-light:focus,
        .btn-light:hover,
        .btn-primary {
            background-color: ${cores[0]} !important;
            border-color: ${cores[0]} !important;
        }
        .btn-primary:focus,
        .btn-primary:hover {
            background-color: ${cores[1]} !important;
            border-color: ${cores[1]} !important;
        }
        .progress-bar {
            background-color: ${cores[1]};
            background-image: linear-gradient(${cores[0]} 0, ${cores[1]} 100%);
        }
        caption.formulario {
            background-color: ${cores[0]};
        }
        table.formulario > caption,
        table.listagem > caption,
        table.rich-table.listagem > caption,
        table.subFormulario > caption,
        table.visualizacao > caption {
            background: ${cores[0]};
        }
        h3.tituloTabela {
            background: ${cores[0]};
        }
        .page-sidebar .sidebar-menu li:not(.open):hover:before {
            background-color: ${cores[3]};
        }
        .table tr.destaque {
            background-color: ${cores[3]} !important;
        }
        .rich-table tr.destaque,
        table.listagem tr.destaque {
            background-color: ${cores[3]} !important;
        }
        .list-selected .item .item-remove {
            color: ${cores[3]};
        }
        .btn-light {
            background-color: ${cores[3]};
        }
        .painel-numerico {
            background: ${cores[3]};
        }
        .sm-blue a.current,
        .sm-blue a.current:active,
        .sm-blue a.current:focus,
        .sm-blue a.current:hover,
        .sm-blue ul a.current,
        .sm-blue ul a.current:active,
        .sm-blue ul a.current:focus,
        .sm-blue ul a.current:hover {
            background: ${cores[3]};
        }
        .sm-blue a span.sub-arrow {
            border-color: ${cores[3]} transparent transparent;
        }
        .sm-blue ul a span.sub-arrow,
        .sm-blue-vertical a span.sub-arrow {
            border-color: transparent transparent transparent ${cores[3]};
        }
        .sm-blue span.scroll-down-arrow,
        .sm-blue span.scroll-up-arrow {
            border-color: transparent transparent ${cores[3]};
        }
        .sm-blue span.scroll-down-arrow {
            border-color: ${cores[3]} transparent transparent;
        }
        .btn-light {
            background-color: ${cores[3]} !important;
            border-color: ${cores[3]} !important;
        }
        caption.subFormulario,
        table caption.subTabela,
        table.formulario table caption,
        table.formulario table.subFormulario caption,
        table.formulario table.subFormulario caption.subTabela,
        table.listagem tr.titulo,
        table.listagem > tbody > tr.secao > td,
        table.listagem > tbody > tr.secao > th,
        td.subFormulario {
            border-bottom: 1px solid ${cores[3]};
        }
        body,html {
          background-color: ${cores[4]};
        }
        #ufrn-cabecalho {
          background-color: ${cores[5]};
        }
    `;
}

function generateThemeButton() {
  let menuItem = document.createElement('li');
  let menuContent = document.createElement('ul');
  let menuCores = document.createElement('div');
  let menuBotoes = document.createElement('div');
  menuCores.id = "menu-cores";
  menuBotoes.id = "menu-botoes";
  menuContent.classList.add('acoes-usuario');
  menuItem.appendChild(menuContent);
  
  let getCurrentColor = {
    0: {
      cor: rgbToHex(getComputedStyle(document.getElementById('barra-sistema')).backgroundColor),
      texto: 'Barra do Sistema, alguns textos e abas'
    },
    1: {
      cor: rgbToHex(getComputedStyle(document.getElementById('ufrn-rodape') || document.getElementById('barra-sistema')).backgroundColor),
      texto: 'Rodapé'
    },
    2: {
      cor: rgbToHex(getComputedStyle(document.querySelector('td.periodo') || document.getElementById('barra-sistema')).backgroundColor),
      texto: 'Alguns headers de tabelas'
    },
    3: {
      cor: rgbToHex(getComputedStyle(document.querySelector('span.sub-arrow') || document.getElementById('barra-sistema')).borderTopColor),
      texto: 'Setas'
    },
    4: {
      cor: rgbToHex(getComputedStyle(document.querySelector('body')).backgroundColor),
      texto: 'Background'
    },
    5: {
      cor: rgbToHex(getComputedStyle(document.getElementById('ufrn-cabecalho')).backgroundColor),
      texto: 'Barra do Painel'
    }
  }

  function generateColorInputButton(id, value, title) {
    let colorButton = document.createElement('input');
    colorButton.id = id;
    colorButton.classList.add('input-color-theme');
    colorButton.type = 'color';
    colorButton.value = value;
    colorButton.style.width = '71px';
    colorButton.style.height = '25px';
    colorButton.title = title;
    colorButton.onclick = function(e) {
      e.stopPropagation();
    };
    return colorButton;
  }

  function toggleThemePanel(status) {
    if (status) {
      applyThemeButton.style.display = 'Unset';
      toggleThemeButton.innerText = 'Desativar'
      toggleThemeButton.style.width = '50%';
      document.querySelectorAll('.input-color-theme').forEach((element)=>{
        element.style.display = 'Unset';
      });
    } else {
      applyThemeButton.style.display = 'None';
      toggleThemeButton.innerText = 'Ativar'
      toggleThemeButton.style.width = '100%';
      document.querySelectorAll('.input-color-theme').forEach((element)=>{
        element.style.display = 'None';
      });
    }
  }

  for (let i = 0; i < Object.keys(getCurrentColor).length; i++) {
    menuCores.appendChild(generateColorInputButton(`cor${i}`, getCurrentColor[i].cor, getCurrentColor[i].texto));
  }

  let applyThemeButton = document.createElement('button');
  applyThemeButton.style.display = 'None';
  applyThemeButton.style.width = '50%';
  applyThemeButton.style.height = '20px';
  applyThemeButton.classList.add('rainbow-border');
  applyThemeButton.style.marginTop = '2px';
  applyThemeButton.style.marginBottom = '5px';
  applyThemeButton.innerText = 'Aplicar';
  applyThemeButton.onclick = function (e) {
    saveThemeColors();
    applyThemeColors();
    e.stopPropagation();
  }

  let toggleThemeButton = document.createElement('button');
  toggleThemeButton.style.height = '20px';
  toggleThemeButton.style.marginTop = '2px';
  toggleThemeButton.style.marginBottom = '5px';

  toggleThemeButton.onclick = function (e) {
    isThemeActivated().then((isActivated) => {
      if (isActivated) {
        if (confirm('Para desativar o tema, é necessário atualizar a página.\nDeseja continuar?')) {
          disableTheme().then(() => {
            document.location.reload(true);
          });
        }
      } else {
        if (confirm('Para ativar o tema, é necessário atualizar a página.\nDeseja continuar?')) {
          enableTheme().then(() => {
            document.location.reload(true);
          });
        }
      }
    });
    e.stopPropagation();
  };
  menuBotoes.appendChild(applyThemeButton);
  menuBotoes.appendChild(toggleThemeButton);

  isThemeActivated().then(toggleThemePanel);

  menuContent.appendChild(menuCores);
  menuContent.appendChild(menuBotoes);

  return menuItem;
}

async function applyThemeColors() {
  await loadThemeColors().then((result)=>{
    let themeTextNode = document.createTextNode(
      generateCSSTheme(
        result['cor0'],
        result['cor1'],
        result['cor2'],
        result['cor3'],
        result['cor4'],
        result['cor5'],
      ));
    let themeStyle = document.createElement('style');
    themeStyle.appendChild(themeTextNode);
    themeStyle.id = 'custom-theme';
    if (document.getElementById('custom-theme')) {
        document.getElementById('custom-theme').replaceWith(themeStyle);
    } else {
        document.head.appendChild(themeStyle);
    }
    enableTheme();
  }, (error)=> {
    console.error(error);
    saveThemeColors();
  });
}

async function disableTheme() {
  await browser.storage.local.set({
    themeActivated: false
  });
}

async function enableTheme() {
  await browser.storage.local.set({
    themeActivated: true
  });
}

function saveThemeColors() {
  browser.storage.local.set({
    cor0: document.getElementById('cor0').value, 
    cor1: document.getElementById('cor1').value, 
    cor2: document.getElementById('cor2').value, 
    cor3: document.getElementById('cor3').value,
    cor4: document.getElementById('cor4').value,
    cor5: document.getElementById('cor5').value
  });
}

function loadThemeColors() {
  return browser.storage.local.get();
}
  
function componentFromStr(numStr, percent) {
  let num = Math.max(0, parseInt(numStr, 10));
  return percent ?
      Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}
  
function rgbToHex(rgb) {
  let rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
  let result, r, g, b, hex = "";
  if ( (result = rgbRegex.exec(rgb)) ) {
    r = componentFromStr(result[1], result[2]);
    g = componentFromStr(result[3], result[4]);
    b = componentFromStr(result[5], result[6]);
    hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return hex;
}

async function isThemeActivated() {
  return browser.storage.local.get({
    themeActivated: false
  }).then((object) => {
    return object.themeActivated;
  });
}

function createDivider() {
  let divider = document.createElement('li');
  divider.classList.add('divider');
  divider.setAttribute('role', 'presentation');
  return divider;
}