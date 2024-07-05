import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import JsonDataTable from "../components/JsonDataTable";
import DepartmentList from "../components/DepartmentList";

const SecondPage = () => {
  // Early return -> if the user details is not found in local storage
  const navigate = useNavigate();
  useEffect(() => {
    const userDetails = localStorage.getItem("user_details");
    if (!userDetails) navigate("/");
  }, []);

  return (
    <div>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Data Grid Table
      </Typography>
      <JsonDataTable />
      <div className="department_list">
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Department List
        </Typography>
        <DepartmentList />
      </div>
    </div>
  );
};

export default SecondPage;
