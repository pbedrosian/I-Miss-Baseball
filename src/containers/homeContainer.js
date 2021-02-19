import React from 'react';
import Title from '../components/Title';
import SoundLevels from './SoundLevels';
import stadium from '../stadium.png'
const HomeContainer = () => {

    return (
        <div className='home'>
            <Title />
            <img src={stadium} className='stadium' />
            <SoundLevels />
        </div>
    );
};

export default HomeContainer;