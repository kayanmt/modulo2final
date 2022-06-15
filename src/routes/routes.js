const routes = require('express').Router();
const filmeController=require("../controllers/filmeController");

routes.get("/", filmeController.getAll);
routes.get("/cadastro", filmeController.cadastro);
routes.post("/create",filmeController.create);
routes.get("/getById/:id/:method", filmeController.getById);
routes.put("/update:id",filmeController.update);
routes.get("/remove/:id", filmeController.remove)

module.exports=routes;