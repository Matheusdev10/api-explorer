// const express = require('express');

// const app = express();

//route params
// usando route params eu coloco dois pontos
//parametros obrigatorios /message/:id/:user'
// app.get('/message/:id/:user', (request, response) => {
//   const { id, user } = request.params;
//   response.send(`mensagem id: ${id}.
//   Nome do usuario: ${user}
//   `);
// });

//query params
// app.get('/users', (request, response) => {
//   const { page, limit } = request.query;
//   response.send(`pagina: ${page}. mostrar: ${limit}`);
// });

// parametros do query params fica flexivel nao é obrigatorio
// passar os parametros na url

// const port = 3333;
// app.listen(port, () => console.log(`server is running on port ${port}`));
