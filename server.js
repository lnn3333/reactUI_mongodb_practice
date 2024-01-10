const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
require('dotenv').config();
const PORT = 3001;


app.use(cors());
app.use(express.json());
//connect to mongoose
mongoose.connect("mongodb+srv://nguyenlinh:Nhanjom@cluster0.olh0z3e.mongodb.net/notesDB")

app.use("/", require("./routes/noteRoute"))
app.listen(PORT, () => {
    console.log(`Server is running o port ${PORT}`);
  });
  