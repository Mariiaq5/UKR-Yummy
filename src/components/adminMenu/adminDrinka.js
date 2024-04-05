import { useEffect, useState } from "react";
import { drinksAPIData } from "../componentsAPImanager";
import { DeleteDrinkButton } from "../deleteItems/deleteDrink";
import { EditDrinkButton } from "../editItems/editDrink";

export default function AdminDrinks() {
    const [drink, setDrink] = useState([]);
  
    useEffect(() => {
      drinksAPIData()
      .then((drinkArray) => {
        setDrink(drinkArray)
      })
    }, [])
  
  
      return(
        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <div className="div1">
            {drink.map((drinks) =>
            <div href="simple-list-drinks" className="div3">
            <div class="card" className="card1" style={{backgroundColor: 'antiquewhite'}}>
        <div class="card-body">
        <h5 class="card-title">{drinks.name}</h5>
        <p class="card-text">{drinks.desc}</p>
        <p class="card-text">${drinks.price}</p>
        <DeleteDrinkButton id={drinks.id}/>
        <EditDrinkButton key={drinks.id} drinks={drinks} setDrink={setDrink}/>
         </div>
        </div>
        </div>
            )}
        </div>
        </div>
      ) 
  }