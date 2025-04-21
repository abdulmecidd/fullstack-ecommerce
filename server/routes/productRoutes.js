const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/add", productController.add);
router.get("/:id", productController.getOne);
router.get("/", productController.getAll);
router.delete("/:id", productController.deleteOne);
router.put("/:id", productController.updateOne);

module.exports = router;
