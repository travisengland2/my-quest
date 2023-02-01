import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '1px solid currentColor',
  boxShadow: 24,
  padding: '16px 32px 24px 32px',
  borderRadius: '8px'
});


export default function Quest(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
return (
  <Card className="task-card">
      <CardActionArea>
          <CardContent>
            <div className="header-topbar"> 
              <Typography className="category-title">{props.category}</Typography>
              <Typography gutterBottom variant="h5" className="quest-title">{props.name}</Typography>
            </div>
            <div className="info-wrapper">
              <Typography variant="body2" color="text.secondary" className="quest-description">{props.description}</Typography>
              <Typography>Points: {props.points}</Typography>
            </div>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="quest-actions">
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error" startIcon={<HighlightOffIcon />} className="quit-button" onClick={handleOpen}>
              Quit Quest
            </Button>
            <Button variant="contained" color="success" endIcon={<CheckCircleOutlineIcon />} className="finish-button" onClick={() => props.finishQuest(props.id)}>
              Finish Quest
            </Button>
           <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                  Are you sure want to delete your quest?
                </Typography>
                <Stack direction="row" spacing={2} >
                  <Button variant="outlined" color="success" startIcon={<KeyboardReturnIcon />} className="finish-button" onClick={handleClose}>
                    Nevermind
                  </Button>
                  <Button variant="contained" endIcon={<DeleteIcon />} color="error" onClick={() => props.deleteQuest(props.id)}>
                    Yes, Delete Quest!
                  </Button>
                </Stack>
              </Box>
            </Modal>
          </Stack>
        </div>
      </CardActions>
    </Card>
);
}
