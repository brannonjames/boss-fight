import React, { Component } from 'react';
import Game from './containers/Game';
import { connect } from 'react-redux';
import { getBosses } from './actions/bosses';
import { fillPlayerDecks } from './actions/players';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(getBosses()).then((res) => {
      this.props.dispatch(fillPlayerDecks(res));
    })
  }

  render() {
    let stage = this.props.gameReady ? <Game /> : <p>Loading...</p>
    return (
      <div className="App">
        {stage}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    gameReady: state.player.bosses.length > 0 || state.bot.bosses.length > 0
  }
}

export default connect(mapStateToProps)(App);
