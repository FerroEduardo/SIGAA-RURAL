//Estou na tela principal
if(MAIN_SCHEDULEBOARD_BODY != null) {

  for(let i = 0; i<MAIN_SCHEDULEBOARD_BODY.children.length; i++) {
    const currentLine = MAIN_SCHEDULEBOARD_BODY.children[i];

    let horaryColumn = currentLine.children[2];
    if(horaryColumn != null){
      horaryColumn.style.padding = "7px";
      horaryColumn.setAttribute("width", "50%");
      let code = horaryColumn.children[0].innerHTML;
      horaryColumn.children[0].textContent = "";
      horaryColumn.children[0].appendChild(discoverTimeToSubjectsAlternative(code));
    }
  }
}

//Estou na tela de mostrar horários
if(SHCEDULEBOARD_HEADER != null) {
  const horary =  SHCEDULEBOARD_HEADER.children[0];
  horary.style.width = "6%";

  const day = SHCEDULEBOARD_HEADER.children[1];
  day.style.padding = "7px"; //Adiciona padding para deixar o header mais bonito
  
  //Para cada linha da tabela de horarios...
  for(let i = 0; i<SCHEDULEBOARD_BODY.children.length; i++) {
    const currentLine = SCHEDULEBOARD_BODY.children[i];

    if(i % 2 === 0) {
      currentLine.classList.add("linhaPar"); //Para melhorar visualização da tabela
    } else {
      currentLine.classList.add("linhaImpar"); //Para melhorar visualização da tabela
    }
  
    let horaryColumn = currentLine.children[0];
  
    //Se a coluna de horário tiver colspan, significa que é uma linha vazia para separar Manhã, tarde e noite.
    if(horaryColumn.getAttribute("colspan") != null) {
      horaryColumn.setAttribute("colspan", "7");
      horaryColumn.style.backgroundColor = "#DDDDE2";
      continue;
    }
  
    //Melhorando visualização da coluna de horário
    horaryColumn.style.padding = "7px";
    horaryColumn.style.fontWeight = "bold";

    //Onde a mágica acontece, troca o código pelo horário.
    horaryColumn.textContent = discoverTimeToBoard(horaryColumn.textContent.trim());
    // horaryColumn.innerHTML = discoverTimeToBoard(horaryColumn.innerHTML);
  
    //Necessário para alinhar os itens à esquerda ao invés de centralizado
    for(let j = 1; j < 7; j++) {
      currentLine.children[j].removeAttribute("class");
    }
    horaryColumn.removeAttribute("align");
  }
}

if (SIGAA_BETA !== null) {
  SIGAA_BETA_SCHEDULE_TIME_HEADER.removeAttribute("style");
  SIGAA_BETA_SCHEDULE_TIME_HEADER.style.width = "180px"
  //Centraliza texto dos headers, exceto os nomes das disciplinas.
  for (let i = 1; i < SIGAA_BETA_TABLE_HEADERS.children.length; i++) {
    const currentHeader = SIGAA_BETA_TABLE_HEADERS.children[i];
    currentHeader.style.textAlign = "center";
  }
  for (let i = 0; i < SIGAA_BETA.children.length; i++) {
    const currentLine = SIGAA_BETA.children[i];
    if (currentLine.className.indexOf("destaque") > -1) {
      continue;
    }
    currentLine.children[0].style.textAlign = "center";//Centraliza o texto do código da disciplina
    currentLine.children[4].style.textAlign = "center";//Centraliza os eventos da disciplina
    let code = currentLine.children[3].innerHTML;
    if (code.length > 0) {
      currentLine.children[3].textContent = "";
      currentLine.children[3].appendChild(discoverTimeToSubjectsAlternative(code));
    }
  }
}

//Estou na parte de se inscrever em disciplinas
if(SUBJECTS != null) {
  for(let i = 0; i<SUBJECTS.length; i++) {
    //OK, THIS IS EPIC...
    /*Para cada linha de disciplina (SUBJECTS[I]), 
      seleciona a coluna que contém o código de horário (children[5]),
      e dentro do <td> de horário, existe uma tag <label>,
      logo é necessário descer mais um nível na árvore (children[0]) para
      conseguir acessar o código com o horário da disciplina
    */ 
    let result = discoverTimeToSubjectsAlternative(SUBJECTS[i].children[5].children[0].innerHTML)
    SUBJECTS[i].children[5].children[0].textContent = "";
    SUBJECTS[i].children[5].children[0].appendChild(result);
  }
}

//Estou na parte de se inscrever em disciplinas equivalentes
if(EQUIVALENT_SUBJECTS != null) {
  /*Se estiver na página de disciplinas equivalentes,
    define o width da coluna de horário como 16%
    para uma visualização melhor
  */
  if (EQUIVALENT_SUBJECTS.length != 0) {
    document.getElementById('lista-turmas-curriculo').firstElementChild.firstElementChild.children[4].setAttribute('width', '16%');
  }
  for(let i = 0; i<EQUIVALENT_SUBJECTS.length; i++) {
    /*Para cada linha de disciplina (EQUIVALENT_SUBJECTS[i]), 
      seleciona a coluna que contém o código de horário (children[6]),
      e dentro do <td> de horário, existe uma tag <label>,
      logo é necessário descer mais um nível na árvore (children[0]) para
      conseguir acessar o código com o horário da disciplina
    */
    let result = discoverTimeToSubjectsAlternative(EQUIVALENT_SUBJECTS[i].children[6].children[0].innerHTML)
    EQUIVALENT_SUBJECTS[i].children[6].children[0].textContent = "";
    EQUIVALENT_SUBJECTS[i].children[6].children[0].appendChild(result);
  }
}

//Estou na parte de se inscrever em disciplinas abertas
if(OPEN_SUBJECTS != null && PAGE_HEADER && PAGE_HEADER.textContent !== 'Matrícula  Extraordinária') {
  /*Se estiver na página de disciplinas abertas,
    define o width da coluna de horário como 18%
    para uma visualização melhor
  */
  if (OPEN_SUBJECTS.length != 0) {
    if (IS_BETA){
      document.getElementById('lista-turmas-extra').firstElementChild.firstElementChild.children[5].setAttribute('width', '18%');
    } else {
      document.getElementById('lista-turmas-extra').firstElementChild.firstElementChild.children[5].setAttribute('width', '20%');
    }
  }
  for(let i = 0; i<OPEN_SUBJECTS.length; i++) {
    /*Para cada linha de disciplina (OPEN_SUBJECTS[i]), 
      seleciona a coluna que contém o código de horário (children[7]),
      e dentro do <td> de horário, existe uma tag <label>,
      logo é necessário descer mais um nível na árvore (children[0]) para
      conseguir acessar o código com o horário da disciplina
    */
    let result = discoverTimeToSubjectsAlternative(OPEN_SUBJECTS[i].children[7].children[0].innerHTML)
    OPEN_SUBJECTS[i].children[7].children[0].textContent = "";
    OPEN_SUBJECTS[i].children[7].children[0].appendChild(result);
  }
}

if (QUERIED_SUBJECTS != null) {
  for (let i = 0; i < QUERIED_SUBJECTS.length; i++) {
    QUERIED_SUBJECTS[i].classList.add('horario-tooltip');
    let result = discoverTimeToSubjectsAlternative(QUERIED_SUBJECTS[i].innerHTML)
    result.classList.add('tooltiptext');
    QUERIED_SUBJECTS[i].appendChild(result);
  }
}

if (TIME_BOARD_ENROLLMENT_TABLE != null) {
  let thead = TIME_BOARD_ENROLLMENT_TABLE.children[0];
  let columns = thead.firstElementChild.children;
  columns[0].setAttribute('width', '5%');
  const tableRows = document.querySelector('div.box-secao:nth-child(4) > table:nth-child(2)').tBodies[0].children;
  for (let i = 0; i < tableRows.length; i++) {
    let element = tableRows[i].children[0];
    element.textContent = discoverTimeToBoard(element.textContent);
  }
}

if (ALL_CLASSES_TABLE && ALL_CLASSES_TABLE.caption.textContent.includes('Todas as Turmas')) {
  let tbody = ALL_CLASSES_TABLE.tBodies[1];
  let rows = tbody.querySelectorAll('.listagem tr.linhaPar, .listagem tr.linhaImpar');
  for (let i = 0; i < rows.length; i++) {
    rows[i].children[3].classList.add('horario-tooltip');
    let result = discoverTimeToSubjectsAlternative(rows[i].children[3].innerHTML)
    result.classList.add('tooltiptext');
    result.classList.add('previous-classes');
    rows[i].children[3].appendChild(result);
  }
}

if (IS_BETA) {
  isThemeActivated().then((isActivated) => {
    const detalhesUsuario = document.querySelector('#detalhes-usuario');
    detalhesUsuario.appendChild(createDivider());
    if (isActivated) {
      applyThemeColors().then(() => {
        detalhesUsuario.appendChild(generateThemeButton());
      });
    } else {
      detalhesUsuario.appendChild(generateThemeButton());
    }
  });
}