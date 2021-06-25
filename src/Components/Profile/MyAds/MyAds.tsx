import React from "react";
import {AdsType, GetUserPostType} from "../../Types/Types";
import MyAdItem from "./MyAdItem";
import AdItem from "../../Ads/AdItem";
import styles from "./MyAds.module.css"

type PropsType = {
    UserAds: Array<GetUserPostType>
}

const MyAds: React.FC<PropsType> = ({UserAds}) => {
    let MyAdsArray = UserAds? UserAds.map(ad => <MyAdItem AdInfo={ad}/>) : []
    return <>
        <ul className={styles.MyAds}>
            {MyAdsArray}
        </ul>
    </>
}

export default MyAds