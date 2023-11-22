import { useEffect, useState } from "react";
import { foodAPIData } from "../componentsAPImanager";
import { DeleteFoodButton } from "../deleteItems/deleteFood";
import { EditFoodButton } from "../editItems/editFood";

export default function AdminFood() {
        const [foods, setFoods] = useState([]);
      
        useEffect(() => {
          foodAPIData()
          .then((foodArray) => {
            setFoods(foodArray)
          })
        }, [])
     return(
                   <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                 <div className="div1">
                {foods.map((food) =>
                <div href="simple-list-food" className="div3">
                <div class="card" className="card1">
            <div class="card-body">
            <h5 class="card-title">{food.name}</h5>
            <p class="card-text">{food.desc}</p>
            <p class="card-text">${food.price}</p>
            <DeleteFoodButton id={food.id}/>
            <EditFoodButton key={food.id} food={food}/>
             </div>
            </div>
            </div>
                )}
            </div>
            </div>
          ) 
      }