const { ObjectID } = require('bson');
const { DB } = require('../../modules/database')

class TodosService {
    static get collection() {
        return DB.collection("todos")
    }

    async create(todoObj) {
        const todoDoc = {
            ...todoObj,
            _id: new ObjectID()
        }
        await TodosService.collection.insertOne(todoDoc);
    }

    async findById(todoId) {
        return await TodosService.collection.findOne({
            _id: new ObjectID(todoId)
        })
    }

    async findAllTodos() {
        return await TodosService.collection.find().toArray();
    }

    async delete(todoId) {
        return await TodosService.collection.deleteOne({
            _id: new ObjectID(todoId)
        })
    }

    async update(todo) {
        const { _id } = todo;
        delete todo._id;
        
        return await TodosService.collection.updateOne({
            _id: new ObjectID(_id),
        }, {
            $set: {...todo,}
        })
    }

    async updateField(todoId, field, value) {
        console.info('Update field got: ', todoId, field, value)
        return await TodosService.collection.updateOne({
            _id: new ObjectID(todoId)
        }, {
            $set: { [field]: value}
        })
    }
}

module.exports = new TodosService();