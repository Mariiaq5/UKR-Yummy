import { deleteDessert } from "../componentsAPImanager";


export const DeletedessertButton = ({id}) => {
    const pageReload = () => {
        window.location.reload();
    }
    const handleDelete = () => {
        deleteDessert(id)
        .then(pageReload())
    };
    return (
        <button class="btn btn-danger" onClick={handleDelete}>Delete Dessert</button>
    )
}