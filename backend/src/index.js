const express = require('express'); // Importam funcionalidades do express do package json
const cors = require('cors');
const routes = require('./routes');

const app = express(); // Variavel que armazena a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333); // Aplicação vai "ouvir" a porta 3333

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota apos o simbolo "?"(Filtros, paginação)]
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc 
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

 