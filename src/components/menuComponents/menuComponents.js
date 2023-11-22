import DessertSelects from '../menuSelects/dessertSelects';
import DrinkSelects from '../menuSelects/drinkSelects';
import FoodSelects from '../menuSelects/foodSelects';
import './menuComponents.css'

export default function MenuComponents() {
    return (
        <>
        <section class="h-100 h-custom" style={{backgroundColor: 'gainsboro'}}>
        <div class="card text-center" className='text0'>
  <div class="card-header" className='header01'>
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#food" data-bs-toggle="tab">Food</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#drinks" data-bs-toggle="tab">Drinks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#desserts" data-bs-toggle="tab">Desserts</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
  <div class="tab-content">
                <div class="tab-pane fade show active" id="food">
                    <FoodSelects/>
                </div>
                <div class="tab-pane fade" id="drinks">
                    <DrinkSelects/>
                </div>
                <div class="tab-pane fade vh-20 overflow-auto" id="desserts">
                    <DessertSelects/>
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
    );
}