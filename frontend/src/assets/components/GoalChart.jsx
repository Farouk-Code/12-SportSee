import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

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

GoalChart.propTypes = {
  data: PropTypes.object,
};

CustomizedLegend.propTypes = {
  progression: PropTypes.number,
};

export default GoalChart;
