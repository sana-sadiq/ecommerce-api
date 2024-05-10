// index.js
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define product routes
app.use("/products", productRoutes);
