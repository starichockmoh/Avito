import React from "react";
import {AdInfoType} from "../Types/Types";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {withRouter} from "react-router-dom";
import AdInfoPhotos from "./AdInfoPhotos";
import Comments from "./Comments";
import AdDescription from "./AdDescription";
import styles from "./AdInfo.module.css"
import p from "./../../Images/header.jpg"

type MapStateToPropsType = {
    AdInfo: AdInfoType
    UserAvatar: string
}
type PropsType = MapStateToPropsType

class AdInfo extends React.Component<PropsType>{
    render() {
        let {AdId,Author, Created_at, Price, Title,Views,Description } = this.props.AdInfo
        return <div>
            <div className={styles.Title}>
                <h1>{Title}</h1>
            </div>

            <AdInfoPhotos Photos = {this.props.AdInfo.Images}/>

            <AdDescription AdId={AdId} Author={Author}
                           Created_at={Created_at} Price={Price}
                           Description={Description} Title={Title} Views={Views}/>

            <Comments UserAvatar={this.props.UserAvatar} Comments={this.props.AdInfo.Comments}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    AdInfo: state.AdInfo,
    UserAvatar: state.Profile.Avatar
})

const AdInfoContainer: any = compose(
    connect<MapStateToPropsType,{},{},AppStateType>(mapStateToProps, {}),
    withRouter
)(AdInfo)

export default AdInfoContainer