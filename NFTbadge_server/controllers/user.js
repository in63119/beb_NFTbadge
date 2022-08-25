const testAddress = require("./getTestAddress");
const {getSheets} = require("../googleApi/getSheets");

module.exports = {
  // createUser: (req, res) => {

  //   const result = testAddress.address;
  //   return res.status(200).send({
  //     message: "Not working Server. Yet...",
  //     result,
  //   });
  // },

  postUser: (req, res) => {
    getSheets();
    console.log("바디", req.body);
    return res.status(200).send({message: '아직 기다려'});
  }
};
