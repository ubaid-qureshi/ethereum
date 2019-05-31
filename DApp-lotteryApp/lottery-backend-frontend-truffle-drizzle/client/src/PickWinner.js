import React from "react";

class PickWinner extends React.Component {
  
  pick = () => {

    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Lottery;

    contract.methods.pickWinner.cacheSend({
      from: drizzleState.accounts[0]
    });
  };


render() {
    return (
      <div>
      <h4>Ready to pick a winner?</h4>
       <div><button className='button' 
                      style={{height: 40,
                              width: 150,
                              borderRadius: 10,
                              fontSize: 15}}
                    onClick={this.pick} >
                    <b>Pick Winner</b>
            </button></div>
      </div>
    );
  }
}
export default PickWinner;