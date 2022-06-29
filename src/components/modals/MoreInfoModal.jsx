import { useState } from "react";
import "./MoreInfoModal.css";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "auto",
  width: "75%",
  maxHeight: "60%",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MoreInfoModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ margin: "0" }}
        variant="contained"
        color="secondary"
      >
        More Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style} className="text-card" variant="outlined">
          <CardContent sx={{ padding: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ol className="info-list">
                <Button
                  onClick={handleClose}
                  sx={{ display: "flex", margin: "24px auto" }}
                  variant="outlined"
                >
                  Close
                </Button>
                <li>
                  <h3>Purpose</h3>
                </li>
                <p>
                  To perform a calibration check on a pipette with automated
                  data capture and compliance documentation. The purpose of this
                  test is to check if the pipette is dispensing the same amount
                  of liquid each time.
                </p>
                <li>
                  <h3>Scope</h3>
                </li>
                <p>
                  This procedure is to be used for demonstrations of automatic
                  calibration and documentation.
                </p>
                <li>
                  <h3>Purpose</h3>
                </li>
                <p>
                  <span style={{ whiteSpace: "nowrap", marginRight: "39px" }}>
                    Pipette:{" "}
                  </span>
                  <span>
                    Pipettes are used to transfer or measure set volumes of
                    liquid.
                  </span>
                  <br />
                  <span style={{ whiteSpace: "nowrap", marginRight: "16px" }}>
                    Pipette tip:{" "}
                  </span>
                  <span>
                    Pipette tips are disposable, attachments for the uptake and
                    dispensing of liquids using a pipette.
                  </span>
                </p>
                <li>
                  <h3>Responsibilities</h3>
                </li>
                <p>N/A</p>
                <li>
                  <h3>Materials</h3>
                  <ul>
                    <li>
                      Pipettor (
                      <a
                        href="https://www.thermofisher.com/order/catalog/product/4641320N"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Link
                      </a>
                      )
                    </li>
                    <li>
                      Cubis Analysis balance (
                      <a
                        href="https://www.thermofisher.com/order/catalog/product/4641320N"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Link
                      </a>
                      )
                    </li>
                    <li>Pipette Tips</li>
                    <li>Beaker</li>
                    <li>Distilled Water</li>
                  </ul>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default MoreInfoModal;
