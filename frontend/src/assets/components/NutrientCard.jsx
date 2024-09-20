import PropTypes from "prop-types";

/**
 * Composant de carte des nutriments (NutrientCard).
 *
 * Ce composant affiche une carte contenant des informations sur un nutriment spécifique,
 * notamment la quantité, le nom du nutriment, et une icône associée. Il est utilisé pour
 * représenter des données nutritionnelles comme les calories, protéines, glucides, etc.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.data - La quantité du nutriment (en grammes ou en calories).
 * @param {string} props.name - Le nom du nutriment (ex: "Calories", "Protéines").
 * @param {string} props.iconClassName - Le nom de la classe CSS pour styler l'icône.
 * @param {string} props.icon - Le chemin ou l'URL de l'image de l'icône.
 *
 * @returns {JSX.Element} Le composant NutrientCard.
 */
function NutrientCard({ data, name, iconClassName, icon }) {
  return (
    <div className="nutrient-card">
      <div className={`nutrient-card-icon ${iconClassName}`}>
        <img src={icon} alt="" />
      </div>
      <div className="nutrient-card-information">
        <p className="nutrient-card-quantity">
          {data}
          <span>{name === "Calories" ? "cal" : "g"}</span>
        </p>
        <p className="nutrient-card-name">{name}</p>
      </div>
    </div>
  );
}

// Déclaration des propTypes pour la validation des types des props
NutrientCard.propTypes = {
  data: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NutrientCard;
