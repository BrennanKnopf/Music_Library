import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongTable from './Components/SongTable/SongTable';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'

function App() {

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]); //used as the state variable to hold the filtered results 

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
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
  
 
 
  
  return (
    <div className='mainbody'>
      <TitleBar />
      <SearchBar filterSearch={filterSearch} getAllSongs={getAllSongs}/>
      <SongTable  songs={songs} filteredResults={filteredSongs}/>
    </div>
  );
}

export default App;
