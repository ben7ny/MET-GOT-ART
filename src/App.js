import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  console.log("inside MET obj", data);

  // let keys = Object.keys(data);
  // console.log("the keys", keys);

  const myList = Object.keys(data).map(key => {
    return <li>{key}</li>;
  });

  let totalObject = () => {
    let limit = 10;
    let nums = [];
    for (let i = 1; i < limit; i++) {
      nums.push(i);
    }
    return nums;
  };

  let URLfetcher = () => {
    let ids = totalObject();
    let url =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects";
    let apiAry = [];
    ids.map(id => {
      let temp = "";
      temp = url + "/" + id;
      apiAry.push(temp);
    });
    return apiAry;
  };

  let myArry = URLfetcher();
  // console.log(myArry);

  useEffect(() => {
    myArry.map(url => {
      fetch(url)
        .then(res => res.json())
        .then(json => setData(...data, json));
    });
  }, []);

  return (
    <div className="App">
      <p>{myList}</p>
      {/* {data.map((obj, i) => (
        <li>{obj[i]}</li>
      ))} */}
    </div>
  );
};

export default App;
