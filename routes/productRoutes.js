// productRoutes.js
const express = require("express");
const router = express.Router();
const {
  addProduct,
  listProducts,
  deleteProduct,
  updateProductQuantity,
} = require("../controllers/productController");

// Routes
router.post("/create", addProduct);
router.get("/", listProducts);
router.delete("/:id", deleteProduct);
router.post("/:id/update_quantity", updateProductQuantity);

module.exports = router;
