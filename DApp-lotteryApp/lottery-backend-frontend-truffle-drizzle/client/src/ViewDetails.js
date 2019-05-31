import React from "react";

class ViewDetails extends React.Component {
  
	state = { manager: null, winningPrize: null};

	async componentDidMount() {

	    const { drizzle } = this.props;
	    console.log(drizzle);
	    const contract = drizzle.contracts.Lottery;

	    var manager = contract.methods.manager.cacheCall();
	    var winningPrize = await drizzle.web3.eth.getBalance(contract.address)

	    this.setState({ manager, winningPrize});
	}

	render() {
		const { drizzle } = this.props;
	    const { Lottery } = this.props.drizzleState.contracts;
	    const manager = Lottery.manager[this.state.manager];
	    const balance = this.state.winningPrize;
	    
	   return (
	   	<p>This contract is managed by <b>{manager && manager.value}</b>.
	   	 All players are competing to win  <b>{balance && drizzle.web3.utils.fromWei(balance,'ether')}</b> ether!</p>
	   	)
	}
}
export default ViewDetails;