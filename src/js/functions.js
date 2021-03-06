const discoverTimeToBoard = (code) => {
  //trim pois vem com espaços
  // TIME_BOARD vem do select.js
  const time = TIME_BOARD[code.trim()] ? TIME_BOARD[code.trim()] : code.trim() ;
  return time;
}

function discoverTimeToSubjects(code) {
  /*
    Para cobrir o caso onde por exemplo a disciplina começa às 17 e termina às
    18, o código vindo do parâmetro será +/- assim (24T5 24N1), por isso o split
    dando match em qualquer valor que não seja por exemplo "white space". O filter
    é utilizado para remover as strings vazias que aparecem quando o split ocorre.
  */
    const splitRegex = new RegExp(/([1-7]{1,7}[MTN][1-5]{1,5})/);
    let splitedCode = code.split(splitRegex).filter((value) => {
      if (value) {
        const isNotEmptyString = value.trim().length !== 0;
        const isNotDate = value.length < 10;
        return isNotEmptyString && isNotDate;
      }
      return false;
    })

    // Há casos onde podem aparecer horários nesse formato '7T3 (20/09/2021 - 21/12/2021)'
    let obs;
    if (code.indexOf("(") != -1) {
      obs = code.substring(code.indexOf("("));
    }
  /*
    Para melhorar o visual do caso anterior inserindo um <br> é necessário
    guardar em um array os valores de cada código de tempo
  */
  let finalDays = [];
  let finalTimes = [];

  //Se tiver + de 1 código (vide o caso do split acima), formata ele bonitinho

  for(let i = 0; i<splitedCode.length; i++) {
    let splitedString = splitedCode[i].split(/(\D)/g);//Separo os dias dos horarios
    if(i === 0) {
      finalDays.push(document.createTextNode(mapDays(splitedString[0]))); //Descubro o dia
    } else {
      let element = document.createTextNode(mapDays(splitedString[0]))
      finalDays.push(element); //Descubro o dia
    }
    finalTimes.push(document.createTextNode('| ' + mapTimes(splitedString[1], splitedString[2]))); //Descubro o horario
  }

  //Elemento final que será trocada pelos códigos de disciplinas
  let resultElement = document.createElement('span');
  for(let i = 0; i < finalDays.length; i++) {
    resultElement.appendChild(finalDays[i]);
    resultElement.appendChild(document.createElement("br"));
    resultElement.appendChild(finalTimes[i]);
    resultElement.appendChild(document.createElement("br"));
    if (i !== finalDays.length - 1) {
      resultElement.appendChild(document.createElement("br"));
    }
  }
  if (obs) {
    resultElement.appendChild(document.createElement("br"));
    resultElement.appendChild(document.createTextNode(obs));
  }
  return resultElement;
}

function mapTimes(turn, time) {
  let finalStringTime = "";

  //Se nao tiver horario definido.
  if(turn == undefined || time == undefined) {
    return "";
  }

  //Double switch para checar o turno e o horario (ex: M1, T3...)
  for(let i = 0; i<time.length; i++) {
    if (CLASS_TIMES[turn][time[i]] !== null) {
      finalStringTime += CLASS_TIMES[turn][time[i]];
    }
  }
  return finalStringTime;
}

function mapDays(days) {
  let daysArray = [];
  // Tradando o caso de poder ser array
  if (Array.isArray(days)) {
    daysArray = [...days];
  } else {
    daysArray = [...days.split('')];
  }

  let finalStringDays = parseDay(daysArray);

  return finalStringDays;
}

function parseDay(array) {
  let daysArray = array;

  let result = daysArray.reduce(function (acc, cur) {
    acc += DAYS[cur] ? DAYS[cur]+" " : "" ; // DAYS vem do select.js
    return acc;
  }, " ");

  return result;
}

function getVersionContainer(isBeta) {
  let container;
  let content;
  if (isBeta) {
    container = document.createElement('small');
    content = document.createElement('span');
  } else {
    container = document.createElement('div');
    container.style.float = 'right';
    content = document.createElement('strong');
  }
  container.textContent = 'Add-on versão: ';
  content.textContent = ADDON_VERSION;
  container.appendChild(content);
  return container;
}

function getDownloadAllButton() {
  const spanDownloadAll = document.createElement('span');
  spanDownloadAll.id = 'download-all';
  spanDownloadAll.classList.add('ui-button', 'ui-widget', 'ui-state-default', 'ui-corner-all', 'ui-button-text-icon-primary');
  spanDownloadAll.onclick = function () {
    const downloadableElements = document.querySelectorAll('#formAva a[onclick]');
    downloadableElements.forEach(e => e.click());
  };

  const spanIcon = document.createElement('span');
  spanIcon.classList.add('ui-button-icon-primary', 'ui-icon', 'ui-icon-arrowthickstop-1-s');

  const spanText = document.createElement('span');
  spanText.classList.add('ui-button-text');
  spanText.textContent = 'Baixar tudo';

  spanDownloadAll.appendChild(spanIcon);
  spanDownloadAll.appendChild(spanText);

  return spanDownloadAll;
}