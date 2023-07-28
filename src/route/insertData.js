import express from "express";
import insertController from "../controllers/insertController";
let router = express.Router();

let insertData = (app) => {
  router.post("/insert", insertController.insertData);
  return app.use("/", router);
};

export default insertData;
