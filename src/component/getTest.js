import React, { Component } from 'react';
import axios from 'axios'

class GetTest extends Component{
    constructor(props){
        super(props);
        this.gStates = this.gStates.bind(this);
        this.pStates = this.pStates.bind(this);
        this.getText = this.getText.bind(this);
        this.state = {
            name: null,
            textArea: " "
        }
    }

    gStates(){
        console.log("ss");
        const response = axios.get(
            '/user/?user=YUKJISEONG' + this.state.textArea
        )
        .then(response => {
            console.log(response.data)   
            this.setState({
                name: response.data['user']
            })
        })
    }

    pStates(){
        console.log("post");
        
        axios.post(
            '/post', {params: {name: this.state.name, user: this.state.textArea}}
        )
        .then(response => {
            console.log(response.data)   
            this.setState({
                name: response.data
            })
        })
    }

    getText = (e) =>{
        this.setState({
            textArea:e.target.value
        })
    }

    render(){
        const {name} = this.state
        return(
            <div>
                <input type='text' onChange={this.getText}></input>
                {name ? <h1>{name}</h1>:<h1>loading...</h1>}
                <button onClick={this.gStates}>getTest</button>
                <button onClick={this.pStates}>postTest</button>
            </div>
        );
    }
}
//

export default GetTest