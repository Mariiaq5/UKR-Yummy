import { deleteDrink } from "../componentsAPImanager";

export const DeleteDrinkButton = ({id}) => {
    const pageReload = () => {
        window.location.reload();
    }
    const handleDelete = () => {
        deleteDrink(id)
        .then(pageReload())
    };
    return (
        <button class="btn btn-danger" onClick={handleDelete}>Delete Drink</button>
    )
}