### Meta mask

# Faucet
# https://faucet.rinkeby.io/

# Mnemonic
# https://iancoleman.io/ #bip39/



xs




###### Understanding Solidity Compiler 

sudo npm install solc -g
solc
solc greetings.sol #  compiling solc files 

#  Get abi, bin and metadata in json format
solc --combined-json=abi,bin,metadata --output-dir . greetings.sol


#### Understanding Go-Ethereum (geth)

brew update  
brew upgrade
brew tap ethereum/ethereum
brew install solidity


mkdir geth-demo; cd geth-demo
nano init.json
ls
geth --datadir ./datadir_node_0 init init.json
ls # Check datadir in finder

geth account list 
# Create new account with password file
geth account new --password password
geth account list 

# Editing passphrase
geth account update f9fea4d32eaf6213d061fbef9eeed8bfdea7382d

# Console

geth --datadir ./datadir_node_0 console

eth
net
admin
personal
web3
miner

eth.getBlock(0)

eth.accounts
eth.getBalance(eth.accounts[0])
eth.blockNumber

miner.start(1)
#  miner.stop

eth.blockNumber
eth.getBalance(eth.accounts[0])

# create new account
personal.newAccount('123')
eth.accounts

# Transfer ethers
eth.sendTransaction({from:eth.accounts[0], to:eth.accounts[1], value: web3.toWei(1, "ether")})


# Unlock account
personal.unlockAccount(eth.accounts[0], “123”)
eth.sendTransaction({from:eth.accounts[0], to:eth.accounts[1], value: web3.toWei(1, "ether")})

# Check Balance
eth.getBalance(eth.accounts[0])
eth.getBalance(eth.accounts[1])

# start mining
miner.start(1)
# miner.stop()

# Check Balance
eth.getBalance(eth.accounts[0])
eth.getBalance(eth.accounts[1])

# Check transaction
eth.getTransaction("0x1da5dde459846f1f51c48ab4968abd51ee08688b2025e3d19eb024536d348d6e")

# Get block
eth.getBlock("0xf4ebebf921a916e88613932e4e328191af0c0c12a018f0f7fd93c8f58f5f2df8")


# Adding Peers and transfering ether between nodes
# In new terminal 
geth --datadir ./datadir_node_1 init init.json

geth --datadir ./datadir_node_1 --networkid 9999 --port 30306 --nodiscover console
admin.nodeInfo


# In first terminal
admin.addPeer("enode:# f7aa5b604056ff77dc561034f12874586b44b4a00e92355e7f750cfb43717ef1d0092f208b08661b209656d09540b11f6d0c6667a611674f7a75b718424d0c9a@[::]:30306?discport=0")

#  In both terminal 
Admin.peers

# Create account in second node
personal.newAccount('123')
eth.getBalance(eth.accounts[0])

#  In first terminal unlock account and then transfer money
personal.unlockAccount(eth.accounts[0], "123")
eth.sendTransaction({from:eth.accounts[0], to:"0x593e740ff20271d876343e74dcc5d107b0bfb86f", value: web3.toWei(1, "ether")})

# In second terminal
eth.getBalance(eth.accounts[0])









#  In geth Console

#  Light weighted node
geth --rinkeby --rpc --rpcapi="eth,net,web3,personal,txpool" --syncmode=light

geth attach http:# 127.0.0.1:8545

net.peerCount ….

personal.listAccounts
personal.newAccount('123')  # 123 is password of that account

account = personal.listAccounts[0]
eth.getBalance(account)
# transfer ether
eth.getBalance(account)




--------- Working with WEB3 ------------
Mocha
sudo npm install mocha -g
Tests solidity codes (in ganache local network)

Ganache
sudo npm install ganache-cli -g

mkdir web3  ;cd web3

node -v #  v10.15.1
npm -v #  6.4.1
npm init #  it adds package.json file

# Save all dependencies in package.json
npm install --save solc mocha ganache-cli

#  for compiling
#  after arranging code in proper structure
node compile.js #  using solc programmatically  

# for testing
Edit package.json file and write “mocha” in test (package.json was created after running => npm init)
npm test 

#  for deployment
node deployment.js

#  Show transaction in etherscan 
#  Interact with contract from different account in remix

#  saving ABI for interaction with deployed contract through code
solc contracts/greetings.sol --abi -o .

# run interaction code
node interaction.js

#  Take the voter code
node deploy.js
Node interact.js




----- Working with truffle --------

Truffle
sudo npm install truffle -g --unsafe-perm=true #  --allow-root (if previous doesnt work)
Npm-global should have uniform ownership 
/Users/loonycorn/npm-global/bin/truffle






