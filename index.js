const express = require("express");
const app = express();
app.use(express.json());

//app.post("/KtoC", (request, response) => {
//    const { tempK } = request.body;
  
//    response.json({
//      result: `A Temperatura Kelvin ${tempK} em Celsius fica: ${tempK - 273}`,
//    });
//});

//app.post("/CtoK", (request, response) => {
//    const { tempC } = request.body;
  
//    response.json({
//      result: `A Temperatura Celsius ${tempC} em Kelvin fica: ${tempC + 273}`,
//    });
//});

app.get("/:conversor", (request, response) => {
    const conversor = request.params.conversor;
    let menssagem;
    switch (conversor) {
        case "KtoC":
          const { tempK } = request.body;
          menssagem = `A Temperatura Kelvin ${tempK} em Celsius fica: ${tempK - 273}°`;
          break;
        case "CtoK":
          const { tempC } = request.body;
          menssagem = `A Temperatura Celsius ${tempC}° em Kelvin fica: ${tempC + 273}`;
          break;
    }
    response.json(menssagem);
});

app.listen(3000, () => {
    console.log("Servidor Subiu");
  });