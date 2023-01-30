import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function DailyQuestMiddle() {
    const [entries, setEntries] = useState([]);
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
        .slice(1, 2);
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
                    <Button variant="outlined" color="error" startIcon={<HighlightOffIcon />}>
                        Quit Quest
                    </Button>
                    <Button variant="contained" color="success" endIcon={<CheckCircleOutlineIcon />}>
                        Finish Quest
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    );
}