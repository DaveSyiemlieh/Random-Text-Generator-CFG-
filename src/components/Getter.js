import React from 'react';

class Getter extends React.Component {
  state = {
    value: []
  };

  userInput = React.createRef();

  handleChange = () => {
    this.setState({ value: this.userInput.current.value.split(',') })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    arr = arr.concat(this.state.value);
    this.props.addToGrammars(arr, this.props.id);
  }


  render() {
    return (
      <form className="form-box">
        <label>{this.props.label}</label>
        <textarea
          className="input-fields"
          ref={this.userInput}
          onChange={this.handleChange}>
        </textarea>
        <button className="button-sub" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Getter;