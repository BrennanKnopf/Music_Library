import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

const SearchBar = (props) => {
    
   const [searchTerm, setSearchTerm] = useState('');

   function handleSubmit(event) {
       event.preventDefault();
       let newSearchTerm = '';


       setSearchTerm(newSearchTerm);
       
    console.log(searchTerm);
    props.filterSearch(searchTerm)

   }
   

  
    
    
    
    
    return (
        // <form onSubmit={handleSubmit}>
        //     <label>Search For Song, Artist, Album, Genre, or Release Date:</label>
        //         <div>
        //             <input title="search" type='text' name="searchTerm" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        //             <input type="button" value="Search" type="submit" className="btn btn-info" />
        //             <button type="button" onClick={() => props.getAllSongs()} className="btn btn-info" >Reset</button>
        //         </div>
        //     </form>
        <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Search For Song, Artist, Album, Genre, or Release Date:</Form.Label>
            <Form.Control input="search" type='text' name="searchTerm" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} size='lg' />
            <input type="button" value="Search" type="submit" className="btn btn-info" />
            <button type="button" onClick={() => props.getAllSongs()} className="btn btn-info" >Reset</button>  
            </Form.Group>
            </Form>
        </Container>
     );
}
 
export default SearchBar;