import { deleteCartFood } from "../componentsAPImanager";


export const DeleteCartFoodButton = ({id}) => {
    const pageReload = () => {
        window.location.reload();
    }
    const handleDelete = () => {
        deleteCartFood(id)
        .then(pageReload())
    };
    return (
        <button class="btn btn-primary" onClick={handleDelete}>Delete</button>
    )
}