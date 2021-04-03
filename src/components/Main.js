import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
//array
class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <PhotoWall posts={this.props.post} />
            </div>
          )}
        />

        {/* <Route
          exact
          path="/addPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        /> */}
      </div>
    );
  }
}
//url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

export default Main;
