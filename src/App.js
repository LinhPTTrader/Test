import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Car from './component/Mycomponent';
import React from 'react';
import Infocarcomponent from './component/Infocarcomponent';


class App extends React.Component {
  state = {
    name: 'LinhPhan',
    address: 'TPHCM',
    age: 18
  }
  changeUser = (event) => {
    this.setState({
      name: 'KhanhHa'
    })
  }
  changeAddress = (event) => {
    this.setState({
      address: event.target.value
    })
  }
  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Infocarcomponent></Infocarcomponent>
        <Car></Car>
      </div>
    )
  }
}


export default App;
