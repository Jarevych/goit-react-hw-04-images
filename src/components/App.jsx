import React from 'react';
import { StyledAppContainer } from './App.styled';
import { fetchImages } from './api';
import { Dna } from 'react-loader-spinner';
import Modal from './Modal';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends React.Component {
  state = {
    query: null,
    page: 1,
    images: null,
    isLoading: false,
    loadMore: false,
    selectedImageUrl: null,
    selectedImageTag: null,
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.searchImage.value;
    if (inputValue) {
      this.setState({ query: inputValue, images: null, page: 1 });
      e.currentTarget.reset();
    }
  };

  handleLoadMore = async e => {
    e.preventDefault();
    try {
      const nextPage = this.state.page + 1;
      await this.setState({ page: nextPage }, async () => {});
    } catch (error) {}
  };

  fetchImagesByQuery = async () => {
    try {
      this.setState({ loadMore: false });
      this.setState({ isLoading: true });
      const searchQuery = this.state.query;
      const page = this.state.page;
      const response = await fetchImages(searchQuery, page);
      const { hits, totalHits } = response;

      this.setState(prevState => ({
        images: prevState.images ? [...prevState.images, ...hits] : hits,
        loadMore: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchImagesByQuery();
    }
  }

  openFullSize = (imageUrl, imageTag) => {
    this.setState({ selectedImageUrl: imageUrl, selectedImageTag: imageTag });
  };
  handleCloseModal = () => {
    this.setState({ selectedImageUrl: null });
  };

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <StyledAppContainer>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {this.state.isLoading && (
          <div className="spinner">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
        <ImageGallery
          images={this.state.images}
          showImages={showImages}
          openFullSize={this.openFullSize}
        />

        {this.state.loadMore && (
          <button
            className="loadbtn"
            type="button"
            onClick={this.handleLoadMore}
          >
            Load More
          </button>
        )}
        {this.state.selectedImageUrl && (
          <Modal
            imageUrl={this.state.selectedImageUrl}
            imageTag={this.state.selectedImageTag}
            onClose={this.handleCloseModal}
          />
        )}
      </StyledAppContainer>
    );
  }
}
