import { useEffect, useState } from "react"
import { dessertsAPIData } from "../componentsAPImanager";


export default function DessertSelects({updateDessertState, setRefresh, refresh}) {
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    dessertsAPIData()
    .then((dessertArray) => {
      setDessert(dessertArray)
    })
  }, [])

  /*const addDessertToCart = (desserts) => {
    fetch('http://localhost:8088/dessertOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dessertId: desserts.id, orderId: 1 }), // Adjust the body based on your server requirements
      })
        .then((response) => response.json())

  }*/
  

      .then(() => {
        dessertsAPIData()
        .then((dessertArray) => {
         
          let number =refresh + 1
          setRefresh(number)
          updateDessertState(dessertArray)
        })
      })
  }

    return(
      <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <div className="div1">
           {dessert.map((desserts) =>
          <div href="simple-list-desserts" className="div3">
          <div class="card" className="card1">
  <img style={{width: '10em', height: '10em'}} src={desserts.image} class="card-img-top" alt="..." className="sizeImgMenu"/>
      <div class="card-body">
      <h5 class="card-title">{desserts.name}</h5>
      <p class="card-text">{desserts.desc}</p>
       <p class="card-text">${desserts.price}</p>
       {/*<button onClick={() => addDessertToCart(desserts)}>Add to cart</button>*/}
       </div>
      </div>
      </div>
          )}
      </div>
      </div>
    ) 
}