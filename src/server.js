require('express-async-errors');
const AppError = require('./utils/AppError');
const migrationsRun = require('./database/sqlite/migrations');
const express = require('express');
const routes = require('./routes');
migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const port = 3333;
app.listen(port, () => console.log(`server is running on port ${port}`));
