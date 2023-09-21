import React from "react";
import { connect } from 'react-redux';
import { togglePunchline } from "../actions";

const JokesList = props => {
  const { jokes, dispatchTogglePunchline } = props;

  const handleHandEmojiClick = (id) => {
    dispatchTogglePunchline(id);
  }

  const isPunchlineVisible = (jokeId) => {
    const { visiblePunchlines } = props;
    return visiblePunchlines.includes(jokeId);
  };

  return (
    <div className="mainlist">
      <h2>10 Random Jokes:</h2>
      <ol>
        {jokes.map((item) => (
          <li key={item.id}>
            <strong className="opener">{item.setup}</strong>
            {/* Add onClick handler to the hand emoji */}
            <span
              role="img"
              aria-label="Hand Emoji"
              onClick={() => handleHandEmojiClick(item.id)}
            >
               👏
            </span>
            
            {isPunchlineVisible(item.id) && <ul> {item.punchline}</ul>}
          </li>
        ))}
      </ol>

      <button>More Jokes</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
    visiblePunchlines: state.visiblePunchlines, // Assuming you have this in your state
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchTogglePunchline: (id) => dispatch(togglePunchline(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JokesList);

