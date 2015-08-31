import $ from 'jquery';
import React from 'react/addons';
import CSSModules from 'react-css-modules';
import styles from '../../stylesheets/components/comment_form';

@CSSModules(styles)
class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.author,
      body: props.body,
    }
  }

  _valid() {
    return this.state.author && this.state.body;
  }

  _handleChange(e) {
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  _handleSubmit(e) {
    e.preventDefault();
    $.post('', 
      {
        comment: this.state,
      }, function (data) {
        this.props.onNewComment(data);
        this.setState({author: '', body: ''});
      }.bind(this), 
    'JSON');

    // $.ajax({
    //   type: 'POST',
    //   url: '',
    //   dataType: 'json',
    //   data: {
    //     comment: this.state,
    //   }
    // }).done(function (data, status, xhr) {
    //   this.props.onNewComment(data);
    // }.bind(this));
  }

  render() {
    return (
      <form onSubmit={::this._handleSubmit} styleName="form">
        <div styleName="field">
          <input type='text'
                 name='author' 
                 placeholder="Your name" 
                 value={this.state.author} 
                 onChange={::this._handleChange} />
        </div>
        <div styleName="field">
          <input type="text"
                 name="body"
                 placeholder="Type comment" 
                 value={this.state.body}
                 onChange={::this._handleChange} />
        </div>
        <div styleName="field">
          <button type='submit' disabled={!this._valid()}>Comment</button>
        </div>
      </form>
    );
  }
};

CommentForm.propTypes = {
  author: React.PropTypes.string,
  body: React.PropTypes.string,
}

CommentForm.defaultProps = {
  author: '',
  body: '',
}

export default CommentForm;