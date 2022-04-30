import express from "express";
import resolver from "./resolver";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const root = resolver;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root,
  })
);

app.listen(3002, () => console.log(`Server is running at 3002`));
