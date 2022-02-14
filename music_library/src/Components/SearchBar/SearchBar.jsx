import React from 'react';






const SearchBar = (props) => {
    
    
    
    
    
    
    
    return (
        <form>
               <label>Search For Song, Artist, Album, Genre, or Release Date:</label>
                <div>
                    <input size="40" title="search" type='text' name="searchTerm"/>
                    <input type="button" value="search" type="submit" />
                </div>
            </form>

     );
}
 
export default SearchBar;