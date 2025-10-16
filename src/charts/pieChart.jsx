// charts/PieChart.jsx
import React from "react";
import {
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const PieChart = ({
  data,
  dataKey = "value",
  nameKey = "name",
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
  innerRadius = 0,
  outerRadius = 80,
  showLabel = false,
  showTooltip = true,
  showLegend = true,
  legendPosition = "bottom",
  title,
  cx = "50%",
  cy = "50%",
}) => {
  // Render customized label if showLabel is true
  const renderLabel = (entry) => {
    if (showLabel) {
      return `${entry[nameKey]}: ${entry[dataKey]}`;
    }
    return null;
  };

  return (
    <div className={className}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              label={renderLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "var(--border)",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                itemStyle={{
                  color: "var(--foreground)", // Add this for the data text color
                }}
              />
            )}
            {showLegend && (
              <Legend
                layout="horizontal"
                verticalAlign={legendPosition}
                align="center"
              />
            )}
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;
