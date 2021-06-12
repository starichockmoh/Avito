import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {AdsType} from "../Types/Types";
import AdItem from "./AdItem";
import styles from "./AdsBoard.module.css"
import SearchAds from "./Search/Search";

type MapStateToPropsType = {
    Ads: Array<AdsType>
}
type MapDispatchToPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class AdsBoard extends React.Component<PropsType> {
    render() {
        let AdsArray = this.props.Ads.map(ad => <AdItem name={ad.name}
                                                        price={ad.price}
                                                        image={ad.image}
                                                        location={ad.location}
                                                        id={ad.id}
                                                        key={ad.id}
            />
        )
        return <div className={styles.AdsBoard}>
            <div>
                <SearchAds/>
            </div>
            <ul className={styles.ads}>
                {AdsArray}
            </ul>
        </div>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    Ads: state.Ads.Ads,
})
const AdsContainer: any = compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {})
)(AdsBoard)


export default AdsContainer