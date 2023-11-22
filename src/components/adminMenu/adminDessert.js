import { useEffect, useState } from "react";
import { dessertsAPIData } from "../componentsAPImanager";
import { DeletedessertButton } from "../deleteItems/deleteDessert";
import { EditDessertButton } from "../editItems/editDessert";

export default function AdminDesserts() {
    const [dessert, setDessert] = useState([]);
  
    useEffect(() => {
      dessertsAPIData()
      .then((dessertArray) => {
        setDessert(dessertArray)
      })
    }, [])
  
  
      return(
        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <div className="div1">
             {dessert.map((desserts) =>
            <div href="simple-list-desserts" className="div3">
            <div class="card" className="card1">
        <div class="card-body">
        <h5 class="card-title">{desserts.name}</h5>
        <p class="card-text">{desserts.desc}</p>
        <p class="card-text">${desserts.price}</p>
        <DeletedessertButton id={desserts.id}/>
        <EditDessertButton key={desserts.id} desserts={desserts}/>
         </div>
        </div>
        </div>
            )}
        </div>
        </div>
      ) 
  }