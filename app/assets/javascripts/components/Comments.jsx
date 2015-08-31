import $ from 'jquery';
import _ from 'lodash';
import React from 'react/addons';
import CSSModules from 'react-css-modules';
import Comment from './Comment';
import CommentForm from './CommentForm';
import styles from '../../stylesheets/components/comments';

const update = React.addons.update;

@CSSModules(styles)
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: props.comments}
  }

  _addComment(comment) {
    var comments = update(this.state.comments, { $push: [comment] });
    this.setState({comments: comments});
  }

  _deleteComment(comment) {
    var index = _.findIndex(this.state.comments, (c) => {
      return c.id == comment.id;
    });

    var comments = update(this.state.comments, { $splice: [[index, 1]] });
    this.setState({comments: comments});
  }

  _updateComment(comment, data) {
    var index = _.findIndex(this.state.comments, (c) => {
      return c.id == comment.id;
    });

    var comments = update(this.state.comments, { $splice: [[index, 1, data]] });
    this.setState({comments: comments});
  }

  render() {
    return (
      <div styleName="comments">
        <h2 styleName="comments__heading">Comments</h2>
        <CommentForm 
          onNewComment={::this._addComment} />
        <table styleName="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Author</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.comments.map((comment, index) => {
                return (
                  <Comment {...comment} 
                           key={comment.id} 
                           onDeleteComment={ ::this._deleteComment } 
                           onEditComment={ ::this._updateComment }
                           />
                          
                );
              })
            }
          </tbody>
        </table>
        
      </div>
    );
  }
};

Comments.propTypes = {
  comments: React.PropTypes.array,
}

Comments.defaultProps = {
  comments: [],
}

export default Comments;