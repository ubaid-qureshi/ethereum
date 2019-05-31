let Lottery = artifacts.require('./Lottery.sol');

contract('Lottery', function(accounts) {

    let lottery;
    let firstAccount;

    beforeEach(async function() {
        contractCreator = accounts[0];
        firstAccount = accounts[1]
        secondAccount = accounts[2]

        lottery = await Lottery.new({from: contractCreator, gas: 2000000});
    });

    it('deploy a contract', async function() {

        let lottery_add = await lottery.address;
        console.log("Contract Address --> ",lottery_add)
    });

    it('allows one account to enter', async function() {

        await lottery.enter({
            from: firstAccount, 
            value: web3.utils.toWei('0.02', 'ether')});

        const players = await lottery.getPlayers.call();

        expect(firstAccount).to.equal(players[0]);
        expect(1).to.equal(players.length);
    });


    it('allows multiple account to enter', async function() {

        await lottery.enter({
            from: firstAccount, 
            value: web3.utils.toWei('0.02', 'ether')});

        await lottery.enter({
            from: secondAccount, 
            value: web3.utils.toWei('0.03', 'ether')});
        
        const players = await lottery.getPlayers.call();

        expect(firstAccount).to.equal(players[0]);
        expect(secondAccount).to.equal(players[1]);

        expect(2).to.equal(players.length);
    });


    it('only manager can call pickWinner()', async function() {

        const manager = await lottery.manager.call()
        console.log("Manager/Contract Creator --> ", manager)
        expect(manager).to.equal(contractCreator);

        try {
            await lottery.pickWinner({
                from: firstAccount, 
                });

        } catch (error) {
            console.log("ERROR --> ", error.message)
        }
    });

    it('sends money to the winner and resets the players array', async function() {

        let initialBalance = await web3.eth.getBalance(firstAccount);

        await lottery.enter({
            from: firstAccount , 
            value: web3.utils.toWei('0.02', 'ether')});

        let players = await lottery.getPlayers.call();
        expect(1).to.equal(players.length);
        
        await lottery.pickWinner({from: contractCreator});

        let finalBalance  = await web3.eth.getBalance(firstAccount);
        const difference = initialBalance - finalBalance;

        let winningPrize = await web3.utils.toWei('0.018', 'ether');
        expect(difference).to.be.at.least(web3.utils.toWei(Number(winningPrize), 'ether'));

        players = await lottery.getPlayers.call();
        expect(0).to.equal(players.length);

    });

});