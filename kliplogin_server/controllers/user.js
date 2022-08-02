const testAddress = require("./getTestAddress");

module.exports = {
  createUser: (req, res) => {
    console.log("바디", req.body);

    const result = testAddress.address;
    return res.status(200).send({
      message: "Not working Server. Yet...",
      result,
    });
  },
};
