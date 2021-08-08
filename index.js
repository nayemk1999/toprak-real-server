const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const reviewRoute = require("./routes/review");
const propertyRoute = require("./routes/property");

dotenv.config();
const port = 5000;

// const mongoURL = process.env.MONGO_URL;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yatkb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
// const uri = 'mongodb+srv://toprak-real:toprak-real@cluster0.yatkb.mongodb.net/toprak-real?retryWrites=true&w=majority'

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));


// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/property", propertyRoute);
app.use("/review", reviewRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port || process.env.PORT);
