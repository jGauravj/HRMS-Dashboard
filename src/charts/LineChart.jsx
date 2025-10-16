import React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const LineChart = ({
  data,
  dataKey,
  dataSeries,
  xAxisKey,
  color = "#8884d8",
  height = 300,
  className = "",
  strokeWidth = 1,
  fillOpacity = 0.4,
  gridStrokeDasharray = "3 3",
  showGrid = false,
  showTooltip = true,
  showLegend = false,
  title,
}) => {
  // Validate props
  if (!dataKey && !dataSeries) {
    console.error("AreaChart: Either dataKey or dataSeries must be provided");
    return null;
  }

  if (dataKey && dataSeries) {
    console.warn(
      "AreaChart: Both dataKey and dataSeries provided. Using dataSeries."
    );
  }

  const renderAreas = () => {
    if (dataSeries && dataSeries.length > 0) {
      return dataSeries.map((series) => (
        <Area
          key={series.key}
          type="monotone"
          dataKey={series.key}
          name={series.name}
          stroke={series.color}
          fill={series.color}
          strokeWidth={series.strokeWidth || strokeWidth}
          fillOpacity={series.fillOpacity || fillOpacity}
        />
      ));
    }

    // Single series
    return (
      <Area
        type="monotone"
        dataKey={dataKey}
        stroke={color}
        fill={color}
        strokeWidth={strokeWidth}
        fillOpacity={fillOpacity}
      />
    );
  };

  return (
    <div className={className}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -50,
              bottom: 0,
            }}
          >
            {showGrid && (
              <CartesianGrid strokeDasharray={gridStrokeDasharray} />
            )}
            <XAxis dataKey={xAxisKey} />
            <YAxis tick={false} />
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
            {renderAreas()}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
