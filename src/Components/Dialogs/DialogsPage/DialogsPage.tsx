import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Store";
import DialogItem from "./DialogItem";
import styles from "./DialogPage.module.css"
import { NavLink } from "react-router-dom";
import {DialogsDataType} from "../../Types/Types";
import withAuthRedirect from "../../../HOCs/withAuthRedirect";

type MapDispatchToPropsType = {}

type MapStateToPropsType = {
    Dialogs: Array<DialogsDataType>
}
type PropsType = MapStateToPropsType

class DialogsPage extends React.Component<PropsType>{
    componentDidMount() {
    }

    render() {
        let DialogsItemsArray = this.props.Dialogs.map(d => <NavLink to ={'/dialog'}><DialogItem key = {d.DialogId}
                                                                                                 Dialog={d}/></NavLink>)
        return <div className={styles.DialogsPage}>
            {DialogsItemsArray}
        </div>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    Dialogs: state.Dialogs.Dialogs
})

// @ts-ignore
const DialogPageContainer:any = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {}),
    withAuthRedirect
    )
(DialogsPage)

export default DialogPageContainer