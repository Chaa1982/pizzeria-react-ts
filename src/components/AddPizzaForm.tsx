import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import PizzaType from "../models/Pizza";

//в этом файле ы создаем только по одному экземпляру пиццы

interface AddPizzaFormPropsInterface {
    addPizza: (newPizza: PizzaType) => void;
    handleToggleEdit: () => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaFormPropsInterface> = ({addPizza}) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const{name, value} = e.target;
    setNewPizza({
       ...newPizza, 
       [name]: value,
    })
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()//отменяет действие браузера по умолчанию (страница не перезагружается);
    
    const {title, price, img} = newPizza;
    
    if(title && price && img) {
        addPizza({
            title,
             price: Number(price),
              img, id: Date.now()
        });
        setNewPizza(initState); //сбросил значение полей
    }

  };

  console.log("new pizza >>>", newPizza);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Name"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="direction pizzas image "
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Add in menu</button>
    </form>
  );
};

export default AddPizzaForm;
