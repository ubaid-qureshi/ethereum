
import React from "react";


class EnterLottery extends React.Component {
  
  enter = () => {

    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Lottery;

    contract.methods.enter.cacheSend({
      from: drizzleState.accounts[0],
      value: window.web3.toWei(0.2, 'ether')
    });
  };

render() {
    return (
      <div>
      <h4>Want to try your luck?</h4>
      <label>Pay 0.2 ether to enter</label> <br /><br />
        <button className='button' 
                style={{height: 40,
                        width: 150,
                        borderRadius: 10,
                        fontSize: 15}}
                onClick={this.enter}> <b>Enter</b> </button>
      </div>
    );
  }
}
export default EnterLottery;