import PropTypes from "prop-types";

/**
 * Composant d'accueil (Greeting).
 *
 * Ce composant affiche un message de bienvenue personnalisé avec le prénom de l'utilisateur
 * ainsi qu'un discours motivant. Il est conçu pour fournir une expérience utilisateur
 * chaleureuse et motivante.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.firstName - Le prénom de l'utilisateur à afficher dans le message de bienvenue.
 * @param {string} props.motivationalSpeech - Le discours motivant à afficher sous le message de bienvenue.
 *
 * @returns {JSX.Element} Le composant Greeting.
 */
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

// Déclaration des propTypes pour la validation des types des props
Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
  motivationalSpeech: PropTypes.string.isRequired,
};

export default Greeting;
