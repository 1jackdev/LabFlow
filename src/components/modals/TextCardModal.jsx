import { useState } from "react";

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

const TextCardModal = ({ task }) => {
  const { title, subSteps } = task;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <Input id="title" aria-describedby="title-field" value={title} />
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
                    htmlFor={step.name}
                  >
                    {`Step ${stepIdx + 1}`}
                  </InputLabel>
                  <Input
                    id={step.name}
                    aria-describedby="title-field"
                    value={step.name}
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
                onClick={() => console.log("clicked")}
                variant="contained"
                color="success"
              >
                Update Task
              </Button>
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
