import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import graphqlServer from "./graphql/graphql";

const PORT = process.env.PORT || 3100;
const app = express();

app.use(express.json());

async function StartServer() {
  app.use("/graphql", expressMiddleware(await graphqlServer(), {}));
  app.listen(PORT, () => console.log("server is running on PORT: ", PORT));
}
StartServer();

app.get("/", (req, res) => {
  res.send("hello world");
});
