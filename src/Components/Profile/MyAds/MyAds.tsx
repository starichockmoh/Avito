import React from "react";
import {AdsType} from "../../Types/Types";
import MyAdItem from "./MyAdItem";
import AdItem from "../../Ads/AdItem";
import styles from "./MyAds.module.css"

type PropsType = {
    UserAds: Array<AdsType>
}

const MyAds: React.FC<PropsType> = ({UserAds}) => {
    let MyAdsArray = UserAds.map(ad => <MyAdItem name={ad.name}
                                                 price={ad.price}
                                                 image={ad.image}
                                                 location={ad.location}
                                                 id={ad.id}
                                                 key={ad.id}
    />)

    return <>
        <ul className={styles.MyAds}>
            {MyAdsArray}
        </ul>
    </>
}

export default MyAds