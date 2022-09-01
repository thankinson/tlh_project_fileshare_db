require("./db/connection");
const express = require("express");
const cors = require("cors");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(movieRouter);
app.use(userRouter);

console.log("server js load")

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
