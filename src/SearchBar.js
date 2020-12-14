import React,{useState} from 'react';

const SearchBar=({handleSearch})=>{
    const [search,setSearch]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(search){
            handleSearch(search);
        }else{
            handleSearch('sinoloce');//to trigger where the search result is an empty string
        }
    }
    return( 
        <form onSubmit={handleSubmit}>
            <i className="fas fa-search" onClick={()=>handleSearch(search)}></i>
            <input type='text'value={search} onChange={({target})=>setSearch(target.value)}/>
        </form>
    )
};

export default SearchBar;