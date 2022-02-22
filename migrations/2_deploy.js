require('dotenv').config();

const AircoinsMetaverse = artifacts.require("AircoinsMetaverse");

// having the slash '/' at the end of URI, is important
const BaseURI = `${process.env.API_URI}/api/token/`;
console.log("BaseURI", BaseURI);

module.exports = function (deployer) {
  deployer.deploy(AircoinsMetaverse, BaseURI);
};
