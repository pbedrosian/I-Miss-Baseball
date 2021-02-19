import React from 'react';

const Spotify = () => {
    const size = {
        width: '100%',
        height: 300,
      };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'
    return (
        <div className='player'>
            <iframe src="https://open.spotify.com/embed/playlist/5DPCbK6NHPy28SziOqmrlC" 
            width="300" height="380" frameborder="0" allowtransparency="true" 
            allow="encrypted-media">
            </iframe>       
        </div>
    );
};

export default Spotify;