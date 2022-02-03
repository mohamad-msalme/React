import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import * as wikipedia from '../../apis/wikipedia'
import Spinner from "./Spinner";

const randomNumber = (min, max) => Math.random() * (max - min) + min;

export default function WikipadiaWidget() {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        wikipedia.search('java script').then(onSucess, onFaliure);
      }, [])

      const onSearchSubmit = () => {
        if (!search) {
          return true;
        }
        setLoading(true);
        wikipedia.search(search, {srlimit: randomNumber(10, 20)}).then(onSucess, onFaliure);
      }

      const onSucess = ({data}) => {
          debugger;
        // if(data.query.search) {
        //   const images = data.results.map((result) => ({
        //     alt: result.alt_description,
        //     id: result.id,
        //     src: result.urls.regular,
        //     height: result.height,
        //   }))
        //   setImages(images);
        // }
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
        <React.Fragment>
            <SearchBar 
                value={search} 
                label="Wikipedia Search" 
                onInputChange={setSearch} 
                onSearchSubmit={onSearchSubmit}/>
            <Spinner disabled={!loading} textLoader="Loading Images..."/>
        </React.Fragment>
    )
}