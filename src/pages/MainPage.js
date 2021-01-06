import React from 'react';
import Header from '../components/common/Header';
import main from './main.jpg';
import people from './people.png';
import strong from './strong.png';

const MainPage = () => {
    return (
        <>
            <Header />
            <div>무슨 API를 사용할래?</div>
            <img src={main} width='300' height='300' alt='corona'/>
            <img src={people} width='300' height='300' alt='corona'/>
            <img src={strong} width='300' height='300' alt='corona'/>
        </>
    );
};

export default MainPage;