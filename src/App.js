import React, { Component } from 'react';
import Getter from './components/Getter';
import AddGrammar from './components/AddGrammar';
import AddOrigin from './components/GetOrigin';
import Generate from './components/Generate';
import TextOut from './components/textOutput';

class App extends Component {
  state = {
    grammars: [],
    labels: [],
    currentId: 0,
    origin: '',
    out: ''
  };

  addToGrammars = (arr, id) => {
    let flag = true;
    console.log(arr);

    for (let i = 0; i < this.state.grammars.length; ++i) {
      if (id === this.state.grammars[i].id) flag = false
    }

    if (flag)
      this.setState(prevState => ({
        grammars: [
          ...prevState.grammars,
          {
            id: id,
            value: arr
          }
        ]
      }));
    else
      this.setState(prevState => {
        let x = prevState.grammars;
        for (let i = 0; i < x.length; ++i) {
          if (x[i].id === id) {
            x[i].value = arr
          }
        }
        return { grammars: x };
      });
  }

  handleAddGrammar = (e) => {
    this.setState(prevState => {
      return {
        labels: [
          ...prevState.labels,
          {
            name: e,
            id: this.currentId = +1
          }
        ]
      };
    })
  }

  handleGetOrigin = (e) => {
    this.setState({ origin: e.toString() })
  }

  handleGetGen = (str) => {
    this.setState({ out: str });
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <AddOrigin handleGetOrigin={this.handleGetOrigin} />
          {this.state.labels.map((labels) =>
            <Getter addToGrammars={this.addToGrammars} label={labels.name} id={labels.name} key={labels.name} />
          )}
          <AddGrammar handleAddGrammar={this.handleAddGrammar} />
          <Generate origin={this.state.origin} grammars={this.state.grammars} handleGetGen={this.handleGetGen} />
        </div>
        <div className="out">
          <TextOut value={this.state.out} />
          <div className="details">
            <h1>Working:</h1>
            <ol>
              <li>The Generation will start from the "STARTING POINT"</li>
              <li>You can type your text or add a GRAMMAR RULE in the STARTING POINT input.</li>
              <li>A Grammar Rule is identified with 2 "#" symbols at the start and end of the rule</li>
              <li>Click "ADD" to add a grammar rule. In the input area, you can type in your words/sentences/grammar rules and can separate each set with a "," (comma).</li>
              <li>If a matching rule is found, then it will be replaced by the other text/more grammar rules specified in the grammar rule</li>
              <li>After entering your text or grammar rule, click on SUBMIT for your new text to take effect</li>
              <li>When you're happy with your setup, click (lots of times) on GENERATE and watch the magic unfold!</li>
              <li><a href="https://github.com/CodeVague/Random-Text-Generator-CFG-"
              target="blank">Click Here</a> for an example.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
