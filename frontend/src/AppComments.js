import React from 'react';

function AppComments (props) {
  return(
    <div className="App-comments comment-grid">

      <div className="g-form">
        <form className="comment-form" onSubmit={props.handleSubmit}>
          <fieldset>
            <div align="center">
            <div className="centered-form">
              <h3 className="gold-text">Comment on this article</h3>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                placeholder="Type your name"
                required
                value={props.comment.name}
                onChange={props.handleChange}
              />

              <label htmlFor="comment">Comments</label>
              <textarea
                id="comment"
                name="content"
                placeholder="Write comment here!"
                required
                value={props.comment.content}
                onChange={props.handleChange}
              />

              <label htmlFor="rating">Rate this article</label>
              <select
                id="rating"
                name="rating"
                value={props.comment.rating}
                onChange={props.handleChange}
                >
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select><br />

              <div className={props.commentWarn}>Please fill everything out before submitting, thanks!</div>
              <span id="comments"></span>

              <button type="submit" className="submit">Submit</button>
            </div>
          </div>
          </fieldset>
        </form>
      </div>

      <div className="g-comments">
        {props.comments}
        <br />
        <small>&nbsp;See all comments</small>
      </div>

    </div>
);
}

export default AppComments;
