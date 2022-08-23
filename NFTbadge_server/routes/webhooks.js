const router = require("express").Router();
const { webhooks } = require("../controllers/webhooks");

router.post("/", webhooks);

module.exports = router;
