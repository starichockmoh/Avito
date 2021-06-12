import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter, Switch, NavLink} from "react-router-dom";
import {compose} from "redux";
import {Provider} from "react-redux";
import store from "./Redux/Store";
import AdsContainer from "./Components/Ads/AdsContainer";
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';
import Navbar from "./Components/Menu/Menu";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import AdInfoContainer from "./Components/AdInfo/AdInfoContainer";
import DialogPageContainer from "./Components/Dialogs/DialogsPage/DialogsPage";
import MessagesPageContainer from "./Components/Dialogs/MessagesPage/MessagesPage";
import LoginPageContainer from "./Components/Login/LoginPage";
import CreateAddPageContainer from "./Components/CreateAdd/CreateAddPage";



class App extends React.Component<any, any> {
    render() {
        return <div>
            <div className = {"Header"}>
                <PageHeader
                    onBack={() => null}
                    title="Huito"
                    subTitle="Like Avito but Huito"
                    extra={<NavLink to = {'/login'}>Login</NavLink>}
                />
            </div>
            <div className = {"Wrapper"}>
                <div className = {'Menu'}>
                    <Navbar/>

                </div>
                <div className={'Content'}>
                    <MainContent/>
                </div>
            </div>
        </div>
    }
}

const MainContent: React.FC = () => {
    return <div>
        <Switch>
            <Route path={'/ads'} render={() => <AdsContainer/>}/>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={'/ad/:adId?'} render={() => <AdInfoContainer/>}/>
            <Route path ={'/dialogs'} render={() => <DialogPageContainer/>}/>
            <Route path={'/dialog/:dialogId?'} render={() => <MessagesPageContainer/>}/>
            <Route path={'/login'} render={() => <LoginPageContainer/>}/>
            <Route path={'/createad'} render={() => <CreateAddPageContainer/>}/>
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
