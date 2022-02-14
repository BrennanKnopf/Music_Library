import React from 'react';

const SongList = (props) => {

    console.log(props.songs);

    let mappedSongs = props.songs.map(song => {
        return <li>{song.title}, {song.artist}</li>
    })
    
    
    
    
    return ( 
        <div>
            <ul>
               {mappedSongs}
            </ul>
        </div>

     );
}
 
export default SongList;
