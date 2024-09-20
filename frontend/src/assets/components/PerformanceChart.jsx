import PropTypes from "prop-types";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const translatedKindText = {
  1: "Cardio",
  2: "Energy",
  3: "Endurance",
  4: "Strength",
  5: "Speed",
  6: "Intensity",
};

/**
 * Fonction utilitaire pour formater les données de performance.
 *
 * Cette fonction prend les données brutes et traduit les identifiants des catégories de performance
 * (par exemple, 1 = "Cardio") en texte lisible.
 *
 * @param {Object} data - Les données brutes de performance de l'utilisateur.
 * @param {Object[]} data.data - Tableau des performances par catégorie.
 * @returns {Object[]} Les données formatées avec des noms de catégories traduits.
 */
const formatPerformance = (data) => {
  return data.data.map((d) => ({
    ...d,
    kind: translatedKindText[d.kind],
  }));
};

/**
 * Composant de graphique de performance (PerformanceChart).
 *
 * Ce composant affiche un graphique radar représentant la performance de l'utilisateur
 * dans différentes catégories, telles que le cardio, l'énergie, l'endurance, etc.
 * Les données sont formatées pour afficher des noms de catégories traduits.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les données de performance de l'utilisateur.
 * @param {Object[]} props.data.data - Tableau des performances par catégorie.
 * @param {number} props.data.data[].kind - L'identifiant numérique de la catégorie de performance (1 à 6).
 * @param {number} props.data.data[].value - La valeur de la performance pour cette catégorie.
 *
 * @returns {JSX.Element} Le composant PerformanceChart.
 */
function PerformanceChart({ data }) {
  const formattedData = formatPerformance(data);

  return (
    <div className="performance-chart chart-item">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={formattedData}
          fill="#FFFFFF"
          outerRadius={"50%"}
          startAngle={30}
          endAngle={-330}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
          }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tickLine={false} tick={{ fill: "#FFFFFF", fontSize: 12 }} />
          <PolarRadiusAxis domain={[0, "dataMax + 20"]} axisLine={false} tick={false} tickLine={false} />
          <Radar dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} animationEasing={"ease-out"} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Déclaration des propTypes pour la validation des types des props
PerformanceChart.propTypes = {
  data: PropTypes.object,
};

export default PerformanceChart;
