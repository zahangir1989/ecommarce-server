const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookeParser = require("cookie-parser");

const app = express();
const PORT = 3000;

// midleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookeParser());

// gvovTkUx2BoGiY60
// alamzahangir218_db_user

mongoose
  .connect(
    "mongodb+srv://alamzahangir218_db_user:gvovTkUx2BoGiY60@cluster0.pcdtzjd.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("DB Connect Done"))
  .catch((err) => console.log(err));

// model

const userModel = require("./model/usersModel.js");
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const getUser = await userModel.findOne({ email });
    if (getUser) {
      return res.status(404).json({ message: "User already exit." });
    }

    const user = await userModel.create({
      name,
      email,
      password,
    });

    res.status(201).json({user, message: "User Register Successful"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

app.post('/api/login', async(req,res) => {
    const {email, password} = req.body;

    try {
    const user = await userModel.findOne({email});
    if(!user){
      return res.status(404).json({message: "Unauthoraization user"})
    }
    return res.status(201).json({status: 201, message: "Login Successfully"})
    } catch (error) {
     return res.status(404).json(error.message)
    }
})

app.get("/", (req, res) => {
  res.send("Server On Going Run");
});

app.listen(PORT, () => {
  console.log(`Server is rinning PORT ${PORT}`);
});
