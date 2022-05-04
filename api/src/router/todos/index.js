const express = require('express');
const todos = require('../../modules/services/todos');
const { Router } = express;
const todosService = require('../../modules/services/todos');

const todosRouter = Router();

todosRouter.get('/', async function(req, res) {
    const todos = await todosService.findAllTodos();
    res.json(todos);
})

todosRouter.get('/:todoId', async function(req, res) {
    const { todoId } = req.params
    const todo = await todosService.findById(todoId);
    res.json(todo);
})

todosRouter.post('/', async function(req, res) {
    try {
        const todo = req.body;
        await todosService.create(todo);
        res.sendStatus(201);
    } catch (e) {
        console.error('Todo not created', e);
        res.sendStatus(400);
    }
})

todosRouter.put('/:todoId', async function(req, res) {
    try {
        const { todoId } = req.params
        const todo = { ...req.body, _id: todoId };
        await todosService.update(todo);
        res.sendStatus(200);
    } catch (e) {
        console.error('Todo not updated', e);
        res.sendStatus(400);
    }
});

todosRouter.patch('/', async function(req, res) {
    try {
        const { _id, field, value } = req.body;
        await todosService.updateField(_id, field, value);
        res.sendStatus(200);
    } catch (e) {
        console.error('Todo not patched', e);
        res.sendStatus(400);
    }
})

todosRouter.delete('/:todoId', async function(req, res) {
    try {
        const { todoId } = req.params;
        await todosService.delete(todoId);
        res.sendStatus(204);
    } catch (e) {
        console.error('Todo not deleted', e);
        res.sendStatus(400);
    }
})

module.exports = { router: todosRouter, path: '/todos' }