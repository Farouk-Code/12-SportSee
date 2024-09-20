import PropTypes from "prop-types";

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

NutrientCard.propTypes = {
  data: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NutrientCard;
