import React, { Component } from 'react';


class Hello extends Component {
    render() {
        return(
            <div>
                <h1>hello! : {this.props.title}</h1>
                <p>data : {this.props.data} </p>
            </div>
        )
    }
}

export default Hello

