import React from "react";

class ViewPlayers extends React.Component {
  
	state = { dataKey: null };

	componentDidMount() {

	    const { drizzle } = this.props;
	    const contract = drizzle.contracts.Lottery;

	    var dataKey = contract.methods.getPlayers.cacheCall();
	    console.log(contract);
	    this.setState({ dataKey });
	}

	render() {
	    const { Lottery } = this.props.drizzleState.contracts;
	    const players = Lottery.getPlayers[this.state.dataKey];

	    var rows = [];
	    for (var i = 0; i < (players && players.value.length); i++) {
	        rows.push(<label key={i}> <br />Player {i+1} - {players && players.value[i]} </label>);
	      }

	    return <p>All {players && players.value.length }  players are {rows}</p>;
	}
}

export default ViewPlayers;