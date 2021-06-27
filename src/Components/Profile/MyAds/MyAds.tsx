import React from "react";
import {AdsType, GetUserPostType} from "../../Types/Types";
import MyAdItem from "./MyAdItem";
import AdItem from "../../Ads/AdItem";
import styles from "./MyAds.module.css"

type PropsType = {
    UserAds: Array<GetUserPostType>
    IsSelected: boolean
}

const MyAds: React.FC<PropsType> = ({UserAds, IsSelected}) => {
    let MyAdsArray = UserAds? UserAds.map(ad => <MyAdItem AdInfo={ad} IsSelected={IsSelected}/>) : []
    return <>
        <ul className={styles.MyAds}>
            {MyAdsArray}
        </ul>
    </>
}

export default MyAds