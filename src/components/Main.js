import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
//array
class Main extends Component {
  constructor() {
    super();
    console.log("ctor");
    this.state = {
      posts: [],
    };

    this.removePhoto = this.removePhoto.bind(this);
  }
  SimulateFetchFromDatabase(params) {
    return [
      {
        id: 0,
        description: "beautiful landscape",
        imageLink:
          "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg",
      },
      {
        id: 1,
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
      },
      {
        id: 2,
        description: "On a vacation!",
        imageLink:
          "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
      },
    ];
  }
  componentDidMount() {
    const data = this.SimulateFetchFromDatabase();
    this.setState({ posts: data });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.posts);
    console.log(this.state);
  }
  removePhoto(postRemoved) {
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }
  addPhoto(postSubmitted) {
    this.setState((state) => ({ posts: state.posts.concat(postSubmitted) }));
  }
  render() {
    console.log("render");
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <PhotoWall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
              />
            </div>
          )}
        />

        <Route
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
        />
      </div>
    );
  }
}
//url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

export default Main;
