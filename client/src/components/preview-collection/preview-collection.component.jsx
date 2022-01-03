import { useNavigate } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss"

const PreviewCollection = ({ title, routeName, items }) => {
    const navigate = useNavigate()

    return(
        <div className="collection-preview">
            <h1 className="title" onClick={() => navigate(routeName)}>{title}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default PreviewCollection