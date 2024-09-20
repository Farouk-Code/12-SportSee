import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

/**
 * Légende personnalisée pour le graphique.
 *
 * Ce composant affiche un texte personnalisé qui montre le pourcentage de progression
 * de l'utilisateur par rapport à son objectif.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.progression - Le pourcentage de progression de l'utilisateur (exprimé sous forme de nombre entre 0 et 1).
 *
 * @returns {JSX.Element} Le composant de légende personnalisé.
 */
const CustomizedLegend = ({ progression }) => {
  return (
    <div className="goal-chart-legend">
      <p>
        <span className="goal-chart-percentage">{`${progression * 100}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  );
};

/**
 * Composant de graphique d'objectif (GoalChart).
 *
 * Ce composant affiche un graphique en secteurs représentant la progression d'un utilisateur
 * par rapport à son objectif quotidien ou global. Il utilise un diagramme en anneau (PieChart)
 * pour illustrer la partie atteinte de l'objectif et celle restante.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les données contenant le score de progression.
 * @param {number} props.data.score - Le score actuel de l'utilisateur (facultatif, utilisé si `todayScore` n'est pas disponible).
 * @param {number} props.data.todayScore - Le score du jour de l'utilisateur (facultatif, utilisé si `score` n'est pas disponible).
 *
 * @returns {JSX.Element} Le composant GoalChart.
 */
function GoalChart({ data }) {
  const progression = data.score ?? data.todayScore;
  const remainsToBeDone = 1 - progression;
  const dataGoal = [
    { name: "progression", value: progression, color: "#FF0000" },
    {
      name: "remainsToBeDone",
      value: remainsToBeDone,
      color: "transparent",
    },
  ];

  return (
    <div className="goal-chart chart-item">
      <div className="goal-chart-title">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          margin={{
            left: 5,
            top: 5,
            right: 5,
            bottom: 5,
          }}
        >
          <circle cx="50%" cy="50%" r={"25%"} fill="#FFFFFF" />
          <Pie
            data={dataGoal}
            dataKey="value"
            fill="#FF0000"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={450}
            innerRadius={"50%"}
            outerRadius={"55%"}
            cornerRadius="100%"
          >
            {dataGoal.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Legend verticalAlign="middle" content={<CustomizedLegend progression={progression} />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Déclaration des propTypes pour la validation des types des props
GoalChart.propTypes = {
  data: PropTypes.object,
};

CustomizedLegend.propTypes = {
  progression: PropTypes.number,
};

export default GoalChart;
