import React, { Component } from "react";

class ApiFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let url = "";
    for (let i = 1; i < 40; i++) {
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
        <h1>Info</h1>

        <ul>
          {this.state.data.map(obj => (
            <li key={obj.objectID}>{obj.accessionNumber}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ApiFetcher;
