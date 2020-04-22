import React, { Component } from "react";

export class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer">
          <a
            // HREF TO BE CHANGED
            href="http://www.google.com"
            className="comment-footer-delete"
            onClick={this._deleteComment}
          >
            Delete Comment
          </a>
        </div>
      </div>
    );
  }
  _deleteComment() {
    alert('"Delete Comment" not yet functional.');
  }
}

export default Comment;
