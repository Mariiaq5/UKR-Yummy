import { useParams } from "react-router-dom";
import { useState } from "react"; 

export const menuDetails = () => {
    const {foodId} = useParams() 
    const [food, updateFood] = useState({})

    useEffect(
        () => {
             fetch(`http://localhost:8088/food=${foodId}`)
            .then(response => response.json())
            .then((data) => {
                updateFood(data)
        })
    },
        [foodId]
    )

    return <section className="food">
    <header className="food__header">Name: {food?.id?.name}</header>
    <div>Price: {food?.id?.price}</div>
    
</section>

}