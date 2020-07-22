import React, { Component } from 'react';
class Count extends Component{
    constructor(props){
        super(props);
        this.incnum = this.incnum.bind(this);
        this.decnum = this.decnum.bind(this);
        this.state = {
            number: 0 
        }

    }


    incnum() {
        console.log('inc.....');
        this.setState({
            number: this.state.number + 1
        });
    }

    decnum(){
        console.log('dec....');
        this.setState({
            number:this.state.number -1
        })
    }

    render(){
        return (
            <div>
                <h1>number : {this.state.number}</h1>
                <button onClick={this.incnum}>inc</button>
                <button onClick={this.decnum}>dec</button>
            </div>

        );
    }
}
export default Count