import { IconSearch } from '@tabler/icons-react'
import '../stylesheets/Search.css'

function Search() {
    
    return (
        <div className="searchContainer"  >
            <label className="srOnly">
                Search
            </label>
            <input 
                type="search" 
                placeholder="Search here..."
                aria-label="Search for content"
            />     
            <IconSearch className = "iconSearch" aria-label="Search button"/>       
        </div>    
    )
}

export default Search