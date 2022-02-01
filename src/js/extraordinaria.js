if (MATRICULA_EXTRAORDIONARIA_TABLE != null && PAGE_HEADER && PAGE_HEADER.textContent === 'Matrícula  Extraordinária') {
  for (let i = 0; i < MATRICULA_EXTRAORDIONARIA_TABLE.children.length; i++) {
    const currentLine = MATRICULA_EXTRAORDIONARIA_TABLE.children[i];
    if (currentLine.className.indexOf("destaque") > -1 || currentLine.childElementCount < 5) {
      continue;
    }
    let code = currentLine.children[4].innerHTML;
    code = code.split("(")[0];
    if (code.length > 0) {
      currentLine.children[4].classList.add('horario-tooltip');
      let result = discoverTimeToSubjectsAlternative(code);
      result.classList.add('tooltiptext');
      currentLine.children[4].appendChild(result);
    }
  }
}