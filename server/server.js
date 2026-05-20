const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Ride = require("./models/Ride");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/ride/create", async (req, res) => {
  try {
    const { source, destination, price, seats } = req.body;

    const ride = await Ride.create({
      source,
      destination,
      price,
      seats,
    });

    res.status(201).json({
      message: "Ride Created Successfully",
      ride,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating ride",
      error,
    });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.get("/rides", async (req, res) => {
  try {
    const rides = await Ride.find();

    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching rides",
      error,
    });
  }
});
app.delete("/ride/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Ride.findByIdAndDelete(id);

    res.status(200).json({
      message: "Ride Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting ride",
      error,
    });
  }
});