import "./collections-overview.styles.scss";
import { useSelector } from "react-redux";
import { getCollectionsForPreview } from "../../reducers/shop/utils";
import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionsOverview = () => {
    const { collections } = useSelector(state => state.shopReducer)
    const collectionsForPreview = getCollectionsForPreview(collections)

    return (
        <div className="collections-overview">
            {
                collectionsForPreview.map(({id, ...oterProps}) => (
                    <PreviewCollection key={id} {...oterProps}/>
                ))
            }
        </div>
    )
}

export default CollectionsOverview