// charts/BarChart.jsx
import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({
  data,
  dataKey,
  dataSeries,
  xAxisKey,
  height = 400,
  className = "",
  colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#8dd1e1",
    "#d084d0",
    "#ff8042",
    "#a4de6c",
  ],
  showGrid = false,
  showTooltip = true,
  showLegend = true,
  barSize = 40,
  title,
  margin = { top: 5, right: 30, left: 20, bottom: 5 },
}) => {
  // Validate props
  if (!dataKey && !dataSeries) {
    console.error("BarChart: Either dataKey or dataSeries must be provided");
    return null;
  }

  const renderBars = () => {
    if (dataSeries && dataSeries.length > 0) {
      return dataSeries.map((series, index) => (
        <Bar
          key={series.key || index}
          dataKey={series.dataKey}
          name={series.name}
          fill={series.color || colors[index % colors.length]}
          barSize={series.barSize || barSize}
        />
      ));
    }

    // Single bar series
    return <Bar dataKey={dataKey} fill={colors[0]} barSize={barSize} />;
  };

  return (
    <div className={className}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={margin}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "var(--border)",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              />
            )}
            {showLegend && <Legend />}
            {renderBars()}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
