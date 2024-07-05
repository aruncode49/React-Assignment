import { Box, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const JsonDataTable = () => {
  const [data, setData] = useState<User[]>([]);

  const getFakeData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log("Error while fetching the data!");
    }
  };

  useEffect(() => {
    getFakeData();
  }, []);

  const columns: GridColDef<User>[] = [
    { field: "id", headerName: "ID", width: 50, type: "number" },
    {
      field: "userId",
      headerName: "User ID",
      type: "number",
      width: 120,
    },
    {
      field: "title",
      headerName: "Title",
      type: "string",
      width: 300,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "body",
      headerName: "Body",
      type: "string",
      width: 600,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400 }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default JsonDataTable;
