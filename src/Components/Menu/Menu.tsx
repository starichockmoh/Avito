import styles from "./Menu.module.css"
import React from "react";
import 'antd/dist/antd.css';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom'
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Store";

const { SubMenu } = Menu;

const Navbar = () => {
    const isAuth = useSelector((state:AppStateType) => state.Auth.isAuth)
    return <div className={styles.MenuText}>
        <Menu
            style={{width: 256}}
            mode="inline"
        >
            <Menu.ItemGroup key="g1" title="Menu">
                <Menu.Item key="1"><NavLink to={'/profile'}><span className={styles.MenuItem}>Profile</span></NavLink>
                </Menu.Item>
                <Menu.Item key="2"><NavLink to={'/dialogs'}><span
                    className={styles.MenuItem}>Dialogs</span></NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to={'/ads'}><span
                    className={styles.MenuItem}>Ads</span></NavLink></Menu.Item>
                <Menu.Item key="6"><NavLink to={'/createad'}><span
                    className={styles.MenuItem}>Create Ad</span></NavLink></Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3"><span className={styles.MenuItem}>Settings</span></Menu.Item>
                {isAuth && <Menu.Item key="4"><NavLink to={'/exit'}><span
                    className={styles.MenuItem}>Exit</span></NavLink></Menu.Item>}
            </Menu.ItemGroup>
        </Menu>
    </div>
}

export default Navbar