import React from 'react';
import Table from 'react-bootstrap/Table';

const SongTable = (props) => {

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
                    <td>{song.release_date}</td>
                    <button className="btn btn-danger" onClick={() => props.deleteSong(song.id)}>Delete Song</button>
                    <button className="btn btn-success" onClick={() => props.setSongToUpdate(song)}>Update Song</button>
                </tr>
            )}
            )}
        </tbody>
    </Table>
    )
    }
     
    export default SongTable;


    

