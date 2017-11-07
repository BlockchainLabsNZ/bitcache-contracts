require("babel-register");
require("babel-polyfill");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8565
    }
  },
  mocha: {
    reporter: "mochawesome"
  }
};
