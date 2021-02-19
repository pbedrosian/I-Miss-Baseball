import React from 'react';
import ControlSlider from '../components/ControlSlider';

const SoundLevels = () => {
    return (
        <div>
            <ControlSlider title={'Stadium Crowd'} />
            <ControlSlider title={'Cheering Fans'} />
            <ControlSlider title={'Vendors'} />
            <ControlSlider title={'Pipe Organ'} />
        </div>
    );
};

export default SoundLevels;