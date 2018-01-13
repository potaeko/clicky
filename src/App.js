
import React, { Component } from "react";
import EachImage from "./components/EachImage";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";


class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    ids: [1,2,3,4,5,6,7,8,9,10,11,12]
  }; 

  addToScore = (id) => {
    if(this.state.ids.indexOf(id)===-1){
      this.resetScore();
      alert(`You already clicked that one.
        
        YOU LOSE :(
        Starting over...`)
      return;
    } 
    this.setState({ score: this.state.score + 1 });
    if (this.state.score === this.state.highScore){
      this.setState({ highScore: this.state.highScore + 1 });
    }
    if (this.state.score >= 11){
      this.setState({ highScore: 12 });
      this.youWin();
    }
    this.updateIds(id);
    this.render();
    console.log(...this.state.ids);
  };


  updateIds = (id) => {

    var updatedIds = this.state.ids.filter(function(val, index){
      return id !== val;
    });

    this.setState({
      ids: updatedIds
    });

  };

  resetScore = () => {
    this.setState({ score: 0 });
    this.setState({ ids: [1,2,3,4,5,6,7,8,9,10,11,12] })
    this.render();
  };

  youWin = () => {
    this.setState({ highScore: 12 });
    alert("YOU WIN!  Game is restarting...");
    this.resetScore();
  }

  render() {
    return (
    <div className="container">
      <div className="row top-row">
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4">
          <Title>Clicky Game</Title>
        </div>
        <div id="score" className="col-xs-4 col-xs-offset-2 col-sm-2 col-md-2 col-lg-2 numberColumn">
          <h4>Score</h4>
          <div id="score-well" className="well well-sm">{this.state.score}</div>
        </div>
        <div id="high-score" className="col-xs-4 col-sm-2 col-md-2 col-lg-2 numberColumn">
          <h4>High Score</h4>
        <div id="high-score-well" className="well well-sm">{this.state.highScore}</div>
        </div>
      </div>

      <div>
          <Wrapper>
            {this.state.images.sort(function(a, b){return 0.5 - Math.random()}).map(image => (
              <EachImage
                id={image.id}
                clicked={image.clicked}
                image={image.image}
                addToScore={this.addToScore}
                resetScore={this.resetScore}
                render={this.render}
              />
            ))}
          </Wrapper>
        </div>
    </div>
    );
  }
}

export default App;