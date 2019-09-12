import React, { Component } from 'react';

class getOrigin extends Component {

    OriInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleGetOrigin(this.OriInput.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Starting Point</label>
                <textarea
                    className="input-fields"
                    ref={this.OriInput}
                    placeholder="Enter Text and Grammar rules starting here"
                >
                </textarea>
                <button className="button-sub">Submit</button>
            </form>
        );
    }
}

export default getOrigin;