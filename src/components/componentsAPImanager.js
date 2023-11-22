

export const foodAPIData = () => {
    return fetch(`http://localhost:8088/foods`)
        .then(res => res.json())
    }

    export const drinksAPIData = () => {
        return fetch(`http://localhost:8088/drinks`)
            .then(res => res.json())
        }

        export const dessertsAPIData = () => {
            return fetch(`http://localhost:8088/desserts`)
                .then(res => res.json())
            }

            export const drinkOrdersAPIData = () => {
                return fetch(`http://localhost:8088/drinkOrders?_expand=drink`)
                    .then(res => res.json())
                }

                export const foodOrdersAPIData = () => {
                    return fetch(`http://localhost:8088/foodOrders?_expand=food`)
                        .then(res => res.json())
                    }

                    export const dessertOrdersAPIData = () => {
                        return fetch(`http://localhost:8088/dessertOrders?_expand=dessert`)
                            .then(res => res.json())
                        }
        
                        export const deleteFood = (id) => {
                            return fetch(`http://localhost:8088/foods/${id}`, {
                                method: "DELETE"
                            });
                        };
                           
                        export const deleteDrink = (id) => {
                            return fetch(`http://localhost:8088/drinks/${id}`, {
                                method: "DELETE"
                            });
                        };

                        export const deleteDessert = (id) => {
                            return fetch(`http://localhost:8088/desserts/${id}`, {
                                method: "DELETE"
                            });
                        };

                        export const deleteCartFood = (id) => {
                            return fetch(`http://localhost:8088/foodOrders?/${id}`, {
                                method: "DELETE"
                            });
                        };

                        export const deleteCartDrink = (id) => {
                            return fetch(`http://localhost:8088/drinkOrders?/${id}`, {
                                method: "DELETE"
                            });
                        };

                        export const deleteCartDessert = (id) => {
                            return fetch(`http://localhost:8088/dessertOrders?/${id}`, {
                                method: "DELETE"
                            });
                        };

                        export const emptyCartItemsDelete = (id) => {
                            return fetch(`http://localhost:8088/orders?/${id}`, {
                                method: "DELETE"
                            });
                        };