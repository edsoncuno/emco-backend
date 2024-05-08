const express = require("express");
const itemController = require("../controllers/item");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200);
  res.json(itemController.getItems());
});

router.get("/:id", (req, res) => {
  res.status(200);
  res.json({ id: req.params.id });
});

router.post("/", itemController.createItem);

router.put("/:id", (req, res) => {
  res.status(200);
  res.json({ id: req.params.id });
});
router.delete("/:id", itemController.deleteItem);

module.exports = router;
