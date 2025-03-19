const express=require("express")
const router=express.Router()
const todoscontroller=require("../controllers/todosController")

router.get("/",todoscontroller.getAllTodus)
router.get("/:id",todoscontroller.getTodosById)
router.post("/",todoscontroller.addTodo)
router.put("/",todoscontroller.updateTodoById)
router.delete("/:id",todoscontroller.deleteTodoById)

module.exports=router