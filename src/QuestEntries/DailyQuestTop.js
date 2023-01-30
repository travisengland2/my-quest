import React, { useState, useEffect } from 'react';
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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #1976d2',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};


export default function DailyQuestTop() {
    const [entries, setEntries] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm');
            const data = await response.json();
            setEntries(data);
        }
        fetchData();
    }, [entries]);

    const dailyQuestEntries = entries
        .filter(entry => entry.category === 'Daily Quest')
        .sort((a, b) => b.id - a.id)
        .slice(0, 1);


    return (
        <Card >
            <CardActionArea>
                <CardContent>
                    {dailyQuestEntries.map(entry => (
                        <div key={entry.id} className="quest-entry">
                            <Typography>
                                Daily Quest
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className="quest-title">
                                {entry.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="quest-description">
                                {entry.description}
                            </Typography>
                            <Typography>
                                Points: {entry.points}
                            </Typography>
                        </div>
                    ))}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="error" startIcon={<HighlightOffIcon />} className="quit-button" onClick={handleOpen}>
                        Quit Quest
                    </Button>
                    <Button variant="contained" color="success" endIcon={<CheckCircleOutlineIcon />} className="finish-button">
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
                                <Button variant="contained" endIcon={<DeleteIcon />} color="error" button >
                                    Yes, Delete Quest!
                                </Button>

                            </Stack>
                        </Box>
                    </Modal>
                </Stack>
            </CardActions>
        </Card>
    );
}