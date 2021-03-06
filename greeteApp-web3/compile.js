const path = require('path');
const fs = require('fs');
const solc = require('solc');

const greetingsPath = path.resolve(__dirname, "contracts", "greetings.sol");

const compilerInput = {
    language: "Solidity",
    sources: {
        'greetings': { content: fs.readFileSync(greetingsPath, 'utf8') }
    },
      
      settings: {
      outputSelection: {
        "*": {
          "*": [ "abi", "evm.bytecode" ]
        }
      }
    }
};

module.exports = solc.compile(JSON.stringify(compilerInput))