import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { v4 } from 'uuid';
import AppContext from "../context/appContext"

const Library = () => {
  const appContext = useContext(AppContext);
  const { library, addListToLibrary } = appContext;

  const [title, setTitle] = useState('');
  const [terms, setTerms] = useState('');
  
  const addList = (e) => {
    e.preventDefault()
    const termsStrArray = terms.split(/\r?\n/g);
    const results = [];
    termsStrArray.forEach(term => {
      const result = term.trim(' ').split(':')
      console.log(result)
      results.push({
        term: result[0],
        def: result[1],
        id: v4()
      })
    })
    addListToLibrary({title, terms: results});
    // localStorage.setItem(title, JSON.stringify(terms));
    // console.log(title, terms)
    setTitle('');
    setTerms('')
  }
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeTerms = (e) => {
    setTerms(e.target.value)
  }

  return (
    <div>
      <h1>My Library ({Object.entries(library).length})</h1>
      <div className="list-group">
      {Object.keys(library).map(key => 
        <Link to={"/library/" + key} className="list-group-item" key={key}>
          <div className="fs-2">{key} <div className="badge bg-success float-right">{library[key].length} Terms</div></div>
        </Link>)
      }
      </div>
      <hr className="mt-2 mb-3"/>
      <h2>Create a New List</h2>
      <form onSubmit={addList} className="form-horizontal">
        <div className="control-group">
          <label className="control-label" htmlFor="listname">List Name</label>
          <div className="controls">
            <input type="text" id="listname" placeholder="Enter list name" onChange={onChangeTitle} value={title} required/>
          </div>
        </div>
        <br/>
        <div className="control-group">
          <label className="control-label" htmlFor="terms">Terms</label>
          <p>Add one term and corresponding definition separated by a colon per line, adhering to the format <strong>term:definition</strong></p>
          <div className="controls">
            <textarea id="terms" placeholder="Enter cards" rows="10" cols="80" onChange={onChangeTerms} value={terms} required/>
          </div>
        </div>
        <div className="control-group">
          <div className="controls">
            <button type="submit" className="btn btn-primary" disabled={title.trim() === '' || terms.trim() === ''}>Create List</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Library
