const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");

const testAddress = caver.klay.accounts.create();
module.exports = testAddress;
