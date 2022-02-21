import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

const UpdateSongs = (props) => {
    
    // const preloadedValues = {
    //     title: props.songToUpdate.title,
    //     artist: props.songToUpdate.artist,
    //     album: props.songToUpdate.album,
    //     genre: props.songToUpdate.genre,
    //     release_date: props.songToUpdate.release_date
    // };
    const [title, setTitle] = useState(props.songToUpdate.title)
    const [artist, setArtist] = useState(props.songToUpdate.artist)
    const [album, setAlbum] = useState(props.songToUpdate.album)
    const [genre, setGenre] = useState(props.songToUpdate.genre)
    const [release_date, setRelease_date] = useState(props.songToUpdate.release_date)
    const [id, setId] = useState(props.songToUpdate.id)

    function handleSubmit(event) {
        event.preventDefault();
        let updatedSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,

        };
        console.log(updatedSong);
        updateSong(updatedSong);
        setTitle('');
        setArtist('');
        setAlbum('');
        setGenre('');
        setRelease_date('');
    }
    
    
    useEffect(() => {
        setId(props.songToUpdate.id)
      }, [props]);
    
    async function updateSong(updatedSong){
        let response = await axios.put(`http://127.0.0.1:8000/music/${id}/`, updatedSong)
        if(response.data === 201){
            await props.getAllSongs();
        }
        console.log(response)
    }
    const refreshPage = ()=>{
        window.location.reload();
     }
    return (
        <Container>
        <Form id="songForm" onSubmit={handleSubmit}>
        <Form.Group className="col-sm-offset-8 col-sm-4">
        <Form.Label>Update Song:</Form.Label>
        <Form.Control input="post" type='text' name="title" value={title} onChange={(event) => setTitle(event.target.value)} size='lg' />
        <Form.Text>Title</Form.Text>
        <Form.Control input="post" type='text' name="artist" value={artist} onChange={(event) => setArtist(event.target.value)} size='lg' />
        <Form.Text>Artist</Form.Text>
        <Form.Control input="post" type='text' name="album" value={album} onChange={(event) => setAlbum(event.target.value)} size='lg' />
        <Form.Text>Album</Form.Text>
        <Form.Control input="post" type='text' name="genre" value={genre} onChange={(event) => setGenre(event.target.value)} size='lg' /> 
        <Form.Text>Genre</Form.Text>
        <Form.Control input="post" type='text' name="release_date" value={release_date} onChange={(event) => setRelease_date(event.target.value)} size='lg' />
        <Form.Text>Release Date</Form.Text>
        </Form.Group>
        <Button type='submit' onClick={refreshPage} >Submit Update</Button>
        </Form>
    </Container>
  
     );
}
 
export default UpdateSongs;