import React, { Component } from 'react';
import './App.css';
import GraphBars from './vanillagraphbar.js';



class App extends Component {

      constructor(props) {
        super(props);
        this.state = {
            vanillaVoteCount: 2,
            chocolateVoteCount: 5,
            strawberryVoteCount: 6,
            totalVotes: 0
        };
    }

  render() {
    return (
      <div className="App">
        <div className="App_Container">
         <section className="Graph_Container">
            <GraphBars  label ="Vanilla" className="Graphs" value = {this.state.vanillaVoteCount} totalVotes = { this.state.totalVotes } />
            <GraphBars  label = "Chocolate" className="Graphs"  value = {this.state.chocolateVoteCount}  totalVotes = { this.state.totalVotes } />
            <GraphBars label = "Strawberry" className="Graphs"  value = {this.state.strawberryVoteCount}  totalVotes = { this.state.totalVotes } />
        </section>

        <section className="Buttons">
            <button id ="Vanilla" onClick = { this.vanillaButtonVote.bind(this) }>Vanilla</button>
            <button id ="Chocolate" onClick = { this.chocolateButtonVote.bind(this) }>Chocolate</button>
            <button id ="Strawberry" onClick = { this.strawberryButtonVote.bind(this) }>Strawberry</button>
        </section>
        <div>
          <h2>Vote on your favorite flavor!</h2>
        </div>


        </div>
      </div>
    );
  }



//Create function here for when button is pressed
//Pass the value to the graph component that renders the graphs
vanillaButtonVote() {
    this.setState(prevState => ( { vanillaVoteCount: prevState.vanillaVoteCount + 1, totalVotes: prevState.totalVotes+1  } ) );
    console.log("Vanilla: " + this.state.vanillaVoteCount);
  }
  chocolateButtonVote() {
    this.setState(prevState => ({chocolateVoteCount: prevState.chocolateVoteCount + 1, totalVotes: prevState.totalVotes+1 }));
    console.log("Chocolate: " + this.state.chocolateVoteCount);
  }

  strawberryButtonVote() {
    this.setState(prevState => ({strawberryVoteCount: prevState.strawberryVoteCount + 1, totalVotes: prevState.totalVotes+1 }));
    console.log("Strawberry: " + this.state.strawberryVoteCount);
    console.log(this.state.totalVotes);
  }

}
export default App;
