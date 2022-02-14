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
  console.log(songs)
  
  

 
  
  return (
    <div>
      <TitleBar />
      <SearchBar />
      <SongList  songs={songs}/>
    </div>
  );
}

export default App;
