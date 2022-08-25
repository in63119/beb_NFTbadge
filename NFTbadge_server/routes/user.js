const router = require("express").Router();
const { postUser } = require("../controllers/user");

// router.post("/", createUser);
router.post("/", postUser);

module.exports = router;
