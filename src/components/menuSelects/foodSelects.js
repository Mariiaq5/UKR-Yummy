export default function FoodSelects() {
    return(
        <div class="row">
        <div class="col-4">
          <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
            <a class="p-1 rounded" href="#simple-list-soup">Soup</a>
            <a class="p-1 rounded" href="#simple-list-entree">Entree</a>
            <a class="p-1 rounded" href="#simple-list-appetizers">Appetizers</a>
            <a class="p-1 rounded" href="#simple-list-salads">Salads</a>
          </div>
        </div>
        <div class="col-8">
          <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            <div href="simple-list-soup">
                <div class="card">
        <img src="https://www.5.ua/media/pictures/original/196914.jpg?t=1602087060" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Borsch</h5>
            <p class="card-text">Traditional Ukrainian dish with chicken, beef, vegetables and seasonings. Served with sour cream and rye bread or dill-garlic roll</p>
             <p class="card-text">Price: $7.20</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            </div>
          </div>
          <div href="simple-list-soup">
                <div class="card">
        <img src="https://lovingitvegan.com/wp-content/uploads/2016/10/Vegan-Cream-Of-Mushroom-Soup-7.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Mushroom soup</h5>
            <p class="card-text">Creamy white soup with freshly cut champignons and white mushrooms. Served with dill roll</p>
             <p class="card-text">Price: $6.40</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            <div class="card">
        <img src="http://stravy.net/uploads/images/default/2994_1.jpeg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Yushka</h5>
            <p class="card-text">Traditional Ukrainian dish with fresh perch, salmon, vegetables and boiled egg. Served with fresh white bread</p>
             <p class="card-text">Price: $6.50</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            </div>
        </div>
      </div> 
    ) 
}