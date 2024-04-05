import { useState } from "react";

export default function CreateFoodButton() {
    const [newFood, setNewFood] = useState({
        name: "",
        desc: "",
        price: 0,
        image: "",
        preptime: 0
    })
    const handleControlledInputChange = (e) => {

        const copyNewFood = { ...newFood }
      
        copyNewFood[`${e.target.id}`] = e.target.value 
      
        setNewFood(copyNewFood)
      }
      const addNewFood = (e, newFood) => {
        e.preventDefault()
        return fetch("http://localhost:8088/foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFood),
        });
      }
      const pageReload = () => {
        window.location.reload();
      }
      return (<>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#add-food-container">
          Add New Food
        </button>
        <div class="modal fade" id="add-food-container" tabindex="-1" aria-labelledby="add-food-container" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Food Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => addNewFood(e, newFood)}>
                  <input type="text" id="name" placeholder="Food Name" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="desc" placeholder="Desc" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="price" placeholder="Price" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="image" placeholder="Image url" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="preptime" placeholder="PrepTime(min)" onChange={handleControlledInputChange}></input><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" onClick={pageReload} class="btn btn-primary">Save changes</button>
              </form>
              <div class="modal-footer">
              </div>
            </div>
          </div>
        </div>
        </>
    );
}
