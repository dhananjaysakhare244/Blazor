import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
//array
class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          exact
          path="/addPhoto"
          render={() => <AddPhoto {...this.props} />}
        />
      </div>
    );
  }
}
//url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

export default Main;
