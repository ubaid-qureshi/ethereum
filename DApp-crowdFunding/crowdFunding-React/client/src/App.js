import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import './App.css';
import { Campaign } from './components/Campaign';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import history from './history';


//UE
import web3 from './web3';
 
class App extends Component {

  render() {

    //UE
    console.log(web3.version)
    web3.eth.getAccounts().then(console.log)


    return (
      <Router history={history}>
        <Container>

          <Menu secondary>
            <Menu.Item
              name='home'
              onClick={this.navigateToHome}
            />
          </Menu>


          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/campaigns/:address' component={Campaign} />
            <Route component={NotFound} />
          </Switch>

        </Container>
      </Router>
    );
  }


  navigateToHome(e){
    e.preventDefault();
    history.push('/');
  }
}

export default App;
