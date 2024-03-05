import { Avatar, Chip } from "@mui/material";
import EnhancedTable from "../../components/common/EnhancedTable";
import Box from "@mui/material/Box";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
    align: "left",
    hasSlot: true,
      slot: (rowData, column) => (
        <div>
            <Chip
              sx={{ mr: 1, color: "#00FF26" }}
              key={rowData.name}
              label={rowData.name}
              variant="outlined"
            />
        </div>
      ),
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
    sorIsActive: true,
    align: "left",
    img: true,
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
    sorIsActive: true,
    align: "left",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
    align: "left",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
    align: "left",
  },
];

function createData(name, calories, fat, carbs, protein, img) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    img,
  };
}

const data = [
  createData("Cupcake", 305, 3.7, 67, 4.3, "src"),
  createData("Donut", 452, 25.0, 51, 4.9, "src"),
  createData("Eclair", 262, 16.0, 24, 6.0, "src"),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "src"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "src"),
  createData("Honeycomb", 408, 3.2, 87, 6.5, "src"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "src"),
  createData("Jelly Bean", 375, 0.0, 94, 0.0, "src"),
  createData("KitKat", 518, 26.0, 65, 7.0, "src"),
  createData("Lollipop", 392, 0.2, 98, 0.0, "src"),
  createData("Marshmallow", 318, 0, 81, 2.0, "src"),
  createData("Nougat", 360, 19.0, 9, 37.0, "src"),
  createData("Oreo", 437, 18.0, 63, 4.0, "src"),
];

export default function CategoriesPage() {
  return (
    <Box
      sx={{
        ml: 8,
        mr: 8,
        mt: 30,
        width: "100%",
      }}
    >
      <EnhancedTable
        paginationIsActive={true}
        isOnclickActive={false}
        columnSchema={headCells}
        source={data}
        squeeze={true}
        toolbarTitle={"First Common Table"}
        hasSlot={false}
      ></EnhancedTable>
    </Box>
  );
}
