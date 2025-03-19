const express=require("express")
const router=express.Router()
const postController=require("../controllers/postController")
router.get("/",postController.getAllPosts)
router.get("/:id",postController.getPostById)
router.put("/",postController.updatePost)
router.post("/",postController.addPost)
router.delete("/:id",postController.deletePost)

module.exports=router