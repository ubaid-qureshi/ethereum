import React, { Component } from 'react';
import './App.css';
import lottery from './lottery';
import web3 from './web3';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
  };

  async componentDidMount() {
    const players = await lottery.methods.getPlayers().call();
    const manager = await lottery.methods.manager().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    
    console.log(players)
    this.setState({ manager, players, balance });

  }

  enter = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    console.log(this.state.players);
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.2', 'ether')
    });
  };

  pickWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
  };

  render() {
    var rows = [];
    
    for (var i = 0; i < this.state.players.length; i++) {
        rows.push(<label> <br />Player {i+1} - {this.state.players[i]} </label>);
      }

    return (
      <div className='App'>
        <h2 align = 'center'>Lottery Contract</h2>

        <p>
          This contract is managed by <b>{this.state.manager}</b>. All players are competing to win{' '}
          <b>{web3.utils.fromWei(this.state.balance, 'ether')}</b> ether!
        </p>

        <hr />
        
        <p>
        All {this.state.players.length} players are {rows}
        </p>

        <hr />

        <h4>Want to try your luck?</h4>
        <button className='button' 
                style={{height: 40,
                        width: 150,
                        borderRadius: 10,
                        fontSize: 15}}
                onClick={this.enter}> <b>Enter</b> 
        </button>

        <hr />

        <h4>Ready to pick a winner?</h4>
         <button  className='button' 
                style={{height: 40,
                        width: 150,
                        borderRadius: 10,
                        fontSize: 15}}
              onClick={this.pickWinner} >
              <b>Pick Winner</b>
         </button>

        <hr />
      </div>
    );
  }
}

export default App;

