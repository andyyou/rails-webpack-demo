import React from 'react/addons';
import { format } from '../utils';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false, 
    }
  }

  _handleDelete(e) {
    e.preventDefault();
    $.ajax({
      type: 'DELETE',
      url: Routes.comment_path(this.props.id),
      dataType: 'JSON',
    }).done((data, status, xhr) => {
      this.props.onDeleteComment(this.props);
    }.bind(this));
  }

  _handleToggle(e) {
    e.preventDefault();
    this.setState({editable: !this.state.editable});
  }

  _handleEdit(e) {
    e.preventDefault();
    var data = {
      author: React.findDOMNode(this.refs.author).value,
      body: React.findDOMNode(this.refs.body).value,
    };

    $.ajax({
      type: 'PUT',
      url: Routes.comment_path(this.props.id),
      dataType: 'JSON',
      data: {
        comment: data
      }
    }).done((data, status, xhr) => {
      this.setState({editable: false});
      this.props.onEditComment(this.props, data);
    });
  }

  _renderNormalRow() {
    return (
      <tr>
        <td>{format("datetime", this.props.created_at)}</td>
        <td>{this.props.author}</td>
        <td>{this.props.body}</td>
        <td>
          <button onClick={ ::this._handleToggle }>
            Edit
          </button>
          <button onClick={ ::this._handleDelete }>
            Delete
          </button>
        </td>
      </tr>
    );
  }

  _renderEditRow() {
    return (
      <tr>
        <td>{format("datetime", this.props.created_at)}</td>
        <td>
          <input type="text" 
                 defaultValue={this.props.author}
                 ref="author" />
        </td>
        <td>
          <textarea defaultValue={this.props.body}
                    ref="body" />
        </td>
        <td>
          <button onClick={ ::this._handleEdit }>
            Update
          </button>
          <button onClick={ ::this._handleToggle }>
            Cancel
          </button>
        </td>
      </tr>
    );
  }

  render() {
    if (this.state.editable) {
      return this._renderEditRow();
    } else {
      return this._renderNormalRow();
    }
  }
};

Comment.propTypes = {
  create_at: React.PropTypes.string,
  author: React.PropTypes.string,
  body: React.PropTypes.string,
}

Comment.defaultProps = {
  create_at: '',
  author: '',
  body: '',
}

export default Comment;