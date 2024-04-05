import { deleteFood } from "../componentsAPImanager";

export const DeleteFoodButton = ({id}) => {
    const pageReload = () => {
        window.location.reload();
    }
    const handleDelete = () => {
        deleteFood(id)
        .then(pageReload())
    };
    return (
        <button class="btn btn-danger" onClick={handleDelete}>Delete Food</button>
    )
}
