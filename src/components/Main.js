import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Single from "./Single";
//array
class Main extends Component {
  render() {
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
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        ></Route>
      </div>
    );
  }
}
//url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

export default Main;
