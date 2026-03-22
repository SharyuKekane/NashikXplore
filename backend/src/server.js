const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/locallegacy");

const VendorSchema = new mongoose.Schema({
  name: String,
  owner: String,
  category: String,
  location: String,
  whatsapp: String,
  description: String,
  years: String,
  price: String,
  story: String,
});

const Vendor = mongoose.model("Vendor", VendorSchema);

app.post("/api/vendors", async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json(vendor);
  } catch (error) {
    res.status(500).json({ message: "Error saving vendor" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});