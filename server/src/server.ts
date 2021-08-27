import express from "express";
import morgan from "morgan";
import movies from "./routes/movie.routes"
import cors from 'cors'


const app = express();
app.use(morgan("combined"));
app.use(cors())

app.use("", movies)


const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;