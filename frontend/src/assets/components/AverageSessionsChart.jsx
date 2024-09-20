import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from "recharts";

/**
 * Tooltip personnalisé pour le graphique.
 *
 * Ce composant est utilisé pour afficher un tooltip contenant la durée de la session
 * en minutes lorsque l'utilisateur survole un point du graphique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.active - Indique si le tooltip est actif (visible).
 * @param {Object[]} props.payload - Les données transmises au tooltip depuis le graphique.
 *
 * @returns {JSX.Element|null} Le contenu du tooltip ou null s'il n'est pas actif.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="average-sessions-chart-custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Curseur personnalisé pour le graphique.
 *
 * Ce composant est utilisé pour afficher un rectangle semi-transparent en tant que curseur
 * lors du survol du graphique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object[]} props.points - Tableau des points de données sur l'axe des X.
 * @param {number} props.width - La largeur du curseur.
 * @param {number} props.height - La hauteur du curseur.
 *
 * @returns {JSX.Element} Le curseur personnalisé (rectangle).
 */
const CustomCursor = ({ points, width }) => {
  const { x } = points[0];
  return <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />;
};

/**
 * Composant de graphique des sessions moyennes.
 *
 * Ce composant affiche un graphique en courbes représentant la durée moyenne des sessions
 * pour chaque jour de la semaine. Le graphique est responsive et contient un tooltip personnalisé
 * ainsi qu'un curseur personnalisé.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les données de sessions, incluant un tableau d'objets avec la longueur des sessions.
 * @param {Object[]} props.data.sessions - Tableau contenant les sessions.
 * @param {number} props.data.sessions[].sessionLength - La durée de chaque session en minutes.
 *
 * @returns {JSX.Element} Le composant AverageSessionsChart.
 */
function AverageSessionsChart({ data }) {
  const weekDays = ["L", "M", "T", "W", "T", "F", "S"];
  const formattedData = data.sessions.map((session, index) => ({
    day: weekDays[index],
    sessionLength: session.sessionLength,
  }));

  return (
    <div className="average-sessions-chart chart-item">
      <div className="average-sessions-chart-title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            left: 0,
            top: 20,
            right: 0,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ fill: "#FFFFFF", opacity: ".5" }}
            interval={"preserveStartEnd"}
          />
          <YAxis type="number" domain={["dataMin", "dataMax + 30"]} hide="true" />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} wrapperStyle={{ outline: "none" }} />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#FFFFFF",
              r: 4,
              strokeWidth: 8,
              strokeOpacity: 0.4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Déclaration des propTypes pour la validation des types des props
AverageSessionsChart.propTypes = {
  data: PropTypes.object,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AverageSessionsChart;
