import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

const formatDay = (date) => {
  return new Date(date).getDate();
};

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

DailyActivityChart.propTypes = {
  data: PropTypes.object,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default DailyActivityChart;
