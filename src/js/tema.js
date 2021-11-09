let generateCSSTheme = function (COR_1, COR_2, COR_3, COR_4) {    
    return `
        .hover-bordered-bottom:hover {
            border-bottom: 3px solid ${COR_1};
        }
        #barra-sistema {
            background-color: ${COR_1};
        }
        #barra-sistema .botao-sair a:hover {
            background-color: ${COR_2};
        }
        #painel-usuario .logo > span {
            color: ${COR_1};
        }
        #painel-usuario .painel-usuario-identificacao span {
            color: ${COR_1};
        }
        #painel-usuario .painel-usuario-foto {
            display: table-cell;
            width: 50px;
            height: 50px;
            padding: 0 5px;
            vertical-align: middle;
        }
        #detalhes-usuario td.detalhes-usuario-nome {
            color: ${COR_1};
        }
        #detalhes-usuario .acoes-usuario li a:hover,
        #detalhes-usuario .acoes-usuario li a:focus {
            border-bottom: 5px solid ${COR_1};
        }
        ul#paleta-cores li.cor10,
        ul#paleta-cores-horizontal li.cor10 {
            background-color: ${COR_1};
        }
        #ufrn-rodape {
            background-color: ${COR_2};
        }
        #acesso-rapido .carousel-control:hover {
            color: ${COR_1};
        }
        .menu-lateral > ul > li.selecionado {
            border-left: 4px solid ${COR_1};
        }
        .search input[type="text"]:focus {
            border: none;
            border-bottom: 0.5px solid ${COR_1};
        }
        .page-sidebar .sidebar-header-wrapper .searchicon {
            color: ${COR_1};
        }
        .page-sidebar .sidebar-menu li:before {
            background-color: ${COR_1};
        }
        .table .acoes a:hover {
            color: ${COR_1};
        }
        .table > tbody > tr.destaque td {
            background: ${COR_3} !important;
        }
        .table > tbody > tr.secao td {
            border-bottom: 1px solid ${COR_1};
        }
        .table > tbody > tr.selecionado td {
            background: ${COR_3} !important;
        }
        .rich-table .acoes a:hover,
        table.listagem .acoes a:hover {
            color: ${COR_1};
        }
        .rich-table > tbody > tr.destaque td,
        table.listagem > tbody > tr.destaque td {
            background: ${COR_3} !important;
        }
        .rich-table > tbody > tr.secao td,
        table.listagem > tbody > tr.secao td {
            border-bottom: 1px solid ${COR_1};
        }
        .rich-table > tbody > tr.selecionado td,
        table.listagem > tbody > tr.selecionado td {
            background: ${COR_3} !important;
        }
        .page-header {
            color: ${COR_2};
        }
        .list-selected .item {
            background-color: ${COR_3};
        }
        a {
            color: ${COR_1};
        }
        a:focus,
        a:hover {
            color: ${COR_2};
        }
        a .bordered-hover:hover {
            border-left: 5px solid ${COR_1};
        }
        .bg-claro {
            background-color: ${COR_3} !important;
        }
        #carousel-noticias .box-noticia-conteudo h4 {
            color: ${COR_1};
        }
        .tabela-selecao-vinculo .check-ativo {
            color: ${COR_1};
        }
        .tabela-selecao-vinculo tr.selecionado > td {
            background-color: ${COR_3} !important;
        }
        .sm-blue {
            background: ${COR_1};
        }
        .sm-blue ul a.highlighted,
        .sm-blue ul a:active,
        .sm-blue ul a:focus,
        .sm-blue ul a:hover {
            border-left: 5px solid ${COR_1};
        }
        .fc-unthemed .fc-today {
            background: ${COR_3};
        }
        .fc-toolbar button {
            color: ${COR_1};
        }
        .btn-light:focus,
        .btn-light:hover,
        .btn-primary {
            background-color: ${COR_1} !important;
            border-color: ${COR_1} !important;
        }
        .btn-primary:focus,
        .btn-primary:hover {
            background-color: ${COR_2} !important;
            border-color: ${COR_2} !important;
        }
        .progress-bar {
            background-color: ${COR_2};
            background-image: linear-gradient(${COR_1} 0, ${COR_2} 100%);
        }
        caption.formulario {
            background-color: ${COR_1};
        }
        table.formulario > caption,
        table.listagem > caption,
        table.rich-table.listagem > caption,
        table.subFormulario > caption,
        table.visualizacao > caption {
            background: ${COR_1};
        }
        h3.tituloTabela {
            background: ${COR_1};
        }
        .page-sidebar .sidebar-menu li:not(.open):hover:before {
            background-color: ${COR_4};
        }
        .table tr.destaque {
            background-color: ${COR_4} !important;
        }
        .rich-table tr.destaque,
        table.listagem tr.destaque {
            background-color: ${COR_4} !important;
        }
        .list-selected .item .item-remove {
            color: ${COR_4};
        }
        .btn-light {
            background-color: ${COR_4};
        }
        .painel-numerico {
            background: ${COR_4};
        }
        .sm-blue a.current,
        .sm-blue a.current:active,
        .sm-blue a.current:focus,
        .sm-blue a.current:hover,
        .sm-blue ul a.current,
        .sm-blue ul a.current:active,
        .sm-blue ul a.current:focus,
        .sm-blue ul a.current:hover {
            background: ${COR_4};
        }
        .sm-blue a span.sub-arrow {
            border-color: ${COR_4} transparent transparent;
        }
        .sm-blue ul a span.sub-arrow,
        .sm-blue-vertical a span.sub-arrow {
            border-color: transparent transparent transparent ${COR_4};
        }
        .sm-blue span.scroll-down-arrow,
        .sm-blue span.scroll-up-arrow {
            border-color: transparent transparent ${COR_4};
        }
        .sm-blue span.scroll-down-arrow {
            border-color: ${COR_4} transparent transparent;
        }
        .btn-light {
            background-color: ${COR_4} !important;
            border-color: ${COR_4} !important;
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
            border-bottom: 1px solid ${COR_4};
        }
    `;
}