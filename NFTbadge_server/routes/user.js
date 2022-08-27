const router = require("express").Router();
const { postUser, createTestAddress } = require("../controllers/user");

router.post("/testAddress", createTestAddress);
router.post("/", postUser);

module.exports = router;
