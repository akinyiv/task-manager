import React from 'react';
import {BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import CreateUser from '../components/createuser';
import Users from '../components/users';
import Task from '../components/task';
import Header from '../components/header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            < Header />
            <Routes>
                <Route exact path="/" element={<Task />} />
                <Route path="/createuser" element={<CreateUser />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
