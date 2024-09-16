import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from "recharts";

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

const CustomCursor = ({ points, width }) => {
  const { x } = points[0];
  return <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />;
};

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
