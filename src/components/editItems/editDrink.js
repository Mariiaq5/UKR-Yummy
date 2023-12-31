import { useState } from 'react';

export const  EditDrinkButton = ({drinks}) => {
  const [updatedDrink, setUpdatedDrink] = useState(drinks)

const editDrink = (e) => {
  e.preventDefault()
    fetch(`http://localhost:8088/drinks/${drinks.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDrink),
    }).then((response) => response.json())
  };

const handleControlledInputChange = (e) => {
  const copyUpdatedDrink = { ...updatedDrink }
  copyUpdatedDrink[`${e.target.id}`] = e.target.value
  setUpdatedDrink(copyUpdatedDrink)
}
    return (<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#drink-update-button-${drinks.id}`}>
          Edit Drink
        </button>
        <div class="modal fade" id={`drink-update-button-${drinks.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="drink-update-button">Drink Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => editDrink(e)}>
                  <input type="text" id="name" placeholder="name" onChange={handleControlledInputChange}  defaultValue={drinks.name} /><br></br>
                  <input type="text" id="desc" placeholder="desc" onChange={handleControlledInputChange}  defaultValue={drinks.desc} /> <br></br>
                  <input type="text" id="price" placeholder="price" onChange={handleControlledInputChange} defaultValue={drinks.price} /><br></br>
                  <input type="text" id="image" placeholder="imageURL" onChange={handleControlledInputChange} defaultValue={drinks.image} /><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit"  class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
        </>
    );
}