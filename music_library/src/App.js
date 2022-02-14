import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './Components/Song_List/SongList';

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
      <h1>List of songs</h1>
      <SongList  songs={songs}/>
    </div>
  );
}

export default App;
