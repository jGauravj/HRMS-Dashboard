import React from "react";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`${
          row.original.status === "Active"
            ? "text-green-600 font-semibold"
            : "text-red-500 font-semibold"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "joiningDate",
    header: "Joining Date",
  },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => (
  //     <div className="space-x-2">
  //       <button className="text-blue-600 hover:underline">Edit</button>
  //       <button className="text-red-600 hover:underline">Delete</button>
  //     </div>
  //   ),
  // },
];

export default columns;
