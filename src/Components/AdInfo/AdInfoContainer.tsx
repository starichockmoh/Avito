import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {useParams} from "react-router-dom";
import AdInfoPhotos from "./AdInfoPhotos";
import AdDescription from "./AdDescription";
import styles from "./AdInfo.module.css"
import {GetAdInfo} from "../../Redux/Reducers/AdInfoReducer";


const AdInfo = () => {
    const dispatch = useDispatch()
    const {adId} = useParams() as any
    useEffect(() => {
        dispatch(GetAdInfo(adId))
    },[dispatch])
    const AdInfo = useSelector((state: AppStateType) => state.AdInfo.AdInfo)

    return <div>
        <div className={styles.Title}>
            <h1>{AdInfo.title}</h1>
        </div>

        <AdInfoPhotos AdditionalPhotos={AdInfo.get_aditionall_image} AvatarPhoto={AdInfo.image}/>

        <AdDescription AdId={AdInfo.pk} Author={AdInfo.author}
                       Created_at={AdInfo.created_at} Price={AdInfo.price}
                        Title={AdInfo.title} Views={AdInfo.views}/>

        {/*<Comments Comments={AdInfo.get_comments} UserAvatar={''}/>*/}
    </div>
}



export default AdInfo