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
    // Há casos onde podem aparecer horários nesse formato '7T3 (20/09/2021 - 21/12/2021)'
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
    if(i == 0) {
      finalDays.push(mapDays(splitedString[0])); //Descubro o dia
    } else {
      finalDays.push("<br>"+mapDays(splitedString[0])); //Descubro o dia
    }
    finalTimes.push(mapTimes(splitedString[1], splitedString[2])); //Descubro o horario
  }

  //String final que será trocada pelos códigos de disciplinas
  let finalString = "";
  for(let i = 0; i < finalDays.length; i++) {
    finalString += finalDays[i] +"<br>| " + finalTimes[i];
    finalString += "<br>";
  }
  if (obs) {
    finalString += "<br>";
    finalString += obs;
  }
  return finalString;
}

function discoverTimeToSubjectsAlternative(code) {
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

  for (let i = 0; i < 4; i++) {
    let colorButton = document.createElement('input');
    colorButton.id = `COR_${i}`
    colorButton.type = 'color';
    colorButton.value = getCurrentColor[i]
    colorButton.style.width = '71px';
    colorButton.style.height = '25px';
    colorButton.onclick = function(e) {
      e.stopPropagation();
    };
    menuContent.appendChild(colorButton);
  }
  let applyButton = document.createElement('button');
  applyButton.style.width = '100%';
  applyButton.style.height = '18px';
  applyButton.innerText = 'Aplicar'
  applyButton.onclick = function (e) {
    let themeTextNode = document.createTextNode(
      generateCSSTheme(
        document.getElementById('COR_0').value, 
        document.getElementById('COR_1').value, 
        document.getElementById('COR_2').value, 
        document.getElementById('COR_3').value
      ));
    let themeStyle = document.createElement('style');
    themeStyle.appendChild(themeTextNode);
    document.head.appendChild(themeStyle);
    e.stopPropagation();
  }
  menuContent.appendChild(applyButton);

  return menuItem;
}

function componentFromStr(numStr, percent) {
  var num = Math.max(0, parseInt(numStr, 10));
  return percent ?
      Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

function rgbToHex(rgb) {
  console.log(rgb);
  var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
  var result, r, g, b, hex = "";
  if ( (result = rgbRegex.exec(rgb)) ) {
      r = componentFromStr(result[1], result[2]);
      g = componentFromStr(result[3], result[4]);
      b = componentFromStr(result[5], result[6]);

      hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return hex;
}