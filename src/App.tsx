import React, { FC, useState } from "react";
import "./App.css";
import PizzaType from "./models/Pizza";
import AddPizzaForm from "./components/AddPizzaForm";
import { DisplayPizzas } from './components/DisplayPizzas';



const App: FC = () => {
const[pizzasList, setPizzasList] = useState<PizzaType[]>([]);

const addPizza = (newPizza: PizzaType) => {
  setPizzasList([...pizzasList, newPizza])
}

const updatePizza = (newPizza: PizzaType) => {
  setPizzasList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)));
}

const deletePizza = (id: number) => {
  const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
  setPizzasList(newPizzasList);
}

console.log("pizzasList>>>", pizzasList)
  return (
    <div className="App">
      
      <div className="wrap" >
        <span className="heading">Our pizzeria!</span>
        <AddPizzaForm addPizza={addPizza} handleToggleEdit={function (): void {
          throw new Error("Function not implemented.");
        } } />
        <DisplayPizzas
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>
      
    </div>
  );
};

export default App;
