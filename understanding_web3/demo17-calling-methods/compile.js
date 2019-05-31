// dependencies 
const path = require('path');
const fs = require('fs');
const solc = require('solc');

// path of our code
const greetingsPath = path.resolve(__dirname, "contracts", "greetings.sol");

// compiling details
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

console.log(solc.compile(JSON.stringify(compilerInput)));
module.exports = solc.compile(JSON.stringify(compilerInput));