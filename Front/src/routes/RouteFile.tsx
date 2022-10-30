import React from 'react';
import {Route, Routes} from "react-router-dom";
import PageTemplate from "../pages/PageTemplate/PageTemplate";
import Registration from "../pages/Registration/Registration";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const RoutesConfig = {
    main: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
};

const RouteFile = () => {
    return (
        <Routes>
            <Route
                path={RoutesConfig.main}
                element={
                    <PageTemplate>
                        <MainPage />
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.signIn}
                element={
                    <PageTemplate>
                        <Registration />
                    </PageTemplate>
                }
            />
            <Route
                path={RoutesConfig.signUp}
                element={
                    <PageTemplate>
                        <LoginPage />
                    </PageTemplate>
                }
            />
        </Routes>
    );
};

export default RouteFile;