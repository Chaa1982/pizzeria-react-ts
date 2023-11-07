import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

//в этом файле ы создаем только по одному экземпляру пиццы

interface EditPizzaFormPropsInterface {
   data: Pizza;
   updatePizza: (newPizza: Pizza) => void;
   handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormPropsInterface> = 
    ({data, updatePizza, handleToggleEdit}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const{name, value} = e.target;

    setEditPizza({
       ...editPizza, 
       [name]: value,
    })
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()//отменяет действие браузера по умолчанию (страница не перезагружается);
    
    const {title, price, img} = editPizza;
    
    if(title && price && img) {
        updatePizza(editPizza);
        handleToggleEdit();
    }

  };

  console.log("edit pizza >>>", editPizza);

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="direction pizzas image "
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default EditPizzaForm;
