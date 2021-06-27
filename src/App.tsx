import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {AppStateType} from "./Redux/Store";
import AdsContainer from "./Components/Ads/AdsContainer";
import 'antd/dist/antd.css';
import {Avatar, PageHeader} from 'antd';
import Navbar from "./Components/Menu/Menu";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import AdInfoContainer from "./Components/AdInfo/AdInfoContainer";
import DialogPageContainer from "./Components/Dialogs/DialogsPage/DialogsPage";
import LoginPageContainer from "./Components/Login/LoginPage";
import CreateAddPageContainer from "./Components/CreateAdd/CreateAddPage";
import {Exit} from "./Components/Exit/Exit";
import {InitApp} from "./Redux/Reducers/AuthReducer";


const App = () => {
    const avatar: string =  'https://vraki.net/sites/default/files/inline/images/30_55.jpg'
    const dispatch = useDispatch()
    const isInit = useSelector((state:AppStateType) => state.Auth.init)
    useEffect(() => {
        dispatch(InitApp())
    }, [])
    const isAuth = useSelector((state:AppStateType) => state.Auth.isAuth)
    if (isInit) return <div>
        <div className={"Header"}>
            <PageHeader
                title="Huito"
                subTitle="Like Avito but Huito"
                extra={isAuth?
                    <NavLink to={'/profile'}><Avatar src={avatar}/></NavLink>
                    :<NavLink to={'/login'}>Login</NavLink>}
            />
        </div>
        <div className={"Wrapper"}>
            <div className={'Menu'}>
                <Navbar/>

            </div>
            <div className={'Content'}>
                <MainContent/>
            </div>
        </div>
    </div>
    else return <> Минуточку... </>
}

const MainContent: React.FC = () => {
    return <div>
        <Switch>
            <Route path={'/ads'} render={() => <AdsContainer/>}/>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={'/ad/:adId?'} render={() => <AdInfoContainer/>}/>
            <Route path ={'/dialogs'} render={() => <DialogPageContainer/>}/>
            {/*<Route path={'/dialog/:dialogId?'} render={() => <MessagesPageContainer/>}/>*/}
            <Route path={'/login'} render={() => <LoginPageContainer/>}/>
            <Route path={'/createad'} render={() => <CreateAddPageContainer/>}/>
            <Route path={'/exit'} render={() => <Exit/>}/>
        </Switch>
    </div>
}

const AppContainer: any = compose(
    withRouter
)(App)

const MarketApp: React.FC = () => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}


export default MarketApp;
