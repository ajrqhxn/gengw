import React from 'react';
// import axios from 'axios'
import GetTest from './component/getTest'
//import logo from './logo.svg';
import './App.css';
//import Hello2 from './component/hello2';
//import Hello from './component/hello';
import Count from './component/count';
import Header from './component/Header';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: null
    };
  }
  componentDidMount() {
    console.log("qqqq") 
    console.log("qqqq") 
    fetch('http://localhost:3001/api')
    .then(res => res.json())
    .then(data => this.setState({title: data.title}));
  }


  render(){

    console.log(this.state.title)
    const {title} = this.state;
    return (
      

      <div className="App">
      <div>
        <Header/>
        {this.props.children}
      </div>

        <header className="App-header">
            {title ? <h1>{title}</h1>:<h1>loading...</h1>}
            <GetTest />
            <Count />
        </header>
      </div>
    );}
}


export default App;

