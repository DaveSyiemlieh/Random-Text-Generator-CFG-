import React from 'react';

const textOutput = (props) => {
    return <textarea
        className="output-field"
        value={props.value}
        placeholder="Generated Text Over Here!">
    </textarea>
}


export default textOutput;