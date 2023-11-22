import { useState } from 'react';

export const  EditFoodButton = ({food}) => {
  const [updatedFood, setUpdatedFood] = useState(food)

const editFood = (e) => {
  e.preventDefault()
    fetch(`http://localhost:8088/foods/${food.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    }).then((response) => response.json())
  };

const handleControlledInputChange = (e) => {
  const copyUpdatedFood = { ...updatedFood }
  copyUpdatedFood[`${e.target.id}`] = e.target.value
  setUpdatedFood(copyUpdatedFood)
}
    return (<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#food-update-button-${food.id}`}>
          Edit food
        </button>
        <div class="modal fade" id={`food-update-button-${food.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="food-update-button">Food Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => editFood(e)}>
                  <input type="text" id="name" placeholder="name" onChange={handleControlledInputChange}  defaultValue={food.name} /><br></br>
                  <input type="text" id="desc" placeholder="desc" onChange={handleControlledInputChange}  defaultValue={food.desc} /> <br></br>
                  <input type="text" id="price" placeholder="price" onChange={handleControlledInputChange} defaultValue={food.price} /><br></br>
                  <input type="text" id="image" placeholder="imageURL" onChange={handleControlledInputChange} defaultValue={food.image} /><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit"  class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
        </>
    );
}