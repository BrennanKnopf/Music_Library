import React, {useState} from 'react';

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
        <form onSubmit={handleSubmit}>
               <label>Search For Song, Artist, Album, Genre, or Release Date:</label>
                <div>
                    <input title="search" type='text' name="searchTerm" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                    <input type="button" value="search" type="submit" />
                </div>
            </form>

     );
}
 
export default SearchBar;