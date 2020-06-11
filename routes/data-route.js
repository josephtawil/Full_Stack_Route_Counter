const express = require("express");
const router = express.Router();

router.post("/api", (req, res) => {
    // res.json({ message: "success" });
    res.json(req.body);
});
module.exports = router;