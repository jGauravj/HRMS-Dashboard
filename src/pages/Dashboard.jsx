import BarChart from "@/charts/barChart";
import LineChart from "@/charts/LineChart";
import PieChart from "@/charts/pieChart";
import {
  attendanceTrend,
  departmentHeadcount,
  leaveDistribution,
} from "@/data/chartData";
import dashboardData from "@/data/dashboardData";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dashboardData.map((data) => {
          const Icon = data.icon;
          return (
            <div
              key={data.id}
              className="p-4 bg-card border shadow-xs relative rounded-lg cursor-pointer"
            >
              <Icon className="w-8 h-8" />
              <p className="sm:text-sm text-xs mt-1">{data.title}</p>
              <span className="p-1 bg-secondary rounded-full absolute right-3 top-3">
                <ArrowRight className=" -rotate-45 " size="12" />
              </span>
              <div className="flex justify-end text-3xl font-semibold light:text-neutral-700">
                {data.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* ---- Chart----- */}
      <div className="">
        <LineChart
          title="Attendance Trend"
          data={attendanceTrend}
          xAxisKey="label"
          dataKey="attendance"
          color="var(--chart-1)"
          height={350}
          className="bg-card p-4 rounded-lg shadow-sm"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <PieChart
            title="Leave Distribution"
            data={leaveDistribution}
            dataKey="value"
            nameKey="type"
            height={300}
            className="bg-card p-4 rounded-lg shadow-sm"
            colors={["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]} // Red, Blue, Green, Yellow
            showLabel={true}
          />
        </div>
        <div>
          <BarChart
            title="Department Headcount"
            data={departmentHeadcount}
            xAxisKey="department"
            dataKey="count"
            height={300}
            className="bg-card p-4 rounded-lg shadow-sm"
            colors={[
              "var(--chart-1)",
              "var(--chart-2)",
              "var(--chart-3)",
              "var(--chart-4)",
              "var(--chart-5)",
            ]}
            showGrid={false} // Grid removed as requested
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
