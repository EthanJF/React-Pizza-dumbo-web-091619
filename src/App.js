import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    gotPizza: {},
    topping: "",
    size: "",
    vegetarian: false
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  handleClick = (pizza) => {
    this.setState({
      gotPizza: pizza,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  }

  handleSubmit = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
    .then(r => r.json())
    .then(updatedPizza => {
      this.setState({
        pizzas: this.state.pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza),
      })
    })
  }

  changePizzaValues = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  changeVegetarian = () => {
    this.setState({
      vegetarian: !this.state.vegetarian
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.gotPizza} pizzaTopping={this.state.topping} pizzaSize={this.state.size} pizzaVegetarian={this.state.vegetarian} changePizzaValues={this.changePizzaValues} changeVegetarian={this.changeVegetarian} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
