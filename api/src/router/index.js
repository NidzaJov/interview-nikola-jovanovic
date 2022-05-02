const express = require('express');
const { Router } = express;
const todos = require('./todos');

const mainRouter = Router();

mainRouter.use(express.json());
mainRouter.use(todos.path, todos.router);

module.exports = {
    path: '/api',
    router: mainRouter,
}