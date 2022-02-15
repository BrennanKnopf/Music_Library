import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './Components/SongTable/SongTable';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
    }
  console.log(songs);

  function filterSearch(searchTerm){

    const [filteredResults, setFilteredResults] = useState([])
    filteredResults = songs.filter(song => {
      if (song.artist === searchTerm || song.title === searchTerm || song.album === searchTerm || song.genre === searchTerm || song.releaseDate === searchTerm){
        return true;
      }
      else{
        return false;
      }
      
    })
    return setFilteredResults(filteredResults);
    
  }
  

 
  
  return (
    <div>
      <TitleBar />
      <SearchBar filterSearch={filterSearch}/>
      <SongList  songs={songs} filteredResults={filteredResults}/>
    </div>
  );
}

export default App;
