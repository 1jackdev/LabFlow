import "./TaskCard.css";
import { useDispatch } from "react-redux";
import { markTaskAsDone } from "../features/taskTracker/tasksSlice";
import TextCardModal from "./modals/TextCardModal";

import EditIcon from "@mui/icons-material/Edit";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const TaskCard = ({ task, index }) => {
  const dispatch = useDispatch();
  let columns, rows;
  let { title, type, subSteps, graph } = task;
  if (graph) {
    columns = graph[0];
    rows = graph[1];
  }

  // we should at least have 1 checkbox or each task
  subSteps = subSteps.length ? subSteps : [title];

  const textCard = () => (
    <Card
      sx={{ backgroundColor: "lightblue" }}
      className="text-card"
      variant="outlined"
    >
      <CardContent sx={{ margin: "auto" }}>
        <TextCardModal task={task} />
        <Typography variant="h5" sx={{ maxWidth: "90%" }}>
          6.{index + 1} <span style={{ fontWeight: "900" }}>{title}</span>
        </Typography>
        <List sx={{ width: "100%", maxWidth: "90%" }}>
          {subSteps.map((step, subStepIdx) => (
            <ListItem key={subStepIdx} disablePadding>
              <ListItemIcon sx={{ maxWidth: 58 }}>
                <Checkbox
                  inputProps={{ "aria-labelledby": subStepIdx }}
                  checked={step.done}
                  onChange={() =>
                    dispatch(
                      markTaskAsDone({
                        index,
                        subStepIdx,
                      })
                    )
                  }
                />
              </ListItemIcon>
              <ListItemText
                sx={{ textAlign: "justify" }}
                id={subStepIdx}
                primary={`${subStepIdx + 1}. ${step.name}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  const graphCard = () => (
    <Card sx={{ backgroundColor: "lightyellow" }} variant="outlined">
      <CardContent>
        <Typography variant="h5">
          {index + 1}. {title}
        </Typography>
        <Button
          sx={{ margin: "16px 8px" }}
          variant="contained"
          startIcon={<EditIcon />}
        >
          Update
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((col, colIdx) => (
                  <TableCell
                    key={colIdx}
                    align={colIdx === 0 ? "center" : "right"}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIdx) => (
                <TableRow
                  key={rowIdx}
                  sx={{ borderBottom: "1px solid lightgrey" }}
                >
                  {row.map((r, cellIdx) => (
                    <TableCell
                      key={cellIdx}
                      sx={{ borderBottom: "0" }}
                      align={cellIdx === 0 ? "center" : "right"}
                    >
                      {r}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
  return (
    <div className={type === "graph" ? "graph-card" : "text-card"}>
      {type === "graph" ? graphCard() : textCard()}
    </div>
  );
};

export default TaskCard;
