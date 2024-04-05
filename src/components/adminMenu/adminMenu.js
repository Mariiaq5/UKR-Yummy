import CreateDessertButton from "../createItems/createDessert";
import CreateDrinkButton from "../createItems/createDrink";
import CreateFoodButton from "../createItems/createFood";
import AdminDesserts from "./adminDessert";
import AdminDrinks from "./adminDrinka";
import AdminFood from "./adminFood";


export default function AdminMenuContainer() {
return(
    <>
        <section class="h-100 h-custom">
        <div class="card text-center" className='text0'>
  <div class="card-header" className='header01' style={{backgroundColor: 'grey'}}>
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#adminFood" data-bs-toggle="tab">Food</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#adminDrinks" data-bs-toggle="tab">Drinks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#adminDesserts" data-bs-toggle="tab">Desserts</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
  <div class="tab-content">
                <div class="tab-pane fade show active" id="adminFood">
                    <AdminFood/>
                    <CreateFoodButton/>
                </div>
                <div class="tab-pane fade" id="adminDrinks">
                    <AdminDrinks/>
                    <CreateDrinkButton/>
                </div>
                <div class="tab-pane fade vh-20 overflow-auto" id="adminDesserts">
                    <AdminDesserts/>
                    <CreateDessertButton/>
                    <div className="dessert">
                    </div>
                    <div className="dessert">
                    </div>
                </div>
            </div>
        </div>
  </div>
  </section>
  </>
)
}

  