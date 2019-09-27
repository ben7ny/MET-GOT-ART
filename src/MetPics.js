import React, { Component } from "react";

class MetPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let url = "";
    for (let i = 1000; i < 1020; i++) {
      url =
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + i;

      fetch(url)
        .then(res => res.json())
        .then(json => this.setState({ data: [...this.state.data, json] }));
    }
  }

  render() {
    return (
      <>
        <h1>Pics</h1>

        <ul>
          {this.state.data.map(obj => (
            <li key={obj.objectID}>
              <img width="400" src={obj.primaryImage} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MetPics;
