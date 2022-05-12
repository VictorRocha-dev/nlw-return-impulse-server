import express from "express";
import cors from 'cors';
import { routes } from "./routes";

const app = express();

// GET = buscar informações do backend
//POST = cadastrar informações no backend
//PUT = atualizar informações de uma entidade
//PATCH = atualizar um informação única de uma entidade
//DELETE = Deletar uma informação
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});
