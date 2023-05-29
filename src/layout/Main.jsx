import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import Search from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setmovieName] = useState('');
  const [err, setErr] = useState(false);

  const handleSearch = (searchValue) => {
    setmovieName(searchValue);
  };

  useEffect(() => {
    if (movieName) {
      fetch('http://www.omdbapi.com/?apikey=1cece475&s=' + encodeURIComponent(movieName))

        .then(res => res.json())
        .then(data => {

          if (data.Response === "True") {
            setMovies(data.Search);
            setErr(false);
          } else {
            setMovies([]);
            setErr(true);
          }
        })

        .catch(error => {
          console.log('Error fetching movies:', error);
          setMovies([]);
          setErr(true);
        });
    }
  }, [movieName]);

  return (
    <Layout.Content>
      <Search onSearch={handleSearch} />
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            {err ? (
              <h1>Nothing found</h1>
            ) : movies.length ? (
              <Movies movies={movies} />
            ) : (
              <h1>Loading...</h1>
            )}
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Main;