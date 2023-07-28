import verifyToken from "../middleware/checkAuth";
import express from "express";
import postController from "../controllers/postController";

let router = express.Router()

let postRouter = (app) => {
  //GetPost
  router.get("/getpost", postController.getPosts);
  router.get("/getnewpost", postController.getAllNewPost);
  router.get("/getpostarea", postController.getPostForArea)

  //CreatePost 
  router.post("/createpost", verifyToken, postController.createPost)

  //UpdatePost
  router.put("/updatepost", verifyToken, postController.updatePost)

  //Delete
  router.delete('/delete', verifyToken, postController.deletePost)

  // PostAdmin
  router.get("/limit-admin", verifyToken, postController.getPostAdmin)

  //Pagination
  router.get("/limit", postController.postPagination);

  return app.use("/", router)
}
export default postRouter