import React from 'react';
import ControlSlider from '../components/ControlSlider';

const SoundLevels = () => {
    return (
        <div>
            <ControlSlider title={'Crowd Noises'} />
            <ControlSlider title={'Vendors'} />
        </div>
    );
};

export default SoundLevels;