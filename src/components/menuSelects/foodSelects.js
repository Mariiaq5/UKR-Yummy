import { useEffect, useState } from "react"
import { foodAPIData } from "../componentsAPImanager";
//import OrderFoodButton from "../orderButton/orderFood";


export default function FoodSelects({updateFoodState, setRefresh, refresh}) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    foodAPIData()
    .then((foodArray) => {
      setFoods(foodArray)
    })
  }, [])


/*const addFoodToCart = (food) => {
  fetch('http://localhost:8088/foodOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foodId: food.id, orderId: 1 }), // Adjust the body based on your server requirements
    })
      .then((response) => response.json())
      .then(() => {
        foodAPIData()
        .then((foodArray) => {
         
          let number =refresh + 1
          setRefresh(number)
          updateFoodState(foodArray)
        })
      })
}*/
    return(
             <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
           <div className="div1">
          {foods.map((food) =>
          <div href="simple-list-food" className="div3">
          <div class="card" className="card1"  style={{backgroundColor: 'antiquewhite'}}>
         <img  style={{width: '10em', height: '10em'}} src={food.image} class="card-img-top" alt="..." className="sizeImgMenu"/>
      <div class="card-body">
      <h5 class="card-title">{food.name}</h5>
      <p class="card-text">{food.desc}</p>
       <p class="card-text">${food.price}</p>
       {/*<button onClick={() => addFoodToCart(food)}>Add to cart</button>*/}
       </div>
      </div>
      </div>
          )}
      </div>
      </div>
    ) 
}