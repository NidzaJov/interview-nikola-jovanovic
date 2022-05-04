const { FetchService } = require('./fetchService')

class TodosService {
    async getAllTodos() {
        const result = await FetchService.getRequest('todos');
        if (result.ok) {
            return await result.json();
        }
        else {
            throw new Error('Fetching todos failed.');
        }
    }

    async createTodo(payload) {
        const result = await FetchService.postRequest('todos', payload);
        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Creating todo failed')
        }
    }

    async deleteTodo(payload) {
        const result = await FetchService.deleteRequest('todos', payload);
        if (result.ok) {
            return true;
        } else {
            throw new Error('Deleting todo failed')
        }
    }

    async patchTodo(payload) {
        const result = await FetchService.patchRequest('todos', payload);
        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Patching todo failed')
        }
    }

    async editTodo(payload) {
        const result = await FetchService.putRequest('todos', payload)
        if (result.ok) {
            return true;
        } else {
            throw new Error('Editing todo failed');
        }
    }
}

export default new TodosService();