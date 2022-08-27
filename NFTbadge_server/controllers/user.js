const testAddress = require("./getTestAddress");
const {getSheets} = require("../googleApi/getSheets");
const {Student} = require('../models');

module.exports = {
  createTestAddress: async (req, res) => {
    console.log(req.body);
    const result = await testAddress.address;

    await Student.update(
      {
        mainAddress: req.body.mainAddress,
        testAddress: result
      },
      {
        where: {
          email: req.body.email
      }}
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

    return res.status(200).send({
      message: "Not working Server. Yet...",
      result,
    });
  },

  postUser: async (req, res) => {
    await getSheets();
    // console.log("바디", req.body);
    const result = await Student.findAll({ where: { name: req.body.name}})
      .then((data) => {
        // console.log("디비", res);
        res.status(200).send({message: '이것 중에 있어?', data});
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getNFTs: async (req, res) => {
    
  }
};
