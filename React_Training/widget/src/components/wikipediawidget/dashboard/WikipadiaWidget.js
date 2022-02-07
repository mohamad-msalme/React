import React, { useState, useEffect } from "react";

import TextCards from "../body/TextCards";
import Header from "../header/Header";
import Spinner from "../Spinner";
import * as wikipedia from '../../../apis/wikipedia'

const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export default function WikipadiaWidget(props) {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        wikipedia.search(props.defaultSearchTearm).then(onSucess, onFaliure);
      }, [])

      const onSearchSubmit = () => {
        if (!search.trim()) {
          return true;
        }
        setLoading(true);
        wikipedia.search(search, {srlimit: randomNumber(10, 20)}).then(onSucess, onFaliure);
      }

      const onSucess = ({data}) => {
          const getResults = () => (
            data.query.search.map((result) => ({
              key: result.pageid,
              title: result.title,
              content: result.snippet
            }))
          );

          if(data.query && data.query.search) setResults(getResults());
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
            <Header 
              value={search} 
              label="" 
              onInputChange={setSearch} 
              onSearchSubmit={onSearchSubmit}
            />
            <TextCards items={results}/>
            <Spinner 
              disabled={!loading} 
              textLoader="Loading Images..."
            />
        </React.Fragment>
    )
}
WikipadiaWidget.defaultProps = {
  defaultSearchTearm: 'java script',
}