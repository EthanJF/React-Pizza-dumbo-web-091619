import React from "react"

const PizzaForm = (props) => {
    return (
      <div className="form-row">
        <div className="col-5">
          <input name="topping" onChange={props.changePizzaValues} type="text" className="form-control" placeholder="Pizza Topping" value={
            props.pizzaTopping
          } />
        </div>
        <div className="col">
          <select name="size" onChange={props.changePizzaValues} value={props.pizzaSize} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.changeVegetarian} className="form-check-input" type="radio" value="Vegetarian" checked={props.pizzaVegetarian} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.changeVegetarian} className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizzaVegetarian} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit(props.pizza)}>Submit</button>
        </div>
      </div>
    )
  }


export default PizzaForm
