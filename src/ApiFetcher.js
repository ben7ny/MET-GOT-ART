import React, { useState, useEffect } from "react";

const ApiFetcher = () => {
  const urlCollector = () => {
    let temp = [];
    let url =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

    for (let i = 1; i < 20; i++) {
      temp.push(url + i);
    }

    return temp;
  };

  let URLs = urlCollector();

  const UrlRender = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(props.url)
        .then(res => res.json())
        .then(json => setData(json));
    }, []);

    return <li>{data.accessionNumber}</li>;
  };

  return (
    <>
      <ul>
        {URLs.map(url => (
          <UrlRender url={url} key={url} />
        ))}
      </ul>
    </>
  );
};

export default ApiFetcher;
