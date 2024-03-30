import { useState } from 'react';
import { dessertsAPIData } from '../componentsAPImanager';

export const  EditDessertButton = ({desserts, setDessert}) => {
  const [updatedDessert, setUpdatedDessert] = useState(desserts)

const editDessert = (e) => {
  e.preventDefault()

  const dessertToSend = {...updatedDessert}

    fetch(`http://localhost:8088/desserts/${desserts.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dessertToSend),
    }).then((response) => response.json())
    .then(() => {
      dessertsAPIData()
      .then((dessertArray) => {
        setDessert(dessertArray)
      })
    })
  };

const handleControlledInputChange = (e) => {
  const copyUpdatedDessert = { ...updatedDessert }
  copyUpdatedDessert[`${e.target.id}`] = e.target.value
  setUpdatedDessert(copyUpdatedDessert)
}
    return (<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#dessert-update-button-${desserts.id}`}>
          Edit dessert
        </button>
        <div class="modal fade" id={`dessert-update-button-${desserts.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="food-update-button">Dessert Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => editDessert(e)}>
                  <input type="text" id="name" placeholder="name" onChange={handleControlledInputChange}  defaultValue={desserts.name} /><br></br>
                  <input type="text" id="desc" placeholder="desc" onChange={handleControlledInputChange}  defaultValue={desserts.desc} /> <br></br>
                  <input type="text" id="price" placeholder="price" onChange={handleControlledInputChange} defaultValue={desserts.price} /><br></br>
                  <input type="text" id="image" placeholder="imageURL" onChange={handleControlledInputChange} defaultValue={desserts.image} /><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit"  class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
        </>
    );
}