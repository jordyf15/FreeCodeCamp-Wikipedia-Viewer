import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';

const App=()=>{
  const [entries,setEntries]=useState(null);

  const handleSearch=async(search)=>{
    const response=await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${search}&format=json&origin=*`)
    const {query}=await response.json();
    const entries=query.search;
    setEntries(entries);
  }

  const getRandom=()=>{
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  }

  return (
    <div>
      <h1>WIKI VIEW</h1>
      <button onClick={getRandom}>View Random Wikipedia Entry</button>
      <SearchBar handleSearch={handleSearch}/>
      {entries
      ?entries.map((entry)=>
        <div key={entry.pageid} className='entry-container' onClick={()=>window.open(`https://en.wikipedia.org/?curid=${entry.pageid}`,'_blank')}>
          <h4>{entry.title}</h4>  
          <div id={`${entry.pageid}-snippet`} className='snippet' dangerouslySetInnerHTML={{__html: entry.snippet}}></div>
        </div>
      )
      :null
      }
      {entries && entries.length===0
      ?<span id='errorMessage'>No entry related to the search query are found</span>
      :null}
    </div>
  );
};

export default App;