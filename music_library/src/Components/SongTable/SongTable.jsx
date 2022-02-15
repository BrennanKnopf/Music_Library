import React from 'react';

const SongTable = (props) => {

    // console.log(props.songs);

    // let mappedSongs = props.songs.map(song => {
    //     return <li>{song.title} </li>
    // })
    
        return ( 
            <div>
                <h2>Song List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Song title</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.filteredResults.map((song) => { //maps b
                            return(
                                <tr>
                                <td>{song.title}</td>
                                <td>{song.album}</td>
                                <td>{song.artist}</td>
                                <td>{song.genre}</td>
                                <td>{song.releaseDate}</td>
                                </tr>
                            )}
                            )}
                    </tbody>
                </table>
            </div>
         );
    }
     
    export default SongTable;