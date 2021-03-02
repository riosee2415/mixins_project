import express from "express";
import helmet from "helmet";
import path from "path";
import pageRouter from "./router/pageRouter";

const app = express();

const PORT = 3000;

app.use(helmet());
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", pageRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} SERVER START!`);
});
