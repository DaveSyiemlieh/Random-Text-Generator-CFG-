import React, { Component } from 'react';

class addGrammar extends Component {


    grammarInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.grammarInput.current.value === '') { return; }
        this.props.handleAddGrammar(this.grammarInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="gr-rule-box">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        ref={this.grammarInput}
                        placeholder="Add Grammar Rule"></input>
                    <input type="submit" value="Add"></input>
                </form>
            </div>
        );
    }
}


export default addGrammar;