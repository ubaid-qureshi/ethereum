import React, { Component } from 'react';
import './App.css';
import ViewPlayers from "./ViewPlayers";
import EnterLottery from "./EnterLottery";
import PickWinner from "./PickWinner";
import ViewDetails from "./ViewDetails";


class App extends Component {

  state = { loading: true, drizzleState: null };


async componentDidMount() {
    const { drizzle } = this.props;

    this.unsubscribe = drizzle.store.subscribe(() => {

      const drizzleState = drizzle.store.getState();
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }


compomentWillUnmount() {
    this.unsubscribe();
  }

render() {
  if (this.state.loading) return "Loading Drizzle...";
  return (

    <div className="App">

      <h2 >Lottery Contract</h2>
      <div  align="left">
      <ViewDetails
        drizzle={this.props.drizzle}
        drizzleState={this.state.drizzleState}
      />
      </div>

      <hr />

      <div  align="left">
      <ViewPlayers
        drizzle={this.props.drizzle}
        drizzleState={this.state.drizzleState}
      />
      </div>

      <hr />
      <div  align="left">
        <EnterLottery 
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        </div>
      <hr />

      <div  align="left">
        <PickWinner 
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        </div>
      <hr />

    </div>
  );
}
}

export default App;

