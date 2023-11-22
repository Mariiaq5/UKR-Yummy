import { emptyCartItemsDelete } from "../componentsAPImanager";


export const EmptyCartButton = ({id}) => {
    const pageReload = () => {
        window.location.reload();
    }
    const handleDelete = () => {
        emptyCartItemsDelete(id)
        .then(pageReload())
    };
    return (
        <button class="btn btn-primary" onClick={handleDelete}>Empty Cart</button>
    )
}