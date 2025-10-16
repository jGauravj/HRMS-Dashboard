// src/data/chartData.js

// 🟩 Attendance Trend (Weekly / Monthly)
export const attendanceTrend = [
  { label: "Jan", attendance: 85 },
  { label: "Feb", attendance: 88 },
  { label: "Mar", attendance: 90 },
  { label: "Apr", attendance: 86 },
  { label: "May", attendance: 92 },
  { label: "Jun", attendance: 89 },
];

// 🟦 Leave Type Distribution (Pie Chart ke liye)
export const leaveDistribution = [
  { type: "Sick Leave", value: 12 },
  { type: "Casual Leave", value: 20 },
  { type: "Earned Leave", value: 8 },
  { type: "Maternity Leave", value: 3 },
];

// 🟧 Department-wise Headcount (Pie Chart ya Bar Chart ke liye)
export const departmentHeadcount = [
  { department: "Engineering", count: 40 },
  { department: "HR", count: 10 },
  { department: "Finance", count: 8 },
  { department: "Sales", count: 15 },
  { department: "Marketing", count: 12 },
];
