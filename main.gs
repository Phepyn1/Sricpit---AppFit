function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("SFIT")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getTreinosPorDia(dia) {
  const planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dados = planilha.getDataRange().getValues();
  return dados.filter(l => l[0] == dia);
}
