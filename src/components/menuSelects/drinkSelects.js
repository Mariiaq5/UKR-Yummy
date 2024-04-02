import { useEffect, useState } from "react"
import { drinksAPIData } from "../componentsAPImanager";


export default function DrinkSelects() {
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    drinksAPIData()
    .then((drinkArray) => {
      setDrink(drinkArray)
    })
  }, [])

 /* const addDrinkToCart = (drinks) => {
    fetch('http://localhost:8088/drinkOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ drinkId: drinks.id, orderId: 1 }), // Adjust the body based on your server requirements
      })
        .then((response) => response.json())
  }*/
  
    return(
      <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <div className="div1">
          {drink.map((drinks) =>
          <div href="simple-list-drinks" className="div3">
          <div class="card" className="card1">
  <img style={{width: '10em', height: '10em', objectFit: 'fill'}} src={drinks.image} class="card-img-top" alt="..." className="sizeImgMenu"/>
      <div class="card-body">
      <h5 class="card-title">{drinks.name}</h5>
      <p class="card-text">{drinks.desc}</p>
       <p class="card-text">${drinks.price}</p>
       {/*<button onClick={() => addDrinkToCart(drinks)}>Add to cart</button>*/}
       </div>
      </div>
      </div>
          )}
      </div>
      </div>
    ) 
}