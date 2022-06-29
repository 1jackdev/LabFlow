import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../features/taskTracker/tasksSlice";

import EditIcon from "@mui/icons-material/Edit";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import List from "@mui/material/List";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "auto",
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TextCardModal = ({ task, index }) => {
  const dispatch = useDispatch();
  const { title, subSteps } = task;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(
      updateTask({
        index,
        id,
        value,
      })
    );
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ margin: "0" }}
        variant="outlined"
        startIcon={<EditIcon />}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style} className="text-card" variant="outlined">
          <CardContent sx={{ width: "100%" }}>
            <FormControl sx={{ marginTop: "12px", width: "100%" }}>
              <InputLabel
                sx={{ fontWeight: "900", fontSize: "20px", marginTop: "8px" }}
                shrink
                htmlFor="title"
              >
                Title
              </InputLabel>
              <Input
                id="title"
                aria-describedby="title-field"
                value={title}
                onChange={handleChange}
              />
            </FormControl>
            <List>
              {subSteps.map((step, stepIdx) => (
                <FormControl
                  key={stepIdx}
                  sx={{ marginTop: "32px", width: "100%" }}
                >
                  <InputLabel
                    sx={{ fontWeight: "900", marginTop: "8px" }}
                    shrink
                    htmlFor={`${stepIdx}`}
                  >
                    {`Step ${stepIdx + 1}`}
                  </InputLabel>
                  <Input
                    id={`${stepIdx}`}
                    aria-describedby="title-field"
                    value={step.name}
                    onChange={handleChange}
                  />
                </FormControl>
              ))}
            </List>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "24px",
                justifyContent: "space-around",
              }}
            >
              <Button
                onClick={handleClose}
                sx={{ margin: "0" }}
                variant="outlined"
              >
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default TextCardModal;
