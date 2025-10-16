import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import columnsBase from "@/components/ui/columns-employee";
import DataTable from "@/components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Gaurav Jangir",
      email: "gaurav@example.com",
      department: "Frontend",
      role: "Developer",
      status: "Active",
      joiningDate: "2023-06-20",
    },
    {
      id: 2,
      name: "Paresh Sharma",
      email: "paresh@example.com",
      department: "HR",
      role: "Manager",
      status: "Inactive",
      joiningDate: "2022-01-10",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    department: "",
    role: "",
    status: "Active",
    joiningDate: "",
  });

  const filteredEmployees = employees.filter((emp) =>
    [emp.name, emp.email, emp.department].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSave = () => {
    if (!formData.name || !formData.email)
      return alert("Please fill required fields");

    if (formData.id) {
      setEmployees((prev) =>
        prev.map((e) => (e.id === formData.id ? formData : e))
      );
    } else {
      setEmployees((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    setOpenModal(false);
    setFormData({
      id: null,
      name: "",
      email: "",
      department: "",
      role: "",
      status: "Active",
      joiningDate: "",
    });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    }
  };

  const columns = [
    ...columnsBase,
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <Button
            size="xs"
            variant="outline"
            className="font-normal cursor-pointer"
            onClick={() => {
              setFormData(row.original);
              setOpenModal(true);
            }}
          >
            Edit
          </Button>
          <Button
            size="xs"
            variant="destructive"
            className="font-normal cursor-pointer"
            onClick={() => handleDelete(row.original.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="p-4 border rounded-lg bg-card shadow-sm">
        <h1 className="sm:text-xl text-lg font-semibold mb-6">
          Employee Management
        </h1>

        <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
          <Input
            type="text"
            placeholder="Search by name, email or department"
            className="rounded-md max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            size="sm"
            className="font-normal"
            onClick={() => setOpenModal(true)}
          >
            + Add Employee
          </Button>
        </div>

        <div className="overflow-x-auto">
          <DataTable columns={columns} data={filteredEmployees} />
        </div>
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {formData.id ? "Edit Employee" : "Add Employee"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-3 py-2">
            <div>
              <Label>Name</Label>
              <Input
                value={formData.name}
                className="mt-1.5"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                className="mt-1.5"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Department</Label>
              <Input
                value={formData.department}
                className="mt-1.5"
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Role</Label>
              <Input
                value={formData.role}
                className="mt-1.5"
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Joining Date</Label>
              <Input
                type="date"
                className="mt-1.5"
                value={formData.joiningDate}
                onChange={(e) =>
                  setFormData({ ...formData, joiningDate: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Status</Label>
              <select
                className="w-full border rounded-md px-2 py-1 mt-1.5"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <Button className="mt-2" onClick={handleSave}>
              {formData.id ? "Update Employee" : "Add Employee"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Employees;
