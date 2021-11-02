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
    const splitRegex = new RegExp(/\((.*?)\)|(\W)/);
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
    const splitRegex = new RegExp(/\((.*?)\)|(\W)/);
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
  const classTimes = {
    "M": {
        "1": "07:00 - 08:00 | ",
        "2": "08:00 - 09:00 | ",
        "3": "09:00 - 10:00 | ",
        "4": "10:00 - 11:00 | ",
        "5": "11:00 - 12:00 | "
    },
  
    "T": {
        "1": "12:00 - 13:00 | ",
        "2": "13:00 - 14:00 | ",
        "3": "14:00 - 15:00 | ",
        "4": "15:00 - 16:00 | ",
        "5": "16:00 - 17:00 | "
    },
    
    "N": {
        "1": "17:00 - 18:00 | ",
        "2": "18:00 - 19:00 | ",
        "3": "19:00 - 20:00 | ",
        "4": "20:00 - 21:00 | ",
        "5": "21:00 - 22:00 | "
    }
  }
  let finalStringTime = "";

  //Se nao tiver horario definido.
  if(turn == undefined || time == undefined) {
    return "";
  }

  //Double switch para checar o turno e o horario (ex: M1, T3...)
  for(let i = 0; i<time.length; i++) {
    finalStringTime += classTimes[turn][time[i]];
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
