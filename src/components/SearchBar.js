import React, { useContext } from 'react';
import axios from 'axios';

import Context from '../store/context';
import history from '../services/history';

function SearchBar() {
  const { state, actions } = useContext(Context);
  const URL = 'http://www.mocky.io/v2/5ecc73e9320000740023614c';

  const handleSearch = (e) => {
    let q = document.querySelector('#query').value;

    if (q !== '') {
      fetchData(q)
        .then((response) => {
          actions({
            type: 'SET_PRODUCTS',
            payload: { ...state, products: response.data.products },
          });
          history.push('/results');
        })
        .catch((error) => {
          console.log('No response from API: ' + error);
        });
    }
  };

  function fetchData(query) {
    //for PoC we will not be using the query - getting back static list
    return axios.get(URL);
  }

  return (
    <div className="input-group" id="search">
      <input
        type="text"
        id="query"
        className="form-control"
        placeholder="Search..."
      />
      <span className="input-group-addon">
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => handleSearch(e)}
        >
          <i className="icon-search" aria-hidden="true"></i>
        </button>
      </span>
    </div>
  );
}

export default SearchBar;
