export default function DessertSelects() {
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
            <div href="simple-list-desserts">
                <div class="card">
        <img src="https://www.worthingcourtblog.com/wp-content/uploads/2019/08/baked-apples-6.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Baked apples with nuts</h5>
            <p class="card-text">Tart apples baked with crunchy nuts and spices. Served with honey on top</p>
             <p class="card-text">Price: $4.50</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            </div>
          </div>
          <div href="simple-list-soup">
                <div class="card">
        <img src="https://rud.ua/uploads/under_recipe/photo_24950.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Syrnyki</h5>
            <p class="card-text">Sweet, cheesy pancakes. Served with raspberry jam and sour cream</p>
             <p class="card-text">Price: $6.50</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            <div class="card">
        <img src="https://fayni-recepty.com.ua/wp-content/uploads/2020/07/nalysnyky-syrom-1024x684.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Crepes with cheese</h5>
            <p class="card-text">Fluffy pancakes with fresh cheese inside. Served with fresh strawberry and mint</p>
             <p class="card-text">Price: $7.20</p>
             <a href="#" class="btn btn-primary">Order</a>
             </div>
            </div>
            </div>
        </div>
      </div> 
    ) 
}