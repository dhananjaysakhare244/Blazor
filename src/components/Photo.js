import React, { Component } from "react";
import PropTypes from "prop-types";
class Photo extends Component {
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <img
          src={post.imageLink}
          alt={post.description}
          className="photo"
        ></img>
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => this.props.onRemovePhoto(post)}
          >
            Remove
          </button>
        </div>
      </figure>
    );
  }
}
Photo.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Photo;
