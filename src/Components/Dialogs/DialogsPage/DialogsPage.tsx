import React, {useEffect} from "react";
import DialogItem from "./DialogItem";
import styles from "./DialogPage.module.css"
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../Types/Types";
import {useDispatch} from "react-redux";
import {GetDialogs} from "../../../Redux/Reducers/DialogsReducer";


const DialogsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetDialogs())
    },[])
    // let DialogsItemsArray = props.Dialogs.map(d => <NavLink to={'/dialog'}><DialogItem key={d.DialogId}
    //                                                                                    Dialog={d}/></NavLink>)
    return <div className={styles.DialogsPage}>
        {/*{DialogsItemsArray}*/}
    </div>
}


export default DialogsPage