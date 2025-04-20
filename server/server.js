const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute=require('./router/contact-router');
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
// const contactForm = require("./controllers/contact-controller");
require("dotenv").config();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
