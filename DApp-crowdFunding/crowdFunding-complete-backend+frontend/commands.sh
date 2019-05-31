

sudo npm install truffle -g
# sudo npm install truffle -g --unsafe-perm=true --allow-root (if previous doesnt work)
# Npm-global should have uniform ownership 
sudo chown -R loonycorn/Users/loonycorn/npm-global/


truffle init

truffle test --network ganache

truffle migrate --network ganache



######## Front End with Drizzle
npm install -g create-react-app

create-react-app client

cd client
npm install drizzle semantic-ui-react --save
cd src

ln -s ../../build/contracts contracts

cd ..

npm start











