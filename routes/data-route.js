const express = require("express");
const router = express.Router();

router.post("/api", (req, res) => {
    // res.json({ message: "success" });
    console.log(req.body);
    res.json(req.body);
});

router.post("/api/test/:fname/:lname", (req, res) => {
    console.log(req.params);
    res.json(req.params);
});

//used more in industry
router.put("/api/query", (req, res) => {
    console.log(req.query);
    res.json(req.query);
});
module.exports = router;