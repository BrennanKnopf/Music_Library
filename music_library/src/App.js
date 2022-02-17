import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongTable from './Components/SongTable/SongTable';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';
import SongForm from './Components/SongForm/SongForm';
import UpdateSongForm from './Components/UpdateSongForm/UpdateSongForm';
import './App.css'

function App() {

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]); //used as the state variable to hold the filtered results 

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
    setFilteredSongs(response.data);
    }
  console.log(songs);

  function filterSearch(searchTerm){

    let filteredResults = songs.filter(song => {
      searchTerm = searchTerm.toLowerCase()
      if (song.artist.toLowerCase().includes(searchTerm)|| song.title.toLowerCase().includes(searchTerm) || song.album.toLowerCase().includes(searchTerm) || song.genre.toLowerCase().includes(searchTerm) || song.releaseDate.toLowerCase().includes(searchTerm)){
        return true;
      }
      else{
        return false;
      }
      
    })
    setFilteredSongs(filteredResults);
    
  }
  async function createSong(newSong){
    console.log(newSong)
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }


  }
  async function deleteSong(id){
    let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
    console.log(response)
    if(response.status === 204){
      await getAllSongs();
    }
    console.log(id);
  }
  // const [updatedSong, setUpdatedSong] = useState()
  // async function updateSong(id, updatedSong){
  //   let response = await axios.put(`http://127.0.0.1:8000/music/${id}/`)
  //   if(response.data === 201){
  //     await getAllSongs();
  //   }
  //   console.log(response)
  // }
  const [songToUpdate, setSongToUpdate] = useState({})
  
  return (
    <div className='mainbody'>
      <TitleBar />
      <SearchBar filterSearch={filterSearch} getAllSongs={getAllSongs}/>
      <SongForm addNewSongProperty= {createSong} />
      <UpdateSongForm getAllSongs={getAllSongs} songToUpdate={songToUpdate}/>
      <SongTable  songs={songs} filteredResults={filteredSongs} deleteSong={deleteSong} setSongToUpdate={setSongToUpdate} />
    </div>
  );
}

export default App;
