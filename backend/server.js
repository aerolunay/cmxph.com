require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const recruitmentRoutes = require("./routes/recruitmentRoutes");

const app = express(); // ✅ THIS WAS MISSING

/*
========================================
MIDDLEWARE
========================================
*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
========================================
ROUTES
========================================
*/
app.use("/api/recruitment", recruitmentRoutes);

/*
========================================
TEST ROUTE
========================================
*/
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

/*
========================================
SERVER
========================================
*/
const PORT = process.env.PORT || 5017;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});