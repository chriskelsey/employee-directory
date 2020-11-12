import React from 'react';
import './Searchbox.css';

function Searchbox(props){
    return (
        <div className="container">
        <form className="form-inline">
            <input 
                className="form-control" 
                type="search" 
                placeholder="Search" 
                name="search"
                onChange={props.handleSearchInput}
                value={props.value}
            />
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
        </div>
    )
}

export default Searchbox;