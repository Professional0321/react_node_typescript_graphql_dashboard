import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import 'typeface-roboto';
import { Bye } from './pages/Bye';
import { Header } from './Header';

export const Routes: React.FC = () => {
    return (
        <>
            <Helmet>
                <style>{'body { background-color: snow; }'}</style>
            </Helmet>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/bye" component={Bye} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
};
