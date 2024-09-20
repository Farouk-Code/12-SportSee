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

const formatPerformance = (data) => {
  return data.data.map((d) => ({
    ...d,
    kind: translatedKindText[d.kind],
  }));
};

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

PerformanceChart.propTypes = {
  data: PropTypes.object,
};

export default PerformanceChart;
