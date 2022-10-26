import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-6 w-11/12 mx-auto'>
                <div className='col-span-1'><LeftSideNav></LeftSideNav></div>
                <div className='col-span-3'><Outlet></Outlet></div>
                <div className='col-span-2'><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Main;