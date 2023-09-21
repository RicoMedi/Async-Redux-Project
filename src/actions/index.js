export const TOGGLE_PUNCHLINE = "TOGGLE_PUNCHLINE";

// Redux action creator
export const togglePunchline = (jokeId) => ({
  type: TOGGLE_PUNCHLINE,
  payload: { jokeId },
});