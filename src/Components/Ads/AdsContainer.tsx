import React, {useEffect} from "react";
import {compose} from "redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {AdsType, GetUserPostType} from "../Types/Types";
import AdItem from "./AdItem";
import styles from "./AdsBoard.module.css"
import SearchAds from "./Search/Search";
import {getAllAds, postNewAd} from "../../Redux/Reducers/AdsReducer";
import {Paginator} from "../Paginator/Paginator";

const AdsBoard = () =>  {
    const dispatch = useDispatch()
    const Ads: Array<GetUserPostType> | undefined = useSelector((state: AppStateType) => state.Ads.Ads)
    const count = useSelector((state: AppStateType) => state.Ads.Count)
    const rubric = useSelector((state: AppStateType) => state.Ads.CurrentRubric)
    const onPageChanged = (page: number) => {
        dispatch(getAllAds(rubric,page))
    }
    useEffect(() => {
        dispatch(getAllAds())
    }, [dispatch])
    let AdsArray = Ads? Ads.map(ad => <AdItem AdInfo={ad}/>): []
    return <div className={styles.AdsBoard}>
        <div>
            <SearchAds/>
        </div>
        <div className={styles.PaginatorBlock}>
            <Paginator onPageChanged={onPageChanged} totalItems={count} pageSize={3}/>
        </div>
        <ul className={styles.ads}>
            {AdsArray}
        </ul>
    </div>
}


export default AdsBoard