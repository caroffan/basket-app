import './App.css';
import LoginPage from "./pages/LoginPage";

import logout from "./hooks/logout";
import {Button, Layout, Spin} from "antd";
import {Route, Switch} from "react-router-dom";
import Error404 from "./errors/Error404";
import {LoadingOutlined, LogoutOutlined} from "@ant-design/icons";

import React, {useEffect, useState} from "react";
import {PageHeader} from "@ant-design/pro-components";
import Home from "./pages/Home";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import userNotConnected from "./hooks/userNotConnected";
import { getStorage, ref } from "firebase/storage";

const {Footer, Content} = Layout;

function App() {

    const [pageTitle, setPageTitle] = useState(document.title);
    const [connected, setConnected] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => setPageTitle(document.title), [loading]);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setConnected(true);
        } else {
            // User is signed out
            setConnected(false);
        }
        setLoading(true)
    });

    function load(){
        if (loading) {
            // eslint-disable-next-line no-lone-blocks
            return (connected ? routes() : userNotConnected())
        }else {
            return (
                <div style={{display: "flex", justifyContent: "center", alignItems : "center", height : "50vh"}}>
                    <Spin indicator={antIcon}/>
                </div>
            )
        }
    }

    const nav = [
        <Button key="1" type="primary" onClick={logout}>
            <LogoutOutlined />
        </Button>
    ]

    const storage = getStorage();

// Create a storage reference from our storage service
    const storageRef = ref(storage, 'profile/20220331_085510.jpg');
    return (
        <Layout className="site-layout">
            <PageHeader
                title={pageTitle !== "React App" ? pageTitle : "Error"}
                avatar={connected ? {src: storageRef.fullPath} : null}
                onBack={() => window.history.back()}
                extra={connected ? nav : null}
                style={{
                    width : "100%",
                    position: "sticky",
                    zIndex: 1,
                    backgroundColor: "white",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                    top: 0}}
            />
            <Content style={{margin: 20, minHeight : "75vh"}}>
                <Switch>
                    <Route exact path="/">
                        <LoginPage/>
                    </Route>
                    {load()}
                    <Route>
                        <Error404/>
                    </Route>
                </Switch>
            </Content>
            <Footer style={{textAlign: "center"}}>
                BasketBall Stats ©2022 Created by Anthony Caroff
                <br/>
            </Footer>
        </Layout>

    );
}

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);
function routes() {
    return (
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route>
                <Error404/>
            </Route>
        </Switch>
    )
}

export default App;
