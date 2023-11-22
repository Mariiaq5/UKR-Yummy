import { deleteCartDessert} from "../componentsAPImanager";


export const DeleteCartDessertButton = ({id}) => {
    const pageReload = () => {
        window.location.reload();
    }
    const handleDelete = () => {
        deleteCartDessert(id)
        .then(pageReload())
    };
    return (
        <button class="btn btn-primary" onClick={handleDelete}>Delete</button>
    )
}