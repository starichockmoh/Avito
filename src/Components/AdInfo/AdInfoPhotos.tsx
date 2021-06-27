import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Button, Carousel, Image} from "antd";
import styles from "./AdInfo.module.css"


type PropsType = {
    AdditionalPhotos: Array<string> | null
    AvatarPhoto: string | null
}

const AdInfoPhotos: React.FC<PropsType> = ({AdditionalPhotos, AvatarPhoto}) => {
    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        background: '#364d79',
    };

    let Photos: Array<string> = []
    let PhotosArray: Array<JSX.Element> = []

    if (AdditionalPhotos && AvatarPhoto) Photos = [AvatarPhoto, ...AdditionalPhotos]
    else if (AdditionalPhotos) Photos = AdditionalPhotos
    else if (AvatarPhoto) Photos = [AvatarPhoto]

    if (Photos) {
        PhotosArray = Photos.map(p => <div>
            <p style={contentStyle}><Image height={500} width={800} src = {p}/></p>
        </div>)}

    return <div className={styles.AdInfoPhotos}>
        <Carousel>
            {PhotosArray}
        </Carousel>
    </div>

}

export default AdInfoPhotos