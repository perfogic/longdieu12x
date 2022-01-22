// https://eth-ropsten.alchemyapi.io/v2/4TNYYTQPC7MJW3zwYCnL4dN-fsA-cTID

require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: "https://eth-ropsten.alchemyapi.io/v2/4TNYYTQPC7MJW3zwYCnL4dN-fsA-cTID",
			accounts: [
				"b95c15a53fcf988fe7a7eb57f6294fb9baf835cef19372ba962c6aa52cc58480",
			],
		},
	},
};
