import './cartPic.css'
// style={{marginRight: spacing + 'em'}}
import { foodOrdersAPIData, drinkOrdersAPIData, dessertOrdersAPIData, emptyCart } from '../componentsAPImanager';
import { useEffect, useState } from 'react';
import { DeleteCartFoodButton } from '../deleteItems/cartDeleteFood';
import { DeleteCartDrinkButton } from '../deleteItems/cartDeleteDrink';
import { DeleteCartDessertButton } from '../deleteItems/cartDeleteDessert';
import { EmptyCartButton } from '../deleteItems/emptyCart';
export default function CartPic() {

  const [foodState, updateFood] = useState([])
  const [drinkState, updateDrink] = useState([])
  const [dessertState, updateDessert] = useState([])

  useEffect(() => {
    foodOrdersAPIData()
    .then((foodArray) => updateFood(foodArray))
    .then(drinkOrdersAPIData)
    .then((drinkArray) => updateDrink(drinkArray))
    .then( dessertOrdersAPIData)
    .then((dessertArray) => updateDessert(dessertArray))
  }, []
  )


  /*document.querySelectorAll('button')
  .forEach(button=>button.addEventListener('click', e=> {
      if(button.classicList.contains('delete')) {
          button.classicList.add('delete');
          setTimeout(() => button.classicList.remove('delete'), 3200);
      }
      e.preventDefault();
  }))*/

    return ( 
    <>
        <section class="h-100 h-custom" style={{backgroundColor: 'gainsboro'}}/>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Your Cart</h1>
                    <h6 class="mb-0 text-muted">3 items</h6>
                  </div>
                  <hr class="my-4"/>

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <div className='CustomInfo'>
                    <label for="name">Name:</label>
                     <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                     
                     <label for="name">Phone number:</label>
                     <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                     <button className='placeOrderButt'>Place Order</button>
                     </div>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3" className='example'>
                      
                      <h6 class="text-muted">{foodState.map((singleFood) => {
                       return <>
                       <div className='menuContainer'>
                          <div className='menuImg'>
                          <img style={{width: '3em', height: '3em'}} src={singleFood?.food?.image}/>
                          </div>
                            <div className='foodDetails'>
                          <p>{singleFood.food?.name}</p> 
                          <p>{singleFood?.food?.desc}</p>
                         </div>
                          <div className='foodQuantity'>
                          <input id="form1" min="0" name="quantity" value="1" type="number"
                             class="form-control form-control-sm" /></div>
                          <div className='price'>
                          <p>${singleFood?.food?.price}</p>
                          <DeleteCartFoodButton  id={singleFood.orderId}/>
                          </div>  
                       </div>                 
                       </> 
                        })}</h6>


                      <div class="col-md-3 col-lg-3 col-xl-3" className='example1'>

                      
                      <h6 class="text-muted">{drinkState.map((singleDrink) => {
                       return <>
                       <div className='menuContainer'>
                          <div className='menuImg'>
                          <img style={{width: '3em', height: '3em'}} src={singleDrink?.drink?.image}/>
                          </div>
                            <div className='drinkDetails'>
                          <p>{singleDrink?.drink?.name}</p> 
                          <p>{singleDrink?.drink?.desc}</p>
                         </div>
                          <div className='drinkQuantity'>
                          <input id="form1" min="0" name="quantity" value="1" type="number"
                             class="form-control form-control-sm" /></div>
                          <div className='price'>
                          <p>${singleDrink?.drink?.price}</p>
                          <DeleteCartDrinkButton id={singleDrink.orderId}/>
                          </div>  
                       </div>                 
                       </> 
                        })}</h6>


                      <div class="col-md-3 col-lg-3 col-xl-3" className='example2'>
                      
                      <h6 class="text-muted">{dessertState.map((singleDessert) => {
                       return <>
                       <div className='menuContainer'>
                          <div className='menuImg'>
                          <img style={{width: '3em', height: '3em'}} src={singleDessert?.dessert?.image}/>
                          </div>
                            <div className='dessertDetails'>
                          <p>{singleDessert?.dessert?.name}</p> 
                          <p>{singleDessert?.dessert?.desc}</p>
                         </div>
                          <div className='dessertQuantity'>
                          <input id="form1" min="0" name="quantity" value="1" type="number"
                             class="form-control form-control-sm" />
                             </div>
                          <div className='price'>
                          <p>${singleDessert?.dessert?.price}</p>
                          <DeleteCartDessertButton id={singleDessert.orderId}/>
                          </div>  
                       </div>                 
                       </> 
                        })}</h6>



                      
                       {/* <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>

                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4"/>

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4"/>

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4"/>

                  <div class="pt-5">
                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items 3</h5>
                    <h5>€ 132.00</h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Shipping</h5>

                  <div class="mb-4 pb-2">
                    <select class="select">
                      <option value="1">Standard-Delivery-$7.00</option>
                      <option value="2">Pick up</option>
                    </select>
                  </div>

                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5>$?</h5>
                  </div></div> 

                  <button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Order</button> */}
                    
                  </div>
                </div>
              </div>
            </div>
            <EmptyCartButton />
          </div>
        </div>
</div>
</div>
</div>
</div>
</div></div>

  </>
    );
}