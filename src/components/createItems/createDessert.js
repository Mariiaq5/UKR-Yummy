import { useState } from "react";

export default function CreateDessertButton() {
    const [newDessert, setNewDessert] = useState({
        name: "",
        desc: "",
        price: 0,
        image: ""
    })
    const handleControlledInputChange = (e) => {

        const copyNewDessert = { ...newDessert }
      
        copyNewDessert[`${e.target.id}`] = e.target.value 
      
        setNewDessert(copyNewDessert)
      }
      const addNewDessert = (e, newDessert) => {
        e.preventDefault()
        return fetch("http://localhost:8088/desserts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDessert),
        });
      }
      const pageReload = () => {
        window.location.reload();
      }
      return (<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-dessert-container">
          Add New Dessert
        </button>
        <div class="modal fade" id="add-dessert-container" tabindex="-1" aria-labelledby="add-dessert-container" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Dessert Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => addNewDessert(e, newDessert)}>
                  <input type="text" id="name" placeholder="Dessert Name" onChange={handleControlledInputChange}></input><br></br>
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