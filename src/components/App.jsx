import { useState } from 'react';
import { StyledAppContainer } from './App.styled';
import { fetchImages } from '../api';
import { Dna } from 'react-loader-spinner';
import Modal from './Modal/Modal';
import Searchbar from './SearchBar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { useEffect } from 'react';
import { useCallback } from 'react';

export function App() {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedImageTag, setSelectedImageTag] = useState(null);

  const handleLoadMore = async e => {
    e.preventDefault();
    try {
      const nextPage = page + 1;
      await setPage(nextPage);
    } catch (error) {}
  };

  const fetchImagesByQuery = useCallback(async () => {
    try {
      setLoadMore(false);
      setIsLoading(true);
      const searchQuery = query;
      const response = await fetchImages(searchQuery, page);
      const { hits, totalHits } = response;
      setImages(prevState => (prevState ? [...prevState, ...hits] : hits));
      setLoadMore(page < Math.ceil(totalHits / 12));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (!query) return;
    fetchImagesByQuery();
  }, [query, page, fetchImagesByQuery]);

  function openFullSize(imageUrl, imageTag) {
    setSelectedImageUrl(imageUrl);
    setSelectedImageTag(imageTag);
  }
  const handleCloseModal = () => {
    setSelectedImageUrl(null);
  };

  const showImages = Array.isArray(images) && images.length;

  return (
    <StyledAppContainer>
      <Searchbar setQuery={setQuery} setImages={setImages} setPage={setPage} />
      {isLoading && (
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
        images={images}
        showImages={showImages}
        openFullSize={openFullSize}
      />

      {loadMore && (
        <button className="loadbtn" type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {selectedImageUrl && (
        <Modal
          imageUrl={selectedImageUrl}
          imageTag={selectedImageTag}
          onClose={handleCloseModal}
        />
      )}
    </StyledAppContainer>
  );
}
