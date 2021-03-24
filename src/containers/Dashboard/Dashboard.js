import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchResult from '../../components/Search/SearchResult.js';
import SearchForm from '../../components/Search/SearchForm.js';
import Header from '../../components/Header/Header.js';
import {
  initiateGetResult
} from '../../store/actions/result.js';
import Loader from '../Loader/Loader.js';
import Spinner from '../../components/Spinner/Spinner.js';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('albums');
  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])

  const handleSearch = (searchTerm) => {
    setIsLoading(true);
    props.dispatch(initiateGetResult(searchTerm)).then(() => {
      setIsLoading(false);
      setSelectedCategory('albums');
    });
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums, artists, playlist } = props;
  const result = { albums, artists, playlist };

  return (
    <React.Fragment>
      <Header />
      <SearchForm handleSearch={handleSearch} />
      <Loader show={isLoading}><Spinner /></Loader>
      <SearchResult
        result={result}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist
  };
};

export default connect(mapStateToProps)(Dashboard);