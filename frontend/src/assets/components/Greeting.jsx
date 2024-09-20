import PropTypes from "prop-types";

function Greeting({ firstName, motivationalSpeech }) {
  return (
    <>
      <h2 className="greeting">
        Hello <span className="firstname">{firstName}</span>
      </h2>
      <p className="motivational-speech">{motivationalSpeech}</p>
    </>
  );
}

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
  motivationalSpeech: PropTypes.string.isRequired,
};

export default Greeting;
