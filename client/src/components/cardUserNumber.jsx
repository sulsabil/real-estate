/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

const Users = () => {
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/admin/getLists");
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setLists(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchLists();
  });

  const handleListingDelete = async (listId) => {
    try {
      const res = await fetch(`/api/admin/deleteList/${listId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setLists((prev) => prev.filter((list) => list._id !== listId));
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };

  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", width: 170 },
      { field: "type", headerName: "Type", width: 200 },
      {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
      },

      { field: "_id", headerName: "Id", width: 220 },
      { field: "userRef", headerName: "Posted By", width: 220 },
    ],
    [rowId]
  );

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", mb: 3 }}
      >
        Manage Lists
      </Typography>
      <DataGrid
        columns={[
          ...columns, // Your existing columns
          {
            field: "delete", // Custom field for the delete button
            headerName: "Delete",
            sortable: false,
            filterable: false,
            width: 100,
            renderCell: (lists) => (
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleListingDelete(lists.id)}
              >
                Delete
              </Button>
            ),
          },
        ]}
        rows={lists}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
      />
    </Box>
  );
};

export default Users;
