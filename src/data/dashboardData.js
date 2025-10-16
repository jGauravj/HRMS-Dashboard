import {
  Building2,
  CalendarCheck,
  CalendarCheck2,
  Clock4,
  Loader,
  Users2,
  Wallet2,
} from "lucide-react";

const dashboardData = [
  {
    id: 1,
    title: "Total Employees",
    value: 125, // dummy number
    icon: Users2, // ya koi icon component use kar sakte ho
  },
  {
    id: 2,
    title: "Active Departments",
    value: 8,
    icon: Building2,
  },
  {
    id: 3,
    title: "Attendance Today",
    value: "92%", // percentage
    icon: Clock4,
  },
  {
    id: 4,
    title: "Pending Leave Requests",
    value: 5,
    icon: Loader,
  },
];

export default dashboardData;
