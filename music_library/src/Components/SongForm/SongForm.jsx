import React, {useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'

const SongForm = (props) => {
    
    
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [release_date, setRelease_date] = useState('')


    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,

        };
        console.log(newSong);
        props.addNewSongProperty(newSong);
        setTitle('');
        setArtist('');
        setAlbum('');
        setGenre('');
        setRelease_date('');
    }
    return ( 
        <Container>
        <Form id="songForm" onSubmit={handleSubmit}>
        <Form.Group className="col-sm-4">
            <Form.Label>Add a New Song:</Form.Label>
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
        <input type="button" value="post" type="submit" className="btn btn-info" /> 
        </Form.Group>
        </Form>
    </Container>

     );
}
 
export default SongForm;