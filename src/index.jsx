import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import {Layout} from 'antd';
import "./index.css"
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#ff9000',
                },
            }}
        >
            <Router>
                <Layout>
                    <App/>
                </Layout>
            </Router>
        </ConfigProvider>
    </React.StrictMode>
);

