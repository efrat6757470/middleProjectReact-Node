const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
router.post("/", userController.addUser)
router.get("/:id", userController.getUserById)
router.get("/", userController.getAllUsers)
router.put("/", userController.updateUser)
router.delete("/:id", userController.deleteUser)

module.exports = router