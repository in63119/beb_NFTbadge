module.exports = {
  webhooks: (req, res) => {
    console.log("바디");
    return res.status(200).send({
      message: "Not working Server. Yet..."
    });
  },
};