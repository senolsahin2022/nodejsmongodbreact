import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

function App() {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'http://localhost:8000/api/search/key?keyword=europa',
    { results: [] },
  );

  return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch(
            `http://localhost:8000/api/search/key?keyword=${query}`,
          );

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {
            console.log(data)
          }
          {
          
          data.results.map(item => (
            <li key={item.id}>
              <p>{item.original_title}</p>
              <p>{item.overview}</p>
              <a href={item.poster_path}>{item.original_title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default App;
