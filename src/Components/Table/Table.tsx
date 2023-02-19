import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { getAllUsers } from "../../Data/ModifyData";
import "./style.scss";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "type", headerName: "User Type", width: 100 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
];

export default function DataTable() {
  return (
    <div
      className="Table"
      style={{
        height: 400,
        width: "100%",
        color: "white",
        borderColor: "white",
      }}
    >
      <h3>All Users:</h3>

      <DataGrid
        style={{
          color: "white",
          borderColor: "white",
          backgroundColor: "#271d52",
        }}
        rows={getAllUsers().map((e: any, index: number) => ({
          ...e,
          id: index + 1,
        }))}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        pagination
        autoHeight
      />
    </div>
  );
}
