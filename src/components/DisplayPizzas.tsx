import React, {FC} from 'react';
import { SinglePizza } from './SinglePizza';
import Pizza from '../models/Pizza'

interface DisplayPizzasPropsInterface {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const DisplayPizzas: FC<DisplayPizzasPropsInterface> = ({pizzasList, updatePizza, deletePizza}) => {
  return (
    <div className='container'>
        {pizzasList.map((pizza, i) => {
            return <SinglePizza
              key={`${pizza.id}`}
              updatePizza={updatePizza}
              deletePizza={deletePizza}
              pizza={pizza}/>
        })}
    </div>
  )
}

