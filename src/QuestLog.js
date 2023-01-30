import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DailyQuestTop from './QuestEntries/DailyQuestTop'
import DailyQuestMiddle from './QuestEntries/DailyQuestMiddle'
import DailyQuestBottom from './QuestEntries/DailyQuestBottom'
import MainQuestTop from './QuestEntries/MainQuestTop'
import MainQuestMiddle from './QuestEntries/MainQuestMiddle'
import MainQuestBottom from './QuestEntries/MainQuestBottom'
import SideQuestTop from './QuestEntries/SideQuestTop'
import SideQuestMiddle from './QuestEntries/SideQuestMiddle'
import SideQuestBottom from './QuestEntries/SideQuestBottom'



export default function QuestLog() {
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm');
            const data = await response.json();
            setEntries(data);
        }
        fetchData();
    }, [entries]);;


    return (
        <Box sx={{ flexGrow: 1 }} className="quest-log">
            <Grid container spacing={2} columns={24} direction="row"
                justifyContent="center" alignItems="flex-start">
                <Grid item xs={24} sm={12} md={8}>
                    <DailyQuestTop />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <MainQuestTop />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <SideQuestTop />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <DailyQuestMiddle />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <MainQuestBottom />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <SideQuestMiddle />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <DailyQuestBottom />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <MainQuestMiddle />
                </Grid>
                <Grid item xs={24} sm={12} md={8}>
                    <SideQuestBottom />
                </Grid>
            </Grid>
        </Box>
    );
}
