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
        <button class="btn btn-primary" onClick={handleDelete}>Delete Food</button>
    )
}
