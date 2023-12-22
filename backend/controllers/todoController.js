const Todo = require("../models/todoModel");

const getTodos = (req, res) => {
    Todo.find()
        .then(todos => {
            res.json(todos);
        })
        .catch(error => {
            res.status(500).send({ message: "error", error: error });
        });
};

const createTodo = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    todo.save()
        .then(savedTodo => {
            res.status(201).json(savedTodo);
        })
        .catch(error => {
            res.status(500).send({ message: "error saving todo", error: error });
        });
};

const updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            },
        },
        { new: true }
    )
    .then(updateTodo => {
        res.json(updateTodo);
    })
    .catch(error => {
        res.status(500).send({ message: "error", error: error });
    });
};

const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
        .then(() => res.json({ message: "Todo Deleted" }))
        .catch((error) => res.status(500).send({ message: "Error", error: error }));
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};