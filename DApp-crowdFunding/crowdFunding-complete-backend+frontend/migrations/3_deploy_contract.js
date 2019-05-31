var CrowdFundingWithDeadline = artifacts.require("./CrowdFundingWithDeadline.sol");

module.exports = function(deployer) {
  deployer.deploy(
    CrowdFundingWithDeadline, 
    "Fund Raiser",
    40,
    10,
    "0x8FE34f531db3Fc6906ad4FADe3785D25eDE1f972"
  );
};
