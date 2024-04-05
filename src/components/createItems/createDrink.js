import { useState } from "react";

export default function CreateDrinkButton() {
    const [newDrink, setNewDrink] = useState({
        name: "",
        desc: "",
        price: 0,
        image: ""
    })
    const handleControlledInputChange = (e) => {

        const copyNewDrink = { ...newDrink }
      
        copyNewDrink[`${e.target.id}`] = e.target.value 
      
        setNewDrink(copyNewDrink)
      }
      const addNewDrink = (e, newDrink) => {
        e.preventDefault()
        return fetch("  http://localhost:8088/drinks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDrink),
        });
      }
      const pageReload = () => {
        window.location.reload();
      }
      return (<>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#add-drink-container">
          Add New Drink
        </button>
        <div class="modal fade" id="add-drink-container" tabindex="-1" aria-labelledby="add-drink-container" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Drink Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => addNewDrink(e, newDrink)}>
                  <input type="text" id="name" placeholder="Drink Name" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="desc" placeholder="Desc" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="price" placeholder="Price" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="image" placeholder="Image url" onChange={handleControlledInputChange}></input><br></br>
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