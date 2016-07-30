/**
 * Created by manishgiri on 7/30/16.
 */
var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        Hello, I am a comment box!
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />, document.getElementById("content")
);
