import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

/**
 * Tooltip personnalisé pour le graphique.
 *
 * Ce composant est utilisé pour afficher un tooltip contenant le poids (en kg) et les calories brûlées
 * (en kCal) lorsque l'utilisateur survole une barre du graphique.
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
      <div className="daily-activity-chart-custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Fonction utilitaire pour formater un jour à partir d'une date.
 *
 * Cette fonction extrait le jour du mois à partir d'une chaîne de date et le retourne sous forme de nombre.
 *
 * @param {string} date - La chaîne de date à formater.
 * @returns {number} Le jour du mois extrait de la date.
 */
const formatDay = (date) => {
  return new Date(date).getDate();
};

/**
 * Composant de graphique de l'activité journalière.
 *
 * Ce composant affiche un graphique en barres représentant l'activité journalière,
 * notamment le poids en kilogrammes et les calories brûlées pour chaque jour.
 * Le graphique est responsive et comprend un tooltip personnalisé ainsi qu'une légende.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les données d'activité, incluant un tableau d'objets représentant les sessions quotidiennes.
 * @param {Object[]} props.data.sessions - Tableau contenant les sessions journalières.
 * @param {string} props.data.sessions[].day - La date de chaque session (au format ISO ou autre).
 * @param {number} props.data.sessions[].kilogram - Le poids en kilogrammes pour chaque session.
 * @param {number} props.data.sessions[].calories - Les calories brûlées lors de chaque session.
 *
 * @returns {JSX.Element} Le composant DailyActivityChart.
 */
function DailyActivityChart({ data }) {
  return (
    <div className="daily-activity-chart">
      <div className="daily-activity-chart-title">Activité journalière</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.sessions}
          barSize={7}
          barGap={8}
          margin={{
            left: 40,
            top: 25,
            right: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical="" />
          <XAxis
            dataKey="day"
            tickFormatter={formatDay}
            tickLine={false}
            tickMargin={16}
            tick={{
              stroke: "#9B9EAC",
              fontSize: 14,
              fontWeight: 500,
            }}
          />
          <YAxis axisLine={false} tickLine={false} orientation="right" />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
          <Legend iconType="circle" iconSize={8} height={80} verticalAlign="top" align="right" />
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[3.5, 3.5, 0, 0]} />
          <Bar name="Calories brulées (kCal)" dataKey="calories" fill="#E60000" radius={[3.5, 3.5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Déclaration des propTypes pour la validation des types des props
DailyActivityChart.propTypes = {
  data: PropTypes.object,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default DailyActivityChart;
