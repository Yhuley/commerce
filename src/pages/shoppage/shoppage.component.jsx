import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Loading from "../../components/loading/loading.component";
import { fetchCollectionsStart } from "../../reducers/shop/shop.actions";

const ShopPage = () => {
    const dispatch = useDispatch()
    const { isFetching, collections } = useSelector(state => state.shopReducer)

    useEffect(() => {
        if (!collections) {
            dispatch(fetchCollectionsStart())
        }  
    }, [])

    return (
        <div className="shop-page">
            {isFetching ? (
                <Loading />
            ) : (
                <CollectionsOverview />
            )}
        </div>
    )
}

export default ShopPage