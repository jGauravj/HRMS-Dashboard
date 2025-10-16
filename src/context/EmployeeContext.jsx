// contexts/EmployeeContext.jsx
import React, { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      department: "Engineering",
      role: "Software Engineer",
      status: "Active",
      joiningDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@company.com",
      department: "HR",
      role: "HR Manager",
      status: "Active",
      joiningDate: "2022-08-20",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@company.com",
      department: "Engineering",
      role: "Frontend Developer",
      status: "Probation",
      joiningDate: "2024-01-10",
    },
  ]);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
    };
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...updatedEmployee, id } : emp))
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployee must be used within EmployeeProvider");
  }
  return context;
};
