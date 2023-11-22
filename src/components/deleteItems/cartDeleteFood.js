import { deleteCartFood } from "../componentsAPImanager";



export const DeleteCartFoodButton = ({id, updateFoodState}) => {
    const pageReload = () => {
        window.location.reload();
    }

    const handleDelete = () => {
        deleteCartFood(id)
        .then(updateFoodState)
    };
    return (
        <button class="btn btn-primary" onClick={handleDelete}>Delete</button>
    )
}