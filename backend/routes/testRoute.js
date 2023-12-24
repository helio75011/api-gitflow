const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
const { getContact, createContact, updateContact, deleteContact } = require("../controllers/contactController");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API !");
});

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

router.get("/contacts", getContact);
router.post("/contacts", createContact);
router.put("/contacts/:contactID", updateContact);
router.delete("/contacts/:contactID", deleteContact);

module.exports = router;