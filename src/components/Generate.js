import React, { Component } from 'react';

class Generate extends Component {

    searchGrammar = (str) => {
        for (let i = 0; i < this.props.grammars.length; i++) {
            if (str === this.props.grammars[i].id) {
                const rand = Math.floor(Math.random() * this.props.grammars[i].value.length);
                return (this.gen(this.props.grammars[i].value[rand]));
            }
        }
        return (str);
    }

    gen = (e) => {
        let str = e;
        let check = 0;
        let rule = '';
        console.log('break');
        for (let i = 0; i < e.length; i++) {
            if(check === 1 && e.charAt(i) === "#")
            {
                str = str.replace('#'+rule+'#',this.searchGrammar(rule));
                check = 0;
                rule = '';
            }
            else if(check === 1){rule = rule.concat(e.charAt(i));}
            else if(e.charAt(i) === "#") {check = 1;}
        }
        return (str);
    }

    handleGen = () =>{
        this.props.handleGetGen(this.gen(this.props.origin));
    }

    render() {
        return (
            <button className="generate-btn" onClick={this.handleGen} >Generate!</button>
        );
    }
}

export default Generate;