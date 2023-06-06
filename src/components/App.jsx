import { Component } from 'react';

import axios from 'axios';
import css from './App.module.css';

import { Searchbar } from '../components/Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Button } from './Button/Button';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36083710-9df5b372674412c7298f0bb13';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    searcText: '',
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.fetchData(searchText, page);

      console.log('componentDidUpdate', page);
    }
  }

  fetchData = async (searchText, page = 1) => {
    console.log(searchText, page);
    this.setState({ isLoading: true });
    try {
      const { data } = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
      );

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleButton = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  handleReset = () => {
    this.setState({ images: [] , page: 1 });
  };

  render() {
    const { isLoading, images } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSearch={this.handleSearch} onReset={this.handleReset} />
        {images.length !== 0 && <ImageGallery onImages={images} />}
        {isLoading && <Loader />}
        {images.length !== 0 && !isLoading && (
          <Button onButton={this.handleButton} />
        )}
      </div>
    );
  }
}
