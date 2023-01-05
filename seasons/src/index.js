import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to this.state
    this.state = { lat: null, long: null, errorMessage: '' };
    // this.state = { long: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setstate || we did not !! this.state.lat = position coords.latitude;
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        // this.setState({ lat: position.coords.latitude ,});
        // this.setState({ long: position.coords.longitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    return (
      <div>
        Latitude: {this.state.lat} <br />
        Longitude: {this.state.long}
      </div>
    )
  }
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
