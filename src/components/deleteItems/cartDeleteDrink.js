import { deleteCartDrink } from "../componentsAPImanager";


export const DeleteCartDrinkButton = ({id}) => {
    const pageReload = () => {
        window.location.reload();
    }
    const handleDelete = () => {
        deleteCartDrink(id)
        .then(pageReload())
    };
    return (
        <button class="btn btn-primary" onClick={handleDelete}>Delete</button>
    )
}