import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('./home').then(module => ({ default: module.HomePage })));

export const Routing = () => {

    return (
        <Routes>
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};