let generateCSSTheme = function (cor1, cor2, cor3, cor4) {
    return `
        .hover-bordered-bottom:hover {
            border-bottom: 3px solid ${cor1};
        }
        #barra-sistema {
            background-color: ${cor1};
        }
        #barra-sistema .botao-sair a:hover {
            background-color: ${cor2};
        }
        #painel-usuario .logo > span {
            color: ${cor1};
        }
        #painel-usuario .painel-usuario-identificacao span {
            color: ${cor1};
        }
        #detalhes-usuario td.detalhes-usuario-nome {
            color: ${cor1};
        }
        #detalhes-usuario .acoes-usuario li a:hover,
        #detalhes-usuario .acoes-usuario li a:focus {
            border-bottom: 5px solid ${cor1};
        }
        ul#paleta-cores li.cor10,
        ul#paleta-cores-horizontal li.cor10 {
            background-color: ${cor1};
        }
        #ufrn-rodape {
            background-color: ${cor2};
        }
        #acesso-rapido .carousel-control:hover {
            color: ${cor1};
        }
        .menu-lateral > ul > li.selecionado {
            border-left: 4px solid ${cor1};
        }
        .search input[type="text"]:focus {
            border: none;
            border-bottom: 0.5px solid ${cor1};
        }
        .page-sidebar .sidebar-header-wrapper .searchicon {
            color: ${cor1};
        }
        .page-sidebar .sidebar-menu li:before {
            background-color: ${cor1};
        }
        .table .acoes a:hover {
            color: ${cor1};
        }
        .table > tbody > tr.destaque td {
            background: ${cor3} !important;
        }
        .table > tbody > tr.secao td {
            border-bottom: 1px solid ${cor1};
        }
        .table > tbody > tr.selecionado td {
            background: ${cor3} !important;
        }
        .rich-table .acoes a:hover,
        table.listagem .acoes a:hover {
            color: ${cor1};
        }
        .rich-table > tbody > tr.destaque td,
        table.listagem > tbody > tr.destaque td {
            background: ${cor3} !important;
        }
        .rich-table > tbody > tr.secao td,
        table.listagem > tbody > tr.secao td {
            border-bottom: 1px solid ${cor1};
        }
        .rich-table > tbody > tr.selecionado td,
        table.listagem > tbody > tr.selecionado td {
            background: ${cor3} !important;
        }
        .page-header {
            color: ${cor2};
        }
        .list-selected .item {
            background-color: ${cor3};
        }
        a {
            color: ${cor1};
        }
        a:focus,
        a:hover {
            color: ${cor2};
        }
        a .bordered-hover:hover {
            border-left: 5px solid ${cor1};
        }
        .bg-claro {
            background-color: ${cor3} !important;
        }
        #carousel-noticias .box-noticia-conteudo h4 {
            color: ${cor1};
        }
        #carousel-noticias .carousel-indicators li.active {
            background-color: ${cor1};
        }
        .tabela-selecao-vinculo .check-ativo {
            color: ${cor1};
        }
        .tabela-selecao-vinculo tr.selecionado > td {
            background-color: ${cor3} !important;
        }
        .sm-blue {
            background: ${cor1};
        }
        .sm-blue ul a.highlighted,
        .sm-blue ul a:active,
        .sm-blue ul a:focus,
        .sm-blue ul a:hover {
            border-left: 5px solid ${cor1};
        }
        .fc-unthemed .fc-today {
            background: ${cor3};
        }
        .fc-toolbar button {
            color: ${cor1};
        }
        .btn-light:focus,
        .btn-light:hover,
        .btn-primary {
            background-color: ${cor1} !important;
            border-color: ${cor1} !important;
        }
        .btn-primary:focus,
        .btn-primary:hover {
            background-color: ${cor2} !important;
            border-color: ${cor2} !important;
        }
        .progress-bar {
            background-color: ${cor2};
            background-image: linear-gradient(${cor1} 0, ${cor2} 100%);
        }
        caption.formulario {
            background-color: ${cor1};
        }
        table.formulario > caption,
        table.listagem > caption,
        table.rich-table.listagem > caption,
        table.subFormulario > caption,
        table.visualizacao > caption {
            background: ${cor1};
        }
        h3.tituloTabela {
            background: ${cor1};
        }
        .page-sidebar .sidebar-menu li:not(.open):hover:before {
            background-color: ${cor4};
        }
        .table tr.destaque {
            background-color: ${cor4} !important;
        }
        .rich-table tr.destaque,
        table.listagem tr.destaque {
            background-color: ${cor4} !important;
        }
        .list-selected .item .item-remove {
            color: ${cor4};
        }
        .btn-light {
            background-color: ${cor4};
        }
        .painel-numerico {
            background: ${cor4};
        }
        .sm-blue a.current,
        .sm-blue a.current:active,
        .sm-blue a.current:focus,
        .sm-blue a.current:hover,
        .sm-blue ul a.current,
        .sm-blue ul a.current:active,
        .sm-blue ul a.current:focus,
        .sm-blue ul a.current:hover {
            background: ${cor4};
        }
        .sm-blue a span.sub-arrow {
            border-color: ${cor4} transparent transparent;
        }
        .sm-blue ul a span.sub-arrow,
        .sm-blue-vertical a span.sub-arrow {
            border-color: transparent transparent transparent ${cor4};
        }
        .sm-blue span.scroll-down-arrow,
        .sm-blue span.scroll-up-arrow {
            border-color: transparent transparent ${cor4};
        }
        .sm-blue span.scroll-down-arrow {
            border-color: ${cor4} transparent transparent;
        }
        .btn-light {
            background-color: ${cor4} !important;
            border-color: ${cor4} !important;
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
            border-bottom: 1px solid ${cor4};
        }
    `;
}

function generateThemeButton() {
  let menuItem = document.createElement('li');
  let menuContent = document.createElement('ul');
  menuContent.classList.add('acoes-usuario');
  menuItem.appendChild(menuContent);
  
  let getCurrentColor = {
    0: rgbToHex(getComputedStyle(document.getElementById('main-menu')).backgroundColor),
    1: rgbToHex(getComputedStyle(document.getElementById('ufrn-rodape')).backgroundColor),
    2: rgbToHex(getComputedStyle(document.querySelector('td.periodo')).backgroundColor),
    3: rgbToHex(getComputedStyle(document.querySelector('span.sub-arrow')).borderTopColor)
  }

  function generateColorInputButton(id, value) {
    let colorButton = document.createElement('input');
    colorButton.id = id;
    colorButton.classList.add('input-color-theme');
    colorButton.type = 'color';
    colorButton.value = value;
    colorButton.style.width = '71px';
    colorButton.style.height = '25px';
    colorButton.onclick = function(e) {
      e.stopPropagation();
    };
    return colorButton;
  }

  function toggleThemePanel(status) {
    console.log(status);
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
  
  for (let i = 0; i < 4; i++) {
    menuContent.appendChild(generateColorInputButton(`cor${i}`, getCurrentColor[i]));
  }

  let applyThemeButton = document.createElement('button');
  applyThemeButton.style.display = 'None';
  applyThemeButton.style.width = '50%';
  applyThemeButton.style.height = '20px';
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
        enableTheme().then(() => {
          toggleThemePanel(!isActivated);
        });
      }
    });
    e.stopPropagation();
  };

  isThemeActivated().then(toggleThemePanel);

  menuContent.appendChild(applyThemeButton);
  menuContent.appendChild(toggleThemeButton);

  return menuItem;
}

async function applyThemeColors() {
  await loadThemeColors().then((object)=>{
    let themeTextNode = document.createTextNode(
      generateCSSTheme(
        object['cor0'], 
        object['cor1'], 
        object['cor2'], 
        object['cor3']
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
    cor3: document.getElementById('cor3').value
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