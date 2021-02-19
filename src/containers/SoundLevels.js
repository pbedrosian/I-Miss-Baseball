import React from 'react';
import ControlSlider from '../components/ControlSlider';

const SoundLevels = () => {
    return (
        <div>
            <ControlSlider title={'Stadium Crowed'} />
            <ControlSlider title={'Vendors'} />
            <ControlSlider title={'Pipe Organ'} />
        </div>
    );
};

export default SoundLevels;