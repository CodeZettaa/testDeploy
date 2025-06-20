import express from "express";
import userRoutes from "./src/routes/user.routes.js";
import connection from "./src/config/db.js";
const app = express();
const port = 3000;

app.use(express.json());
connection();
app.use("/user", userRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
