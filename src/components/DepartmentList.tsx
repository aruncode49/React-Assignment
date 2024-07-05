import { useState } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentList = () => {
  // sample data
  const departments: Department[] = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  //   state to manage open/close and selected values
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSubDepartments = (index: number) => {
    setOpen({ ...open, [index]: !open[index] });
  };

  console.log(selected); // log the selected values in console

  const handleDepartmentSelect = (department: Department) => {
    const isSelected = selected.includes(department.department);
    let newSelected: string[];

    if (isSelected) {
      newSelected = selected.filter(
        (dep) =>
          dep !== department.department &&
          !department.sub_departments.includes(dep)
      );
    } else {
      newSelected = [
        ...selected,
        department.department,
        ...department.sub_departments,
      ];
    }

    setSelected(newSelected);
  };

  const handleSubDepartmentSelect = (
    department: Department,
    subDepartment: string
  ) => {
    const isSelected = selected.includes(subDepartment);
    const newSelected = isSelected
      ? selected.filter((dep) => dep !== subDepartment)
      : [...selected, subDepartment];

    const allSubDepartmentsSelected = department.sub_departments.every(
      (subDep) => newSelected.includes(subDep)
    );
    const updatedSelected = allSubDepartmentsSelected
      ? [...newSelected, department.department]
      : newSelected.filter((dep) => dep !== department.department);

    setSelected(updatedSelected);
  };

  return (
    <List>
      {departments.map((dept, index) => (
        <div key={dept.department}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                checked={selected.includes(dept.department)}
                onChange={() => handleDepartmentSelect(dept)}
              />
            </ListItemIcon>
            <ListItemText primary={dept.department} />
            <IconButton
              sx={{ backgroundColor: "#D6EFD8" }}
              edge="end"
              onClick={() => toggleSubDepartments(index)}
            >
              {open[index] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <List sx={{ paddingLeft: "30px" }} component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <ListItem key={subDept} button>
                  <ListItemIcon>
                    <Checkbox
                      checked={selected.includes(subDept)}
                      onChange={() => handleSubDepartmentSelect(dept, subDept)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
