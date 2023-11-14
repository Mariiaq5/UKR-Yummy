export default function DrinkSelects() {
    return(
        <div class="row">
        <div class="col-4">
          <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
            <a class="p-1 rounded" href="#simple-list-hot">Hot</a>
            <a class="p-1 rounded" href="#simple-list-cold">Cold</a>
          </div>
        </div>
        <div class="col-8">
          <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            <div href="simple-list-drinks">
                <div class="card">
        <img src="https://foodmedcenter.org/wp-content/uploads/shutterstock_88344277.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Carpathian tea</h5>
            <p class="card-text">Traditional ukrainian herb tea from Carpathian area</p>
             <p class="card-text">Price: $3.50</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            </div>
          </div>
          <div href="simple-list-soup">
                <div class="card">
        <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-1024x536.png" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Lviv coffee</h5>
            <p class="card-text">Natural coffee from Lviv with light caramel and wine notes</p>
             <p class="card-text">Price: $3.70</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            <div class="card">
        <img src="https://cdn.powerofpositivity.com/wp-content/uploads/2019/05/aromatic-close-cup-1417945.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Mint tea</h5>
            <p class="card-text">Fresh tea brewed with crisp mint</p>
             <p class="card-text">Price: $3.50</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            </div>
        </div>
      </div> 
    ) 
}