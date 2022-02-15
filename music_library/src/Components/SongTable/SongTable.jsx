import React from 'react';
import Table from 'react-bootstrap/Table';

const SongTable = (props) => {

    // console.log(props.songs);

    // let mappedSongs = props.songs.map(song => {
    //     return <li>{song.title} </li>
    // })
    
        // return ( 
        //     <div>
        //         <h2>Song List</h2>
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th>Song title</th>
        //                     <th>Album</th>
        //                     <th>Artist</th>
        //                     <th>Genre</th>
        //                     <th>Release Date</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {props.filteredResults.map((song) => { //maps b
        //                     return(
        //                         <tr>
        //                         <td>{song.title}</td>
        //                         <td>{song.album}</td>
        //                         <td>{song.artist}</td>
        //                         <td>{song.genre}</td>
        //                         <td>{song.releaseDate}</td>
        //                         </tr>
        //                     )}
        //                     )}
        //             </tbody>
        //         </table>
        //     </div>
        //  );
    
    return(
    <Table striped bordered hover variant="dark">
        <thead>
            <h1>Song List</h1>
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
    </Table>
    )
    }
     
    export default SongTable;


    

