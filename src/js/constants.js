const SHCEDULEBOARD_HEADER = document.querySelector(
  "#conteudo > div.box-geral > " + "div:nth-child(4) > table > thead > tr"
);

const SCHEDULEBOARD_BODY = document.querySelector(
  "#conteudo > div.box-geral >" + "div:nth-child(4) > table > tbody"
);

const MAIN_SCHEDULEBOARD_HEADER = document.querySelector(
  "#conteudo > #portal-docente > #main-docente > #turmas-portal > table.subFormulario > thead > tr"
);

const MAIN_SCHEDULEBOARD_BODY = document.querySelector(
  "#conteudo > #portal-docente > #main-docente > #turmas-portal >" +
    "table:nth-child(3) > tbody"
);

const MATRICULA_EXTRAORDIONARIA_TABLE = document.querySelector(
  "#lista-turmas-extra > tbody"
);

const SIGAA_BETA = document.querySelector(
  "#j_id_jsp_1306271468_3 > div:nth-child(5) > div > div > table > tbody"
);

const SIGAA_BETA_TABLE_HEADERS = document.querySelector(
  "#j_id_jsp_1306271468_3 > div:nth-child(5) > div > div > table > thead > tr"
);

const SIGAA_BETA_SCHEDULE_TIME_HEADER = document.querySelector(
  "#j_id_jsp_1306271468_3 > div:nth-child(5) > div > div > table > thead > tr > th.text-center"
);

//Seleciona elemento cujo id contenha NívelTR
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> cc_29001t_05s_0º NívelTR
const SUBJECTS = document.querySelectorAll('[id*="NívelTR"]');

//Seleciona elemento cujo id contenha _TR
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> cc_30847c_24803t_01s_TR
const EQUIVALENT_SUBJECTS = document.querySelectorAll('[id*="_TR"]');

//Seleciona elemento cujo id contenha turma_ e seja da tag tr
//As linhas (<tr>) de disciplinas tem um id nesse estilo -> turma_142381TR
const OPEN_SUBJECTS = document.querySelectorAll('tr[id*="turma_"]');

//Seleciona elemento cujo id seja 'colHorario' e seja da tag td
const QUERIED_SUBJECTS = document.querySelectorAll('td#colHorario');

//Tabela de quadro de horários do momento da matricula de turmas
const TIME_BOARD_ENROLLMENT_TABLE = document.querySelector('div.box-secao:nth-child(4) > table:nth-child(2)');

const IS_BETA = document.querySelector('.logo > span:nth-child(2)');

const ALL_CLASSES_TABLE = document.querySelector("table.listagem:not([id^='lista-turmas'])");

const ALL_CLASSES_ROWS = document.querySelectorAll(".listagem tr.linhaPar, .listagem tr.linhaImpar");

const CLASS_TIMES = {
  M: {
      1: "07:00 - 08:00 | ",
      2: "08:00 - 09:00 | ",
      3: "09:00 - 10:00 | ",
      4: "10:00 - 11:00 | ",
      5: "11:00 - 12:00 | "
  },

  T: {
      1: "12:00 - 13:00 | ",
      2: "13:00 - 14:00 | ",
      3: "14:00 - 15:00 | ",
      4: "15:00 - 16:00 | ",
      5: "16:00 - 17:00 | "
  },

  N: {
      1: "17:00 - 18:00 | ",
      2: "18:00 - 19:00 | ",
      3: "19:00 - 20:00 | ",
      4: "20:00 - 21:00 | ",
      5: "21:00 - 22:00 | "
  }
}

const TIME_BOARD = {
  M1: "07:00 às 08:00",
  M2: "08:00 às 09:00",
  M3: "09:00 às 10:00",
  M4: "10:00 às 11:00",
  M5: "11:00 às 12:00",
  T1: "12:00 às 13:00",
  T2: "13:00 às 14:00",
  T3: "14:00 às 15:00",
  T4: "15:00 às 16:00",
  T5: "16:00 às 17:00",
  N1: "17:00 às 18:00",
  N2: "18:00 às 19:00",
  N3: "19:00 às 20:00",
  N4: "20:00 às 21:00",
  N5: "21:00 às 22:00",
};

const DAYS = {
  1: "Dom",
  2: "Seg",
  3: "Ter",
  4: "Qua",
  5: "Qui",
  6: "Sex",
  7: "Sab",
};
