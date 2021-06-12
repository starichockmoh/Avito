import styles from "./Menu.module.css"
import React from "react";
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Navbar extends React.Component {
    handleClick = (e: any) => {
        console.log('click ', e);
    };

    render() {
        return <div className = {styles.MenuText}>
            <Menu
                style={{ width: 256 }}
                mode="inline"
            >
                    <Menu.ItemGroup key="g1" title="Menu">
                        <Menu.Item key="1"><NavLink to={'/profile'}><span className={styles.MenuItem}>Profile</span></NavLink> </Menu.Item>
                        <Menu.Item key="2"><NavLink to={'/dialogs'}><span className={styles.MenuItem}>Dialogs</span></NavLink></Menu.Item>
                        <Menu.Item key="5"><NavLink to={'/ads'}><span className={styles.MenuItem}>Ads</span></NavLink></Menu.Item>
                        <Menu.Item key="6"><NavLink to={'/createad'}><span className={styles.MenuItem}>Create Ad</span></NavLink></Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3"><span className={styles.MenuItem}>Settings</span></Menu.Item>
                        <Menu.Item key="4"><span className={styles.MenuItem}>Exit</span></Menu.Item>
                    </Menu.ItemGroup>
            </Menu>
        </div>
    }
}

export default Navbar