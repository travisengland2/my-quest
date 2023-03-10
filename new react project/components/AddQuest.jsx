import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import SaveAsIcon from '@mui/icons-material/SaveAs';

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1976d2"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1976d2"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0d47a1"
    },
    "&:hover fieldset": {
      borderColor: "#2196f3"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2"
    }
  }
});

const CssFormControl = styled(FormControl)({
  "& label.Mui-focused": {
    color: "#1976d2"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1976d2"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0d47a1"
    },
    "&:hover fieldset": {
      borderColor: "#2196f3"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2"
    }
  }
});

const QuestPoints = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1976d2"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1976d2"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0d47a1"
    },
    "&:hover fieldset": {
      borderColor: "#2196f3"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2"
    }
  }
});

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  border: "1px solid currentColor",
  boxShadow: 24,
  padding: "16px 32px 24px 32px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
});

export default function TemporaryModal(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleClick = () => {
    props.createNewQuest();
    setOpen(false);
    props.setDate(undefined);
    props.setStatus('incomplete');
  };

  const list = (anchor) => (
    <Box role="presentation" sx={style}>
     <div className="modal-header">
        <IconButton onClick={handleClose} className="close-button">
          <CloseIcon />
        </IconButton>
      </div>
      <div className="modal-body">
        <div className="form-card">
          <div className="form-card-header">
            <Typography
              variant="h5"
              gutterBottom
              sx={{ ml: 1, color: "#1976d2" }}
            >
              A New Quest
            </Typography>
          </div>
          <form className="new-quest-form">
            <CssTextField
              label="Quest Name"
              id="custom-css-outlined-input"
              onChange={(event) => props.setName(event.target.value)}
              required
              sx={{ m: 1, width: 300 }}
            />
            <CssTextField
              id="outlined-multiline-flexible"
              label="Quest Description"
              multiline
              maxRows={4}
              onChange={(event) => props.setDescription(event.target.value)}
              sx={{ m: 1, mb: 2, width: 300 }}
            />
            <CssFormControl className="form-control" sx={{ m: 1, mb: 2, width: 300}}>
              <InputLabel id="demo-simple-select-label">
                Quest Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                defaultValue=''
                id="demo-simple-select"
                onChange={(event) => props.setCategory(event.target.value)}
                input={<OutlinedInput label="Quest Category" />}
              >
                <MenuItem value={"Daily Quest"}>Daily Quest</MenuItem>
                <MenuItem value={"Main Quest"}>Main Quest</MenuItem>
                <MenuItem value={"Side Quest"}>Side Quest</MenuItem>
              </Select>
            </CssFormControl>
            <QuestPoints
              label="Quest Points"
              id="outlined-number"
              min="1"
              max="100"
              type="number"
              onChange={(event) => props.setPoints(event.target.value)}
              required
              sx={{ m: 1, mb: 2, width: 300 }}
            />
        </form>
        </div>
      </div>
      <div className="modal-footer">
      <Button variant="contained" endIcon={<SaveAsIcon />} onClick={handleClick}  sx={{ m:1, width: 300, height: 50}}>
        Save New Quest
      </Button>
      </div>
    </Box>
  );

  return (
    <div className="addtask-button">
      <React.Fragment key={"right"}>
        <Button variant="text" onClick={handleOpen} color="primary" className="add-quest">
          Add Quest
        </Button>
        <Modal
          className="modal"
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          anchor={"right"}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
        >
          {list("right")}
        </Modal>
      </React.Fragment>
    </div>
  );
}
