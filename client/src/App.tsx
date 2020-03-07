import React, { useState, useEffect } from 'react';
import { Routes } from './Routes';
import { setAccessToken } from './accessToken';
import { Loading } from './components/Loading';

const REFRESH_TOKEN_ENDPOINT = 'https://apollo-bank.herokuapp.com/refresh_token';

export const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(REFRESH_TOKEN_ENDPOINT, {
            method: 'POST',
            credentials: 'include',
        }).then(async res => {
            const { accessToken } = await res.json();
            setAccessToken(accessToken);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return <Routes />;
};
