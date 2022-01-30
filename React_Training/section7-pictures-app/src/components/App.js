import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import * as unsplash from '../apis/unsplash'
import Spinner from "./Spinner";

const style = { marginTop: '10px' }
const randomNumber = (min, max) => Math.random() * (max - min) + min;

export default function App() {
  /**
   * State
   */
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  /**
   * invokeuseEffect once for fetch images to improve User Experiance
   */
  useEffect(() => {
    setLoading(true);
    unsplash.loadImages('mixed').then(onSucess, onFaliure);
  }, [])
  /**
   * function to handle onSearchSubmit
   * @returns Void
   */
  const onSearchSubmit = () => {
    if (!search) {
      return true;
    }
    setLoading(true);
    unsplash.loadImages(search, {page: randomNumber(1, 100), per_page: randomNumber(10, 20)}).then(onSucess, onFaliure);
  }
  /**
   * handle Success loading images from unsplash website
   * @param {[{}]} param0 response of loading images from unsplash website
   */
  const onSucess = ({data}) => {
    if(data.results.length) {
      const images = data.results.map((result) => ({
        alt: result.alt_description,
        id: result.id,
        src: result.urls.regular,
        height: result.height,
      }))
      setImages(images);
    }
    setLoading(false);
  }
  /**
   * handle Faliure loading images from unsplash website
   * @param {} err error Object from loading images request from unsplash website
   */
  const onFaliure = (err) => {
    setLoading(false);
    alert('Somthin went wrong, Please check your internet coneection and try again');
    throw Error('Somthing wen wrong in loading images App: onSearchSubmit()');
  }

  return (
    <div className="ui container" style={style}>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          onInputChange={setSearch}
          value={search}
        />
        <ImageList images={images} />
        <Spinner disabled={!loading} textLoader="Loading Images..."/>
      </div>
  );
} 

